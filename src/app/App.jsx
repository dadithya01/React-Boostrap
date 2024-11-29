import { useState, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyCard,{MyCard1, MyCard2} from '../component/MyCard/MyCard'
import Button from '../component/Button/Button'
import TextField from '../component/TextField/TextField.jsx'
import Dashboard from "../pages/Dashboard/Dashboard";
import User from "../pages/User/User";
import {Routes, Route, Navigate} from 'react-router-dom'

function App() {

    const [data, setData] = useState('ACPT');

    useEffect(()=> {
        ClickA()
        console.log('ACPT')
    },[data])

    const ClickA = () => {
        console.log('A')
    }

  return (
    <div>
      {/* <h1>Chamikara</h1>
      <h2>Beruwala</h2>
      <button>Button</button> */}
      {/* <MyCard/>
      <MyCard1/>
      <MyCard2/> */}
        {/*<h1>{data}</h1>*/}
      {/* button  */}
      {/*<Button name={'Chamikara'} bgColor={'green'} onClick={(val)=>setData(val)}/>*/}
      {/*<br /><br />*/}
      {/*<Button name={'Add Me'} onClick={(val)=>setData(val)}/>*/}
      {/*<br /><br />*/}
      {/*<Button name={'Submit'} bgColor={'black'} onClick={(val)=>setData(val)}/>*/}
      {/*<br /><br />*/}
      {/*<Button name={'Next'} bgColor={'purple'} onClick={(val)=>setData(val)}/>*/}
      {/*  <br/><br/>*/}
      {/*  <TextField onChange={(val)=> setData(val)} placeholder={'Input Name'} type='text'/>*/}
      {/*  <Dashboard/>*/}
      {/*  <User/>*/}
        <Routes>
            <Route path="*" element={<Navigate to={'/dashboard'}/>}/>
            <Route path={'/dashboard'} element={<Dashboard/>}/>
            <Route path={'/user'} element={<User/>} />
        </Routes>
    </div>
  )
}

export default App
