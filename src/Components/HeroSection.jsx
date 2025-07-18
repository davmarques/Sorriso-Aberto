function HeroSection() {
  const contactInfo = {
    phone: "(61) 98216-2099",
    phoneLink: "tel:+5561982162099",
    whatsappLink: "https://wa.me/5561982162099",
    instagramLink: "https://instagram.com/sorrisoaberto.apb"
  };

  return (
    <section id="hero-section" className="relative h-[78vh] overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center blur-[3px] z-[-1]"
        style={{ backgroundImage: "url('/hero-img.jpg')" }}
      ></div>

      <div className="relative flex flex-col items-center gap-4 p-6 text-center text-white max-w-4xl mx-auto">
        <h1 className="font-[var(--font-family-heading)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight [text-shadow:1px_1px_3px_rgba(0,0,0,0.5)]">
          Projeto Sorriso Aberto
        </h1>

        <h2 className="font-[var(--font-family-sans)] text-xl md:text-2xl opacity-90 max-w-2xl">
          Transforme seu sorriso com quem entende de cuidado e bem-estar. Somos
          um projeto odontológico com preços sociais e referência em
          Brasília-DF.
        </h2>

        <h3 className="font-[var(--font-family-sans)] text-lg md:text-xl opacity-80 mt-2 max-w-2xl">
          Agende sua avaliação gratuita e descubra como podemos realçar a beleza
          e a saúde do seu sorriso com qualidade e acessibilidade.
        </h3>

        <a
          href={contactInfo.whatsappLink}
          className="cursor-pointer font-[var(--font-family-heading)] text-xl md:text-lg  bg-[var(--color-cta)] text-white px-8 py-4 mt-6 rounded-lg shadow-xl transition-all hover:bg-opacity-90 hover:scale-105"
        >
          Agende sua Consulta
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
