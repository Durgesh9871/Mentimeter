import HomeLogo from "./HomoLogo";
import { useContext , useEffect} from "react";
import { AuthContext } from "../Routes/AuthContext";


export default function HomeMentimeter(){
    const {toggle} = useContext(AuthContext)

    useEffect(()=>{
        toggle(true)
    },[])
    return(
        <div >
           <HomeLogo /> 
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatem, optio natus rem tenetur non deserunt sed itaque maxime perferendis corrupti provident odio perspiciatis dolores autem, temporibus dolor. Corporis, corrupti!</p>
             

         
            </div>
        
    )
}