import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// jsx element
const heading=(<div><h1>hello</h1><h2>world</h2></div>);
console.log(heading);

// functional component
function Header(){
  return((<div className='bg-black text-white'><h2>This is my Header.</h2>{heading}</div>)
  );
} 
console.log(Header);
console.log(Header());


//body component
function Body(){
  const number=25;
  return(<div className='bg-red-500 text-amber-300'><h3>This is my body {number}.</h3> {heading} <Header/></div>)
}
//footer component
const Footer=()=>{
  return(<div className='bg-blue-600 text-cyan-200'> <h4>This is my Footer.</h4></div>);
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* {heading} */}
    {/* {Header()} */}
    {/* <Header></Header> */}
    <Header/> 
    <Body/>
    <Footer/>
  </StrictMode>,
)
