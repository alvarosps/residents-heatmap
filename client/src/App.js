import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import AddResidence from './components/add-residence/add-residence.component';
import Residence from './components/residence/residence.component';

const App = () => (
	<div className="App">
		<Header />
		<Switch>
			<Route exact path={['/', '/residences']} component={HomePage} />
			<Route exact path='/add-residence' component={AddResidence} />
			<Route path='/residences/:id' component={Residence} />
		</Switch>
	</div>
);

export default App;
