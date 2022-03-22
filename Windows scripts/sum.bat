:: Bash script to calculate the sum of two number
:: You can pass two number as arguments
@echo off
set /a n1=%1
set /a n2=%2
set /a sum= %n1% + %n2%
echo The sum of %1 and %2 is %sum%
