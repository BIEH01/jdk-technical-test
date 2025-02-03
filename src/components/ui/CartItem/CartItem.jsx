import { useContext } from "react";
import icons from "../../../constants/icons";
import styles from "./styles.module.sass";
import { GlobalContext } from "../../../context/context";

const CartItem = ({ item }) => {
	const context = useContext(GlobalContext);

	const handleDeleteItem = (id) => {
		let newList = context.selectedItems.filter((item) => item.id !== id);
		context.setSelectedItems(newList);
		context.setIdDeleted(id);
	};

	return (
		<article className={styles.cartItemContainer}>
			<div className={styles.cartItemContainer__textContent}>
				<p>{item.name}</p>
				<div>
					<p>{item.quantity}x</p>
					<p>@${item.price}</p>
					<p>${item.total}</p>
				</div>
			</div>
			<button onClick={() => handleDeleteItem(item.id)}>
				<img src={icons.removeItem} alt="remove item" />
			</button>
		</article>
	);
};

export default CartItem;
