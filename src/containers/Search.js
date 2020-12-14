import React, { Component } from 'react';
import { FormControl, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getCars } from '../redux/actions/rootActions';
import { bindActionCreators } from 'redux';
class Search extends Component {
  constructor() {
    super();
    this.state = {
      brand: '',
    };
  }

  brandChanged = (e) => {
    this.setState({ brand: e.target.value });
  };

  onSearch = (e) => {
    e.preventDefault();
    this.props.getCars(this.state.brand);
    console.log(this.props);
  };
  render() {
    return (
      <div>
        <Form className="m-2 p-2">
          <FormControl
            type="text"
            placeholder="Search by brand"
            className="mr-sm-2 rounded-pill"
            onChange={this.brandChanged}
          />
          <div className="form-group text-center mt-2">
            <Button className="btn btn-dark w-25" onClick={this.onSearch}>
              Search
            </Button>
          </div>
        </Form>
        <hr />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getCars }, dispatch);
};

export default connect(null, mapDispatchToProps)(Search);
