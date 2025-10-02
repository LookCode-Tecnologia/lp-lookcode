import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-semibold">Voltar para o site</span>
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Termos de Uso</h1>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-700 leading-relaxed">
              Ao acessar e usar este site, você aceita e concorda em cumprir estes termos de uso. Se você não concordar com qualquer parte destes termos, não use nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Serviços</h2>
            <p className="text-gray-700 leading-relaxed">
              A Look Code oferece serviços de desenvolvimento de software, consultoria tecnológica e soluções personalizadas. Os detalhes específicos de cada projeto são definidos em contratos individuais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Propriedade Intelectual</h2>
            <p className="text-gray-700 leading-relaxed">
              Todo o conteúdo deste site, incluindo textos, gráficos, logos e imagens, é propriedade da Look Code e protegido por leis de direitos autorais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Uso do Site</h2>
            <p className="text-gray-700 leading-relaxed">
              Você concorda em usar este site apenas para fins legais e de maneira que não viole os direitos de terceiros ou restrinja o uso do site por outras pessoas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitação de Responsabilidade</h2>
            <p className="text-gray-700 leading-relaxed">
              A Look Code não se responsabiliza por danos indiretos ou consequentes decorrentes do uso ou incapacidade de uso deste site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Alterações nos Termos</h2>
            <p className="text-gray-700 leading-relaxed">
              Reservamos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contato</h2>
            <p className="text-gray-700 leading-relaxed">
              Para dúvidas sobre estes termos, entre em contato através do nosso WhatsApp: (11) 93304-3152
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
