import React from "react";
import "./global.css";
import Routes from './routes'

function App() {
  return <Routes />;
}

export default App;

/**
 * Caso tenha que  manipular os dados em meidação a uma API, é utilizado um conceito chamado Estado
 *
 * Propriedades: Podem sem passadas fora de chaves (props), dentro de chaves especificando-as ({children}).
 *
 * Para chamar uma funçao para um botao ou submit, oloca uma outra função dentro da função principal App, sem problema algum
 *
 * nunca pode manipular o vlaor do estado de forma direta, temos de sobrepor - Imutabilidade
 */
