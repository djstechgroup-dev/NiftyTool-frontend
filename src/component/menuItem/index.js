import { React, useState } from "react"
import { List, ExpandMore, ExpandLess } from "@material-ui/icons"
import CheckBoxItem from "../checkBoxItem"
import { styles } from "./style"
import "./index.css"

export default function MenuItem(props) {
	const [bContentVisible, setContentVisible] = useState(false)
	const [filter, setFilter] = useState("")
	const checkedData = props.data
	const checkedKeys = Object.keys(checkedData)
	const title = props.title
	return (
		<div className="container">
			<div
				style={styles.item.title}
				onClick={() => setContentVisible(!bContentVisible)}
			>
				<List style={styles.item.list} />
				<span style={styles.item.span}>{title}</span>
				{bContentVisible ? (
					<ExpandLess style={styles.item.expand} />
				) : (
					<ExpandMore style={styles.item.expand} />
				)}
			</div>
			{bContentVisible && (
				<div
					className="menuItemScroll"
					style={styles.content.mainStyle}
				>
					<input
						style={styles.content.input}
						value={filter}
						onChange={(event) => setFilter(event.target.value)}
					/>
					{checkedKeys
						.filter((key) => {
							const lowerCaseKey = key.toLowerCase()
							const lowerCaseFilter = filter.toLowerCase()
							return lowerCaseKey.includes(lowerCaseFilter)
						})
						.map((key, index) => (
							<CheckBoxItem
								key={index}
								data={checkedData[key]}
								title={key}
								key1={title}
							/>
						))}
				</div>
			)}
		</div>
	)
}
