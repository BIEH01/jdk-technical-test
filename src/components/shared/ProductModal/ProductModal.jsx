import { useContext } from "react";
import styles from "./styles.module.sass";
import { GlobalContext } from "../../../context/context";
import CardButton from "../../ui/CardButton/CardButton";

export default function ProductModal() {
	const { productSelected, setOpenProductDetail, setProductSelected } =
		useContext(GlobalContext);

	const handleClick = () => {
		setOpenProductDetail(false);
		setProductSelected("");
	};

	return (
		<article className={styles.productModalContainer}>
			<header>
				<h2>{productSelected.category}</h2>
				<p>{productSelected.name}</p>
				<p>${productSelected.price}</p>
				<p>
					description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Nihil eaque rem eum vitae ea porro voluptatum, maxime aliquam sapiente
					aut optio veniam quia officia possimus minima quos a illo odit.
				</p>
				<button onClick={() => handleClick()}>Close</button>
			</header>
			<aside>
				<img src={productSelected.image.desktop} alt="waffle" />
				<div>
					<CardButton data={productSelected} />
				</div>
			</aside>
		</article>
	);
}
