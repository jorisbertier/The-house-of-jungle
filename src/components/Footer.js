import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

    const valueProhiben = inputValue.includes('@');

    function checkValue(value) {
        // if(!value.includes('a')) {
            setInputValue(value)
        // }
    }

    function blur(e) {
        e.stopPropagation();
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input type="text" value={inputValue} onChange={(e) => checkValue(e.target.value)}></input>
            {valueProhiben && <span>La valeur @ est interdite</span>}
            <button onClick={(e) => alert(inputValue)}>Envoyer</button>
		</footer>
	)
}

export default Footer