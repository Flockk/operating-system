// Разработать процедуру расчета суммы n первых членов ряда, в соответствии с заданием:  sin(x)/2 + sin(2*x)/2^2 + ... + sin(n * x) / 2^n

if (WScript.Arguments.count() == 2)
{
    var n = parseInt(WScript.Arguments(0));
    var x = parseInt(WScript.Arguments(1));
    var sum = 0;
    for (i = 1; i <= n; i++)
    {
        sum += (Math.sin(i * x)) / (Math.pow(2, i))
    }

    WScript.Echo("Результат суммы", n, "первых членов ряда при x =", x, ": ", sum);
}
else
{
    WScript.Echo("Параметры введены неверно!");
}
