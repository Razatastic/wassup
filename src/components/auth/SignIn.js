import React, { useState } from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from "reactstrap";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";

function SignIn({ signIn, authError }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    signIn({ email, password });
  };

  return (
    <Container>
      <Form style={{ marginTop: 100 }} onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
            onChange={e => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="doggo123"
            onChange={e => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <Button>Submit</Button>
        <div>
          {authError ? (
            <Alert color="danger" style={{ marginTop: 10 }}>
              Login failed. Please check your email/password and try again!
            </Alert>
          ) : null}
        </div>
      </Form>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
