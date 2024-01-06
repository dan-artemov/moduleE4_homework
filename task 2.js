// Задание 2.
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

//Создадим объект
const simpleObj = {
  property1: true,
  property2: "string",
  property3: 100,
  property4: ["a", true, 200],
};
//
function checkPropertyInObj(prop, obj) {
  if (prop in obj) {
    return true;
  } else {
    return false;
  }
}

//передадим simpleObj в качестве аргумента
console.log(checkPropertyInObj("property1", simpleObj));
console.log(checkPropertyInObj("property5", simpleObj));
