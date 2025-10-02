import React from 'react';

const About = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Qualidade Garantida',
      description: 'Código limpo, testado e seguindo as melhores práticas do mercado',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Entrega Ágil',
      description: 'Metodologias ágeis para entregas rápidas e iterativas',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Segurança',
      description: 'Proteção de dados e compliance com as principais regulamentações',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: 'Escalabilidade',
      description: 'Arquiteturas preparadas para crescer junto com seu negócio',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Por que escolher a <span className="gradient-text">Look Code?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Somos uma empresa especializada em desenvolvimento de soluções tecnológicas sob medida.
              Com anos de experiência no mercado, oferecemos expertise em sistemas complexos para diversos segmentos.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nossa missão é transformar desafios em oportunidades através da tecnologia,
              entregando produtos robustos, escaláveis e que geram valor real para nossos clientes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-primary flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 shadow-2xl">
              <div className="space-y-8">
                {/* Code Animation */}
                <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <div className="opacity-80 text-yellow-700">{'<LookCode>'}</div>
                    <div className="opacity-80 ml-4 text-blue-900">{'  innovation={true}'}</div>
                    <div className="opacity-80 ml-4 text-blue-900">{'  quality="premium"'}</div>
                    <div className="opacity-80 ml-4 text-blue-900">{'  support="24/7"'}</div>
                    <div className="opacity-80 text-yellow-700">{'</LookCode>'}</div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {['React Native', 'Node.js', 'Python', 'Nest Js', 'AWS', 'iOS', 'Android'].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500 bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary opacity-20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary opacity-20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
