import React, { useEffect, useState } from 'react'
import { Row ,Col, Table,Button, Pagination} from 'react-bootstrap'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router'
import { Link } from 'react-router-dom'
function Body() {
    const [user,setuser]=useState()
    const [count,setcount]=useState()
    const {pagenum}=useParams()
    const {key}=useParams()
    useEffect(()=>{
        const fetch=async()=>{
            const ans=await axios.get('http://localhost:5000/user/alluser?page='+pagenum+'&key='+key)
            setuser(ans.data.user)
            setcount(ans.data.count)
        }
        fetch()
    },[pagenum,key])
    console.log(user)
  const handledelte=async(id)=>{
    const res=await axios.delete('http://localhost:5000/user/delete/'+id)
    window.location.reload()

    
  }  
  const navigate=useNavigate()
  
  return (
    <>
     <Row className='my-4'>
        <Col md={8}>
           <h1></h1>
        </Col>
        <Col md={2}>
        <Button onClick={()=>navigate('/create')} >Create user</Button>
        </Col>
    </Row>
    <Table responsive>
        <thead>
            <tr>
                <th>Id</th>
                <th>name</th>
                <th>email</th>
                <th>edit</th>
                
            </tr>
        </thead>
        <tbody>
            { user &&  user.map((user)=>(
                <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <Button onClick={()=>navigate('/edit/'+user._id)}>edit</Button>
                    <Button onClick={()=>handledelte(user._id)}>Delete</Button>
                      </tr>

            ))
           
}
        </tbody>
    </Table>
    <Pagination >
       {count && [...Array(count).keys()].map(x=>(
        <Link className="pagination"to={`/page/${x+1}`}><p>{x+1}</p></Link>
       ))}
    </Pagination>

    </>
  )
}

export default Body