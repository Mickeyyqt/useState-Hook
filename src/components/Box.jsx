import { useState } from 'react';
import FormBox from './Form';
import List from './List';

const Box = () => {
  const[userInfo, setUserInfo] =useState([]);

  const getUserInfo = (userInfoObj) =>{
    console.log(userInfoObj);
    setUserInfo([...userInfo, userInfoObj]);
  };
  return (
    <section className='Box'>
    <FormBox getUserInfo={getUserInfo}/>
    <List userInfo= {userInfo} />
   </section>
  )
}

export default Box