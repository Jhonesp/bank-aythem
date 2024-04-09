import React from 'react'
import styles from './bank.module.css'
import CloseIcon from '@mui/icons-material/Close';
import Categoria from './Categoria.jsx';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

function Bank() {
    return (
        <div className={styles.bank_container}>
            <div className={styles.bank_header}>
                <h1>Indica que tipo de cuenta quieres añadir</h1>
                <div className={styles.close_arrow}>
                    <CloseIcon/>
                </div>
            </div>

            <div >
                <Categoria
                    icono={< AccountBalanceIcon />}
                    titulo="Banco"
                    descripcion="Cuentas Corrientes, depositos, prestamos y lineas de credito"/>
            </div>
            <div >
                <Categoria
                    icono={<CreditCardIcon />}
                    titulo="Tarjeta"
                    descripcion="Tarjetas de crédito y débito"/>
            </div>
            <div >
                <Categoria
                    icono={<AccountBalanceWalletIcon />}
                    titulo="Pasarela de pago"
                    descripcion="PayPal y Stripe"/>
            </div>
            <div className={styles.last_category}>
                <Categoria
                    icono={<LocalAtmIcon />}
                    titulo="Caja"
                    descripcion="Movimientos en efectivo"/>
            </div>
        </div>
    )
}

export default Bank;
