import React from "react";

const Header = () => {
  return (
    <header>

        <nav>
            <h1 id="logo">
                <a href="index.html"><img src="./imagens/logo" /></a> 
            </h1>

            <form action="" id="barra_pesquisa">
                <input type="search" name="pesquisa" placeholder="Busque sua turma" />
                <button type="submit"><img src="imagens/lupa.svg" /></button>
            </form>

            <ul>
                <li id="botao_not"><button type="button"><img src="imagens/notificacao.svg" /></button></li>
                <li id="botao_perfil"><a href="login.html"><img src="imagens/conta.svg" /></a></li>
            </ul>
        </nav>   

    </header>

  );
};

export default Header;
