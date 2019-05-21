import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
        };
    }

    handleClick = () => {
        // var isClick = !this.state.click;
        // this.setState({
        //     click: isClick
        // });
        this.props.callBackParent();
      }

    render() {
        console.log('===>', this.props);
        return (
            <div>
                <div
                    title="test"
                    onClick={this.handleClick}
                    style={{ margin: 10, width: 100, height: 100, backgroundColor: this.props.color }}
                />
            </div>
        )
    }
}

export default Square;