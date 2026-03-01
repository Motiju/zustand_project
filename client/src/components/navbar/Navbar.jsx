import { useNavigate } from "react-router-dom"

function Navbar() {
    const navigate = useNavigate()

    function goToHomeGage() {
        navigate("/")
    }

    function goToCartPage() {
        navigate("/cart")
    }

    return (
        <div>
            <p>ZUSTAND DEMO</p>
            <h3>Starter Store</h3>
            <button onClick={goToHomeGage}>Shop</button>
            <button onClick={goToCartPage}>Cart</button>
        </div>
    )
}

export default Navbar