import styles from './styles.module.css';
import Search from '../search';
import Select from '../select';
import { useAppDispatch } from '../../hooks/redux';
import { optionsSlice } from '../../store/reducers/OptionsSlice';
import { getBooks } from '../../services/booksApi';
import { FC, useState } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import { bookSlice } from '../../store/reducers/BookSlice';

const Header: FC = () => {
    const dispatch = useAppDispatch();
    const match = useMatch('/books');
    const navigate = useNavigate();

    const [currentSearchQuery, setCurrentSearchQuery] = useState<string>('');
    const [currentCategory, setCurrentCategory] = useState<string>('all');
    const [currentOrder, setCurrentOrder] = useState<string>('relevance');

    const handleSearch = () => {
        if (currentSearchQuery !== '') {
            dispatch(getBooks(false, currentSearchQuery, currentOrder, currentCategory));
            dispatch(optionsSlice.actions.saveSearchQuery(currentSearchQuery));
            dispatch(optionsSlice.actions.saveCategory(currentCategory));
            dispatch(optionsSlice.actions.saveOrder(currentOrder));
            dispatch(bookSlice.actions.setCurrentPage(1));
            if (!match) {
                navigate('/books');
            }
        }
    }

    return (
        <div className={styles.header}>
            <div className={styles.search_block}>
                <div className={styles.title}>Search for books</div>
                <Search 
                    placeholder='Type anything...'
                    value={currentSearchQuery}
                    onChange={(e: any) => setCurrentSearchQuery(e.target.value)} 
                    onKeyDown={(e: any) => e.key === 'Enter' ? handleSearch() : null} 
                    fetch={() => handleSearch()}
                />
                <div className={styles.filters}>
                    <Select label='Categories' name="categoryFilter" value={currentCategory} onChange={(e: any) => setCurrentCategory(e.target.value)}>
                        <option value="all">All</option>
                        <option value="art">Art</option>
                        <option value="biography">Biography</option>
                        <option value="computers">Computers</option>
                        <option value="history">History</option>
                        <option value="medical">Medical</option>
                        <option value="poetry">Poetry</option>
                    </Select>
                    <Select label='Sorting by' name="orderSort" value={currentOrder} onChange={(e: any) => setCurrentOrder(e.target.value)}>
                        <option value="relevance">Relevance</option>
                        <option value="newest">Newest</option>
                    </Select>
                </div>
            </div>
        </div>
    );
};

export default Header;