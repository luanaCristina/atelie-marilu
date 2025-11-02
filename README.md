# 🎀 Ateliê Marilu - Site Vitrine
Link do site: https://luanacristina.github.io/atelie-marilu/ 

![Logo Ateliê Marilu](images/logoCircular.png)

Este é o repositório do site vitrine (showcase) do **Ateliê Marilu**, focado na exibição de produtos artesanais para bebês, como kits de naninha e bichinhos de pelúcia.

Este projeto é um site **estático**, o que significa que todo o conteúdo (produtos, preços, imagens) está salvo diretamente nos arquivos `index.html`, `style.css` e `script.js`, sem a necessidade de um banco de dados ou painel de administração.

---

## ✨ Funcionalidades Principais

* **Carrossel 3D (Cover Flow):** O site apresenta um carrossel de slides 3D na página inicial, que mostra o slide principal, o anterior e o próximo. O carrossel também possui auto-play.
* **Catálogo de Produtos Estático:** Os produtos estão divididos em "Kits com Naninha" e "Bichinhos de Pelúcia".
* **Agrupamento por Preço:** Dentro de cada seção, os produtos são organizados visualmente em grupos de preço (ex: "R$ 145,90", "R$ 155,00").
* **Modal de Galeria de Produtos:** Ao clicar em qualquer card de produto, um pop-up (modal) é aberto, exibindo uma galeria de imagens dedicada àquele item. As informações são puxadas dos atributos `data-*` no HTML.
* **Design Responsivo (Mobile-First):** O site é projetado para funcionar em celulares (onde o carrossel 3D se torna um slider 2D simples) e se adapta a telas maiores (ativando o efeito 3D).
* **Rodapé Personalizado:** O rodapé inclui um botão de ação para o WhatsApp, um link para o Instagram e uma marca d'água da logo repetida com transparência.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Para toda a estrutura de conteúdo do site.
* **CSS3:** Para o design, paleta de cores, layout (Flexbox/Grid), e todas as animações 3D (`perspective`, `transform: rotateY()`).
* **JavaScript (Vanilla/Puro):** Usado para dar vida ao carrossel 3D (controlando as classes `.active`, `.prev`, `.next`) e para fazer o modal de produtos funcionar.

---

## 📂 Estrutura de Arquivos
- ├── index.html (Arquivo principal com todo o conteúdo)
- ├── style.css (Arquivo de estilos para layout e 3D)
- ├── script.js (Lógica do Carrossel 3D e do Modal)
- ├── images/ │
-   ├── logoCircular.png │
-   ├── kit01-01.jpeg │
-   ├── item01.jpeg │
-   └── ... (todas as outras imagens de produtos e carrossel)
- └── README.md (Este arquivo)
