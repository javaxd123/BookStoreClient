import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import '../style/App.css';
import history from './helpers/history';

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <ul className="nav justify-content-end nav-custom">
                        <li class="nav-item">
                            <Link class="nav-link active" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/login">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/register">Register</Link>
                        </li>
                    </ul>
                    <hr />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                    </Switch>
                </div>
            </Router>
        );
    }
}


export default App;