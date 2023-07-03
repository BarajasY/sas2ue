import React from 'react'
import style from '../styles/pages.module.css';
import Main from '@/components/Main';
import About from '@/components/About';
import ImagesCollage from '@/components/ImagesCollage';

const page = () => {
  return (
    <div className={style.MainPageContainer}>
      <Main />
      <About />
      <ImagesCollage />
    </div>
  )
}

export default page
