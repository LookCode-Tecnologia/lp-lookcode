# Look Code - Landing Page

Landing page moderna e responsiva desenvolvida com React e Tailwind CSS para a Look Code.

## 🚀 Tecnologias

- React 19
- Vite
- Tailwind CSS 4
- PostCSS

## 📋 Características

- ✅ Design moderno e profissional
- ✅ Totalmente responsivo
- ✅ Integração com WhatsApp
- ✅ Animações suaves
- ✅ Performance otimizada
- ✅ SEO-friendly

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/LookCode-Tecnologia/lp-lookcode.git

# Entre no diretório
cd lp-lookcode

# Instale as dependências
npm install
```

## 🎯 Como Usar

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📱 WhatsApp

Para configurar o número do WhatsApp, edite a função `handleWhatsAppClick` nos componentes:
- `src/components/Header.jsx`
- `src/components/Hero.jsx`
- `src/components/CTA.jsx`
- `src/components/Footer.jsx`

## 📂 Estrutura do Projeto

```
lp-lookcode/
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Cabeçalho com botão WhatsApp
│   │   ├── Hero.jsx        # Seção principal
│   │   ├── Services.jsx    # Serviços oferecidos
│   │   ├── About.jsx       # Sobre a empresa
│   │   ├── CTA.jsx         # Call-to-action
│   │   └── Footer.jsx      # Rodapé
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Entry point
│   └── index.css           # Estilos globais
├── index.html
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customização

### Cores

As cores principais podem ser alteradas em `tailwind.config.js`:

```javascript
colors: {
  primary: '#0066FF',
  secondary: '#00D9FF',
}
```

### Conteúdo

Todo o conteúdo está nos componentes em `src/components/`. Edite diretamente os arquivos JSX para modificar textos, imagens e estrutura.

## 📄 Licença

ISC

## 👨‍💻 Autor

Look Code - Desenvolvimento de Sistemas
