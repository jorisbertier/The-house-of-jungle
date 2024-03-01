import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'
// import CareScale from './CareScale'
import PlantItem from './PlantItem'
import Categories from './Categories'

// const plantList = [
//     'monstera',
//     'ficus lyrata',
//     'pothos argenté',
//     'yucca',
//     'palmier'
// ]

// function ShoppingList() {
//     return (
//         <ul>
//             {plantList.map((plant, index) => (
//                 <li key={`${plant}-${index}`}>{ plant }</li>
//             ))}
//         </ul>
//     )
// }


function ShoppingList({ cart, updateCart }) {
	// const plantListCategories = plantList.map(plants => plants.category)
	const plantListCategories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function handleClick(e) {
		alert(e)
	}

	function addToCart(name, price) {
		console.log(...cart)
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}
	


	const test = 'test';
	return <div className='lmj-shopping-list'>
				<button onClick={handleClick}>{test}</button>
				{/* <ul>
					{plantListCategories.map((category, index) => (<li key={`${category}-${index}`}>{category}</li>))}
				</ul> */}
				<Categories />
				{/* <ul>
					{plantList.map((plant, index) =>(
						<li key={`${plant.name}-${index}`} className='lmj-plant-item' onClick={() => handleClick(plant.name)}>
							
							{plant.name} {plant.isBestSale ? <span>🔥</span>: null }
							{plant.name} {plant.isBestSale && <span>🔥</span>}
							{plant.isSpecialOffer && <span className='lmj-sales'>En soldes</span>}
							<CareScale careType='water' scaleValue={plant.water} />
							<CareScale careType='light' scaleValue={plant.light} />
						</li>
					))}
				</ul> */}
				<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price }) => (
					<div key={id}>
						<PlantItem
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
						/>
						<button onClick={() => addToCart(name, price)}>Ajouter</button>
					</div>
				))}
			</ul>
				
			</div>

}

export default ShoppingList