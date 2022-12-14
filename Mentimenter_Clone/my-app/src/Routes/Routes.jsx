import { Route , Routes , Link  } from "react-router-dom";
import HomeMentimeter from "../HomePage/HomeMentimeter";
// import HomeMentimeter from "../HomePage/HomeMentimeter";
// import HomeLogo from "../HomePage/HomoLogo";
import LinkProvider from "./Link"
import Login from "../LoginComponent/Login";
import SignUp from "../LoginComponent/SignUp";
import Error from "../HomePage/Error"

export default function RouteProvider(){
  return(
    <>
        
   {/* < LinkProvider /> */}
       
       <Routes>
        <Route path="/" element={<HomeMentimeter/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
        <Route path="/*" element={<Error />}></Route>
     
       </Routes>
    </>
  )
}