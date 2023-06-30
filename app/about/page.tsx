import React from 'react'
import style from '@/styles/pages.module.css';
import About from '@/components/About';

const page = () => {
  return (
    <div className={style.AboutPageContainer}>
        <About />
    </div>
  )
}

export default page
