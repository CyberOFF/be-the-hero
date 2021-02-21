import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";
import "./styles.css"

export default function NewIncident () {
  return (
    <div className="new-incident-container">
    <div className="content">
      <section>
        <img src={logoImg} alt="Be The Hero" />

        <h1>Cadastrar Novo Caso</h1>
        <p>
          Descreva o caso detalhadamente para encontrar um herói para resolver isso.
        </p>

        <Link className="back-link" to="/profile">
          <FiArrowLeft size={16} color=" #e02041 " />
          Voltar para Home
        </Link>
      </section>
      <form>
        <input placeholder="Titulo Do Caso" />
        <textarea placeholder="Descrição"></textarea>
        <input placeholder="Valor em Reais - R$" />

        <button className="button" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  </div>
  )
}