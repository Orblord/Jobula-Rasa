import React from "react";

import { withFirebase } from "../Firebase";

import Button from "react-bootstrap/Button";

const SignOutButton = ({ firebase }) => (
  <Button variant="primary" onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);