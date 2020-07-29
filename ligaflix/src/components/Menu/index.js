import React from 'react';
import Logo from '../../assets/img/ligaflix.png';
import './Menu.css'
import ButtonLink from '../ButtonLink'; 
import Button from '../Button';
import { Link } from 'react-router-dom';

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} alt="LigaFlix Logo" className="Logo"></img>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;