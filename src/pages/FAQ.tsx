import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What are your fees?",
      answer: "$200 per individual session and $240 per couples session. A superbill is provided for insurance reimbursement."
    },
    {
      question: "Do you take insurance?",
      answer: "No, but a superbill is provided for self-submission to your insurance company for potential reimbursement."
    },
    {
      question: "Do you provide online counseling?",
      answer: "Yes—all virtual sessions are conducted via Zoom on Monday, Wednesday, and Friday from 1 PM–5 PM."
    },
    {
      question: "What are your office hours?",
      answer: "In-person sessions: Tuesday & Thursday, 10 AM–6 PM. Virtual sessions: Monday, Wednesday & Friday, 1 PM–5 PM."
    },
    {
      question: "What geographic areas do you serve?",
      answer: "I serve clients in Richmond, VA and surrounding Central Virginia areas, both in-person and virtually."
    },
    {
      question: "What services do you offer?",
      answer: "I specialize in Christian Individual Counseling, Christian Couples Counseling, Anxiety & Stress Management, Relationship Counseling, and Trauma Recovery."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#B1DEE3]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-[44px] font-extrabold text-[#174046] mb-10">
          Frequently Asked Questions
        </h2>
        <div className="divide-y divide-[#174046]">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center py-5 text-left group transition-colors"
                >
                  <span className={`text-[20px] font-semibold text-[#174046] group-hover:text-[#4b6f72] transition-colors duration-200`}>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#174046] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Animated content reveal */}
                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[#174046] text-base font-normal pb-6 pr-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
