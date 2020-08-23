import React,{useState,useContext} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css'
import PasswordContext from '../../context/PasswordContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

export default function Admin(){

    const notify = () => {
        toast('Sem pessoas na fila!',{position: toast.POSITION.TOP_LEFT})
    }

    const {normal,preferential} = useContext(PasswordContext);
    const [pass,setPass] = useState('')
    const [passAtual,setAtualPass] = useState('')
    const [guiche,setGuiche] = useState('')

    function handleCall(n){
        if(n===1){
            setGuiche('001')
        }else if(n===2){
            setGuiche('002')
        }
        if(normal.length===0 && preferential.length===0){
            setPass('')
            setAtualPass('')
            notify() 
        }else if(preferential.length===0){
            setPass('NORMAL')
            setAtualPass(normal[0])
            normal.shift()
            console.log(normal)
        }else{
            setPass('PREFERENCIAL')
            setAtualPass(preferential[0])
            preferential.shift()
            console.log(preferential)
        }
        
    }

    return(
        <div className="painel-container">
            <ToastContainer/>
            <section className="tittle">
                <Link to="/">
                    <FiArrowLeft className="icon-tittle" size={30} color="#0076BF"/>
                </Link>
                <h1>eBank</h1>
            </section>
            <div className="top">
                <section className="pass-container">
                 <h3>SENHA {pass} ATUAL:</h3>
                    <h1 className="pass">{passAtual}</h1>
                </section>
                <section className="guiche-container">
                    <h3>GUICHÊ:</h3>
                    <h1 className="guiche">{guiche}</h1>
                </section>
            </div>
            <div className="bottom">
                <section className="fila-container">
                    <h2>PRÓXIMAS SENHAS</h2>
                    
                    <ul className="next-list">
                        {
                            preferential.map(pref=>(
                                <li>{pref}</li>
                            )) 
                        }
                        {
                            normal.map(norm=>(
                                <li>{norm}</li>
                            ))
                        }
                        
                    </ul>
                    
                </section>
                <section className="chamar">
                    <h2>GHICHÊ</h2>
                    <button onClick={()=>handleCall(1)}>Chamar</button>

                    <h2>GUICHÊ 02</h2>
                    <button onClick={()=>handleCall(2)}>Chamar</button>
                    
                   
                </section>
                
            </div>
            
        </div>

    );
}