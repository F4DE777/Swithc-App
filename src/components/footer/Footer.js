import './footer.scss'
import Fade from 'react-reveal';

export default function Footer() {
  return (
    <Fade bottom cascade>
      <div className='footer'>
          <p>&copy; &nbsp;Switch App</p>
          <p>Privacy & terms</p>
      </div>
    </Fade>

  )
}
