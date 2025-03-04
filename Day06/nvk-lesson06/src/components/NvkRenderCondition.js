import React, { Component } from 'react';
import NvkLoginControl from './NvkLoginControl';

class NvkRenderCondition extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false,
        }
    }
        // Hàm xử lý sự kiện login
        NvkHandleLogin = ()=>{
            this.setState({
                isLoggedIn:true
            })
        }
        // Hàm xử lý sự kiện logout
        NvkHandleLogout=()=>{
            this.setState({
                isLoggedIn:false
            })
        }
    render() {
        let flag = this.state.isLoggedIn;
        return (
            <div className='alert alert-danger'>
                <h2>Render Condition</h2>
                <hr/>
                <NvkLoginControl isLoggedIn={flag} />
                <hr/>
                {
                   flag?<button onClick={this.NvkHandleLogout}>Logout</button>
                        :<button onClick={this.NvkHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default NvkRenderCondition;