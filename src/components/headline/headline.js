import React from "react";
import classes from "./headline.module.scss";

class Headline extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { header, desc } = this.props;
    if (!header) return null;
    return (
      <section data-test="section">
        <h2 data-test="heading">{header}</h2>
        <p data-test="description">{desc}</p>
      </section>
    );
  }
}

export default Headline;
