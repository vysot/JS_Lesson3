let style = ["Джаз", "Блюз"];
document.write("Первоначальный массив: " + style.join(" - ") + "</br>");

style.push("Рок-н-ролл");
document.write("Добавление элемета в конец массива: " + style.join(" - ") + "</br>");

style.splice(style.length / 2, 1, "Классика");
document.write("Замена значения в середине массива: " + style.join(" - ") + "</br>"); 

let styleFirst = style.shift();
document.write("Значение первого элемента, который удален в массиве: " + styleFirst + "</br>");
document.write("Массив, после удаления первого элемента: " + style.join(" - ") + "</br>");

style.unshift("Рэп", "Рэгги");
document.write("Вставка двух новых элементов в начало массива: " + style.join(" - ") + "</br>");