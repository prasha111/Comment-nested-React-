import React from "react";
import Widget from "../../components/widget";
import { useEffect, useState } from "react";
import CommentsRendering from "../../components/commentsRendering";

export default function WidgetPage() {
  const [addComment, setAddComment] = useState(false);
  const [inputData, setInputData] = useState("jcfndj");
  const [discussionData, setDiscussionData] = useState([
    {
      id: "1",
      name: "cluless",
      time: "4",
      power: "author",
      data: "dude thank you soo much for the ude thank you soo much for the ude thank you soo much for the ude thank you soo much for the ude thank you soo much for the ude thank you soo much for the",
      reply: [
        {
          id: "2",
          name: "sdsdf",
          time: "3",
          power: "mod",
          data: "dude thank you soo much for the ude thank you soo much for the ude thank you soo much for the ude thank you soo much for the ude thank you soo much for the ude thank you soo much for the",
        },
      ],
    },
    {
      id: "3",
      name: "cluless2",
      time: "5",
      power: "author2",
      data: "dude thank you soo much for the ude thank you soo much for the ude thank you soo much for the ude thank you soo much for the ude thank you soo much for the ude thank you soo much for the",
      reply: [
        {
          id: "4",
          name: "clul",
          time: "4",
          power: "mod",
          data: "dude thank you soo much for the ude thank you soo much for the ude thank you soo much for the ude thank you soo much for the ude thank you soo much for the ude thank you soo much for the",
        },
      ],
    },
  ]);


  useEffect(() => {
    setTimeout(()=>{
        window.localStorage.clear("count");
        window.localStorage.setItem("count", JSON.stringify(discussionData));
        console.log("heello set");
    },10)

  }, [discussionData]);
  useEffect(() => {
    // const name = async()=>{
    //     const data = window.localStorage.getItem('count');
    //   if ( data !== null ) {setDiscussionData(JSON.parse(data))}
    //     console.log("heello get")
    //   }
    //setDiscussionData(JSON.parse(window.localStorage.getItem('count')));
    const data = window.localStorage.getItem("count");
    if (data !== null) setDiscussionData(JSON.parse(data));
    console.log("heello get");
  }, []);

  const replyConcat = (parentId, repyText) => {
    console.log(repyText, "text recieve");
    let deepClone = JSON.parse(JSON.stringify(discussionData));

    for (let i = 0; i < deepClone.length; i++) {
      if (deepClone[i].id === parentId) {
        deepClone[i].reply.push({
          name: "cluless2",
          time: "5",
          power: "author2",
          data: repyText,
          reply: "",
          id: JSON.stringify(Date.now()),
        });
      }
    }
    setDiscussionData(deepClone);
  };
  function addHandleClick(props) {
    const deepClone = JSON.parse(JSON.stringify(discussionData));
    deepClone.push({
      name: "cluless2",
      id:JSON.stringify(Date.now()),
      time: "5",
      power: "author2",
      data: inputData,
      reply: "",
    });
    console.log(deepClone, "clone");
    setDiscussionData(deepClone);
  }
  function addReply(commentId, replyText) {
    let commentsWithNewReply = [...discussionData];
    console.log(commentsWithNewReply, "dded");
    insertComment(commentsWithNewReply, commentId, replyText);
    setDiscussionData(commentsWithNewReply);
  }

  function newComment(text) {
    return {
      id: new Date().getTime(),
      name: "urfurb",
      time: "4",
      children: [],
    };
  }
  function deleteComment(id){
    const deepClone1 = JSON.parse(JSON.stringify(discussionData));
    for(let i =0;i<deepClone1.length; i++){
        if(deepClone1[i].id === id){
            deepClone1.splice(i,1)
        }
    }
    setDiscussionData(deepClone1);
  }
  function insertComment(comments, parentId, text) {
    for (let i = 0; i < comments?.length; i++) {
      let comment = comments[i];
      if (comment.id === parentId) {
        comment.children.unshift(setDiscussionData(text));
      }
    }

    for (let i = 0; i < comments.length; i++) {
      let comment = comments[i];
      insertComment(comment.children, parentId, text);
    }
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <Widget />
      {discussionData.map((component, index) => {
        return (
          <div key={index}>
            <CommentsRendering
              data={component}
              addReply={addReply}
              replyConcat={replyConcat}
              deleteComment={deleteComment}
            />
          </div>
        );
      })}
      <div
        onClick={() => {
          setAddComment(!addComment);
        }}
        style={{ width: "10px", height: "20px", backgroundColor: "red" }}
      >
        add comment
      </div>
      {addComment && (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <input
            type="text"
            onChange={(event) => {
              setInputData(event.target.value);
            }}
          />
          <div
            onClick={() => {
              addHandleClick();
            }}
          >
            Submit
          </div>
        </div>
      )}
    </div>
  );
}
