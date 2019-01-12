import React from 'react';
import styles from './Modal.module.scss';
import Form from '../Form/Form';

const Modal = ({ closeModalFn }) => (
  <div className={styles.wrapper}>
    <button onClick={closeModalFn}>close me</button>
    <Form />
  </div>  
);

export default Modal;