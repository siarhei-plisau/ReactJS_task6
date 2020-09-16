import React from 'react';
import styles from './FormError.module.scss';

function FormError() {
    const formError = 'this field is required!';
    return <div className={styles.error}>{formError}</div>
}
export default FormError;
