function getElementWidth(content, padding, border) { 
	const cont = Number.parseFloat(content);
	const allPaddingWidth = Number.parseFloat(padding) * 2;
	const allBorderWidth = Number.parseFloat(border) * 2;
	const result = cont + allPaddingWidth + allBorderWidth;

	return result;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

