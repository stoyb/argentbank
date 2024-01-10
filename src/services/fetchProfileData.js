import { editFirstName, editLastName } from "../reducers/UpdateReducer";

export default async function fetchProfileData(token, dispatch) {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
          "Authorization" : "Bearer " + token
        }
      });
      const result = await response.json();
      console.log(result);
      dispatch(editFirstName(result.body.firstName));
      dispatch(editLastName(result.body.lastName));
    } catch (error) {
      console.error(error);
    }
  };