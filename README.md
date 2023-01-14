

# 4° Projeto Driven Education Bootcamp

### Você pode acessar a aplicação neste link:
  ### - <a href="https://filipetenedini.github.io/p4-Driven-Parrots/"> Parrots Memory Game </a>
<br><br><br>
<p align="center">
  |&nbsp;&nbsp;&nbsp<a href="#Projeto">Projeto</a>&nbsp;&nbsp;
  |&nbsp;&nbsp;&nbsp<a href="#Tecnologias">Tecnologias</a>&nbsp;&nbsp;
  |&nbsp;&nbsp;&nbsp<a href="#Aprendizados">Aprendizados</a>&nbsp;&nbsp;&nbsp;&nbsp;
  |&nbsp;&nbsp;&nbsp<a href="#avaliacao">Avaliação da Driven do meu Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;
</p>
<br><br>

![image](https://user-images.githubusercontent.com/105571583/212483647-0a5b1d82-97e0-40cb-ae0f-0267670d1226.png)

<h1 id="Projeto"> 💻 Projeto</h1>

<h3>- Requisitos passados </h3>

<details>
<summary>    
- Geral
</summary>

  - [ ]  Não utilize nenhuma biblioteca para implementar este projeto (jQuery, lodash, React, etc), nem outras linguagens que compilem para JS (TypeScript, ELM, etc), somente JavaScript puro.
  - [ ]  Seu projeto deverá ser desenvolvido utilizando Git e GitHub, em um repositório público.
  - [ ]  A cada requisito implementado faça um *commit* com uma mensagem descritiva do que você evoluiu.
  
 </details>
 
<details>
<summary>    
- Layout
</summary>

  - [ ]  Aplicar layout para desktop e mobile, seguindo o Figma.
 
 </details>
 
 <details>
<summary>    
- Distribuição de cartas
</summary>

  - [ ]  Ao entrar no jogo, o usuário deverá ser perguntado com quantas cartas quer jogar (utilize `prompt`).
  - [ ]  O usuário só poderá inserir números pares no `prompt`, de 4 a 14. Qualquer número que fuja dessa regra não deve ser aceito. No caso de números inválidos, o `prompt` deverá ficar sendo repetido em loop, até que o usuário coloque um número válido.
  - [ ]  Após inserir um número de cartas válido, o jogo deverá inserir as cartas viradas pra baixo na página de forma que a distribuição seja aleatória.

</details>

<details>
<summary>
- Imagem dos Parrots
</summary

  - [ ]  É obrigatório que tanto a imagem do papagaio virado pra baixo quanto a imagem virada pra cima (gif) sejam implementadas como tag `<img src="...">` (não deve ser um background).
    - OBS: a carta em si pode ser uma `<div>`, somente a imagem do papagaio que deve ser uma `<img>`.
  - [ ]  Papagaios iguais devem necessariamente usar a mesma imagem como base (não podem ser arquivos diferentes para um mesmo papagaio).
 
 </details>
 
 <details>
 <summary>
 - Clique na carta
 </summary>
 
- [ ]  Ao clicar em uma carta, ela deve ser virada.
- [ ]  Caso seja a primeira carta do par, ela deve permanecer virada até o usuário escolher a segunda carta.
- [ ]  Caso seja a segunda carta virada, existem duas situações:
    - [ ]  Caso seja igual à primeira carta, o usuário acertou e ambas agora devem ficar viradas pra cima até o final do jogo;
    - [ ]  Caso seja uma carta diferente da primeira carta virada, o usuário errou. Nesse caso, o jogo deve **aguardar 1 segundo** e então virar as duas cartas para baixo novamente.
 </details>  

<details>
<summary>    
- Fim do jogo
</summary>

- [ ]  Quando o usuário terminar de virar todas as cartas corretamente, deverá ser exibido um alert com a mensagem "Você ganhou em X jogadas!", sendo X a quantidade de vezes que o usuário virou uma carta no jogo, ou seja, cada carta virada é uma jogada, não é virar duas cartas que é uma jogada.

</details>

<details>
<summary>    
- Bônus (opcional)
</summary>

<details>
<summary>    
- Relógio
</summary>

- [ ]  Coloque um relógio no topo superior direito da tela, contando quantos segundos já passaram desde o início do jogo.
- [ ]  Ao final do jogo, a mensagem de vitória deverá ser acrescida do tempo que o usuário levou pra finalizar o jogo, no seguinte formato: `Você ganhou em X jogadas! A duração do jogo foi de Y segundos!`.

</details>

<details>
<summary>    
- Reinicio de Jogo
</summary>

- [ ]  Ao final do jogo, após o alert de vitória, pergunte com um **prompt** se o usuário gostaria de reiniciar a partida.
- [ ]  Se ele responder `sim`, comece novamente o jogo perguntando a quantidade de cartas.
- [ ]  Se ele responder `não`, apenas feche o prompt e deixe as cartas como estão.
- [ ]  O prompt deve receber as strings “**sim**” e “**não**”, com todas as letras minúsculas e acentuação correta.
    - Esse prompt não deveria aceitar "s", "S", "n", "N" ou qualquer variação com letras maiúsculas ou minúsculas.

</details>
</details>

<h1 id="Tecnologias">🚀 Tecnologias</h1>

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML e CSS
- JavaScript


<h1 id="Aprendizados">🧠 Aprendizados</h1>

- Arrays
- Loops
  - While and for
- Insert HTML via JS using Loops and innerHTML with template strings.
- remove & add Attributes
- setTimeout & setInterval
  - The most important functions of this project.
  - With them I control the time of flip cards and the time when you're playing the game
