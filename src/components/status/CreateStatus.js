import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import createStatus from "../../store/actions/statusActions";

function SignIn(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.createStatus({ title, content });
  };

  return (
    <Container>
      <Form style={{ marginTop: 100 }} onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="Title">Title</Label>
          <Input
            placeholder="Trip to the mall"
            required
            onChange={e => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Content">What's on your mind?</Label>
          <Input
            placeholder="I waited for 2 hours and they ran out of my size... UGH!"
            type="textarea"
            required
            onChange={e => setContent(e.target.value)}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    createStatus: status => dispatch(createStatus(status))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
