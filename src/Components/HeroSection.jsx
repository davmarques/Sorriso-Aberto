
function HeroSection() {
  return (
    // --- Container Principal ---
    // Tradução do `.background`:
    // - position: relative; -> `relative`
    // - height: 78vh; -> `h-[78vh]` (valor arbitrário)
    // - overflow: hidden; -> `overflow-hidden`
    // - Adicionado: flexbox para centralizar o conteúdo
    <section className="relative h-[78vh] overflow-hidden flex items-center justify-center">
      
      {/* --- Div do Fundo Desfocado --- */}
      {/*
        Esta div substitui o `::before`.
        - position: absolute; top/left/right/bottom: 0; -> `absolute inset-0`
        - background-size/position: cover/center; -> `bg-cover bg-center`
        - filter: blur(3px); -> `blur-[3px]`
        - z-index: -1; -> `z-[-1]`
      */}
      <div 
        className="absolute inset-0 bg-cover bg-center blur-[3px] z-[-1]"
        // Coloque o caminho da sua imagem aqui.
        // Usar um caminho relativo a partir da pasta `public` é o mais comum.
        style={{ backgroundImage: "url('/hero-img.jpg')" }}
      ></div>

      {/* --- Container do Conteúdo --- */}
      {/*
        - position: relative; -> `relative` (ou z-0) para garantir que fique acima do fundo com z-[-1]
        - color: white; -> `text-white`
        - text-align: center; -> `text-center`
      */}
      <div className="relative flex flex-col items-center gap-4 p-6 text-center text-white max-w-4xl mx-auto">
        
        {/* Título Principal (H1) */}
        <h1 className="font-[var(--font-family-heading)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight [text-shadow:1px_1px_3px_rgba(0,0,0,0.5)]">
          Sorriso Perfeito ao seu Alcance
        </h1>
        
        {/* Subtítulo (H2) */}
        <h2 className="font-[var(--font-family-sans)] text-xl md:text-2xl opacity-90 max-w-2xl">
          Transforme seu Sorriso. Clínica Odontológica de Referência em Brasília-DF
        </h2>
        
        {/* Chamada para Ação (H3) */}
        <h3 className="font-[var(--font-family-sans)] text-lg md:text-xl opacity-80 mt-2 max-w-2xl">
          Agende sua avaliação gratuita e descubra como podemos realçar a beleza e a saúde do seu sorriso.
        </h3>

        {/* Botão Principal */}
        <button className="cursor-pointer font-[var(--font-family-heading)] text-xl md:text-lg  bg-[var(--color-cta)] text-white px-8 py-4 mt-6 rounded-lg shadow-xl transition-all hover:bg-opacity-90 hover:scale-105">
          Agende sua Consulta
        </button>

      </div>
    </section>
  );
}

export default HeroSection;