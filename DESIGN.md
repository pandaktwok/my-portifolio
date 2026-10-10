---
name: Portfólio Renan Sombrio Zock
description: Uma vitrine interativa e de alto impacto que prova minha capacidade técnica.
colors:
  primary: "#D4B98E"
  neutral-bg: "#262423"
  neutral-ink: "#EFEFEF"
  neutral-border: "#4A453F"
typography:
  display:
    fontFamily: "'Inter', sans-serif"
    fontSize: "clamp(4rem, 10vw, 12rem)"
    fontWeight: 800
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "'Inter', sans-serif"
    fontSize: "clamp(2rem, 5vw, 4rem)"
    fontWeight: 700
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Inter', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "8px"
  md: "16px"
  lg: "24px"
spacing:
  sm: "16px"
  md: "32px"
  lg: "64px"
  xl: "128px"
components:
  card:
    backgroundColor: "transparent"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm}"
---

# Design System: Portfólio Renan Sombrio Zock

## 1. Overview

**Creative North Star: "A Escuridão Dourada (The Golden Dark)"**

Um portfólio luxuoso, minimalista e de altíssimo impacto. O design é dominado por um fundo escuro com nuances quentes, tipografia geométrica massiva e ousada em tons de areia/dourado que transmitem confiança especialista. O layout é elegante, frequentemente isolado do navegador por uma moldura com bordas sutis e arredondadas. O movimento é coreografado e imersivo, focado no deslizamento horizontal (carrossel) contínuo. Este sistema rejeita totalmente temas claros genéricos, templates corporativos SaaS e minimalismo estéril.

**Key Characteristics:**
- Tipografia brutalmente imponente e caixa alta.
- Contraste dramático (Dark Mode absoluto + Ouro Areia).
- Emolduramento (Bordas arredondadas delicadas encapsulando a tela).
- Movimento horizontal coreografado e fluido.

## 2. Colors

A paleta é fundamentada na tensão e contraste absoluto entre o fundo escuro e denso e o impacto luxuoso do tom areia/dourado da tipografia.

### Primary
- **Sand Gold** (`#D4B98E`): O coração do impacto visual. Usado para a tipografia display gigante (como o "CREATIVE", "VISUAL DESIGNER" da referência) e destaques cruciais.

### Neutral
- **Deep Obsidian** (`#262423`): O fundo principal e massivo da interface. Escuro, mas com sutis notas quentes para não parecer um vazio preto e estéril.
- **Warm Ink** (`#EFEFEF`): Texto de corpo e subtítulos descritivos. Um branco levemente atenuado para reduzir a fadiga visual sobre o fundo escuro.
- **Subtle Outline** (`#4A453F`): Usado exclusivamente para bordas estruturais (como o delineado fino que engloba a página).

**The Focal Point Rule.** O tom dourado (`Sand Gold`) só deve ser usado em tipografia massiva ou chamadas cruciais. Se espalhado em pequenos detalhes irrelevantes, o aspecto premium se dilui.

## 3. Typography

**Display Font:** 'Inter' (with sans-serif fallback)
**Body Font:** 'Inter' (with sans-serif fallback)

**Character:** Arquitetônica, técnica e brutalmente confiante. Uma tipografia grotesca sem serifa, usada em extremos de escala e peso.

### Hierarchy
- **Display** (800, clamp(4rem, 10vw, 12rem), 1): Títulos gigantes de impacto em caixa alta. Devem ocupar um espaço massivo da tela, ultrapassando os limites se necessário.
- **Headline** (700, clamp(2rem, 5vw, 4rem), 1.1): Subtítulos, funções (ex: "VISUAL DESIGNER") e introduções poderosas.
- **Title** (600, 1.5rem, 1.2): Nomes de projetos nos cartões do carrossel.
- **Body** (400, 1rem, 1.6): Textos descritivos. Manter o comprimento das linhas em 65-75 caracteres.
- **Label** (500, 0.875rem, 0.05em, uppercase): Links de navegação e metadados, separados por pontos ("SOCIAL MEDIA DESIGN • PITCH DECK DESIGN").

**The Block Text Rule.** O letter-spacing da tipografia Display deve ser no mínimo `-0.04em`. Isso garante que as letras fiquem apertadas e unidas, formando blocos quase sólidos e arquitetônicos.

## 4. Elevation

Este sistema é predominantemente **plano (flat)**. Não utilizamos sombras artificiais pesadas ("drop shadows") nem o aspecto nublado de glassmorphism. A profundidade vem da escala brutal da tipografia, sobreposição (texto passando por baixo/cima da foto do Hero) e pelo movimento em carrossel.

**The Flat Surface Rule.** Interfaces e cards descansam sem sombras. Se precisarem de delimitação, usam bordas de 1px sutis (`Subtle Outline`) ou repousam diretamente no fundo escuro.

## 5. Components

### Emolduramento Principal (Viewport Frame)
- **Shape:** Borda com arredondamento sutil (`md: 16px` a `lg: 24px`).
- **Style:** Borda sólida de 1px no tom `Subtle Outline` (`#4A453F`).
- **Padding:** Margens generosas isolando a moldura da borda da tela do dispositivo.

### Navegação / Marquee
- **Typography:** Fonte Label (caixa alta com leve espaçamento entre as letras).
- **Separators:** Marcadores de ponto ("•") entre os itens para um aspecto editorial e denso.
- **Interaction:** Pode ser fixo no topo da moldura do site.

### Carrossel de Projetos
- **Movimento:** Animação coreografada contínua. Elementos saem limpos pela esquerda, novos elementos chegam da direita.
- **Background:** Totalmente sem caixa rígida (ghost style) ou repousando em outline. O foco é a imagem/conteúdo, não o 'card' em si.

## 6. Do's and Don'ts

Guardrails rigorosos para blindar a fidelidade estética à sua referência.

### Do:
- **Do** usar tipografia Display gigantesca e impactante, em caixa alta, usando o tom `Sand Gold` (`#D4B98E`).
- **Do** manter a interface encapsulada em uma borda sutil com cantos suavemente arredondados.
- **Do** separar itens de navegação superior ou de carrossel contínuo com "•".
- **Do** projetar animações horizontais suaves, da direita para a esquerda.

### Don't:
- **Don't** usar backgrounds de tela no modo claro (light mode) sob nenhuma hipótese.
- **Don't** utilizar glassmorphism (fundos embaçados) ou gradientes pesados na tipografia. O luxo aqui provém de cores sólidas e precisão de espaçamento.
- **Don't** usar bordas exageradamente arredondadas (maiores que 24px, estilo "pílula") em contêineres principais. O aspecto precisa se manter estruturado e sério.
- **Don't** usar listras coloridas ou enfeites não essenciais. "Show, don't tell."
