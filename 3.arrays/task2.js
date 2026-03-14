"use strict";

function getUsersNamesInAgeRange(users, gender) {
  // Если массив пустой — сразу 0
  if (users.length === 0) {
    return 0;
  }

  // Фильтруем по полу
  const filteredUsers = users.filter(user => user.gender === gender);

  // Если таких пользователей нет — 0
  if (filteredUsers.length === 0) {
    return 0;
  }

  // Берём только возраст
  const ages = filteredUsers.map(user => user.age);

  // Считаем среднее
  const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

  return averageAge;
}
