import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import sinon from "sinon";

// Defaulting the serialization to be enzyme-to-json

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

// Setting enzyme up with the React 16 adapter

Enzyme.configure({ adapter: new Adapter() });

// Making these values available without import

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;
