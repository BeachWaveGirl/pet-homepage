import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostBySlug, blogPosts } from "@/data/blogPosts";
import { ArrowLeft } from "lucide-react";

// Format content with proper HTML - white background styling
const formatContent = (content: string) => {
  return content
    .split('\n')
    .map(line => {
      const trimmed = line.trim();
      // Handle h2 headings (with or without ##)
      if (trimmed.startsWith('## ')) {
        return `<h2 class="text-2xl md:text-3xl font-playfair font-bold text-gray-900 mt-14 mb-6">${trimmed.slice(3)}</h2>`;
      }
      // Handle h3 headings (with or without ###)
      if (trimmed.startsWith('### ')) {
        return `<h3 class="text-xl md:text-2xl font-playfair font-semibold text-gray-800 mt-10 mb-4">${trimmed.slice(4)}</h3>`;
      }
      // Handle list items
      if (trimmed.startsWith('- ')) {
        return `<li class="text-gray-600 font-light leading-relaxed ml-6 mb-2">${trimmed.slice(2)}</li>`;
      }
      // Handle bold paragraphs
      if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        return `<p class="text-gray-800 font-semibold mt-8 mb-3 text-lg">${trimmed.slice(2, -2)}</p>`;
      }
      if (trimmed === '') {
        return '';
      }
      // Regular paragraph with inline formatting
      const formattedLine = trimmed
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-800 font-medium">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
      return `<p class="text-gray-600 font-light text-lg leading-[2] mb-8">${formattedLine}</p>`;
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
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      <Header />
      
      <div className="pt-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-500 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      <article className="pt-8 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-10 relative">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-pink-500/5 to-amber-500/10 opacity-40" />
          </div>

          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="px-4 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
              {post.category}
            </span>
            <span className="text-gray-500">{post.date}</span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-500">{post.readTime} min read</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-8 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 font-light mb-12 leading-relaxed border-l-4 border-gray-300 pl-6">
            {post.description}
          </p>

          {post.tags && (
            <div className="flex flex-wrap gap-2 mb-12">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
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

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 mb-4">
            Honor Your Beloved Pet
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto font-light">
            Create a beautiful memorial to celebrate the life of your cherished companion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/memorial-card"
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              Create Memorial Card
            </Link>
            <Link
              to="/candle-ceremony"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-gray-700 font-medium rounded-full hover:bg-gray-100 transition-colors border border-gray-300"
            >
              Light a Candle
            </Link>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
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
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      {relatedPost.category}
                    </span>
                    <h3 className="mt-3 font-playfair font-semibold text-gray-800 group-hover:text-gray-600 transition-colors line-clamp-2">
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
