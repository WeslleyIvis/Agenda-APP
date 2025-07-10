import React from 'react'
import { IconProps } from '../../assets/icons';

interface PropsAutForm {
    items: {
        icon: React.FunctionComponent<IconProps> ;
        name: string;
        type: string;
        placeholder: string;
    }[];
    formValues: Record<string, string> ;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => void;
}

const AutForm: React.FC<PropsAutForm> = ({items, formValues, handleChange, handleSubmit}) => {
  return (
    <>
        <form className='containerForm' onSubmit={handleSubmit}>
            {items.map((item, i) => {
                const IconComponent = item.icon;
                return(
                        <label key={i}>
                            <IconComponent />
                            <input
                                type={item.type}
                                name={item.name}
                                placeholder={item.placeholder}
                                value={formValues[item.name] || ''}
                                onChange={handleChange}
                                required
                            /> 
                        </label>
                    )
                }
            )}
            <button type='submit'>Entrar</button>
        </form>
    </>
  )
}

export default AutForm
