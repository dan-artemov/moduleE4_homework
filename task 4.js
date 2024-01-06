console.log("Задание 4.");
// Задание 4.
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// План:

// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создать экземпляры каждого прибора.
// Вывести в консоль и посмотреть результаты работы, гордиться собой. :)
// Общие требования:

// Имена функций, свойств и методов должны быть информативными.
// Соблюдать best practices:
// использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
// использование синтаксиса ES6 (кроме функции-конструкторов) и т. д.

//Создадим функцию, конструктор, имеющих три входных параметра.
function ElectricalDevices(name, power, voltage) {
  this.name = name;
  this.power = power;
  this.voltage = voltage;
  this.connectStatus = false;
}

//Определим метод функции конструктура, изменяющий состояние подключения прибора к электрической сети на противоположеное
ElectricalDevices.prototype.changeStatus = function () {
  this.connectStatus = !this.connectStatus;
};

//Определим метод функции конструктора, проверяющий статус подключения электроприбора к электрической сети
ElectricalDevices.prototype.getStatus = function () {
  if (this.connectStatus) {
    console.log(
      `${this.name} with power ${this.power} kWt is connected to the electrical grid`
    );
  } else {
    console.log(
      `${this.name} with power ${this.power} kWt is disconnected from the electrical grid`
    );
  }
};

//Создадим функцию-конструктор для кухонных приборов, наследуемую от ElectricalDevices
function KitchenDevices(brand, name, power, voltage, year) {
  ElectricalDevices.call(this, name, power, voltage); // Вызываем конструктор родителя с передачей параметров
  this.brand = brand;
  this.year = year;
}

KitchenDevices.prototype = new ElectricalDevices();

// Создадим в KitchenDevices новую функцию, отличную  от родительской
KitchenDevices.prototype.getInfo = function () {
  console.log(
    `type - ${this.name},  brand - ${this.brand}, power - ${this.power} kWt, voltage - ${this.voltage} V}`
  );
};

//Создадим функцию-конструктор для  приборов для ванной, наследуемую от ElectricalDevices
function BathDevices(ingressProtection, name, power, voltage) {
  ElectricalDevices.call(this, name, power, voltage); // Вызываем конструктор родителя с передачей параметров
  this.ingressProtection = ingressProtection;
}

BathDevices.prototype = new ElectricalDevices();

// Создадим в BathDevices новую функцию, отличную  от родительской
BathDevices.prototype.getProtection = function () {
  console.log(
    `moisture protection class of the ${this.name} - ${this.ingressProtection}}`
  );
};

//Создадим несколько устройств в категории KitchenDevices
const blender = new KitchenDevices("Moulinex", "Blender", 0.4, 220, 2021);
const kettle = new KitchenDevices("Phillips", "Kettle", 1.5, 220, 2023);
const microwave = new KitchenDevices("LG", "Microwave", 0.7, 220, 2024);

//Добавим пользовательские свойства в созданных объектах
kettle.capacity = 2;
blender.blade = 4;
microwave.volume = 5;

//Создадим несколько устройств в категории BathDevices
const hairdryer = new BathDevices("IP 20", "hairdryer", 0.5, 220);
const irrigator = new BathDevices("IP 67", "irrigator", 0.1, 110);

//Сформируем массив из созданных приборов
let arrayDevices = [blender, kettle, microwave, hairdryer, irrigator];

//Включим некоторые приборы в розетку
blender.changeStatus();
microwave.changeStatus();
irrigator.changeStatus();

//используя фильтр по элементам массива выберем те, что подключены к сети
const connectedDevices = arrayDevices.filter((device) => device.connectStatus);

//Используя функция getStatus() родительской функции-конструктора выведем в консоль информацию о подключенных приборах
connectedDevices.forEach((device) => device.getStatus());

// Посчитаем потребляемую мощность электроприборов, подключенных к сети.
const totallPower = connectedDevices.reduce(
  (sum, device) => sum + device.power,
  0
);

console.log(
  `The total power of the connected devices is ${totallPower.toFixed(1)} kWt`
);
