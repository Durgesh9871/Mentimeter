import {FormControl,FormLabel,Input,FormHelperText,FormErrorMessage,Text,Box,Button,Flex,
} from '@chakra-ui/react';
import HomeLogo from '../HomePage/HomoLogo';
import { Link} from 'react-router-dom';
import {useContext , useEffect , useState} from "react"
import { AuthContext } from "../Routes/AuthContext";
import "./Login.css"

export default function SignUp() {
    const {toggle} = useContext(AuthContext)
    const [userInput , setUserInput] = useState({
        name:"" ,
        email:"" ,
        password:"" ,
    })

    useEffect(()=>{
        toggle(false)
    },[])

    const handleChange = (e)=>{
        const {name , value} = e.target
        setUserInput({
            ...userInput ,
            [name] :value , 
        })
    }
    // console.log(userInput)

  return (
    <div
      id="mainLoginPage"
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      {/* HOME LOGO  */}
      <Box mt={2} mb={3}>
        <HomeLogo />
      </Box>

      {/* TEXT ARE HERE  */}
      <Text
        fontSize={{
          base: '30px',
          '2xl': '48px',
          xl: '48px',
          lg: '48px',
          md: '48px',
          sm: '48px',
        }}
        as="b"
        variant="with-shadow"
      >
        Create a free account
      </Text>

      <Box
        bg="#4267b2"
        color="white"
        borderRadius="sm"
        p={3}
        h={10}
        w={{
          base: '300px',
          '2xl': '350px',
          xl: '350px',
          lg: '350px',
          md: '350px',
          sm: '350px',
        }} mt={5}
        display="flex"
        justifyContent="center" cursor="pointer" id="signUpFacebook"
      >
        <Text as="b" m={-1} fontSize="18px">
         Sign Up with Facebook
        </Text>
      </Box>
      <Box
        borderRadius="sm"
        px={4}
        h={10}
        w={{
          base: '300px',
          '2xl': '350px',
          xl: '350px',
          lg: '350px',
          md: '350px',
          sm: '350px',
        }}  cursor="pointer"
        textAlign="center"
        border="1px"
        borderColor="#9296a3"
        mt={3}
       id="signUpGoogle">
        <Text m={1.5} fontSize="18px">
          Sign Up with Google
        </Text>
      </Box>

      <Text color="#9296a3" fontSize="sm" mt={5} mb={4}>
        or using email
      </Text>

      {/*  INPUT BOX IS HERE  */}

      <FormControl isRequired  w={{
          base: '300px',
          '2xl': '350px',
          xl: '350px',
          lg: '350px',
          md: '350px',
          sm: '350px',
        }}  mb={4} 
       >
        <FormLabel>First and last name</FormLabel>
        <Input placeholder="First name" type="text" name="name" value={userInput.name} onChange={handleChange}/>
      </FormControl>

      <FormControl isRequired  w={{
          base: '300px',
          '2xl': '350px',
          xl: '350px',
          lg: '350px',
          md: '350px',
          sm: '350px',
        }}  mb={4}>
        <FormLabel>Your Email Adress</FormLabel>
        <Input placeholder="Your Email Adress" type="email" name="email" value={userInput.email} onChange={handleChange} />
      </FormControl>

      <FormControl isRequired  w={{
          base: '300px',
          '2xl': '350px',
          xl: '350px',
          lg: '350px',
          md: '350px',
          sm: '350px',
        }}  mb={4}>
        <FormLabel>Choose a password</FormLabel>
        <Input placeholder="Your Password" type="password" name="password" value={userInput.password} onChange={handleChange} />
      </FormControl>

      {/*  BUTTON  */}
      <Button w={{base: "300px" ,"2xl":"350px" ,xl:"350px" , lg:"350px",md:"350px" ,sm:"350px"}} bg='#196cff' color="white" ><Text color='white' fontSize='lg'>Sign Up</Text></Button>
      <Text fontSize='sm' color='#a8abb5'>By signing up you accept our terms of use and policies.</Text>
      
      {/* SIGN UP ---------------------> */}
      <Flex display="flex" justify="center" w={{base: "300px" ,"2xl":"350px" ,xl:"350px" , lg:"350px",md:"350px" ,sm:"350px"}} mt={6} mb={12}>
            <Text fontSize='xl'>Already have an account?</Text>
          <Link to="/Login">  <Text fontSize='xl' color='#196cff' as='b' ml={2}>Log in</Text> </Link>
        </Flex>


    </div>
  );
}
