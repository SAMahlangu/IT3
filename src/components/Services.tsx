import React from 'react';
import { Briefcase, TrendingUp, Users, Shield, Zap, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Briefcase className="h-12 w-12 text-blue-600" />,
      title: "Business Consulting",
      description: "Strategic guidance to help your business grow and adapt to market changes.",
      features: ["Strategic Planning", "Market Analysis", "Process Optimization", "Growth Strategy"]
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-teal-600" />,
      title: "Financial Advisory",
      description: "Expert financial planning and analysis to maximize your business potential.",
      features: ["Financial Planning", "Investment Strategy", "Risk Management", "Performance Analysis"]
    },
    {
      icon: <Users className="h-12 w-12 text-orange-600" />,
      title: "Team Development",
      description: "Build stronger teams through training, coaching, and development programs.",
      features: ["Leadership Training", "Team Building", "Skills Development", "Performance Coaching"]
    },
    {
      icon: <Shield className="h-12 w-12 text-green-600" />,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies for your business.",
      features: ["Risk Assessment", "Compliance Management", "Security Audits", "Crisis Management"]
    },
    {
      icon: <Zap className="h-12 w-12 text-purple-600" />,
      title: "Digital Transformation",
      description: "Modernize your operations with cutting-edge technology solutions.",
      features: ["Process Automation", "Digital Strategy", "Technology Integration", "Data Analytics"]
    },
    {
      icon: <Globe className="h-12 w-12 text-indigo-600" />,
      title: "Market Expansion",
      description: "Strategic support for entering new markets and scaling operations.",
      features: ["Market Research", "Expansion Planning", "Partnership Development", "International Growth"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs. We offer a full range of professional services to help you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 font-semibold">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;