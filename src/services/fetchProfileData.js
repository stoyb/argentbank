// Fetches user data with token 
export default async function fetchProfileData(token) {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Authorization" : "Bearer " + token
      }
    });
    const result = await response.json();
    return result
  } catch (error) {
    console.error(error);
  }
};