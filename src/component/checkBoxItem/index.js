import { React } from "react"
import { useDispatch } from "react-redux"
import { setCheck } from "../../redux/actioncreators"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import { styles } from "./style"

export default function CheckedItem(props) {
	const { data, title, key1 } = props
	const dispatch = useDispatch()
	return (
		<div>
			<FormControlLabel
				style={{ height: "35px" }}
				control={
					<Checkbox
						checked={data.checked}
						onClick={() =>
							dispatch(setCheck({ key1, key2: title }))
						}
						color="primary"
					/>
				}
				label={title}
			/>
			<label style={styles.label}>{data.values.length}</label>
		</div>
	)
}
