import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color,
        };
    }

    render() {
        console.log('===>', this.props);
        // const {times} = this.state;
        return (
            <div>
                <div
                    title="test"
                    // onClick={this.clickHandler}
                    style={{ margin: 10, width: 100, height: 100, backgroundColor: this.props.color }}
                />
            </div>
        )
    }
}

export default Square;