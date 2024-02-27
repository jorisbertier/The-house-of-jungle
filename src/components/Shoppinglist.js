import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'
import CareScale from './CareScale'

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


	return <div>

				<ul>
					{plantListCategories.map((category, index) => (<li key={`${category}-${index}`}>{category}</li>))}
				</ul>
				<ul>
					{plantList.map((plant, index) =>(
						<li key={`${plant.name}-${index}`} className='lmj-plant-item'>
							{/* {plant.name} {plant.isBestSale ? <span>🔥</span>: null } */}
							{plant.name} {plant.isBestSale && <span>🔥</span>}
							{plant.isSpecialOffer && <span className='lmj-sales'>En soldes</span>}
							<CareScale careType='water' scaleValue={plant.water} />
							<CareScale careType='light' scaleValue={plant.light} />
							
						</li>
					))}
				</ul>
				{/* <ul>
					{plantList.map((plant, index) =>(
						<li key={`${plant}-${index}`}>{plant.offerMoment ? <span>Oui</span>: <span>Non</span>}</li>
					))}
				</ul> */}
			</div>

}

export default ShoppingList