// Разработать процедуру обработки текста, в соответствии с заданием:  Составить процедуру, которая в заданном тексте убирает лишние пробелы между словами, оставляя их по одному.

var string = "         каждый           охотник         ,       желает                знать.           где              ,         сидит                  фазан.        ";
var newString = string.replace(/^ +| +$|( ) +/g, "$1");
WScript.Echo("Старая строка: " + string);
WScript.Echo("Новая строка: " + newString);