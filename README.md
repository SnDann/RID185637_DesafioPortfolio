# Portfólio Profissional – Daniel Pereira da Cruz

## Objetivo do Projeto
Desenvolver um portfólio profissional utilizando React e Vite, seguindo rigorosamente o template Figma fornecido, com foco em apresentar informações reais, layout responsivo, navegação intuitiva e identidade visual profissional.

---

## Requisitos Atendidos

### Técnicos
- **Framework:** React 18 com Vite para build e desenvolvimento rápido.
- **Hooks React:** Utilização comprovada de pelo menos dois hooks (`useState` e `useEffect`).
- **Componentização:** Cada seção do portfólio implementada como componente React independente.
- **Estilização:** CSS modularizado em `App.css` e `index.css`, com refinamento para máxima aderência ao Figma.
- **Responsividade:** Layout adaptável a diferentes tamanhos de tela, com espaçamentos e proporções ajustados.
- **Navegação:** Menu fixo com rolagem suave para cada seção, facilitando a experiência do usuário.
- **Conteúdo Real:** Todas as informações (sobre, habilidades, experiências, projetos, certificações, idiomas) são reais e personalizadas.
- **Acessibilidade:** Contraste de cores, tamanhos de fonte e espaçamentos revisados para garantir boa leitura e navegação.

### Visuais
- **Aderência ao Figma:** Layout, cores, tipografia, espaçamentos e ícones ajustados para máxima correspondência ao template.
- **Fonte:** 'Inter', Arial, Helvetica, sans-serif definida como fonte global.
- **Cores:** Paleta de cores ajustada conforme o Figma, com fundo claro, textos escuros e destaques em azul/vermelho.
- **Cartões:** Bordas arredondadas, sombras suaves e espaçamentos internos conforme o design.
- **Menu de Navegação:** Todos os itens do Figma presentes, com espaçamento ampliado e efeitos de hover/foco.
- **Botões:** Estilização refinada, com efeitos visuais e acessibilidade.
- **Ícones:** Utilização de Font Awesome para habilidades e redes sociais, alinhados e dimensionados conforme o Figma.
- **Imagens:** Projetos com imagens reais, bordas arredondadas e proporção adequada.
- **Footer:** Informações de contato e redes sociais, com espaçamento e cor ajustados.

---

## Estrutura do Projeto

```
portfolio-vite/
  public/
    favicon.ico
    vite.svg
  src/
    App.jsx
    App.css
    index.css
    components/
      About.jsx
      Skills.jsx
      Experience.jsx
      Projects.jsx
      Education.jsx
      Certifications.jsx
      Languages.jsx
  README.md
  index.html
  package.json
  vite.config.js
```

---

## Componentes e Funcionalidades

- **App.jsx:** Componente principal, organiza e renderiza todas as seções, além do menu de navegação e footer.
- **About.jsx:** Apresentação pessoal, com texto real e objetivo.
- **Skills.jsx:** Lista de habilidades técnicas, com ícones e estilização.
- **Experience.jsx:** Experiências profissionais reais, detalhadas e organizadas em cartões.
- **Projects.jsx:** Projetos desenvolvidos, com imagem, descrição e link para repositório.
- **Education.jsx:** Formação acadêmica, com instituição, curso e descrição.
- **Certifications.jsx:** Certificações e cursos, carregados de forma assíncrona com `useEffect`.
- **Languages.jsx:** Idiomas, com nível de proficiência e descrição.
- **Footer:** Contato e redes sociais, com ícones e informações de direitos autorais.

---

## Hooks Utilizados

- **useState:** Gerenciamento de listas dinâmicas (habilidades, experiências, projetos, certificações, idiomas).
- **useEffect:** Simulação de carregamento assíncrono para certificações/cursos.

---

## Estilização e Responsividade

- **Fonte global:** 'Inter', Arial, Helvetica, sans-serif.
- **Cores:** Fundo principal #f7f9fb, cartões #fff, textos #111 e #6b7280, destaques em #646cff e #ef4444.
- **Espaçamentos:**  
  - Entre seções: 40px  
  - Entre cartões: 28px  
  - Padding dos cartões: 28px 22px  
  - Menu: gap 18px  
- **Bordas e sombras:**  
  - Cartões: border-radius 16px, box-shadow 0 4px 24px rgba(0,0,0,0.10)
- **Hover/foco:**  
  - Navegação e botões com transições suaves e destaque visual.
- **Responsividade:**  
  - Layout testado em diferentes larguras de tela, mantendo proporção e legibilidade.

---

## Personalização Visual

- **Favicon personalizado** e título da página ajustados.
- **Imagens de projetos** reais, com bordas arredondadas.
- **Ícones de habilidades e redes sociais** alinhados e dimensionados conforme o Figma.

---

## Como Executar

1. Instale as dependências:
   ```
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```
3. Acesse no navegador:
   ```
   http://localhost:5173
   ```

---

## Testes e Validação

- Validação visual lado a lado com o Figma para garantir correspondência de layout, cores, tipografia, espaçamentos e ícones.
- Testes de responsividade em diferentes dispositivos e navegadores.
- Verificação de acessibilidade e contraste de cores.

---

## Considerações Finais

O projeto atende a todos os requisitos técnicos e visuais do desafio, estando pronto para entrega.  
Caso seja necessário algum ajuste milimétrico adicional, recomenda-se comparar lado a lado com o Figma e ajustar diretamente nos arquivos CSS.

---

**Desenvolvido por Daniel Pereira da Cruz**
"# RID185637_DesafioPortfolio" 
