import { capitalize } from "../../App"

const ProdCard = ({ prod }) => {
    return (
        <div className="card mb-5 text-center" >
            <img src={import.meta.env.VITE_API_URL + "storage/prods/" + prod.img} alt={prod.nome} className="card-img-top" />
            <p className="card-title mb-3">
                <b>
                    {capitalize(prod.nome)}
                </b>
            </p>
            <p className="card-text">
                {capitalize(prod.categoria)}
            </p>
            <p className="card-text">
                <b>
                    {prod.prezzo}€
                </b>
            </p>
            <p className="card-text">
                {prod.average_rating.toFixed(2)}
                <i className="bi-star-fill ms-1" style={{color:"gold"}}></i>
            </p>
            <a href={"/prods/" + prod.id} className="btn btn-primary mt-2 fs-3">Dettagli</a>
        </div>
    )
}

export default ProdCard