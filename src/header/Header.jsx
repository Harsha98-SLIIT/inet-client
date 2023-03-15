import "./header.css"
import bg1 from "../image/bg1.jpg"; 

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
    <span  className="headerTitleSm"> WELCOME TO MBSL INSURANCE</span>
    <span className="headerTitleLg" >i-net</span>
      </div>
      <img className="headerimage"
        src={bg1} alt=""/>

<img className="headerimage2"
        src={bg1} alt=""/>
    </div>
  )
}
