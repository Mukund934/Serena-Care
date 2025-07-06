
const MapSection = () => {
  return (
    <section className="py-0">
      {/* Google Maps Embed */}
      <div className="w-full h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.123456789!2d-118.2436849!3d34.0522265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzA4LjAiTiAxMTjCsDE0JzM3LjMiVw!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dr. Serena Blake Office Location"
        ></iframe>
      </div>

      {/* Contact Information Section */}
      <div className="bg-teal-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Office Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Office</h3>
                <div className="text-gray-700 space-y-1">
                  <p>1287 Maplewood Drive</p>
                  <p>Los Angeles, CA 90026</p>
                  <button className="mt-3 bg-gray-800 text-white px-4 py-2 rounded text-sm hover:bg-gray-700 transition-colors">
                    Google Maps
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Hours</h3>
                <div className="text-gray-700 space-y-1">
                  <p>Tuesday: 10:00 AM - 6:00 PM</p>
                  <p>Thursday: 10:00 AM - 6:00 PM</p>
                  <p>Monday: 1:00 PM - 5:00 PM (Virtual)</p>
                  <p>Wednesday: 1:00 PM - 5:00 PM (Virtual)</p>
                  <p>Friday: 1:00 PM - 5:00 PM (Virtual)</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact</h3>
                <div className="text-gray-700 space-y-1">
                  <p>📞 (323) 555-0192</p>
                  <p>✉️ serena@blakepsychology.com</p>
                </div>
              </div>
            </div>

            {/* Right Side - Get In Touch Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Get In Touch</h3>
              <p className="text-gray-600 mb-6">
                Simply fill out the brief fields below and Dr. Blake will be in touch with you soon, usually within one business day. This form is safe, private, and completely free.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="(555) 234-5678"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    placeholder="How can I help you?"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>
                
                <div className="bg-gray-100 p-4 rounded border">
                  <div className="flex items-start space-x-3">
                    <input type="checkbox" className="mt-1" />
                    <div className="flex-1">
                      <label className="text-sm text-gray-700">I'm not a robot</label>
                      <div className="text-xs text-gray-500 mt-1">reCAPTCHA</div>
                    </div>
                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">📋</span>
                    </div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-teal-800 hover:bg-teal-900 text-white py-3 rounded-md font-medium transition-colors"
                >
                  Submit
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  🔒 By submitting, you confirm you are 18+ and agree to our Privacy Policy & TOS and to receive emails & texts from Dr. Serena Blake.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
