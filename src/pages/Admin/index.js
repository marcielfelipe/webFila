import React,{useState,useContext} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css'
import PasswordContext from '../../context/PasswordContext';


export default function Admin(){
    const {normal,preferential} = useContext(PasswordContext);
    const [pass,setPass] = useState('')

    function handleCall(){
        if(preferential.length===0){
            setPass('NORMAL')
            normal.shift()
            console.log(normal.length)
        }else{
            setPass('PREFERENCIAL')
            
            console.log(preferential[0])
            preferential.shift()
            console.log(preferential[0])
        }
        
    }

    return(
        <div className="painel-container">
            <section className="tittle">
                <Link to="/">
                    <FiArrowLeft className="icon-tittle" size={30} color="#0076BF"/>
                </Link>
                <h1>eBank</h1>
            </section>
            <div className="top">
                <section className="pass-container">
                    <h3>SENHA AATUAL ->{pass}:</h3>
                    <h1 className="pass">{}</h1>
                </section>
                <section className="guiche-container">
                    <h3>GUICHÊ:</h3>
                    <h1 className="guiche">001</h1>
                </section>
            </div>
            <div className="bottom">
                <section className="fila-container">
                    <h2>PRÓXIMAS SENHAS</h2>
                    
                    <ul className="next-list">
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
                    
                </section>
                <section className="chamar">
                        <h2>PRÓXIMO DA FILA!</h2>
                        
                        <button onClick={handleCall}>Chamar</button>
                        
                    </section>
            </div>
            
        </div>

    );
}