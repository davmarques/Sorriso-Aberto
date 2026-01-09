// Importe os ícones que vamos usar para a lista de contatos
import {
  Phone,
  MessageSquareText,
  MapPin,
  Instagram,
  Clock,
} from "lucide-react";

function Section5() {
  // Dados de contato para facilitar a edição
  const contactInfo = {
    phone: "(61) 98210-2099",
    phoneLink: "tel:+5561982102099",
    whatsappLink: "https://wa.me/5561982102099",
    address: "QR 376 Casa 17, Condomínio Del Lago - DF",
    instagram: "@sorrisoaberto.apb",
    instagramLink: "https://instagram.com/sorrisoaberto.apb",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=QR+376+Casa+17,+Condomínio+Del+Lago+-+DF",
    hours: "Seg à Sex de 08:00 às 18:00",
  };

  return (
    // Container da seção com a cor primária de fundo para alto impacto
    <section
      id="contato"
      className="bg-[var(--color-cta)] py-16 px-6 md:py-24 md:px-8"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* --- COLUNA DA CHAMADA PARA AÇÃO (CTA) --- */}
        <div className="text-center md:text-left">
          <h1 className="font-[var(--font-family-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Pronto para ter o Sorriso dos Seus Sonhos?
          </h1>
          <p className="font-[var(--font-family-sans)] text-lg text-white opacity-90 mt-4">
            Agende sua avaliação e comece sua transformação com quem entende de
            sorrisos.
          </p>
          <a
            href={contactInfo.whatsappLink} // Não se esqueça de adicionar o link para a seção
            className="cursor-pointer mt-8 bg-white text-[var(--color-cta)] font-[var(--font-family-heading)] text-lg px-8 py-3 rounded-lg shadow-lg transition-transform hover:scale-105 inline-block mx-auto"
          >
            Agendar Avaliação
          </a>
        </div>

        {/* --- COLUNA DAS INFORMAÇÕES DE CONTATO --- */}
        <div className="bg-white p-8 rounded-xl shadow-2xl">
          <h2 className=" font-[var(--font-family-heading)] text-2xl text-[var(--color-text-grey)] mb-6">
            Informações de contato:
          </h2>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <Phone
                size={20}
                className="text-[var(--color-cta)] flex-shrink-0"
              />
              <a
                href={contactInfo.phoneLink}
                className="font-[var(--font-family-sans)] text-[var(--color-text-grey)] hover:underline"
              >
                {contactInfo.phone}
              </a>
            </li>

            <li className="flex items-center gap-4">
              <MessageSquareText
                size={20}
                className="text-[var(--color-cta)] flex-shrink-0"
              />
              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[var(--font-family-sans)] text-[var(--color-text-grey)] hover:underline"
              >
                {contactInfo.phone} (WhatsApp)
              </a>
            </li>

            <li className="flex items-start gap-4">
              <MapPin
                size={20}
                className="text-[var(--color-cta)] flex-shrink-0 mt-1"
              />
              <a
                href={contactInfo.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[var(--font-family-sans)] text-[var(--color-text-grey)] hover:underline"
              >
                {contactInfo.address}
              </a>
            </li>

            <li className="flex items-center gap-4">
              <Instagram
                size={20}
                className="text-[var(--color-cta)] flex-shrink-0"
              />
              <a
                href={contactInfo.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[var(--font-family-sans)] text-[var(--color-text-grey)] hover:underline"
              >
                {contactInfo.instagram}
              </a>
            </li>

            <li className="flex items-center gap-4">
              <Clock
                size={20}
                className="text-[var(--color-cta)] flex-shrink-0"
              />
              <span className="font-[var(--font-family-sans)] text-[var(--color-text-grey)]">
                {contactInfo.hours}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Section5;
