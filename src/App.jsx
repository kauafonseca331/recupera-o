import './App.css'

function App() {


  return (
   <div>
    <header>
      <h2>
        Biblioteca do Kaua
      </h2>
      <h3>
        Encontre todos os grande livros aqui.
      </h3>
    </header>
    <img src="telabrancaa.png" width="40" height="50" />
    <img src="logoo.jpg" width="1350" height="400" />
    <img src="telabrancaa.png" width="470" height="200" />

    <div className="flex">
      <img src="pequeno principe.jpg" width="350" height="250" />
      <div className="informacao">
         <h3>O Pequeno Principe</h3>
        <h4>"O Pequeno Príncipe" é uma fábula sobre um jovem príncipe que viaja entre planetas, encontrando personagens peculiares e aprendendo lições sobre amor, amizade e responsabilidade. Ele compartilha suas experiências com um aviador perdido no deserto, transmitindo ensinamentos sobre a importância de ver com o coração e manter viva a criança interior.</h4>
      </div>
    </div>
    
    
    <div className="flex">
      <img src="livro2.png" width="400" height="300" />
      <div className="informacao">
        <h3>Quantos eus que não são meus?</h3>
        <h4>"Quantos eus que não são meus" é um livro escrito pelo padre Fábio de Melo que aborda temas como identidade,
          autenticidade e busca pelo autoconhecimento. A obra explora a complexidade do ser humano e questiona quantas vezes agimos de acordo com expectativas alheias,
          em detrimento de nossa própria essência.</h4>
      </div>
    </div> 

    <div className="flex">
    <img src="livroR.jpg" width="400" height="300" />
    <div className="informacao">
      <h3>Respire</h3>
      <h4>"Respire" é um romance escrito por Anne-Sophie Brasme, 
      que narra a intensa e complexa amizade entre duas adolescentes, Charlie e Sarah. Elas são opostos: Charlie é tímida e introvertida,
      enquanto Sarah é extrovertida e magnética. A relação entre elas se desenvolve rapidamente, com Sarah exercendo uma forte influência
      sobre Charlie. No entanto, à medida que a amizade se aprofunda,
      segredos sombrios vêm à tona, revelando camadas profundas de vulnerabilidade e manipulação.</h4>
      </div>
    </div> 

    <div className="flex">
    <img src="livroC.jpg" width="400" height="300" />
    <div className="informacao">
      <h3>Vincent</h3>
      <h4>"Vincent" é um romance escrito por Tim Burton, que conta a história de Vincent Malloy, 
        um menino peculiar e imaginativo de sete anos. Vincent se vê como um personagem de horror clássico, 
        inspirado nos filmes de terror que ele adora assistir. Ele vive em um mundo de fantasia, onde sonha em
        se tornar como seu ídolo, Vincent Price, um famoso ator de filmes de terror.</h4>
      </div>
    </div> 
    

    <img src="telabrancaa.png" width="250" height="200" />

    <img src="logoo.jpg" width="1350" height="400" />


    <display></display>
    <table>
      <thead>
        <tr>
          <th>levando</th>
          <th>sabedoria</th>
          <th>para você</th>
        </tr>
      </thead>
    </table>
   </div>

  )
}

export default App
