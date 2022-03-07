import { shallow } from "enzyme";
import Header from "./header";
import { findByTestAttr } from "../../../Utilities/index";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("should render component withour errors", () => {
    const wrapper = findByTestAttr(component, "wrap");
    expect(wrapper.length).toBe(1);
  });

  it("should render a logo", () => {
    const logo = findByTestAttr(component, "logo");
    expect(logo.length).toBe(1);
  });
});
