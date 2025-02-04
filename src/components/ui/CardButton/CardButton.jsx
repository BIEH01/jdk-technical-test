import { useContext, useEffect, useState } from "react";
import icons from "../../../constants/icons";
import styles from "./styles.module.sass";
import { GlobalContext } from "../../../context/context";

const CardButton = (item) => {
	const context = useContext(GlobalContext);
	const [click, setClick] = useState(false);
	const [counter, setCounter] = useState(0);
	const [addedItemId, setAddedItemId] = useState("");

	const copyData = (data, counter) => {
		const newCopy = { ...data };
		newCopy.clicked = true;
		newCopy.quantity = counter;
		newCopy.total = newCopy.price * counter;
		return newCopy;
	};

	const handleClick = (res, obj) => {
		const data = { ...obj.data };

		// increase button
		if (res === "more") {
			// increase the amount
			const index = context.selectedItems.findIndex(
				(item) => item.id === data.id
			);
			context.selectedItems.map((item, i) => {
				if (i === index) {
					item.quantity = item.quantity + 1;
					item.total = item.price * item.quantity;
				}
			});
			setCounter(context.selectedItems[index].quantity);
		}

		// decrease button
		if (res === "less") {
			// remove from the list
			if (counter === 1) {
				context.setGlobalCounter(0);
				setCounter(0);
				const update = context.selectedItems.filter(
					(item) => item.id !== data.id
				);
				context.setSelectedItems(update);

				// decrease the amount
			} else {
				const index = context.selectedItems.findIndex(
					(item) => item.id === data.id
				);
				context.selectedItems.map((item, i) => {
					if (i === index) {
						item.quantity = item.quantity - 1;
						item.total = item.price * item.quantity;
					}
				});
				setCounter(context.selectedItems[index].quantity);
			}
		}

		// add to cart button
		if (res === "add") {
			// add to the list
			setCounter(1);
			context.setGlobalCounter(1);
			const newItem = copyData(data, 1);
			context.setSelectedItems([...context.selectedItems, newItem]);
			setAddedItemId(newItem.id);
		}

		// set global counter
		if (context.selectedItems.length > 0) {
			let globalQuantity = context.selectedItems.reduce(
				(count, item) => count + item.quantity,
				0
			);
			context.setGlobalCounter(globalQuantity);
		}
	};

	useEffect(() => {
		if (context.selectedItems.some((item) => item.id === addedItemId)) {
			const index = context.selectedItems.findIndex(
				(item) => item.id === addedItemId
			);

			if (context.selectedItems[index].clicked) {
				setClick(context.selectedItems[index].clicked);
			} else {
				setClick(false);
			}
		} else {
			setClick(false);
			setAddedItemId("");
		}

		if (context.selectedItems.length === 0) {
			context.setGlobalCounter(0);
		}
	}, [addedItemId, context.selectedItems, context.globalCounter]);

	return (
		<>
			{!click && (
				<button
					className={styles.addButtonContainer}
					onClick={() => handleClick("add", item)}
				>
					<img src={icons.addToCart} alt="add to cart" loading="lazy" />
					<p>Add to Cart</p>
				</button>
			)}
			{click && (
				<div className={styles.buttonContainer}>
					<button onClick={() => handleClick("less", item)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="10"
							height="10"
							fill="none"
							viewBox="0 0 10 2"
						>
							<path fill="currentColor" d="M0 .375h10v1.25H0V.375Z" />
						</svg>
					</button>
					<p>{counter}</p>
					<button onClick={() => handleClick("more", item)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="10"
							height="10"
							fill="none"
							viewBox="0 0 10 10"
						>
							<path
								fill="currentColor"
								d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
							/>
						</svg>
					</button>
				</div>
			)}
		</>
	);
};

export default CardButton;
