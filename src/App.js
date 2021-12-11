import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInUpPage from './pages/sign-in-up-page/sign-in-up-page.component';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {

  unsubscribeFromAuth = null

  //fetches auth data from firebase on mount
  componentDidMount() {
    const {setCurrentUser} = this.props;

    //inside onAuthStateChanged takes a function where parameter is what user state is of auth. callback function queries DB, and accepts login if data exists
    //firebase keeps state persistent by default. keeps user signed in on browser close
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      //if userAuth exists
      if(userAuth) {
        //google auth check - checks if user exists in db on google sign in. if not, creates user, stores in db and returns the data
        const userRef = await createUserProfileDocument(userAuth);

        //Once user exists in db, get snapshot of data and set state
        userRef.onSnapshot(snapShot => {
          setCurrentUser({ 
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      else {
        //if userAuth is null, set state of currentUser to null (not logged in or user logs out)
        setCurrentUser(userAuth);
      }
    });
  }

  //closes auth subscription when component unmounts to avoid memory leakage
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      //Routes component ensures that once a route finds a path match, it does not render anything else but that route 
      //render used to determine what component to return, checks if current user is set.
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/signin' element={<SignInWrapper currentUser={this.props.currentUser}><SignInUpPage /></SignInWrapper>} />
          </Routes>
        </Router>
      </div>
    );
  }
}

//rediret away from sign in page if user signed in
const SignInWrapper = ({ children, currentUser }) => {
  return currentUser ? <Navigate to="/" replace /> : children;
};

//connect store to component to grab values.
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

//function that gets dispatch property and dispatches new action to be passed
const mapDispatchToProps = dispatch => ({
  //gets user object and dispatch will pass to the reducers
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
