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

## Identidade e conteúdo

A página utiliza a composição do [Nexus Studio](https://github.com/legendxdevil/nexus-studio), adaptada à Look Code em tema escuro, com azul `#0066FF`, ciano `#00D9FF`, conteúdo em português e Motion for React.

- `src/components/layout/`: navegação e rodapé.
- `src/components/sections/`: as 14 seções da landing page.
- `src/components/ui/`: animações e componentes compartilhados.
- `src/data/content.js`: serviços, soluções, disciplinas e perguntas frequentes.
- `src/data/contact.js`: URL principal de contato no WhatsApp.
- `tailwind.config.js`: cores, tipografia e animações, carregadas pelo Tailwind 4 em `src/index.css`.

Os números institucionais foram preservados da página anterior. Os cards de soluções descrevem especialidades; o carrossel apresenta princípios da Look Code. Não representam cases ou depoimentos de clientes.

As rotas `/privacy-policy` e `/terms-of-service` continuam disponíveis. A página inclui menu mobile com Escape e controle de foco, FAQ acessível, links funcionais e suporte a movimento reduzido. As fontes são carregadas via Fontshare e Google Fonts.

## Licenças

Projeto Look Code: ISC. Os componentes adaptados de Nexus Studio estão sujeitos à Apache 2.0; consulte `THIRD_PARTY_NOTICES.md` e `LICENSE-NEXUS-STUDIO`.

## SEO e publicação

`npm run build` gera em `dist/` HTML completo das três rotas, depois executa a validação de SEO. O conteúdo principal e as respostas do FAQ estão no HTML sem depender de JavaScript; o React hidrata a página para habilitar as animações. O FAQ usa elementos HTML nativos e funciona mesmo sem JavaScript.

- `src/data/seo.js`: domínio canônico, títulos e descrições por página.
- `scripts/prerender.mjs`: HTML estático, metadados Open Graph/Twitter, dados estruturados de organização e catálogo de serviços, `robots.txt`, `sitemap.xml` e `CNAME`.
- `npm run check:seo`: verifica o último build, incluindo conteúdo, FAQ, títulos, canonicals, sitemap, JSON-LD e referências a assets.

Publique **todo o conteúdo de `dist/`**, incluindo as pastas `privacy-policy/` e `terms-of-service/`. Se o GitHub Pages estiver configurado para publicar a pasta `docs/`, ela precisa receber o conteúdo do novo build. Alterar apenas o código-fonte não atualiza o site público. Configure a hospedagem para retornar HTTP 404 para URLs inexistentes, sem reescrever todas as URLs para a home.

Após publicar:

1. Confirme que `https://www.lookcode.com.br/robots.txt` e `/sitemap.xml` estão acessíveis.
2. Verifique a propriedade do domínio no Google Search Console e envie `https://www.lookcode.com.br/sitemap.xml`.
3. Inspecione a URL principal e solicite indexação. Acompanhe indexação, consultas, impressões e cliques.
4. Confirme redirecionamentos permanentes de HTTP e do domínio sem `www` para HTTPS com `www`.

Avaliação inicial: havia título, descrição e idioma, mas o HTML inicial não continha o conteúdo da página; faltavam sitemap, robots.txt, canonical, metadados sociais e dados estruturados. As melhorias técnicas foram implementadas localmente. Posições e tráfego não foram medidos: isso exige dados do Search Console. Para ampliar o alcance, próximos conteúdos devem responder a dúvidas reais de clientes sobre sistemas sob medida, integração de pagamentos, aplicativos, IA, logística e telecom, com exemplos verificáveis e páginas específicas para cada serviço. Não há garantia de indexação ou posicionamento.
