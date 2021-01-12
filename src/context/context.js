import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();
export const DataContext = createContext();

export function AuthProvider(props){

    const [userData, setUserData] = useState({
        email: localStorage.getItem('email') || '',
        password: localStorage.getItem('password') || ''       
    })
    
    const [auth, setAuth] = useState(
        {
            authenticate: false, 
            role: '',
            
        }
    )

    
    
    
    useEffect(() => {

    const adminData = {
        adminEmail: 'admin@gmail.com',    
        adminPassword: 'user_admin'
    }

    const {email, password} = userData
    const { adminEmail, adminPassword } = adminData
    
    if(email !== ''){
        if(email === adminEmail && password === adminPassword){
            setAuth({authenticate: true, role: "Admin"})
        }else {
            setAuth({authenticate: true, role: ""})
        }
    }
    
}, [userData])    

    


    return(
        <AuthContext.Provider value={{auth, setAuth}}>
            <DataContext.Provider value={{userData, setUserData}} >
                {props.children}
            </DataContext.Provider>
        </AuthContext.Provider>
    )
}