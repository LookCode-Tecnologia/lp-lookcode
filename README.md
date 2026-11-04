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
- `src/components/sections/`: seções da landing page, incluindo a coleção de produtos.
- `src/components/ui/`: animações e componentes compartilhados.
- `src/data/content.js`: serviços, soluções, disciplinas e perguntas frequentes.
- `src/data/contact.js`: URL principal de contato no WhatsApp.
- `tailwind.config.js`: cores, tipografia e animações, carregadas pelo Tailwind 4 em `src/index.css`.

Os números institucionais foram preservados da página anterior. Os cards de soluções descrevem especialidades; o carrossel apresenta princípios da Look Code. Não representam cases ou depoimentos de clientes.

As rotas `/privacy-policy` e `/terms-of-service` continuam disponíveis. A página inclui menu mobile com Escape e controle de foco, FAQ acessível, links funcionais e suporte a movimento reduzido. As fontes são carregadas via Fontshare e Google Fonts.

## Coleção de produtos

A seção `#products` fica dentro da pergunta “Quais produtos a Look Code já desenvolveu?” na FAQ. O final da página segue a ordem CTA → FAQ (incluindo produtos) → Nossa stack → footer. A stack inclui Azure em Cloud e OpenAI, Claude, Gemini, Llama, DeepSeek e Mistral AI em AI/ML, além das ferramentas de integração. Ao expandir a pergunta, a apresentação dos produtos mantém o visual e a sequência por rolagem. Apresenta Lookcode Financeiro, Futspot e Oficina Lookcode, com links públicos e conteúdo baseado nas respectivas páginas. As capas em `public/products/` são ilustrações editoriais, não capturas das interfaces autenticadas.

- `src/components/sections/ProductsSection.tsx`: dados, textos e links dos três produtos.
- `src/components/ui/gsap-card-flip.tsx`: adaptação do componente enviado, com GSAP Flip e SplitText. Mantém os mesmos elementos dos cartões entre a pilha e a galeria, oferece seleção por teclado e respeita movimento reduzido.
- `src/hooks/useMediaQuery.ts`: consulta responsiva com suporte a renderização no servidor e limpeza das assinaturas.
- `src/index.css`: estilos compartilhados e regras responsivas da coleção.

O projeto já usa Tailwind CSS 4 e agora suporta TypeScript sem exigir a migração dos arquivos JSX existentes. Execute `npm run typecheck` para verificar os arquivos TS/TSX. O alias `@/` aponta para `src/`, tanto no Vite quanto no TypeScript.

Em telas com pelo menos 900px de largura e 760px de altura, sem preferência por movimento reduzido, Motion for React (`useScroll` e `useMotionValueEvent`) acompanha a rolagem nativa: a seção fica fixa abaixo do menu por um percurso de 400svh. Os primeiros 10% mostram a pilha; depois, Financeiro, Futspot e Oficina ocupam intervalos de 30% cada. A rolagem reversa percorre a sequência ao contrário. O indicador de progresso usa um `motion.div`. Cliques e setas sincronizam a posição da página com o produto escolhido, e “Continuar na página” permite avançar diretamente. Não há interceptação de roda do mouse ou toque, temporizador ou avanço automático enquanto a página está parada.

Em celulares, tablets menores, janelas baixas, movimento reduzido ou sem JavaScript, os três produtos aparecem em blocos sucessivos com descrição, recursos e acesso. Assim, todos podem ser conhecidos com a rolagem normal, sem depender de interação com a galeria.

A estrutura shadcn está configurada em `components.json`, com `src/components/ui` como pasta de componentes reutilizáveis e `src/lib/utils.ts` para `cn`. O caminho `@/components/ui` equivale a essa pasta: criar outra pasta `components/ui` na raiz duplicaria a estrutura. Essa convenção mantém os imports dos componentes e a instalação via CLI consistentes. Para adicionar componentes shadcn no futuro, use `npx shadcn@latest add <componente>`; revise os estilos gerados para preservar os tokens da identidade Look Code.

## Licenças

Projeto Look Code: ISC. Os componentes adaptados de Nexus Studio estão sujeitos à Apache 2.0; consulte `THIRD_PARTY_NOTICES.md` e `LICENSE-NEXUS-STUDIO`.

## SEO e publicação

`npm run build` gera em `dist/` HTML completo das três rotas, depois executa a validação de SEO. O conteúdo principal e as respostas do FAQ estão no HTML sem depender de JavaScript; o React hidrata a página para habilitar as animações. O FAQ usa elementos HTML nativos e funciona mesmo sem JavaScript.

- `src/data/seo.js`: domínio canônico, títulos e descrições por página.
- `scripts/prerender.mjs`: HTML estático, metadados Open Graph/Twitter, dados estruturados de organização e catálogo de serviços, `robots.txt`, `sitemap.xml` e `CNAME`.
- `npm run check:seo`: verifica o último build, incluindo conteúdo, FAQ, títulos, canonicals, sitemap, JSON-LD e referências a assets.

O GitHub Pages publica a pasta `docs/` da branch `main`. Execute `npm run prepare:pages` para gerar e validar o build e atualizar essa pasta, incluindo as rotas, assets, `CNAME` e `.nojekyll`. Faça commit e push dos arquivos atualizados para publicar. Alterar apenas o código-fonte não atualiza o site público. Configure a hospedagem para retornar HTTP 404 para URLs inexistentes, sem reescrever todas as URLs para a home.

Após publicar:

1. Confirme que `https://www.lookcode.com.br/robots.txt` e `/sitemap.xml` estão acessíveis.
2. Verifique a propriedade do domínio no Google Search Console e envie `https://www.lookcode.com.br/sitemap.xml`.
3. Inspecione a URL principal e solicite indexação. Acompanhe indexação, consultas, impressões e cliques.
4. Confirme redirecionamentos permanentes de HTTP e do domínio sem `www` para HTTPS com `www`.

Avaliação inicial: havia título, descrição e idioma, mas o HTML inicial não continha o conteúdo da página; faltavam sitemap, robots.txt, canonical, metadados sociais e dados estruturados. As melhorias técnicas foram implementadas localmente. Posições e tráfego não foram medidos: isso exige dados do Search Console. Para ampliar o alcance, próximos conteúdos devem responder a dúvidas reais de clientes sobre sistemas sob medida, integração de pagamentos, aplicativos, IA, logística e telecom, com exemplos verificáveis e páginas específicas para cada serviço. Não há garantia de indexação ou posicionamento.
