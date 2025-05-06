import './Header.css'
import Logo from './Logo'

function Header() {
  return (
    <div className='container-header'>
        <Logo />
        <h1 className='titulo'>Farmárcia</h1>
    </div>
  )
}

export default Header