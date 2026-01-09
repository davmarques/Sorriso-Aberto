import logo from "../assets/logo.png";
import whatsappIcon from "../assets/whatsapp.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const contactInfo = {
    phone: "(61) 98210-2099",
    phoneLink: "tel:+5561982102099",
    whatsappLink: "https://wa.me/5561982102099",
    instagramLink: "https://instagram.com/sorrisoaberto.apb",
  };

  return (
    // A sombra agora usa a sintaxe var() explícita.
    <header className="relative flex justify-between md:justify-around items-center p-6 h-32 rounded-b-3xl shadow-[10px_10px_5px_var(--color-bg)]">
      <img src={logo} alt="Logo" className="h-30" />

      {/* --- BOTÃO DO MENU (Mobile) --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden cursor-pointer absolute z-20 top-10 right-5 bg-[var(--color-cta)] p-2 m-3 rounded-lg transition-all hover:bg-[var(--color-text-grey)] hover:scale-105"
        aria-label="Abrir ou fechar menu"
      >
        {isOpen ? (
          <X size={32} color="var(--color-white)" />
        ) : (
          <Menu size={32} color="var(--color-white)" />
        )}
      </button>

      {/* --- MENU DROPDOWN (Mobile) --- */}
      {isOpen && (
        <div className="md:hidden absolute z-10 top-[30px] right-[20px] bg-[var(--color-bg)] p-5 rounded-xl shadow-lg max-w-[380px] flex flex-col gap-6 justify-center items-center px-20 py-8">
          <a
            href="#hero-section"
            className="font-[var(--font-family-heading)] text-xl text-[var(--color-text-grey)] transition-transform hover:scale-110"
          >
            Home
          </a>
          <a
            href="#servicos"
            className="font-[var(--font-family-heading)] text-xl text-[var(--color-text-grey)] transition-transform hover:scale-110"
          >
            Serviços
          </a>
          {/* <a
            href="#equipe"
            className="font-[--font-family-heading)] text-xl text-[var(--color-text-grey)] transition-transform hover:scale-110"
          >
            Nossa Equipe
          </a> */}
          <a
            href="#sobrenos"
            className="font-[--font-family-heading)] text-xl text-[var(--color-text-grey)] transition-transform hover:scale-110"
          >
            Sobre Nós
          </a>
          <a
            href="#contato"
            className="font-[--font-family-heading)] text-xl text-[var(--color-text-grey)] transition-transform hover:scale-110"
          >
            Contato
          </a>
          <a
            href={contactInfo.whatsappLink}
            className="transition-transform hover:scale-110"
          >
            <img src={whatsappIcon} alt="WhatsApp" className="w-10" />
          </a>
        </div>
      )}

      {/* --- NAVEGAÇÃO (Desktop) --- */}
      <nav className="hidden md:flex md:items-center md:gap-[20px]">
        <a
          href="#hero-section"
          className="font-[var(--font-family-heading)] text-lg text-[var(--color-text-grey)] hover:text-[var(--color-cta)] hover:scale-110"
        >
          Home
        </a>
        <a
          href="#servicos"
          className="font-[var(--font-family-heading)] text-lg text-[var(--color-text-grey)] hover:text-[var(--color-cta)] hover:scale-110"
        >
          Serviços
        </a>

        {/*
      <a
          href="#"
          className="font-[--font-family-heading)] text-lg text-[var(--color-text-grey)] hover:text-[var(--color-cta)] hover:scale-110"
        >
          Nossa Equipe
        </a>
      */}

        <a
          href="#sobrenos"
          className="font-[--font-family-heading)] text-lg text-[var(--color-text-grey)] hover:text-[var(--color-cta)] hover:scale-110"
        >
          Sobre Nós
        </a>
        <a
          href="#contato"
          className="font-[--font-family-heading)] text-lg text-[var(--color-text-grey)] hover:text-[var(--color-cta)] hover:scale-110"
        >
          Contato
        </a>
        <a
          href={contactInfo.whatsappLink}
          className="transition-transform hover:scale-110"
        >
          <img src={whatsappIcon} alt="Contato WhatsApp" className="w-10" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
