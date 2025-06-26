import '../SignUpFormProfessional/SignUpFormProfessional.scss';
import { CiUser } from 'react-icons/ci';
import { MdOutlineEmail } from 'react-icons/md';
import { CiPhone } from 'react-icons/ci';
import { FaRegEye } from 'react-icons/fa6';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const SingUpFormProfessional = () => {
  return (
    <div className="signup-container">
      <MdOutlineArrowBackIosNew className="back-icon" />
      <h1>Novo Profissional</h1>
      
      <form className="signup-form">

        <div className="form-group">
          <label htmlFor="name"></label>
          <input type="text" id="name" placeholder="Nome" required/>
          <CiUser className="input-icon"/>
        </div>

        <div className="form-group">
          <label htmlFor="name"></label>
          <input type="text" id="email" placeholder="Email" required/>
          <MdOutlineEmail className="input-icon"/>
        </div>
        
        <div className="form-group">
          <label htmlFor="name"></label>
          <input type="text" id="phone" placeholder="Celular" required/>
          <CiPhone className="input-icon"/>
        </div>
        
        <div className="form-group">
          <label htmlFor="password"></label>
          <input type="password" id="password" placeholder="Senha" required/>
          <FaRegEye className="input-icon"/>
        </div>
        
        <div className="form-group">
          <label htmlFor="confirm-password"></label>
          <input type="password" id="confirm-password" placeholder="Confirmar Senha" required/>
          <FaRegEye className="input-icon"/>
        </div>
        
      </form>
      <button type="submit" className="create-button">Criar</button>
    </div>
  );
};

export default SingUpFormProfessional;