import Api from "./Api";

class UserApi {
  constructor() {
    this.loadUser();
  }

  currentUser = {
    id: "Loading...",
    name: "Loading...",
    email: "Loading...",
    address: "Loading...",
    phone: "Loading...",
  };
  currentUserSet = () => {};

  async current() {
    try {
      const response = await Api.get("/user");
      // Log the response data in the console
     // console.log("current user response:", response.data);
      return response;
    } catch (error) {
      // Handle any errors and log them
      console.error("current user error:", error);
      throw error; // Re-throw the error for further handling
    }
  }

  updateUser(user) {
    return Api.put("/user", user)
      .catch.then((response) => {
        // Log the response data in the console
        //console.log("update user response:", response.data);
        return response; // Return the response to the caller
      })
      .catch((error) => {
        // Handle any errors and log them
        console.error("update user error:", error);
        throw error; // Re-throw the error for further handling
      });
  }

  async loadUser() {
    try {
      let userObject = await this.current();
      this.currentUser = userObject.data;
      this.currentUserSet(this.currentUser);
    } catch (e) {
      console.error(e);
    }
  }

  bindCurrentUserStateSetter(currentUserStateSetter) {
    this.currentUserSet = currentUserStateSetter;
  }
}

const userApiInstance = new UserApi();
export default userApiInstance;
