import { useState, useEffect } from 'react';
// import { ShopContext } from "../../context/shop-context.jsx";

export default function Shop() {
    async function fakeStoreAPI() {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setItems(json))
    }

    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    // const { addToCart } = useContext(ShopContext)

    useEffect(() => {
        setIsLoading(true)
        fakeStoreAPI()
        setIsLoading(false)
    }, [])

    const ListOfItemTitles = () => {
        return (
            <>
                <br />
                {isLoading ? <p>Loading...</p> : null}
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {items.map(function(data) {
                                return (
                                    <div className="col d-flex" key={data.id}>
                                        <div className="card h-100">
                                            <img src={data.image} className="card-img-top" height="400" alt="..." />
                                            <div className="card-body d-flex flex-column">
                                                <h5 className="card-title">{data.title}</h5>
                                                <p><b>${data.price}</b></p>
                                                {/* <p><em>{data.description}</em></p> */}
                                                <button type="button" className="btn btn-outline-secondary mt-auto mx-auto">Add to cart 🛒</button>
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
            <br />
        </>
    )
}