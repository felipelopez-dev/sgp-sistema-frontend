# SGP - Sistema de Gerenciamento de Produção

O **SGP (Sistema de Gerenciamento de Produção)** é uma ferramenta web desenvolvida para resolver um problema real em ambiente industrial. Criado com **HTML5**, **CSS3** e **JavaScript**, o sistema realiza o **cálculo diário do saldo de caixas utilizadas na produção**, ajudando equipes operacionais a manterem um controle preciso da capacidade de armazenamento e facilitando o planejamento da produção.

---

## 🧩 Problema Real Resolvido

Na empresa onde trabalho, lidamos com um túnel de congelamento com capacidade para armazenar até **10.000 caixas**. Frequentemente, essa capacidade era ultrapassada por falta de controle, o que gerava atrasos e dificuldades na organização da produção. 

O **SGP** foi criado justamente para **evitar esse gargalo**: ele calcula automaticamente a quantidade total de caixas no final do dia, alertando a equipe para que possa se planejar com antecedência e direcionar os excedentes para outro local.

---

## ⚙️ Funcionalidades

- ✅ Cálculo automático da quantidade de caixas produzidas no dia  
- ✅ Exibição clara e direta do saldo final  
- ✅ Organização do apontamento de produção diária  
- ✅ Interface intuitiva e responsiva  
- ✅ Sem necessidade de instalação ou backend  

---

## 🖼️ Telas do Sistema

### Tela de Login

O sistema começa com uma tela simples e objetiva de login:

