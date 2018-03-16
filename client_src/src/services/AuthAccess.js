import Cookies from 'universal-cookie';

export function setAccessToken (access_token) {
  const cookies = new Cookies();
	cookies.set('access_token', access_token);
     //indow.localStorage.setItem('access_token', access_token)
  }
  
  export function getAccessToken () {
    const cookies = new Cookies();
    return 	cookies.get('access_token');
  }