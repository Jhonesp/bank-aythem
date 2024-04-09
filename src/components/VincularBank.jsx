import React from 'react'
import styles from './VincularBank.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import BotonSlider from './BotonSlider';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import InfoIcon from '@mui/icons-material/Info';

const VincularBank = ({icono}) => {
    const [value,
        setValue] = React.useState(false);
    return (
        <div className={styles.vincular_container}>
            <div className={styles.vincular_header}>
                <div className={styles.header_inicio}>
                    <div className={styles.back_arrow}><ArrowBackIcon/></div>
                    <h1>Vincula tu banco a Holded</h1>
                </div>
                <div className={styles.close_arrow}>
                    <CloseIcon/>
                </div>

            </div>
            <div className={styles.header_end}>

                <div className={styles.header_items}>
                    {icono}
                    <h2>Nombre Banco</h2>
                </div>
                <div className={styles.header_botones}>
                    <BotonSlider/>
                </div>
            </div>

            <div className={styles.vincular_body}>
                <p>Al conectar tu cuenta con Holded puedes sincronizar movimientos automaticamente</p>

                <div className={styles.formulario}>
                    <form>
                        <div className={styles.inputGroup}>
                            <label htmlFor="usuario">Usuario:</label>
                            <select name="usuario" id="usuario">
                                <option value="NIF">NIF</option>
                            </select>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="documento">N° de Documento {<InfoIcon />}</label>
                            <input type="text" id="documento" name="documento" placeholder="Introduce tu identificación"/>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="clave">Clave de Acceso {<InfoIcon />}</label>
                            <input type="password" id="clave" name="clave" placeholder="Introduce tu contraseña"/>
                        </div>
                    </form>
                    <div className={styles.contenido}>
                        <div className={styles.icono_container}>
                            <div className={styles.icono}>
                                {<LockPersonIcon />}
                            </div>
                        </div>
                        <div className={styles.texto}>
                            <h2>Protegemos la información de tu negocio</h2>
                            <p>Utilizamos proveedores regulados y obligados a resguardar tus datos. Holded nunca tendrá acceso a tus credenciales bancarias.</p>
                        </div>

                    </div>
                    <div className={styles.send_button}>
                        <button type="submit">Conectar</button>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default VincularBank