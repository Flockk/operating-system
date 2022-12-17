#include <stdio.h>

int main()
{
    int i, j, n, fact;
    float sum, value;
    n = 3;
    sum = 0;
    fact = 1;

    for(i = 1; i <= n; i++)
    {
        fact *= i;
        value = i;

        for (j = 1; j < i; i++)
        {
            value *= i;
        }

        sum += ((fact) / (value));
    }

    printf("Результат суммы %d первых членов ряда: %f", n, sum);
    return 0;
}