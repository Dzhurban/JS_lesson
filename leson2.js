                                                                      // Оголошуємо функцію, яка приймає рік і повертає правильну форму для слова "рік"
                                                                      function printYears(year) {
                                                                        // Перевіряємо, чи введене значення є числом та більше або рівне 0
        if (!isNaN(year) && year >= 0) {                               // Використано оператори перевірки типу !isNaN та порівняння >=
                                                                      // Якщо рік закінчується на 1, але не закінчується на 11, то використовуємо слово "рік"
            if (year % 10 === 1 && year % 100 !== 11) {              // Використано залишкові оператори
                return year + " рік";
            } else if ([2, 3, 4].includes(year % 10) && ![12, 13, 14].includes(year % 100)) {
                                                                  // Якщо рік закінчується на 2, 3 або 4, і не закінчується на 12, 13 або 14, то використовуємо слово "роки"
                return year + " роки";
            } else {
                                                               // У всіх інших випадках використовуємо слово "років"
                return year + " років";
            }
        } else {
                                                          // Якщо введене значення не є числом або менше 0, виводимо відповідне повідомлення
            return "Будь ласка, введіть додатне число.";
        }
    }
    
                                                     // Приклад використання функції
    console.log(printYears(2024852));               // Введення чисел (1/133/2024...)"