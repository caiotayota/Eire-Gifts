import { Badge, Input } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import './navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className='eiregifts-nav-content'>
        <div className='left'>
          <h1><Link to="/">ÉIRE GIFTS</Link></h1>
        </div>
        <div className='center'>
          <div className='search-container'>
            <Input style={{color: "white", fontSize: 14, fontWeight: 100, width: "300px"}}/>
            <Search style={{color: "gray", fontSize: 16}}/>
          </div>
        </div>
        <div className='right'>
          <div className='menu-item'><Link to="/register" >SIGN UP</Link></div>
          <div className='menu-item'><Link to="/login">LOGIN</Link></div>
          <div className='menu-item'><Link to="/cart">
            <Badge badgeContent={0} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </Link>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Navbar;