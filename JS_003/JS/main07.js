const nums = [3, 5, 1, 2, 3, 4, 5, 6, 7, 8];
// nums 배열에 담긴 각각 요소의 값을 console 에 출력

console.log("첫 번째", nums[0]);
console.log("두 번째", nums[1]);
console.log("세 번째", nums[2]);
console.log("네 번째", nums[3]);
console.log("다섯 번째", nums[4]);
console.log("여섯 번째", nums[5]);
console.log("일곱 번째", nums[6]);
console.log("여덟 번째", nums[7]);
console.log("아홉 번째", nums[8]);
console.log("열 번째", nums[9]);

let index = 0;
console.log("첫 번째", nums[index++]);
console.log("두 번째", nums[index++]);
console.log("세 번째", nums[index++]);
console.log("네 번째", nums[index++]);
console.log("다섯 번째", nums[index++]);
console.log("여섯 번째", nums[index++]);
console.log("일곱 번째", nums[index++]);
console.log("여덟 번째", nums[index++]);
console.log("아홉 번째", nums[index++]);
console.log("열 번째", nums[index++]);

for (let i = 0; i < 10; i++) {
  console.log(i + 1, "번 째", nums[i]);
}

// 배열의 개수에 관계없이 전체 요소를 출력하기
for (let i = 0; i < nums.length; i++) {
  console.log(i + 1, " 번 째", nums[i]);
}

// nums 배열에 담긴 숫자들의 합을 구하여 출력

let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log("결과", sum);
