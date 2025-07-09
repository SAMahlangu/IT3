import React, { useState, useMemo } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

/**
 * Google Maps API key supplied by user.
 * NOTE: In production you should NEVER hard‑code a private key.
 * Instead, keep it in an env var (eg. VITE_GOOGLE_MAPS_API_KEY) or a secure vault.
 */
const GOOGLE_MAPS_API_KEY = "AIzaSyB6tSGQTeFbaS0mxyN-v3ePJ0gojitIIOE";

const libraries: ("places")[] = ["places"]; // preload Places lib for future autocomplete features

const Contact: React.FC = () => {
  /* --------------------------- contact form logic -------------------------- */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* ----------------------------- google maps ------------------------------ */
  const { isLoaded } = useLoadScript({ key: GOOGLE_MAPS_API_KEY, libraries });

  // Approximate coordinates for "123 Business St, New York, NY 10001"
  const center = useMemo(() => ({ lat: 40.750505, lng: -73.993439 }), []);

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Phone",
      details: "(555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: <Mail className="h-6 w-6 text-teal-600" />,
      title: "Email",
      details: "info@example.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: <MapPin className="h-6 w-6 text-orange-600" />,
      title: "Office",
      details: "123 Business St, Suite 100",
      description: "New York, NY 10001",
    },
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      title: "Hours",
      details: "Mon-Fri: 9AM-6PM",
      description: "Weekend: By appointment",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take your business to the next level? Contact us today for a
            free consultation and discover how we can help you achieve your
            goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* ------------------------ Contact information ----------------------- */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    <p className="text-gray-800">{info.details}</p>
                    <p className="text-sm text-gray-600">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ---------------------------- Google Map --------------------------- */}
            <div className="mt-12 rounded-xl overflow-hidden shadow-lg h-64">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={{ width: "100%", height: "100%" }}
                  center={center}
                  zoom={15}
                  options={{
                    disableDefaultUI: true,
                    gestureHandling: "cooperative",
                  }}
                >
                  <Marker position={center} />
                </GoogleMap>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  Loading map…
                </div>
              )}
            </div>
          </div>

          {/* ------------------------------ Contact form ----------------------------- */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="services">Services Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project or how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
