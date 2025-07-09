import React from 'react';
import { CheckCircle, Award, Users, Target, TrendingUp, Globe } from 'lucide-react';

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

  const stats = [
    { number: '500+', label: 'Clients Served', icon: <Users className="h-8 w-8 text-blue-600" /> },
    { number: '95%', label: 'Success Rate', icon: <TrendingUp className="h-8 w-8 text-green-600" /> },
    { number: '15+', label: 'Years Experience', icon: <Award className="h-8 w-8 text-orange-600" /> },
    { number: '25+', label: 'Countries', icon: <Globe className="h-8 w-8 text-teal-600" /> }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'With over 15 years of experience in business consulting, Sarah leads our team with vision and expertise.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Strategy',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Michael brings deep analytical skills and strategic thinking to help clients achieve their goals.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Emily ensures seamless project execution and maintains our high standards of service delivery.'
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="pb-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Madibana IT Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              South Africa's most trusted ICT company providing comprehensive IT solutions and cabling services nationwide since 2012.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Closing the Digital Divide in South Africa
                </h2>
                <p className="text-gray-600 mb-6">
                  Since 2012, Madibana IT Solutions and Cabling (PTY) Ltd has been providing ICT solutions for the most perceptive customers. We are big enough to provide a nationwide service, yet small enough to care about our customers' individual ICT enablement needs.
                </p>
                <p className="text-gray-600 mb-6">
                  Our approach to customers is not only providing products but also to have a complete solution. There are no bounds to what type of solution we can provide. We are able to provide the right solutions and deliver our commitment within the agreed timeframe.
                </p>
                <p className="text-gray-600">
                  We provide ICT support services on-site at our clients' offices or their customers' premises - be it at work or at home. End User support is one of the most vital functions in any organisation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600">
              These numbers represent the trust our clients place in us and the results we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600">
              Our unique approach and commitment to excellence make us the preferred choice for businesses worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Trusted Clients & Partners</h2>
            <p className="text-xl text-gray-600">
              We're proud to serve leading organizations across South Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'IEC (Electoral Commission of South Africa)',
              'Development Bank of Southern Africa (DBSA)',
              'Mpumalanga University',
              'Tshwane University of Technology',
              'South African Social Security Agency (SASSA)',
              'SITA (State Information Technology Agency)',
              'Limpopo Department of Sport, Arts and Culture',
              'Limpopo Department of Agriculture',
              'Mopani District Municipality',
              'Polokwane Local Municipality',
              'Maruleng Local Municipality',
              'Blouberg Local Municipality'
            ].map((client, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-900">{client}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;