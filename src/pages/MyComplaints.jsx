import React, { useEffect, useState } from "react";
import "../styles.css"

import { supabase } from "../supabaseClient";
import ComplaintBox from "../components/dashboard/ComplaintBox";

function MyComplaints() {

    const [cells, setCells] = useState([]);

    useEffect(() => {
        getData()
      }, []);

    const getData = async () => {

        const user = supabase.auth.user()
        const { data, error } = await supabase
          .from('COMPLAINT')
          .select('*')
          .eq('id', user.id)
          .order('id', { ascending: false });

      setCells(data);
    };

    const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

  supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

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

      

     const data = React.useMemo(() => cells, []);
     //console.log(cells);

     if(!session) {
         return <div className="App">
      
                <header className="App-header3">
                    <p ><b>
                    My Complaints</b>
                    </p>
                </header>
                
                
                <div className="Box-center">
                    Log in and submit a complaint to gain access to this page
                
                </div>
                <br></br><br></br>
                
                
                

                
            </div>;
     }


    return <div className="App">
      
          <header className="App-header3">
              <p ><b>
              My Complaints</b>
              </p>
          </header>
          <button onClick={getData}> Refresh</button > 
          
          <div className="Box-center">
          <br></br>
          
          
            {
                      cells.map((item, index) => (
                        <ComplaintBox session={session} id={item.id} subj={item.subj} desc={item.desc} upv={item.upv} dov={item.dov} time={item.time} date={item.date} anon={item.anon} userID={item.userID} /> 
                      ))
                  }
          
          </div>
          <br></br><br></br>
          
          
          

          
      </div>;
};

export default MyComplaints;
