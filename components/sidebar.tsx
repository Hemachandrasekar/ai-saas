'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Montserrat} from "next/font/google"
import {usePathname} from 'next/navigation'
import {Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, Video} from 'lucide-react'

import {cn} from '@/lib/utils'

const montserrat = Montserrat({
  weight:'600',
  subsets:['latin']
})

const routes=[
  {
    label : 'Dashboard',
    icon : LayoutDashboard,
    href : '/dashboard',
    color : 'text-sky-500'
  }, 
  {
    label : 'Conversation',
    icon : MessageSquare,
    href : '/conversation',
    color : 'text-violet-500'
  }, 
  {
    label : 'Image Generation',
    icon : ImageIcon,
    href : '/image',
    color : 'text-pink-700'
  },
  {
    label : 'Music Generation',
    icon : Music,
    href : '/music',
    color : 'text-emerald-700'
  },
  {
    label : 'Video Generation',
    icon : Video,
    href : '/video',
    color : 'text-orange-700'
  },
  {
    label : 'Code Generation',
    icon : Code,
    href : '/code',
    color : 'text-green-700'
  },
  {
    label : 'Settings',
    icon : Settings,
    href : '/settings',
    
    
  }
]

const SideBar = () => {
  const pathname = usePathname()
  return (
    <div className='space-y-4 py-4 h-full flex flex-col bg-[#111827] text-white '>
        <div className='px-3 py-2 flex-1'>
          <Link href="/dashboard" className='flex item-center pl-3 mb-14'>
          
          <div className='relative w-8 h-8 mr-4'>
              <Image fill alt="logo" src="/logo.png"></Image>
          </div>
              <h1 className={cn('text-2xl font-bold',montserrat.className)}>AI-Saas </h1>
          </Link>
          <div className='space-y-1'>
            {routes.map((item) => (
              <Link href={item.href} key={item.href} className={cn('text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',pathname === item.href ? 'text-white bg-white/10' : 'text-zinc-400')}>
                <div className='flex items-center flex-1'>
                            <item.icon className={cn('h-5w-5 mr-3',item.color)} />
                            {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
    </div>
  )
}

export default SideBar