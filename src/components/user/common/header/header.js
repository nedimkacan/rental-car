import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import settings from '../../../../helpers/settings'
import logo from '../../../../assets/img/logo/logo.png'
import Topbar from './topbar'
import Menubar from './menubar'
import './header.scss'

const Header = () => {
  return (
    <Container>
      <div className='header'>
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt={settings.siteName} className='img-fluid' />
          </Link>
        </div>
        <div className="menus">
          <Topbar />
          <Menubar />
        </div>
      </div>
    </Container>
  )
}

export default Header