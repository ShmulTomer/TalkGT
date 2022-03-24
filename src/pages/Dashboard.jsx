import React, { useEffect, useState } from "react";
import "../styles.css"
import BasicTable from "../components/dashboard/BasicTable";
import { supabase } from "../supabaseClient";
import ComplaintBox from "../components/dashboard/ComplaintBox";



function Dashboard() {

    const [cells, setCells] = useState([]);

    const getData = async () => {
        const { data, error } = await supabase.from('ComplaintDB').select('*');
        /*
        const { data, error } = await supabase
  .from('books')
  .select(
    'title,description:metadata->description,price:metadata->price,low_age:metadata->ages->0,high_age:metadata->ages->1'
  ) */

      setCells(data);
    };

    const columns = React.useMemo(
        () => [
            {
            Header: "Date",
            accessor: "date" // accessor is the "key" in the data
          },
          {
            Header: "Time",
            accessor: "time" // accessor is the "key" in the data
          },
          {
            Header: "Username",
            accessor: "username" // accessor is the "key" in the data
          },
          {
            Header: "Title",
            accessor: "title" // accessor is the "key" in the data
          },
          {
            Header: "Subject",
            accessor: "subject" // accessor is the "key" in the data
          },
          {
            Header: "Description",
            accessor: "description"
          },
          {
            Header: "Priority",
            accessor: "priority"
          },
          {
            Header: "Anonymous",
            accessor: "anon" // accessor is the "key" in the data
          },
        ],
        []
      );

    useEffect(() => {
        getData()
      }, []);
      
     const data = React.useMemo(() => cells, []);
     //console.log(cells);

     /*
     
     
     */

    return <div className="App">
    <header className="App-header">
        <p ><b><i>
        Dashboard</i></b>
        </p>
        <br></br>
    </header>
    <ComplaintBox date="2022-01-01" time="9:00" user="Tomer Shmul" title="Student at GT" subj="Subject" desc="Description" prior="true" anon="false" /> 

    <br></br><br></br>
    
    <button onClick={getData}> Refresh</button > 

    
    {cells && <BasicTable columns={columns} data={cells} />}
    

    
    </div>;
};

export default Dashboard;
