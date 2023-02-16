import { useState } from 'react'
// import react ui
import { CNavbar } from '@coreui/react'
import { CContainer } from '@coreui/react'
import { CNavbarToggler } from '@coreui/react'
import { CCollapse } from '@coreui/react'
import { CNavbarNav } from '@coreui/react'
import { CNavItem } from '@coreui/react'
import { CNavLink } from '@coreui/react'
import { CImage } from '@coreui/react'

// import css
import './NavBar.css'


 import React from 'react'
 
 export default function NavBar() {
    const [visible, setVisible] = useState(false)
   return (
    <div className='nav-bar' >
    <CNavbar expand="lg" colorScheme="light" className="transparent" id='nav-bar'>
      <CContainer fluid >
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className='space'>
            <CNavItem>
              <CNavLink href="/" style={{ color:"white"}}>Home</CNavLink>
              </CNavItem>
              <CNavItem>
              <CNavLink href="/movieapp" style={{ color:"white", paddingRight:"3em"}}>View Movies</CNavLink>
            </CNavItem>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  </div>
   )
 }
 