![Tela de Login](https://raw.githubusercontent.com/felipelopez-dev/sgp-sistema-frontend/main/assets/img/screenshots/login.png)

---

### Página Principal

Após o login, o usuário acessa a área principal para iniciar os apontamentos de produção:

![Página Principal](https://raw.githubusercontent.com/felipelopez-dev/sgp-sistema-frontend/main/assets/img/screenshots/home.png)

---

## 📊 Etapas do Cálculo de Caixa no Final do Dia

### 1. Quantidade de Carcaças
O sistema solicita a **quantidade de carcaças produzidas** no dia. São dois valores inseridos manualmente:

![Etapa 1 - Carcaças](https://raw.githubusercontent.com/felipelopez-dev/sgp-sistema-frontend/main/assets/img/screenshots/calculateone.png)

---

### 2. Entrada de Caixas no Túnel
O próximo passo é informar a **quantidade de caixas que entrou no túnel** de congelamento:

![Etapa 2 - Entrada](https://raw.githubusercontent.com/felipelopez-dev/sgp-sistema-frontend/main/assets/img/screenshots/calculatetwo.png)

---

### 3. Saída de Caixas do Dia Anterior
Em seguida, informa-se a **quantidade de caixas que será retirada** (relativa ao dia anterior):

![Etapa 3 - Saída](https://raw.githubusercontent.com/felipelopez-dev/sgp-sistema-frontend/main/assets/img/screenshots/calculatethree.png)

---

### 4. Resultado Final do Cálculo
O sistema realiza o **cálculo total do saldo no túnel**, levando em conta:

- As carcaças do dia  
- A entrada do dia  
- A saída do dia anterior (que deve ser subtraída)  

Resultado: uma previsão clara do espaço ocupado.

![Etapa 4 - Resultado Final](https://raw.githubusercontent.com/felipelopez-dev/sgp-sistema-frontend/main/assets/img/screenshots/calculatefour.png)

---

## 🌐 Acesse o Sistema

Você pode testar o sistema diretamente aqui:  
👉 **[Abrir SGP agora](https://felipelopez-dev.github.io/Sgp-sistema-frontend/)**

---

## 📈 Resultados e Comparação

Desde que o **SGP** foi implementado, a empresa percebeu melhorias significativas no processo produtivo:

| Critério                          | Antes do SGP                             | Depois do SGP                          |
|----------------------------------|------------------------------------------|----------------------------------------|
| Controle de caixas no túnel     | Anotações manuais, com muitos erros      | Automático, rápido e confiável         |
| Planejamento da produção         | Falho, por falta de dados precisos       | Baseado em dados reais e calculados    |
| Ocupação do túnel                | Frequente ultrapassagem da capacidade    | Otimizado e monitorado diariamente     |
| Comunicação entre turnos         | Pouco clara e informal                   | Padronizada através dos apontamentos   |
| **Margem de erro nos cálculos** | De **600 a 1000 caixas** de diferença    | Entre **30 a 200 caixas** apenas       |

> **Resultado:** com o uso diário do SGP, a **margem de erro foi reduzida em mais de 90%**, permitindo decisões mais assertivas e melhor distribuição da produção.

---

## 🛠 Tecnologias Utilizadas

- **HTML5** – Estrutura semântica da aplicação  
- **CSS3** – Estilização customizada com design responsivo  
- **JavaScript** – Lógica e interação com o usuário  

---

## 🎨 Paleta de Cores e Tipografia

- **Fonte principal:** Inter

### Paleta:

| Cor     | Código Hex   | Descrição                  |
|---------|--------------|----------------------------|
| ⬛️ Preto      | `#000000`    | Texto ou fundo principal     |
| 🔵 Azul escuro | `#0A1E40`    | Destaques intensos           |
| 🔷 Azul médio  | `#165BAA`    | Botões ou links principais   |
| 🔹 Azul claro  | `#0065DA`    | Hover ou interações leves    |
| 🔹 Azul suave  | `#40A8F5`    | Destaques em áreas claras    |
| ⚪️ Cinza claro | `#C0C2C7`    | Bordas ou plano de fundo     |
| ⚪️ Muito claro | `#F5F6F8`    | Fundo padrão de páginas      |
| ⚪️ Cinza suave | `#ECEEF2`    | Elementos neutros            |
| ⚫️ Cinza escuro | `#24272F`    | Texto secundário ou ícones   |
| ⚫️ Cinza médio | `#353841`    | Cabeçalhos ou menus          |
| ⚫️ Cinza leve  | `#5F6268`    | Legendas ou rodapés          |
| 🟥 Vermelho     | `#FF0000`    | Alertas ou mensagens de erro |


---

## 📁 Estrutura de Pastas

Abaixo está a estrutura de diretórios do projeto, com uma breve descrição de cada componente:

### `sgp-sistema-frontend/`
- **Pasta principal do projeto.**

### `assets/`
- Arquivos que se encontra css, img e javascript.

#### `img/favicons`
- Imagem do favicons da logotipo

##### `img/screenshots/`
- Capturas de tela para documentação.

#### `img/pages/`
- Imagem de cada página.

#### `img/global/`
- As imagens que será acessada em todas páginas.

---

### `css/`
- Arquivos de estilo CSS.

#### `css/global/`
- Estilos globais e resets.

#### `css/base/`
- Estilos base do layout.

#### `css/components/`
- Estilos específicos para cada página.

#### `css/themes/`
- Estilos de modo claro e escuro.

---

### `js/`
- Scripts JavaScript.

#### `js/pages/`
- Scripts específicos para cada página.

#### `js/global/`
- Funções utilitárias reutilizáveis.

---

### `pages/`
- Páginas da aplicação.

#### `pages/login/`
- Página de login (`login.html`).

#### `pages/calcular/`
- Fluxo de cálculo de caixas.

#### `pages/guide/`
- Guia para como manipular os calculos.

---

### `index.html`
- Página inicial após o login.

### `README.md`
- Documentação do projeto.

---

## 👩‍💻 Autor

Desenvolvido por  
**Felipe Lopez**

---

## 🙏 Agradecimentos

Primeiramente, agradeço a Deus por me guiar nas dificuldades. Sou grato à minha família, que sempre esteve ao meu lado, oferecendo suporte. Também expresso minha gratidão à equipe de produção da empresa, que me inspirou e colaborou na criação deste sistema.
