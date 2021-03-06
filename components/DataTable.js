import React from "react";
import reactDom from "react-dom";
import { MDBDataTableV5 } from 'mdbreact';
import { useState } from "react";
import { green, yellow } from "@material-ui/core/colors";

function DataTable ({data2, columns2}){
    const [datatable, setDatatable] = useState({
        columns: [
          {
            label: 'Name',
            field: 'name',
            minWidth: 250,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'Name',
            },
          },
          {
            label: 'Position',
            field: 'position',
            width: 270,
          },
          {
            label: 'Office',
            field: 'office',
            width: 200,
          },
          {
            label: 'Age',
            field: 'age',
            sort: 'asc',
            width: 100,
          },
          {
            label: 'Start date',
            field: 'date',
            sort: 'disabled',
            width: 150,
          },
          {
            label: 'Salary',
            field: 'salary',
            sort: 'disabled',
            width: 100,
          },
        ],
        rows: [
          {
            name: 'Tiger Nixon',
            position: 'System Architect',
            office: 'Edinburgh',
            age: '61',
            date: '2011/04/25',
            salary: '$320',
          },
          {
            name: 'Garrett Winters',
            position: 'Accountant',
            office: 'Tokyo',
            age: '63',
            date: '2011/07/25',
            salary: '$170',
          },
          {
            name: 'Ashton Cox',
            position: 'Junior Technical Author',
            office: 'San Francisco',
            age: '66',
            date: '2009/01/12',
            salary: '$86',
          },
          {
            name: 'Cedric Kelly',
            position: 'Senior Javascript Developer',
            office: 'Edinburgh',
            age: '22',
            date: '2012/03/29',
            salary: '$433',
          },
          {
            name: 'Airi Satou',
            position: 'Accountant',
            office: 'Tokyo',
            age: '33',
            date: '2008/11/28',
            salary: '$162',
          },
          {
            name: 'Brielle Williamson',
            position: 'Integration Specialist',
            office: 'New York',
            age: '61',
            date: '2012/12/02',
            salary: '$372',
          },
        ],
      });

    return(
        <div className="text-[black]">
            <MDBDataTableV5 className="bg-[#5858a3] w-[80vw] h-[80vh]"
                responsiveXl
                bordered
                hover entriesOptions={[50, 100, 150]} 
                entries={50} 
                pagesAmount={4} 
                data={datatable} 
                searchTop 
                searchBottom={false}
                theadColor="black"
                theadTextWhite 
            >
            </MDBDataTableV5>
        </div>
    )

}
export default DataTable
