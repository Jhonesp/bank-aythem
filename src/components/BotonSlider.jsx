import React, { useState } from 'react';
import styles from './BotonSlider.module.css';

function BotonSlider() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('opcion1');

  const toggleOpcion = () => {
    setOpcionSeleccionada(opcionSeleccionada === 'opcion1' ? 'opcion2' : 'opcion1');
  };

  return (
    <div className={styles.botonSlider} onClick={toggleOpcion}>
      <div className={`${styles.opcion} ${opcionSeleccionada === 'opcion1' ? styles.activa : ''}`}>
        Con conexión 
      </div>
      <div className={`${styles.opcion} ${opcionSeleccionada === 'opcion2' ? styles.activa : ''}`}>
        Sin conexión
      </div>
    </div>
  );
}

export default BotonSlider;
