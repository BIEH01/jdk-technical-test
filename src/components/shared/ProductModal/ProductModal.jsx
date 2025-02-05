import { useContext } from "react";
import icons from "../../../constants/icons";
import styles from "./styles.module.sass";
import { GlobalContext } from "../../../context/context";
import { copyData } from "../../../../utils";

export default function ProductModal() {
	const {
		productSelected,
		setOpenProductDetail,
		setProductSelected,
		setSelectedItems,
		selectedItems,
		setGlobalCounter,
	} = useContext(GlobalContext);

	const handleClick = (res) => {
		if (res === "close") {
			setOpenProductDetail(false);
			setProductSelected("");
		} else {
			if (selectedItems.some((item) => item.id === productSelected.id)) {
				setOpenProductDetail(false);
				setProductSelected("");
			} else {
				setGlobalCounter(1);
				const newItem = copyData(productSelected, 1);
				setSelectedItems([...selectedItems, newItem]);
				setOpenProductDetail(false);
				setProductSelected("");
			}
		}
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
				<button onClick={() => handleClick("close")}>Close</button>
			</header>
			<aside>
				<img src={productSelected.image.desktop} alt="waffle" />
				<button onClick={() => handleClick("add")}>
					<img src={icons.addToCart} alt="add to cart" />
				</button>
			</aside>
		</article>
	);
}
