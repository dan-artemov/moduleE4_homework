console.log("Задание 3.");
// Задание 3.
// Написать функцию, которая создает пустой объект, но без прототипа.
function createObject() {
  return {}; //также return new Object()
}
//присвоим результаты вызова функции createObject константе newObj и выведем в консоль результат
const newObj = createObject();
console.log(typeof newObj, newObj);
