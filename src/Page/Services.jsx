import React from 'react';
import { motion } from 'framer-motion';
import { 
  MdDeliveryDining, 
  MdOutlineRestaurantMenu, 
  MdStorefront, 
  MdSupportAgent,
  MdTimer,
  MdStarRate,
  MdPayment,
  MdSearch,
  MdLocationOn,
  MdTrendingUp,
  MdPersonOutline,
  MdShoppingCart
} from 'react-icons/md';

const Services = () => {

  const trustBuilders = [
    { title: "Fast Delivery (30–45 mins)", icon: MdTimer },
    { title: "Rated Restaurants", icon: MdStarRate },
    { title: "Multiple Payment Options", icon: MdPayment },
  ];

  const servicesData = [
    {
      title: "Fast Delivery",
      description: "Get your favorite meals delivered to your doorstep in under 30 minutes.",
      icon: MdDeliveryDining,
    },
    
    {
      title: "Grocery Pickup",
      description: "Order groceries and pick them up instantly.",
      icon: MdStorefront,
    },
    {
      title: "24/7 Support",
      description: "We’re here for you anytime, any day.",
      icon: MdSupportAgent,
    },
  ];

  const featuresData = [
    { title: "Smart Search", desc: "By meal, restaurant, or category.", icon: MdSearch },
    { title: "Location-based", desc: "Suggestions tailored to your area.", icon: MdLocationOn },
    { title: "Trending Meals", desc: "See what's popular right now.", icon: MdTrendingUp },
    { title: "Personalized", desc: "Recommendations based on past orders.", icon: MdPersonOutline },
  ];

  const stepsData = [
    { id: 1, title: "Browse or Search", desc: "Find your favorite restaurants or meals.", icon: MdSearch },
    { id: 2, title: "Add to Cart", desc: "Add meals and drinks to your cart.", icon: MdShoppingCart },
    { id: 3, title: "Checkout & Track", desc: "Pay securely and track your order.", icon: MdDeliveryDining },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 12 }
    }
  };

  return (
    <div className="bg-gradient-to-br from-white via-[#FFF8E1] to-[#F4D03F] text-[#121212] min-h-screen pt-28 pb-16 flex flex-col gap-24 overflow-hidden">

      {/* Header */}
      <section className="container mx-auto px-6 text-center max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          Our <span className="text-[#D4AC0D]">Services</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 mb-10"
        >
          More than food delivery. Experience speed, convenience, and quality.
        </motion.p>

        {/* Quick Info (Trust Builders) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-12 bg-white/60 backdrop-blur-md py-4 px-8 rounded-full border border-white/50 shadow-sm mx-auto w-fit"
        >
          {trustBuilders.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-800 font-semibold text-sm md:text-base">
              <item.icon className="text-2xl text-[#D4AC0D]" />
              {item.title}
            </div>
          ))}
        </motion.div>
      </section>

      {/* Find What You Love — Instantly (NEW) */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold mb-4"
          >
            Find What You Love — <span className="text-[#D4AC0D]">Instantly</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg"
          >
            No more wasting time scrolling. Keeto helps you discover meals based on your taste, location, and preferences.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white border border-black/5 p-8 rounded-[2rem] shadow-lg flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-[#FFF8E1] rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <Icon className="text-3xl text-[#D4AC0D]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Main Services */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Additional Perks</h2>
        </div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.03 }}
                className="bg-white/80 backdrop-blur-sm border border-black/5 p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-20 h-20 bg-[#FFF8E1] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-[#D4AC0D] transition-colors">
                  <Icon className="text-4xl text-[#D4AC0D] group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* How it works (3 Steps - Updated) */}
      <section className="container mx-auto px-6">
        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl relative border border-white/50">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">
              Order in 3 <span className="text-[#D4AC0D]">Simple Steps</span>
            </h2>
            <p className="text-gray-500">Fast, easy, and convenient.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-12 relative"
          >
            {/* Connector Line for Desktop */}
            <div className="hidden sm:block absolute top-10 left-[15%] right-[15%] h-1 bg-gray-100 -z-10"></div>

            {stepsData.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="flex flex-col items-center text-center bg-white"
                >
                  <div className="relative">
                    <div className="w-20 h-20 bg-[#FFF8E1] border-2 border-[#D4AC0D] rounded-full flex items-center justify-center text-3xl text-[#D4AC0D] mb-6 relative z-10 shadow-lg group-hover:scale-110 transition-transform">
                      <Icon />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#121212] text-white rounded-full flex items-center justify-center font-bold border-4 border-white z-20">
                      {step.id}
                    </div>
                  </div>

                  <h4 className="font-bold text-xl mb-3 text-[#121212]">
                    {step.title}
                  </h4>

                  <p className="text-gray-500 text-sm max-w-[200px]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[#121212] rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#D4AC0D]/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#D4AC0D]/10 rounded-full blur-[100px]"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Ready to Order?
            </h2>

            <p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg">
              Join thousands of users and enjoy fast delivery now.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <button className="bg-[#D4AC0D] text-black px-8 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-lg">
                Order Now
              </button>

              <button className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all">
                Download App
              </button>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Services;