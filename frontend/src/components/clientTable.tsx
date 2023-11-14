'use client';

import React, { useEffect, useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component';
import { useRouter } from 'next/navigation';

interface DataRow {
 KEY: number;
 CLIENTE: string;
 COD: number;
 CIDADE: string;
}

export default function ClientTable() {
 const router = useRouter();

 const columns: TableColumn<DataRow>[] = [
  {
   name: 'Key',
   selector: (row: DataRow) => row.KEY,
  },
  {
   name: 'Cliente',
   selector: (row: DataRow) => row.CLIENTE,
  },
  {
   name: 'Código',
   selector: (row: DataRow) => row.COD,
  },
  {
   name: 'Cidade',
   selector: (row: DataRow) => row.CIDADE,
  },
 ];

 const [data, setData] = useState([]);
 const [search, setSearch] = useState('');
 const [filter, setFilter] = useState([]);

 const getTableData = async () => {
  try {
   const req = await fetch("http://localhost:3001/api/tableinfo");
   const res = await req.json();
   setData(res.data);
   setFilter(res.data);

  } catch (error) {
   console.log(error);
  }
 }

 useEffect(() => {
  getTableData();

 }, [])

 useEffect(() => {
  const result = data.filter((item: any) => {

   return item.CLIENTE.toLowerCase().match(search.toLocaleLowerCase());

  });
  setFilter(result);

 }, [search, data])


 return (

  <DataTable
   columns={columns}
   data={filter}
   onRowClicked={(row, event) => {
    router.push(`/pedido/${row.COD}`)
   }}
   pagination
   fixedHeader
   selectableRows
   selectableRowsHighlight
   highlightOnHover
   subHeader
   responsive
   striped
   subHeaderComponent={
    <input type='text'
     className='form-control'
     placeholder='Search...'
     value={search}
     onChange={(e) => setSearch(e.target.value)}
    />
   }
  />

 );

};