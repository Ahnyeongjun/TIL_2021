import React from "react";
import { bindActionCreators } from "redux";
import { connect, useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  return (
    <Counter
      number={number}
      onIncrease={() => dispatch(increase())}
      onDecrease={() => dispatch(decrease())}
    /> //  number={number} />
  );
};

// const mapStateToProps = state => ({
//     number: state.counter.number,
// });

// const mapDispatchToProps = dispatch => ({
//     // increase: () => {
//     //     dispatch(increase());
//     // },
//     // decrease: () => {
//     //     dispatch(decrease());
//     // },

//     increase: () => dispatch(increase),
//     decrease: () => dispatch(decrease)
// });

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  // dispatch =>
  // bindActionCreators(
  {
    increase,
    decrease,
  }
  //     dispatch,
  // ),
  // increase: () => dispatch(increase()),
  // decrease: () => dispatch(decrease()),
)(CounterContainer);

