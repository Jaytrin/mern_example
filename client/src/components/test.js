import React, {Component} from 'react';
import axios from 'axios';

class Test extends Component{
    async componentDidMount(){

        const user = {
            email: 'test@gmail.com',
            password: 'sdfsd'
        };

        const response = await axios.post('/api/login',user);

        console.log('Login Response:', response);

        // const response = await axios.get('/api/test');

        // console.log('Test Response:', response);

        // const user = await axios.get('/api/user');

        // console.log('User Data:', user);
    }

    render(){
        return <h1>API Testing Component</h1>
    }
}

export default Test;