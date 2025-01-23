import React from 'react'
import { AccordionDemo } from './components/AccordionDemo'
import { MenubarDemo } from './Navbar/MenubarDemo'
import { DrawerDemo } from './components/DrawerDemo'
import { TableDemo } from './components/TableDemo'
import { Separator } from "@/components/ui/separator"
import { Component } from './components/Component'


function App() {
  return (
    < >
  

      <MenubarDemo  />
    <div className='justify-center  place-items-center h-screen  w-screen  container p-11'>
    
      <Separator />
      <TableDemo />
      <Separator />
      <AccordionDemo />
      <Separator />
      
    < DrawerDemo  />
    </div>
    <Component/>
    </>)
}

export default App

