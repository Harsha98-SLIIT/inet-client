import "./navbar.css";
import logo from "../image/logo.png";


export default function NavBar() {
  return (
    <div className="top">

<img className="imglogo"
        src={logo} alt=""/>
        {/* <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-whatsapp"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>

        </div> */}
        <div className="topCenter">

          <ul className="topList">

              <li className="topListItem"> HOME</li>
              <li className="topListItem"> ABOUT</li>
              <li className="topListItem"> CONTACT</li>
              <li className="topListItem"> CAREERS</li>
              <li className="topListItem"> FEEDBACK</li>
          </ul>
        </div>
        <div className="topRight">
         <div className="search">
         <form className="w-50 text-end">
        <input type="text" className="border" placeholder="Search..."/>

       </form>
         </div>
      
        <i className="topSeachIcon fa-solid fa-magnifying-glass"></i>
        </div>
        
        
    </div> 
  
  
  
  )
  
}
