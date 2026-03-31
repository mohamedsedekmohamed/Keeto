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
          Have a question or want to partner with us? We would love to hear from you. Get in touch with our team.
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

      {/* Partner Registration Form Section */}
      <section className="container mx-auto px-6">
        <div className="bg-white rounded-[2rem] p-10 shadow-xl relative max-w-4xl mx-auto border border-gray-100">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4">
              Partner With <span className="text-[#D4AC0D]">Keeto</span>
            </h2>
            <p className="text-gray-500">Register your restaurant or cafe to join our growing network.</p>
          </div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Restaurant / Cafe Name (اسم المطعم/ الكافيه) */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-gray-700 ml-1">Restaurant / Cafe Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. The Great Cafe" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 rounded-xl p-4 focus:outline-none focus:border-[#D4AC0D] focus:ring-2 focus:ring-[#D4AC0D]/20 transition-all"
                />
              </div>

              {/* Business Type (النشاط) */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-gray-700 ml-1">Business Type</label>
                <select className="bg-gray-50 border border-gray-200 text-gray-800 rounded-xl p-4 focus:outline-none focus:border-[#D4AC0D] focus:ring-2 focus:ring-[#D4AC0D]/20 transition-all appearance-none cursor-pointer">
                  <option value="" disabled selected>Select activity...</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="cafe">Cafe</option>
                </select>
              </div>

              {/* Responsible Person Name (اسم المسؤول) */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-gray-700 ml-1">Manager / Contact Person</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 rounded-xl p-4 focus:outline-none focus:border-[#D4AC0D] focus:ring-2 focus:ring-[#D4AC0D]/20 transition-all"
                />
              </div>

              {/* Job Title (الوظيفه) */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-gray-700 ml-1">Job Title</label>
                <input 
                  type="text" 
                  placeholder="e.g. Branch Manager" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 rounded-xl p-4 focus:outline-none focus:border-[#D4AC0D] focus:ring-2 focus:ring-[#D4AC0D]/20 transition-all"
                />
              </div>

              {/* Phone Number (رقم التليفون) */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-gray-700 ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+20 123 456 7890" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 rounded-xl p-4 focus:outline-none focus:border-[#D4AC0D] focus:ring-2 focus:ring-[#D4AC0D]/20 transition-all"
                />
              </div>

              {/* Email Address (ايميل) */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-gray-700 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="contact@business.com" 
                  className="bg-gray-50 border border-gray-200 text-gray-800 rounded-xl p-4 focus:outline-none focus:border-[#D4AC0D] focus:ring-2 focus:ring-[#D4AC0D]/20 transition-all"
                />
              </div>

            </div>

            {/* Additional Info / Comments (اختياري - تركته كمساحة إضافية مفيدة) */}
            <div className="flex flex-col gap-2 pt-2">
              <label className="font-bold text-gray-700 ml-1">Any additional information?</label>
              <textarea 
                rows="3" 
                placeholder="Tell us more about your place..." 
                className="bg-gray-50 border border-gray-200 text-gray-800 rounded-xl p-4 focus:outline-none focus:border-[#D4AC0D] focus:ring-2 focus:ring-[#D4AC0D]/20 transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button 
                type="button"
                className="bg-[#D4AC0D] text-black px-12 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full md:w-auto"
              >
                Submit Request
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
          className="bg-[#121212] rounded-[3rem] p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D4AC0D]/30 rounded-full blur-[100px]"></div>

          <h2 className="text-4xl font-extrabold mb-6 relative z-10">
            Need Help Urgently?
          </h2>

          <p className="text-gray-300 mb-8 max-w-xl mx-auto relative z-10">
            Our support team is available 24/7. Give us a call directly to resolve your issue immediately.
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