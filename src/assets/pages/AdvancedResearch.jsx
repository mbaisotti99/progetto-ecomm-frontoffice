import axios from "axios"
import { useEffect, useState } from "react"
import { capitalize } from "../../App"

const AdvancedResearch = () => {

    // va fatto in modo che il prezzo minimo non possa salire sopra il massimo e vice versa

    const [results, setResults] = useState([])

    const [errMsg, setErrMsg] = useState("")

    const [err, setErr] = useState(false)

    const initialValues = {
        "nome": "",
        "categoria": [],
        "prezzoMin": 0,
        "prezzoMax": 500,
        "isTagliaFiltered": false,
        "taglie": [],
    }

    const taglieArr = ["XS", "S", "M", "L", "XL", "XXL"]

    const [searchVals, setSearchVals] = useState({
        ...initialValues
    })

    const [cats, setCats] = useState([])

    const [isTagliaFiltered, setTagliaFiltered] = useState(false)


    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + "api/cats")
            .then((resp) => {
                setCats(resp.data.data)
                setSearchVals((prev) => ({
                    ...prev,
                    "categoria": resp.data.data,
                }));
            })
    }, [])

    const onSubmit = (e) => {
        setErr(false)

        e.preventDefault()

        setErrMsg("Caricamento...")

        if (searchVals.taglie = []) {
            setSearchVals((prev) => ({
                ...prev,
                "isTagliaFiltered": false,
            }));
        }

        axios.post(import.meta.env.VITE_API_URL + "api/advancedSearch", searchVals)
        .then((resp) =>{
            const result = resp.data
            if (result.success) {
                setResults(result.data)
                setErrMsg( result.data.length == 1 ? "Trovato " : "Trovati " + resp.data.data.length + result.data.length == 1 ? " risultato" : " risultati")
            } else {
                setErrMsg(result.message)
                setErr(true)
            }

        })

    }

    const setTagliaFilter = (e) => {
        const { checked } = e.target

        if (checked) {
            setTagliaFiltered(true)
            setSearchVals((prev) => ({
                ...prev,
                "isTagliaFiltered": true,
            }));
        } else {
            setTagliaFiltered(false)
            setSearchVals((prev) => ({
                ...prev,
                "isTagliaFiltered": false,
            }));
        }


    }


    const onChange = (e) => {
        const { name, value, checked } = e.target;



        if (name == "taglie") {
            setSearchVals((prev) => {
                const updatedTaglie =
                    checked ? [...prev.taglie, value]
                        : prev.taglie.filter((taglia) => taglia !== value)

                return {
                    ...prev,
                    taglie: updatedTaglie
                }
            })
        } else if (name == "categoria") {
            setSearchVals((prev) => ({
                ...prev,
                "categoria": value == cats ? cats : [value],
            }));
        } else {
            setSearchVals((prev) => ({
                ...prev,
                [name]: value,
            }));
        }


        console.log(searchVals);

    }

    return (
        <div className="container cent">
            <h1 className="text-center my-5">
                Ricerca Avanzata:
            </h1>
            <form className="advRes row mb-5" onSubmit={onSubmit}>
                <div className="col-6">
                    <label htmlFor="nome" className="form-label">Nome:</label>
                    <input onChange={onChange} type="text" name="nome" className="form-control" value={searchVals.nome} />
                </div>
                <div className="col-6">
                    <label htmlFor="categoria" className="form-label">Categoria:</label>
                    <select onChange={onChange} name="categoria" id="categoria" className="form-control">
                        <option value={cats} selected>Qualunque</option>
                        {
                            cats.map((cat, i) => {
                                return (
                                    <option value={cat} key={i}>{capitalize(cat)}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="col-6">
                    <label htmlFor="prezzoMin" className="form-label">Prezzo minimo:</label>
                    <div className="input-group">
                        <input onChange={onChange} type="number" name="prezzoMin" min={0} max={500} className="form-control" value={searchVals.prezzoMin} />
                        <span className="input-group-text">€</span>
                    </div>
                </div>
                <div className="col-6">
                    <label htmlFor="prezzoMax" className="form-label">Prezzo massimo:</label>
                    <div className="input-group">
                        <input onChange={onChange} type="number" name="prezzoMax" min={1} max={500} value={searchVals.prezzoMax} className="form-control" />
                        <span className="input-group-text">€</span>
                    </div>
                </div>
                <div className="col-6">
                    {/* <p className="mb-0 mt-2">Taglie Disponibili: </p><br /> */}
                    <div className="my-3">
                        <label htmlFor="tagliaFilter">Filtra per taglie</label>
                        <input id="tagliaFilter" className="ms-3" type="checkbox" onChange={setTagliaFilter} />
                    </div>
                    <div className="row w-50">
                        {
                            isTagliaFiltered ?
                                taglieArr.map((taglia, i) => {
                                    return (
                                        <div className="col-4 mb-3">
                                            <input onChange={onChange} type="checkbox" name="taglie" value={taglia} id={taglia + "box"} />
                                            <label htmlFor={taglia + "box"}>{taglia}</label>
                                        </div>
                                    )
                                })
                                :
                                ""
                        }
                    </div>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <button className="btn btn-primary" style={{ height: "50px" }}>
                        Cerca
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AdvancedResearch