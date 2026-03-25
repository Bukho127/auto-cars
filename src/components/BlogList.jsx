import React from "react";
import img1 from '../assets/images/mclaren-side-models-menu-750s.png'
import img2 from '../assets/images/lambo.jpg'
import img3 from '../assets/images/mercedes_EQS.png'
import img4 from '../assets/images/porche_911_droptop.avif'
import img5 from '../assets/images/BMW_Interior.jpg'
import img6 from '../assets/images/Mercedes_QLE.png'


const blogs = [
  {
    id: 1,
    title: "McLaren 750S: The Supercar That Redefines Speed",
    excerpt:
      "We take the McLaren 750S out on the open road and push it to its limits. Here's what we found out about this breathtaking machine.",
    image: img1,
    author: "James Mokoena",
    date: "March 10, 2026",
    readTime: "5 min read",
    category: "Review",
    featured: true,
  },
  {
    id: 2,
    title: "Why the Lamborghini Urus is the Ultimate Family SUV",
    excerpt:
      "Who says a supercar can't be practical? The Urus Performante proves that you can have it all.",
    image: img2,
    author: "Ayanda Dlamini",
    date: "February 28, 2026",
    readTime: "4 min read",
    category: "Feature",
    featured: false,
  },
  {
    id: 3,
    title: "Electric vs Gasoline: Is the Mercedes EQS Worth It?",
    excerpt:
      "We compare the Mercedes-Benz EQS 450+ against its gasoline rivals to see if going electric makes sense in 2026.",
    image: img3,
    author: "Sipho Nkosi",
    date: "February 14, 2026",
    readTime: "6 min read",
    category: "Comparison",
    featured: false,
  },
  {
    id: 4,
    title: "Porsche 911 GT3: A Love Letter to Driving",
    excerpt:
      "The naturally aspirated flat-six screams to 9,000rpm. In a world of turbos, the GT3 is a breath of fresh air.",
    image: img4,
    author: "James Mokoena",
    date: "January 30, 2026",
    readTime: "7 min read",
    category: "Review",
    featured: false,
  },
  {
    id: 5,
    title: "Top 5 Luxury Cars to Buy in South Africa in 2026",
    excerpt:
      "From the Mercedes GLS to the Porsche 911, here are our top picks for luxury car buyers in South Africa this year.",
    image: img5,
    author: "Ayanda Dlamini",
    date: "January 15, 2026",
    readTime: "5 min read",
    category: "Listicle",
    featured: false,
  },
];

function BlogList() {
  const featured = blogs.find((b) => b.featured);
  const rest = blogs.filter((b) => !b.featured);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-2">Our Blog</h1>
      <p className="text-gray-500 mb-12">News, reviews and insights from the Auto-Cars team.</p>

     
      {featured && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 cursor-pointer group">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="border border-gray-300 rounded-full px-4 py-1 text-sm w-fit mb-4">
              {featured.category}
            </span>
            <h2 className="text-3xl font-bold mb-4 group-hover:underline">{featured.title}</h2>
            <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>{featured.author}</span>
              <span>·</span>
              <span>{featured.date}</span>
              <span>·</span>
              <span>{featured.readTime}</span>
            </div>
          </div>
        </div>
      )}


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {rest.map((blog) => (
          <div key={blog.id} className="cursor-pointer group">
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <span className="border border-gray-300 rounded-full px-3 py-1 text-xs mb-3 inline-block">
              {blog.category}
            </span>
            <h3 className="font-bold text-base mb-2 group-hover:underline">{blog.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{blog.excerpt}</p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>{blog.author}</span>
              <span>·</span>
              <span>{blog.date}</span>
              <span>·</span>
              <span>{blog.readTime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;