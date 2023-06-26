'use client'
import {useEffect, useState } from 'react';

interface CadastroProps {
    nome: string;
    email: string;
    senha: string;
    confirmarSenha: string;
    isEquals: boolean;
}

export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [isEquals, setIsEquals] = useState(false);

    useEffect(() => {
        setIsEquals(senha === confirmarSenha);
    }, [senha, confirmarSenha]);

    function handleSubmit(){
        isEquals ? alert('Cadastro realizado com sucesso!') : alert('As senhas não são iguais!');
    }

    return (
        <div className="bg-slate-800 flex justify-center rounded-xl text-zinc-200 m-60">
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <input value={nome} type="text" placeholder="Nome" className="m-2 rounded-lg bg-slate-700" onChange={e => setNome(e.target.value)} />
            <input value={email} type="email" placeholder="E-mail" className="m-2 rounded-lg bg-slate-700" onChange={e => setEmail(e.target.value) }/>
            <input value={senha} type="password" placeholder="Senha" className="m-2 rounded-lg bg-slate-700" onChange={e => setSenha(e.target.value)}/>
            <input value={confirmarSenha} type="password" placeholder="Confirmar senha" className="m-2 rounded-lg bg-slate-700" onChange={e => setConfirmarSenha(e.target.value)}/>
            <button className=" bg-blue-950 m-2 rounded-lg">Cadastrar</button>
        </form>
        </div>
    )
    }