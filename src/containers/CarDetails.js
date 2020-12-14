import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCarDetails, clearDetails } from '../redux/actions/rootActions';
class CarDetails extends Component {
  componentDidMount() {
    this.props.getCarDetails(this.props.match.params.id);
  }
  componentWillUnmount() {
    this.props.clearDetails();
  }
  render() {
    return (
      <div className="shadow m-2 p-2">
        {this.props.CarDetails ? (
          <React.Fragment>
            {' '}
            <h2>
              {this.props.CarDetails.brand} {this.props.CarDetails.model}{' '}
              {this.props.CarDetails.year}
            </h2>
            <img
              alt={this.props.CarDetails.image}
              className="w-100"
              src={`/images/${this.props.CarDetails.image}`}
            />
            <h4 className="border-bottom">
              {' '}
              about {this.props.CarDetails.model}
            </h4>
            <p className="mt-4">{this.props.CarDetails.description}</p>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { CarDetails: state.Cars.details };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getCarDetails, clearDetails }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(CarDetails);
