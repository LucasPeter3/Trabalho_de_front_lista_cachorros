import React from 'react';
import './App.css';

const dogBreeds = [
  {
    id: 1,
    title: "Labrador",
    price: "R$ 2.000,00",
    image: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia10436/labrador-retriever-cursos-cpt.jpg"
  },
  {
    id: 2,
    title: "Bulldog",
    price: "R$ 3.000,00",
    image: "https://blog.colombo.com.br/wp-content/uploads/2021/06/historia-do-bulldog-ingles.jpg"
  },
  {
    id: 3,
    title: "Poodle",
    price: "R$ 2.500,00",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo9OtLY96i8AWe31hXm_nakDlk1nXbrugRjHpINv7M7Wk9TRm9Ta3TYdmt9dzwtrCmdhdrgQ&s"
  }
];

function App() {
  return (
    <div className="App">
      <h1>Lista de Raças de Cachorros</h1>
      <div className="product-list">
        {dogBreeds.map(dog => (
          <div key={dog.id} className="product">
            <img src={dog.image} alt={dog.title} />
            <h2>{dog.title}</h2>
            <p>{dog.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
