import { useRouter } from 'next/router'
import { MainNavigation } from './MainNavigation'

export const Container: FC<any> = ({ children, ...customMeta }) => {
    const router = useRouter()
  
   
  
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