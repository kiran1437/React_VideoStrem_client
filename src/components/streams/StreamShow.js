import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import VideoPlayer from "./videoPlayer";

class StreamShow extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading.....</div>;
    } else {
      const { title, description } = this.props.stream;

      return (
        <div>
          <VideoPlayer id={this.props.match.params.id} />
          <h1>{title}</h1>
          <h5>{description}</h5>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);
