import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-slate-800 flex justify-center rounded-xl text-zinc-200 m-60">
    <form className="flex flex-col">
        <input type="text" placeholder="Nome" className="m-2 rounded-lg bg-slate-700"/>
        <input type="password" placeholder="Senha" className="m-2 rounded-lg bg-slate-700"/>
        <div className="flex justify-center items-center">
        <button type="submit" className=" bg-blue-950 m-2 rounded-lg basis-1/2 flex justify-center">Entrar</button>
        <Link className=" bg-blue-950 m-2 rounded-lg basis-1/2 flex justify-center" href="/cadastro" >Cadastrar</Link>
        </div>
    </form>
    </div>
  )
}
