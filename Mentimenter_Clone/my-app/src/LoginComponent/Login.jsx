import { FormControl ,FormLabel ,Input ,FormHelperText,FormErrorMessage,Text ,Box, Button,Flex} from "@chakra-ui/react";
import HomeLogo from "../HomePage/HomoLogo";
import { useState } from "react";
import "./Login.css"
import {useContext , useEffect} from "react"
import { AuthContext } from "../Routes/AuthContext";
import {Link } from "react-router-dom"



export default function Login(){
    const [input, setInput] = useState({
        email:"" ,
        password:"" ,
    })
    const {toggle} = useContext(AuthContext)
   
    const isErrorEmail = input.email === ""
    const isErrorPass = input.password === ""

     
    const handleInputChange = (e) => {
        const {name , value } = e.target 
        setInput({
            ...input ,
            [name]:value ,
        })
    }
    useEffect(()=>{
        toggle(false)
    },[])
   

    return (
        <div id="mainLoginPage" style={{display:"flex" , alignItems:"center" , flexDirection:"column"}}>

        {/* HOME LOGO  */}
          <Box mt={1} mb={3} >                                      
           
           < HomeLogo  />
           </Box> 
         

        
            {/* Text  */}
           <Text fontSize={{base: "30px" ,"2xl":"48px" ,xl:"48px" , lg:"48px",md:"48px" ,sm:"48px"}}   as='b' variant='with-shadow'>Welcome back!</Text>
           <Text fontSize='20px' color='#9296a3' mt={2} mb={6}>Log in to your Mentimeter account</Text>
           
            <Box bg="#4267b2" color="white"  borderRadius='sm' p={3}  h={10}  w={{base: "300px" ,"2xl":"350px" ,xl:"350px" , lg:"350px",md:"350px" ,sm:"350px"}}  display="flex" justifyContent="center" id="logInFacebook">
                <Text as='b' m={-1} fontSize='18px'>Log in with Facebook</Text>
            </Box>
            <Box   borderRadius='sm' px={4} h={10}  w={{base: "300px" ,"2xl":"350px" ,xl:"350px" , lg:"350px",md:"350px" ,sm:"350px"}}  textAlign="center" border='1px' borderColor='#9296a3' mt={3} id="logInGoogle">
                  <Text  m={1.5} fontSize='18px' >Log in with Google</Text>
            </Box>

            <Text  color='#9296a3' fontSize='sm' mt={4} mb={4}>or using email</Text>

                                                {/* LOG IN START  */}
                                                {/* sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em', */}
            <FormControl isInvalid={isErrorEmail}  w={{base: "300px" ,"2xl":"350px" ,xl:"350px" , lg:"350px",md:"350px" ,sm:"350px"}}  >
      <FormLabel>Your Email Adress</FormLabel>
      <Input
        type='email'
        name ="email"
        value={input.email}
        onChange={handleInputChange}
         />
      {!isErrorEmail  ? (
        <FormHelperText>
          
        </FormHelperText>
      ) : (
        <FormErrorMessage>Please fill in this field!</FormErrorMessage>
      )}
    </FormControl> 

      {/*  PASSWORD START  */}
    <FormControl isInvalid={isErrorPass}  w={{base: "300px" ,"2xl":"350px" ,xl:"350px" , lg:"350px",md:"350px" ,sm:"350px"}} mt={3} mb={6}>
      <FormLabel>Your Password</FormLabel>
      <Input
        type='password'
        name="password"
        value={input.password}
        onChange={handleInputChange}
      />
      {!isErrorPass ? (
        <FormHelperText>
          
        </FormHelperText>
      ) : (
        <FormErrorMessage>Please fill in this field!</FormErrorMessage>
      )}
    </FormControl>

    {/* BUTTON  */}

    <Button w={{base: "300px" ,"2xl":"350px" ,xl:"350px" , lg:"350px",md:"350px" ,sm:"350px"}} bg='#196cff' color="white" ><Text color='white' fontSize='lg'>Log in</Text></Button>

    {/* FORGOT PASSWORD , LOG IN WITH SSO */}
        <Flex display="flex" justify="space-around" w={{base: "300px" ,"2xl":"350px" ,xl:"350px" , lg:"350px",md:"350px" ,sm:"350px"}}  >
            <Text fontSize='md' color='#196cff'>Forgot Password?</Text>
            <Text fontSize='md' color='#196cff'>Log in with SSO</Text>
        </Flex>

{/*    SIGN UP  */}
        <Flex display="flex" justify="center" w={{base: "300px" ,"2xl":"350px" ,xl:"350px" , lg:"350px",md:"350px" ,sm:"350px"}} mt={6} mb={12}>
            <Text fontSize='xl'  >New to Mentimeter?</Text>
        <Link to="/SignUp">   <Text fontSize='xl' color='#196cff' as='b' ml={2}>Sign Up</Text> </Link>
        </Flex>


      
       
          
        </div>
    )
}
