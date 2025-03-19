import React, { Component } from "react";

import "./LightDarkMode.css";

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  };

  onClickButton = () => {
    this.setState((prevState) => ({ isDarkMode: !prevState.isDarkMode }));
  };

  render() {
    const { isDarkMode } = this.state;
    const modelClassName = isDarkMode ? "dark-mode" : "light-mode";
    const buttonText = isDarkMode ? "Light Mode" : "Dark Mode";

    return (
      <div className="container">
        <div className={`container ${modelClassName}`}>
          <h1 className="heading">Click to Change Mode</h1>
          <button className="button" type="button" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    );
  }
}

export default LightDarkMode;
