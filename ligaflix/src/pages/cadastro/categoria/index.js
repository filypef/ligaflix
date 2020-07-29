import React from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button'

function CadastroCategoria(){
    return (
        <PageDefault>
            <h1>Cadastro Categoria</h1>

            <Link to="/">
                <Button>
                    Ir para home
                </Button>
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;