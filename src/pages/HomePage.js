import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';

function HomePage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    { name: "John D.", feedback: "The team was professional and exceeded my expectations!" },
    { name: "Sarah K.", feedback: "Excellent quality and attention to detail. Highly recommend!" },
    { name: "Michael P.", feedback: "They made my renovation stress-free and the result was stunning." },
  ];

  const services = [
    {
      title: "Residential Construction",
      description: "Custom homes, renovations, and extensions built to perfection.",
      icon: "🏠"
    },
    {
      title: "Commercial Projects",
      description: "Office spaces, retail complexes, and industrial buildings.",
      icon: "🏢"
    },
    {
      title: "Interior Design",
      description: "Transform spaces with our expert design and execution.",
      icon: "🎨"
    },
    {
      title: "Project Management",
      description: "End-to-end oversight ensuring quality and timely delivery.",
      icon: "📊"
    }
  ];

  // Fetch projects
  useEffect(() => {
    axios.get('/api/projects/')
      .then(res => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Init AOS animations
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Hero Section - Modern Design */}
      <section className="relative py-40 md:py-52 bg-gradient-to-r from-white-900 to-white-900 text-white">
        <div className="absolute inset-0 bg-white/40 z-0"></div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-green-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Building Dreams, <br className="hidden md:block" />
              <span className="text-amber-400">Crafting Realities</span>
            </motion.h1>
            <p className="text-xl mb-8 text-green-900 max-w-lg">
              Premier construction and development services with 15+ years of excellence
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                Get Started
              </button>
              <button className="bg-green-500 border-2 border-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Know more
              </button>
            </div>
          </div>
          <motion.div
            className="md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full border-4 border-green-600 rounded-2xl z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Modern Architecture"
                className="w-full h-auto rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section - Updated Design */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
                    alt="Construction site"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="mt-12 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
                    alt="Building design"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1096&q=80"
                    alt="Construction team"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-green-800 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-5xl font-bold mb-2">15+</div>
                    <div className="text-xl">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <span className="text-green-600 font-bold tracking-wider">ABOUT US</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Building Excellence Since 2008
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                At GreenArt Builders & Architects, we bring your dream home to life with expert craftsmanship, innovative designs, and cost-friendly solutions. With over six years of experience in the industry, we have built a strong reputation for delivering high-quality residential constructions tailored to our clients' needs and budgets.

Our team of skilled professionals ensures every project is built with strength, style, and sustainability, making your investment worthwhile. From foundation to finishing, we handle every aspect with precision, ensuring durability and elegance in every detail
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Licensed & insured construction specialists",
                  "Sustainable building practices",
                  "Client-centered approach",
                  "Quality assurance at every stage"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <button className="bg-green-800 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - New Addition */}
      <section className="py-20 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Services</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive solutions from concept to completion
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -10 }}
              >
                <div className="p-6">
                  <div className="text-5xl mb-5 text-amber-500 group-hover:text-green-600 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-green-100">
            Contact us today for a free consultation and let's bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300">
              Request a Quote
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-green-700 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* New Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why <span className="text-green-600">Choose Our Construction Expertise</span>
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Building excellence through innovation, precision, and unwavering commitment
            </motion.p>
            <motion.div
              className="w-24 h-1 bg-amber-500 mx-auto mt-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
          </div>

          <div className="space-y-24">
            {[
              {
                title: "Skilled Professionals",
                description: "Our team combines deep industry knowledge with technical expertise. With an average of 12+ years in construction, our professionals bring precision and innovation to every project.",
                image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                stats: [
                  { value: "15+", label: "Certified Engineers" },
                  { value: "98%", label: "Project Success Rate" }
                ],
                icon: "👷",
                tags: ["Architects", "Engineers", "Project Managers"]
              },
              {
                title: "Quality Assurance",
                description: "We adhere to international construction standards with rigorous quality control at every stage. Our 5-point inspection process ensures structural integrity and longevity for all projects.",
                image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                stats: [
                  { value: "ISO 9001", label: "Certified" },
                  { value: "250+", label: "Quality Checks" }
                ],
                icon: "✅",
                tags: ["Material Testing", "Safety Protocols", "Compliance"]
              },
              {
                title: "Timely Delivery",
                description: "Our project management methodology ensures on-time completion without compromising quality. We've delivered 98% of projects ahead of schedule through efficient resource allocation.",
                image: "https://insightssuccess.com/wp-content/uploads/2024/10/How-Does-Choosing-Builders-in-Chennai-Ensure-Quality-and-Timely-Delivery.jpg",
                stats: [
                  { value: "98%", label: "On-Time Delivery" },
                  { value: "24/7", label: "Project Monitoring" }
                ],
                icon: "⏱️",
                tags: ["Scheduling", "Resource Planning", "Efficiency"]
              },
              {
                title: "Client Satisfaction",
                description: "We build lasting relationships through transparent communication and exceptional service. Our client retention rate of 85% demonstrates our commitment to exceeding expectations.",
                image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                stats: [
                  { value: "4.9/5", label: "Client Rating" },
                  { value: "85%", label: "Repeat Business" }
                ],
                icon: "🤝",
                tags: ["Communication", "Transparency", "Support"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                {/* Image Section */}
                <div className="md:w-1/2 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-72 md:h-96 object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-green-600 text-white text-3xl p-4 rounded-full shadow-lg">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {feature.stats.map((stat, statIndex) => (
                      <div
                        key={statIndex}
                        className="bg-white p-4 rounded-xl shadow-md border border-gray-100"
                      >
                        <div className="text-2xl font-bold text-green-700">{stat.value}</div>
                        <div className="text-gray-600 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Text Content */}
                <div className="md:w-1/2">
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg relative">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="mr-3">{feature.title}</span>
                    </h3>
                    <p className="text-gray-700 mb-6">{feature.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {feature.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg flex items-center transition-all duration-300 group">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced Design */}
      <section className="py-20 bg-green-800 text-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client <span className="text-amber-400">Testimonials</span>
            </h2>
            <p className="text-green-300">
              Hear what our satisfied clients have to say about our work
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-green-700 rounded-2xl p-8 md:p-12 shadow-xl"
              >
                <div className="flex items-start">
                  <svg className="h-12 w-12 text-amber-400 mr-6 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <div>
                    <p className="text-xl italic mb-6 text-gray-200">
                      "{testimonials[testimonialIndex].feedback}"
                    </p>
                    <div className="flex items-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                      <div className="ml-4">
                        <h4 className="font-bold text-lg">{testimonials[testimonialIndex].name}</h4>
                        <p className="text-amber-400">Satisfied Client</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`w-3 h-3 rounded-full ${i === testimonialIndex ? "bg-amber-400" : "bg-gray-600"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <div className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Contact Header */}
          <div className="text-center mb-16">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-green-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-gray-700 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Get in touch with our team to discuss your sustainable building project.
            </motion.p>
          </div>

          {/* Contact Grid */}
          <div className="flex flex-col lg:flex-row gap-12 mb-16">
            {/* Contact Form */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 h-full">
                <h2 className="text-2xl font-semibold text-green-700 mb-6">
                  Send us a message
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:-translate-y-0.5"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-green-800 text-white rounded-2xl shadow-lg p-8 h-full">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-green-600 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-green-100">+1 (555) 123-4567</p>
                      <p className="text-green-100">+1 (555) 987-6543</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-600 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-green-100">contact@ecobuild.com</p>
                      <p className="text-green-100">support@ecobuild.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-600 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Office</h3>
                      <p className="text-green-100">123 Green Avenue</p>
                      <p className="text-green-100">Eco Park, CA 94107</p>
                      <p className="text-green-100">United States</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-green-700">
                  <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
                  <div className="flex justify-between text-green-100">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-green-100 mt-2">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-green-100 mt-2">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Find Our Office</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-96 w-full relative">
                {/* This would be replaced with an actual map component */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-teal-100 border-2 border-dashed border-green-300 rounded-xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="bg-green-800 text-white p-4 rounded-full inline-block mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">123 Green Avenue, Eco Park</h3>
                    <p className="text-gray-600">San Francisco, CA 94107, United States</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-green-50 border-t border-green-100">
                <p className="text-center text-green-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Easy access via public transportation | Ample parking available
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;