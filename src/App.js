import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInUpPage from './pages/sign-in-up-page/sign-in-up-page.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    //state default null - no user logged in. When user logs in, auth from firebase will setState to logged in user.
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  //fetches auth data from firebase on mount
  componentDidMount() {
    //inside onAuthStateChanged takes a function where parameter is what user state is of auth. callback sets state to that user object
    //firebase keeps state persistent by default. keeps user signed in on brower close
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    })
  }

  //closes auth subscription when component unmounts to avoid memory leakage
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      //Routes component ensures that once a route finds a path match, it does not render anything else but that route 
      <div>
        <Router>
          <Header currentUser={this.state.currentUser} />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/signin' element={<SignInUpPage />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
