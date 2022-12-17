var path = WScript.Arguments(0);
var procedure_name = WScript.Arguments(1);
var mode = WScript.Arguments(2);
var Shell = WScript.CreateObject("WScript.Shell");
Shell.Run(("notepad.exe '" + path + procedure_name + "'"), 1, true);
if (mode == "cmd")
	Shell.Run('cmd.exe /K cscript "' + path + procedure_name + '"');
else if (mode == "window")
	Shell.Run('cmd.exe /K wscript "' + path + procedure_name + '" & exit');
