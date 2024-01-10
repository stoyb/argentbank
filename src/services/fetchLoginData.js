import { setToken } from '../reducers/LogginReducer'

export default async function FetchLoginData(username, userpassword, setError, setUsername, setPassword, dispatch, navigate ) {
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
}

