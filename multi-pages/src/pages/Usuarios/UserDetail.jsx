import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const UserDetail = () => {
    const { id } = useParams()
    const [user, setUser] = useState(null)

    let navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id])

    if (!user) return <div>Carregando ...</div>

    return (
        <div className="p-4">
            <button className="cursor-pointer text-xl text-amber-600 mb-5 hover:text-amber-300" onClick={() => navigate(-1)}>
                Voltar
            </button>
            <h1 className="text-xl font-bold">{user.firstName} {user.lastName}</h1>
            <p className="text-gray-600">@{user.userName}</p>
            {user.endereco && (
                <p className="my-2">
                    {user.endereco.rua}, {user.endereco.numero} — {user.endereco.cidade}/{user.endereco.estado} - {user.endereco.cep}
                </p>
            )}
        </div>
    )
}

export default UserDetail
