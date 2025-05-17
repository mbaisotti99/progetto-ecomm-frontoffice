import { capitalize } from "../../App"

const DetailCard = ({ prod }) => {

    return (
        <div className="card text-center p-1">
            <div className="w-100 text-center">
                <img src={import.meta.env.VITE_API_URL + "storage/prods/" + prod.img} alt={prod.nome} style={{ maxHeight: "600px", maxWidth: "600px" }} />
            </div>
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
                {prod.descrizione}
            </p>
            <p className="card-text">
                Taglie disponibili: <br />
                <b>
                    {prod.taglie.join(" - ")}   
                </b>
            </p>
            <p className="card-text">
                {prod.average_rating.toFixed(2)}
                <i className="bi-star-fill ms-1" style={{ color: "gold" }}></i>
            </p>
        </div>
    )
}


export default DetailCard