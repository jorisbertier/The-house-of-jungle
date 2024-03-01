import '../styles/Cart.css'
import { useState, useEffect } from 'react'

function Cart({cart, updateCart, activeCategory, setActiveCategory}) {
    
	const [isOpen, setIsOpen] = useState(false)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	// const [clearBasket, setClearBasket] = useState(0)
    useEffect(() => {
			document.title = `LMJ: ${total}€ d'achats`
    }, [total])
    return  isOpen ? (
        <div className='lmj-cart'>
			<button onClick={() => setIsOpen(false)} className='lmj-cart-toggle-button'>Fermer</button>
            <h2>Panier</h2>
			{cart.map(({name, price, amount}, index) => (<div key={`${name}-${index}`}>{name} {price}€ * {amount}</div>))}
            <h3>Total {total}€</h3>
			<button onClick={() => updateCart([])}>Vider le panier</button>
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