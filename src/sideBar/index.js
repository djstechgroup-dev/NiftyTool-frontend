import React from "react"
import MenuItem from "../component/menuItem"
import { useSelector } from "react-redux"
// import { styles } from "../component/menuItem/style"

export default function SideBar() {
	const menuData = useSelector((state) => state)
	const menuKeys = Object.keys(menuData)
	return (
		<>
			{menuKeys.map((key, index) => (
				<MenuItem key={index} data={menuData[key]} title={key} />
			))}
		</>
	)
}
