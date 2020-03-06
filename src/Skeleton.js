import React from "react";
import "./styles.css";

class Skeleton extends React.Component {
	render() {
		return (
			<div className="skeleton-container fade-in">
				{this.props.children}
			</div>
		);
	}
}

export default Skeleton;
