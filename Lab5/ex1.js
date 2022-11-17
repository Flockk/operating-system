var source_cathalog = WScript.Arguments(0);   //путь исходного файла
var source_file = WScript.Arguments(1);      // имя файла
var result_cathalog = WScript.Arguments(2); //путь результирующего файла
var result_file = WScript.Arguments(3);    // имя результирующего файла
var fileresult = WScript.Arguments(4);    // имя файла-результата

var Shell = WScript.CreateObject("WScript.Shell");
var fso = WScript.CreateObject("Scripting.FileSystemObject");

var cmd_or_file = WScript.Arguments(5); // параметр, куда направить результат (если 0, то просто в консоль, если 1, то еще и в файл)

if (!(cmd_or_file == 1) && !(cmd_or_file == 0)) 
{
	throw new Error("\nParameter cmd_or_file = " + cmd_or_file + " typed wrong. Should be 0 or 1");
}

// 1.1 Создать исходный каталог;
try
{ 
	fso.CreateFolder(source_cathalog);
} 
catch(e)
{ 
	WScript.Echo("Каталог " + source + " уже создан..."); 
}

// 1.2 С помощью Блокнота создать исходный файл;
fso.CreateTextFile(source_cathalog +"\\" + source_file, true);
Shell.Run(('notepad.exe "' + source_cathalog + '\\' + source_file + '"'), 1, true);

//1.3 Создать результирующий каталог;
try
{ 
	fso.CreateFolder(result_cathalog);
} 
catch(e)
{ 
	WScript.Echo("Каталог " + result_cathalog + " уже создан..."); 
}

//1.4 Скопировать исходный файл в результирующий каталог;
fso.CopyFile(source_cathalog +"\\" + source_file, result_cathalog + "\\", true);

//1.5 Запустить Блокнот для редактирования файла в результирующем каталоге 
Shell.Run(Shell.ExpandEnvironmentStrings('"%WINDIR%\\notepad.exe" "' + result_cathalog +'\\'+ result_file + '"'), 1, true);

//1.6 Сравнить файлы в исходном и результирующем каталогах;	
var file1 = fso.GetFile(result_cathalog +"\\"+ result_file); 
var file2 = fso.GetFile(source_cathalog +"\\"+ source_file); 
file1 = fso.OpenTextFile(file1.Path, 1); 
file2 = fso.OpenTextFile(file2.Path, 1);
str1 = file1.ReadAll();
str2 = file2.ReadAll();
var res = fso.CreateTextFile(result_cathalog +"\\" + fileresult, true);
if (str1 == str2) 
{
	if (cmd_or_file == 0)
    {
        WScript.Echo("Файлы одинаковые!"); 
    } 
	if (cmd_or_file == 1)
    {
        res.WriteLine("Файлы одинаковые!");	
    } 
}
else 
{
	if (cmd_or_file == 0)
    {
        WScript.Echo("Файлы разные!");
    } 
	if (cmd_or_file == 1)
    {
        res.WriteLine("Файлы разные!");	
    }
}	