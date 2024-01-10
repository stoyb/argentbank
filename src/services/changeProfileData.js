export default async function changeProfileData(token, first, last){
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
       method: "PUT",
       headers: {
        "Authorization" : "Bearer " + token,
        "Content-Type": "application/json"
       },
       body: JSON.stringify({ firstName: first, lastName: last})
     });
     const result = await response.json();
     console.log(result)
 }