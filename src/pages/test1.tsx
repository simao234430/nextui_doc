import Button from "@/nextui-org/react/components/button/button";
import {Spinner}    from "@/nextui-org/react/components/spinner";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@/nextui-org/react/components/table";
export default function Page() {
 
    // eslint-disable-next-line react/display-name
    return(  
      <div className="flex h-screen items-center justify-center"> 
   
   <div className="flex flex-wrap gap-4 items-center">
   <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Zoey Lang</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell>Paused</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Jane Fisher</TableCell>
          <TableCell>Senior Developer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>William Howard</TableCell>
          <TableCell>Community Manager</TableCell>
          <TableCell>Vacation</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    </div>
     {/* <div>
     <p className="italic  ">The quick brown fox ...</p>
<p className="not-italic  first:">The quick brown fox ...</p>
     </div> */}
    </div>
    
)
  }