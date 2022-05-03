import { Badge, Input } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import './navbar.css';

function Navbar() {
  return (
    <header>
      <div className='eiregifts-nav-content'>
        <div className='left'>
          <h1>ÉIRE GIFTS</h1>
        </div>
        <div className='center'>
          <div className='language'>EN</div>
          <div className='search-container'>
            <Input style={{color: "white", fontSize: 14, fontWeight: 100}}/>
            <Search style={{color: "gray", fontSize: 16}}/>
          </div>
        </div>
        <div className='right'>
          <div className='menu-item'>REGISTER</div>
          <div className='menu-item'>SIGN IN</div>
          <div className='menu-item'>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Navbar;