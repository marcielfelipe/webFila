
import React,{createContext} from 'react';

const PasswordContext = createContext({normal:[],preferential:[]});

export const PasswordProvider=({children})=>(
    <PasswordContext.Provider value={{normal:[],preferential:[]}}>
        {children}
    </PasswordContext.Provider>
);

export default PasswordContext;
























/* const PasswordProvider = ({children})=>{
    const [preferential,setPreferential]=useState([])
    const [normal,setNormal]=useState([])


    const savePassword = (typePass)=>{
        const newPass=''
        if(typePass===0){   //preferencial
            newPass='CXP-'+ (preferential.length+1)
            preferential.unshift(newPass)
        }else if(typePass===1){   //normal
            newPass='CXN-'+ (preferential.length+1)
            normal.unshift(newPass)
        }
        

    }

    return(
        <PasswordContext.Provider value={{preferential,normal,savePassword}}>
            {children}
        </PasswordContext.Provider>
    )
} */

