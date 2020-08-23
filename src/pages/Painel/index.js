import React,{useState,useContext} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import PasswordContext from '../../context/PasswordContext';

import './styles.css';

export default function Painel(){
    const {normal,preferential} = useContext(PasswordContext);
    const [pass,setPass] = useState('')
    const [newPass,setNewPass] = useState('')
    

    function handlePassNormal(){
        setPass('NORMAL')
        normal.push('CXN-'+(normal.length+1))
        setNewPass(normal[(normal.length-1)])
        console.log(normal)
    }  

    function handlePassPreferential(){
        setPass('PREFERENCIAL')      
        preferential.push('CXP-'+(preferential.length+1))
        setNewPass(preferential[(preferential.length-1)])
        console.log(preferential)
    } 


    
    return(
        <div className="painel-container">
            <section className="tittle">
                <h1>eBank</h1>
                <Link to="/admin">
                    <FiSettings size={30} color="#0076BF"/>
                </Link>
                
            </section>
            
            <div className="top">
                <section className="pass-container">
                    <h3>SUA SENHA É {pass}:</h3>
                    <h1 className="pass">{newPass}</h1>
                </section>
                <section className="guiche-container">
                    <h3>GUICHÊ:</h3>
                    <h1 className="guiche">001</h1>
                </section>
            </div>
            <div className="bottom">
                <section className="history-container">
                    <h2>HISTÓRICO</h2>
                    <section className="subtitle">
                        <h3>SENHA</h3>
                        <h3>GUICHÊ</h3>
                    </section>
                    <section className="lists">
                        <ul className="pass-list">
                            <li>
                                CXP-000
                            </li>
                            <li>
                                CXP-000
                            </li>
                            <li>
                                CXP-000
                            </li>
                            <li>
                                CXP-000
                            </li>
                        </ul>
                        <ul className="guiche-list">
                            <li>
                                000
                            </li>
                            <li>
                                000
                            </li>
                            <li>
                                000
                            </li>
                            <li>
                                000
                            </li>
                        </ul>
                    </section>
                </section>
                <section className="menu">
                    <h2>Solicite sua senha!</h2>
                    <section className="buttons">
                        <button className="preferencial-button" onClick={handlePassPreferential}>Preferencial</button>
                        <button className="normal-button" onClick={handlePassNormal}>Normal</button>
                    </section>
                </section>
            </div>
            
        </div>

    

    );
}