const baseURL = "http://localhost:3000/api/v1";
export {};

const doesUserExists = async (email: string) => {
  const url = `${baseURL}/users/exists?email=${email}`;
  const response = await fetch(url, {
    method: "GET",
  }).then(res => res.json());
  return response.data;
};
const RegisterUser = async (user) => {
    let url = `${baseURL}/register`;
    try {
      let response = await fetch(`${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      let data = await response.json();
      return data;
    } catch (err) {}
  };
  
  const LoginUser = async (user) => {
    let url = `${baseURL}/login`;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.username)) {
      user.email = user.username;
      user.username = "";
    }
    try {
      let response = await fetch(`${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      let data = await response.json();
      if (data.isSuccess) return data;
      else return false;
    } catch (err) {
      console.log(err);
    }
  };
  
  const SetTokens = (tokens) => {
    localStorage.setItem("accessToken", tokens.accessToken);
    localStorage.setItem("refreshToken", tokens.refreshToken);
  };
  const RetrieveTokens = () => {
    let tokens = {
      accessToken: localStorage.getItem("accessToken"),
      refreshToken: localStorage.getItem("refreshToken"),
    };
    return tokens;
  };
  
  export { IsUserExists, RegisterUser, LoginUser, SetTokens, RetrieveTokens };
  
