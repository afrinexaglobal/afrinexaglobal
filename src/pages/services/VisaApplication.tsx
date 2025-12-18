import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  passportNumber: string;
  passportExpiry: string;
  visaType: string;
  travelDate?: string;
  duration?: string;
  purpose?: string;
  employerName?: string;
  university?: string;
};

export default function VisaApplication() {
  const { register, handleSubmit, watch, reset } = useForm<FormValues>();
  const { toast } = useToast();
  const visaType = watch("visaType");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/mwveenwg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      toast({ title: "Application received", description: "We received your visa application. Our team will be in touch." });
      reset();
    } catch (err) {
      toast({ title: "Submission failed", description: "Please try again later." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Visa Application | Afrinexa Global Limited</title>
        <meta name="description" content="Submit your visa application to Afrinexa. Complete the dynamic form and our team will follow up." />
      </Helmet>
      <Header />
      <main className="pt-40 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
              <h1 className="font-display text-3xl font-bold mb-2">Visa Application</h1>
              <p className="text-muted-foreground mb-6">Complete the form below and our visa specialists will contact you to proceed.</p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input {...register("fullName", { required: true })} placeholder="Full name" className="px-4 py-3 rounded-lg border border-border w-full" />
                  <input {...register("email", { required: true })} type="email" placeholder="Email" className="px-4 py-3 rounded-lg border border-border w-full" />
                  <input {...register("phone", { required: true })} placeholder="Phone" className="px-4 py-3 rounded-lg border border-border w-full" />
                  <input {...register("nationality", { required: true })} placeholder="Nationality" className="px-4 py-3 rounded-lg border border-border w-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input {...register("passportNumber", { required: true })} placeholder="Passport number" className="px-4 py-3 rounded-lg border border-border w-full" />
                  <input {...register("passportExpiry", { required: true })} type="date" placeholder="Passport expiry" className="px-4 py-3 rounded-lg border border-border w-full" />
                  <select {...register("visaType", { required: true })} className="px-4 py-3 rounded-lg border border-border w-full">
                    <option value="">Select visa type</option>
                    <option value="visiting">Visiting</option>
                    <option value="study">Study</option>
                    <option value="work">Work</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input {...register("travelDate")} type="date" placeholder="Preferred travel date" className="px-4 py-3 rounded-lg border border-border w-full" />
                  <input {...register("duration")} placeholder="Duration (e.g., 3 months)" className="px-4 py-3 rounded-lg border border-border w-full" />
                </div>

                <textarea {...register("purpose")} placeholder="Purpose / Additional details" className="w-full px-4 py-3 rounded-lg border border-border" />

                {visaType === "work" && (
                  <div className="p-4 rounded-lg bg-muted/20 border border-border">
                    <h4 className="font-semibold mb-2">Work visa details</h4>
                    <input {...register("employerName")} placeholder="Employer name (if known)" className="px-4 py-3 rounded-lg border border-border w-full" />
                  </div>
                )}

                {visaType === "study" && (
                  <div className="p-4 rounded-lg bg-muted/20 border border-border">
                    <h4 className="font-semibold mb-2">Study visa details</h4>
                    <input {...register("university")} placeholder="University / Course" className="px-4 py-3 rounded-lg border border-border w-full" />
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <Button type="submit" variant="heroGold" size="lg" disabled={submitting}>{submitting ? "Submitting..." : "Submit Application"}</Button>
                  <Button type="button" variant="outline" onClick={() => reset()}>Reset</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
