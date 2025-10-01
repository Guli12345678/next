import Header from '@/components/Header'
import React, { ReactNode } from 'react'

const MainLayout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <Header/>
        {children}

        <footer className='h-80 bg-slate-800'></footer>
    </div>
  )
}

export default MainLayout