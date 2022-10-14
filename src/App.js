import logo from "./logo.svg";
import "./App.css";
import FacebookLogin from "react-facebook-login";

function App() {

  const responseFacebook = (response) => {
    console.log(response);
  }

  const componentClicked = (data) => {
    console.log(data);
  }

  return (
    <div className="App">
      <h2>Login with facebook</h2>

      <FacebookLogin
        appId="853873578358735"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
        isSdkLoaded={true}
      />
    </div>
  );
}

export default App;
