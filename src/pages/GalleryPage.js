import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projectCategories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'interior', name: 'Interior Design' },
    { id: 'landscape', name: 'Landscape' },
  ];
  
  const projects = [
    {
      id: 1,
      title: "Eco Luxury Residence",
      category: "residential",
      location: "Malibu, CA",
      description: "Net-zero energy home with solar integration and recycled materials",
      features: ["Solar panels", "Green roof", "Rainwater harvesting"]
    },
    {
      id: 2,
      title: "Urban Office Complex",
      category: "commercial",
      location: "Seattle, WA",
      description: "LEED Platinum certified commercial building with biophilic design",
      features: ["Natural ventilation", "Living walls", "Smart lighting"]
    },
    {
      id: 3,
      title: "Sustainable Cafe Interior",
      category: "interior",
      location: "Portland, OR",
      description: "Eco-friendly cafe using reclaimed wood and energy-efficient fixtures",
      features: ["Reclaimed materials", "LED lighting", "Indoor plants"]
    },
    {
      id: 4,
      title: "Coastal Retreat",
      category: "residential",
      location: "Santa Barbara, CA",
      description: "Beachfront property with sustainable materials and erosion control",
      features: ["Salvaged wood", "Native landscaping", "Solar heating"]
    },
    {
      id: 5,
      title: "Corporate Headquarters",
      category: "commercial",
      location: "San Francisco, CA",
      description: "Green office space with rooftop garden and EV charging stations",
      features: ["Rooftop garden", "EV charging", "Natural daylighting"]
    },
    {
      id: 6,
      title: "Native Garden Design",
      category: "landscape",
      location: "Boulder, CO",
      description: "Drought-resistant landscape with rainwater catchment system",
      features: ["Xeriscaping", "Permeable paving", "Wildlife habitat"]
    },
    {
      id: 7,
      title: "Mountain Eco-Lodge",
      category: "commercial",
      location: "Aspen, CO",
      description: "Sustainable mountain retreat with geothermal heating",
      features: ["Geothermal heating", "Local stone", "Energy recovery"]
    },
    {
      id: 8,
      title: "Urban Rooftop Farm",
      category: "landscape",
      location: "Chicago, IL",
      description: "Commercial building rooftop transformed into productive urban farm",
      features: ["Edible garden", "Compost system", "Pollinator habitat"]
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1920')] bg-cover bg-center opacity-30 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-emerald-300">Sustainable Projects</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl text-emerald-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Showcasing eco-friendly construction that harmonizes with nature
          </motion.p>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="py-12 bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === category.id 
                    ? 'bg-emerald-600 text-white shadow-lg' 
                    : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  {/* Placeholder for image - in real app this would be an actual image */}
                  <div className="w-full h-full bg-gray-200 border-2 border-dashed flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Project Image</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="text-emerald-600 text-sm">{project.location}</span>
                  </div>
                  
                  <p className="text-gray-700 my-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-medium py-2 px-4 rounded-lg transition-colors">
                    View Project Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-700">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "250+", label: "Projects Completed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "45+", label: "LEED Certified" },
              { value: "12M+", label: "Gallons Water Saved" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-emerald-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Your Sustainable Project</h3>
                <p className="text-gray-700 mb-6">
                  Ready to create an eco-friendly space? Our team of green building experts is ready to bring your vision to life.
                </p>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  Request Consultation
                </button>
              </div>
              <div className="bg-emerald-600 p-8 md:p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-5xl mb-4">♻️</div>
                  <h4 className="text-xl font-bold mb-4">Eco-Friendly Construction</h4>
                  <p className="text-emerald-100">
                    Building a greener future, one project at a time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;