import CheckoutDialog from "../CheckoutDialog/CheckoutDialog";
import { useContext } from "react";
import CardProducts from "../CardProducts/CardProducts";
import CartContent from "../CartContent/CartContent";
import styles from "./styles.module.sass";
import { GlobalContext } from "../../../context/context";
import ProductModal from "../ProductModal/ProductModal";

export default function Main() {
	const { products, openDialog, openProductDetail } = useContext(GlobalContext);
	return (
		<main className={styles.mainContainer}>
			<header>
				<h1>Desserts</h1>
				<section>
					{products &&
						products.map((item) => <CardProducts key={item.id} {...item} />)}
				</section>
			</header>
			<aside>
				<CartContent />
			</aside>
			{openDialog && (
				<>
					<CheckoutDialog />
					<div className={styles.mainContainer__division} />
				</>
			)}
			{openProductDetail && (
				<>
					<ProductModal />
					<div className={styles.mainContainer__division} />
				</>
			)}
		</main>
	);
}
