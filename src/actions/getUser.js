import axios from 'axios';
// axios.defaults.baseURL = 'https://reading-club-backend.herokuapp.com';
// axios.defaults.headers = {'X-Requested-With': 'XMLHttpRequest'};

export const GET_USER = 'GET_USER';

function get(){
    return {
        type: 'GET',
    }
}
export function getUser() {
    return (dispatch) => {
        axios.get('https://reading-club-backend.herokuapp.com/users')
            .then(res => {
                // alert('ok');
                // const data = res.data;
                // console.log('------>', typeof data);
                var str = JSON.stringify(res);
                console.log('------>', str);
                alert(str);
                dispatch(get());
            }).catch(error => { })
    }
}