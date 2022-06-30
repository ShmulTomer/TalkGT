import React, { useEffect, useState } from "react";
import "../styles.css";
import { Link, useLocation } from "react-router-dom";
import { supabase } from "../supabaseClient";
import ComplaintBox from "../components/dashboard/ComplaintBox";
import { FaRedo, FaChild, FaPlus, FaQuestion } from "react-icons/fa";

function Dashboard() {
  const [cells, setCell] = useState([]);

  const getData = async () => {
    const { data, error } = await supabase
      .from("COMPLAINT")
      .select("*")
      .order("id", { ascending: false });

    setCell(data);
  };

  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const data = React.useMemo(() => cells, []);
  //  console.log("HELLO WRODL!!!");

  return (
    <div className="App">
      <header className="App-title">
        <p>
          <b>GT Complaints</b>
        </p>
      </header>
      {!session ? (
        <div>
          <b>Log in to gain access to voting and replying.</b>
        </div>
      ) : (
        <></>
      )}

      <br></br>
      <div className="dbIcons">
        <button className="hover" nClick={() => getData()}>
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
        <Link to="/mycomplaints">
          &nbsp;&nbsp;
          <button className="hover">
            {" "}
            <FaChild />
          </button>
        </Link>
        <Link to="/start">
          &nbsp;&nbsp;
          <button className="hover">
            {" "}
            <FaQuestion />
          </button>
        </Link>
      </div>
      <div className="Box-center">
        <br></br>

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

export default Dashboard;
