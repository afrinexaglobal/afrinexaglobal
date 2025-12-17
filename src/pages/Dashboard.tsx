import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Inbox,
  LogOut,
  Plus,
  Edit2,
  Trash2,
  Check,
  X,
  Eye,
  Sparkles,
} from "lucide-react";
import logo from "@/assets/logo.png";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  status: string;
  created_at: string;
}

interface Comment {
  id: string;
  post_id: string;
  name: string;
  email: string;
  comment: string;
  approved: boolean;
  created_at: string;
}

interface FormSubmission {
  id: string;
  form_type: string;
  payload: unknown;
  created_at: string;
}

type Tab = "overview" | "posts" | "comments" | "submissions" | "create";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, isAdmin, loading: authLoading, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  // Create post form
  const [newPost, setNewPost] = useState({
    title: "",
    slug: "",
    category: "Education",
    content: "",
    excerpt: "",
    status: "draft",
  });
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate("/adminlogin");
    }
  }, [user, isAdmin, authLoading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchData();
    }
  }, [user, isAdmin]);

  const fetchData = async () => {
    setLoading(true);

    // Fetch posts (admin can see all)
    const { data: postsData } = await supabase
      .from("blog_posts")
      .select("id, title, slug, category, status, created_at")
      .order("created_at", { ascending: false });

    if (postsData) setPosts(postsData);

    // Fetch all comments for admin
    const { data: commentsData } = await supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: false });

    if (commentsData) setComments(commentsData);

    // Fetch form submissions
    const { data: submissionsData } = await supabase
      .from("form_submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (submissionsData) setSubmissions(submissionsData);

    setLoading(false);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/adminlogin");
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) {
      toast.error("Failed to delete post");
    } else {
      toast.success("Post deleted");
      setPosts(posts.filter((p) => p.id !== id));
    }
  };

  const handleTogglePostStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === "published" ? "draft" : "published";
    const { error } = await supabase
      .from("blog_posts")
      .update({ status: newStatus })
      .eq("id", id);

    if (error) {
      toast.error("Failed to update post status");
    } else {
      toast.success(`Post ${newStatus === "published" ? "published" : "unpublished"}`);
      setPosts(posts.map((p) => (p.id === id ? { ...p, status: newStatus } : p)));
    }
  };

  const handleApproveComment = async (id: string, approved: boolean) => {
    const { error } = await supabase.from("comments").update({ approved }).eq("id", id);

    if (error) {
      toast.error("Failed to update comment");
    } else {
      toast.success(approved ? "Comment approved" : "Comment rejected");
      setComments(comments.map((c) => (c.id === id ? { ...c, approved } : c)));
    }
  };

  const handleDeleteComment = async (id: string) => {
    if (!confirm("Delete this comment?")) return;

    const { error } = await supabase.from("comments").delete().eq("id", id);
    if (error) {
      toast.error("Failed to delete comment");
    } else {
      toast.success("Comment deleted");
      setComments(comments.filter((c) => c.id !== id));
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();

    const slug = newPost.slug || generateSlug(newPost.title);
    const readTime = `${Math.ceil(newPost.content.split(" ").length / 200)} min read`;

    const { error } = await supabase.from("blog_posts").insert({
      title: newPost.title,
      slug,
      category: newPost.category,
      content: newPost.content,
      excerpt: newPost.excerpt,
      status: newPost.status,
      read_time: readTime,
    });

    if (error) {
      toast.error("Failed to create post: " + error.message);
    } else {
      toast.success("Post created successfully!");
      setNewPost({ title: "", slug: "", category: "Education", content: "", excerpt: "", status: "draft" });
      fetchData();
      setActiveTab("posts");
    }
  };

  const handleAIAssist = async (type: "outline" | "expand" | "headline") => {
    setAiLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("blog-ai-assist", {
        body: { type, title: newPost.title, content: newPost.content },
      });

      if (error) throw error;

      if (type === "outline") {
        setNewPost({ ...newPost, content: data.content });
      } else if (type === "expand") {
        setNewPost({ ...newPost, content: data.content });
      } else if (type === "headline") {
        setNewPost({ ...newPost, title: data.title, excerpt: data.excerpt });
      }

      toast.success("AI suggestion applied!");
    } catch (error) {
      toast.error("AI assistance failed. Please try again.");
    }

    setAiLoading(false);
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-gold border-t-transparent rounded-full" />
      </div>
    );
  }

  const pendingComments = comments.filter((c) => !c.approved).length;

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Afrinexa Global Limited</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background flex">
        {/* Sidebar */}
        <aside className="w-64 bg-card border-r border-border p-6 flex flex-col">
          <img src={logo} alt="Afrinexa" className="h-12 mb-8" />

          <nav className="space-y-2 flex-1">
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === "overview" ? "bg-gold/10 text-gold" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              Overview
            </button>
            <button
              onClick={() => setActiveTab("posts")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === "posts" ? "bg-gold/10 text-gold" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <FileText className="w-5 h-5" />
              Blog Posts
            </button>
            <button
              onClick={() => setActiveTab("comments")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === "comments" ? "bg-gold/10 text-gold" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              Comments
              {pendingComments > 0 && (
                <span className="ml-auto bg-destructive text-destructive-foreground text-xs px-2 py-0.5 rounded-full">
                  {pendingComments}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab("submissions")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === "submissions" ? "bg-gold/10 text-gold" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <Inbox className="w-5 h-5" />
              Form Submissions
            </button>
            <button
              onClick={() => setActiveTab("create")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === "create" ? "bg-gold/10 text-gold" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <Plus className="w-5 h-5" />
              Create Post
            </button>
          </nav>

          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors mt-auto"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeTab === "overview" && (
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground mb-8">Dashboard Overview</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card rounded-xl border border-border p-6">
                  <FileText className="w-8 h-8 text-gold mb-4" />
                  <p className="text-3xl font-bold text-foreground">{posts.length}</p>
                  <p className="text-muted-foreground">Total Posts</p>
                </div>
                <div className="bg-card rounded-xl border border-border p-6">
                  <MessageSquare className="w-8 h-8 text-gold mb-4" />
                  <p className="text-3xl font-bold text-foreground">{comments.length}</p>
                  <p className="text-muted-foreground">Total Comments</p>
                  {pendingComments > 0 && (
                    <p className="text-sm text-destructive mt-2">{pendingComments} pending approval</p>
                  )}
                </div>
                <div className="bg-card rounded-xl border border-border p-6">
                  <Inbox className="w-8 h-8 text-gold mb-4" />
                  <p className="text-3xl font-bold text-foreground">{submissions.length}</p>
                  <p className="text-muted-foreground">Form Submissions</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "posts" && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h1 className="font-display text-3xl font-bold text-foreground">Blog Posts</h1>
                <Button variant="gold" onClick={() => setActiveTab("create")}>
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Post
                </Button>
              </div>
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left px-6 py-4 text-sm font-medium text-foreground">Title</th>
                      <th className="text-left px-6 py-4 text-sm font-medium text-foreground">Category</th>
                      <th className="text-left px-6 py-4 text-sm font-medium text-foreground">Status</th>
                      <th className="text-left px-6 py-4 text-sm font-medium text-foreground">Date</th>
                      <th className="text-right px-6 py-4 text-sm font-medium text-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((post) => (
                      <tr key={post.id} className="border-t border-border">
                        <td className="px-6 py-4 text-foreground">{post.title}</td>
                        <td className="px-6 py-4 text-muted-foreground">{post.category}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              post.status === "published"
                                ? "bg-green-500/10 text-green-500"
                                : "bg-yellow-500/10 text-yellow-500"
                            }`}
                          >
                            {post.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground text-sm">
                          {new Date(post.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
                              <Button variant="ghost" size="sm">
                                <Eye className="w-4 h-4" />
                              </Button>
                            </a>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleTogglePostStatus(post.id, post.status)}
                            >
                              {post.status === "published" ? <X className="w-4 h-4" /> : <Check className="w-4 h-4" />}
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleDeletePost(post.id)}>
                              <Trash2 className="w-4 h-4 text-destructive" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "comments" && (
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground mb-8">Comments</h1>
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="bg-card rounded-xl border border-border p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-foreground">{comment.name}</p>
                        <p className="text-sm text-muted-foreground">{comment.email}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {!comment.approved && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleApproveComment(comment.id, true)}
                          >
                            <Check className="w-4 h-4 text-green-500" />
                          </Button>
                        )}
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteComment(comment.id)}>
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-3">{comment.comment}</p>
                    <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                      <span>{new Date(comment.created_at).toLocaleDateString()}</span>
                      <span
                        className={`px-2 py-0.5 rounded-full ${
                          comment.approved ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"
                        }`}
                      >
                        {comment.approved ? "Approved" : "Pending"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "submissions" && (
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground mb-8">Form Submissions</h1>
              <div className="space-y-4">
                {submissions.map((submission) => (
                  <div key={submission.id} className="bg-card rounded-xl border border-border p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium">
                        {submission.form_type}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {new Date(submission.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <pre className="text-sm text-muted-foreground bg-muted p-4 rounded-lg overflow-auto">
                      {JSON.stringify(submission.payload, null, 2)}
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "create" && (
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground mb-8">Create New Post</h1>
              <form onSubmit={handleCreatePost} className="space-y-6 max-w-4xl">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Post Title</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                      value={newPost.title}
                      onChange={(e) => setNewPost({ ...newPost, title: e.target.value, slug: generateSlug(e.target.value) })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">URL Slug</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                      value={newPost.slug}
                      onChange={(e) => setNewPost({ ...newPost, slug: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                      value={newPost.category}
                      onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                    >
                      <option value="Education">Education</option>
                      <option value="Trade">Trade</option>
                      <option value="Talent">Talent</option>
                      <option value="Immigration">Immigration</option>
                      <option value="Career">Career</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Status</label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                      value={newPost.status}
                      onChange={(e) => setNewPost({ ...newPost, status: e.target.value })}
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Excerpt</label>
                  <textarea
                    rows={2}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Brief description of the post..."
                    value={newPost.excerpt}
                    onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-foreground">Content (HTML)</label>
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleAIAssist("outline")}
                        disabled={aiLoading || !newPost.title}
                      >
                        <Sparkles className="w-4 h-4 mr-1" />
                        Generate Outline
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleAIAssist("expand")}
                        disabled={aiLoading || !newPost.content}
                      >
                        <Sparkles className="w-4 h-4 mr-1" />
                        Expand Content
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleAIAssist("headline")}
                        disabled={aiLoading || !newPost.content}
                      >
                        <Sparkles className="w-4 h-4 mr-1" />
                        Suggest Headlines
                      </Button>
                    </div>
                  </div>
                  <textarea
                    rows={16}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold font-mono text-sm"
                    placeholder="<h2>Your heading</h2><p>Your content here...</p>"
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" variant="gold" size="lg">
                    Create Post
                  </Button>
                  <Button type="button" variant="outline" size="lg" onClick={() => setActiveTab("posts")}>
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Dashboard;
