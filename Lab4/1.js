var shell = WScript.CreateObject("WScript.Shell");

if (WScript.Arguments.count() == 3) 
{
	var command = WScript.Arguments(0);
	var path = WScript.Arguments(1);
	var filename = WScript.Arguments(2);
	var strCommand = "%COMSPEC% /C HELP" + command + '>' + path + filename;
	shell.Run(strCommand);
} 
else if (WScript.Arguments.count() == 1) 
{
	var command = WScript.Arguments(0);
	shell.Run("%COMSPEC% /K HELP" + command);
} 
else 
{
	shell.Run("%COMSPEC% /K HELP");
}