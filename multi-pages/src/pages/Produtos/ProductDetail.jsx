import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const ProductDetail = () => {
    const { id } = useParams()
    const [produto, setProduto] = useState(null)

    let navigate = useNavigate();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduto(data))
    }, [id])

    if (!produto) return <div>Carregando ...</div>

    return (
        <div className="p-4">
            <button className="cursor-pointer text-xl text-amber-600 mb-5 hover:text-amber-300" onClick={() => navigate(-1)}>
                Voltar
            </button>
            <img src={produto.image} alt={produto.title} />
            <h1 className="text-xl font-bold">{produto.title}</h1>
            <p className="my-2 text-gray-600">{produto.description}</p>
            <p className="font-bold">
                {produto.price?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </p>
        </div>
    )
}

export default ProductDetail
