import { useNavigate } from 'react-router-dom';

import iconAgenda from '../assets/icon_agenda.svg'
import iconCalendario from '../assets/icon_calendario.svg';
import iconHome from '../assets/icon_home.svg';
import iconTalk from '../assets/icon_talk.svg';
import iconUser from '../assets/icon_user.svg';

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
]

const MenuMobile = () => {
    const navigate = useNavigate()

    return (
        <div style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                padding: '20px 0',
                gap: '50px', 
                borderRadius: '10px 10px 0 0',
                background: 'rgb(56, 49, 58)'
            }}>
            {itemsMenu.map((item, i) => (
                <button 
                    key={i} 
                    style={{background: 'transparent', border: 'none'}}
                    onClick={() => navigate(item.route)}
                >
                    <img 
                        src={item.iconMenu}
                        alt={`Ícone ${i}`}
                        style={{width: '23px', height: '23px'}}
                    />
                </button>
            ))}
        </div>
    )
}

export default MenuMobile