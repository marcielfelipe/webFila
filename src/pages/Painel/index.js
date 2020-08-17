import React from 'react';
import '../../global.css';
import './styles.css'

export default function Painel(){
    return(
        <div className="painel-container">
            <div className="top">
                <section className="pass-container">
                    <h3>SENHA PREFERENCIAL:</h3>
                    <h1>CXP-001</h1>
                </section>
                <section className="guiche-container">
                    <h3>GUICHÊ:</h3>
                    <h1>001</h1>
                </section>
            </div>
            <div className="bottom">
                <section className="bottom-container">
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

                    <section className="menu">
                        <h2>Solicite sua senha!</h2>
                        <button>Preferencial</button>
                        <button>Normal</button>
                    </section>
                </section>
            </div>
            
        </div>
    

    );
}