import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiSearch, 
  HiOutlineLocationMarker, 
  HiOutlineStar, 
  HiOutlineClock, 
  HiOutlineCreditCard,
  HiCheckCircle,
  HiOutlineSparkles
} from 'react-icons/hi';
import { GiFullPizza, GiHamburger, GiDonut, GiSushis } from "react-icons/gi";
import { FaApple, FaGooglePlay, FaQuoteLeft } from "react-icons/fa";
import { 
  HiOutlineSearch, 
  HiOutlineFire,
} from 'react-icons/hi';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { TbTruckDelivery } from 'react-icons/tb';
import app from '../assets/app.jpeg'
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

  const testimonials = [
    { name: "Sarah Ahmed", text: "Keeto is a lifesaver! The food always arrives hot and the tracking is super accurate.", rating: 5 },
    { name: "Omar Hassan", text: "I love the personalized recommendations. I found my new favorite sushi spot through Keeto!", rating: 5 },
    { name: "Nour Ali", text: "Fastest delivery ever! The app is very easy to use and the discounts are great.", rating: 4.9 },
  ];

  // إعدادات الأنيميشن العامة
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };
const features = [
    { 
      title: "Smart Search", 
      desc: "By meal, restaurant, or category.", 
      icon: HiOutlineSearch 
    },
    { 
      title: "Location-based", 
      desc: "Suggestions tailored to your area.", 
      icon: HiOutlineLocationMarker 
    },
    { 
      title: "Trending Meals", 
      desc: "See what's popular and trending right now.", 
      icon: HiOutlineFire 
    },
    { 
      title: "Personalized", 
      desc: "Recommendations based on past orders.", 
      icon: HiOutlineSparkles 
    },
  ];

  // بيانات قسم الخطوات
  const steps = [
    { 
      id: "01", 
      title: "Browse or Search", 
      desc: "Find your favorite restaurants or meals.", 
      icon: FiSearch 
    },
    { 
      id: "02", 
      title: "Add to Cart", 
      desc: "Add meals and drinks to your cart.", 
      icon: FiShoppingCart 
    },
    { 
      id: "03", 
      title: "Checkout & Track", 
      desc: "Pay securely and track your order.", 
      icon: TbTruckDelivery 
    },
  ];
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="bg-gradient-to-br from-[#FFFFFF] via-[#FFF8E1] to-[#F4D03F] text-[#121212] min-h-screen pt-24 pb-12 overflow-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mb-24">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="space-y-8 relative z-10"
        >
          {/* Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="inline-block bg-[#FFF8E1] text-[#D4AC0D] px-4 py-1 rounded-full text-sm font-semibold border border-[#D4AC0D]/20 shadow-sm"
          >
            🚀 Craving Something Delicious?
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-[#121212]">
            Order Your Favorite Meals <br />
            <span className="text-[#D4AC0D]">Anytime, Anywhere</span> <br />
            with Keeto
          </h1>

          <p className="text-lg text-[#555] max-w-lg leading-relaxed">
            Discover top restaurants, explore menus, and get your food delivered fast — all in one place.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#121212] text-white px-8 py-4 rounded-full font-bold hover:bg-[#D4AC0D] hover:text-black transition-colors duration-300 flex items-center gap-2 shadow-lg">
              Online Order
            </motion.button>
          <motion.a
  href="https://apps.apple.com/eg/app/keeto/id6759287824"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }} 
  whileTap={{ scale: 0.95 }} 
  className="bg-white border border-gray-200 text-[#121212] px-6 py-4 rounded-full font-bold flex items-center gap-2 shadow-sm cursor-pointer"
>
  <FaApple className="text-xl" /> App Store
</motion.a>
            <motion.a
           href="https://play.google.com/store/apps/details?id=com.wego.keeto"
            target="_blank"
  rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white border border-gray-200 text-[#121212] px-6 py-4 rounded-full font-bold flex items-center gap-2 shadow-sm">
              <FaGooglePlay className="text-xl text-green-600" /> Google Play
            </motion.a>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-black/10">
            {[
              { icon: <HiOutlineClock />, text: "Fast Delivery (30–45 mins)" },
              { icon: <HiOutlineStar />, text: "Rated Restaurants" },
              { icon: <HiOutlineCreditCard />, text: "Multiple Payment Options" }
            ].map((info, i) => (
              <motion.div key={i} whileHover={{ x: 5, color: "#D4AC0D" }} className="flex items-center gap-2 cursor-default transition-colors">
                <span className="text-2xl text-[#D4AC0D]">{info.icon}</span>
                <span className="font-semibold text-sm">{info.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative flex justify-center"
        >
          {/* Main Image with floating animation */}
          <motion.img
            animate={{ y: [0, -20, 0], rotate: [0, 2, -2, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
            alt="Delicious Food"
            className="w-[90%] rounded-[3rem] shadow-2xl z-10 relative object-cover h-[600px] border-8 border-white/50"
          />
          
          {/* Floating Element 1 */}
          <motion.div 
            animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            className="absolute top-20 -left-10 bg-white px-6 py-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
          >
            <span className="text-[#D4AC0D] text-2xl font-bold">🍕</span>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase">Trending</p>
              <p className="font-bold text-[#121212]">Hot Pizza</p>
            </div>
          </motion.div>

          {/* Glow Effect */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -z-0 w-80 h-80 bg-[#F4D03F] rounded-full blur-[120px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          ></motion.div>
        </motion.div>
      </section>

      {/* --- 2. ABOUT KEETO SECTION --- */}
      <section className="container mx-auto px-6 mb-24">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white/60 backdrop-blur-md rounded-[3rem] p-8 md:p-16 border border-white/50 shadow-xl flex flex-col md:flex-row items-center gap-12"
        >
          <motion.div 
            initial={{ opacity: 0, x: -40, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80" 
              alt="Delivery" 
              className="rounded-3xl shadow-lg object-cover w-full h-[400px] hover:shadow-2xl transition-shadow"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 space-y-6"
          >
            <h2 className="text-4xl font-extrabold">About Keeto</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Keeto is a smart food ordering platform that connects customers with restaurants. 
              Whether you're craving fast food, healthy meals, or desserts — Keeto brings everything to your doorstep.
            </p>
            <motion.p 
              animate={{ color: ["#D4AC0D", "#FF9800", "#D4AC0D"] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-2xl font-bold"
            >
              Hungry? Let Keeto handle it!
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* --- 3. CATEGORIES --- */}
      <section className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl font-extrabold mb-8 text-center">Explore Categories</h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                className="bg-white border border-black/5 p-6 rounded-3xl flex flex-col items-center gap-4 cursor-pointer hover:shadow-2xl shadow-sm transition-all"
              >
                {Icon ? (
                  <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 5, delay: index }}>
                    <Icon className="text-5xl text-[#D4AC0D]" />
                  </motion.div>
                ) : <div className="text-5xl font-bold text-[#D4AC0D]">...</div>}
                <span className="font-bold text-lg">{category.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
<div className="py-24 overflow-hidden bg-gradient-to-b from-[#FFF8E1]/30 to-white">
      
      {/* --- SECTION 1: Find What You Love --- */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* النص والوصف (اليسار) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block bg-[#FFF8E1] text-[#D4AC0D] px-4 py-2 rounded-full font-bold text-sm border border-[#D4AC0D]/20">
              Discover Instantly ✨
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#121212] leading-tight">
              Find What You Love — <br />
              <span className="text-[#D4AC0D]">Instantly</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              No more wasting time scrolling. Keeto helps you discover meals based on your taste, location, and preferences.
            </p>
          </motion.div>

          {/* كروت المميزات (اليمين) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-[#FFF8E1] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#D4AC0D] transition-colors duration-300">
                    <Icon className="text-3xl text-[#D4AC0D] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#121212] mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: Order in 3 Simple Steps --- */}
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#121212] rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl"
        >
          {/* تأثيرات إضاءة في الخلفية */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AC0D] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Order in 3 <span className="text-[#D4AC0D]">Simple Steps</span>
            </h2>
            <p className="text-gray-400 text-lg">Your favorite meal is just a few clicks away.</p>
          </div>

          <div className="relative z-10">
            {/* الخط الواصل بين الخطوات (يظهر في الشاشات الكبيرة فقط) */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-12 relative"
            >
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* أيقونة الخطوة */}
                    <div className="relative mb-8">
                      <div className="w-24 h-24 bg-[#1A1A1A] border-2 border-gray-700 rounded-full flex items-center justify-center group-hover:border-[#D4AC0D] transition-colors duration-500 shadow-xl relative z-10">
                        <Icon className="text-4xl text-[#D4AC0D] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      {/* رقم الخطوة */}
                      <div className="absolute -top-2 -right-2 bg-[#D4AC0D] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg z-20">
                        {step.id}
                      </div>
                    </div>

                    {/* نص الخطوة */}
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 max-w-[220px]">{step.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </section>

    </div>
      {/* --- 4. POPULAR RESTAURANTS --- */}
      <section className="container mx-auto px-6 mb-24">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold">Popular Near You</h2>
          <a href="/restaurants" className="text-[#D4AC0D] font-bold hover:underline flex items-center gap-1">View All <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity }}>→</motion.span></a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((rest, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring" }}
              whileHover={{ y: -15 }}
              className="bg-white border border-black/5 rounded-[2.5rem] overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={rest.image} 
                  alt={rest.name} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                  <HiOutlineStar className="text-xl text-[#D4AC0D]" />
                </div>
              </div>
              <div className="p-8 space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold group-hover:text-[#D4AC0D] transition-colors">{rest.name}</h3>
                  <span className="font-bold text-[#D4AC0D] bg-[#FFF8E1] px-3 py-1 rounded-full text-sm">{rest.rating} ★</span>
                </div>
                <p className="text-gray-500 flex items-center gap-2 font-medium">
                  <HiOutlineLocationMarker className="text-[#D4AC0D]" /> {rest.distance} away
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 5. NEW SECTION: TESTIMONIALS (Animated Reviews) --- */}
      <section className="container mx-auto px-6 mb-24 relative">
        <div className="text-center mb-16 relative z-10">
          <motion.h2 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-4xl font-extrabold mb-4"
          >
            What Our Foodies Say
          </motion.h2>
          <p className="text-gray-600">Real reviews from hungry customers.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((test, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              animate={{ y: [0, -10, 0] }} // Floating effect
              whileHover={{ scale: 1.05, y: -15 }}
              style={{ animationDelay: `${index * 2}s` }}
              className="bg-white p-8 rounded-[2rem] shadow-xl border border-black/5 relative"
            >
              <FaQuoteLeft className="text-4xl text-[#D4AC0D]/20 absolute top-6 left-6" />
              <div className="relative z-10 space-y-4 pt-6">
                <div className="flex gap-1 text-[#D4AC0D]">
                  {[...Array(5)].map((_, i) => <HiOutlineStar key={i} className={i < Math.floor(test.rating) ? "fill-[#D4AC0D]" : ""} />)}
                </div>
                <p className="text-gray-600 font-medium italic leading-relaxed">"{test.text}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-tr from-[#D4AC0D] to-[#F4D03F] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-inner">
                    {test.name.charAt(0)}
                  </div>
                  <h4 className="font-bold text-[#121212]">{test.name}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 6. NEW SECTION: APP DOWNLOAD CTA (Highly Animated) --- */}
      <section className="container mx-auto px-6 mb-24">
        <div className="bg-[#121212] rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-12 shadow-2xl border-4 border-[#121212]">
          
          {/* Animated Background Elements */}
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute -top-20 -right-20 w-96 h-96 border-[40px] border-dashed border-white/5 rounded-full z-0"></motion.div>
          <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AC0D] rounded-full blur-[100px] z-0"></motion.div>

          <div className="md:w-1/2 relative z-10 space-y-6">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="inline-block bg-[#D4AC0D]/20 text-[#D4AC0D] px-4 py-2 rounded-full font-bold uppercase tracking-widest text-sm"
            >
              Get The App
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Order Faster. <br/> Track Easier.
            </h2>
            <p className="text-gray-400 text-lg">
              Download the Keeto app now and get <span className="text-[#D4AC0D] font-bold">20% off</span> your first order. Available on iOS and Android.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
            <motion.a 
  href="https://apps.apple.com/eg/app/keeto/id6759287824"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }} 
  whileTap={{ scale: 0.95 }}
  className="bg-white text-black px-6 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-gray-100 transition-all cursor-pointer"
>
  <FaApple className="text-3xl" />
  <div className="text-left">
    <p className="text-[10px] uppercase text-gray-500 leading-none">Download on the</p>
    <p className="text-lg leading-none mt-1">App Store</p>
  </div>
</motion.a>
              
              <motion.a 
                href="https://play.google.com/store/apps/details?id=com.wego.keeto"
              whileHover={{ scale: 1.05 }} className="bg-white text-black px-6 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-gray-100 transition-all">
                <FaGooglePlay className="text-3xl text-green-600" />
                <div className="text-left">
                  <p className="text-[10px] uppercase text-gray-500 leading-none">GET IT ON</p>
                  <p className="text-lg leading-none mt-1">Google Play</p>
                </div>
              </motion.a>
            </div>
          </div>

          <div className="md:w-1/2 relative z-10 flex justify-center h-[400px] md:h-[500px] items-center">
            {/* Floating Phone Mockup */}
            <motion.div
              animate={{ y: [-20, 20, -20], rotateZ: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative"
            >
            <div className="w-[250px] h-[500px] bg-white rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden relative group">
  {/* صورة التطبيق (بدلاً من الشاشة الوهمية) */}
  <img 
    src={app} 
    alt="Keeto App Screen" 
    className="w-full h-full py-3 object-cover rounded-[2.5rem] group-hover:scale-105 transition-transform duration-500"
  />

  {/* زر تتبع الطلب (محفوظ من الكود الأصلي) */}
  <motion.div 
    animate={{ scale: [1, 1.1, 1] }} 
    transition={{ repeat: Infinity, duration: 2 }}
    className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-[#121212] text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg z-10"
  >
    Track Order
  </motion.div>

  {/* تأثير "الجزيرة الديناميكية" (اختياري، يضيف لمسة واقعية) */}
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-28 bg-gray-900 rounded-b-xl z-20"></div>
</div>

              {/* Floating Emojis around phone */}
              <motion.div animate={{ y: [0, -30, 0], rotate: 360 }} transition={{ repeat: Infinity, duration: 6 }} className="absolute -top-10 -right-10 text-6xl drop-shadow-lg">🍔</motion.div>
              <motion.div animate={{ y: [0, 40, 0], rotate: -360 }} transition={{ repeat: Infinity, duration: 5, delay: 1 }} className="absolute bottom-10 -left-12 text-6xl drop-shadow-lg">🍟</motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 7. FOOTER (Why Customers Love) --- */}
      <section className="container mx-auto px-6 mb-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Why Customers Love Keeto</h2>
          <p className="text-gray-600">Everything you need for the perfect meal experience.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Wide variety of restaurants", "Fast & reliable delivery", "Exclusive offers & discounts",
            "Easy-to-use interface", "Reorder in one click", "Accurate tracking"
          ].map((point, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, backgroundColor: "#FFF8E1" }}
              className="bg-white border border-black/10 p-6 rounded-2xl flex items-center gap-4 cursor-default transition-colors shadow-sm"
            >
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}>
                <HiCheckCircle className="text-3xl text-[#D4AC0D] flex-shrink-0" />
              </motion.div>
              <span className="font-bold text-lg text-gray-800">{point}</span>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;