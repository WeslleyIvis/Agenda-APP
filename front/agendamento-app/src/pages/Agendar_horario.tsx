import MenuMobile from "../components/Menu_mobile"
import iconSeta from "../assets/icon_seta.svg"

const AgendarHorario = () => {
    return (
        <>
            <div>
                <button 
                    style={{
                        background: 'rgb(33, 33, 33)', 
                        border: 'none',
                        borderRadius: '5px'
                    }}>
                    <img style={{padding: '5px 10px'}} src={iconSeta} alt=""/>
                </button>
            </div>
            <MenuMobile />
        </>
    )
}

export default AgendarHorario