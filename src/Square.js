import React from 'react';
import { connect } from 'react-redux';
// import { changeColor } from './actions/changeAction';
import { getUser } from './actions/getUser';


function mapStateToProps(state) {
    return {
        color: state.color,
        message: state.message
    };
}

const mapDispatchToProps = dispatch => {
    return {
        // changeColor: color => dispatch(changeColor({color})),
        getUser: message => dispatch(getUser({message}))
    }
  };

class Square extends React.Component {
    handleClick = () => {
        console.log('Hello');
        // this.props.changeColor();
        this.props.getUser();
    }

    render() {
        console.log('===>', this.props);
        return (
            <div>
                <div
                    title="test"
                    onClick={this.handleClick}
                    style={{ margin: 10, width: 100, height: 100, backgroundColor: 'red' }}
                />
            </div>
        )
    }
}

// export default Square;
export default connect(mapStateToProps, mapDispatchToProps)(Square);