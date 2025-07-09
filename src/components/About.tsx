import React from 'react';
import { CheckCircle, Award, Users, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Industry Excellence",
      description: "Recognized leaders in our field with multiple industry awards and certifications."
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: "Expert Team",
      description: "Highly skilled professionals with decades of combined experience and expertise."
    },
    {
      icon: <Target className="h-8 w-8 text-orange-600" />,
      title: "Results Focused",
      description: "Committed to delivering measurable results that drive your business forward."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      title: "Proven Track Record",
      description: "Consistently successful outcomes across diverse industries and business sizes."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Company</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to providing exceptional service and innovative solutions that help businesses thrive in today's competitive landscape.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional office environment"
              className="rounded-2xl shadow-xl"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Building Success Through Innovation
              </h3>
              <p className="text-gray-600 mb-6">
                With over a decade of experience, we've helped hundreds of businesses achieve their goals through strategic planning, innovative solutions, and dedicated support. Our approach combines industry best practices with cutting-edge technology to deliver results that matter.
              </p>
              <p className="text-gray-600">
                We believe in building long-term partnerships with our clients, providing ongoing support and continuously evolving our services to meet changing market demands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="mb-4">{feature.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;