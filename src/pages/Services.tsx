
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: "Christian Individual Counseling in Richmond, VA",
      description: "Discover Peace, Purpose, and God's Truth in Richmond, VA.",
      image: "/Images/8cd5c2ca-a22f-4997-ba0b-91f31b945ae9.png",
      buttonText: "Learn More"
    },
    {
      title: "Christian Couples Counseling in Richmond, VA", 
      description: "Heal Your Relationship, Grow Closer to God Together in Richmond.",
      image: "/Images/824e8eff-c45e-4251-baff-a32aa12ef6e1.png",
      buttonText: "Learn More"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How I Help</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {services.map((service, index) => (
              <Card key={index} className="bg-teal-100 border-teal-200 rounded-3xl overflow-hidden">
                <div className="p-6">
                  <div className="h-48 bg-teal-50 rounded-2xl mb-6 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <Button 
                      variant="outline" 
                      className="w-full bg-transparent border-gray-400 text-gray-700 hover:bg-gray-100 rounded-full"
                    >
                      {service.buttonText}
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Decorative plant element */}
          <div className="flex justify-end mt-8">
            <div className="w-16 h-20 opacity-60">
              <svg viewBox="0 0 64 80" className="w-full h-full fill-green-600">
                <path d="M32 80C32 80 16 64 16 48C16 32 24 24 32 32C40 24 48 32 48 48C48 64 32 80 32 80Z"/>
                <path d="M28 60C28 60 20 52 20 44C20 36 24 32 28 36C32 32 36 36 36 44C36 52 28 60 28 60Z"/>
                <path d="M36 60C36 60 44 52 44 44C44 36 40 32 36 36C32 32 28 36 28 44C28 52 36 60 36 60Z"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule A Consultation Section */}
      <section className="py-16 bg-teal-800 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">Schedule A Consultation</h2>
              <p className="text-xl opacity-90">Ellie Shumaker is currently accepting new clients. Available for online and in-person sessions.</p>
            </div>
            <Button 
              onClick={scrollToContact}
              className="bg-white text-teal-800 hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-lg"
            >
              ⭐ Start Healing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
