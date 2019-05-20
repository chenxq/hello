import React from 'react';
import Square from './Square';

class MultiSquare extends React.Component {
    renderSquare(i) {
        return <Square value={i}/>;
    }
    render() {
        const array = [1, 2, 3];
        return (
            <div>
                {array.map(item => this.renderSquare(item))}
                {/* <div>{this.renderSquare(array[0])}</div>
                <div>{this.renderSquare(array[1])}</div>
                <div>{this.renderSquare(array[2])}</div> */}
                {/* <button
                    text='Change'
                    onClick={Square.changeGreen}
                /> */}
            </div>
        )
    }
}

export default MultiSquare;