import React, { useEffect, useState } from "react";
import "../styles.css"

import { supabase } from "../supabaseClient";
import ComplaintBox from "../components/dashboard/ComplaintBox";

function Dashboard() {

    const [cells, setCells] = useState([]);

    const getData = async () => {
        const { data, error } = await supabase
          .from('COMPLAINT')
          .select('*')
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
          {(!session) ? "Log in to gain access to voting and replying." : ""}
          <br></br>
          <br></br>
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

export default Dashboard;

// <ComplaintBox date="2022-01-01" time="9:00" user="Tomer Shmul" title="Student at GT" subj="Example Subject" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" prior="true" anon="false" /> 