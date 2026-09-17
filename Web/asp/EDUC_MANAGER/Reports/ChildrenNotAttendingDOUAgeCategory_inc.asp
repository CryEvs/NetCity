<% ' © 2007-2008 IRTech. All rights reserved.
'Массив хранит информацию о возрастных категориях, необходим для отчета "Дети, не посещающие ДОО"
Function InitArrType( arrAgeCategory )
    ReDim arrAgeCategory(1,8)
    arrAgeCategory(0, 0) = 0
    arrAgeCategory(1, 0) = "от 0 до 1"
    arrAgeCategory(0, 1) = 1
    arrAgeCategory(1, 1) = "от 1 до 1,5"
    arrAgeCategory(0, 2) = 2
    arrAgeCategory(1, 2) = "от 1,5 до 2"
    arrAgeCategory(0, 3) = 3
    arrAgeCategory(1, 3) = "от 2 до 3"
    arrAgeCategory(0, 4) = 4
    arrAgeCategory(1, 4) = "от 3 до 4"
    arrAgeCategory(0, 5) = 5
    arrAgeCategory(1, 5) = "от 4 до 5"
    arrAgeCategory(0, 6) = 6
    arrAgeCategory(1, 6) = "от 5 до 6"
    arrAgeCategory(0, 7) = 7
    arrAgeCategory(1, 7) = "от 6 до 7"
    arrAgeCategory(0, 8) = 8
    arrAgeCategory(1, 8) = "7 и старше"
    InitarrType = arrAgeCategory
End Function

%>