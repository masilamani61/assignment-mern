import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Navigate, useNavigate, useParams } from 'react-router'
import Header from './header'

function Edit() {
    const [user,setuser]=useState()
    const [name,setname]=useState()
    const [email,setemail]=useState()
    const {id}=useParams()
    const navigate=useNavigate()
       
    useEffect(()=>{
        const fetch=async()=>{
            const ans=await axios.get('http://localhost:5000/userid/'+id)
            setuser(ans.data)
        }
        fetch()
    },[])
    useEffect(()=>{
        if (user){
            setname(user.name)
            setemail(user.email)
        }
    },[user])
    const handlclick=async(e)=>{
        e.preventDefault()
        const res=await axios.put('http://localhost:5000/user/update/'+id,{
            name,email
        })
        if (res){
            navigate('/')
        }



        console.log(res)
    }
  return (
    
    <>
    <Header/>
        {user &&
        <Row className='justify-content-md-center my-4'>
            <Col md={7}>
        <Form >
            <Form.Label >name</Form.Label>
            <Form.Control  value={name} type='text' onChange={e=>setname(e.target.value)} />
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' value={email} onChange={e=>setemail(e.target.value)}/>
            <Button type='submit' style={{marginTop:'10px'}} onClick={handlclick}>update</Button>
        
        </Form>
        </Col>
        </Row>
        }
    </>
  )
}

export default Edit