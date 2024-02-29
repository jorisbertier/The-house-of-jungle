import '../styles/Cart.css'
import { useState } from 'react'

function Cart() {
    const monsteraPrice = 8
    const [cart, updateCart] = useState(0)
	const [isOpen, setIsOpen] = useState(false)
	// const [clearBasket, setClearBasket] = useState(0)

    return  isOpen ? (
        <div className='lmj-cart'>
			<button onClick={() => setIsOpen(false)} className='lmj-cart-toggle-button'>Fermer</button>
            <h2>Panier</h2>
            <div>
                Monstera : {monsteraPrice}€
                <button onClick={() => updateCart(cart + 1)}>
                    Ajouter{cart}
                </button>
            </div>
            <h3>Total : {monsteraPrice * cart}- {cart === 1 ? <span>Produit</span> : <span>Produits</span>}€</h3>
			<button onClick={() => updateCart(0)}>Vider le panier</button>
        </div>
    ) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

// function Cart() {
//     const monsteraPrice = 8
// 	const ivyPrice = 10
// 	const flowerPrice = 15
// 	return (
// 		<div className="lmj-cart">
// 			<h2>Panier</h2>
// 			<ul>
// 				<li>Monstera : {monsteraPrice}€</li>
// 				<li>Lierre : {ivyPrice}€</li>
// 				<li>Fleurs : {flowerPrice}€</li>
// 			</ul>
// 			Total : {monsteraPrice + ivyPrice + flowerPrice}€
// 		</div>
// 	)
// }
// add cards
export default Cart