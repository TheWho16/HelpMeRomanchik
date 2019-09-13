import React from 'react';
import  BrendButtons  from './BrendButtons';
import * as axios from 'axios'
import style from './CalculatorComponent.module.css';


class Calculator extends React.Component {

  componentDidMount() {

    axios.get(
      `http://127.0.0.1:5000/wholesale`)
    
      .then(response => {
        this.props.setBrend(response.data.data);
        debugger;
        
      });
    
  }


  render() {
 
    
    let BrendButtonselement = this.props.brends.map(m => 
    <BrendButtons
      brends={m}  
      key={m.id} 
      setWeight={this.props.setWeight}
      setResult={this.props.setResult} />);
    return (
      <div className={style.infoWraper}>
      <div className={style.Range1}>
      {BrendButtonselement}
       
      </div>
      
      </div>
    );
  }
}









export default Calculator;
