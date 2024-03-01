import {plantList} from '../datas/plantList'

function Categories() {
    const plantListCategories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
    
    console.log(plantListCategories)

    return             <div>
    <label for="pet-select">Selectionner une category:</label>

    <select name="pets" id="pet-select">
      <option value="">--Please choose an option--</option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
    </select>
    </div>
    // <ul>
    //             {plantListCategories.map((category, index) => (<li key={`${category}-${index}`}>{category}</li>))}
    //         </ul>


}

export default Categories