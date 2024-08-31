import React from 'react';
import { Link } from 'react-router-dom';
import './Rotina.css';

const Rotina = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4"><b>Rotina</b></h1>
      <div className="text-center mb-3">
        <Link to="/contato" className="btn btn-primary">Contato</Link>
      </div>
      
      {/* Alinhamento horizontal usando d-flex */}
      <div className="d-flex justify-content-center align-items-center mb-4">
        <img src="https://christianosantos.com/files/cs1/avatar-homem.jpg" alt="Foto" className="rounded-circle img-fluid mx-3" style={{ maxWidth: '150px' }} />
        <video src="https://www.w3schools.com/tags/movie.mp4" controls className="rounded mx-3" style={{ maxWidth: '300px' }}></video>
        <audio loop src="http://www.w3schools.com/tags/horse.mp3" controls className="mx-3" style={{ maxWidth: '150px' }}></audio>
      </div>

      <p className="lead text-center">
        <strong><b>Acordar</b> (07:00):</strong> Levante-se da cama e estique-se para despertar o corpo.
        <br />
        <strong><b>Higiene Pessoal</b> (07:05 - 07:15):</strong> Lave o rosto, escove os dentes e tome um banho rápido.
        <br />
        <strong><b>Café da Manhã</b> (07:15 - 07:30):</strong> Prepare e tome um café da manhã saudável.
        <br />
        <strong><b>Planejamento do Dia</b> (07:30 - 07:40):</strong> Revise suas tarefas e objetivos do dia.
        <br />
        <strong><b>Exercício</b> (07:40 - 08:00):</strong> Faça uma caminhada leve ou uma série de exercícios simples.
        <br />
        <strong><b>Trabalho/Estudo</b> (08:00 - 12:00):</strong> Concentre-se nas principais tarefas ou no estudo.
        <br />
        <strong><b>Pausa para o Almoço</b> (12:00 - 12:30):</strong> Almoce e descanse um pouco.
      </p>
      
      <hr />
      
      <blockquote className="blockquote text-center">
        <p className="mb-0"><i>“Só sei que nada sei.”</i></p>
        <br />
        <footer className="blockquote-footer">Sócrates</footer>
      </blockquote>
    </div>
  );
}

export default Rotina;
