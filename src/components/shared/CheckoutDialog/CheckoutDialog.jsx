import CheckoutItem from "../../ui/CheckoutItem/CheckoutItem";
import icons from "../../../constants/icons";
import styles from "./styles.module.sass";
import { useContext } from "react";
import { GlobalContext } from "../../../context/context";

export default function CheckoutDialog() {
	const context = useContext(GlobalContext);

	const handleClick = () => {
		context.setSelectedItems([]);
		context.setOpenDialog(false);
	};

	return (
		<article className={styles.checkContainer}>
			<header>
				<img src={icons.orderConfirmed} alt="check" />
				<h2>Order Confirmed</h2>
				<p>We hope you enjoy your food!</p>
			</header>
			<div>
				<ul>
					{context.selectedItems.map((item) => (
						<li key={item.id}>
							<CheckoutItem item={item} />
							<div />
						</li>
					))}
				</ul>
				<div>
					<p>Order Total</p>
					<p>{context.globalTotal}</p>
				</div>
			</div>
			<footer>
				<button onClick={() => handleClick()}>Start New Order</button>
			</footer>
		</article>
	);
}
