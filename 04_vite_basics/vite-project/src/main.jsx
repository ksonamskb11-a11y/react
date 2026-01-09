import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"

// JSX ELEMENT
const heading = (
    <div style={{backgroundColor:"red"}}>
       <h1 >hello</h1>
       <h2>world</h2>
    </div>
)
console.log(heading);

// HEADER COMPONENT
function Header(){
  return (
  <div className='bg-green-400'>hello from a functional component </div>
)
}

// BODY COMPONENT
function Body(){
  const number = 5
  return (
      <div className=''>
         <h2>this is our body  {number}  </h2>
         <Header/>
      </div>
  )
}

// FOOTER COMPONENT
const Footer = ()=> {
  return(
     <div className='bg-red-200 text-black'>
        <h3>this is a footer component</h3>
        {heading}
     </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* {heading} */}
     {/* {Header()} */}
     <Header/> 
     <Body/>
     <Footer/>
     {/* <Header> </Header> */}
  </StrictMode>
)