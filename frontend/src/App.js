import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import About from './containers/About';
import Contact from './containers/Contact';
import Home from './containers/Home';
import ListingDetail from './containers/ListingDetail';
import Listings from './containers/Listings';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Layout from './hocs/Layout';
import './sass/main.scss';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/listings" component={Listings} />
          <Route exact path="/listings/:id" component={ListingDetail} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

export default App;
