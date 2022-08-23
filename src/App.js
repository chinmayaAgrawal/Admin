import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import SensorsList from "./pages/sensors/SensorsList";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import AnalyticsMain from "./pages/analytics/AnalyticsMain";
import GatewayList from "./pages/gateway/GatewayList";
import TransactionList from "./pages/transaction/TransactionList";
import Notifications from "./pages/notification/Notifications";
import Issue from "./pages/issue/Issue";
//import AppHome from "./pages/app/AppHome";
import {useState} from "react";


function App() {
  
  /*  constructor(props){
      super(props);
      this.state = {loginStatus: "0"};
  }
  componentDidMount(){
      if(localStorage.getItem("user_id")){
          this.setState({ loginStatus: "1" });
      }
  }*/
  /*const [state, onSuccess] = useState(false)
  if(onSuccess==true){*/
  
  return (
    <div >
    <Router>
       
      <Topbar />
     
      <div className="container" >
        <Sidebar />
        <Route path="/notifications">
            <Notifications />
          </Route>   
          <Route path="/issue">
            <Issue />
          </Route> 
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/sensors">
            <SensorsList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/analytics">
            <AnalyticsMain />
          </Route>
          <Route path="/transaction">
            <TransactionList />
          </Route>
          <Route path="/gateway">
            <GatewayList />
          </Route>  
          
        </Switch>
          
        </div>
      
    </Router>
    </div>
  )

  }
export default App;
/* 
 <Route exact path="/login" loginStatus={() => {
      this.setState({onSuccess:true});
      if(onSuccess){
        return(
          <div >
          <Router>
            <Switch>
               
            <Topbar />
             <div className="container" >
              <Sidebar />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/users">
                  <UserList />
                </Route>
                <Route path="/user">
                  <User />
                </Route>
                <Route path="/user/:userId">
                  <User />
                </Route>
                <Route path="/newUser">
                  <NewUser />
                </Route>
                <Route path="/products">
                  <ProductList />
                </Route>
                <Route path="/sensors">
                  <SensorsList />
                </Route>
                <Route path="/product/:productId">
                  <Product />
                </Route>
                <Route path="/newproduct">
                  <NewProduct />
                </Route>
                <Route path="/analytics">
                  <AnalyticsMain />
                </Route>
                <Route path="/transaction">
                  <TransactionList />
                </Route>
                <Route path="/gateway">
                  <GatewayList />
                </Route>
                </div>
              </Switch>
           
            </Switch>
          </Router>
          </div>
        )
      }
    }}> 








        <div > 
    <Router>
      <Switch>
         <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
          <Route exact path="/app">
            <AppHome />
         </Route > 
      </Switch>
    </Router>
    </div>
    
*/