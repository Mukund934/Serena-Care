
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agree: false,
    captcha: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Please tell us what brings you here';
    if (!formData.preferredTime.trim()) newErrors.preferredTime = 'Preferred time to reach you is required';
    if (!formData.agree) newErrors.agree = 'You must agree to be contacted';
    if (!formData.captcha) newErrors.captcha = 'Please verify you are not a robot';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. Dr. Blake will contact you within 24 hours.",
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        preferredTime: '',
        agree: false,
        captcha: false
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - About Dr. Blake */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="w-80 h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/Images/3a197a3e-b9c6-4d7b-b67f-8e55a392205f.png" 
                  alt="Dr. Serena Blake"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Hi, I'm Dr. Serena Blake, PsyD</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                I'm a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. I blend evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you meet in my Maplewood Drive office or connect virtually via Zoom, I'm committed to creating a safe, supportive space for you to thrive.
              </p>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div>
            <div className="bg-teal-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">Get In Touch</h3>
              <p className="text-center text-gray-600 mb-6">
                Simply fill out the brief fields below and Dr. Blake will be in touch with you soon, usually within one business day. This form is safe, private, and completely free.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full ${errors.phone ? 'border-red-500' : ''}`}
                    placeholder="(323) 555-0192"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">What brings you here?</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="Tell me about what's bringing you to seek counseling..."
                    rows={4}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred time to reach you</label>
                  <Input
                    type="text"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className={`w-full ${errors.preferredTime ? 'border-red-500' : ''}`}
                    placeholder="e.g. Weekday mornings, Tuesday evenings, etc."
                  />
                  {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    checked={formData.agree}
                    onCheckedChange={(checked) => setFormData({ ...formData, agree: checked as boolean })}
                    className={errors.agree ? 'border-red-500' : ''}
                  />
                  <label className="text-sm text-gray-700">
                    I agree to be contacted by Dr. Serena Blake regarding my inquiry
                  </label>
                </div>
                {errors.agree && <p className="text-red-500 text-sm mt-1">{errors.agree}</p>}

                {/* reCAPTCHA placeholder */}
                <div className="bg-gray-100 p-4 rounded border">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      checked={formData.captcha}
                      onCheckedChange={(checked) => setFormData({ ...formData, captcha: checked as boolean })}
                      className={errors.captcha ? 'border-red-500' : ''}
                    />
                    <div className="flex-1">
                      <label className="text-sm text-gray-700">I'm not a robot</label>
                      <div className="text-xs text-gray-500 mt-1">reCAPTCHA</div>
                    </div>
                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">📋</span>
                    </div>
                  </div>
                  {errors.captcha && <p className="text-red-500 text-sm mt-1">{errors.captcha}</p>}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-teal-800 hover:bg-teal-900 text-white py-3 text-lg font-medium rounded-lg"
                >
                  Submit
                </Button>

                <div className="text-xs text-gray-500 text-center mt-4">
                  <p>🔒 By submitting, you confirm you are 18+ and agree to our Privacy Policy & TOS and to receive emails & texts from Dr. Blake.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
