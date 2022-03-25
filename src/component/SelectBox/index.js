import React, { useState } from "react"
import { withStyles } from "@material-ui/core/styles"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import InputBase from "@material-ui/core/InputBase"

const BootstrapInput = withStyles((theme) => ({
	root: {
		"label + &": {
			marginTop: theme.spacing(3),
		},
	},
	input: {
		width: 100,
		marginLeft: 20,
		borderRadius: 4,
		position: "relative",
		backgroundColor: theme.palette.background.paper,
		border: "1px solid #ced4da",
		fontSize: 16,
		padding: "10px 26px 10px 12px",
		transition: theme.transitions.create(["border-color", "box-shadow"]),
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		"&:focus": {
			borderRadius: 4,
			borderColor: "#80bdff",
			boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
		},
	},
}))(InputBase)

export default function CustomizedSelects(props) {
	const [sortKey, setSortKey] = useState("default")
	const handleChange = (event) => {
		props.sortKey(event.target.value)
		setSortKey(event.target.value)
	}
	return (
		<Select
			labelId="demo-customized-select-label"
			id="demo-customized-select"
			value={sortKey}
			onChange={handleChange}
			input={<BootstrapInput />}
		>
			<MenuItem value={"default"}>Default</MenuItem>
			<MenuItem value={"rarity"}>Rarity</MenuItem>
		</Select>
	)
}
