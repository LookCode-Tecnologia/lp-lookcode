import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidade</h1>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informações que Coletamos</h2>
            <p className="text-gray-700 leading-relaxed">
              Coletamos informações que você nos fornece diretamente, como nome, e-mail e telefone quando você entra em contato conosco através do formulário ou WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Como Usamos suas Informações</h2>
            <p className="text-gray-700 leading-relaxed">
              Utilizamos suas informações apenas para responder às suas solicitações, enviar orçamentos e manter contato sobre nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Compartilhamento de Dados</h2>
            <p className="text-gray-700 leading-relaxed">
              Não compartilhamos suas informações pessoais com terceiros. Seus dados são mantidos em sigilo e utilizados exclusivamente pela Look Code.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Segurança</h2>
            <p className="text-gray-700 leading-relaxed">
              Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado, alteração ou divulgação.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Seus Direitos</h2>
            <p className="text-gray-700 leading-relaxed">
              Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Entre em contato conosco para exercer esses direitos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contato</h2>
            <p className="text-gray-700 leading-relaxed">
              Para dúvidas sobre esta política, entre em contato através do nosso WhatsApp: (11) 93304-3152
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

export default PrivacyPolicy;
