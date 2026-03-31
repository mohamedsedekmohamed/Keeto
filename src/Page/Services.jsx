
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MdDeliveryDining, 
  MdOutlineRestaurantMenu, 
  MdStorefront, 
  MdSupportAgent 
} from 'react-icons/md';
import { FaMobileAlt, FaRegClock, FaMotorcycle, FaStar } from 'react-icons/fa';

const Services = () => {

  const servicesData = [
    {
      title: "Fast Delivery",
      description: "Get your favorite meals delivered to your doorstep in under 30 minutes.",
      icon: MdDeliveryDining,
    },
    {
      title: "Dine-in Reservations",
      description: "Book your table easily at top restaurants.",
      icon: MdOutlineRestaurantMenu,
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

  const stepsData = [
    { id: 1, title: "Choose", desc: "Browse menus and pick your favorite.", icon: FaMobileAlt },
    { id: 2, title: "Prepare", desc: "Restaurant prepares your meal.", icon: FaRegClock },
    { id: 3, title: "Deliver", desc: "Fast delivery to your door.", icon: FaMotorcycle },
    { id: 4, title: "Enjoy", desc: "Enjoy your delicious food.", icon: FaStar },
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
    <div className="bg-gradient-to-br from-white via-[#FFF8E1] to-[#F4D03F] text-[#121212] min-h-screen pt-28 pb-16 flex flex-col gap-24">

      {/* Header */}
      <section className="container mx-auto px-6 text-center max-w-3xl">
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
          className="text-lg text-gray-600"
        >
          More than food delivery. Experience speed, convenience, and quality.
        </motion.p>
      </section>

      {/* Services */}
      <section className="container mx-auto px-6">
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
                className="bg-white border border-black/10 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 text-center group"
              >
                <div className="w-20 h-20 bg-[#FFF8E1] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-[#D4AC0D] transition">
                  <Icon className="text-4xl text-[#D4AC0D] group-hover:text-black transition" />
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-6">
        <div className="bg-white rounded-[2rem] p-10 shadow-xl relative">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold">
              How <span className="text-[#D4AC0D]">Keeto</span> Works
            </h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {stepsData.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 bg-[#FFF8E1] border-2 border-[#D4AC0D] rounded-full flex items-center justify-center text-2xl text-[#D4AC0D] mb-5">
                    <Icon />
                  </div>

                  <h4 className="font-bold text-lg mb-2">
                    {step.title}
                  </h4>

                  <p className="text-gray-500 text-sm">
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
          className="bg-[#121212] rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D4AC0D]/30 rounded-full blur-[100px]"></div>

          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Order?
          </h2>

          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Join thousands of users and enjoy fast delivery now.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-[#D4AC0D] text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition">
              Order Now
            </button>

            <button className="border border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition">
              Download App
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Services;

