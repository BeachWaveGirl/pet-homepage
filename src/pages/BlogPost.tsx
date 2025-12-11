import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostBySlug, blogPosts } from "@/data/blogPosts";
import { ArrowLeft } from "lucide-react";

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
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      
      <div className="pt-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      <article className="pt-8 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-8 relative">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-pink-500/5 to-amber-500/10 opacity-60" />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-amber-500/20 text-amber-400 text-sm font-medium rounded-full border border-amber-500/30">
              {post.category}
            </span>
            <span className="text-gray-500">{post.date}</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-500">{post.readTime} min read</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            {post.description}
          </p>

          {post.tags && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div 
            className="prose prose-lg prose-invert max-w-none prose-headings:font-playfair prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-li:text-gray-300 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>').replace(/## /g, '<h2>').replace(/### /g, '<h3>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>').replace(/- /g, '• ') }}
          />
        </div>
      </article>

      <section className="py-16 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-4">
            Honor Your Beloved Pet
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Create a beautiful memorial to celebrate the life of your cherished companion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/memorial-card"
              className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 text-black font-medium rounded-full hover:bg-amber-400 transition-colors"
            >
              Create Memorial Card
            </Link>
            <Link
              to="/digital-candles"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-medium rounded-full hover:bg-white/10 transition-colors border border-gray-700"
            >
              🕯️ Light a Candle
            </Link>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 border-t border-gray-800">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-playfair font-bold text-white mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  className="group bg-[#141414] rounded-2xl overflow-hidden hover:bg-[#1a1a1a] transition-all duration-300 border border-gray-800/50"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={relatedPost.imageUrl}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-pink-500/5 to-amber-500/10 opacity-60" />
                  </div>
                  <div className="p-5">
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full border border-amber-500/30">
                      {relatedPost.category}
                    </span>
                    <h3 className="mt-3 font-semibold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
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
