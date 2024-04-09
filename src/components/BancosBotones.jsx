import React from 'react'
import styles from './bancosBotones.module.css'

const BancosBotones = ({icono, name}) => {
  return (
    <div className={styles.bancos_container}>
        <div className={styles.bancos_icono}>
            {icono}
        </div>
        <div className={styles.bancos_nombre}>
            <h3>{name}</h3>
        </div>
    </div>
  )
}

export default BancosBotones