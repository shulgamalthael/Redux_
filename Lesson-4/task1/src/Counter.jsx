import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './counter.actions';

class Counter extends React.Component {
    render() {
        const [counter, setCounter] = useState(0);
        return(
            <div class="counter">
                <button 
                    class="counter__button"
                    onClick={incr}
                >
                    -
                </button>
                <span 
                    class="counter__value"
                    onClick={res}
                >
                    {counter}
                </span>
                <button 
                    class="counter__button"
                    onClick={decr}
                >
                    +
                </button>
            </div>
        )
    }
}

const mapState = state => {
    return {
        counter: state
    }
}

const mapDispatch = dispatch => {
    return {
        incr: () => dispatch(increment()),
        decr: () => dispatch(decrement()),
        res: () => dispatch(reset()) 
    }
}

const connector = connect(mapState, mapProps);

export default Counter;