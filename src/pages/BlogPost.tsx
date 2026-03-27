import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ConsultationDialog from "@/components/ConsultationDialog";
import { useConsultationDialog } from "@/hooks/useConsultationDialog";
import { supabase } from "@/integrations/supabase/client";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isOpen, openDialog, closeDialog } = useConsultationDialog();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug!)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center px-6">
          <h1 className="text-3xl text-foreground mb-4">Post not found</h1>
          <Link to="/blog" className="text-accent hover:underline">
            ← Back to blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const date = new Date(post.published_at).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      <ConsultationDialog isOpen={isOpen} onClose={closeDialog} />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        {post.image_url ? (
          <img src={post.image_url} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 bg-section-dark" />
        )}
        <div className="absolute inset-0 bg-hero-overlay/80" />
        <Navbar onBookConsultation={openDialog} />
        <div className="relative z-10 px-6 md:px-12 pb-12 pt-32 max-w-4xl">
          <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-primary-foreground/70 text-sm">
            <span>{post.author_name}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 md:py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-accent text-sm mb-8 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to all posts
          </Link>
          {post.content ? (
            <div
              className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-a:text-accent"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <p className="text-muted-foreground">Full content coming soon.</p>
          )}
        </div>
      </article>

      <CTASection onBookConsultation={openDialog} />
      <Footer />
    </div>
  );
};

export default BlogPost;
