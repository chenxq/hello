import React from 'react';

class Square extends React.Component {
    constructor() {
        super();
        this.state = {
            times: 1,
            bgColor: 'red',
        };
    }

    clickHandler = () => {
        alert(this.props.value);
    }

    changeGreen = () => {
        console.log('===> start change color')
        // `setState` is asynchronous
        this.setState({bgColor: 'green'}, () => {
            console.log('===>set state done')
        });
        console.log('bg color', this.state.bgColor);
    }

    render() {
        console.log('===>', this.state);
        const {times} = this.state;
        return (
            <div>
                <div
                    title="test"
                    onClick={this.clickHandler}
                    style={{ margin: 10, width: 100 * times, height: 100 * times, backgroundColor: this.state.bgColor }}
                />
            </div>
        )
    }
}

export default Square;