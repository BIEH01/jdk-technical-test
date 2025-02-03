import { useContext } from "react";
import CardButton from "../../ui/CardButton/CardButton";
import styles from "./styles.module.sass";
import { GlobalContext } from "../../../context/context";

export default function CardProducts(data) {
	const context = useContext(GlobalContext);
	const selected = context.selectedItems.some((item) => item.id === data.id);

	return (
		<article className={styles.cardContainer}>
			<header className={styles.cardContainer__headerContent}>
				<img
					src={data.image.desktop}
					alt="baklava"
					className={`${
						selected
							? styles.cardContainer__headerContent__withBorder
							: styles.cardContainer__headerContent__noBorder
					}`}
				/>
				<div className={styles.cardContainer__cardButton}>
					<CardButton data={data} />
				</div>
			</header>
			<footer>
				<p>{data.category}</p>
				<p>{data.name}</p>
				<p>${data.price}</p>
			</footer>
		</article>
	);
}
