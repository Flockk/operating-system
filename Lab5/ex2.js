var source_cathalog = WScript.Arguments(0);   //путь исходного файла
var source_file = WScript.Arguments(1);      // имя файла
var result_cathalog = WScript.Arguments(2); //путь результирующего файла
var result_file = WScript.Arguments(3);    // имя файла-результата

// Объявление объектов
var Shell = WScript.CreateObject("WScript.Shell");
var fso = WScript.CreateObject("Scripting.FileSystemObject");

// Условия для задачи
var NL = 100;  // максимальная длина текста
var NS = 30;  // максимальная длина строки
var NW = 10; // максимальная длина слова

// Создать исходный каталог;
fso.CreateFolder(source_cathalog);

// Создание исходного текста на русском языке в текстовом файле произвести в процедуре путем вызова Блокнота.
fso.CreateTextFile(source_cathalog + "\\" + source_file, true);
Shell.Run(('notepad.exe "' + source_cathalog + '\\' + source_file + '"'), 1, true);

// Чтение текста из исходного файла
var file = fso.GetFile(source_cathalog + "\\" + source_file);
var text = file.OpenAsTextStream(1).ReadAll();
var text_result = text; // переписываем текст в переменную для вывода результата

WScript.Echo('Исходный текст: "' + text_result + '"\n');
var checktext = text;

var checkNP = 1; // проверка точки в конце
var checkNL = 1; // проверка длины текста 
var checkNS = 1; // проверка длины строки 
var checkNW = 1; // проверка длины слова

    
if(text.match(/.$/) == "." ) // Проверка на точку в конце текста
{
    WScript.Echo('Проверка 1 - УСПЕШНО: В конце есть точка');
}   
else 
{
    WScript.Echo('Проверка 1 - ПРОВАЛ: В конце нет точки. Текст не будет прочитан');
    checkNP = 0;
}
        
if (text.length > NL)   // Проверка на длину текста NL
{
    WScript.Echo('Проверка 2 - ПРОВАЛ: Длина текста (' + text.length +') больше максимальной возможной (' + NL +'). Текст не будет прочитан');
    checkNL = 0;
}
else 
{
    WScript.Echo('Проверка 2 - УСПЕШНО: Длина текста (' + text.length +') в допустимых пределах (не более ' + NL +')');
}
    
text = text.replace(/[.,?<>'\\/#!$%\^&\*;:{}=\-_`~()]/g,""); // Удаление знаков пунктуации в тексте
    
var stroka = text.split("\n"); // "нарезаем" текст в массив построчно
    
for (var i = 0; i < stroka.length; i++) 
{
    if (stroka[i].length > NS) 
    {
        WScript.Echo('Проверка 3 - ПРОВАЛ: Длина строки (' + stroka[i].length + ') больше максимальной возможной (' + NS +'). Текст не будет прочитан');
        checkNS = 0;
        break;
    }
    var slova = stroka.join(" ");
    slova = slova.split(" "); // разбиваем строку на слова
    for (var j=0; j<slova.length; j++) 
    {
        if (checkNW == 1) if (slova[j].length > NW) 
        {
            WScript.Echo('Проверка 4 - ПРОВАЛ: Длина слова '+ slova[j] + ' больше максимальной возможной (' + NW +'). Текст не будет прочитан');
            checkNW = 0;
            break;
        }
            
    }   
}
if (checkNS == 1) 
{
    WScript.Echo('Проверка 3 - УСПЕШНО: Длины всех строк в допустимых пределах (не более ' + NS + ')');
}
if (checkNW == 1) 
{
    WScript.Echo('Проверка 4 - УСПЕШНО: Длины всех слов в допустимых пределах (не более ' + NW + ')\n');
}
            
if ((checkNP == 1) && (checkNL == 1) && (checkNS == 1) && (checkNW == 1)) 
{

    fso.CreateFolder(result_cathalog);
    // Создание файла с результатами
    var outfile = fso.CreateTextFile(result_cathalog +"\\" + result_file, true);

    var newtext = text.replace(/^ +| +$|( ) +/g, "$1");

    WScript.Echo('Исходный текст: "' + text_result + '"\n');
    WScript.Echo('Новый текст: "' + newtext + '"\n');

    // возможность перенаправления результатов выполнение в файл.
    outfile.WriteLine('Исходный текст: "' + text_result + '"\n');
    outfile.WriteLine('Новый текст: "' + newtext + '"\n');

}
else
{
    WScript.Echo('\nЗапустите программу заново и введите корректный текст!!!\n');
}