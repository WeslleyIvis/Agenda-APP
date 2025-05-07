import { useNavigate } from 'react-router-dom';
import styles from './MenuMobile.module.scss';

import iconAgenda from '../../assets/icon_agenda.svg';
import iconCalendario from '../../assets/icon_calendario.svg';
import iconHome from '../../assets/icon_home.svg';
import iconTalk from '../../assets/icon_talk.svg';
import iconUser from '../../assets/icon_user.svg';

const itemsMenu = [
  {
    iconMenu: iconHome,
    route: '/home'
  },
  {
    iconMenu: iconTalk,
    route: '/talk'
  },
  {
    iconMenu: iconCalendario,
    route: '/agendar'
  },
  {
    iconMenu: iconUser,
    route: '/perfil'
  },
  {
    iconMenu: iconAgenda,
    route: '/verAgenda'
  }
];

const MenuMobile = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.menuContainer}>
      {itemsMenu.map((item, i) => (
        <button
          key={i}
          className={styles.menuButton}
          onClick={() => navigate(item.route)}
        >
          <img
            src={item.iconMenu}
            alt={`Ícone ${i}`}
          />
        </button>
      ))}
    </div>
  );
};

export default MenuMobile;