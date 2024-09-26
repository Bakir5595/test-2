
// function extractNumbers(str) {
//     let numbersArray = str.match(/\d+\.\d+|\d+/g);
//     return numbersArray ? numbersArray.map(Number) : [];
// }
// const result = extractNumbers("a1fg5hj6");
// console.log(result);


// function printFibonacci(n1, n2) {
//     if (n1 > 144) {
//         return;
//     }
//     console.log(n1);
//     setTimeout(() => printFibonacci(n2, n1 + n2), 1000);
// }

//
// printFibonacci(0, 1);



// async function fetchAndLogTitles() {
//     try {
//
//         const response = await fetch('https://fakestoreapi.com/products');
//
//
//         if (!response.ok) {
//             throw new Error(`Ошибка HTTP: ${response.status}`);
//         }
//
//
//         const data = await response.json();
//
//
//         data.forEach(product => {
//             console.log(product.title);
//         });
//     } catch (error) {
//
//         console.error('Произошла ошибка:', error);
//     }
// }
//
//
//     fetchAndLogTitles();


const container = document.getElementById('button-container');


container.addEventListener('click', function(event) {

    if (event.target.tagName === 'BUTTON') {

        document.body.style.backgroundColor = event.target.textContent;
    }
});



