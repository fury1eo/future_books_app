import { FC } from 'react';
import styles from './styles.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

interface SearchProps {
    placeholder?: string,
    value: string,
    onChange: (e: any) => void,
    fetch: () => void,
    onKeyDown: React.KeyboardEventHandler<HTMLInputElement>
}

const Search: FC<SearchProps> = ({ placeholder = '', value, onChange, fetch, onKeyDown }) => {
    return (
        <div className={styles.search}>
            <input type="text" onKeyDown={onKeyDown} placeholder={placeholder} value={value} onChange={onChange}/>
            <div onClick={fetch} className={styles.btn}><AiOutlineSearch/></div>
        </div>
    );
};

export default Search;