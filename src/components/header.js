import React, { useState } from 'react'
import { Button, Col, Form, Nav, Navbar, Row } from'react-bootstrap'
import { useNavigate } from 'react-router'
function Header() {
  const navigate=useNavigate()
  const [key,setkey]=useState()
  const Handleclick=()=>{
    navigate(`/search/${key}`)

  }
  return (
    <Navbar className="navbar-style" >
      <>
       <h4>User Details</h4>
        <Navbar.Collapse className='navbar-form'>
        <Form.Control style={{width:'200px',borderColor:'black',marginRight:'10px'}} placeholder='Search Name' type='text' onChange={e=>setkey(e.target.value)}></Form.Control>
        <Button onClick={Handleclick}>submit</Button>
        </Navbar.Collapse>
      </>
      
        
    </Navbar>
       
    
  )
}

export default Header