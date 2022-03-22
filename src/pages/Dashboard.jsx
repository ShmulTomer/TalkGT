import React, { useEffect, useState } from "react";
// import "./Add.css"
import BasicTable from "../components/BasicTable";
import { supabase } from "../supabaseClient";



const Dashboard = () => {

    const [cells, setCells] = useState([]);
    const [isLoading, setLoading] = useState(true);

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
            Header: "Created",
            accessor: "created_at" // accessor is the "key" in the data
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
          }
        ],
        []
      );


    useEffect(() => {
        const loadData = async () => {
          await getData();
          setTimeout(() => {
            
          }, 1500);
          
        };
        loadData();

        setLoading(false);
      }, []);

    

     const Render = async () => {
         getData();

         const data = React.useMemo(() => cells, []);
         setLoading(false);
     }
     const data = React.useMemo(() => cells, []);

     
    
    if(isLoading) {
        
         return <div className="App">Loading...</div>;
    }

    return <div className="App">
    <header className="App-header">
        <p ><b><i>
        Dashboard</i></b>
        </p>
    </header>
    <button onClick={() => Render()}> 
             Refresh
    </button > 

    <>{cells && <BasicTable columns={columns} data={data} />}</>

    
    </div>;
};

export default Dashboard;
