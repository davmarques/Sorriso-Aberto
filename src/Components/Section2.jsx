function Section2() {
  return (
    // Container da seção: fundo claro, espaçamento interno e centralizado
    <div className="bg-[var(--color-bg)] py-16 px-6 md:py-24 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Título Principal */}
        <h1 className="font-[var(--font-family-heading)] text-3xl md:text-4xl  text-[var(--color-cta)]">
          Cansado de esconder seu sorriso?
        </h1>

        {/* Subtítulo */}
        <h2 className="font-[var(--font-family-heading)] text-xl md:text-2xl  text-[var(--color-text-grey)] mt-2">
          Dores ou desconforto bucal?
        </h2>

        {/* Parágrafo de introdução */}
        <p className="font-[var(--font-family-sans)] text-lg text-[var(--color-text-grey)] max-w-3xl mx-auto mt-6 leading-relaxed">
          Entendemos suas preocupações. Na Sorriso Aberto, oferecemos soluções
          personalizadas para cada necessidade, com tratamentos modernos e uma
          equipe acolhedora.
        </p>

        {/* Lista de Benefícios/Soluções */}
        <ul className="mt-12 grid md:grid-cols-3 gap-8 text-left">
          {/* Item da Lista 1 */}
          <li className="bg-white p-6 rounded-lg shadow-md">
            <strong className="font-[var(--font-family-heading)] text-lg text-[var(--color-cta)]">
              Medo de dentista?
            </strong>
            <br />
            <span className="font-[var(--font-family-sans)] text-[var(--color-text-grey)] mt-2 block">
              Conheça nosso ambiente tranquilo e equipe atenciosa.
            </span>
          </li>

          {/* Item da Lista 2 */}
          <li className="bg-white p-6 rounded-lg shadow-md">
            <strong className="font-[var(--font-family-heading)] text-lg text-[var(--color-cta)]">
              Deseja um sorriso mais branco ou alinhado?
            </strong>
            <br />
            <span className="font-[var(--font-family-sans)] text-[var(--color-text-grey)] mt-2 block">
              Nossas opções de estética dental são para você.
            </span>
          </li>

          {/* Item da Lista 3 */}
          <li className="bg-white p-6 rounded-lg shadow-md">
            <strong className="font-[var(--font-family-heading)] text-lg text-[var(--color-cta)]">
              Problemas na gengiva ou cáries?
            </strong>
            <br />
            <span className="font-[var(--font-family-sans)] text-[var(--color-text-grey)] mt-2 block">
              Tratamentos eficazes para sua saúde.
            </span>
          </li>
        </ul>

        {/* Botão de Chamada para Ação (CTA) */}
        <button className="cursor-pointer mt-12 bg-[var(--color-cta)] text-white font-[var(--font-family-heading)] text-lg px-8 py-3 rounded-lg shadow-lg transition-transform hover:scale-105 hover:bg-opacity-90">
          Conheça nossos tratamentos
        </button>
      </div>
    </div>
  );
}

export default Section2;
