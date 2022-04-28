import React, { useState } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import NameCustomComponent from './component';


const empList = [
  { company: 1, camera1: "3 persons, 1 car, 1 bottle, 1 tv", camera2: " chairs, 1 tv, 1 person", status: 0, dob: 'Tue, 19 April 12:16:29' },
  { company: 2, camera1: " persons, 2 chairs, 1 tv,", camera2: " 3 chairs, 2 tv, 5 person", status: 1, dob: 'Tue, 19 April 12:16:31' },
  { company: 3, camera1: "4 persons, 1 bottle, 2 chairs, 1 tv,", camera2: "2 person", status: 2, dob:'Tue, 19 April 12:16:32' },
  { company: 4, camera1: "3 persons, 1 bottle, 2 chairs, 1 tv,", camera2: "3 persons, 1 bottle, 2 chairs", status: 0, dob: 'Tue, 19 April 12:16:34' },
  { company: 1, camera1: "3 persons, 1 car, 1 bottle, 1 tv", camera2: " chairs, 1 tv, 1 person", status: 0, dob: 'Tue, 19 April 12:16:29' },
  { company: 2, camera1: "3 persons, 2 chairs, 1 tv,", camera2: " 3 chairs, 2 tv, 5 person", status: 1, dob: 'Tue, 19 April 12:16:31' },
  { company: 3, camera1: "4 persons, 1 bottle, 2 chairs, 1 tv,", camera2: "2 person", status: 2, dob:'Tue, 19 April 12:16:32' },
  { company: 4, camera1: "3 persons, 1 bottle, 2 chairs, 1 tv,", camera2: "3 persons, 1 bottle, 2 chairs", status: 0, dob: 'Tue, 19 April 12:16:34' },
]

function App() {

  const [data] = useState(empList)

  const columns = [
    { title: "company", field: 'company' },
    {
      title: "camera 1", field: "camera1", render: (row) => <NameCustomComponent name={row.camera1} />
    },
    { title: "camera x", field: "camera2" },
    {
      title: "Status", field: 'status', render: (row) => <div className={row.status ? "high " : "low" }>
        {row.status ? "High" : "Low"}
      </div>
    },
    { title: "Date", field: "dob", }
  ]


  return (
    <div className="App">
      <h1 align="center">Fraction Webapp</h1>
      <h4 align='center'>Ag-grid custom color coding ( cell rendering )</h4>
      <MaterialTable
      // style={{
        
      //   backgroundColor: "pink"
      // }}
        title="video camera data's"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default App;
