import React from "react";

import Login from "./Login";

import { findByTestAttr, setupWithContext } from "../../testUtils";

describe("Login Component", () => {
  const LoginComponent = setupWithContext(<Login />);
  describe("Renders", () => {
    it("renders without error", () => {
      expect(LoginComponent.length).toBe(1);
    });
    it("has an input for user name", () => {
      const input = findByTestAttr(LoginComponent, "name-input").first();
      expect(input.length).toBe(1);
    });
    it("has a button log in", () => {
      const button = findByTestAttr(LoginComponent, "login-button").first();
      expect(button.length).toBe(1);
    });
    it("has an element in which log in errors are rendered", () => {
      const loginFeedback = findByTestAttr(
        LoginComponent,
        "login-feedback"
      ).first();
      expect(loginFeedback.length).toBe(1);
    });
  });
  describe("Intergration with context", () => {
    it("Renders an error message when a log in without a user name", () => {
      const button = findByTestAttr(LoginComponent, "login-button");
      button.first().simulate("click");
      const loginError = findByTestAttr(
        LoginComponent,
        "feedback-error"
      ).first();
      expect(loginError.length).toBe(1);
      expect(loginError.text()).toContain("You have to pick a name!");
    });
    console.log(LoginComponent.props().children);
  });
});
