import { connect } from 'react-redux';
import { setBrend, setWeight, setResult, togleIsFetching } from '../../../../reducers/calculatorReducer';
import Calculator from './Calculator';



let mapStateToProps = (state) => {
  return {
    weight: state.calculatorComponent.weight,
    brends: state.calculatorComponent.brends,
    result: state.calculatorComponent.result,
    isFetching: state.calculatorComponent.isFetching
  }

}






export default connect(mapStateToProps, { setBrend, setWeight, setResult, togleIsFetching })(Calculator);
