import { useRouter } from 'next/router'
import { MainNavigation } from './MainNavigation'
import { FC } from 'react'

export const Container: FC<any> = ({ children, ...customMeta }) => {
 
  
   
  
    return (
      <>
          <MainNavigation />
 
          <div className="flex min-h-screen flex-col justify-between">
            <main className="relative pt-16" style={{ scrollPaddingTop: '150px' }}>
              {children}
            </main>
 
          </div>
 
    
      </>
    )
  }