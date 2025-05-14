import React from 'react';
import iconSeta from '../../assets/icon_seta.svg';
import styles from './ButtonVoltar.module.scss'

type ButtonVoltarProps = {
    placeholder?: React.ReactNode
}

const ButtonVoltar: React.FC<ButtonVoltarProps> = ({placeholder}) => {
  return (
    <div className={styles.containerButtonVoltar}>
      <button className={styles.buttonVoltar} type="button">
        <img src={iconSeta} alt="Voltar" />
      </button>
      <p>
        { placeholder }
      </p>
      <p></p>
    </div>
  );
};

export default ButtonVoltar;