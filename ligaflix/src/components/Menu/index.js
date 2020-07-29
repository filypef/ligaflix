import React from 'react';
import Logo from '../../assets/img/ligaflix.png';
import './Menu.css'
import ButtonLink from '../ButtonLink'; 
import Button from '../Button';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="LigaFlix Logo" className="Logo"></img>
            </a>
            <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink>

            <Button>
                Teste Componente Menu
            </Button>
        </nav>
    );
}

export default Menu;