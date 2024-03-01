import {plantList} from '../datas/plantList'

function Categories({ setActiveCategory, categories, activeCategory }) {
    const plantListCategories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
    
    console.log(plantListCategories)

    return             <div>
    <label for="pet-select">Selectionner une categorie:</label>

    <select name="pets" id="pet-select"
    				value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className='lmj-categories-select'
    >
      <option value="">--Choisir une categorie--</option>
        {plantListCategories.map((category, index) => (<option key={`${category}${index}`} value={category}>{category}</option>))}
    </select>
    <button onClick={(e) => setActiveCategory()}>Reinitialiser</button>
    </div>
    // <ul>
    //             {plantListCategories.map((category, index) => (<li key={`${category}-${index}`}>{category}</li>))}
    //         </ul>


}

export default Categories