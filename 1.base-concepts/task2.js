"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Преобразуем входные данные в числа
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);

  // Проверка на корректность данных
  if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths)
  ) {
    return false;
  }

  // Перевод годовой ставки в месячную (из процентов в долю)
  const P = percent / 100 / 12;

  // Тело кредита
  const S = amount - contribution;

  if (S <= 0) {
    return 0; // если взнос >= суммы кредита
  }

  // Формула ежемесячного платежа
  const monthlyPayment = S * (P + (P / ((1 + P) ** countMonths - 1)));

  // Общая сумма выплат
  const totalAmount = monthlyPayment * countMonths;

  // Округление до двух знаков
  return Number(totalAmount.toFixed(2));
}
