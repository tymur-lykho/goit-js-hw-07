const categoriesList = document.querySelector('#categories');
const itemsList = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${itemsList.length}`);

itemsList.forEach(item => {
	console.log(`Category: ${item.querySelector('h2').textContent}`);
	console.log(`Elements: ${item.querySelectorAll('li').length}`);
});