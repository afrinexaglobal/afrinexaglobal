import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/logo.png";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user, isAdmin, loading: authLoading, signIn, signOut } = useAuth();

  useEffect(() => {
    if (!authLoading && user && isAdmin) {
      navigate("/dashboard");
    }
  }, [user, isAdmin, authLoading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await signIn(email, password);

      if (error) {
        toast.error(error.message || "Invalid credentials");
        return;
      }

      // Get fresh user session immediately after sign in
      const { data: { user: freshUser }, error: userError } = await supabase.auth.getUser();
      if (userError || !freshUser) {
        throw new Error("Failed to verify user session");
      }

      // Check admin role immediately - no delay
      const { data: isAdminUser, error: roleError } = await supabase.rpc("has_role", {
        _user_id: freshUser.id,
        _role: "admin"
      });

      if (roleError) {
        throw new Error("Failed to verify admin role");
      }

      if (isAdminUser) {
        toast.success("Welcome back!");
        navigate("/dashboard");
      } else {
        toast.error("Access denied. Admin privileges required.");
        await signOut();
      }
    } catch (error) {
      // Auth errors are not logged to console in production for security
      toast.error("Authentication failed. Please try again.");
      await signOut();
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login | Afrinexa Global Limited</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen gradient-hero flex items-center justify-center p-4 pt-32 lg:pt-[160px]">
        <div className="w-full max-w-md">
          {/* Glass Card */}
          <div className="bg-card/95 backdrop-blur-xl rounded-2xl border border-border shadow-2xl p-8 lg:p-10">
            <div className="text-center mb-8">
              <img src={logo} alt="Afrinexa" className="h-16 mx-auto mb-4" />
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-gold" />
              </div>
              <h1 className="font-display text-2xl font-bold text-foreground">Admin Portal</h1>
              <p className="text-muted-foreground text-sm mt-2">Authorized personnel only</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full px-4 py-3 pr-12 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <Button type="submit" variant="gold" size="lg" className="w-full" disabled={loading}>
                {loading ? "Signing in..." : "Access Dashboard"} <ArrowRight className="w-4 h-4" />
              </Button>
            </form>

            <p className="text-center text-xs text-muted-foreground mt-6">
              This area is restricted. Unauthorized access attempts are logged.
            </p>
          </div>

          <p className="text-center text-primary-foreground/60 text-sm mt-8">
            <a href="/" className="hover:text-gold transition-colors">← Back to main site</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
