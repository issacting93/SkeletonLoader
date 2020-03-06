import React from "react";
import "./styles.css";

class Animate extends React.Component {
	render() {
		return <div className="fade-in">{this.props.children}</div>;
	}
}

export default Animate;
