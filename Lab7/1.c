#include <stdio.h>

int main()
{
    int low, high;
    float gals ltrs;

    low = 1;
    high = 20;
    gals = low;
    while(gals <= high)
    {
        ltrs = (gals * 3.785);
        printf("4.0f%6.2\n", gals, ltrs);
        gals = gals + 1
    }
}