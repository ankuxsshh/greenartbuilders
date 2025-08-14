import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState('design');
  
  const services = [
    {
      id: 'design',
      title: 'Green Building Design',
      description: 'Innovative eco-architecture that harmonizes with nature',
      features: [
        'Biophilic design principles',
        'Energy modeling and simulation',
        'Sustainable material selection',
        'Site-specific climate analysis',
        'Water conservation planning'
      ],
      icon: '📐'
    },
    {
      id: 'construction',
      title: 'Eco-Friendly Construction',
      description: 'Sustainable building methods with minimal environmental impact',
      features: [
        'Low-carbon concrete alternatives',
        'Prefabricated modular systems',
        'Zero-waste construction practices',
        'Non-toxic material handling',
        'Renewable energy integration'
      ],
      icon: '🏗️'
    },
    {
      id: 'renovation',
      title: 'Sustainable Renovations',
      description: 'Transforming existing structures into eco-efficient spaces',
      features: [
        'Energy retrofitting',
        'Material upcycling and reuse',
        'Indoor air quality improvement',
        'Heritage conservation',
        'Water efficiency upgrades'
      ],
      icon: '🔨'
    },
    {
      id: 'interiors',
      title: 'Eco-Interior Design',
      description: 'Healthy, sustainable interiors that promote wellbeing',
      features: [
        'Non-toxic finishes and adhesives',
        'Reclaimed and recycled materials',
        'Natural lighting optimization',
        'Living wall installations',
        'Sustainable furniture sourcing'
      ],
      icon: '🎨'
    },
    {
      id: 'landscape',
      title: 'Sustainable Landscaping',
      description: 'Creating biodiverse outdoor spaces that heal the environment',
      features: [
        'Native plant ecosystems',
        'Permeable paving solutions',
        'Rainwater harvesting systems',
        'Edible gardens and food forests',
        'Wildlife habitat restoration'
      ],
      icon: '🌿'
    },
    {
      id: 'consulting',
      title: 'Green Building Consulting',
      description: 'Expert guidance for sustainable development projects',
      features: [
        'LEED certification support',
        'Carbon footprint analysis',
        'Sustainability reporting',
        'Regulatory compliance',
        'Lifecycle assessment'
      ],
      icon: '📊'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery & Vision",
      description: "We explore your goals and develop a sustainable vision for your project",
      icon: "💡"
    },
    {
      step: 2,
      title: "Eco-Design Development",
      description: "Our architects create innovative green designs tailored to your site",
      icon: "✏️"
    },
    {
      step: 3,
      title: "Material Selection",
      description: "We source sustainable, non-toxic materials with low carbon footprint",
      icon: "🌱"
    },
    {
      step: 4,
      title: "Sustainable Construction",
      description: "Our certified builders implement eco-friendly construction methods",
      icon: "🔧"
    },
    {
      step: 5,
      title: "Quality Assurance",
      description: "Rigorous testing ensures environmental performance standards",
      icon: "✅"
    },
    {
      step: 6,
      title: "Project Completion",
      description: "Handover with sustainability documentation and maintenance guidance",
      icon: "🏆"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1920')] bg-cover bg-center opacity-30 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sustainable <span className="text-emerald-300">Construction Services</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl text-emerald-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Eco-friendly building solutions that create healthier spaces while protecting our planet
          </motion.p>
        </div>
      </section>
      
      {/* Services Navigation */}
      <section className="py-12 bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center ${
                  activeService === service.id 
                    ? 'bg-emerald-600 text-white shadow-lg' 
                    : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                }`}
              >
                <span className="mr-2 text-lg">{service.icon}</span>
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {services.map((service) => (
            service.id === activeService && (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <div className="flex items-center mb-6">
                    <div className="text-6xl mr-4">{service.icon}</div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                      <p className="text-emerald-600 text-lg">{service.description}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-8 text-lg">
                    Our {service.title.toLowerCase()} service combines cutting-edge sustainable practices with 
                    innovative design to create spaces that are both beautiful and environmentally responsible. 
                    We prioritize renewable materials, energy efficiency, and ecological harmony in every project.
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h3>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-6 w-6 text-emerald-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                      Request Consultation
                    </button>
                    <button className="bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold py-3 px-8 rounded-lg transition-colors">
                      View Case Studies
                    </button>
                  </div>
                </div>
                
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl aspect-video flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Service Visualization</span>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Sustainable Process</span>
            </h2>
            <p className="text-gray-700 text-lg">
              A structured approach to eco-friendly construction from concept to completion
            </p>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <motion.div
                key={step.step}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: step.step * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="text-4xl mr-4">{step.icon}</div>
                  <div>
                    <div className="text-sm font-bold text-emerald-600 mb-1">STEP {step.step}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our <span className="text-emerald-600">Eco-Services</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Certified Green Professionals",
                    description: "Our team holds LEED, BREEAM, and Living Future accreditation",
                    icon: "📜"
                  },
                  {
                    title: "Proven Sustainability Results",
                    description: "Average 45% energy reduction in our projects",
                    icon: "📈"
                  },
                  {
                    title: "Holistic Environmental Approach",
                    description: "We consider the entire ecosystem in our designs",
                    icon: "🌍"
                  },
                  {
                    title: "Transparent Process",
                    description: "Clear communication and open-book project management",
                    icon: "🔍"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start p-4 bg-emerald-50 rounded-xl">
                    <div className="text-3xl mr-4">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl aspect-square flex items-center justify-center">
              <span className="text-gray-500 text-lg">Sustainability Impact Visualization</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Sustainably?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-emerald-100">
              Whether you're planning a residential eco-home or a commercial green building, our team is ready to bring your vision to life with minimal environmental impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-emerald-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300">
                Request a Quote
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-emerald-800 font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;