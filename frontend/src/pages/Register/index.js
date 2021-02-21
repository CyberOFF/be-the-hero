import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

import api from "../../services/api";
import "./styles.css";

export default function register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  async function handleRegister(e) {
    //Prevenir o recarregamento padrao ao clicar no submit do cadastro (e,preventDefault)
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };
    //enviar o data para a api

    try {
      const response = await api.post("ongs", data);

      alert(`Seu ID de Acesso:  ${response.data.id}`);
    } catch (err) {
      alert("Cadastro Não efetuado, Verifique os Campos e Tente Novamente.");
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color=" #e02041 " />
            Voltar a Página de Logon
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da Sua ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
