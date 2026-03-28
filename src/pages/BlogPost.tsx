import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight } from "lucide-react";
import SocialIcon from "@/components/SocialIcons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationDialog from "@/components/ConsultationDialog";
import { useConsultationDialog } from "@/hooks/useConsultationDialog";
import { supabase } from "@/integrations/supabase/client";
import blogHero from "@/assets/blog-hero.jpg";
import { useEffect, useState, useMemo } from "react";

interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  image_url: string | null;
  author_name: string;
  author_avatar: string | null;
  category: string;
  published_at: string;
  is_featured: boolean;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { open, setOpen, openDialog } = useConsultationDialog();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug!)
        .single();
      if (error) throw error;
      return data as BlogPostData;
    },
    enabled: !!slug,
  });

  const { data: allPosts = [] } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("published_at", { ascending: false });
      if (error) throw error;
      return data as BlogPostData[];
    },
  });

  const recentPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 4);
  const featuredPost = allPosts.find((p) => p.is_featured && p.slug !== slug);
  const popularPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  // Extract headings from HTML content for table of contents
  const tocItems = useMemo(() => {
    if (!post?.content) return [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content, "text/html");
    const headings = doc.querySelectorAll("h2, h3");
    return Array.from(headings).map((h, i) => ({
      id: `heading-${i}`,
      text: h.textContent || "",
      level: h.tagName.toLowerCase(),
    }));
  }, [post?.content]);

  // Inject IDs into content headings for anchor links
  const processedContent = useMemo(() => {
    if (!post?.content) return "";
    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content, "text/html");
    const headings = doc.querySelectorAll("h2, h3");
    headings.forEach((h, i) => {
      h.id = `heading-${i}`;
    });
    return doc.body.innerHTML;
  }, [post?.content]);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const formatDateShort = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const getReadTime = (content: string | null) => {
    if (!content) return "5 min read";
    const text = content.replace(/<[^>]*>/g, "");
    const words = text.split(/\s+/).length;
    const mins = Math.max(1, Math.round(words / 200));
    return `${mins} min read`;
  };

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
            Back to blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ConsultationDialog open={open} onOpenChange={setOpen} />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src={blogHero}
          alt="Blog"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay/80" />
        <Navbar onBookConsultation={openDialog} />
        <div className="relative z-10 text-center px-6 pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
            Blog
          </h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto text-sm md:text-base mb-8">
            Expert advice on training, nutrition, recovery and mindset from
            Eternal Fitness in Worthing.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={openDialog}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Book an Initial Consultation
            </button>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Visit the Studio
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Article */}
            <div className="lg:col-span-2">
              {/* Post Header Image */}
              <div className="relative rounded-2xl overflow-hidden mb-8">
                {post.image_url ? (
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full aspect-[16/9] object-cover"
                  />
                ) : (
                  <div className="w-full aspect-[16/9] bg-section-dark" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-xl md:text-2xl lg:text-3xl text-white mb-3">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-4 text-white/70 text-sm">
                    <span>{post.author_name}</span>
                    <span>{formatDate(post.published_at)}</span>
                    <span>{getReadTime(post.content)}</span>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              {processedContent ? (
                <div
                  className="prose prose-lg max-w-none font-body text-foreground
                    prose-headings:font-display prose-headings:text-foreground
                    prose-h1:font-extrabold prose-h1:text-3xl prose-h1:mt-10 prose-h1:mb-4
                    prose-h2:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border prose-h2:pb-2
                    prose-h3:font-bold prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                    prose-h4:font-semibold prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-2
                    prose-h5:font-semibold prose-h5:text-base prose-h5:mt-6 prose-h5:mb-2
                    prose-h6:font-medium prose-h6:text-base prose-h6:mt-4 prose-h6:mb-2
                    prose-p:font-normal prose-p:text-foreground/90 prose-p:leading-relaxed prose-p:mb-4
                    prose-a:text-accent prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-accent/80
                    prose-strong:text-foreground prose-strong:font-semibold
                    prose-em:text-foreground/80 prose-em:italic
                    prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
                    prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
                    prose-li:font-normal prose-li:text-foreground/90 prose-li:leading-relaxed
                    prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-muted/30 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:my-6 prose-blockquote:italic prose-blockquote:text-foreground/80
                    prose-img:rounded-xl prose-img:my-6 prose-img:shadow-md
                    prose-hr:border-border prose-hr:my-8"
                  dangerouslySetInnerHTML={{ __html: processedContent }}
                />
              ) : (
                <p className="text-muted-foreground">
                  Full content coming soon.
                </p>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Author Card */}
              <div className="bg-muted/50 rounded-2xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  {post.author_avatar ? (
                    <img
                      src={post.author_avatar}
                      alt={post.author_name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center text-accent text-xl font-bold">
                      {post.author_name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-foreground">
                        {post.author_name}
                      </h4>
                    </div>
                    <p className="text-muted-foreground text-xs mt-1">
                      Eternal Fitness Coach
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Passionate about helping people achieve their fitness goals
                  through personalised training and evidence-based coaching.
                </p>
                <div>
                  <p className="text-xs text-muted-foreground mb-2">
                    Share with your community!
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Facebook"
                      className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-foreground/20 transition-colors text-foreground"
                    >
                      <SocialIcon name="facebook" />
                    </a>
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on WhatsApp"
                      className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-foreground/20 transition-colors text-foreground"
                    >
                      <SocialIcon name="whatsapp" />
                    </a>
                    <a
                      href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(window.location.href)}`}
                      aria-label="Share via Email"
                      className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-foreground/20 transition-colors text-foreground"
                    >
                      <SocialIcon name="email" />
                    </a>
                  </div>
                </div>
              </div>

              {/* In This Article (Table of Contents) */}
              {tocItems.length > 0 && (
                <div>
                  <h4 className="font-bold text-foreground mb-4">
                    In this article
                  </h4>
                  <ul className="space-y-2">
                    {tocItems.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={`text-sm hover:text-accent transition-colors ${
                            item.level === "h3"
                              ? "text-muted-foreground pl-4"
                              : "text-foreground font-medium"
                          }`}
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Recent Activities */}
              {recentPosts.length > 0 && (
                <div>
                  <h4 className="font-bold text-foreground mb-4">
                    Recent Activities
                  </h4>
                  <div className="space-y-4">
                    {recentPosts.map((rp) => (
                      <Link
                        key={rp.id}
                        to={`/blog/${rp.slug}`}
                        className="flex items-center gap-3 group"
                      >
                        <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-muted">
                          {rp.image_url ? (
                            <img
                              src={rp.image_url}
                              alt={rp.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-accent/10 flex items-center justify-center text-accent text-xs font-bold">
                              E
                            </div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                            {rp.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {rp.author_name}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Feature Posts */}
              {featuredPost && (
                <div>
                  <h4 className="font-bold text-foreground mb-4">
                    Feature Posts
                  </h4>
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="group block rounded-2xl overflow-hidden relative h-64"
                  >
                    {featuredPost.image_url ? (
                      <img
                        src={featuredPost.image_url}
                        alt={featuredPost.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-section-dark" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex items-center gap-2 text-white/60 text-xs mb-2">
                        <span>
                          {formatDateShort(featuredPost.published_at)}
                        </span>
                        <span>{featuredPost.category}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-accent/30 flex items-center justify-center text-white text-[10px] font-bold">
                          {featuredPost.author_name.charAt(0)}
                        </div>
                        <span className="text-xs text-white/80">
                          {featuredPost.author_name}
                        </span>
                      </div>
                      <h5 className="text-sm font-bold text-white">
                        {featuredPost.title}
                      </h5>
                      <span className="inline-block bg-accent text-accent-foreground text-[10px] font-semibold px-2.5 py-1 rounded-full mt-2">
                        {featuredPost.category}
                      </span>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Posts */}
      {popularPosts.length > 0 && (
        <section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl text-foreground">
                Popular Post
              </h2>
              <Link
                to="/blog"
                className="inline-flex items-center gap-1 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View All <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularPosts.map((pp) => (
                <div key={pp.id} className="group">
                  <Link
                    to={`/blog/${pp.slug}`}
                    className="block rounded-2xl overflow-hidden mb-4 aspect-[4/3] bg-muted"
                  >
                    {pp.image_url ? (
                      <img
                        src={pp.image_url}
                        alt={pp.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-accent/10 flex items-center justify-center">
                        <span className="text-accent text-4xl font-display">
                          E
                        </span>
                      </div>
                    )}
                  </Link>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span>{formatDateShort(pp.published_at)}</span>
                    <span className="text-accent font-medium">
                      {pp.category}
                    </span>
                  </div>
                  <Link to={`/blog/${pp.slug}`}>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {pp.title}
                    </h3>
                  </Link>
                  {pp.excerpt && (
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
                      {pp.excerpt}
                    </p>
                  )}
                  <Link
                    to={`/blog/${pp.slug}`}
                    className="text-accent text-sm font-semibold hover:underline"
                  >
                    Read More...
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-section-dark py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground leading-tight mb-4">
            Book a Personal Training Session in Worthing
          </h2>
          <p className="text-primary-foreground/60 text-sm md:text-base mb-8">
            Want a simple plan based on your body and goals? Book a free
            consultation and we'll map out a safe return to training approach
            that feels good and fits your week.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={openDialog}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Book Now <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="tel:07517658128"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Speak to Esther <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
