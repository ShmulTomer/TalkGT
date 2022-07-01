import React from "react";
import "../styles.css";
import AddEntry from "../components/AddEntry";
import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";
import PleaseLogin from "../components/PleaseLogin";

const Add = () => {
  const [session, setSession] = useState(null);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  async function getProfile() {
    try {
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, title, email, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setName(data.username);
        setTitle(data.title);
      }
    } catch (error) {
      alert(error.message);
    } finally {
    }
  }

  useEffect(() => {
    getProfile();
  }, [supabase.auth.session()]);

  return (
    <div className="App">
      <header className="App-header3">
        <p>
          <b>Add your Post</b>
        </p>
      </header>

      <div className="App-text">
        {!session || name == "" || title == "" ? <PleaseLogin /> : <AddEntry />}
        <p></p>
      </div>
    </div>
  );
};

export default Add;
