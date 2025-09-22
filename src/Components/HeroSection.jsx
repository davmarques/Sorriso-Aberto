import { useState, useEffect } from "react";

function HeroSection() {
  const contactInfo = {
    phone: "(61) 98210-2099",
    phoneLink: "tel:+5561982102099",
    whatsappLink: "https://wa.me/5561982102099",
    instagramLink: "https://instagram.com/sorrisoaberto.apb",
  };

  // Imagens do carrossel
  const images = [
    "/recepcao.jpg",
    "/consultorio1.jpg",
    "/consultorio2.jpg",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // Troca a cada 4 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="hero-section"
      className="relative h-[calc(100vh-8rem)] overflow-hidden flex items-center justify-center"
    >
      {/* Carrossel de imagens de fundo */}
      <div className="absolute inset-0 w-full h-full z-[-1]">
        {images.map((img, idx) => (
          <div
            key={img}
            className={`bg-cover bg-center blur-[0px] transition-opacity duration-1000 absolute inset-0 w-full h-full ${
              current === idx ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          ></div>
        ))}
      </div>

      <div className="relative flex flex-col items-center gap-4 p-6 text-center bg-white/20 rounded-2xl text-black max-w-4xl mx-auto">
        {/* <h1 className="font-[var(--font-family-heading)] text-4xl md:text-5xl lg:text-6xl leading-tight [text-shadow:1px_1px_3px_rgba(0,0,0,0.5)]">
          Projeto Sorriso Aberto
        </h1> */}

        <h2 className="font-[var(--font-family-sans)] text-xl md:text-4xl opacity-90 max-w-2xl">
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
