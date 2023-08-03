import {Component} from 'solid-js';
import { A } from "@solidjs/router";
import  AgGridSolid  from "ag-grid-solid";

// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';

// import { 
//   createSolidTable,
//   SortingState,
//   ColumnDef,
// } from '@tanstack/solid-table'
//
// const table = createSolidTable({
//     // get data() {
//     //   return data()
//     // },
//     // columns: defaultColumns,
//     // getCoreRowModel: getCoreRowModel(),
// })

function Schedule() {

  const tableStyles = "vertCentered bg-onedark w-fit p-3 px-4 rounded-full";

  // const columnDefs = [
  //   { field: 'make' },
  //   { field: 'model' },
  //   { field: 'price' },
  // ];
  //
  // const rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxster', price: 72000 },
  // ];
  //
  // const defaultColDef = {
  //   flex: 1,
  // };

  return (
    <>
    {/* <div class="ag-theme-alpine"> */}
    {/*   <AgGridSolid */}
    {/*     columnDefs={columnDefs} */}
    {/*     rowData={rowData} */}
    {/*     defaultColDef={defaultColDef} */}
    {/*   /> */}
    {/* </div> */}
    </>
  );
}

export default Schedule;

