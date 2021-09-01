import { useContext, useEffect, useState } from "react";
import { firestore } from "./firebase";

import { AuthContext } from "./AuthProvider";

let VideoCard = (props) => {
  let [boxOpen, setBoxOpen] = useState(false);
  let [playing, setPlaying] = useState(false);
  let [currentUserComment, setCurrentUserComment] = useState("");
  let [allComments, setAllComments] = useState([]);
  let [like, setLike] = useState(false);

  let value = useContext(AuthContext);

  useEffect(() => {
    let f = async () => {
      let allCommentId = props.post.comments;
      let arr = [];

      for (let i = 0; i < allCommentId.length; i++) {
        let id = allCommentId[i];

        let doc = await firestore.collection("comments").doc(id).get();
        let commentData = { ...doc.data(), id: doc.id };
        arr.push(commentData);
      }
      
       let doc= await firestore.collection("posts").doc(props.post.id).get();
       let like = doc.data().likes;
       console.log(doc.data().likes);
       setLike(like);
      setAllComments(arr);
    };

    f();
  }, []);

  return (
    <div className="video-card">
      <video
        onClick={(e) => {
          if (playing) {
            setPlaying(false);
            e.currentTarget.pause();
          } else {
            setPlaying(true);
            e.currentTarget.play();
          }
        }}
        src={props.post.url}
      ></video>
      <span
        className="material-icons like"
        onClick={(e) => {
          if (like == false) {
            e.currentTarget.innerText = "favorite";
            firestore.collection("posts").doc(props.post.id).update({likes:true});
            setLike(true);
          } else {
            e.currentTarget.innerText = "favorite_border";
            firestore.collection("posts").doc(props.post.id).update({likes:false});
            setLike(false);
          }
        }}
      >
        {like==true?"favorite":"favorite_border"}
      </span>
      <span
        className="material-icons-outlined comment"
        onClick={() => {
          if (boxOpen) setBoxOpen(false);
          else setBoxOpen(true);
        }}
      >
        chat_bubble
      </span>
      <p className="username">
        <b>{props.post.username}</b>
      </p>
      <p className="song">
        <span className="material-icons-outlined">music_note</span>
        <marquee>song name</marquee>
      </p>

      {boxOpen ? (
        <div className="comment-box">
          <button
            className="comment-box-close-btn"
            onClick={() => {
              setBoxOpen(false);
            }}
          >
            Close
          </button>

          <div className="all-comments">
            {allComments.map((comment, index) => {
              return (
                <div key={index}>
                  <img src={comment.pic} />
                  <div>
                    <p>
                      <b>{comment.username}</b>
                    </p>
                    <p className="inner-comment">{comment.comment}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="comment-form">
            <input
              type="text"
              value={currentUserComment}
              onChange={(e) => {
                setCurrentUserComment(e.currentTarget.value);
              }}
            />
            <button
              onClick={() => {
                let p = firestore.collection("comments").add({
                  comment: currentUserComment,
                  username: value.displayName,
                  pic: value.photoURL,
                });

                setCurrentUserComment("");

                p.then((docRef) => {
                  return docRef.get();
                }).then((doc) => {
                  firestore
                    .collection("posts")
                    .doc(props.post.id)
                    .update({
                      comments: [...props.post.comments, doc.id],
                    });
                });
              }}
            >
              Post
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default VideoCard;
