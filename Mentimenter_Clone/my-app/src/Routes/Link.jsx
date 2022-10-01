import { Link } from "react-router-dom" ;
import HomeLogo from "../HomePage/HomoLogo";
import { Button ,Text  } from "@chakra-ui/react";
import "../Components/Nav.css"
 

export default function LinkProvider(){
    return(
    //     <div>
    //    <Link to="/">home</Link>
    //   <br/>
    //   <br/>

    //   <Link to="/Login" >Login</Link>
    //   <br/>
    //   <br/>
    //   <Link to="/SignUp">SignUp</Link>
    //   <br/>
    //   <br/>
    //     </div>


    //   -------------------------------------NAV BAR IS HERE ----------------------


    <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  <div id="mainNavBar">
  
    <div id="mainHomeLogo"> <Link> <HomeLogo/></Link>  </div>
    <div id="mainNavItems">
        <div id="Features" className="navHover">Features <i className="fas fa-caret-down" ></i> 
          <div className="FEATURES_DROP_DOWN" id="FEATURE_DROP_DOWN_ID">
            <div><Link to="/*">Overview</Link></div>
            <div><Link to="/*">Live Polling</Link></div>
            <div><Link to="/*">Word Cloud</Link></div>
            <div><Link to="/*">Quiz</Link></div>
            <div><Link to="/*">Q & A</Link></div>
            <div><Link to="/*">Survey</Link></div>
            <div><Link to="/*">Presentation</Link></div>
          </div>

        </div>
        <div id="Solutions"  className="navHover">Solutions <i className="fas fa-caret-down"></i> 
        <div className="Solutions_DROP_DOWN" id="Solutions_DROP_DOWN_ID">
            <div><Link to="/*">Overview</Link></div>
            <div><Link to="/*">Speakers</Link></div>
            <div><Link to="/*">Business </Link></div>
            <div><Link to="/*">Education</Link></div>
          </div>
           

        </div>
        <div id="Resources"  className="navHover">Resources <i className="fas fa-caret-down"></i>
        <div className="Resources_DROP_DOWN" id="Resources_DROP_DOWN_ID">
            <div><Link to="/*">How To</Link></div>
            <div><Link to="/*">MentiAcademy</Link></div>
            <div><Link to="/*">Templates </Link></div>
            <div><Link to="/*">Webinars</Link></div>
            <div><Link to="/*">Blog</Link></div>
            <div><Link to="/*">Integration</Link></div>
            <div><Link to="/*">Help Center</Link></div>
          </div>
           
        </div>
        <div id="Pricing"  className="navHover">Pricing </div>
        <div id="Enterprise"  className="navHover">Enterprise </div>
    </div>
    <div id="mainLogSign">
        <Text  className="navHover"><Link to="/Login"> Log in</Link></Text>
       
        <Button colorScheme='messenger' mt="-1" p={4} borderRadius="4px">
            <Link to="/SignUp">Sign up</Link></Button>
       
    </div>
  </div>
  </div>




    )
  

  
   
}