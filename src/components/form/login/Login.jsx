import './login.scss';
import Logo from '../../../assets/SwitchAppblack@2x.png'
import { Link } from 'react-router-dom';


export default function Login() {
  return (
            <div className="cover">
            <div className="card-cover">
                <img src={Logo} alt="logo" />
            <div className='card-content'>
                <h3>Sign in to your account</h3>
                <form    className='form' noValidate>
                    <div className='form-inputs'>
                        <input  className='form-input' type='email' name='email'  placeholder='Email'    />
                    </div>
                    <div className='form-inputs'>
                        <input   className='form-input' type='password' name='password' placeholder='Password' />
                    </div>
                    <button className='form-input-btn' type='submit'>
                        Continue
                    </button>
                    <span className='form-input-login'>
                            Don’t have an account? <Link to='#'>Sign up</Link>
                    </span>
                </form>
            </div>
            </div>
            

        </div>
  )
}
