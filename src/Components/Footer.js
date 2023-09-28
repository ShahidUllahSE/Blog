import React from 'react'
import { Link } from 'react-router-dom'

function Footer(props) {
    let myStyle={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'? '#272c3e':'white'
    }
  return (
    <div style={myStyle}>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"style={myStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">Tailblocks</span>
      </a>
      <p className="mt-2 text-sm text-gray-500"style={myStyle}>Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"style={myStyle}>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4"style={myStyle}>
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"style={myStyle}>CATEGORIES</h2>
        <nav className=" mb-10"style={myStyle}>
        {/* <div className="flex space-x-5">
  <Link className="text-gray-600 hover:text-gray-800 cursor-pointer"  to='/' style={myStyle}>Home</Link>
  <Link className="text-gray-600 hover:text-gray-800"  to='/Authors' style={myStyle}>Authors</Link>
  <Link  className="text-gray-600 hover:text-gray-800" to='/About' style={myStyle}>About</Link>
</div>  error part*/}

          
          
          
        
        
        </nav>
      </div>
     
     
    </div>
  </div>
  <div className="bg-gray-100">

  </div>
</footer>
    </div>
  )
}

export default Footer
