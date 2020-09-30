import React from "react";
import { Store } from "./store";

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const setupWithContext = (component) => {
  return mount(<Store children={component} />);
};
