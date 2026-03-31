import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {

  const contactInfo = [
    {
      title: "Our Location",
      description: "123 Food Street, Alexandria, Egypt.",
      icon: FaMapMarkerAlt,
    },
    {
      title: "Phone Number",
      description: "+20 123 456 7890",
      icon: FaPhoneAlt,
    },
    {
      title: "Email Address",
      description: "support@keeto.com",
      icon: FaEnvelope,
    },
    {
      title: "Working Hours",
      description: "24/7 - We never close!",
      icon: FaClock,
    },
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
          Contact <span className="text-[#D4AC0D]">Us</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600"
        >
          Have a question or feedback? We would love to hear from you. Get in touch with our team.
        </motion.p>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.03 }}
                className="bg-white border border-black/10 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 text-center group flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-[#FFF8E1] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D4AC0D] transition-colors duration-300">
                  <Icon className="text-3xl text-[#D4AC0D] group-hover:text-black transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                <p className="text-gray-500 text-sm">{info.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-6">
        <div className="bg-white rounded-[2rem] p-10 shadow-xl relative max-w-4xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold">
              Send Us a <span className="text-[#D4AC0D]">Message</span>
            </h2>
          </div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-gray-700 ml-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 rounded-xl p-4 focus:outline-none focus:border-[#D4AC0D] focus:ring-2 focus:ring-[#D4AC0D]/20 transition-all"
                />
              </div>
              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-gray-700 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 rounded-xl p-4 focus:outline-none focus:border-[#D4AC0D] focus:ring-2 focus:ring-[#D4AC0D]/20 transition-all"
                />
              </div>
            </div>

            {/* Subject Input */}
            <div className="flex flex-col gap-2">
              <label className="font-bold text-gray-700 ml-1">Subject</label>
              <input 
                type="text" 
                placeholder="How can we help you?" 
                className="bg-gray-50 border border-gray-200 text-gray-800 rounded-xl p-4 focus:outline-none focus:border-[#D4AC0D] focus:ring-2 focus:ring-[#D4AC0D]/20 transition-all"
              />
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col gap-2">
              <label className="font-bold text-gray-700 ml-1">Message</label>
              <textarea 
                rows="5" 
                placeholder="Write your message here..." 
                className="bg-gray-50 border border-gray-200 text-gray-800 rounded-xl p-4 focus:outline-none focus:border-[#D4AC0D] focus:ring-2 focus:ring-[#D4AC0D]/20 transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button 
                type="button"
                className="bg-[#D4AC0D] text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full md:w-auto"
              >
                Send Message
              </button>
            </div>
          </motion.form>

        </div>
      </section>

      {/* Dark CTA Section */}
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#121212] rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D4AC0D]/30 rounded-full blur-[100px]"></div>

          <h2 className="text-4xl font-extrabold mb-6 relative z-10">
            Need Help Urgently?
          </h2>

          <p className="text-gray-300 mb-8 max-w-xl mx-auto relative z-10">
            Our customer support team is available 24/7. Give us a call directly to resolve your issue immediately.
          </p>

          <div className="flex justify-center gap-4 flex-wrap relative z-10">
            <button className="bg-[#D4AC0D] text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition shadow-lg hover:shadow-[#D4AC0D]/50">
              Call Hotline
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Contact;