import React from 'react';
import { connect } from 'react-redux';
import CarItem from '../components/CarItem';
const CarsList = (props) => {
  return (
    <div>
      {props.CarsList  ? (
        props.CarsList.map((car) => {
          return <CarItem key={car.id} car={car} />;
        })
      ) : (
        <h2 className="text-center m-4">No Cars</h2>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state)
  return {
    CarsList: state.Cars.list,
  };
};
export default connect(mapStateToProps)(CarsList);
