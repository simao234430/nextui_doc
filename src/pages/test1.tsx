import Button from "@/nextui-org/react/components/button/button";
import {Spinner}    from "@/nextui-org/react/components/spinner";
export default function Page() {
 
    // eslint-disable-next-line react/display-name
    return(  
      <div className="flex h-screen items-center justify-center"> 
   
   <div className="flex flex-wrap gap-4 items-center">
      <Button color="default">
        Default
      </Button>
      <Button color="primary">
        Primary
      </Button>  
      <Button color="secondary">
        Secondary
      </Button>  
      <Button color="success">
        Success
      </Button>  
      <Button color="warning">
        Warning
      </Button>  
      <Button color="danger">
        Danger
      </Button>  
    </div>
     {/* <div>
     <p className="italic  ">The quick brown fox ...</p>
<p className="not-italic  first:">The quick brown fox ...</p>
     </div> */}
    </div>
    
)
  }