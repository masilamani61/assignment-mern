import axios from 'axios'
import React, { useState } from 'react'
import {Row,Col, Form, Button} from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router'
import Header from './header'
function Create() {
    const [name,setname]=useState('')
    
    const [pass,setpass]=useState('')
    
    const [email,setemail]=useState('')
    const navigate=useNavigate()

    const handlclick=async(e)=>{
        e.preventDefault()
        console.log(name,pass,email)
        const res=await axios.post('http://localhost:5000/user/create',{
            name,
            password:pass,
            email
        })
        if (res){
            navigate('/')
        }
    }
  return (
    <>
    <Header/>
        <Row className='justify-content-md-center my-4'>
            <Col md={7} >
        <Form >
            <Form.Label className='label'>name</Form.Label>
            <Form.Control className='border' placeholder='Name' value={name} type='text' onChange={e=>setname(e.target.value)} />
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Email' value={email} onChange={e=>setemail(e.target.value)}/>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='password' value={pass} onChange={e=>setpass(e.target.value)} />
            <Button type='submit' onClick={handlclick} style={{marginTop:'10px'}} classname='button'>Register</Button>
        
        </Form>
        </Col>
        </Row>
    </>

  )
}

export default Create