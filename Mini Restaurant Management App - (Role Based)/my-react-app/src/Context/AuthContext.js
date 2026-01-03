import { createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const[auth,setAuth] = useState(JSON.parse(localStorage.getItem("auth"))||{
        isAuth:false,
        role:""
    });

    const login=(role)=>{
        const data={isAuth:true ,role};
        setAuth(data);
        localStorage.getItem("auth",JSON.stringify(data));

    }

    const logout=()=>{
        const data = {isAuth:true,role}
        setAuth(data)
        localStorage.setItem("auth",JSON.stringify(data))
    }

    return(
        <div>
            <AuthContext.Provider value={{auth,login,logout}}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}
