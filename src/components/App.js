import Banner from './Banner'
import Cart from './Cart'
import Shoppinglist from './Shoppinglist';
import logo from '../assets/logo.png'
import Article from './Article'

function App() {
  return (<>
  <Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
	</Banner>
  <Article title="Earth"/>
  <Article title="Moon"/>
  <Cart />
  <Shoppinglist />
  </>)
}

export default App;
