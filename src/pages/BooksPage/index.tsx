import styles from './styles.module.css';
import CardList from '../../components/cardList';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { getBooks } from '../../services/booksApi';
import Loader from '../../components/loader';
import { bookSlice } from '../../store/reducers/BookSlice';
import { FC } from 'react';

const BooksPage: FC = () => {
    const { books, isLoading, currentPage } = useAppSelector(state => state.bookReducer);
    const { searchQuery, category, order } = useAppSelector(state => state.optionsReducer);
    const dispatch = useAppDispatch();
  
    const changePage = () => {
        dispatch(getBooks(true, searchQuery, order, category, currentPage+1));
        dispatch(bookSlice.actions.setCurrentPage(currentPage+1));
    }

    return (
        <div className={styles.books_page}>
            {books.length > 0 
                ? <CardList data={books}/>
                : !isLoading ? <div className={styles.warning}>Books not found</div> : null
            }

            {isLoading && <Loader/>}
            
            {books.length === 0 
                ? null 
                : books.length % 30 === 0 
                    ? <div className={styles.pagination} onClick={() => changePage()}>Load more</div> 
                    : null
            }
        </div>
    );
};

export default BooksPage;