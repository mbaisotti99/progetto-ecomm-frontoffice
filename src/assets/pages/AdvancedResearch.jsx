import axios from "axios"
import { useEffect, useState } from "react"
import { capitalize } from "../../App"

const AdvancedResearch = () =>{
    
    const initialValues = {
        "nome" : "",
        "categoria" : "",
        "prezzo-min" : 0,
        "prezzo-max" : 500,
        "taglie" : [],
    }

    const [cats, setCats] = useState([])

    useEffect(() =>{
        axios.get(import.meta.env.VITE_API_URL + "api/cats")
        .then((resp) =>{
            setCats(resp.data.data)
        })
    },[])

    const onSubmit = () =>{

    }

    const onChange = () =>{

    }
    
    return(
        <div className="container cent">
            <h1 className="text-center my-5">
                Ricerca Avanzata:
            </h1>
            <form className="advRes row" action={onSubmit}>
                <div className="col-6">
                    <label htmlFor="nome" className="form-label">Nome:</label>
                    <input type="text" name="nome" className="form-control"/>
                </div>
                <div className="col-6">
                    <label htmlFor="categoria" className="form-label">Categoria:</label>
                    <select name="categoria" id="categoria" className="form-control">
                        {
                            cats.map((cat, i) =>{
                                return(
                                    <option value={cat} key={i}>{capitalize(cat)}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="col-6">
                    <label htmlFor="nome" className="form-label">Nome:</label>
                    <input type="text" name="nome" className="form-control"/>
                </div>
                <div className="col-6">
                    <label htmlFor="nome" className="form-label">Nome:</label>
                    <input type="text" name="nome" className="form-control"/>
                </div>
                <div className="col-6">
                    <label htmlFor="nome" className="form-label">Nome:</label>
                    <input type="text" name="nome" className="form-control"/>
                </div>
            </form>
        </div>
    )
}

export default AdvancedResearch