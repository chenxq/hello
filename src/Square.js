import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        color: state.color
    };
}
class Square extends React.Component {

    handleClick = () => {
        switch(this.props.value) {
            case 1: {
                console.log(this.props.value);
                this.props.dispatch({ type: 'CHANGE_YELLOW' });
                break;
            }
            case 2: {
                this.props.dispatch({ type: 'CHANGE_BLUE' });
                break;
            }
            case 3: {
                this.props.dispatch({ type: 'CHANGE_GREEN' });
                break;
            }
            default: {
                this.props.dispatch({ type: 'CHANGE_COLOR' });
            }
        }
        // this.props.dispatch({ type: 'CHANGE_COLOR' });
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

// export default Square;
export default connect(mapStateToProps)(Square);