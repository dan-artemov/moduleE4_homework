console.log("Задание 5.");
// Задание 5.
//Переписать консольное приложение из предыдущего юнита на классы.

//Создадим класс ElectricalDevices, имеющих три входных параметра, а также собственные методы
class ElectricalDevices {
  constructor(name, power, voltage) {
    this.name = name;
    this.power = power;
    this.voltage = voltage;
    this.connectStatus = false;
  }
  //Определим метод класса, изменяющий состояние подключения прибора к электрической сети на противоположеное
  changeStatus() {
    this.connectStatus = !this.connectStatus;
  }
  //Определим метод класса, проверяющий статус подключения электроприбора к электрической сети
  getStatus() {
    if (this.connectStatus) {
      console.log(
        `${this.name} with power ${this.power} kWt is connected to the electrical grid`
      );
    } else {
      console.log(
        `${this.name} with power ${this.power} kWt is disconnected from the electrical grid`
      );
    }
  }
}

//Создадим класс для кухонных приборов, наследуемый от ElectricalDevices
class KitchenDevices extends ElectricalDevices {
  constructor(brand, name, power, voltage, year) {
    super(name, power, voltage);
    this.brand = brand;
    this.year = year;
  }
  // Создадим в KitchenDevices новый метод, отличный  от родительского класса
  getInfo() {
    console.log(
      `type - ${this.name},  brand - ${this.brand}, power - ${this.power} kWt, voltage - ${this.voltage} V}`
    );
  }
}

//Создадим класс для приборов в ванной, наследуемый от ElectricalDevices
class BathDevices extends ElectricalDevices {
  constructor(ingressProtection, name, power, voltage) {
    super(name, power, voltage); // Вызываем конструктор родителя с передачей параметров
    this.ingressProtection = ingressProtection;
  }
  // Создадим в BathDevices новую функцию, отличную  от родительской
  getProtection() {
    console.log(
      `protection class of the ${this.name} - ${this.ingressProtection}}`
    );
  }
}

//Создадим несколько устройств в категории KitchenDevices
const chopper = new KitchenDevices("Samsung", "chopper", 0.9, 220, 2024);
const toaster = new KitchenDevices("Bosh", "toaster", 1.5, 220, 2023);
const coffeeGrinder = new KitchenDevices(
  "LG",
  "coffee grinder",
  0.2,
  220,
  2023
);

//Добавим пользовательские свойства в созданных объектах
toaster.timer = true;
chopper.blade = 5;
coffeeGrinder.frequency = 500;

//Создадим несколько устройств в категории BathDevices
const toothBrush = new BathDevices("IP 20", "tooth brush", 0.1, 220);
const washingMachine = new BathDevices("IP 67", "Washing Machine", 0.7, 220);

//Сформируем массив из созданных приборов
let arrayDevices = [
  toaster,
  chopper,
  coffeeGrinder,
  toothBrush,
  washingMachine,
];

//Включим некоторые приборы в розетку
toaster.changeStatus();
coffeeGrinder.changeStatus();
washingMachine.changeStatus();

//используя фильтр по элементам массива выберем те, что подключены к сети
const conectedDevices = arrayDevices.filter((device) => device.connectStatus);

//Используя функцию getStatus() родительского класса выведем в консоль информацию о подключенных приборах
conectedDevices.forEach((device) => device.getStatus());

// Посчитаем потребляемую мощность электроприборов, подключенных к сети.
const totallPower = conectedDevices.reduce(
  (sum, device) => sum + device.power,
  0
);

//введем результаты расчета в консоль
console.log(
  `The total power of the connected devices is ${totallPower.toFixed(1)} kWt`
);
