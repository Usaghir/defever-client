import Api from "./Api";

class AuthApi {
  authenticate({ email, password }) {
    return Api.post("/authenticate", { email, password })
      .then((response) => {
        // Log the response data in the console
       // console.log("Authentication response:", response.data);
        return response; // Return the response to the caller
      })
      .catch((error) => {
        // Handle any errors and log them
        console.error("Authentication error:", error);
        throw error; // Re-throw the error for further handling
      });
  }

  register({ name, email, password }) {
    return Api.post("/register", { name, email, password })
      .then((response) => {
        // Log the response data in the console
        //console.log("Registration response:", response.data);
        return response; // Return the response to the caller
      })
      .catch((error) => {
        // Handle any errors and log them
        console.error("Registration error:", error);
        throw error; // Re-throw the error for further handling
      });
  }
}

const authApiInstance = new AuthApi();
export default authApiInstance;
