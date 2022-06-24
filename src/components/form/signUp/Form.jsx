import './form.scss';
import Logo from '../../../assets/SwitchAppblack@2x.png'
import FormSign from './FormSign';

export default function Form() {

    
  return (
    <div className='container'>

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
    </div>
  )
}
