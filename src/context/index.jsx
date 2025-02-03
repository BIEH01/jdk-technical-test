import { useState, useEffect } from "react";
import { GlobalContext } from "./context";

export const ContextProvider = ({ children }) => {
	const [products, setProducts] = useState(null);
	const [selectedItems, setSelectedItems] = useState([]);
	const [globalCounter, setGlobalCounter] = useState(0);
	const [idDeleted, setIdDeleted] = useState(null);
	const [globalTotal, setGlobalTotal] = useState(0);
	const [openDialog, setOpenDialog] = useState(false);

	const url = "http://localhost:5000/0";

	const fetchData = async () => {
		try {
			const response = await fetch(`${url}`);
			const result = await response.json();
			setProducts(result);
		} catch (error) {
			console.error("Error al obtener productos:", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<GlobalContext.Provider
			value={{
				products,
				selectedItems,
				setSelectedItems,
				globalCounter,
				setGlobalCounter,
				idDeleted,
				setIdDeleted,
				globalTotal,
				setGlobalTotal,
				openDialog,
				setOpenDialog,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
