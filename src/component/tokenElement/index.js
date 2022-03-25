import { styles } from "./style"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "./index.css"

export default function tokenElement(props) {
	const { data } = props
	return (
		<div className="tokenInfo" style={styles.container}>
			<LazyLoadImage
				style={styles.img}
				src={data.image}
				alt={data.name}
			/>
			<p>{data.name}</p>
		</div>
	)
}
