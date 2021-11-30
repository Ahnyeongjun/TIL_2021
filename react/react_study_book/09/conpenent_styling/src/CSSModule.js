import React from 'react';
import styles from './CSSModule.module.css';
const CSSModule = () => {
    return (
        <div className={styles.wrapper}>
            아<span className="something">css</span>
        </div>
    )
}
export default CSSModule;