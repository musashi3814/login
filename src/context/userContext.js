import { createContext, useState,useEffect} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import {useNavigate} from "react-router-dom"

export const UserContext = createContext();
// .providerで渡す


// In your component file, use the useContext hook to access the value provided by the context
export function AuthContext(props) {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
            setUser(userAuth);
            setIsLoading(false);

            if(userAuth){
                console.log("login");
                navigate("/Mypage");
            }
        });
        return () => unsubscribe();
    }, []);


    return (
        <UserContext.Provider value={{user}}>{props.children}</UserContext.Provider>
        // valueの中身はオブジェクトで渡す
    );
}
