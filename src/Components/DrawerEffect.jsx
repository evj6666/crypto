import React from 'react'
import {
    Drawer,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import Sidenav from './Sidenav'
const DrawerEffect = ({isOpen,onOpen,onClose}) => {
  return (
    <div>
   
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
             <Sidenav />
          <DrawerFooter>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default DrawerEffect
