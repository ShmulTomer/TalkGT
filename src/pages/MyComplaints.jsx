import React, { useEffect, useState } from "react";
import "../styles.css";

import { supabase } from "../supabaseClient";
import { Link, useLocation } from "react-router-dom";
import ComplaintBox from "../components/dashboard/ComplaintBox";
import { FaRedo, FaPlus } from "react-icons/fa";

function MyComplaints() {
  const [cells, setCells] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const user = supabase.auth.user();
    const { data, error, count } = await supabase
      .from("COMPLAINT")
      .select("*", { count: "exact" })
      .eq("userID", user.id)
      .order("id", { ascending: false });

    setCells(data);
    setCount(count);
  };

  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const data = React.useMemo(() => cells, []);
  //console.log(cells);

  if (!session) {
    return (
      <div className="App">
        <header className="App-header3">
          <p>
            <b>My Complaints</b>
          </p>
        </header>

        <div className="App-text">
          <br></br>
          <br></br>
          <br></br>
          Log in and submit a complaint to gain access to this page
        </div>
        <br></br>
        <br></br>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header3">
        <p>
          <b>My Complaints</b>
        </p>
      </header>
      <button className="hover" onClick={getData}>
        {" "}
        <FaRedo />
      </button>
      <Link to="/add">
        &nbsp;&nbsp;
        <button className="hover">
          {" "}
          <FaPlus />
        </button>
      </Link>

      <div className="Box-center">
        <br></br>

        {count == 0 ? (
          <div className="Submit-first">
            "Submit your first complaint to see it here!"
          </div>
        ) : (
          ""
        )}

        {cells.map((item, index) => (
          <ComplaintBox
            key={index}
            session={session}
            id={item.id}
            subj={item.subj}
            desc={item.desc}
            upv={item.upv}
            dov={item.dov}
            timedate={item.timedate}
            anon={item.anon}
            userID={item.userID}
            re={item.res}
          />
        ))}
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default MyComplaints;
