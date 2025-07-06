const Quote = () => {
  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img 
              src="/Images/Candle.png" 
              alt="Candle" 
              className="w-72 h-auto"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-3xl md:text-4xl text-[#174046] font-[600] italic leading-relaxed mb-6">
              “Come to me, all who labor and are heavy laden, and I will give you rest.”
            </p>
            <p className="text-2xl text-[#174046] font-semibold">
              — Matthew 11:28
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
