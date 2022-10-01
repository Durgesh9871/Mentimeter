import { Link } from "react-router-dom";
import { useContext , useEffect} from "react";
import { AuthContext } from "../Routes/AuthContext";
import { Container , Text , Center ,Button ,Divider, Spacer } from '@chakra-ui/react'
import WhatIsMentimeter from "../Components/Whatismentimeter"
import "../Components/Nav.css"
import MyButton from "../Components/MyButton"
import "../Components/Footer.css"
import Myfooter from "./Footer";

export default function HomeMentimeter(){
    const {toggle} = useContext(AuthContext)

    useEffect(()=>{
        toggle(true)
    },[])

   let WhatismentimeterLoop = [
      {
        alt:1 ,
        img:"https://www.mentimeter.com/_next/static/media/prepare.589e36de.svg" ,
        heading:"Prepare" ,
        para:"Build interactive presentations with the easy-to-use online editor. Add questions, polls, quizzes, slides, images, gifs and more to your presentation to create fun and engaging presentations." ,
    } ,
    {
        alt:2 ,
        img:"https://www.mentimeter.com/_next/static/media/engage.ba9959f7.svg" ,
        heading:"Engage" ,
        para:"Your audience uses their smartphones to connect to the presentation where they can answer questions. Visualize their responses in real-time to create a fun and interactive experience." ,
    } ,
    {
        alt:3 ,
        img:"https://www.mentimeter.com/_next/static/media/followup.14994f30.svg" ,
        heading:"Follow-up" ,
        para:"Once your Mentimeter presentation is over, share and export your results for further analysis and even compare data over time to measure the progress of your audience.'"
    }


        
   ]

    return(
        <div >
           <div id="HomePageText">
              <h1>Engage your audience & eliminate awkward silences</h1>
           </div>
           <div id="HomePageText_2" >
           <h1>Our easy-to-build presentations, interactive Polls, Quizzes, and Word Clouds mean more participation and less stress</h1>
           </div>
           <div id="ButtonHomePage">
            <Center mt={10}>
             <Button colorScheme='messenger' size='lg' p={7} borderRadius="4px"> 
             <Text fontSize='2xl' color='#ffffff'><Link to="/SignUp"> Sign up</Link></Text>
                </Button>
             </Center>
             <Center>
                <Text fontSize='xs' color='#9397a4'>No credit card needed</Text>
                </Center>
           </div>
          
       
        <div id="whatIsMentimeter">
            <Center mt={6} mb={9}>
              <h1>What is Mentimeter?</h1>
            </Center>
               <div id="whatIsMentimeter_main_div">
           <div id="whatIsMentimeter_Div">
              {WhatismentimeterLoop.map((el)=>(
                <WhatIsMentimeter key={el.alt} img={el.img} heading={el.heading} para={el.para} alt={el.alt}/>
              ))}
           </div>
           <Center mt={10} mb={12}>
             <MyButton text="Exolore features" />
             </Center>
           </div>
        </div>

        <div id="MillionOfVoice">
           <Center mt={16} mb={-4}>
              <h1>Millions of voices have already been heard</h1>
            </Center>
            
            <div id="MillionOfVoice_Div">
              <div><p >280 M</p>
               <Divider />
               <Center mb={28}> <Text fontWeight="600" fontSize="22px">Voters</Text></Center>
              
              </div>
              <div><p >14 M</p>
               <Divider />
               <Center mb={28}> <Text fontWeight="600" fontSize="22px">Presenters</Text></Center>
              </div>
              <div><p >220+</p>
               <Divider />
               <Center mb={28}> <Text fontWeight="600" fontSize="22px">Countries & territories</Text></Center>
              </div>
            </div>
            
            <div id="MillionOfVoice_Div_Image">
               <div id="MillionOfVoice_IMAGE">
                  <img src="https://www.mentimeter.com/_next/static/media/andrew-hollo.3f3b1387.png" alt="MillionOfVoice_IMAGE" width="100%" />
               </div>
               <div>
                <Text fontSize="30px" >"I can pose a question easily and within a minute or two, have aggregated responses from every participant."</Text>
                
                <Text color='#0078ff' fontSize='xl' mt={4} mb={6}>
               Andrew Hollo, Workwell Consulting
               </Text>
                
                <MyButton text="Explore more Stories"/>
               </div>
            </div>
          
           <div id="Background_Multi_Color">
              <div >
                <Text fontSize='52px' mt={10} mb={10} pt={10}>Impress with interactive presentations</Text>
              </div>
              <div>
                <Button color="#0078ff"  bg="white" size='lg'>Get Started</Button>
              </div>
           </div>
              
           </div>

         <Myfooter />
                
                
               
                 
               
                
               



              
             
            
            
             
            









       
      </div>
           
             
         
        
    )
}