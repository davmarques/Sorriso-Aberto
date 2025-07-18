import { useState } from "react";
import { Instagram, Phone, MessageCircle } from "lucide-react";
import logo from '../assets/logo.png';

// Importando os novos componentes
import Modal from './Modal';
import PrivacyPolicyContent from './PrivacyContent';
import TermsOfUseContent from './TermsContent';

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', content: null });

  const openModal = (type) => {
    if (type === 'privacy') {
      setModalData({ title: 'Política de Privacidade', content: <PrivacyPolicyContent /> });
    } else if (type === 'terms') {
      setModalData({ title: 'Termos de Uso', content: <TermsOfUseContent /> });
    }
    setIsModalOpen(true);
  };

  const contactInfo = {
    phone: "(61) 98216-2099",
    phoneLink: "tel:+5561982102099",
    whatsappLink: "https://wa.me/5561982102099",
    instagramLink: "https://instagram.com/sorrisoaberto.apb",
    mapEmbedLink: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3840.2520586635746!2d-47.7712440248711!3d-15.737799584894661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDQ0JzE2LjEiUyA0N8KwNDYnMDcuMiJX!5e0!3m2!1spt-BR!2sbr!4v1752706277793!5m2!1spt-BR!2sbr",
  };

  return (
    <>
      <footer className="bg-gray-800 text-gray-300 font-[var(--font-family-sans)]">
        <div className="max-w-7xl mx-auto py-12 px-6 md:py-16 grid md:grid-cols-4 gap-8">
          {/* Coluna 1: Logo e Copyright */}
          <div className="space-y-4 mx-auto text-center md:text-left">
            <img src={logo} alt="Logo Sorriso Aberto" className="h-24 mx-auto md:mx-0 bg-white rounded-full" />
            <p className="text-sm text-gray-400">Transformando sorrisos com tecnologia e cuidado.</p>
            <p className="text-xs text-gray-500 pt-4">© {new Date().getFullYear()} Sorriso Aberto. Todos os direitos reservados.</p>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="mx-auto text-center md:text-left mt-8 md:mt-0">
            <h3 className="text-white text-lg font-bold font-[var(--font-family-heading)]">Navegação</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#hero-section" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#sobrenos" className="hover:text-white transition-colors">Sobre Nós</a></li>
              {/* Botões que abrem o modal */}
              <li><button onClick={() => openModal('privacy')} className="hover:text-white transition-colors cursor-pointer">Política de Privacidade</button></li>
              <li><button onClick={() => openModal('terms')} className="hover:text-white transition-colors cursor-pointer">Termos de Uso</button></li>
            </ul>
          </div>

          {/* Coluna 3: Localização */}
          <div className="mt-8 md:mt-0 text-center md:text-left">
            <h3 className="text-white text-lg font-bold font-[var(--font-family-heading)]">Nossa Localização</h3>
            <div className="mt-4 rounded-lg overflow-hidden border-2 border-gray-700">
              <iframe src={contactInfo.mapEmbedLink} width="100%" height="150" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          {/* Coluna 4: Contato */}
          <div className="mx-auto text-center md:text-left mt-8 md:mt-0">
            <h3 className="text-white text-lg font-bold font-[var(--font-family-heading)]">Siga-nos</h3>
            <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
              <a href={contactInfo.phoneLink} aria-label="Telefone" className="text-gray-400 hover:text-white transition-colors"><Phone size={32} /></a>
              <a href={contactInfo.whatsappLink} aria-label="WhatsApp" className="text-gray-400 hover:text-white transition-colors"><MessageCircle size={32} /></a>
              <a href={contactInfo.instagramLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors"><Instagram size={32} /></a>
            </div>
          </div>
        </div>
      </footer>

      {/* Renderiza o Modal aqui */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={modalData.title}>
        {modalData.content}
      </Modal>
    </>
  );
}

export default Footer;