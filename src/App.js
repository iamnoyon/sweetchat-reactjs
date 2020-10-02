import React, {component} from 'react';
import{
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import home from './pages/home/home';
import chat from './pages/chat/chat';
import profile from './pages/profile/profile';
import signup from './pages/signup/signup';
import login from './pages/signup/signup';
import firebase from './services/firebase';
import {toast, ToastContainer} from 'react-toastify';
import { Toast } from 'react-toastify/dist/components';

class App extends component{
  showToast=(type, message) => {
    switch(type){
      case 0:
        toast.warning(message)
        break;
      case 1:
        toast.success(message)
        break;
      default:
        break;
    }
  }
  constructor(){
    super();
    this.state = {
      authenticated: false,
      loading: true
    };
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.setState({
          authenticated: true,
          loading: false
        });
      }
      else{
        this.setState({
          authenticated: false,
          loading: false
        });
      }
      })
  }
  render(){
    return this.state.loading === true?(
      <div className = "spinner-border text-success" roll = 'status'>
        <span className = "sr-only">
          Loading.....
        </span>
      </div>
    ):(
      <Router>
        <ToastContainer
        autoClose = {2000}
        hideProgressBar = {true}
        position = {toast.POSITION.BOTTOM_CENTER}
        />
        <Switch>
          <Route
          exact
          path = "/"
          render = {props => <home {...props}/>}
          />

          <Route
          path = "/login"
          render = {props => <login showToast = {this.showToast}{...props}/>}
          />

          <Route
          path = "/profile"
          render = {props => <profile showToast = {this.showToast}{...props}/>}
          />

          <Route
          path = "/signup"
          render = {props => <signup showToast = {this.showToast}{...props}/>}
          />

          <Route
          path = "/chat"
          render = {props => <chat showToast = {this.showToast}{...props}/>}
          />
        </Switch>
      </Router>
    )
  }
}
export default App