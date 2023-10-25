import './style/App.css'
import {useState} from "react"
import menu from "../src/assets/Group 2.png"
import closeMenu from "../src/assets/Group 3.png"

function App() {
  const [count ,setCount] = useState(0)
  const [name ,setName] = useState('egor')
  const [flag ,setFlag] = useState(true)

  function nextCount() {
    setCount(count + 1)

  }
  function render(){
    setFlag(!flag)
  }
  function editName() {
    setName('kirill')
  }
  function getResult(){
    console.log(count + " " + name)

  }

  return (
    <>
      {flag && <button className='burgB' onClick={render}><img className='burg' src={menu} alt="" /></button>}
      <div className="vv">
        <div className="all">
        <div className="count"><h1>{count}</h1></div>
        <div className="name"><h2>{name}</h2></div>
        </div>
        
      </div>
      {!flag && <div className="Burger">
        <button className='burgC' onClick={render}><img className='burgC' src={closeMenu} alt="" /></button>
        <div className='InBurg'>
          <button className='BurgerB' onClick={nextCount}>Edit count</button>
          <button className='BurgerB' onClick={getResult}>Get result</button>
          <button className='BurgerB' onClick={editName}>Edit name</button>
        </div>
          
      </div>}
      
    </>
  )
}

export default App
