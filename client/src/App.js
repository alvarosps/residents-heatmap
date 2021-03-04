import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import ResidenceListPage from './pages/residence-list-page/residence-list-page.component';
import AddResidence from './components/add-residence/add-residence.component';
import Residence from './components/residence/residence.component';
import HeatmapPage from './pages/heatmap-page/heatmap-page.component';

const App = () => (
	<div className="App">
		<Header />
		<Switch>
			<Route exact path={['/heatmap', '/']} component={HeatmapPage} />
			<Route exact path='/residences' component={ResidenceListPage} />
			<Route exact path='/add-residence' component={AddResidence} />
			<Route path='/residences/:id' component={Residence} />
		</Switch>
	</div>
);

export default App;
