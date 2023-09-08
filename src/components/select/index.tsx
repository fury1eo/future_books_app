import { FC } from 'react';
import styles from './styles.module.css';

interface SelectProps {
    children: JSX.Element[],
    name: string,
    value: string,
    onChange: (e: any) => void,
    label: string
}

const Select: FC<SelectProps> = ({ children, name, value, onChange, label }) => {
    return (
        <div className={styles.select_block}>
            <div className={styles.label}>{label}</div>
            <select name={name} value={value} onChange={onChange} className={styles.select}>
                {children}
            </select>
        </div>
    );
};

export default Select;