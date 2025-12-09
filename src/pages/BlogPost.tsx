import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getBlogPost, blogPosts } from "@/data/blogPosts";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Back Link */}
      <div className="pt-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="pt-8 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Image */}
          <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-8">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-amber-100 text-amber-800 text-sm font-medium rounded-full">
              {post.category}
            </span>
            <span className="text-gray-500">{post.date}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500">{post.readTime} min read</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            {post.description}
          </p>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:font-playfair prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900 prose-li:text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>').replace(/## /g, '<h2 class="text-2xl font-bold mt-10 mb-4">').replace(/### /g, '<h3 class="text-xl font-semibold mt-8 mb-3">').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>').replace(/- /g, '• ') }}
          />
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-50 to-orange-50 border-t border-amber-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 mb-4">
            Honor Your Beloved Pet
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Create a beautiful memorial to celebrate the life of your cherished companion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/memorial-card"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              Create Memorial Card
            </Link>
            <Link
              to="/digital-candles"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-50 transition-colors border border-gray-200"
            >
              🕯️ Light a Candle
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={relatedPost.imageUrl}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                        {relatedPost.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-amber-700 transition-colors line-clamp-2">
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
