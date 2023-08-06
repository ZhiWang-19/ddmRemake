import {Component, For, createResource, createMemo} from 'solid-js';
import { A } from "@solidjs/router";

import  AgGridSolid  from "ag-grid-solid";
import {dateDistance} from "~/utils"

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

import "~/css/table.css"

import scheduleData from '../../schedule.json'


// export async function loadJson(query) {
//
//   const response = await fetch("src/schedule.json");
//   const res = await response.json();
//   const curYr = res[query];
//
//   // console.log(curYr);
//   return curYr;
// }

function Schedule() {
  // const [rowData] = createResource(2023, loadJson);
  // console.log(scheduleData);

  // determine the current year and if it is Fall semester
  let curT = new Date();
  let curY = curT.getFullYear();
  let curM = curT.getMonth() + 1;
  let curD = curT.getDate();
  let curFullDate= curY + "-" + curM + "-" + curD;

  if (curM <= 6)
  curY = curY - 1;

  const columnDefs = [
    { headerName: "Class", 
      field: 'class',
      flex: 1,
      cellClass: 'ag-grid-center' 
    },
    { headerName: "Date", 
      field: 'date', 
      flex: 1,
      cellClass: 'ag-grid-center'
    },
    { headerName: "Topic", 
      field: 'topic', 
      flex: 2,
    },
  ];

  const rowData = scheduleData[curY];

  // ag-grid styles
  const defaultColDef = {
    flex: 1,
    editable: false,
    // suppressNavigable: true,
    // cellClass: 'no-border'
  };


  const gridOptions = {
    domLayout: 'autoHeight',
    columnDefs: columnDefs,
    // defaultColDef: {
    //   flex: 1,
    //   editable: false,
    //   // suppressNavigable: true,
    //   // cellClass: 'no-border'
    // },

    suppressCellFocus: true,
    suppressRowClickSelection: true,
    // rowSelection: 'single',
    rowData: rowData,
    rowClassRules: {
      'current-week': (params) => {
        // curFullDate = "2023-09-29";
        let weekDiff = Math.ceil(dateDistance(params.data.date, curFullDate) / 7);

        // conditional return
        if (weekDiff < 0)
        return Number(params.data.class) === 10;
        if (weekDiff > 7)
        return Number(params.data.class) === 1;

        return weekDiff === 0;

      },
    }
  }


  // todo: add auto selection of the current week
  return (
    <>

      <div text-slate-8 grid text-center mx-auto mb-2 py-4 dark:text-white-2>
        <h2 mb-0>
          2023 Fall Schedule
        </h2>
        <h4>Tuesday, 12:45 - 15:30 <br /> (exception: Final Review)</h4>
      </div>

      <Show
        when={rowData}
        fallback={
          <h3>schedule not loaded successfully...</h3>
        }
      >
        <div dark pb-10 class="ag-theme-material ag-grid">
          <AgGridSolid
            gridOptions = {gridOptions}
            rowSelection = {'single'}
          />
        </div>
      </Show>

    </>
  );
}

export default Schedule;

