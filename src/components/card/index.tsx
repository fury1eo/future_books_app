import { FC } from 'react';
import styles from './styles.module.css';
import { IBook } from '../../types/types';
import { useNavigate } from 'react-router-dom';

interface CardProps {
    data: IBook
}

const Card: FC<CardProps> = ({ data }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.card} onClick={() => {navigate(`/books/${data.id}`)}}>
            <div className={styles.img}>
                {data.volumeInfo?.imageLinks
                    ? <img src={data.volumeInfo?.imageLinks?.thumbnail} alt="bookPoster" />
                    : <img src="https://bookcart.azurewebsites.net/Upload/Default_image.jpg" alt="bookPoster" />
                }
            </div>
            <div className={styles.category}>{data.volumeInfo?.categories ? data.volumeInfo?.categories[0] : null}</div>
            {data.volumeInfo?.title
                ? <div className={styles.title}>{data.volumeInfo.title.length > 50 ? data.volumeInfo.title.slice(0, 60) + '...' : data.volumeInfo?.title}</div>
                : null
            }
            <div className={styles.authors}>{data.volumeInfo?.authors ? data.volumeInfo?.authors.join(', ') : null}</div>
        </div>
    );
};

export default Card;