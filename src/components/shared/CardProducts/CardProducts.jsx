import { useContext } from "react";
import CardButton from "../../ui/CardButton/CardButton";
import styles from "./styles.module.sass";
import { GlobalContext } from "../../../context/context";

export default function CardProducts(data) {
	const context = useContext(GlobalContext);
	const selected = context.selectedItems.some((item) => item.id === data.id);

	const handleClick = (id) => {
		context.setProductSelected(id);
		context.setOpenProductDetail(true);
	};

	return (
		<article className={styles.cardContainer}>
			<header className={styles.cardContainer__headerContent}>
				<a onClick={() => handleClick(data.id)}>
					<img
						src={data.image.desktop}
						alt="baklava"
						className={`${
							selected
								? styles.cardContainer__headerContent__withBorder
								: styles.cardContainer__headerContent__noBorder
						}`}
					/>
				</a>
				<div className={styles.cardContainer__cardButton}>
					<CardButton data={data} />
				</div>
			</header>
			<footer>
				<a onClick={() => handleClick(data.id)}>
					<p>{data.category}</p>
					<p>{data.name}</p>
					<p>${data.price}</p>
				</a>
			</footer>
		</article>
	);
}
