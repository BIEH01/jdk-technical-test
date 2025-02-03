import { useContext, useEffect, useState } from "react";
import icons from "../../../constants/icons";
import CartItem from "../../ui/CartItem/CartItem";
import styles from "./styles.module.sass";
import { GlobalContext } from "../../../context/context";

export default function CartContent() {
	const context = useContext(GlobalContext);
	const [totalCost, setTotalCost] = useState(0);

	const handleClick = () => {
		context.setGlobalTotal(totalCost);
		context.setOpenDialog(true);
	};

	const totalAddition = () => {
		let grandTotal = context.selectedItems.reduce(
			(count, item) => count + item.total,
			0
		);
		setTotalCost(grandTotal);
	};

	useEffect(() => {
		totalAddition();
	}, [context.selectedItems, context.globalCounter, totalCost]);

	return (
		<div className={styles.cartContainer}>
			<h2>Your Cart ({context.globalCounter})</h2>
			{context.selectedItems.length === 0 && (
				<header>
					<img src={icons.illustrationEmptyCart} alt="Empty cart" />
					<p>Your added items will appear here</p>
				</header>
			)}
			{context.selectedItems.length > 0 && (
				<div>
					<ul>
						{context.selectedItems.map((item) => (
							<li key={item.id}>
								<CartItem item={item} />
								<div />
							</li>
						))}
					</ul>
					<div>
						<p>Order Total</p>
						<p>${totalCost}</p>
					</div>
					<footer>
						<div>
							<img src={icons.carbonNeutral} alt="carbon neutral" />
							<p>
								This is a <strong>carbon-neutral</strong> delivery
							</p>
						</div>
						<button onClick={() => handleClick()}>Confirm Order</button>
					</footer>
				</div>
			)}
		</div>
	);
}
