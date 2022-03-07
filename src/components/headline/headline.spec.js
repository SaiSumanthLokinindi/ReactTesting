import { shallow } from "enzyme";
import Headline from "./headline";
import { findByTestAttr } from "../../../Utilities/index";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline component", () => {
  describe("Have props", () => {
    let component;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Description",
      };
      component = setUp(props);
    });

    it("should render heading", () => {
      const heading = findByTestAttr(component, "heading");
      expect(heading.length).toBe(1);
    });

    it("should render description", () => {
      const description = findByTestAttr(component, "description");
      expect(description.length).toBe(1);
    });
  });

  describe("Have No Props", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });

    it("should not render heading", () => {
      const heading = findByTestAttr(component, "heading");
      expect(heading.length).toBe(0);
    });

    it("should render not description", () => {
      const description = findByTestAttr(component, "description");
      expect(description.length).toBe(0);
    });
  });
});
