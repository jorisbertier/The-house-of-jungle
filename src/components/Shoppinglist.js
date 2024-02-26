import {plantList} from '../datas/plantList'


function ShoppingList() {
	console.log(plantList)

}

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

// function ShoppingList() {
//     const categories = plantList.reduce(
// 		(acc, plant) =>
// 			acc.includes(plant.category) ? acc : acc.concat(plant.category),
// 		[]
// 	)

// 	return (
// 		<div>
// 			<ul>
// 				{categories.map((cat) => (
// 					<li key={cat}>{cat}</li>
// 				))}
// 			</ul>
// 			<ul>
// 				{plantList.map((plant) => (
// 					<li key={plant.id}>
//                         {plant.isBestSale ? <span>{plant.name}🔥</span> : <span>{plant.name}</span>}
//                     </li>
// 				))}
// 			</ul>
// 		</div>
// 	)
// }
//comentsss
export default ShoppingList