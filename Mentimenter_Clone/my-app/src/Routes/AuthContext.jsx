import { createContext , useState } from "react"

export const AuthContext = createContext()

function AuthContextProvider({children}){
    const [navStatus , setNavStatus] = useState(false)
      
    const toggle=(status)=>{
        setNavStatus(status)
    }
   return(
    <AuthContext.Provider value = {{navStatus , toggle}}>
        {children}
    </AuthContext.Provider>
   )
}

export default AuthContextProvider ;