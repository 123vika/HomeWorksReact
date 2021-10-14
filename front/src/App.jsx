import { Grid } from '@material-ui/core';
import { useStyles } from './appStyle';
import RouterPage from './Pages/RouterPage/RouterPage';

function App() {
	const classes = useStyles();

	return (
		// header  new component

		<Grid className={classes.root}>
			<RouterPage />
		</Grid>
	);
}

export default App;
