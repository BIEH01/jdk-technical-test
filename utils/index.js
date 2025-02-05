export const copyData = (data, counter) => {
	const newCopy = { ...data };
	newCopy.clicked = true;
	newCopy.quantity = counter;
	newCopy.total = newCopy.price * counter;
	return newCopy;
};
