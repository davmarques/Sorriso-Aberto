// Importe ícones para dar um toque visual a cada tratamento
import {
  Stethoscope,
  Sparkles,
  Smile,
  HandPlatter,
  ShieldCheck,
  Bone,
} from "lucide-react";

function Section6() {
  const contactInfo = {
    phone: "(61) 98210-2099",
    phoneLink: "tel:+5561982102099",
    whatsappLink: "https://wa.me/5561982102099",
    instagramLink: "https://instagram.com/sorrisoaberto.apb",
  };
  const treatments = [
    {
      icon: <Stethoscope size={32} className="text-[var(--color-cta)]" />,
      title: "Clínica Geral e Prevenção",
      description:
        "A base de um sorriso saudável. Realizamos diagnósticos precisos, planos de tratamento personalizados e todos os cuidados essenciais para manter sua saúde bucal em dia.",
    },
    {
      icon: <Sparkles size={32} className="text-[var(--color-cta)]" />,
      title: "Limpeza e Profilaxia",
      description:
        "Sinta a sensação de dentes verdadeiramente limpos. Nossa profilaxia remove a placa bacteriana e o tártaro, prevenindo cáries e doenças na gengiva.",
    },
    {
      icon: <Smile size={32} className="text-[var(--color-cta)]" />,
      title: "Restaurações Estéticas",
      description:
        "Diga adeus às cáries e fraturas. Utilizamos resinas de última geração que imitam a cor e a textura dos seus dentes, restaurando a função e a beleza natural.",
    },
    {
      icon: <ShieldCheck size={32} className="text-[var(--color-cta)]" />,
      title: "Tratamento de Gengiva (Periodontia)",
      description:
        "Cuidado especializado para gengivas inflamadas ou com sangramento, essencial para a sustentação dos seus dentes e saúde geral.",
    },
    {
      icon: <HandPlatter size={32} className="text-[var(--color-cta)]" />,
      title: "Facetas em Resina",
      description:
        "A transformação do seu sorriso em poucas sessões. As facetas corrigem imperfeições de cor, formato e alinhamento para um resultado impressionante.",
    },
    {
      icon: <Bone size={32} className="text-[var(--color-cta)]" />,
      title: "Próteses Dentárias",
      description:
        "Recupere a confiança para sorrir e mastigar com próteses fixas ou removíveis, totalmente personalizadas para um encaixe perfeito e natural.",
    },
  ];

  return (
    <section id="servicos" className="bg-white py-16 px-6 md:py-24 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Cabeçalho da Seção */}
        <h2 className="font-[var(--font-family-heading)] text-[var(--color-cta)]  tracking-wider uppercase">
          Nossos Tratamentos
        </h2>
        <p className="font-[var(--font-family-heading)] text-3xl md:text-4xl  text-[var(--color-text-grey)] mt-2">
          Soluções completas para o seu Sorriso
        </p>
        <p className="font-[var(--font-family-sans)] text-lg text-[var(--color-text-grey)] opacity-90 max-w-3xl mx-auto mt-4">
          Na Sorriso Aberto, combinamos tecnologia de ponta com um atendimento
          humanizado para oferecer uma gama completa de tratamentos
          odontológicos em Brasília, preparados para cuidar da sua saúde bucal e
          transformar o seu sorriso.
        </p>

        {/* Grade de Tratamentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 text-left">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-[var(--color-bg)] p-8 rounded-xl shadow-lg border border-gray-200 transition-transform hover:-translate-y-2"
            >
              <div className="mb-4">{treatment.icon}</div>
              <h3 className="font-[var(--font-family-heading)] text-xl text-[var(--color-text-grey)]">
                {treatment.title}
              </h3>
              <p className="font-[var(--font-family-sans)] text-[var(--color-text-grey)] mt-2 opacity-80">
                {treatment.description}
              </p>
            </div>
          ))}
        </div>

        {/* Chamada para Ação Final */}
        <div className="mt-16">
          <p className="text-lg text-[var(--color-text-grey)]">
            E muito mais! Não encontrou o que procurava ou não sabe qual o
            tratamento ideal para você?
          </p>
          <a
            href={contactInfo.whatsappLink}
            className="cursor-pointer mt-4 bg-[var(--color-cta)] text-white font-[var(--font-family-heading)]  text-lg px-8 py-3 rounded-lg shadow-lg transition-transform hover:scale-105 hover:bg-opacity-90 inline-block"
          >
            Agende sua Avaliação Conosco
          </a>
        </div>
      </div>
    </section>
  );
}

export default Section6;
