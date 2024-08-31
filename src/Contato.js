import React from 'react';
import { Link } from 'react-router-dom';  // Importando Link do React Router

const Contato = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Contato</h1>
      <p className="text-center lead">Você pode me encontrar nas redes:</p>
      <div className="d-flex justify-content-center mb-4">
        <a href="https://www.facebook.com/AssembleiaDeDeusEmPE" className="btn btn-primary mx-2">Facebook</a>
        <a href="pondavid103@gmail.com" className="btn btn-secondary mx-2">Email</a>
        <a href="https://www.linkedin.com/in/pondavid/" className="btn btn-info mx-2">LinkedIn</a>
      </div>
      <div className="text-center">
        <Link to="/" className="btn btn-outline-primary">Home</Link>
      </div>
    </div>
  );
}

export default Contato;
