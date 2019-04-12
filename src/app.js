import {Component, Fragment} from 'react'
import { hot } from 'react-hot-loader'
import Clock from './components/clock'
import Counter from './components/counter';
import MyForm from './components/my-form'; 
import { HashRouter } from 'react-router-dom' // ou BrowserRouter pour avoir les "vraies" url
import {Route, Switch, Redirect} from 'react-router'

class App extends Component {
    render(){
        return(
            <Fragment>
                <HashRouter>
                    <Switch>
                        <Route path='/clock' exact component={Clock}/>
                        <Route path='/counter' exact component={Counter}/>
                        <Route path='/form' exact component={MyForm}/>
                        <Route component={ ()=> <Redirect to ="/clock"/>}/>
                    </Switch>
                </HashRouter>
            </Fragment>
        )
    }
}

export default hot(module) (App)