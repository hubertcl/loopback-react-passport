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
			setAccessToken(response.data.id);
			//const cookies = new Cookies();
			//cookies.set('access_token',response.data.id);
			this.props.history.push('/meetups');
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

	loginAzure(){
		window.location="http://localhost:3000/auth/deloitte-azure-ad";
	}

	loginGoogle() {
		window.location="http://localhost:3000/auth/google";
	}

	handleClick(e) {
		console.log("Target click "+e.target.value);
		if (e.target.value === "facebook") {
			this.loginFacebook();
		} else if (e.target.value === "google") {
			this.loginGoogle();
		} else if (e.target.value === "azure") {
			this.loginAzure();
		}
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
					<input type="submit" value="Sign in to Wonderland" className="btn waves-effect waves-light" />
				</form>
				<br/>
                <button className="btn waves-effect waves-light" onClick={this.handleClick.bind(this)} value="facebook">
					Sign in using Facebook
				</button><br/><br/>
				<button className="btn waves-effect waves-light" onClick={this.handleClick.bind(this)} value="google">
					Sign in using Google
				</button><br/><br/>
				<button className="btn waves-effect waves-light" onClick={this.handleClick.bind(this)} value="azure">
					Sign in using Deloitte Azure AD
				</button>
				<script src="https://apis.google.com/js/platform.js" async defer></script>
			</div>
		)
	}
}

export default Login;