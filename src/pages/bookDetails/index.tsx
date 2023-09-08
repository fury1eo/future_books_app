import { useEffect } from 'react';
import styles from './styles.module.css';
import { getBookById } from '../../services/booksApi';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Loader from '../../components/loader';

const BookDetails = () => {
    const { bookId } = useParams<string>();

    const { bookDetails, isLoading } = useAppSelector(state => state.bookDetailsReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getBookById(bookId));
    }, []);

    console.log(bookDetails);

    return (
        <>
            {isLoading && <Loader/>}
            <div className={styles.book_details}>
                <div className={styles.block_poster}>
                    {bookDetails.volumeInfo?.imageLinks
                        ? <img src={bookDetails.volumeInfo?.imageLinks?.extraLarge} alt="bookPoster" />
                        : <img src="https://bookcart.azurewebsites.net/Upload/Default_image.jpg" alt="bookPoster" />
                    }
                </div>
                <div className={styles.block_info}>
                    <div className={styles.categories}>{bookDetails.volumeInfo?.categories ? bookDetails.volumeInfo?.categories?.join(' / ') : null}</div>
                    <div className={styles.title}>{bookDetails.volumeInfo?.title}</div>
                    <div className={styles.authors}>{bookDetails.volumeInfo?.authors ? bookDetails.volumeInfo?.authors?.join(', ') : null}</div>
                    <div className={styles.descr}>{bookDetails.volumeInfo?.description ? bookDetails.volumeInfo?.description : null}</div>
                </div>
            </div>
        </>
    );
};

export default BookDetails;