import React from 'react'
import style from '../styles/pages.module.css';
import Main from '@/components/Main';
import Navbar from '@/components/Navbar';

const page = () => {
  return (
    <div className={style.MainPageContainer}>
      <Main />
    </div>
  )
}

export default page
