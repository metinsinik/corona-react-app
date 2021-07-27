import React, { useState } from 'react';
import StatisticsDashboard from '../StatisticsDashboard/StatisticsDashboard';
import SearchArea from "../SearchArea/SearchArea";
import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
	const [stats, setStats] = useState({});
	return (
		<div className="App">
			<SearchArea setStats={setStats}></SearchArea>
			<StatisticsDashboard stats={stats && stats.data || stats} lastUpdate={stats.last_update || ""}></StatisticsDashboard>
		</div>
	);
}

export default App;