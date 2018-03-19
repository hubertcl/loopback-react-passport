import Cookies from 'universal-cookie';

export function setAccessToken (access_token) {
  const cookies = new Cookies();
	cookies.set('access_token', access_token);
     //indow.localStorage.setItem('access_token', access_token)
  }
  
  export function getAccessToken () {
    const cookies = new Cookies();
    let access_token = cookies.get('access_token');
    if (access_token && access_token.includes(".")){
      access_token = access_token.split(/:(.+)/)[1];
      access_token = access_token.split(".")[0];
  }
    return access_token;
  }

  export function removeCookies () {
    const cookies = new Cookies();
    cookies.remove("access_token", { domain: 'localhost' });
    let connectSid = cookies.get('connect.sid');
    let userId = cookies.get('userId');
    if (connectSid && userId) {
      cookies.remove("connectSid", { domain: 'localhost' });
      cookies.remove("userId", { domain: 'localhost' });
    }
  }