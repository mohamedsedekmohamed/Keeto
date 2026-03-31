
import React from 'react';
import { motion } from 'framer-motion';
import { HiSearch, HiOutlineLocationMarker, HiOutlineStar } from 'react-icons/hi';
import { GiFullPizza, GiHamburger, GiDonut } from 'react-icons/gi';
import { GiSushis } from "react-icons/gi";

const Home = () => {
  const categories = [
    { name: 'Pizza', icon: GiFullPizza },
    { name: 'Burgers', icon: GiHamburger },
    { name: 'Sushi', icon: GiSushis },
    { name: 'Desserts', icon: GiDonut },
    { name: 'More', icon: null },
  ];

  const restaurants = [
    { name: "The Pizza Palace", image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=80", rating: 4.8, distance: "1.2 km" },
    { name: "Burger Bros", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80", rating: 4.5, distance: "2.1 km" },
    { name: "Sushi Samba", image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&q=80", rating: 4.9, distance: "0.8 km" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="bg-gradient-to-br from-[#FFFFFF] via-[#FFF8E1] to-[#F4D03F] text-[#121212] min-h-screen pt-24 pb-12 overflow-hidden">
      
      {/* Hero Section */}
   
<section className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mb-24">

  {/* LEFT */}
  <motion.div
    initial={{ opacity: 0, x: -60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="space-y-8 relative z-10"
  >
    {/* Badge */}
    <div className="inline-block bg-[#FFF8E1] text-[#D4AC0D] px-4 py-1 rounded-full text-sm font-semibold">
      🚀 Fast Delivery in Your Area
    </div>

    {/* Title */}
    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#121212]">
      Order Food <br />
      <span className="text-[#D4AC0D]">Anytime, Anywhere</span>
    </h1>

    {/* Description */}
    <p className="text-lg text-[#555] max-w-lg">
      Discover the best restaurants near you and enjoy fast delivery with just a few clicks.
    </p>

    {/* Search Box */}
    <div className="flex items-center gap-3 bg-white border border-black/10 p-3 rounded-full shadow-2xl hover:shadow-black/20 transition-all">

      <div className="bg-[#FFF8E1] p-3 rounded-full">
        <HiOutlineLocationMarker className="text-xl text-[#D4AC0D]" />
      </div>

      <input
        type="text"
        placeholder="Enter your address..."
        className="flex-grow bg-transparent outline-none text-black placeholder:text-gray-400"
      />

      <button className="bg-[#121212] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#D4AC0D] hover:text-black transition-all duration-300 flex items-center gap-2">
        <HiSearch />
        Search
      </button>
    </div>

    {/* Stats */}
    <div className="flex items-center gap-8 pt-4">
      <div>
        <h3 className="text-2xl font-bold text-[#121212]">500+</h3>
        <p className="text-gray-500 text-sm">Restaurants</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-[#121212]">20k+</h3>
        <p className="text-gray-500 text-sm">Orders Daily</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-[#121212]">4.8★</h3>
        <p className="text-gray-500 text-sm">Rating</p>
      </div>
    </div>
  </motion.div>

  {/* RIGHT */}
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    className="relative flex justify-center"
  >
    {/* Main Image */}
    <img
      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
      alt="Food"
      className="w-[90%] rounded-3xl shadow-2xl"
    />

    {/* Floating Card 1 */}
    <div className="absolute top-10 -left-6 bg-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-2">
      <span className="text-[#D4AC0D] font-bold">★ 4.9</span>
      <span className="text-sm text-gray-600">Top Rated</span>
    </div>

    {/* Floating Card 2 */}
    <div className="absolute bottom-10 -right-6 bg-white px-4 py-3 rounded-xl shadow-lg">
      <p className="text-sm text-gray-500">Delivery</p>
      <p className="font-bold text-[#121212]">20-30 min</p>
    </div>

    {/* Glow Effect */}
    <div className="absolute -z-10 w-72 h-72 bg-[#F4D03F]/30 rounded-full blur-[120px]"></div>
  </motion.div>

</section>



      {/* Categories */}
      <section className="container mx-auto px-6 mb-20">
        <motion.h2 className="text-3xl font-extrabold mb-8">
          Explore Categories
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white/80 border border-black/10 p-6 rounded-2xl flex flex-col items-center gap-4 cursor-pointer hover:shadow-2xl hover:shadow-black/20 transition-all"
              >
                {Icon ? (
                  <Icon className="text-5xl text-[#D4AC0D]" />
                ) : (
                  <div className="text-5xl font-bold text-[#D4AC0D]">...</div>
                )}
                <span className="font-bold">{category.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Restaurants */}
      <section className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold">
            Popular Near You
          </h2>
          <a href="/restaurants" className="text-[#D4AC0D] font-bold hover:underline">
            View All
          </a>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {restaurants.map((rest, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white/80 border border-black/10 rounded-3xl overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-black/20 transition-all"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={rest.image} alt={rest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                
                <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-[#F4D03F] text-black px-3 py-1 rounded-full text-sm font-bold">
                  <HiOutlineStar /> {rest.rating}
                </div>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-bold group-hover:text-[#D4AC0D] transition">
                  {rest.name}
                </h3>

                <p className="text-gray-600 flex items-center gap-2">
                  <HiOutlineLocationMarker className="text-[#D4AC0D]" />
                  {rest.distance}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      {/* Footer */}
      {/* --- Section 1: How it Works --- */}
<section className="container mx-auto px-6 mb-24 py-16 bg-white/30 rounded-[40px] backdrop-blur-sm">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-extrabold mb-4">How it Works</h2>
    <p className="text-gray-600">Simple steps to satisfy your hunger</p>
  </div>

  <div className="grid md:grid-cols-3 gap-12">
    {[
      { step: "01", title: "Choose Restaurant", desc: "Select from our wide range of premium restaurants.", icon: "📍" },
      { step: "02", title: "Select Food", desc: "Add your favorite meals and drinks to the cart.", icon: "🍔" },
      { step: "03", title: "Fast Delivery", desc: "Our rider will be at your door in no time.", icon: "🛵" },
    ].map((item, idx) => (
      <motion.div 
        key={idx}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.2 }}
        viewport={{ once: true }}
        className="relative text-center p-8 group"
      >
        
        <div className="text-5xl mb-6">{item.icon}</div>
        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
        <p className="text-gray-500 leading-relaxed">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</section>

{/* --- Section 2: Special Offers (Newsletter/Promo) --- */}
<section className="container mx-auto px-6 mb-24">
  <motion.div 
    initial={{ scale: 0.9, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="bg-[#121212] rounded-[3rem] p-12 text-white relative overflow-hidden"
  >
    {/* Background Decorative Circles */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AC0D] rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
    
    <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
      <div>
        <motion.span 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-[#D4AC0D] font-mono mb-4 block"
        >
          #Limited Time Offer
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Get <span className="text-[#D4AC0D]">50% OFF</span> on <br /> Your First Order!
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          Join our foodies club and get exclusive deals delivered to your inbox every week.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="bg-white/10 border border-white/20 px-6 py-4 rounded-full outline-none focus:border-[#D4AC0D] flex-grow transition-all"
          />
          <button className="bg-[#D4AC0D] text-black font-bold px-8 py-4 rounded-full hover:scale-105 active:scale-95 transition-all">
            Subscribe Now
          </button>
        </div>
      </div>

      <div className="hidden md:flex justify-end">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80" 
            alt="Promo" 
            className="w-80 h-80 object-cover rounded-full border-8 border-white/10 shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  </motion.div>
</section>
    </div>
  );
};

export default Home;

