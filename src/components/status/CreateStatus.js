import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import createStatus from "../../store/actions/statusActions";
import { Redirect } from "react-router-dom";

function SignIn({ createStatus, auth }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    createStatus({ title, content });
  };

  if (!auth.uid) return <Redirect to="/signin" />;

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

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createStatus: status => dispatch(createStatus(status))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
