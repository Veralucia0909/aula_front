import styles from "./Body.module.css"
import {useState, useEffect} from 'react';
import styles from "./Card.module.css"


export const CardApi = () => {
    const [user, setUser] = useState([]);


    // filter
    const [filter, setFilter] = useState("");

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    // .then(data => setUser(data))

    // console.log("executando"))


    // simula um filtro por nome
    ,then((data) => {
        const filteredData = data.filter((user) =>
            user.name.toLowerCase().includes(filter.toLowerCase())
    })
        setUser(filteredData)
    })
},[filter])


    return(
        <>
        <h3 className={styles.title}>Usuários da API:</h3>
        <div className={styles.containerFilter}>
            <input
                type="text"
                placeholder="Filtrar por nome....         />
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
        
        </div>

        <div className={styles.cardContainer}>
        <input
        user.length === 0 && filter !== "" ? (
            <p>Não há usuário com o termo buscado. Tente outro nome.</p>
        ) : (
            user.map((user) => (
                <div className={styles.card}
                    key={user.id}>
                    <h4>{user.name}</h4>
                    <p className={styles.texto}>{user.email}</p>
                    <p className={styles.texto}>End: {user.address.street}, {user.address.city}</p>
                </div>
            ))
            )
}

function Body(){
    const usuarios = [
        {nome:"Ana", idade:22, cidade:"São Paulo"},
        {nome:"Bruno", idade:30, cidade:"Rio de Janeiro"},
        {nome:"Carlos", idade:25, cidade:"Belo Horizonte"},
        {nome:"Carlos", idade:25, cidade:"Belo Horizonte"},
        {nome:"Carlos", idade:25, cidade:"Belo Horizonte"}

        return(
        <main className={styles.body}>
            <h3>Usuários Cadastrados:</h3>
            <div className={styles.cardContainer}>  
                {
                    usuarios.map((usuario)=>(
                        <Card
                            nome={usuario.nome}
                }