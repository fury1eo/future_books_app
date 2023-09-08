import { FC } from 'react';
import Card from '../card';
import styles from './styles.module.css';
import { IBook } from '../../types/types';
import { useAppSelector } from '../../hooks/redux';

interface CardListProps {
    data?: IBook[]
}

const CardList: FC<CardListProps> = ({ data }) => {
    const {totalCount} = useAppSelector(state => state.bookReducer);

    return (
        <>
            {totalCount ? <div className={styles.total}>Found {totalCount} results</div> : null}
            <div className={styles.card_list}>
                {data?.map((item: IBook) => <Card key={item.etag} data={item}/>)}
            </div>
        </>
        
    );
};

export default CardList;