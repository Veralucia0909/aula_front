import { useEffect, useState } from "react"
import { Link } from "react-router";

export const Usuarios = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [erro, setErro] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(res => {
                if (!res.ok) throw new Error('Erro ao buscar usuários')
                return res.json()
            })
            .then(data => setUsers(data))
            .catch(err => setErro(err.message))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <p>Carregando...</p>
    if (erro) return <p className="text-red-500">{erro}</p>

    return (
        <div className="w-full">
            <h1 className="text-2xl font-black mb-4">Usuários</h1>

            <div className="flex gap-3 flex-wrap">
                {users.map(user => (
                    <div key={user.id} className="card rounded p-3 border">
                        <h2 className="text-xl">{user.firstName} {user.lastName}</h2>
                        <p className="text-gray-600">@{user.userName}</p>
                        {user.endereco && (
                            <p className="my-2 text-sm">
                                {user.endereco.rua}, {user.endereco.numero} — {user.endereco.cidade}/{user.endereco.estado}
                            </p>
                        )}
                        <Link to={`/usuario/${user.id}`} className="text-red-500 underline">
                            Ver mais
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
