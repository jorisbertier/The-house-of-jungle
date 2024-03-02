import Banner from './Banner'
import Cart from './Cart'
import logo from '../assets/logo.png'
import Article from './Article'
import QuestionForm from './QuestionForm';
import Footer from './Footer';
import Layout from './Layout';
import ShoppingList from './ShoppingList'
import { useState, useEffect } from 'react';

// function App() {
//   const [cart, updateCart] = useState([])
//   return (<>
//             <Banner>
//                   <img src={logo} alt='La maison jungle' className='lmj-logo' />
//                   <h1 className='lmj-title'>La maison jungle</h1>
//             </Banner>

//             <Cart cart={cart} updateCart={updateCart} />
//             <Shoppinglist />
            
//             <Footer />
//   </>)
  function App() {
    // const [cart, updateCart] = useState([])

    const savedCart = localStorage.getItem('cart')

    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
    
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
      <div>
        <Banner>
          <img src={logo} alt='La maison jungle' className='lmj-logo' />
          <h1 className='lmj-title'>La maison jungle</h1>
        </Banner>
        <Layout>
          <h1>Les plantes sont nos amies</h1>
          <h2>Monstera</h2>
          <p>Facile à entretenir, le monstera saura embellir votre intérieur ✨</p>
        </Layout>
        <Article isLoading disable title="Earth"/>
        <Article  disable title="Moon"/>
          <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
        </div>
        <QuestionForm />
        <Footer />
      </div>
    )
  }


export default App;
