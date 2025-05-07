import iconSeta from "../../assets/icon_seta.svg"

type ButtonVoltar = {

}

const ButtonVoltar = () => {
  return (
    <div>
        <button 
            style={{
                background: 'rgb(33, 33, 33)', 
                border: 'none',
                borderRadius: '5px'
            }}
            type="button"    
        >
            <img style={{padding: '5px 10px'}} src={iconSeta} alt=""/>
        </button>
        <p>Lorem Impsum</p>
    </div>
  )
}

export default ButtonVoltar
