import React, { useState } from 'react';
import { Mail, CheckCircle, TrendingUp, Users, Award, BookOpen } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [preferences, setPreferences] = useState({
    insights: true,
    updates: true,
    resources: false,
    events: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      console.log('Newsletter subscription:', { email, preferences });
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handlePreferenceChange = (key: string) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Industry Insights",
      description: "Stay ahead with the latest trends, market analysis, and strategic insights from our experts."
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: "Success Stories",
      description: "Learn from real client case studies and discover proven strategies for business growth."
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Exclusive Content",
      description: "Access premium resources, templates, and tools available only to our subscribers."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-600" />,
      title: "Expert Tips",
      description: "Practical advice and actionable tips from our team of experienced consultants."
    }
  ];

  const recentArticles = [
    {
      title: "5 Strategies for Digital Transformation in 2024",
      excerpt: "Discover the key approaches that successful companies are using to modernize their operations.",
      date: "March 15, 2024",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Building Resilient Teams in Remote Work Environments",
      excerpt: "Learn how to maintain team cohesion and productivity in distributed work settings.",
      date: "March 10, 2024",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Financial Planning for Business Growth",
      excerpt: "Essential financial strategies every growing business needs to implement.",
      date: "March 5, 2024",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="pb-20 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Mail className="h-16 w-16 text-white mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Stay Updated</h1>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest insights, industry trends, and exclusive content delivered directly to your inbox.
            </p>

            {!isSubmitted ? (
              <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-6 py-4 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">What would you like to receive?</h3>
                    <div className="space-y-3">
                      {[
                        { key: 'insights', label: 'Weekly Industry Insights' },
                        { key: 'updates', label: 'Company Updates & News' },
                        { key: 'resources', label: 'Exclusive Resources & Templates' },
                        { key: 'events', label: 'Event Invitations & Webinars' }
                      ].map((option) => (
                        <label key={option.key} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={preferences[option.key as keyof typeof preferences]}
                            onChange={() => handlePreferenceChange(option.key)}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="ml-3 text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 font-semibold"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-3 text-green-600 mb-4">
                  <CheckCircle className="h-8 w-8" />
                  <span className="text-2xl font-bold">Thank you for subscribing!</span>
                </div>
                <p className="text-gray-600">
                  You'll receive a confirmation email shortly. Welcome to our community!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What You'll Get</h2>
            <p className="text-xl text-gray-600">
              Join thousands of professionals who trust us for valuable business insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Articles</h2>
            <p className="text-xl text-gray-600">
              Get a taste of the valuable content our subscribers receive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-blue-600 font-semibold mb-2">{article.date}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600">{article.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Active Subscribers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Weekly</div>
              <div className="text-blue-100">Fresh Content</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;