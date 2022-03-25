import Button from "@material-ui/core/Button"
import { Close } from "@material-ui/icons"
import { useDispatch } from "react-redux"
import { setCheck } from "../../redux/actioncreators"
import { styles } from "./style"

export default function FilterButton(props) {
	const { title, key1 } = props
	const dispatch = useDispatch()
	return (
		<div style={styles.main}>
			<Button
				variant="outlined"
				color="primary"
				endIcon={<Close />}
				onClick={() => dispatch(setCheck({ key1, key2: title }))}
			>
				{title}
			</Button>
		</div>
	)
}
