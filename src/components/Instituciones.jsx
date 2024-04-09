import React from 'react'
import styles from './instituciones.module.css'
import { InstitucionesBotones } from './InstitucionesBotones'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Instituciones = () => {
  return (
    <div className={styles.instituciones_container}>
        <h3>Bancos más populares</h3>
        <div className={styles.instituciones_lista}>
            <InstitucionesBotones 
                icono={<AccountBalanceIcon />}
                titulo={"Banco Santander"}
            />
            <InstitucionesBotones 
                icono={<AccountBalanceIcon />}
                titulo={"Banco Santander (Empresa)"}
            />
            <InstitucionesBotones 
                icono={<AccountBalanceIcon />}
                titulo={"Banco Santander (usuario)"}
            />
            <InstitucionesBotones 
                icono={<AccountBalanceIcon />}
                titulo={"+ Añadir Banco Santander"}
            />
        </div>
    </div>
  )
}

export default Instituciones