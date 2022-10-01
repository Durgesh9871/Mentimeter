import "./Nav.css"
import { Link } from "react-router-dom"
export default function MyButton({text}){
       
    return (
        <>
       <Link to="/*"> <button id="MyButton">{text}</button> </Link>
        </>
    )
}