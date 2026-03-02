import { useEffect, useState } from "react"
import { getProducts } from "../../store/use_products_store"

function Home() {

    const [data, setData] = useState([])

    useEffect(() => {
        async function loadData(){
            const allData = await getProducts()
            setData(allData)
        }
        loadData()
    }, [])

    function addToCart(id){
        console.log(id);
    }

    return (
        <div>
            <h6>Exercise idea</h6>
            <h2>Use global state to keep the cart in sync everywhere</h2>
            <p>The products come from a JSON file, and both the shop page and the cart page read the same <br />
                Zustand store.</p>
            {data.map((item, index)=>{
                return (
                    <div key={index}>
                        <h1>{item.image}</h1>
                        <p>{item.category}</p>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <h5>{item.price}$</h5>
                        <button onClick={() => addToCart(index)}>Add to cart</button>
                    </div>
                    
                )
            })}
        </div>
    )
}

export default Home