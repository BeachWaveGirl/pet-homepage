import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Pet Loss Support & Guidance
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resources, articles, and guidance to help you navigate the journey of pet loss with compassion and understanding.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">{post.date}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                    {post.description}
                  </p>
                  <div className="flex items-center text-xs text-gray-400">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime} min read
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
            Create a Memorial for Your Pet
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Honor your beloved companion with a beautiful digital memorial card that captures their spirit and your love.
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

      <Footer />
    </div>
  );
};

export default Blog;
