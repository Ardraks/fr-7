import React from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer';
import Navbar from '../Navbar';
const Header = () => {
 const navigate=useNavigate();
 
 const savedata =(event)=>{
    event.preventDefault();
    navigate("/Login")
 }
  return (
    <div className='header'>
      <Navbar/>
        <div className='headerTitles'>
        {/* <span className='headerTitlesSm'>React&node</span> */}
            <span className='headerTitlesLg' style={{color:'#FFFFFF'}}>
              Publish your passions, your way</span>
            <span className='headerTitlesLg' style={{marginTop:'60px',fontSize:'24px', color:'#FFFFFF'}} >
              Create a unique and beautiful blog easily.</span>
            <button className='blogButton' onClick={savedata} ><b>Create Blog</b></button>
        </div>
       <img
       className='headerImg'
       src="https://static.vecteezy.com/system/resources/previews/018/752/867/non_2x/abstract-background-design-background-texture-design-with-abstract-style-creative-illustration-for-advertising-posters-business-cards-flyers-websites-banners-covers-landings-pages-etc-free-vector.jpg"
       alt='' style={{marginTop:'0px',height:'100%' }}/>
      <Footer/>
    </div>
  )
}

export default Header
