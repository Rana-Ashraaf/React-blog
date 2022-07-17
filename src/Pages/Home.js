import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../fb-config";
const Home = ({ isAuth }) => {
  const [postLists, setPostList] = useState([]);
  const postsCollection = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollection);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    window.location.reload();
  };

  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    <img
                      className="trashCan"
                      src="../Images/delete.png"
                      alt="trash"
                    />{" "}
                  </button>
                )}
              </div>
            </div>
            <span>
              by <strong className="authorName">{post.author.name}</strong>{" "}
            </span>

            <div className="postTextContainer">{post.postText}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
