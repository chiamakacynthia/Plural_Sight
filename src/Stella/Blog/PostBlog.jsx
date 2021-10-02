import React, { useState } from "react";
import styled from "styled-components";
import app from "../base";
import { Input, Button } from "antd";
import firebase from "firebase";

const PostBlog = () => {
  const [avatar, setAvatar] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [progress, setProgress] = useState(0);

  const pushImage = async ({ target }) => {
    const file = target.files[0];
    const fileRef = await app.storage().ref();
    const storageRef = fileRef.child("avatar/" + file.name).put(file);
    storageRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const count = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(count);
        console.log(count);
      },
      (err) => console.log(err),
      () => {
        storageRef.snapshot.ref.getDownloadURL().then((res) => {
          setAvatar(res);
          console.log(avatar);
        });
      }
    );
  };

  const post = async () => {
    await app.firestore().collection("blog").doc().set({
      avatar,
      title,
      description,
    });
    setAvatar("");
    setTitle("");
    setDescription("");
  };

  return (
    <Container>
      <Wrapper>
        <Input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Title"
        />
        Upload Product
        <Input type="file" onChange={pushImage} />
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placholder="description"
        />
        <Button onClick={post}>Submit</Button>
      </Wrapper>
    </Container>
  );
};

export default PostBlog;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #191a1c;
  color: white;
  /* z-index:-1000000000; */
`;
const Wrapper = styled.div`
  height: 400px;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid #313133;
  /* z-index:-10; */

  Input {
    margin: 10px 0px;
  }
  select {
    color: black;
    margin: 10px 0px;
    height: 35px;
  }
  textarea {
    resize: none;
    color: black;
  }
  Button {
    margin: 10px 0px;
    background-color: pink;
  }
`;
