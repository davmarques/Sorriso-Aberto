import { Instagram, Phone, MapPin, Mail, Clock, MessageCircle } from "lucide-react"; // Adicionei mais ícones úteis
import logo from '../assets/logo.png'; // Supondo que você queira o logo branco no rodapé
import whatsapp from '../assets/whatsapp.png'; // Ícone do WhatsApp

function Footer() {
  // Centralizando as informações para fácil edição
  const contactInfo = {
    phone: "(61) 99999-9999",
    phoneLink: "tel:+5561999999999",
    whatsappLink: "https://wa.me/5561999999999",
    instagramLink: "https://instagram.com/sorrisoaberto.apb",
    // Link de embed do Google Maps. Substitua pelo link da sua clínica.
    mapEmbedLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.992255735745!2d-47.8824428857177!3d-15.803738989045058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3a1e1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sCongresso%20Nacional!5e0!3m2!1spt-BR!2sbr!4v1626884615235!5m2!1spt-BR!2sbr"
  };

  return (
    <footer className="bg-gray-800 text-gray-300 font-[var(--font-family-sans)]">
      <div className="max-w-7xl mx-auto py-12 px-6 md:py-16 grid md:grid-cols-4 gap-8">
        
        {/* --- Coluna 1: Logo e Copyright --- */}
        <div className="space-y-4 mx-auto">
          <img src={logo} alt="Logo Sorriso Aberto" className="h-24 mx-auto bg-white rounded-full" />
          <p className="text-sm text-gray-400 text-center">
            Transformando sorrisos com tecnologia e cuidado.
          </p>
          <p className="text-xs text-gray-500 pt-4 text-center">
            © {new Date().getFullYear()} Sorriso Aberto. Todos os direitos reservados.
          </p>
        </div>

        {/* --- Coluna 2: Navegação Rápida --- */}
        <div className="mx-auto text-center mt-8 lg:mt-0">
          <h3 className=" text-white text-lg font-[var(--font-family-heading)]">Navegação</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Serviços</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Nossa Equipe</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
          </ul>
        </div>

        {/* --- Coluna 3: Localização (Mapa) --- */}
        <div className="mt-8 md:mt-0">
          <h3 className=" text-white text-lg font-[var(--font-family-heading)]">Nossa Localização</h3>
          <div className="mt-4 rounded-lg overflow-hidden border-2 border-gray-700">
            <iframe
              src={contactInfo.mapEmbedLink}
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        
        {/* --- Coluna 4: Contato e Redes Sociais --- */}
        <div className="mx-auto text-center mt-8 lg:mt-0">
          <h3 className="text-white text-lg font-[var(--font-family-heading)]">Siga-nos</h3>
          <div className="flex items-center gap-4 mt-4">
            <a href={contactInfo.phoneLink} aria-label="Telefone" className="text-gray-400 hover:text-white transition-colors">
              <Phone size={32} />
            </a>
            <a href={contactInfo.phoneLink} aria-label="Telefone" className="text-gray-400 hover:text-white transition-colors">
              <MessageCircle size={32}/>
            </a>
            
            <a href={contactInfo.instagramLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={32} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;