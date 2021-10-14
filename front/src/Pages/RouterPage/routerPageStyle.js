import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		margin: '30px',
	},
	paper: {
		margin: '30px',
		padding: theme.spacing(2),
		textAlign: 'left',
		color: theme.palette.text.secondary,
	},
	container: {
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		direction: 'column-reverse',
	},
	root_appButton: {
		display: 'flex',
		justifyContent: 'center',
		margin: '25px',
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 40,
		padding: '0 30px',
	},
}));
