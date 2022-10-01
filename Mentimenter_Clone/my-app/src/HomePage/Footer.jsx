import HomeLogo from "./HomoLogo" ;
import {Text , Divider ,Link , Spacer} from "@chakra-ui/react"

export default function Myfooter(){
    return (
        <div id="homeFooter">
        <div id="HOME_FOOTER_MAIN_DIV">
          <div id="footer_home_image"><HomeLogo /></div>

          <div className="home_features"> <Text fontWeight={700} borderBottom="1px solid black" >Features</Text><Divider mb={3} />
          <div><Link to="/*"> Overview</Link></div>
           <div><Link to="/*">Survey</Link></div>
           <div><Link to="/*">Presentation</Link></div>
           <div> <Link to="/*">Life Polling</Link></div>
           <div> <Link to="/*">Word Cloud</Link></div>
           <div> <Link to="/*">Quiz</Link></div>
           <div>  <Link to="/*">Q&A</Link></div>
           <div> <Link to="/*">Survey</Link></div>
           </div>

           <div className="home_features"> <Text fontWeight={700} borderBottom="1px solid black">Resources</Text><Divider mb={3} />
          <div><Link to="/*">Blog</Link></div>
           <div><Link to="/*">How to</Link></div>
           <div><Link to="/*">Solutions</Link></div>
           <div> <Link to="/*">Templates</Link></div>
           <div> <Link to="/*">Academy</Link></div>
           <div> <Link to="/*">Webinars</Link></div>
           <div>  <Link to="/*">Comparision</Link></div>
           <div> <Link to="/*">Stories</Link></div>
           <div> <Link to="/*">Integration</Link></div>
           </div>

           <div className="home_features"> <Text fontWeight={700} borderBottom="1px solid black">Details</Text><Divider mb={3} />
          <div><Link to="/*">Legal</Link></div>
           <div><Link to="/*">Policies</Link></div>
           <div><Link to="/*">Accesibility</Link></div>
           <div> <Link to="/*">Help Center</Link></div>
           <div> <Link to="/*">Requirements</Link></div>
           </div>
           

           <div className="home_features"> <Text fontWeight={700} borderBottom="1px solid black">About us</Text><Divider mb={3} />
          <div><Link to="/*">Press Info</Link></div>
           <div><Link to="/*">The Team</Link></div>
           <div><Link to="/*">Jobs</Link></div>
           <div> <Link to="/*">Culture</Link></div>
           <div> <Link to="/*">Benifits</Link></div>
           <div> <Link to="/*">Contanct us</Link></div>
           <div>  <Link to="/*">Climate</Link></div>
           <div> <Link to="/*">Investors</Link></div>
           </div>
           <Spacer />
        </div>
          
           <div id="footer_items">
             <div><Link to="/*"><Text fontWeight={700}>Choose Your Language:</Text></Link></div>
             <div><Link to="/*"><Text fontWeight={400}>English</Text></Link></div>
             <div><Link to="/*"><Text fontWeight={400}>Portuguese (Brazil)</Text></Link></div>
             <div><Link to="/*"><Text fontWeight={400}>Spanish</Text></Link></div>
           </div>
     </div>
    )
}