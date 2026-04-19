import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://hwrsyenbooodmdmqxacv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3cnN5ZW5ib29vZG1kbXF4YWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0MzE3OTMsImV4cCI6MjA5MDAwNzc5M30.EYqtnzliMWZzdBOdPwxvCkmhhIUgpPpGdG3bPsw9l_s"
);

async function fetchPosts() {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("id, title, slug, content, category, published_at")
      .order("published_at", { ascending: false });

    if (error) throw error;
    
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

fetchPosts();
