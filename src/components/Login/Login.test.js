import React from "react";

import Store from "../../store";

import Login from "./Login";

import { findByTestAttr } from "../../testUtils";

const setup = () => {
  return mount(<Store children={<Login />} />);
};

describe("Login component", () => {
  describe("Sanity tests", () => {
    it("has a module", () => {
      expect(Login).toBeDefined();
    });
  });
  describe("Rendering", () => {
    const LoginComponent = setup();
    it("renders top-level element", () => {
      const found = findByTestAttr(LoginComponent, "login-component");
      expect(found.length).toBeDefined();
    });
    it("renders form wrapper element", () => {
      const found = findByTestAttr(LoginComponent, "login-wrapper");
      expect(found.length).toBeDefined();
    });
    it("renders form wrapper element", () => {
      const found = findByTestAttr(LoginComponent, "login-wrapper");
      expect(found.length).toBeDefined();
    });
    it("renders form wrapper element", () => {
      const found = findByTestAttr(LoginComponent, "login-form");
      expect(found.length).toBeDefined();
    });
  });
});
