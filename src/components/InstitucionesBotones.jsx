import React from 'react'
import styles from './institucionesBotones.module.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const InstitucionesBotones = ({icono, titulo}) => {
  return (
    <div className={styles.botones_container}>
        <div className={styles.icono}>
            {icono}
            <div className={styles.titulo}>
            <h3>{titulo}</h3>
            </div>
            
        </div>
        
        <div className={styles.arrow}>
            <ChevronRightIcon />
        </div>
    </div>
  )
}
