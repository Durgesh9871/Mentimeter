import { Link } from "react-router-dom" ;

 

export default function LinkProvider(){
  

  
   
    return(
        <div>
       <Link to="/">home</Link>
      <br/>
      <br/>

      <Link to="/Login" >Login</Link>
      <br/>
      <br/>
      <Link to="/SignUp">SignUp</Link>
      <br/>
      <br/>
        </div>
    )
}