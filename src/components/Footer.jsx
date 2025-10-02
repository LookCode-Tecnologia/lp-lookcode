import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511933043152?text=Olá! Gostaria de saber mais sobre os serviços da Look Code.', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/icon.png" alt="Look Code" className="w-14 h-14" />
              <span className="text-2xl font-bold">Look Code</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Especialistas em desenvolvimento de sistemas, telecom, CRM, e-commerce e integrações.
              Transformando ideias em soluções tecnológicas desde 2014.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Contato WhatsApp</span>
            </button>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Desenvolvimento de Sistemas Personalizados</li>
              <li className="hover:text-white transition-colors cursor-pointer">Aplicações Móveis iOS/Android</li>
              <li className="hover:text-white transition-colors cursor-pointer">Sistemas de Telecom</li>
              <li className="hover:text-white transition-colors cursor-pointer">CRM e E-commerce</li>
              <li className="hover:text-white transition-colors cursor-pointer">Integração com Gateway de Pagamentos</li>
              <li className="hover:text-white transition-colors cursor-pointer">BSS/OSS</li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-bold mb-4">Tecnologias</h3>
            <div className="flex flex-wrap gap-2">
              {['React Native', 'iOS', 'Android', 'Node.js', 'Python', 'Nest Js', 'AWS', 'Docker'].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Look Code. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <Link to="/privacy-policy" className="hover:text-white transition-colors cursor-pointer">Política de Privacidade</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors cursor-pointer">Termos de Uso</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
