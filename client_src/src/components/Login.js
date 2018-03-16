import React, {Component} from 'react';
import axios from 'axios';
import { setAccessToken } from '../services/AuthAccess';

class Login extends Component{

    constructor(props){
		super(props);
		this.state = {
			email:'',
			password:''
		}
	}
	

    submitLogin(credentials){
		//const cookies = new cookies();
		axios.post('http://localhost:3000/api/users/login',
			credentials
		).then(response => {
            console.log(response.data.id);
			setAccessToken(response.data.id);
			//const cookies = new Cookies();
			//cookies.set('access_token',response.data.id);
			this.props.history.push('/');
		}).catch(err => console.log(err));
	}

	onSubmit(e){
		const credentials = {
			username : this.refs.username.value,
			password : this.refs.password.value
		}
		this.submitLogin(credentials);
		e.preventDefault();
	}

	loginFacebook(){
		window.location="http://localhost:3000/auth/facebook";
	}

	handleClick(e) {
		this.loginFacebook();
		e.preventDefault();
	}

	render(){
		return(
			<div>
				<br/>
				<h1>Login</h1>
                
				<form onSubmit={this.onSubmit.bind(this)}>
					<div className="input-field">
						<input type="text" name="username" ref="username" />
						<label htmlFor="username" >Username</label>
					</div>
					<div className="input-field">
						<input type="password" name="password" ref="password" />
						<label htmlFor="password" >Password</label>
					</div>
					<input type="submit" value="Login to Wonderland" className="btn waves-effect waves-light" />
				</form>
				<br/>
                <button className="btn waves-effect waves-light" onClick={this.handleClick.bind(this)}>
					Login with Facebook
				</button>

				
			</div>
		)
	}
}

export default Login;