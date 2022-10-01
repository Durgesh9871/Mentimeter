import { Text, Center ,CircularProgress} from "@chakra-ui/react"

export default function Error(){
    let style ={
       
       color:"#68d391" ,
        width:"60%"  ,
        margin:"200px auto" ,
        textAlign :"center" ,
    }
    return (
        <div style={style}>
            <CircularProgress isIndeterminate color='green.300' />
            <Center>
                <Text fontSize="55px" fontWeight="bold">Something Went Wrong Please Try Again Later</Text>


                </Center>
         
        </div>
        
    )
}