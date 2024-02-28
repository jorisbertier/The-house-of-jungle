// const QuestionForm = ()=> {

//     function handleSubmit(e) {
//         e.preventDefault()
//         alert(e.target['my_input'].value)
//     }

//     return <div>
//                 <form onSubmit={handleSubmit}>
//                     <input type='text' name='my_input' defaultValue='Tapez votre texte' />
//                     <button type='submit'>Entrer</button>
//                 </form>
//             </div>
// }
import { useState } from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')

    const isInputError = inputValue.includes('a');


    function checkValue(value) {
        if (!value.includes('f')) {
            setInputValue(value)
        }
    }

    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
            />
             {isInputError && <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>}
            <button onClick={() => alert(inputValue)}>Alertez moi</button>
        </div>
    )
}

export default QuestionForm