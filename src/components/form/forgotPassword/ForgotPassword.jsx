import './forgot.scss';
import Logo from '../../../assets/SwitchAppblack@2x.png'
import { Link } from 'react-router-dom';
import Footer from '../../footer/Footer';
import Back from '../../../assets/vuesax-bulk-arrow-circle-left.svg'
import Zoom from 'react-reveal';

export default function ForgotPassword() {
  return (
    <div className="forget">
               <Link to={'/'} className='previous'>
                    <Zoom left delay={500}>
                        <img src={Back} alt="" />
                        <p>Back</p>
                    </Zoom>
                </Link>
    <div className="card-cover">
        <img src={Logo} alt="logo" />
    <div className='card-content'>
        <h3>Forgot Password</h3>
        <form    className='form' noValidate>
            <div className='form-inputs'>
                <input  className='form-input' type='email' name='email'  placeholder='Email'    />
            </div>
            <button className='form-input-btn' type='submit'>
                Continue
            </button>
            <span className='form-input-login'>
                    Don’t have an account? <Link to='/sign-up'>Sign up</Link>
            </span>
        </form>
    </div>
    </div>

<Footer/>
</div>
  )
}
