// Importe o ícone que usaremos na lista
import { CheckCircle2 } from "lucide-react";

function Section3() {
  return (
    // Container da seção com fundo branco para alternar com a seção anterior
    <section className="bg-white py-16 px-6 md:py-24 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* --- COLUNA DE TEXTO --- */}
        <div className="text-left">
          
          {/* Título Principal da Seção */}
          <h1 className="text-center font-[var(--font-family-heading)] text-3xl md:text-4xl  text-[var(--color-text-grey)] leading-tight">
            A Qualidade e Confiança que você já conhece, agora mais perto de você.
          </h1>
          
          {/* Parágrafo de introdução */}
          <p className="font-[var(--font-family-sans)] text-lg text-[var(--color-text-grey)] opacity-90 mt-4">
            Na Sorriso Aberto, cada detalhe é pensado para o seu melhor sorriso:
          </p>

          {/* Lista de Diferenciais com Ícones */}
          <ul className="mt-8 flex flex-col gap-4">
            
            <li className="flex items-start gap-3">
              <CheckCircle2 size={24} className="text-[var(--color-cta)] mt-1 flex-shrink-0" />
              <span className="font-[var(--font-family-sans)] text-base text-[var(--color-text-grey)]">
                <strong>Equipe de Especialistas:</strong> Nossos profissionais dedicados com anos de experiência e constante aprimoramento.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle2 size={24} className="text-[var(--color-cta)] mt-1 flex-shrink-0" />
              <span className="font-[var(--font-family-sans)] text-base text-[var(--color-text-grey)]">
                <strong>Tecnologia de Última Geração:</strong> Equipamentos que garantem precisão, conforto e os melhores resultados.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle2 size={24} className="text-[var(--color-cta)] mt-1 flex-shrink-0" />
              <span className="font-[var(--font-family-sans)] text-base text-[var(--color-text-grey)]">
                <strong>Ambiente Acolhedor:</strong> Sinta-se em casa, livre do medo do dentista.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle2 size={24} className="text-[var(--color-cta)] mt-1 flex-shrink-0" />
              <span className="font-[var(--font-family-sans)] text-base text-[var(--color-text-grey)]">
                <strong>Resultados Visíveis:</strong> Milhares de sorrisos transformados, assim como você acompanha em nossos posts de antes e depois.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle2 size={24} className="text-[var(--color-cta)] mt-1 flex-shrink-0" />
              <span className="font-[var(--font-family-sans)] text-base text-[var(--color-text-grey)]">
                <strong>Atendimento Personalizado:</strong> Seu plano de tratamento é único, feito sob medida para suas necessidades e expectativas.
              </span>
            </li>
          </ul>

          {/* Botão de Chamada para Ação */}
          <button className="cursor-pointer flex mt-10 mx-auto bg-[var(--color-cta)] text-white font-[var(--font-family-heading)]  text-lg px-8 py-3 rounded-lg shadow-lg transition-transform hover:scale-105 hover:bg-opacity-90">
            Conheça nossa Clínica
          </button>
        </div>

        {/* --- COLUNA DA IMAGEM --- */}
        {/*
          Este é um espaço reservado para uma imagem da clínica ou da equipe.
          Em telas pequenas, ele aparecerá embaixo do texto.
        */}
        <div className="hidden md:block h-full min-h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Imagem da clínica aqui</p>
        </div>

      </div>
    </section>
  );
}

export default Section3;