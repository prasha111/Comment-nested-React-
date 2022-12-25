import React from "react";
import { useState, useRef } from "react";
import ReplyRendering from "./replyRendering";

export default function CommentsRendering(prop) {
  let { data, addReply, replyConcat, deleteComment } = prop;
  const [replyText, setReplyText] = useState("");
  const inputEl = useRef(null);
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [inputBox, setInputBox] = useState(false);
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", columnGap: "20px" }}>
        <div
          style={{
            backgroundColor: "gray",
            height: "40px",
            width: "40px",
            columnGap: "20px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "baseline",
              columnGap: "20px",
            }}
          >
            <div style={{ fontSize: "20px", color: "blue" }}>{data.name}</div>
            <div>{data.time} time ago</div>
          </div>
          <div>
            {data.data}
            <div style={{ display: "flex", flexDirection: "row", columnGap:'30px', opacity:'0.5' }}>
              <div
                onClick={() => {
                  setShowReplyBox(true);
                }}
              >
                reply
              </div>
              <div onClick={()=>{deleteComment(data.id)}}>delete</div>
            </div>
          </div>
        </div>
      </div>
      {showReplyBox && (
        <>
          <br />
          <textarea
            ref={inputEl}
            onChange={(e) => {
              setReplyText(e.target.value);
            }}
            type="text"
          />
          <br />
          <button
            type="button"
            onClick={() => {
              replyConcat(data.id, replyText)
            }}
          >
            save
          </button>
          <button
            type="button"
            onClick={() => {
              setShowReplyBox(false);
              setReplyText("");
            }}
          >
            cancel
          </button>
        </>
      )}
      {data.reply.length > 0 ? (
        <div style={{ paddingLeft: "10px" }}>
          {data.reply.map((component, index) => {
            return (
              <div key={index}>
                <ReplyRendering
                  data={component}
                  addReply={addReply}
                  replyConcat={replyConcat}
                  parentId={data.id}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
