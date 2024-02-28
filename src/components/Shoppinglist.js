import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'
import CareScale from './CareScale'
import PlantItem from './PlantItem'

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


function ShoppingList() {
	// const plantListCategories = plantList.map(plants => plants.category)
	const plantListCategories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function handleClick(e) {
		alert(e)
	}


	const test = 'test';
	return <div>
				<button onClick={handleClick}>{test}</button>
				<ul>
					{plantListCategories.map((category, index) => (<li key={`${category}-${index}`}>{category}</li>))}
				</ul>
				<ul>
					{plantList.map((plant, index) =>(
						<li key={`${plant.name}-${index}`} className='lmj-plant-item' onClick={() => handleClick(plant.name)}>
							{/* {plant.name} {plant.isBestSale ? <span>🔥</span>: null } */}
							{plant.name} {plant.isBestSale && <span>🔥</span>}
							{plant.isSpecialOffer && <span className='lmj-sales'>En soldes</span>}
							<CareScale careType='water' scaleValue={plant.water} />
							<CareScale careType='light' scaleValue={plant.light} />
						</li>
					))}
				</ul>
				<ul className='lmj-plant-list'>
					{plantList.map(({id, name, cover, water, light}) =>(
						<PlantItem id={id} name={name} water={water}/>
					))}
				</ul>
				
			</div>

}

export default ShoppingList