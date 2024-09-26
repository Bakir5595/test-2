
// function extractNumbers(str) {
//     return str.match(/\d+/g).map(Number);
// }
//
// console.log(extractNumbers("a1fg5hj6")); // [1, 5, 6]
//ЗАДАЧА 1







// function fibonacciWithDelay(a = 0, b = 1) {
//     if (a > 144) return;
//
//     console.log(a);
//
//     setTimeout(() => {
//         fibonacciWithDelay(b, a + b);
//     }, 1000);
// }
//
// fibonacciWithDelay();
//ЗАДАЧА 2







async function fetchProductTitles() {
    try {

        const response = await fetch('https://fakestoreapi.com/products');


        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }


        const products = await response.json();


        products.forEach(product => {
            console.log(product.title);

    } catch (error) {

        console.error('Ошибка при получении данных:', error);
    }
}


fetchProductTitles();












