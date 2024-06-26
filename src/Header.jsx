import Topmenu from './Topmenu'
import './Header.scss'

function Header(props) { 
  return (   
    <header className="header">
      <div className="header__sitename">
        Flourish and Blott
      </div>    
      < Topmenu  />   
    </header>
)
}

export default Header
