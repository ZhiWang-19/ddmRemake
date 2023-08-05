import {Component, For, createResource} from 'solid-js';
import { A } from "@solidjs/router";

import  AgGridSolid  from "ag-grid-solid";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

import "~/css/table.css"


export async function loadJson(query) {

  const response = await fetch("src/schedule.json");
  const res = await response.json();
  const curYr = res[query];

  // console.log(curYr);
  return curYr;
}

function Schedule() {


  // todo: craete multiple entry in the schedule.json for different years
  const [rowData] = createResource(2023, loadJson);

  const columnDefs = [
    { headerName: "Week", field: 'week' },
    { headerName: "Date", field: 'date' },
    { headerName: "Topic", field: 'topic' },
  ];

  const defaultColDef = {
    flex: 1,
    editable: false,
    // suppressNavigable: true,
    // cellClass: 'no-border'
  };

  const gridOptions = {
    suppressCellFocus: true
  }

  // todo: add auto selection of the current week
  return (
    <>

      <div text-slate-8 grid text-center mx-auto mb-10 py-4 dark:text-white-2>
        <h2 mb-0>
          2023 Fall Schedule
        </h2>
      </div>

      <div dark class="ag-theme-material ag-grid">
        <AgGridSolid
          gridOptions = {gridOptions}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection={'single'}
          rowData={rowData()}
        />
      </div>
    </>
  );
}

export default Schedule;

