# Portfólio | Renan Sombrio Zock

Portfólio pessoal e currículo interativo de **Renan Sombrio Zock**, empreendedor e desenvolvedor focado em automação com IA (n8n, agentes e sistemas de gestão).

O site é uma vitrine em dark mode: tipografia gigante em tom areia/dourado sobre fundo escuro, tudo emoldurado por uma borda sutil. Ao clicar em **Currículo Vitae** no menu, a página alterna para a versão completa do currículo (clique de novo ou tecle `Esc` para voltar).

## Visão geral

- **Para quem:** recrutadores, clientes e colegas da área de tecnologia.
- **Objetivo:** apresentar capacidades, mostrar projetos anteriores e comprovar competência técnica e criativa.
- **Chamadas principais:** entrar em contato para oportunidades (primária) e acessar projetos detalhados (secundária).

## Tecnologias

- HTML5 semântico
- CSS puro (`style.css`), sem frameworks
- JavaScript puro (`script.js`), sem dependências
- Fonte [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- Imagens em WebP (otimizadas para carregamento rápido)

Não há build, gerenciador de pacotes nem dependências para instalar.

## Estrutura do projeto

```
my-portifolio/
├── index.html            # Página única: hero + seção do currículo
├── style.css             # Estilos e design tokens
├── script.js             # Alternância entre hero e currículo
├── renan.webp            # Retrato usado na visão do currículo
├── camada2_no_bg.webp    # Retrato sem fundo usado no hero
├── *.png                 # Imagens originais (fonte). O site usa as versões .webp
├── Renan Zock.pdf        # Currículo em PDF
├── PRODUCT.md            # Posicionamento, público e princípios do produto
└── DESIGN.md             # Design system (cores, tipografia, componentes)
```

## Como rodar localmente

Abra o `index.html` direto no navegador, ou sirva a pasta com um servidor estático:

```bash
# Python
python -m http.server 8000

# ou Node.js
npx serve .
```

Depois acesse `http://localhost:8000`.

## Design

Resumo do design system (detalhes completos em [`DESIGN.md`](DESIGN.md)):

| Token | Valor | Uso |
| --- | --- | --- |
| Sand Gold | `#D4B98E` | Tipografia display e destaques |
| Deep Obsidian | `#262423` | Fundo principal |
| Warm Ink | `#F3EBE1` | Texto principal |
| Muted Ink | `#9B938A` | Texto secundário |
| Subtle Outline | `#4A453F` | Bordas estruturais |

Princípios: dark mode absoluto, tipografia massiva em caixa alta, interface plana (sem glassmorphism nem gradientes pesados) e movimento horizontal fluido. O layout é responsivo: no celular o menu se reorganiza em duas linhas e o currículo ocupa a largura toda.

## Conteúdo do currículo

- Resumo profissional
- Experiência: Sociedade Cultural Cruzeiro do Sul, LIQ (P&G) e A. Angeloni
- Projetos: assistente virtual via WhatsApp para consultório, sistema de gestão e relatórios para o terceiro setor, sites institucionais
- Competências, formação e idiomas

## Publicação (deploy)

O site é 100% estático: basta servir estes arquivos na raiz do domínio (por exemplo em `public_html`):

- `index.html`
- `style.css`
- `script.js`
- `renan.webp`
- `camada2_no_bg.webp`

O restante do repositório (documentação, imagens originais, PDF e pastas de configuração de ferramentas) não é necessário em produção. Funciona em qualquer hospedagem estática ou compartilhada (HostGator, Hostinger, GitHub Pages, Netlify, Vercel etc.).

## Contato

- GitHub: [@pandaktwok](https://github.com/pandaktwok)
