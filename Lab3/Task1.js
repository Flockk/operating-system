// Разработать процедуру расчета суммы n первых членов ряда, в соответствии с заданием:  (1!)/(1) + (2!)/(2^2) + (3!) / (3^3) + ... + (n!) / (n^n)

function factor(number)
{
    if (number <= 1)
    {
        return 1;
    }
    else
    {
        return number * factor(number - 1);
    }
}

if (WScript.Arguments.count() == 1)
{
    var sum = 0;
    var n = WScript.Arguments(0);
    for (i = 1; i <= n; i++)
    {
        var fact = factor(i);
        var pow = Math.pow(i, i);
        sum += (fact) / (pow)
    }

    WScript.Echo("Результат суммы", n, "первых членов ряда: ", sum);
}
else
{
    WScript.Echo("Параметры введены неверно!");
}