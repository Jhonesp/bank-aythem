import React from 'react'
import styles from './categoria.module.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Categoria = ({icono, titulo, descripcion}) => {
    return (
        <div className={styles.categoria_container}>
            
            <div className={styles.contenido}>
                <div className={styles.icono_container}>
                    <div className={styles.icono}>
                        {icono}
                    </div>
                </div>
                <div className={styles.texto}>
                    <h2>{titulo}</h2>
                    <p>{descripcion}</p>
                </div>
                
            </div>
            <div className={styles.flecha}>
                <ChevronRightIcon/>
            </div>
        </div>
    )
}

export default Categoria