'use client';

const About = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-20 bg-teal-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="flex justify-center">
              <div className="w-80 h-96 bg-white rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/Images/3a197a3e-b9c6-4d7b-b67f-8e55a392205f.png"
                  alt="Dr. Serena Blake"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-[#fef3c7] inline-block px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-gray-800">
                  About Dr. Serena Blake, PsyD • Licensed Clinical Psychologist in Los Angeles,CA
                </span>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Hi I'm Dr. Serena Blake, PsyD</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured In Section */}
      <section className="py-12 bg-[#ccfbf1]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">Featured In</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <img src="/Images/3d5d4596-ece2-48ef-af7d-c165c3bf3c49.png" alt="Psychology Today" className="h-8" />
            <img src="/Images/613446d7-3a39-426a-84ab-00fbc793a680.png" alt="Theravive" className="h-8" />
            <img src="/Images/6bfca902-1fd0-4d27-8b6f-2b7a07d302a8.png" alt="Christian Counselor Directory" className="h-8" />
            <img src="/Images/therapist-logo.png" alt="Therapist.com" className="h-8" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#b5d9dd]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-sm font-medium bg-[#fef3c7] px-3 py-1 rounded-full">Client Success Stories & Testimonials</span>
            <h2 className="text-3xl font-bold mt-4 mb-2">What Former Clients Say</h2>
            <p className="text-sm text-gray-800 max-w-xl">Real experiences from individuals who have found healing and growth through our work together.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-sm mb-2">Happy Client</h4>
              <p className="text-sm text-gray-700">
                Client testimonials are <strong>coming soon</strong>. Please check back later for insights from those who have worked with Ellie Shumaker, LCSW.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-sm mb-2">Happy Client</h4>
              <p className="text-sm text-gray-700">
                Client testimonials are <strong>coming soon</strong>. Please check back later for insights from those who have worked with Ellie Shumaker, LCSW.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ellie's Books Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-sm font-medium bg-yellow-100 text-gray-800 px-2 py-1 rounded-full">Authored Works</span>
            <h2 className="text-3xl font-bold mt-3">Ellie's Books</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Baby Dolls & Ninja Swords: 6 True Tales of Play Therapy',
                image: '/Images/babydolls.png',
                available: 'Available on Amazon',
                formats: 'Formats: Kindle & Paperback',
                button: 'View on Amazon'
              },
              {
                title: 'Frozen Tears: 15 Stories of Blindness & Hope after Abortion',
                image: '/Images/tears.png',
                available: 'Available on Amazon',
                formats: 'Formats: Kindle & Paperback',
                button: 'View on Amazon'
              },
              {
                title: '99 Devotionals: Heart Reactions and Soul Stretches from the Book of Acts',
                image: '/Images/heartReaction.png',
                available: 'Available on Amazon',
                formats: 'Format: Kindle format',
                button: 'View on Amazon'
              },
              {
                title: 'Passion with Principle: How to Turn Romance into Lifelong Love',
                image: '/Images/coverImgComingSoon.png',
                available: 'Coming Soon',
                formats: '',
                button: 'Details Coming Soon'
              }
            ].map((book, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col justify-between">
                <img src={book.image} alt={book.title} className="w-full h-64 object-cover" />
                <div className="p-4 flex flex-col gap-2">
                  <p className="font-semibold text-sm">{book.title}</p>
                  <p className="text-xs text-gray-600">{book.available}</p>
                  <p className="text-xs text-gray-600">{book.formats}</p>
                  <button className="mt-2 text-sm bg-[#b5d9dd] text-gray-800 px-3 py-1 rounded-md hover:bg-[#a4cfd3] transition">{book.button}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="py-20 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Latest Blogs</h2>
            <p className="text-sm text-gray-600 max-w-lg mt-2">
              Discover helpful insights and strategies from Ellie Shumaker to improve your relationships and personal well-being.
            </p>
          </div>
          <div className="text-sm text-gray-500 text-center mt-12">
            No posts available at the moment.
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
