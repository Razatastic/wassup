import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function SignIn() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Form
        style={{ margin: 100 }}
        onSubmit={e => {
          e.preventDefault();
          console.log(firstName, lastName, email, password);
        }}
      >
        <FormGroup>
          <Label for="FirstName">First Name</Label>
          <Input
            placeholder="John"
            onChange={e => setFirstName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="LastName">Last Name</Label>
          <Input
            placeholder="Doe"
            onChange={e => setLastName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
            onChange={e => setEmail(e.target.value)}
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
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
}
