const AUTO: boolean = false;
const MANUAL: boolean = true;
const TICKET_COST = 1000;
const MAX_TICKET_COST = 100000;
const LOTTO_NUMBER_START = 1;
const LOTTO_NUMBER_END = 45;
const LOTTO_LENGTH = 6;
const LOTTO_BONUS = 1;
const ERROR_NUMBER_RANGE = '1 ~ 45사이의 숫자를 입력해주십시오.';
const ERROR_COST_RANGE = '1000원 ~ 100000원 이내로 구매가 가능합니다.';
const ERROR_MISSING_NUMBER = '번호를 모두 입력해주십시오.';
const ERROR_DUPLICATED_NUMBER = '번호는 중복될 수 없습니다.';

const FIRST_PRIZE = 2000000000;
const BONUS_PRIZE = 30000000;
const SECOND_PRIZE = 1500000;
const THIRD_PRIZE = 50000;
const FOURTH_PRIZE = 5000;

export {
  AUTO, MANUAL, TICKET_COST, MAX_TICKET_COST,
  LOTTO_NUMBER_START, LOTTO_NUMBER_END,
  LOTTO_LENGTH,
  ERROR_NUMBER_RANGE, ERROR_COST_RANGE,
  ERROR_MISSING_NUMBER, ERROR_DUPLICATED_NUMBER,
  LOTTO_BONUS, FIRST_PRIZE, BONUS_PRIZE,
  SECOND_PRIZE, THIRD_PRIZE, FOURTH_PRIZE,
};
