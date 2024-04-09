import React, { useState } from 'react';
import styles from './bancosPantalla.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import BancosBotones from './BancosBotones.jsx';
import Instituciones from './Instituciones.jsx';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import countries from './countries.js';

const BancosPantalla = () => {
    const [pais,
        setPais] = useState('Escribe el nombre de tu banco');
    const [consulta,
        setConsulta] = useState('');

    const handlePaisChange = (e) => {
        setPais(e.target.value);
    };

    const handleConsultaChange = (e) => {
        setConsulta(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <div className={styles.bancosPantalla_container}>
            <div className={styles.bancos_header}>
                <div className={styles.header_inicio}>
                    <div className={styles.flecha_back}><ArrowBackIcon/></div>
                    <h1>Indica a qué banco pertenece la cuenta</h1>
                </div>
                <div className={styles.close_arrow}>
                    <CloseIcon/>
                </div>
            </div>
            <div className={styles.bancos_search_container}>
                <h3>Banco</h3>
                <div className={styles.barra_busqueda}>
                    <form onSubmit={handleSubmit}>
                        <select value={pais} onChange={handlePaisChange} >
                            <option value=""></option>
                            {countries.map((country, index) => (
                                <option key={index} value={country.name}>
                                    {country.flag}
                                </option>
                            ))}
                        </select>
                        <input
                            type="text"
                            value={consulta}
                            onChange={handleConsultaChange}
                            placeholder={pais}/>
                    </form>
                </div>
            </div>
            <div className={styles.bancos_resultado}>
                    <h3>Bancos más populares</h3>
                    <div className={styles.bancos_iconos}>
                        <BancosBotones 
                        icono={<FoodBankIcon />}
                        name="Banco Santander"
                        />
                        <BancosBotones 
                        icono={<FoodBankIcon />}
                        name="Banco Santander"
                        />
                        <BancosBotones 
                        icono={<FoodBankIcon />}
                        name="Banco Santander"
                        />
                        <BancosBotones 
                        icono={<FoodBankIcon />}
                        name="Banco Santander"
                        />
                    </div>
            </div>
            <div className={styles.instituciones}>
                            <Instituciones />
            </div>
        </div>
    )
}

export default BancosPantalla