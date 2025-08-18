import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920')] bg-cover bg-center opacity-20 z-0"></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Building a <span className="text-emerald-200">Greener</span> Future
          </motion.h1>
          <motion.p
            className="text-xl text-emerald-100 max-w-3xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pioneering sustainable construction with innovative eco-design and environmentally conscious practices
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative" data-aos="fade-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80"
                    alt="Early projects"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="mt-12 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                    alt="Team working"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=600&q=80"
                    alt="Construction site"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-emerald-600 rounded-2xl p-8 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">7+</div>
                    <div className="text-xl">Years of Building Dreams</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2" data-aos="fade-left">
              <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Our Journey</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                From a Humble Beginning to GreenArt Builders & Architects
              </h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                In 2018, we started with a simple dream and a small space. That was the beginning of GreenArt Consultants — a humble venture built on big ideas, strong values, and a passion for transforming spaces into homes. With limited resources but unlimited determination, we began our journey in the world of architecture and construction.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Over the years, we faced challenges, learned from every step, and worked hard to build lasting trust with our clients. Every project, big or small, became a stepping stone toward our growth. With a commitment to quality, innovation, and affordability, we steadily earned our place in the industry.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                After 7 years of relentless effort, we have proudly evolved into GreenArt Builders & Architects — a name that reflects our expanded vision and strengthened identity. From a small beginning, we’ve grown into a trusted brand known for building cost-friendly, beautiful, and durable homes that stand the test of time.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                As we move forward, our mission remains the same: to make dream homes a reality — one brick, one beam, and one beautiful design at a time.
              </p>
              <div className="flex items-center mt-8">
                <div className="bg-emerald-100 rounded-full p-4 mr-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">GreenArt Team</h3>
                  <p className="text-emerald-600">Builders & Architects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Sustainability Commitment */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Sustainability</span> Promise
            </h2>
            <p className="text-gray-700 text-lg">
              Building with the planet in mind - today and for future generations
            </p>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Eco-Friendly Materials",
                description: "We prioritize recycled, reclaimed, and renewable materials in all our projects, reducing the environmental footprint of construction.",
                icon: (
                  <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
              {
                title: "Energy Efficiency",
                description: "Our designs incorporate passive solar principles, high-performance insulation, and renewable energy systems to minimize energy consumption.",
                icon: (
                  <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              },
              {
                title: "Water Conservation",
                description: "We implement rainwater harvesting, greywater recycling, and drought-resistant landscaping to reduce water usage by up to 50%.",
                icon: (
                  <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-5">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12" data-aos="fade-right">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Green Art Difference</h3>
                <p className="text-gray-700 mb-6">
                  Our holistic approach to sustainability extends beyond construction materials. We've developed proprietary systems for:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-emerald-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">Carbon-negative building techniques</p>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-emerald-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">Biodiversity enhancement through native plant integration</p>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-emerald-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">Zero-waste construction practices</p>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-emerald-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">Community-focused sustainable development</p>
                  </li>
                </ul>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                  Download Sustainability Report
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="bg-emerald-600 p-8 md:p-12 flex items-center justify-center" data-aos="fade-left">
                <div className="text-center text-white">
                  <div className="text-5xl font-bold mb-4">83%</div>
                  <h4 className="text-2xl font-bold mb-4">Reduction in Carbon Footprint</h4>
                  <p className="text-emerald-100 mb-6">
                    Compared to traditional construction methods across our portfolio
                  </p>
                  <div className="flex justify-center space-x-4">
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-2xl font-bold">45+</div>
                      <div className="text-sm">LEED Projects</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-2xl font-bold">12M+</div>
                      <div className="text-sm">Gallons Water Saved</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Leadership</span> Team
            </h2>
            <p className="text-gray-700 text-lg">
              Visionaries driving sustainable innovation in construction
            </p>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Greenfield",
                role: "Founder & CEO",
                bio: "Sustainable architecture pioneer with 20+ years experience. LEED Fellow and author of 'Building Tomorrow'.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Michael Chen",
                role: "Chief Operations",
                bio: "Expert in green supply chain management. Developed our zero-waste construction methodology.",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Elena Rodriguez",
                role: "Head of Design",
                bio: "Award-winning eco-architect. Specializes in biophilic design and regenerative building systems.",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "David Kim",
                role: "Sustainability Director",
                bio: "Environmental scientist leading our carbon-negative initiatives and green certification programs.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-emerald-600 mb-3">{member.role}</p>
                  <p className="text-gray-700 text-sm">{member.bio}</p>
                  <div className="flex mt-4 space-x-3">
                    <a href="#" className="text-gray-400 hover:text-emerald-600 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-emerald-600 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" /></svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-emerald-600 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16" data-aos="fade-up">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
              Meet Our Full Team
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Certifications</span>
            </h2>
            <p className="text-gray-700 text-lg">
              Recognized for excellence in sustainable construction
            </p>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "LEED Platinum",
                description: "Highest certification for green building design",
                icon: "♻️"
              },
              {
                name: "BREEAM Outstanding",
                description: "World's leading sustainability assessment method",
                icon: "🌍"
              },
              {
                name: "Living Building Challenge",
                description: "Most rigorous performance standard for buildings",
                icon: "🏆"
              },
              {
                name: "WELL Certified",
                "description": "Focus on human health and wellness in buildings",
                icon: "❤️"
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-5xl mb-5">{cert.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-700 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white" data-aos="fade-up">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Sustainably?</h3>
            <p className="max-w-2xl mx-auto mb-8 text-emerald-100">
              Whether you're planning a residential eco-home or a commercial green building, our team is ready to bring your vision to life with minimal environmental impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-emerald-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300">
                Start Your Project
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-emerald-700 font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;