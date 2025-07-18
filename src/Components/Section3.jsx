// Importe o ícone que usaremos na lista
import { CheckCircle2 } from "lucide-react";

function Section3() {
  const features = [
    {
      title: "Equipe de Especialistas com Propósito",
      description: "Profissionais experientes, em constante atualização, comprometidos com sua saúde bucal e com o impacto social do nosso trabalho.",
    },
    {
      title: "Tecnologia de Ponta ao Seu Alcance",
      description: "Equipamentos modernos que garantem mais conforto, precisão e segurança em cada tratamento — tudo com preços sociais.",
    },
    {
      title: "Ambiente Acolhedor e Sem Medo",
      description: "Aqui, você se sente à vontade. Nosso espaço foi pensado para quebrar barreiras e acolher cada paciente com respeito e empatia.",
    },
    {
      title: "Resultados que Falam por Si",
      description: "Milhares de sorrisos já foram transformados. Acompanhe nossos casos de antes e depois através de nossas redes sociais.",
    },
    {
      title: "Tratamentos Personalizados",
      description: "Nada de fórmulas prontas. Seu plano de cuidado é feito sob medida, de acordo com suas necessidades, objetivos e possibilidades.",
    },
  ];

  return (
    // Container da seção com fundo branco para alternar com as seções anteriores
    <section id="sobrenos" className="bg-white py-16 px-6 md:py-24 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* --- COLUNA DE TEXTO --- */}
        <div className="text-center md:text-left">
          
          {/* Título Principal da Seção (h2 para melhor semântica) */}
          <h2 className="font-[var(--font-family-heading)] text-3xl md:text-4xl text-[var(--color-text-grey)] leading-tight">
            A Qualidade e o Cuidado que Você Merece, Agora Mais Acessível
          </h2>

          {/* Parágrafo de introdução */}
          <p className="font-[var(--font-family-sans)] text-lg text-[var(--color-text-grey)] opacity-90 mt-6">
            No Projeto Sorriso Aberto, cada detalhe é pensado para transformar sua experiência com a odontologia através de excelência, carinho e responsabilidade social.
          </p>

          {/* Lista de Diferenciais com Ícones */}
          <ul className="mt-8 flex flex-col gap-5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-4">
                <CheckCircle2
                  size={24}
                  className="text-[var(--color-cta)] mt-1 flex-shrink-0"
                />
                <span className="font-[var(--font-family-sans)] text-base text-[var(--color-text-grey)]">
                  <strong className="font-semibold">{feature.title}:</strong> {feature.description}
                </span>
              </li>
            ))}
          </ul>

          {/* Botão de Chamada para Ação */}
          <button className="cursor-pointer mt-10 bg-[var(--color-cta)] text-white font-[var(--font-family-heading)]  text-lg px-8 py-3 rounded-lg shadow-lg transition-transform hover:scale-105 hover:bg-opacity-90">
            Conheça nossa Clínica
          </button>
        </div>

        {/* --- COLUNA DA IMAGEM --- */}
        <div className="hidden md:block h-full min-h-[400px] bg-gray-200 rounded-lg flex items-center justify-center order-first md:order-last">
          <p className="text-gray-500">Espaço para uma imagem inspiradora</p>
        </div>
        
      </div>
    </section>
  );
}

export default Section3;