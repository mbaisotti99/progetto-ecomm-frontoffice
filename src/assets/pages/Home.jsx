import axios from "axios"
import { useEffect, useState } from "react"
import ProdCard from "../components/ProdCard"

const Home = () => {

    const [prods, setProds] = useState([])

    useEffect(() =>{
        axios.get(import.meta.env.VITE_API_URL + "api/prods/best")
        .then((resp) =>{                        
            setProds(Object.values(resp.data.data))
        })
    },[])

    return (
        <div className="container">
            <h1 className="text-center my-5">I Nostri Prodotti Migliori!</h1>

            <div className="row">
                {
                    prods ? prods.map((prod, i) =>{
                        return(
                            <div className="col-4" key={i}>
                                <ProdCard 
                                prod = {prod}
                                />
                            </div>
                        )
                    }) 
                    :
                    <h2>Caricamento...</h2> 
                }
            </div>
        </div>
    )
}

export default Home