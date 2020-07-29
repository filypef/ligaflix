import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

function CadastroVideo(){
    return (
        <PageDefault>
        <h1>Cadastro vídeo</h1>

        <Link to="/cadastro/categoria">
            <Button>
                Cadastro Categoria
            </Button>
        </Link>
      </PageDefault>
    )
}

export default CadastroVideo;