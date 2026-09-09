import { useEffect, useState } from "react"
import { Link } from "react-router";

export const Produtos = () => {
    const [produtos, setProdutos] = useState([])
    const [loading, setLoading] = useState(true)
    const [erro, setErro] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => {
                if (!res.ok) throw new Error('Erro ao buscar produtos')
                return res.json()
            })
            .then(data => setProdutos(data))
            .catch(err => setErro(err.message))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <p>Carregando...</p>
    if (erro) return <p className="text-red-500">{erro}</p>

    return (
        <div className="w-full">
            <h1 className="text-2xl font-black mb-4">Produtos</h1>

            <div className="flex gap-3 flex-wrap">
                {produtos.map(produto => (
                    <div key={produto.id} className="card rounded p-3 border">
                        <img src={produto.image} alt={produto.title} />
                        <h2 className="text-xl">{produto.title}</h2>
                        <p className="my-2 text-sm text-gray-600">{produto.description}</p>
                        <p className="font-bold">
                            {produto.price?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                        </p>
                        <Link to={`/produtos/${produto.id}`} className="text-red-500 underline">
                            Ver mais
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
