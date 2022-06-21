import React, { useEffect, useState } from "react";
import "../styles.css"

import { supabase } from "../supabaseClient";
import ComplaintBox from "../components/dashboard/ComplaintBox";




function Dashboard() {

    const [cells, setCells] = useState([]);

    const getData = async () => {
        const { data, error } = await supabase
          .from('ComplaintDB')
          .select('*')
          .order('id', { ascending: false });

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



    return <div className="App">
      
          <header className="App-header3">
              <p ><b>
              GT Complaints</b>
              </p>
          </header>
          <button onClick={getData}> Refresh</button > 
          
          <div className="Box-center">
          <br></br>
          
          
            {
                      cells.map((item, index) => (
                        <ComplaintBox id={item.id} resolve={item.resolve} date={item.date} time={item.time} avatar_url={item.avatar_url} user={item.username} title={item.title} subj={item.subject} desc={item.description} prior={item.priority} anon={item.anon} like={item.like} dislike={item.dislike} /> 
                      ))
                  }
          
          </div>
          <br></br><br></br>
          
          
          

          
      </div>;
};

export default Dashboard;

// <ComplaintBox date="2022-01-01" time="9:00" user="Tomer Shmul" title="Student at GT" subj="Example Subject" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" prior="true" anon="false" /> 