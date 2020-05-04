import React from 'react';
import styles from './styles.module.css'

const Loading = () => <div className={styles.loading}>
    <svg width="50" height="50" viewBox="0 0 18 18">
        <path d="M9 18C4.03 18 0 13.97 0 9C0 4.03 4.03 0 9 0C13.97 0 18 4.03 18 9H16C16 2.77 8.46 -0.36 4.05 4.05C-0.36 8.46 2.76 16 9 16C10.86 16 12.63 15.25 13.9 13.9L15.4 15.4C13.68 17.06 11.39 18 9 18Z" fill="#C4C4C4" />
    </svg>
</div>

export default Loading
