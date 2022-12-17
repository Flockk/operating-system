var source_cathalog = WScript.Arguments(0); // Путь исходного файла
var source_file = WScript.Arguments(1); // Исходный файл
var result_cathalog = WScript.Arguments(2); // Путь результирующего файла 
var result_file = WScript.Arguments(3); // имя файла-результата
var Shell = WScript.CreateObject("WScript.Shell");

// 1.1. Создать исходный каталог;
Shell.Run(('%COMSPEC% /k mkdir ' + source_cathalog), 0, false);

// 1.2. С помощью Блокнота создать исходный файл;
Shell.Run(('notepad.exe "' + source_cathalog + '\\' + source_file + '"'), 1, true);

// 1.3. Создать результирующий каталог; 
Shell.Run(('%COMSPEC% /k mkdir "' + result_cathalog + '"'), 0, false);

// 1.4. Скопировать исходный файл в результирующий каталог; 
Shell.Run(('%COMSPEC% /k copy "'+ source_cathalog +'\\'+ source_file + '" "' + result_cathalog +'\\'+ source_file + '"'), 0, false); 

// 1.5. Запустить Блокнот для редактирования файла в результирующем каталоге
Shell.Run(Shell.ExpandEnvironmentStrings('"%WINDIR%\\notepad.exe" "' + result_cathalog +'\\'+ source_file + '"'),1,true); 

// 1.6. Сравнить файлы в исходном и результирующем каталогах;
Shell.Run(('%COMSPEC% /K comp "' + source_cathalog + '\\' + source_file + '" "'  + result_cathalog +'\\'+ source_file +'"'), 0, false);

// Возможность перенаправления результатов выполнение в файл.
Shell.Run('%COMSPEC% /c comp "' + source_cathalog + '\\' + source_file + '" "'  + result_cathalog +'\\'+ source_file +'"' + '>'  + result_cathalog + '\\' + result_file);