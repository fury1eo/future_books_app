import SpinFC from 'antd/es/spin';
import styles from './styles.module.css';
import { LoadingOutlined } from '@ant-design/icons';

const Loader = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 100, color: '#000' }} spin />;

    return (
        <div className={styles.spinner}>
            <SpinFC size='large' indicator={antIcon}/>
        </div>
    );
};

export default Loader;