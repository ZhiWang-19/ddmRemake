import {
  Component,
  createResource,
  createSignal,
  For,
  onMount,
} from "solid-js";
import { refetchRouteData, useRouteData } from "solid-start";

import { A } from "@solidjs/router";

import AgGridSolid from "ag-grid-solid";
import { dateDistance } from "~/utils";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

import "~/css/table.css";
import { presetTypography } from "unocss";

function prepareGridOpt() {
  let curT = new Date();
  let curY = curT.getFullYear();
  let curM = curT.getMonth() + 1;
  let curD = curT.getDate();
  let curFullDate = curY + "-" + curM + "-" + curD;

  // start to count current year from the summer
  if (curM <= 6) {
    curY = curY - 1;
  }

  // ag-grid defs
  const columnDefs = [
    {
      headerName: "Class",
      field: "class",
      flex: 1,
      cellClass: "ag-grid-center",
    },
    { headerName: "Date", field: "date", flex: 1, cellClass: "ag-grid-center" },
    { headerName: "Topic", field: "topic", flex: 2 },
  ];

  // ag-grid styles
  const defaultColDef = {
    flex: 1,
    editable: false,
    // suppressNavigable: true,
    // cellClass: 'no-border'
  };

  const gridOpt = {
    domLayout: "autoHeight",
    columnDefs: columnDefs,

    suppressCellFocus: true,
    suppressRowClickSelection: true,
    // rowSelection: 'single',
    // rowData: rowData,
    rowClassRules: {
      "current-week": (params) => {
        // const curFullDate = "2023-10-10";
        let weekDiff = Math.ceil(
          dateDistance(params.data.date, curFullDate) / 7,
        );

        // conditional return
        if (weekDiff < 0) {
          return Number(params.data.class) === 10;
        }
        if (weekDiff > 7) {
          return Number(params.data.class) === 1;
        }

        return weekDiff === 0;
      },
    },
  };

  return { curY, gridOpt };
}

function Schedule() {
  // const [scheduleData] = createResource(async () => {
  //   const res = await fetch("/schedule.json");
  //   return await res.json();
  // });

  const  scheduleData  = useRouteData();
  onMount (() => {
    refetchRouteData();
  })

  const { curY, gridOpt } = prepareGridOpt();

  // todo: add auto selection of the current week
  return (
    <>
      <div text-slate-8 grid text-center mx-auto mb-2 py-4 dark:text-white-2>
        <h2 mb-0>
          2023 Fall Schedule
        </h2>
        <h4>
          Time: &nbsp 12:45 - 15:30
          <br />
          &nbsp Location: &nbsp LVML (HIL H 40.8)
        </h4>
      </div>

      <Show
        when={scheduleData.latest}
        fallback={<h3>schedule not loaded successfully...</h3>}
      >
        <div dark pb-10 class="ag-theme-material ag-grid">
          <AgGridSolid
            gridOptions={gridOpt}
            rowData={scheduleData.latest[curY]}
            rowSelection={"single"}
          />
        </div>
      </Show>
    </>
  );
}

export default Schedule;
