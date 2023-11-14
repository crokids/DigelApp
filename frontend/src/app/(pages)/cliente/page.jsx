import ClientTable from '@/components/clientTable'
import React from 'react'

export default function Home() {
 return (
  <div className='flex flex-col items-center justify-center'>
   <h1 className='mt-3'>Client Table</h1>
   <div className='container'>
    <div className='row'>
     <div className='col-md-12'>
      <ClientTable />
     </div>
    </div>

   </div>
  </div>
 )
}
