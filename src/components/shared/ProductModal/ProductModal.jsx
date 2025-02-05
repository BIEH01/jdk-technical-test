import { useContext, useEffect, useState } from "react";
import icons from "../../../constants/icons";
import styles from "./styles.module.sass";
import { GlobalContext } from "../../../context/context";

export default function ProductModal() {
	const context = useContext(GlobalContext);
	const [productToShowcase, setProductToShowcase] = useState(null);
	const product = context.selectedItems.find(
		(item) => item.id === context.productSelected
	);

	console.log(product);
	console.log(context.productSelected);

	setProductToShowcase(product);

	const handleClick = () => {
		//
	};

	return (
		<article className={styles.productModalContainer}>
			<header>
				<h2>{productToShowcase.category}</h2>
				<p>{productToShowcase.name}</p>
				<p>{productToShowcase.price}</p>
				<p>
					description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Nihil eaque rem eum vitae ea porro voluptatum, maxime aliquam sapiente
					aut optio veniam quia officia possimus minima quos a illo odit.
				</p>
			</header>
			<aside>
				{/* <img src={productToShowcase.image.desktop} alt="waffle" /> */}
				<button onClick={() => handleClick()}>
					<img src={icons.addToCart} alt="" />
				</button>
			</aside>
		</article>
	);
}
