import React from "react";
import "../../styles.css";
import { supabase } from "../../supabaseClient";
import { useState, useEffect } from "react";
import AvatarIcon from "../authentication/AvatarIcon";
import { FaClock } from "react-icons/fa";
import ReactTimeAgo from "react-time-ago";

export default function ReplyBox({
  owner,
  ownerAnon,
  comment,
  anon,
  userID,
  timedate,
}) {
  const [name, setName] = useState(null);
  const [title, setTitle] = useState(null);
  const [avatar_url, setAvatar] = useState(null);
  const [mine, setMine] = useState(false);
  const [isOP, setOwner] = useState(false);

  useEffect(() => {
    getProfile();
  });

  async function getProfile() {
    try {
      if (owner == userID && !anon && !ownerAnon) {
        setOwner(true);
      }

      const user = supabase.auth.user();

      //   if (session && userID == user.id) {
      //     setMine(true);
      //   }

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, title, avatar_url`)
        .eq("id", userID)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        if (anon == true) {
          setName("Anonymous");
          setTitle("Anonymous User");
          setAvatar(null);
        } else {
          setName(data.username);
          setTitle(data.title);
          setAvatar(data.avatar_url);
        }
      }
    } catch (error) {
      console.error(error.message);
    } finally {
    }
  }

  return (
    <div className="App">
      <div className="grid-container2">
        <div className="comment-text">{comment}</div>

        <div className="grid2">
          <div className="box-right2">
            <div className="test1">
              {anon == "true" || !avatar_url ? (
                <i className="bx bx-user"> </i>
              ) : (
                <AvatarIcon url={avatar_url} size={12} />
              )}
            </div>
            <div className="test2">
              <b>{name}</b>
            </div>
            {isOP ? (
              <div className="test3">
                &nbsp;<b>OP</b>
              </div>
            ) : (
              <></>
            )}
            <br></br>
            {title}
            <br></br>
            <FaClock />
            &nbsp;
            <ReactTimeAgo date={timedate} locale="en-US" />
          </div>
        </div>
      </div>
    </div>
  );
}
