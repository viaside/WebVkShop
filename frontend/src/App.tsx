import { NavBar } from './components/NavBar'
import AppRoutes from './AppRoutes'
import { Component, ReactNode } from 'react'
import { getCookie, setCookie} from 'typescript-cookie'


class App extends Component{
  async componentDidMount() {
    if(getCookie("islogin") === "true") {
      console.log("auth")
    } else{
      setCookie('islogin', false);
      let code = (window.location.href).substring(28);
      const resp = await fetch("http://localhost:3001/login?code="+code);
      const data = await resp.json();  
      if ( data["message"] === "error"){
        console.log(data);
      } else {
        setCookie('islogin', "true");
        setCookie('id', data["id"]);
        setCookie('image', data["crop_photo"]["photo"]["sizes"][1]["url"]);
        window.location.href = "http://localhost:3000/";
      }
    }
  }


  render(): ReactNode {
    return (
        <div className='font'>
          <NavBar/>
          <AppRoutes/>
        </div>
      )
  }
}

export default App;
