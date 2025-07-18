// Importe os ícones para dar um toque visual aos cards de valor
import { Gift, HeartHandshake, ShieldCheck } from "lucide-react";

function Section2() {
  // Abstraindo os dados dos cards para um array. Fica mais fácil de manter!
  const features = [
    {
      icon: <Gift size={40} className="mx-auto text-[var(--color-cta)]" />,
      title: "Avaliação Gratuita",
      description: "Comece sua jornada com uma consulta completa e sem custos para entendermos suas necessidades.",
    },
    {
      icon: <HeartHandshake size={40} className="mx-auto text-[var(--color-cta)]" />,
      title: "Atendimento Humanizado",
      description: "Nossa prioridade é o seu conforto. Um ambiente acolhedor para você se sentir seguro e em casa.",
    },
    {
      icon: <ShieldCheck size={40} className="mx-auto text-[var(--color-cta)]" />,
      title: "Qualidade e Acessibilidade",
      description: "Oferecemos tratamentos de ponta com responsabilidade social, democratizando o acesso a um sorriso saudável.",
    },
  ];

  return (
    // Container da seção: fundo claro, espaçamento interno e centralizado
    <section className="bg-[var(--color-bg)] py-16 px-6 md:py-24 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Título Principal da Seção (h2 para melhor semântica) */}
        <h2 className="font-[var(--font-family-heading)] text-3xl md:text-4xl text-[var(--color-cta)]">
          Cuidar do seu sorriso é nossa missão
        </h2>

        {/* Textos de apoio, agora como parágrafos estilizados */}
        <p className="font-[var(--font-family-heading)] text-xl md:text-2xl text-[var(--color-text-grey)] mt-4">
          Cansado de esconder seu sorriso ou sentir dores e desconforto?
        </p>

        {/* Parágrafo de introdução */}
        <p className="font-[var(--font-family-sans)] text-lg text-[var(--color-text-grey)] max-w-3xl mx-auto mt-6 leading-relaxed">
          Na Sorriso Aberto, entendemos suas preocupações. Somos um projeto odontológico com preços sociais, que oferece tratamentos modernos e acessíveis, com uma equipe acolhedora e comprometida com seu bem-estar.
        </p>

        {/* Grid de Benefícios/Soluções */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg transition-transform hover:-translate-y-2">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="font-[var(--font-family-heading)] text-xl  text-[var(--color-cta)]">
                {feature.title}
              </h3>
              <p className="font-[var(--font-family-sans)] text-base text-[var(--color-text-grey)] mt-2 opacity-80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Botão de Chamada para Ação (CTA) */}
        <a href="#servicos" className="cursor-pointer mt-16 bg-[var(--color-cta)] text-white font-[var(--font-family-heading)]  text-lg px-8 py-3 rounded-lg shadow-lg transition-transform hover:scale-105 hover:bg-opacity-90 inline-block">
          Conheça nossos tratamentos
        </a>
      </div>
    </section>
  );
}

export default Section2;