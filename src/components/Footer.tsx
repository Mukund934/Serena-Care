
const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Insurance Notice */}
        <div className="bg-red-100 border border-red-300 rounded-lg p-4 mb-8">
          <div className="flex items-start">
            <span className="text-red-500 mr-2">⚠️</span>
            <div className="text-red-700">
              <strong>Please Note:</strong>
              <p className="mt-1">
                I do not take insurance directly. However, I can provide you with a billing sheet with the necessary facts and codes so you can file for out-of-network benefits with your insurance company.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/Images/logo.png"
                alt="Ellie Shumaker Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="font-bold">Dr. Serena Blake</h3>
                <p className="text-sm opacity-90">Clinical Psychologist</p>
              </div>
            </div>
            
            <p className="text-sm opacity-90 mb-4">
              Christian Counseling Services in Los Angeles & Central California
            </p>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <span>⭐</span>
                <span>Top Rated</span>
              </div>
              <div>8 Years Experience</div>
              <div>500+ Sessions</div>
            </div>
            
            <div className="mt-4 text-sm">
              <p>1287 Maplewood Drive</p>
              <p>Los Angeles, CA 90026</p>
              <p className="mt-2">📞 (323) 555-0192</p>
              <p>✉️ serena@blakepsychology.com</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#contact" className="hover:text-teal-200 transition-colors">Get In Touch</a></li>
              <li><a href="#about" className="hover:text-teal-200 transition-colors">About Me</a></li>
              <li><a href="#faq" className="hover:text-teal-200 transition-colors">FAQ's</a></li>
              <li><a href="#services" className="hover:text-teal-200 transition-colors">Therapies</a></li>
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h4 className="font-bold mb-4">Areas Served</h4>
            <ul className="space-y-1 text-sm">
              <li>Los Angeles, CA</li>
              <li>Hollywood, CA</li>
              <li>Beverly Hills, CA</li>
              <li>Santa Monica, CA</li>
              <li>West Hollywood, CA</li>
              <li>Pasadena, CA</li>
              <li>Glendale, CA</li>
              <li>Burbank, CA</li>
              <li>Culver City, CA</li>
              <li>Manhattan Beach, CA</li>
              <li>Redondo Beach, CA</li>
              <li>Torrance, CA</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Christian Individual Counseling in Los Angeles, CA</li>
              <li>Christian Couples Counseling in Los Angeles, CA</li>
              <li>Anxiety & Stress Management</li>
              <li>Relationship Counseling</li>
              <li>Trauma Recovery</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-teal-700 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75">
            Dr. Serena Blake © Copyright 2024. All Rights Reserved.
          </p>
          <p className="text-xs opacity-60 mt-2">
            Privacy Policy & Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
