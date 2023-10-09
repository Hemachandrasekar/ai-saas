import NavBar from '@/components/navbar'
import SideBar from '@/components/sidebar'
import React from 'react'

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full relative'>
      <div className='hidden md:flex md:flex-col md:w-72 h-full md:fixed bg-blue-950 z-[80]'>
        <SideBar />
      </div>
      <main className='md:pl-72'>
        <NavBar />
        {children}
      </main>


    </div>
  )
}

export default DashboardLayout