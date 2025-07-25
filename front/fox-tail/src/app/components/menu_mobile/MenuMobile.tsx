import styles from './MenuMobile.module.scss';
import Image from 'next/image';
import Link from 'next/link';


const itemsMenu = [
  {
    iconMenu: '/assets/icon_home.svg',
    route: '/home'
  },
  {
    iconMenu: '/assets/icon_calendario.svg',
    route: '/talk'
  },
  {
    iconMenu: '/assets/icon_home.svg',
    route: '/agendar'
  },
  {
    iconMenu: '/assets/icon_talk.svg',
    route: '/perfil'
  },
  {
    iconMenu: '/assets/icon_user.svg',
    route: '/verAgenda'
  }
];

const MenuMobile = () => {
    return (
        <div className={styles.menuContainer}>
            {itemsMenu.map((item, i) => (
                <Link href={item.route} key={i}>
                    <button className={styles.menuButton}>
                        <Image
                            src={item.iconMenu}
                            alt={`Ícone do menu ${i + 1}`}
                            width={24} // ajuste o tamanho conforme necessário
                            height={24} // ajuste o tamanho conforme necessário
                        />
                    </button>
                </Link>
            ))}
        </div>
    );
};

export default MenuMobile;