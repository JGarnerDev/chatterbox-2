import React from "react";
import Provider from "./store";

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-testid='${attr}']`);
  return wrapper;
};

export const setupWithContext = (component, value) => {
  return mount(<Provider value={value}>{component}</Provider>);
};
