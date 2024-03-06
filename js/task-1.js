const lstCategories = document.querySelector("#categories");
//We could also use the length property of children pseudo-array
// const numCategories = lstCategories.children.length;
const numCategories = lstCategories.childElementCount;
console.log(`Number of categories: ${numCategories}`);

[...lstCategories.children].forEach((category) => {
    const categoryName = category.firstElementChild.textContent;
    const numElements = category.lastElementChild.childElementCount;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${numElements}`);
});

