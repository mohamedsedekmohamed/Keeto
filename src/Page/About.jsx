import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaUsers, FaChartLine, FaQuoteLeft } from 'react-icons/fa';

const About = () => {

  const stats = [
    { label: "Partner Restaurants", value: "500+", icon: FaUtensils },
    { label: "Happy Customers", value: "100K+", icon: FaUsers },
    { label: "Monthly Orders", value: "250K+", icon: FaChartLine },
  ];

  const team = [
    { name: "Mohamed Sedek", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
    { name: "Sarah Ahmed", role: "Head of Operations", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
    { name: "Omar Khalid", role: "Lead Developer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-gradient-to-br from-white via-[#FFF8E1] to-[#F4D03F] text-[#121212] min-h-screen pt-28 pb-16 flex flex-col gap-24">
      
      {/* 1. Hero Section (Our Story) */}
      <section className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Our Story at <span className="text-[#D4AC0D]">Keeto</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Started in the heart of Alexandria, Keeto was born from a simple idea: making great food accessible to everyone, everywhere, at any time. We don't just deliver meals; we deliver moments of joy.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our mission is to empower local restaurants and provide our customers with a seamless, fast, and delightful dining experience through cutting-edge technology.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" 
            alt="Our Team working" 
            className="rounded-[2.5rem] shadow-2xl border-8 border-white"
          />
          <div className="absolute -bottom-6 -left-6 bg-[#D4AC0D] text-black p-8 rounded-3xl shadow-xl hidden md:block">
            <p className="text-3xl font-black">5+ Years</p>
            <p className="font-bold">Of Excellence</p>
          </div>
        </motion.div>
      </section>

      {/* 2. Statistics Section (Glassmorphism) */}
      <section className="container mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 bg-white/40 backdrop-blur-md border border-white p-12 rounded-[3rem] shadow-xl"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="flex flex-col items-center text-center space-y-3">
                <Icon className="text-5xl text-[#D4AC0D]" />
                <h2 className="text-4xl font-black text-[#121212]">{stat.value}</h2>
                <p className="text-gray-600 font-bold uppercase tracking-wider text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* 3. Team Section */}
      <section className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-16 italic">
          The Minds Behind <span className="text-[#D4AC0D]">Keeto</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative mb-6 inline-block">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg group-hover:border-[#D4AC0D] transition-all duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <p className="text-[#D4AC0D] font-bold">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Testimonial / Quote Section */}
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <FaQuoteLeft className="text-6xl text-[#D4AC0D]/30 mx-auto" />
          <h3 className="text-3xl md:text-4xl font-medium italic text-gray-700 leading-relaxed">
            "Keeto isn't just an app; it's a bridge between hunger and happiness. We believe every meal should be an experience."
          </h3>
          <div className="h-1 w-24 bg-[#D4AC0D] mx-auto"></div>
        </motion.div>
      </section>

      {/* 5. Dark CTA */}
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-[#121212] rounded-[3rem] p-16 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#D4AC0D]/10 to-transparent"></div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 relative z-10">
            Want to Join Our Journey?
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto relative z-10 text-lg">
            We are always looking for talented individuals and restaurant partners to grow with us.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="bg-[#D4AC0D] text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-transform hover:scale-105 shadow-xl">
              Become a Partner
            </button>
            <button className="border-2 border-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all">
              Join the Team
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;