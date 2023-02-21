import Home from './pages/Home';
import { Route, Switch,} from 'react-router-dom';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Favorite from './pages/Favorite';
import Login from './pages/Login';
import Results from './pages/Results';

function App() {
    return(
        <>
            <Header/>
            <Switch>
                <Route exact path='/' component = {Home}/>
                <Route path='/detail/:id' component = {Detail}/>
                <Route path='/results' component = {Results}/>
                <Route path='/favorite' component = {Favorite}/>
                <Route path='/login' component = {Login}/>
                <Route  component= {NotFound}/>   
            </Switch>
            <Footer />
        </>
    )

}




export default App;
