import { setToken } from '../reducers/LogginReducer'
// Fetches token with username and password
export default async function FetchLoginData(username, userpassword, setError, setUsername, setPassword, dispatch, navigate ) {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: username, password: userpassword })
        });
        const result = await response.json();
        if(response.status === 200) {
            dispatch(setToken(result.body.token))
            navigate('/profile')
        } else {
            setError(true)
            setUsername('');
            setPassword('');
        }
    } catch(error){
        console.error(error);
    }
}

