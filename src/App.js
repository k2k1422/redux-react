import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetch_robot } from "./redux/actions/fetch_robots";
import { HashLoader } from 'react-spinners';
import ForcastProfile from "./components/ForcastProfile";

const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    this.props.fetch_robot();
  }

  render() {
    return (
      <div className="App">
        <ForcastProfile />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    robots: state.robots,
    isFetchingData: state.fetch_robot_status,
  };
}

const mapDispatchToProps = {
  fetch_robot
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
