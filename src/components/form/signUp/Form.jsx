import './form.scss';
import Logo from '../../../assets/SwitchAppblack@2x.png'
import Back from '../../../assets/vuesax-bulk-arrow-circle-left.svg'

import FormSign from './FormSign';
import { Link } from 'react-router-dom';
import Footer from '../../footer/Footer';

export default function Form() {

    
  return (
    <div className='container'>
        <Link to={'/'} className='previous'>
            <img src={Back} alt="" />
            <p>Back</p>
        </Link>
        <div className='cover'>
            <div className='started'>
                <img src={Logo} alt="" />
                <ul className='start'>
                    <li>
                        <h5>Get started quickly</h5>
                        <p>Integrate with developer-friendly APIs or choose low-code or pre-built solutions.</p>
                    </li>
                    <li>
                        <h5>Support any business model</h5>
                        <p>E-commerce, subscriptions, SaaS platforms, marketplaces, and more—all within a unified platform.</p>
                    </li>
                    <li>
                        <h5>Join millions of businesses</h5>
                        <p>Switch App is trusted by ambitious startups and enterprises of every size.</p>
                    </li>
                </ul>
            </div>
                <FormSign/>
        </div>
        <Footer/>
    </div>
  )
}
