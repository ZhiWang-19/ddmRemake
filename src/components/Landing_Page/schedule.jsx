import {Component} from 'solid-js';
import { A } from "@solidjs/router";

import  AgGridSolid  from "ag-grid-solid";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';


function Schedule() {

  const tableStyles = "vertCentered bg-onedark w-fit p-3 px-4 rounded-full agGrid";
  const tableSty = "table-auto agGrid";

  const columnDefs = [
    { field: 'Week' },
    { field: 'Date' },
    { field: 'Topic' },
  ];

  const rowData = [
    { Week: '1', Date: '01/09', Topic: "Introduction" },
    { Week: '2', Date: '02/09', Topic: "Rhino + GH Intro"},
    { Week: '3', Date: '03/09', Topic: "GH Intro 2"},
  ];

  const defaultColDef = {
    flex: 1,
    editable: false,
    // selectable: false,
  };

  return (
    <>

      <div text-slate-8 grid text-center mx-auto mb-10 py-4 dark:text-white-2>
        <h2 mb-0>
          2023 Fall Schedule
        </h2>
      </div>

      <div class="ag-theme-material agGrid">
        <AgGridSolid
          columnDefs={columnDefs}
          rowData={rowData}
          defaultColDef={defaultColDef}
        />
      </div>
    </>
  );
}

export default Schedule;

