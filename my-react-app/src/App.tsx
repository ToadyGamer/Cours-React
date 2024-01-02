import React from 'react';
import './App.css'

function App() {
const[name, SetName] = React.useState("React");

function ChangeName(){
  SetName((prev) => {
    if(prev == "React") return "Vite";
    else return "React";
  })
}

  return (
    <>
      <h1>EMPLOYES DE MACHIN TRUC BIDULE</h1>
    </>
  )
}

export default App
