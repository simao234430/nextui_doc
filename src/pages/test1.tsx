import {Button}    from "@/nextui-org/react/components/button";
export default function Page() {
 
    // eslint-disable-next-line react/display-name
    return(  
      <div className="flex h-screen items-center justify-center"> 
   
   <div className="flex gap-4 items-center">
   <Button size="sm"  color="default">
        Small
      </Button>  
      <Button size="md"  color="secondary">
        Medium
      </Button>  
      <Button size="lg"  color="success">
        Large
      </Button>  
      </div>
     {/* <div>
     <p className="italic  ">The quick brown fox ...</p>
<p className="not-italic  first:">The quick brown fox ...</p>
     </div> */}
    </div>
    
)
  }