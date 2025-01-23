import React from 'react'
import { AccordionDemo } from './components/AccordionDemo'
import { MenubarDemo } from './Navbar/MenubarDemo'
import { DrawerDemo } from './components/DrawerDemo'
import { TableDemo } from './components/TableDemo'
import { Separator } from "@/components/ui/separator"


function App() {
  return (
    < >
  

      <MenubarDemo  />
    <div className='justify-cente place-items-center h-screen  w-screen  container p-11'>
    
      <Separator />
      <TableDemo />
      <Separator />
      <AccordionDemo />
      <Separator />
      
    < DrawerDemo  />
    </div>
    </>)
}

export default App

