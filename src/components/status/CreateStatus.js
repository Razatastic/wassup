import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function SignIn() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(title, content);
  };

  return (
    <Container>
      <Form style={{ margin: 100 }} onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="Title">Title</Label>
          <Input
            placeholder="Trip to the mall"
            onChange={e => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Content">What's on your mind?</Label>
          <Input
            placeholder="I waited for 2 hours and they ran out of my size... UGH!"
            type="textarea"
            onChange={e => setContent(e.target.value)}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
}
