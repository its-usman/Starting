import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().email().label("Email"),
    password: Joi.string().min(3).max(30).label("Password"),
    name: Joi.string().label("Name"),
  };

  doSubmit = () => {
    //call server
    console.log("Form submitted");
  };

  render() {
    return (
      <React.Fragment>
        <h1>Register Form</h1>
        <form onSubmit={this.hanldeSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
