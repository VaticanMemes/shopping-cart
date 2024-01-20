import { useState, useEffect } from 'react';

export default function Shop() {
    function fakeStoreAPI() {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setItems(json))
    }

    const [items, setItems] = useState([])

    useEffect(() => {
        fakeStoreAPI()
    }, [])

    const ListOfItemTitles = () => {
        return (
            <>
                <br />
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {items.map(function(data) {
                                return (
                                    <div className="col" key={data.id}>
                                        <div className="card">
                                            <img src={data.image} className="card-img-top" height="500" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{data.title}</h5>
                                                <p><b>{data.price}</b></p>
                                                <p><em>{data.description}</em></p>
                                                <button type="button" className="btn btn-outline-secondary">Add to cart 🛒</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                </div>
            </>
        )
    }

    return (
        <>
            <ListOfItemTitles />
        </>
    )
}