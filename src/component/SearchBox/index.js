import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import InputBase from "@material-ui/core/InputBase"
import SearchIcon from "@material-ui/icons/Search"

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "2px 4px",
		display: "flex",
		alignItems: "center",
		width: 300,
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	searchIcon: {
		padding: 10,
	},
	divider: {
		height: 28,
		margin: 4,
	},
}))

export default function CustomizedInputBase(props) {
	const classes = useStyles()

	return (
		<Paper component="form" className={classes.root}>
			<SearchIcon className={classes.searchIcon} />
			<InputBase
				className={classes.input}
				placeholder="Search item..."
				inputProps={{ "aria-label": "search item" }}
				onChange={(e) => props.setFilter(e.target.value)}
			/>
		</Paper>
	)
}
