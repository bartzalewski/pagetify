import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { storage } from "../../config/fbConfig";
import NavbarOtherSites from "../Navbar/NavbarOtherSites";
import TextareaMarkdown from "textarea-markdown";

const StyledCreateProject = styled.section`
  .create-project__wrapper {
    width: 100%;
  }

  .input-field {
    display: block;
    margin: 0;
    padding: 0;
  }
`;

const CreatePost = (props) => {
  const [projectName, setProjectName] = useState("");
  const [projectBackground, setProjectBackground] = useState(null);
  const [projectClient, setProjectClient] = useState("");
  const [projectCategory, setProjectCategory] = useState("");
  const [projectReview, setProjectReview] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [projectURL, setProjectURL] = useState("");
  const [progress, setProgress] = useState(0);
  const state = {
    projectName,
    projectBackground,
    projectClient,
    projectCategory,
    projectReview,
    content,
    url,
    projectURL,
  };

  const handleURL = async (e) => {
    e.persist();

    await setUrl(
      e.target.id === "projectName"
        ? e.target.value.split(" ").join("-").toLowerCase()
        : null
    );

    await setProjectName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createProject(state, url);
    props.history.push("/");
  };

  const handleChoose = (e) => {
    if (e.target.files[0]) {
      const projectBackground = e.target.files[0];
      setProjectBackground(projectBackground);
    }
  };

  const handleUpload = () => {
    const imageName = `${
      projectBackground.name + Math.round(Math.random() * 1000000000000)
    }`;

    const uploadTask = storage
      .ref(`images/projects/${imageName}`)
      .put(projectBackground);

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
          .ref("images/projects")
          .child(imageName)
          .getDownloadURL()
          .then((projectBackground) => {
            setProjectBackground(projectBackground);
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
    projectName !== "" &&
    projectClient !== "" &&
    projectCategory !== "" &&
    projectBackground !== null &&
    url !== "" &&
    progress === 100 &&
    content !== ""
  ) {
    uploadPostButton.disabled = false;
    uploadPostButton.style.visibility = "visible";
  }
  return (
    <>
      <NavbarOtherSites></NavbarOtherSites>
      <StyledCreateProject className="sites__hero">
        <div className="sites__container">
          <div className="container">
            <h1 className="section__title">Create new project</h1>
            <form
              className="sites__wrapper create-project__wrapper"
              onSubmit={handleSubmit}
            >
              <div className="input-field--flex">
                <div className="input-field">
                  <label htmlFor="projectName" />
                  <input
                    type="text"
                    placeholder="Title here..."
                    id="projectName"
                    onChange={handleURL}
                    autoComplete="off"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="projectURL" />
                  <input
                    type="text"
                    placeholder="URL here... (https://)"
                    id="projectURL"
                    onChange={(e) => setProjectURL(e.target.value)}
                    autoComplete="off"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="url" />
                  <input
                    type="text"
                    placeholder="This project's URL"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    autoComplete="off"
                    disabled
                  />
                </div>
              </div>
              <div className="input-field--flex">
                <div className="input-field">
                  <label htmlFor="projectClient" />
                  <input
                    type="text"
                    placeholder="Client name..."
                    id="projectClient"
                    onChange={(e) => setProjectClient(e.target.value)}
                    autoComplete="off"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="projectCategory" />
                  <input
                    type="text"
                    placeholder="Project category... ex.(Website, Online store)"
                    id="projectCategory"
                    onChange={(e) => setProjectCategory(e.target.value)}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="input-field">
                <label htmlFor="projectReview" />
                <input
                  type="text"
                  placeholder="Project review..."
                  id="projectReview"
                  onChange={(e) => setProjectReview(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className="input-field">
                <label htmlFor="content" />
                <textarea
                  placeholder="Type your project content here..."
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
                Upload Project
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
      </StyledCreateProject>
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
    createProject: (project, url) => dispatch(createProject(project, url)),
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  CreatePost
);
