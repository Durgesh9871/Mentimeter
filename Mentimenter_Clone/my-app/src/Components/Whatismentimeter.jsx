import {Text , Center} from "@chakra-ui/react"
export default function WhatIsMentimeter(prop){
    const { alt, img , heading , para} = prop 
    return (
        <div>
           <img src={img} alt={alt} 
           width="100%"/>
       
          <Text fontSize='22px' fontWeight="600" lineHeight="40px" mt={3}>{heading}</Text>
          
          <Text fontSize='16px' fontWeight="600" lineHeight="20px">{para}</Text>  
          
        </div>
           
    )
}