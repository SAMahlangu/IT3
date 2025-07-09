import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, TrendingUp, Users, Shield, Zap, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      title: "Data Cabling & Wireless Networks",
      description: "Professional installation and maintenance of network infrastructure for optimal connectivity.",
      features: ["Structured Cabling", "Wireless Network Setup", "Network Maintenance", "Cable Management"],
      price: "Quote on Request"
    },
    {
      icon: <Zap className="h-12 w-12 text-teal-600" />,
      title: "Fibre Optic Installation",
      description: "High-speed fibre optic solutions including multi-mode, single mode, and fusion splicing.",
      features: ["Multi-mode Installation", "Single Mode Setup", "Fusion Splicing", "Direct Splicing"],
      price: "Quote on Request"
    },
    {
      icon: <Shield className="h-12 w-12 text-orange-600" />,
      title: "CCTV Solutions",
      description: "Complete security camera systems with installation, maintenance, and repair services.",
      features: ["CCTV Installation", "System Maintenance", "Camera Repairs", "Remote Monitoring"],
      price: "Quote on Request"
    },
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: "Office Telephone Systems",
      description: "Modern communication solutions for businesses of all sizes.",
      features: ["PBX Systems", "VoIP Solutions", "System Integration", "Technical Support"],
      price: "Quote on Request"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-purple-600" />,
      title: "Server & Hardware Solutions",
      description: "Complete hardware solutions including servers, desktops, laptops, and printers.",
      features: ["Server Configuration", "Desktop Setup", "Laptop Support", "Printer Installation"],
      price: "Quote on Request"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-indigo-600" />,
      title: "Electrical Installation",
      description: "Professional electrical services to support your IT infrastructure needs.",
      features: ["Power Solutions", "UPS Installation", "Electrical Maintenance", "Safety Compliance"],
      price: "Quote on Request"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We start by understanding your business, challenges, and goals through comprehensive analysis."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Our experts develop a customized strategy tailored to your specific needs and objectives."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We work closely with your team to implement solutions and ensure smooth execution."
    },
    {
      step: "04",
      title: "Monitoring & Optimization",
      description: "Continuous monitoring and optimization to ensure sustained success and growth."
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="pb-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">ICT Solutions & Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive package of ICT services to meet all your technology infrastructure needs across South Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-6">
                  <p className="text-lg font-semibold text-blue-600">{service.price}</p>
                </div>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              A proven methodology that ensures successful outcomes for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business objectives and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;