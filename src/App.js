import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetch_robot,fetch_data_from_rsaa } from "./redux/actions/fetch_robots";
import { HashLoader } from 'react-spinners';
import ForecastProfile from "./components/ForecastProfile1";
import DataSHeet from './components/DataSheet';
import TableComponent from './components/TableComponent'

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
    this.props.fetch_data_from_rsaa();
  }

  render() {
    return (
      <div className="App">
        <TableComponent />
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
  fetch_robot,
  fetch_data_from_rsaa
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
