import React from 'react';
import styles from './BackButton.module.scss'
import { icons } from '../../../../public/assets/icons';
import Link from 'next/link';

type BackButtonProps = {
    navigatePage: string
}

const BackButton: React.FC<BackButtonProps> = ({navigatePage}) => {
    const Icon = icons.icon_arrow

    return (
        <div className={styles['container-back-btn']}>
            <Link 
                className={styles['router']}
                href={navigatePage}
                title='main-page'
                >
                <Icon width={22} height={30} fill='currentColor' className='arrow'/>
                
            </Link>
        </div>
    );
};

export default BackButton;