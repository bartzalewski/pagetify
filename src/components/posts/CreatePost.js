import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createPost } from "../../store/actions/postActions";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { storage } from "../../config/fbConfig";
import NavbarOtherSites from "../Navbar/NavbarOtherSites";
import TextareaMarkdown from "textarea-markdown";

const StyledCreatePost = styled.section`
  #title,
  #url,
  #content {
    width: 100%;
    border: none;
  }

  #content {
    height: 10rem;
  }

  #upload-post-btn {
    border: none;
    border-radius: 25px;
    background-image: linear-gradient(to right, #36d1dc, #5b86e5);
    color: #fff;
    padding: 10px 30px;
    font-weight: 600;
    box-shadow: 0 2px 10px rgba(50, 50, 93, 0.1);
    transition: 0.2s ease-in-out;
    font-size: 16px;
    font-family: "Montserrat";
    cursor: pointer;
    margin-top: 5rem;
    visibility: hidden;

    &:hover {
      transition: 0.2s ease-in-out;
      box-shadow: 0 9px 32px 0 rgba(0, 0, 0, 0.15);
      transform: scale(1.05);
    }
  }

  .create-post__wrapper {
    width: 100%;
    margin-bottom: 0;
  }

  .input-field {
    display: block;
    padding: 0;

    &--flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }

  .upload__wrapper {
    align-self: flex-start;
    margin-top: -2rem;
  }
`;

const CreatePost = (props) => {
  const [authorName] = useState(
    `${props.profile.firstName} ${props.profile.lastName}`
  );
  const [authorAvatar] = useState(props.profile.userAvatar);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [postBackground, setPostBackground] = useState(null);
  const [progress, setProgress] = useState(0);
  const state = {
    authorName,
    authorAvatar,
    title,
    content,
    url,
    postBackground,
  };

  const handleURL = async (e) => {
    e.persist();

    await setUrl(
      e.target.id === "title"
        ? e.target.value.split(" ").join("-").toLowerCase()
        : null
    );

    await setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createPost(state, url);
    props.history.push("/");
  };

  const handleChoose = (e) => {
    if (e.target.files[0]) {
      const postBackground = e.target.files[0];
      setPostBackground(postBackground);
    }
  };

  const handleUpload = () => {
    const imageName = `${
      postBackground.name + Math.round(Math.random() * 1000000000000)
    }`;

    const uploadTask = storage
      .ref(`images/posts/${imageName}`)
      .put(postBackground);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images/posts")
          .child(imageName)
          .getDownloadURL()
          .then((postBackground) => {
            setPostBackground(postBackground);
          });
      }
    );

    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
      return downloadURL;
    });
  };

  useEffect(() => {
    let textarea = document.querySelector("textarea");
    new TextareaMarkdown(textarea);
  }, []);

  const { auth } = props;
  const uploadPostButton = document.getElementById("upload-post-btn");

  if (!auth.uid) return <Redirect to="/" />;

  if (
    authorName !== "" &&
    postBackground !== null &&
    progress === 100 &&
    content !== "" &&
    title !== "" &&
    url !== ""
  ) {
    uploadPostButton.disabled = false;
    uploadPostButton.style.visibility = "visible";
  }

  return (
    <>
      <NavbarOtherSites></NavbarOtherSites>
      <StyledCreatePost className="sites__hero">
        <div className="sites__container">
          <div className="container">
            <h1 className="section__title">Create new post</h1>
            <form
              className="sites__wrapper create-post__wrapper"
              onSubmit={handleSubmit}
            >
              <div className="input-field--flex">
                <div className="input-field">
                  <label htmlFor="title" />
                  <input
                    type="text"
                    placeholder="Title here..."
                    id="title"
                    onChange={handleURL}
                    autoComplete="off"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="url" />
                  <input
                    type="text"
                    placeholder="This post's URL"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    autoComplete="off"
                    disabled
                  />
                </div>
              </div>
              <div className="input-field">
                <label htmlFor="content" />
                <textarea
                  placeholder="Type your post content here..."
                  id="content"
                  data-preview="#preview"
                  onChange={(e) => setContent(e.target.value)}
                />
                <p
                  style={{
                    margin: "1rem 0",
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                >
                  Preview:
                </p>
                <div id="preview"></div>
              </div>
              <button
                id="upload-post-btn"
                disabled
                className="post__btn"
                onClick={handleSubmit}
              >
                Upload Post
              </button>
            </form>
            <div className="upload__wrapper">
              <progress value={progress} max="100" />
              <br />
              <div className="upload__container">
                <input
                  className="custom-file-input"
                  type="file"
                  onChange={handleChoose}
                />
                <button className="custom-file-btn" onClick={handleUpload}>
                  Upload an image
                </button>
              </div>
            </div>
          </div>
        </div>
      </StyledCreatePost>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post, url) => dispatch(createPost(post, url)),
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  CreatePost
);
