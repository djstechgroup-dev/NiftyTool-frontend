import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useVisibilityHook } from "react-observer-api"
import axios from "axios"

import FilterButton from "../component/FilterButton"
import TokenElement from "../component/tokenElement"
import SearchBox from "../component/SearchBox"
import SelectBox from "../component/SelectBox"
import { initStore } from "../redux/actioncreators"
import { styles } from "./style"
import { META_DATA_URL } from "../config/const"

export default function Main(props) {
	const [elements, setElements] = useState([])
	const [filter, setFilter] = useState("")

	const sideBarData = useSelector((state) => state)
	const dispatch = useDispatch()
	const { setElement, isVisible } = useVisibilityHook()

	const attrTypes = Object.keys(sideBarData)
	let isVisibleAll = true

	useEffect(() => {
		const sideBarStore = {}
		;(async () => {
			let { data } = await axios.get(
				META_DATA_URL + props.tokenAddr.address
			)
			data.map((item) => {
				item.attributes.map((attr) => {
					sideBarStore[attr.trait_type] =
						sideBarStore[attr.trait_type] ?? {}

					sideBarStore[attr.trait_type][attr.value] = sideBarStore[
						attr.trait_type
					][attr.value] ?? { checked: false, values: [] }

					sideBarStore[attr.trait_type][attr.value].values.push(
						item.tokenId
					)
					return 0
				})
				return 0
			})
			dispatch(initStore(sideBarStore))

			const result = data.map((item) => {
				let rarityScore = 0
				item.attributes.map((item) => {
					rarityScore +=
						sideBarStore[item.trait_type][item.value].values.length
					return 0
				})
				item["rarity"] = rarityScore
				return item
			})
			setElements(result)
		})()
	}, [dispatch, props])

	const sortElement = (sortKey) => {
		const condition = {
			default: (a, b) => {
				return a.tokenId - b.tokenId
			},
			rarity: (a, b) => {
				return a.rarity - b.rarity
			},
			// "price-decending": (a, b) => {
			// 	return a.rarity - b.rarity
			// },
			// "price-ascending": (a, b) => {
			// 	return a.rarity - b.rarity
			// },
		}

		let result = [...elements]
		result.sort(condition[sortKey])
		setElements(result)
	}

	return (
		<div className="container">
			<div style={styles.main}>
				<SearchBox setFilter={setFilter} />
				<SelectBox sortKey={sortElement} />
			</div>

			<div style={styles.main}>
				{attrTypes.map((key1, index) => {
					const checkedData = sideBarData[key1]
					const checkedKeys = Object.keys(checkedData)
					return (
						<>
							{checkedKeys
								.filter(
									(key) => checkedData[key].checked === true
								)
								.map((key, index) => {
									isVisibleAll = false
									return (
										<FilterButton
											key={index}
											title={key}
											key1={key1}
										/>
									)
								})}
						</>
					)
				})}
			</div>

			<div ref={setElement}>
				{isVisible && (
					<div style={styles.main}>
						{isVisibleAll
							? elements.map(
									(data, index) =>
										data.name
											.toLowerCase()
											.includes(filter.toLowerCase()) && (
											<TokenElement
												key={index}
												data={data}
											/>
										)
							  )
							: attrTypes.map((key, index) => {
									const checkedData = sideBarData[key]
									const checkedKeys = Object.keys(checkedData)
									return (
										<>
											{checkedKeys
												.filter(
													(key) =>
														checkedData[key]
															.checked === true
												)
												.map((key, index) =>
													checkedData[key].values.map(
														(id, index) =>
															elements[id].name
																.toLowerCase()
																.includes(
																	filter.toLowerCase()
																) && (
																<TokenElement
																	key={index}
																	data={
																		elements[
																			id
																		]
																	}
																/>
															)
													)
												)}
										</>
									)
							  })}
					</div>
				)}
			</div>
		</div>
	)
}
