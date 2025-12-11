import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostBySlug, blogPosts } from "@/data/blogPosts";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Format content with proper HTML - rococo theme styling
const formatContent = (content: string) => {
  return content
    .split('\n')
    .map(line => {
      const trimmed = line.trim();
      // Handle h2 headings (with or without ##)
      if (trimmed.startsWith('## ')) {
        return `<h2 class="text-2xl md:text-3xl font-playfair font-bold text-foreground mt-14 mb-6">${trimmed.slice(3)}</h2>`;
      }
      // Handle h3 headings (with or without ###)
      if (trimmed.startsWith('### ')) {
        return `<h3 class="text-xl md:text-2xl font-playfair font-semibold text-foreground/90 mt-10 mb-4">${trimmed.slice(4)}</h3>`;
      }
      // Handle list items
      if (trimmed.startsWith('- ')) {
        return `<li class="text-muted-foreground font-light leading-relaxed ml-6 mb-2">${trimmed.slice(2)}</li>`;
      }
      // Handle bold paragraphs
      if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        return `<p class="text-foreground/90 font-semibold mt-8 mb-3 text-lg">${trimmed.slice(2, -2)}</p>`;
      }
      if (trimmed === '') {
        return '';
      }
      // Regular paragraph with inline formatting
      const formattedLine = trimmed
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-medium">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
      return `<p class="text-muted-foreground font-light text-lg leading-[2] mb-8">${formattedLine}</p>`;
    })
    .filter(line => line !== '')
    .join('\n');
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-aged-paper paper-texture text-foreground font-inter">
      <Header />
      
      <div className="pt-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      <article className="pt-8 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="aspect-[21/9] rounded-lg overflow-hidden mb-10 relative shadow-rococo">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-pink-500/5 to-amber-500/10 opacity-40" />
          </div>

          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
              {post.category}
            </span>
            <span className="text-muted-foreground">{post.date}</span>
            <span className="text-border">•</span>
            <span className="text-muted-foreground">{post.readTime} min read</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-8 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground font-light mb-12 leading-relaxed border-l-4 border-primary/40 pl-6">
            {post.description}
          </p>

          {post.tags && (
            <div className="flex flex-wrap gap-2 mb-12">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
        </div>
      </article>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-4">
            Honor Your Beloved Pet
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto font-light">
            Create a beautiful memorial to celebrate the life of your cherished companion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/memorial-card">
              <Button className="bg-primary hover:bg-pastel-blue-dark text-primary-foreground shadow-rococo px-6 py-3">
                Create Memorial Card
              </Button>
            </Link>
            <Link to="/candle-ceremony">
              <Button variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 px-6 py-3">
                Light a Candle
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-playfair font-bold text-foreground mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  className="group bg-card rounded-lg overflow-hidden hover:shadow-rococo-lg transition-all duration-300 border border-border/60"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={relatedPost.imageUrl}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-pink-500/5 to-amber-500/10 opacity-40" />
                  </div>
                  <div className="p-5">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {relatedPost.category}
                    </span>
                    <h3 className="mt-3 font-playfair font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
