// [문제 이름]
// : 두 개 뽑아서 더하기

// [문제 설명]
// : 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// [문제 링크]
// : https://school.programmers.co.kr/learn/courses/30/lessons/68644

const solution = (numbers) => {
  const result = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(result)].sort((a, b) => a - b);
};

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
