import './form.scss';
import Logo from '../../../assets/SwitchAppblack@2x.png'
import Back from '../../../assets/vuesax-bulk-arrow-circle-left.svg'

import FormSign from './FormSign';
import { Link } from 'react-router-dom';
import Footer from '../../footer/Footer';
import Fade, { Rotate, Zoom } from 'react-reveal';

export default function Form() {

    
  return (
        <div className='container'>
                <Link to={'/'} className='previous'>
                    <Zoom left delay={500}>
                        <img src={Back} alt="" />
                        <p>Back</p>
                    </Zoom>
                </Link>
            <div className='cover-sign'>
                <div className='started'>
                <Rotate top left>
                    <img src={Logo} alt="" />
                </Rotate>
                    <Fade bottom cascade>
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
                    </Fade>

                </div>
                <Fade bottom cascade>
                    <FormSign/>
                </Fade>

            </div>
            <Footer/>
        </div>

  )
}
