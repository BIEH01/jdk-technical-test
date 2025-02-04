import styles from "./styles.module.sass";

const CheckoutItem = ({ item }) => {
	return (
		<article className={styles.checkoutItemContainer}>
			<img src={item.image.desktop} alt="baklava" />
			<div className={styles.checkoutItemContainer__textContent}>
				<p>{item.name}</p>
				<div>
					<p>{item.quantity}x</p>
					<p>@ ${item.price}</p>
				</div>
			</div>
			<p>${item.total}</p>
		</article>
	);
};

export default CheckoutItem;
