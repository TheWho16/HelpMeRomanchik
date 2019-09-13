import React from 'react';
import style from './CalculatorComponent.module.css';
import { Range } from 'react-range';
class BrendButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values1: [5],
            price: this.props.brends.price,
            rezylt:this.props.result
        };

    }
componentDidUpdate(){
    debugger;
   
}
   
    render() {
        let  onSum = ()=>{
            debugger;
            let rez= 7;
              this.props.setWeight(Number(rez))
              this.props.setResult(Number(this.state.values1))
            
          }
        return <div >
            <button value ={this.state.price} onClick={onSum}> {this.props.brends.name}</button>
            <div className={style.buttonsArea}>
              <span> Бренд: {this.props.brends.name}</span>
              <span>  Цена за 1 кг: {this.props.brends.price}   </span>          
              <span>  Вес:{this.state.values1} === {this.props.brends.weight}</span>
              <span> RESULT:{this.props.result} === {this.props.brends.result}</span>

            </div>

            <div className={style.Range1}>

                <Range
                    step={1}
                    min={5}
                    max={100}
                    values={this.state.values1}
                    onChange={values1 => this.setState({ values1 })}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '6px',
                                width: '100%',
                                backgroundColor: '#ccc',
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '42px',
                                width: '42px',
                                backgroundColor: '#999',
                                borderRadius: '10px 100px / 120px'
                            }}
                        />
                    )}
                />

            </div>
        </div >
    }
}



export default BrendButtons; 