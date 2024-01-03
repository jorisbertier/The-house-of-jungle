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

import { plantList } from '../datas/plantList'

const results = [];

function ShoppingList() {
	return <ul>{plantList.forEach((plant, index) => (
        results.push(<li key={`${plant}-${index}`}>{plant}</li>)
    )
    )
    }
        </ul>
}

export default ShoppingList