import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend or newsletter service
      console.log('Newsletter subscription:', email);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Mail className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest insights, industry trends, and exclusive content delivered directly to your inbox.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-blue-200 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors duration-200 font-semibold whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center space-x-2 text-white">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <span className="text-lg">Thank you for subscribing!</span>
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="text-blue-100">
              <div className="text-2xl font-bold text-white">Weekly</div>
              <div>Industry Insights</div>
            </div>
            <div className="text-blue-100">
              <div className="text-2xl font-bold text-white">Monthly</div>
              <div>Success Stories</div>
            </div>
            <div className="text-blue-100">
              <div className="text-2xl font-bold text-white">Exclusive</div>
              <div>Resources & Tips</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;