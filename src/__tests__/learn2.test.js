/* eslint-disable no-undef */

jest.useFakeTimers()

// const shallow = require('enzyme')
const mount = require('enzyme')
const sinon = require('sinon')
const jsdom = require('jsdom')

const { JSDOM } = jsdom
const dom = new JSDOM()
const { window } = dom
const { document } = window

const r1Learn = require('../js/_r1HeadLearning2')

function doAsync(c) {
  setTimeout(() => {
    c(true)
  }, 1000)
}


describe('Section for JavaScript algorithms', () => {

  test('Function to throttle frequency of running a callback function', () => {
    expect(true).toBe(true)
  })
  // var solutionTemp = function(callback, delay) {


  test('Not documented: Odd sequence of 6 input:  1  2-1    1-2-3  4-3-2-1    1-2-3-4-5  6-5-4-3-2-1', () => {
    expect(true).toBe(true)
  })
  // var solution = function(n) {

  test('35. Develop a function to reduce overlapping array members', () => {

    const sortArrOfArr = arr => arr.sort((a, b) => a[0] - b[0])

    const reduceArrOverlap = arrIn => {

      const arrNext = []

      arrIn.forEach((item, i, arr) => {
        if (arr[i + 1] && arr[i][1] < arr[i + 1][0]
          && arr[i - 1] && arr[i - 1][1] < arr[i][0]) {
          arrNext.push(arr[i])
        }
        else if (arr[i + 1] && arr[i][1] > arr[i + 1][0]) {
          arrNext.push([arr[i][0], arr[i + 1][1]])
        }
        else if (!arr[i + 1] && arr[i - 1][1] < arr[i][0]) {
          arrNext.push(arr[i])
        }
      })

      return arrNext
    }
  
    const arr = [[1, 3], [8, 10], [2, 6], [15, 18]]
    let arrNext = sortArrOfArr(arr)
    arrNext = reduceArrOverlap(arr)

    expect(JSON.stringify(arrNext)).toBe(JSON.stringify([[1, 6], [8, 10], [15, 18]]))
  })
  // *Input:* [[1,3],[2,6],[8,10],[15,18]]
  // *Output:* [[1,6],[8,10],[15,18]]
  // *Explanation:* Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

  test('34. Create a ES6 class to extract unique values from an array', () => {
    class ClassForMany {
      constructor(x) {
        this.x = x
      }

      unique(k) {
        const x = k.sort()
        const y = []

        x.forEach((item, i) => {
          if (item !== x[i - 1]) {
            y.push(item)
          }
        })
        return y
      }
    }

    const arr = [5, 7, 5, 1, 2, 2, 3]
    const classInited = new ClassForMany()

    // console.info('classForMany', { unique: classInited.unique(arr) })
    expect(JSON.stringify(classInited.unique(arr))).toBe(JSON.stringify([1, 2, 3, 5, 7]))
    expect(true).toBe(true)
  })
  // class classForMany {


  test('33. Create a prototype to extract unique values from an array', () => {
    Array.prototype.unique = function(){
      const x = this.sort()
      let y = []

      x.forEach((item, i) => {
        if (item !== x[i - 1]) {
          y.push(item)
        }
      })
      return y
    }

    const arr = [5, 5, 5, 1, 2, 2, 3]
    // console.info('Array.prototype.unique', { unique: arr.unique() })
    expect(JSON.stringify(arr.unique())).toBe(JSON.stringify([1, 2, 3, 5]))
  })
  // Array.prototype.unique = function() {


  test('32. Creatre a function to check if a string has the date format', () => {
    const isStringDateFormat = str => {
      const str2 = str.match(/([\d]{1,2})\.([\d]{1,2})\.([\d]{1,4})/gim)
      let isDate = false
      let isMonth = false
      let isYear = false
      let isDateFormat = false
      if (str2 !== null) {
        const arr = str2[0].split('.')
        if (parseInt(arr[0], 10) > 0 && parseInt(arr[0], 10) < 32) {
          isDate = true
        }
        if (parseInt(arr[1], 10) > 0 && parseInt(arr[1], 10) < 13) {
          isMonth = true
        }
        if (parseInt(arr[2], 10) >= 0 && parseInt(arr[2], 10) < 3000) {
          isYear = true
        }
        if (isDate === true && isMonth === true && isYear === true) {
          isDateFormat = true
        }
      }

      // console.info('isStringDateFormat', { isDateFormat, str })
      return isDateFormat
    }

    const str = '11.12.2006'
    const outcome = isStringDateFormat(str)
    expect(outcome).toBe(true)

    const str2 = '11.1a.2006'
    const outcome2 = isStringDateFormat(str2)
    expect(outcome2).toBe(false)

  })
  // var solutionTemp = function(x) {


  test('31. Mix two arrays orderly', () => {

    const mixTwoArraysOrderly = (incomeA, incomeB) => {
      let outcome = []
      incomeA.forEach((item, i) => {
        outcome.push(incomeA[i], incomeB[i])
      })

      return outcome
    }
    const incomeA = [1,2,3]
    const incomeB = ['a','b','c']
    const outcome = mixTwoArraysOrderly(incomeA, incomeB)
    // console.info('mixTwoArraysOrderly', outcome)
    expect(JSON.stringify(outcome)).toBe(JSON.stringify([1, 'a', 2, 'b', 3, 'c']))
  })
  // var solutionTemp = function(a,b) {


  test('30. Random true or falls', () => {
    const randomTrueFalse = () => {
      let outcome
      if (Math.random() >= 0.5) {
        outcome = true
      }
      else {
        outcome = false
      }
      return outcome
    }

    // console.info('randomTrueFalse', { randomTrueFalse: randomTrueFalse() })
    expect(true).toBe(true)
  })
  // var solutionTemp = function() {
  // Один плюс один два плюс один


  test('How to count zigzag shifts?', () => {
    expect(true).toBe(true)
  })
  // var solutionUnfinished = function(T) {


  test('29. If it is possible to make a swap to get non decreasing array?', () => {
    const arr0 = [4, 3, 2, 1, 0]
    const arr1 = [0, 5, 3]
    const arr2 = [0, 5, 3, 3, 0]
    const arr3 = [0, 5, 3, 3, 100000]
    const arr4 = [-1, -2, 3, 3, 7]
    const arr5 = [1, 5, 3, 3, 7]
    const arr6 = [1, 1, 1, 1, 1]
    const arr7 = [1, -5, 3, 123, 7]

    const isArrDesc = arr => {
      let answer = true

      arr.forEach((item, i) => {
        if (arr[i - 1] !== undefined
          && arr[i - 1] <= item) {
          answer = false
        }
      })

      return answer
    }


    const isDuplElem = arr => {
      let answer = false
      const arrTemp = arr.slice().sort((a, b) => a - b)
      arrTemp.forEach((item, i) => {
        if (arrTemp[i - 1] !== undefined
          && arrTemp[i - 1] === item) {
          answer = true
        }
      })

      return answer
    }


    const isSwapToDesc = arr => {
      return !isDuplElem(arr)
    }

    expect(isSwapToDesc(arr0)).toBe(true)
    expect(isSwapToDesc(arr1)).toBe(true)
    expect(isSwapToDesc(arr2)).toBe(false)
    expect(isSwapToDesc(arr3)).toBe(false)
    expect(isSwapToDesc(arr4)).toBe(false)
    expect(isSwapToDesc(arr5)).toBe(false)
    expect(isSwapToDesc(arr6)).toBe(false)
    expect(isSwapToDesc(arr7)).toBe(true)

    expect(isDuplElem(arr0)).toBe(false)
    expect(isDuplElem(arr1)).toBe(false)
    expect(isDuplElem(arr2)).toBe(true)
    expect(isDuplElem(arr3)).toBe(true)
    expect(isDuplElem(arr4)).toBe(true)
    expect(isDuplElem(arr5)).toBe(true)
    expect(isDuplElem(arr6)).toBe(true)

    expect(isArrDesc(arr0)).toBe(true)
    expect(isArrDesc(arr1)).toBe(false)
    expect(isArrDesc(arr2)).toBe(false)
    expect(isArrDesc(arr3)).toBe(false)
    expect(isArrDesc(arr4)).toBe(false)
    expect(isArrDesc(arr5)).toBe(false)
    expect(isArrDesc(arr6)).toBe(false)
  })
  // var solution = function(A) {


  test('28. Count minimal number of jumps from position X to Y.', () => {
    const minNumJumps = (x, y, s) => Math.ceil((y - x)/ s)
    const x = 10
    const y = 85
    const s = 30
    expect(minNumJumps(x, y, s)).toBe(3)
  })
  // var solution = function(X, Y, D) {


  test('27. How to find missing element in the zero array 1,2, ... k+1, N?  Find the missing element in a given permutation.', () => {

    const sumArr = arr => arr.reduce((a, c) => a + c, 0)

    const asc1ArrFunc = (...args) => {
      let [N, count = 0, arr = []] = args
      if (N >= count) {
        arr.push(count)
        count += 1
        return asc1ArrFunc(N, count, arr)
      }
      return arr
    }

    const missingElemAsc1Arr = arr => {
      const asc1Arr = asc1ArrFunc(arr.length)
      return sumArr(asc1Arr) - sumArr(arr)
    }

    const arr = [0, 1, 2, 4]
    expect(missingElemAsc1Arr(arr)).toBe(3)
  })
  // var solution = function(A) {


  test('26. How to find one element that is left unpaired', () => {
    const leftUnpaired = arr => {
      const arrTemp = arr.slice().sort((a, b) => a - b)
      return arrTemp.filter((item, i, arrFilter) => {
        if (i > 0
          && i % 2 === 0
          && (arrFilter[i] !== arrFilter[i + 1] || arrFilter[i + 1] === undefined)
        ) {
          return true
        }
        return false
      })[0]
    }

    const arr1 = [2, 3, 4, 5, 4, 3, 2]
    const arr2 = [2, 3, 5, 5, 4, 3, 2]
    const arr3 = [0, 3, 4, 2, 4, 3, 2]
    expect(leftUnpaired(arr1)).toBe(5)
    expect(leftUnpaired(arr2)).toBe(4)
    expect(leftUnpaired(arr3)).toBe(2)
  })
  // A non-empty zero-indexed array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.
  // var solution = function(A) {


  test('25. How to rotate the array A K times', () => {

    const rotateArray =  (arr, num) => {
      let answer = arr
      if (arr.length !== num) {
        const arrStart = arr.slice(num)
        const arrEnd = arr.slice(0, num)
        answer = [...arrStart, ...arrEnd]
      }

      return answer
    }

    const arr = [3, 8, 9, 7, 6]
    expect(JSON.stringify(rotateArray(arr, 2))).toBe('[9,7,6,3,8]')
  })
  // Write a function: function solution(A, K); that, given a zero-indexed array A consisting of N integers and an integer K, returns the array A rotated K times.
  // var solution = function(A, K) {


  test('24. What is the length of its longest binary gap?', () => {

    const dec2bin = dec => {
      return (dec >>> 0).toString(2)
    }

    const binaryGap = num => {
      const arrBin = dec2bin(num).split('')
      let answer = 0
      let counter = 0
      for (let i = 0; i < arrBin.length; i += 1) {
        if (arrBin[i] === '0' && arrBin[i - 1] === '0') {
          counter += 1
          if (counter > answer) {
            answer = counter
          }
        }
        else if (arrBin[i] === '0' && arrBin[i - 1] !== '0') {
          counter = 1
          answer = 1
        }
        else if (arrBin[i] !== '0') {
          counter = 0
        }
      }
      return answer
    }

    // console.info('dec2bin', dec2bin(125))
    // console.info('binaryGap', { binaryGap96: binaryGap(96), dec2bin96: dec2bin(96) })
    expect(binaryGap(96)).toBe(5)
    expect(binaryGap(125)).toBe(1)
  })
  // A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
  // Write a function that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
  // var binaryGap = function(N) {


  test('23. Any of an array equilibrium indices?', () => {
    const equilibrium = arr => {

      const answer = []
      for (let i = 0; i < arr.length; i += 1) {

        const start = arr.slice(0, i)
        const end = arr.slice(i)
        if (start.length > 0 && end.length > 0) {
          const startSum = arr.slice(0, i).reduce((a, c) => a + c, 0)
          const endSum = arr.slice(i + 1).reduce((a, c) => a + c, 0)
          if (startSum === endSum) {
            answer.push(i)
          }
        }
      }
      return answer
    }

    const arr =  [ -1, 3, -4, 5, 1, -6, 2, 1 ]
    const equil = equilibrium(arr)
    expect(JSON.stringify(equil)).toBe('[1,3,7]')
  })
  // Write a function: function solution(A); that, given a zero-indexed array A consisting of N integers, returns any of its equilibrium indices
  // var solution = function(A) {


  test('22. Algorithm for visiting the DOM element itself and all of its descendents with callback function', () => {
    document.body.innerHTML = '<div class="SectionWrapper SectionWrapper_mobileScreens utAzTopic_mobileScreens "><div class="SectionWrapper__colLeft"></div><div class="SectionWrapper__colMain"><div id="mobileScreens" class="IconCaptDesc IconCaptDesc_mobileScreens"><div class="IconCaptDesc__itemRow"><div class="IconCaptDesc__itemCol"><div class="IconCaptDesc__itemCell "><div class="IconCaptDesc__itemTopBlock"><div class="IconCaptDesc__itemIcon"><img class="IconCaptDesc__img" src="https://userto.com/img/illustration28.png" alt="illustration28"></div><div class="IconCaptDesc__itemCaptNumRatingWrapper"><div class="IconCaptDesc__itemCapture">Напишите ваш вопрос</div></div></div><div class="IconCaptDesc__itemBottomBlock"><div class="IconCaptDesc__itemBottomCapture">Напишите ваш вопрос</div></div></div><div class="IconCaptDesc__itemCell "><div class="IconCaptDesc__itemTopBlock"><div class="IconCaptDesc__itemIcon"><img class="IconCaptDesc__img" src="https://userto.com/img/illustration29.png" alt="illustration29"></div><div class="IconCaptDesc__itemCaptNumRatingWrapper"><div class="IconCaptDesc__itemCapture">Начните поиск</div></div></div><div class="IconCaptDesc__itemBottomBlock"><div class="IconCaptDesc__itemBottomCapture">Начните поиск</div></div></div><div class="IconCaptDesc__itemCell "><div class="IconCaptDesc__itemTopBlock"><div class="IconCaptDesc__itemIcon"><img class="IconCaptDesc__img" src="https://userto.com/img/illustration30.png" alt="illustration30"></div><div class="IconCaptDesc__itemCaptNumRatingWrapper"><div class="IconCaptDesc__itemCapture">Сервис предложит пользователя</div></div></div><div class="IconCaptDesc__itemBottomBlock"><div class="IconCaptDesc__itemBottomCapture">Сервис предложит пользователя</div></div></div><div class="IconCaptDesc__itemCell "><div class="IconCaptDesc__itemTopBlock"><div class="IconCaptDesc__itemIcon"><img class="IconCaptDesc__img" src="https://userto.com/img/illustration31.png" alt="illustration31"></div><div class="IconCaptDesc__itemCaptNumRatingWrapper"><div class="IconCaptDesc__itemCapture">Напрямую решите вопрос</div></div></div><div class="IconCaptDesc__itemBottomBlock"><div class="IconCaptDesc__itemBottomCapture">Напрямую решите вопрос</div></div></div></div></div></div><div class="Face__faChevronDown"><span class="Face__linkfaChevronDown"><div class="Face__arrowFirst"><i class="fas fa-chevron-down Face__arrowIcon"></i></div><div class="Face__arrowSecond"><i class="fas fa-chevron-down Face__arrowIcon"></i></div></span></div></div><div class="SectionWrapper__colRight"></div></div>'
    const domElem = document.body

    const callBackFunc = (domElemInnerText, i) => {
      // console.info('visiting the DOM element [20]', { domElemInnerText, i })
    }

    const traverseElem = (callBackFunc, elem, i) => {
      const children = elem.childNodes
      if (children.length !== 0) {
        for (let i = 0; i < children.length; i += 1) {
          const domElemInnerText = children[i].textContent
          callBackFunc(domElemInnerText, i)
          if (children[i].nodeType === 1 && children[i].parentNode) {
            traverseElem(callBackFunc, children[i], i)
          }
        }
      }
    }
    // console.info('visiting the DOM element [0]', traverseElem(callBackFunc, domElem, 0))

    const traverseElem1 = (callBackFunc1, elem, i) => {
      const children = elem.childNodes
      if (children.length > 0) {
        children.forEach((item, k) => {
          const domElemText = item.textContent
          callBackFunc1(domElemText, i)
          if (item.nodeType === 1 && item.parentNode) {
            traverseElem(callBackFunc, item, i)
          }
        })
      }
    }

    traverseElem1(callBackFunc, domElem, 0)

    // console.info('visiting the DOM element', domElem)
    expect(true).toBe(true)
  })
  // Question: Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents  (not just its immediate children). For each element visited, the function should pass that element to a provided callback function.
  // callBackFunc, for example:
  // function callBackFunc(){
  // function traverseElem(callBackFunc, elem, i){


  test('21. Algorithm word break problem', () => {
    const wordBreakProblem = (str, num) => {
      let answer = ''
      str.slice().split(' ').forEach(item => {
        if (`${answer} ${item}`.length <= num - 1) {
          answer += ` ${item}`
        }
      })
      return answer
    }

    const str      =  'How would you get first 100 character long string from a big message but dont cut the last word (word break problem)';
    const num      =  50;
    const subStr  =  wordBreakProblem(str, num)
    expect(subStr.length <= num).toBe(true)
  })
  // Question: How would you get first 100 character long string from a big message but dont cut the last word (word break problem)?
  // function wordBreakProblem(str,num){


  test('20. Algorithm Match substring of a sting?', () => {

    const matchSubstringStr = (str, subStr) => {
      let answer = false
      const indexOfVal = str.indexOf(subStr) !== -1
      const includesVal = str.includes(subStr)
      const regex = new RegExp(subStr)
      const regexVal = regex.test(str)
      if (indexOfVal && includesVal && regexVal) {
        answer = true
      }
      return answer
    }

    matchSubstringStr('шалаш', 'аш')
    expect(matchSubstringStr('шалаш', 'аш')).toBe(true)
    expect(matchSubstringStr('шалаш', 'баш')).toBe(false)
  })
  // Question: How can you match substring of a sting?
  // function matchSubstringString(str,subStr){


  test('19. Algorithm Total number of zeros from 1 upto n?', () => {

    const countZerosInNumber = arr => {
      const maxDigLen = arr.slice().sort((a, b) => b - a)[0].toString().length

      let answer = 0
      arr.forEach(item => {
        if (item === 0) {
          answer += 1
        }
        else {

          for (let k = 1; k < maxDigLen; k += 1) { // Math.pow(10, maxDigLen)
            const degr = Math.pow(10, k)
            // console.info('countZerosInNumber', { degr, k })
            if (item % degr === 0) {
              answer += 1
            }
          }
        }
      })
      return answer
    }

    const arr1 = [0, 1, 3, 2, 4, 6, 5, 8, 10, 9]
    const arr2 = [0, 1000]
    const arr3 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    expect(countZerosInNumber(arr1)).toBe(2)
    expect(countZerosInNumber(arr2)).toBe(4)
    expect(countZerosInNumber(arr3)).toBe(12)
  })
  // Question: Count Total number of zeros from 1 upto n?
  // function countZerosInNumber(num){
  // function totalNumberZerosFrom1UpToNNum(num){
  // function countZero(n){
  // function totalNumberZerosFrom1UpToNArr(arr){


  test('18. Algorithm Find the largest sum of any two elements?', () => {
    const largestSumAnyTwoElements = arr => arr.slice()
      .sort((a, b) => a - b)
      .slice(-2)
      .reduce((a, b) => a + b, 0)

    const arr = [1, 3, 2, 4, 6, 5, 8, 10, 9]
    expect(largestSumAnyTwoElements(arr)).toBe(19)
  })
  // Question: How would you find the largest sum of any two elements?
  // function largestSumAnyTwoElements(arr){
  // function largestSumAnyTwoElementsV02(arr){


  test('17. Algorithm Check whether any two numbers in an array sums to a given number?', () => {
    const sumsGivenNumber = (arr, num) => {
      let result = false
      arr.forEach(item => {
        const dif = num - item
        result = arr.filter(item => item === dif).length === 1
      })
      return result
    }
    const arr = [1, 3, 2, 4, 6, 5, 8, 10, 9]
    const num = 10
    expect(sumsGivenNumber(arr, num)).toBe(true)
    const num1 = 52
    expect(sumsGivenNumber(arr, num1)).toBe(false)
  })
  // Question: From a unsorted array, check whether there are any two numbers that will sum up to a given number?
  // function sumsGivenNumber(arr,num){


  test('16. Algorithm Find missing number from unsorted array of integers.', () => {
    const missingNumberUnsortedArrayV01 = (arr, limit) => {

      const arrModel = []
      for (let i = Math.min(...arr); i <= Math.max(...arr); i += 1) {
        arrModel.push(i)
      }
      const arrModelSum = arrModel.reduce((a, x) => a + x)
      const arrInputSum = arr.reduce((a, x) => a + x)
      return arrModelSum - arrInputSum // arr.reduce((a, x) => a + x)
    }

    const arr = [1, 3, 2, 4, 6, 5, 8, 10, 9]
    const limit = 100
    expect(missingNumberUnsortedArrayV01(arr, limit)).toBe(7)
  })
  // Question: from a unsorted array of numbers 1 to 100 excluding one number, how will you find that number.
  // function missingNumberUnsortedArrayV01(arr,limit){
  // function missingNumberUnsortedArrayV02(arr,limit){


  test('15. Algorithm Generate random between 5 to 7 by using defined function.', () => {
    const randV01 = (min, max) => min + Math.random() * (max - min)
    expect(5 < randV01(5, 7) < 7).toBe(true)
  })
  // Question:If you have a function that generate random number between 1 to 5 how could u generate random number 1 to 7 by using that function?
  // function rand(min,max){
  // function rand5(){
  // function randomBetween5to7V01(num){


  test('14. Algorithm Verify a word as palindrome?', () => {

    const palindrom = candidate => {
      return candidate === candidate.slice().split('').reverse().join('')
    }

    expect(palindrom('шалаш')).toBe(true)
    expect(palindrom('гараж')).toBe(false)
  })
  // Question: How will you verify a word as palindrome?
  // function palindrom(candidate){
  // function palindromShort(candidate){


  test('13. Algorithm Remove duplicate characters from a string?', () => {
    const removeDuplicateCharactersSting = str => {
      const arrRes = []
      str.split('')
        .forEach(item => {
          if (str.split('').filter(itemFilter => itemFilter === item).length === 1
            || item === ' ') {
            arrRes.push(item)
          }
        })
      return arrRes.join('')
    }

    const str = 'reverse words in a sentence'
    const strNew = 'v wod i a tc'
    expect(removeDuplicateCharactersSting(str)).toBe(strNew)
  })
  // Question: How could you find the first non repeating char in a string?
  // function removeDuplicateCharactersSting(str){
  // function removeDuplicateCharactersStingV02(str) {


  test('12. Algorithm Find the first non repeating char in a string?', () => {
    const firstNonRepeatingChar = str => {
      const arrResult = []
      str.slice().split('')
        .forEach(item => {
          if (str.slice().split('').filter(itemFilter => itemFilter === item).length === 1) {
            arrResult.push(item)
          }
        })
      return arrResult[0]
    }
    const str = 'reverse words in a sentence'
    const char = 'v'
    expect(firstNonRepeatingChar(str)).toBe(char)
  })
  // Question: How could you find the first non repeating char in a string?
  // function firstNonRepeatingChar(str){
  // function firstNonRepeat(str){


  test('11. Algorithm reversewordsPlace?', () => {
    const reverseWordsPlace = str => str.split(' ')
      .map(item => item.slice().split('').reverse().join(''))
      .join(' ')

    const str = 'I am the good boy'
    const strNew = 'I ma eht doog yob'
    expect(reverseWordsPlace(str)).toBe(strNew)
  })
  // Question: If you have a string like "I am the good boy". How can you generate "I ma eht doog yob"? Please note that the words are in place but reverse.
  // function reverseWordsPlace(str){


  test('10. Algorithm reverseWordsSentence?', () => {
    const reverseWordsSentence = str => {
      return str.slice().split(' ').reverse().join(' ')
    }

    const str = 'How would you reverse words in a sentence'
    const strRev = 'sentence a in words reverse you would How'
    expect(reverseWordsSentence(str)).toBe(strRev)
  })
  // Question: How would you reverse words in a sentence?
  // function reverseWordsSentence(str){


  test('9. Algorithm Reverse a string in JavaScript?', () => {

    const reverseStringJavaScriptV01 = str => {
      return str.slice().split('').reverse().join('')
    }
    expect(reverseStringJavaScriptV01('string')).toBe('gnirts')
  })
  // Question: How would you reverse a string in JavaScript?
  // function reverseStringJavaScriptV01(str){
  // function reverseStringJavaScriptV02(str){


  test('8. Algorithm Swap two numbers without using a temp variable?', () => {

    const swapNumbers = c => {
      let { a, b } = c
      b -= a // 2
      a += b // 5
      b = a - b // 3
      return { a, b }
    }

    let a = 3
    let b = 5
    expect(JSON.stringify(swapNumbers({ a, b }))).toBe("{\"a\":5,\"b\":3}")
    a = 12
    b = 8
    expect(JSON.stringify(swapNumbers({ a, b }))).toBe("{\"a\":8,\"b\":12}")
    a = 34623
    b = 23
    expect(JSON.stringify(swapNumbers({ a, b }))).toBe("{\"a\":23,\"b\":34623}")
  })
  // Question: How would you swap two numbers without using a temporary variable?
  // function swapTwoNumbersV01(a,b){
  // function swapTwoNumbersV02(a,b){


  test('7. Algorithm Merge two sorted array?', () => {
    const mergeTwoSortedArray = (arrA, arrB) => {
      const arr = [...arrA, ...arrB]

      return arr.slice().sort((a, b) => {
        return a - b
      })
    }

    var arrA  =  [2,3,4,11,17]
    var arrB  =  [1,4,4,15,17,19]
    expect(JSON.stringify(mergeTwoSortedArray(arrA, arrB))).toBe("[1,2,3,4,4,4,11,15,17,17,19]")
  })
  // Question: How would you merge two sorted array?
  // function mergeTwoSortedArrayV01(arrA, arrB){
  // function mergeTwoSortedArrayV02(arrA, arrB){


  test('6. Algorithm Remove duplicate members from an array? with hash table', () => {
    const removeDuplicateMembersArrayHash = arr => {
      const objFromArr = {}
      for (let i = 0; i < arr.length; i += 1) {
        objFromArr[arr[i]] = null
      }
      const answer = []
      Object.keys(objFromArr).forEach(item => {
        let itemNext = item
        if (parseInt(itemNext, 10) !== NaN
          && itemNext === parseInt(itemNext, 10).toString()) {
          itemNext = parseInt(itemNext, 10)
        }
        answer.push(itemNext)
      })
      return answer
    }

    const removeDuplicateMembersArrayFilter = arr => {

      const answer = []
      arr.forEach(item => {
        const answerFiltered = answer.filter(itemFilter => item === itemFilter)
        // console.info('removeDuplicateMembersArrayFilter', answerFiltered)
        if (answerFiltered.length === 0) {
          answer.push(item)
        }

      })
      return answer
    }

    const arr = [1, 2, 1, 'min', 'max', 'max', 'min']
    // console.info('removeDuplicateMembersArrayFilter', removeDuplicateMembersArrayFilter(arr))
    expect(JSON.stringify(removeDuplicateMembersArrayHash(arr))).toBe("[1,2,\"min\",\"max\"]")
    expect(JSON.stringify(removeDuplicateMembersArrayFilter(arr))).toBe("[1,2,\"min\",\"max\"]")
  })
  // Question: How would you remove duplicate members from an array?
  // function removeDuplicateMembersArrayBruteForce(arrTemp){
  // function removeDuplicateMembersArrayHash(arr){
  // function removeDuplicateMembersArrayFilter(arr){


  test('5. Algorithm Find the greatest common divisor of two numbers?', () => {

    const greatestCommonDivisorTwoNumbers = (n, m) => {

      const minMath = Math.min(n, m)
      for (let i = minMath; i > 1; i -= 1) {
        if (n % i === 0 && m % i === 0) {
          return i
        }
      }
      return false
    }

    expect(greatestCommonDivisorTwoNumbers(12, 6)).toBe(6)
    expect(greatestCommonDivisorTwoNumbers(12, 256)).toBe(4)
  })
  // How would you find the greatest common divisor of two numbers?
  // function greatestCommonDivisorTwoNumbers(n,m){


  test('4. Algorithm Get nth Fibonacci number?', () => {

    const nthFibonacciNumber = (...args) => {
      let [ n, c = 0, m1 = 1, m2 = 0 ] = args
      if (n > c) {
        c += 1
        const m2Next = m1
        const m1Next = m1 + m2
        return nthFibonacciNumber(n, c, m1Next, m2Next)
      }
      return m1 + m2
    }

    expect(nthFibonacciNumber(1)).toBe(2)
    expect(nthFibonacciNumber(3)).toBe(5)
    expect(nthFibonacciNumber(5)).toBe(13)
    expect(nthFibonacciNumber(9)).toBe(89)
  })
  // Question: How do get nth Fibonacci number?
  // 2018-09-03 Fibonacci algorith with recursive function based on ES6
  // const fibonacci = ( n, k = 1, fib2 = 0, fib1 = 1 ) => {
  // https:// stackoverflow.com/questions/8845154/how-does-the-fibonacci-recursive-function-work
  // function fibDriver(n) {
  // Fibonacci with iteration
  // function nthFibonacciNumber(n){


  test('3. Algorithm to find all prime factors of a number', () => {
    const commonDivisorArr = n => {

      const answer = []
      const nHalfMathFloor = Math.floor(n / 2)
      for (let i = nHalfMathFloor; i > 1; i -= 1) {
        if (n % i === 0) {
          answer.push(i)
        }
      }
      return answer
    }

    const answer = commonDivisorArr(12)
    expect(JSON.stringify(answer)).toBe("[6,4,3,2]")
  })
  // Question: How could you find all prime factors of a number?
  // function commonDivisor(n){


  test('2. Algorithm Verify a prime number', () => {
    const isPrime = n => {
      let answer = true
      const nHalfMathFloor = Math.floor(n / 2)
      for (let i = nHalfMathFloor; i > 1; i -= 1) {
        if (n % i === 0) {
          answer = false
        }
      }
      return answer
    }
    expect(isPrime(7)).toBe(true)
    expect(isPrime(8)).toBe(false)
    // expect(isPrime(700339)).toBe(true)
    // expect(isPrime(700340)).toBe(false)
  })
  // Question: How would you verify a prime number?
  // function isPrime(n){

  test('1. Algorithm Varify an interger', () => {
    const n = 5
    const m = 3.5

    const isInteger = num => {
      return num % Math.floor(num) === 0 ? true : false
    }

    expect(isInteger(n)).toBe(true)
    expect(isInteger(m)).toBe(false)
  })
  // Question: What are possible ways to write a function isInteger(x) that determines if x is an integer.
  // var isInteger01 = function(x){
})


describe('Section for JavaScript Interview Questions', () => {


  test('Test', () => {
    expect(true).toBe(true)
  })

  test('DOM manipulation', () => {
    // You have the following array of objects. You need to render it on the screen as a list
    const dataInput = [
      {
        title: 'First link',
        href: 'https://abc.com/link1',
        data: { a: 'a1', b: 'b1', c: 'c1' },
      },
      {
        title: 'Second link',
        href: 'https://abc.com/link2',
        data: { a: 'a2', b: 'b2', c: 'c2' },
      },
      {
        title: 'Third link',
        href: 'https://abc.com/link3',
        data: { a: 'a3', b: 'b3', c: 'c3' },
      },
    ]


    let test = 0
    const handleEvent = (e, data) => {
      e.preventDefault()
      console.info('handleEvent', data)
      fetch(data.href, { method: 'POST', body: data })
      test = 1
    }

    const renderElemOl = dataInput => {
    
      const elemOl = document.createElement('ol')

      dataInput.forEach((item, i) => {
        const elemA = document.createElement('a')
        elemA.setAttribute('href', '#')
        elemA.innerHTML = item.title

        const elemLi = document.createElement('li')
        elemLi.addEventListener('click', e => handleEvent(e, item.data))
        elemLi.setAttribute('class', `li${i}`)
        elemLi.appendChild(elemA)
        elemOl.appendChild(elemLi)
      })

      return elemOl
    }

    const elemOl = renderElemOl(dataInput)

    const elemDiv = document.createElement('div')
    elemDiv.appendChild(elemOl)

    // expect(wrapper.find('.li2')).toHaveLength(1);
    // console.info('DOM manipulation [3]', { 'wrapper.find(.li2)': wrapper.find('.li2'), test, 'elemDiv.innerHTML': elemDiv.innerHTML })
    
    // elemDiv.find('.li2').simulate('click')
    // console.info('DOM manipulation [5]', { test })
    expect(true).toBe(true)
  })

  test('26.2 Chaining in JavaScript 2', () => {
    function abc(arg) {
      this.nameFn = ''
      const obj = {
        res: arg || 0,
        add(...args) {
          args.forEach(item => {
            this.res = this.res + item
          })
          return this
        },
        subtract(...args) {
          args.forEach(item => {
            this.res = this.res - item
          })
          return this
        },
        done() {
          return this.res
        }
      }

      return obj
    }

    // console.info('Chaining in JavaScript [10]', abc().add(6, 3).subtract(4, 1).done())
    expect(abc().add(6, 3).subtract(4, 1).done()).toBe(4)
  })

  test('26.1 Chaining in JavaScript 1', () => {
  // Write and export a JavaScript function, chain, that takes as input a single number,
  // and returns an object on which a variety of methods can be called (described below).
  // Implement each of these methods.
  // Think of f = new Foo(); as creating a class instance,
  // Foo.prototype.bar = function(){...} as defining a shared method for the class,
  // and Foo.baz = function(){...} as defining a public static method for the class.
  
    function chain(arg) {
      this.nameFn = ''
      this.fnMixin = (current, x) => x

      const objChain = {
        res: arg,
        add(...args) {
          this.res += args.reduce((sum, c) => sum + c, 0)
          // console.info('add()', { 'this.done': this.done })
          return this
        },
        exec(f) {
          this.res = f(this.res)
          return this
        },
        ['substitute']: function(x) {
          // chain.mixin('substitute', (current, x) => x);
          // console.info('substitute', { 'self': this.res })
          this.res = fnMixin(this.res, x)
          return this
        },
        done() {
          return this.res
        },
      }

      //console.info('chain inside', { done: obj.done() })
      return objChain
    }

    // console.info('chain(n).done() [5]', chain(4))
    // console.info('chain(n).done() [10]', chain(4).add(1, 2, 3).substitute(30).exec(x => 2 * x).done())
    expect(chain(4).add(1, 2, 3).substitute(30).exec(x => 2 * x).done()).toBe(60)
  })


  // Module programming pattern
  test('25.3 Calculation', () => {
    // eslint-disable-next-line func-names
    function calc () {
      this.counter = 0
      const add = () => {
        this.counter += 1
      }
      const output = () => {
        return this.counter
      }
      return { add, output }
    }

    const calcInst = new calc()
    let output = calcInst.output()
    expect(output).toBe(0)
    calcInst.add()
    calcInst.add()
    calcInst.add()
    calcInst.add()
    output = calcInst.output()
    expect(output).toBe(4)
  })

  // Module programming pattern
  test('25.2 Calculation', () => {
    const calc = function () {
      this.counter = 0
      // console.info('25.2 Calculation [0]', { counter: this.counter })
    }
    
    calc.prototype.add = function(){
      this.counter += 1
      // console.info('25.2 Calculation [5]', { counter: this.counter })
    }

    calc.prototype.output = function() { return this.counter }

    const calcInst = new calc()
    let output = calcInst.output()
    expect(output).toBe(0)
    calcInst.add()
    calcInst.add()
    calcInst.add()
    output = calcInst.output()
    expect(output).toBe(3)
  })


  // Module programming pattern
  test('25.1 Task Bear And Fangs', () => {
    function Bear () {
      let fangs = null
      const setFangs = color => {
        fangs = color
      }
      const getFangs = () => {
        return fangs
      }
      return { setFangs, getFangs }
    }

    const BearInst = new Bear()
    expect(BearInst.getFangs()).toBe(null)
    BearInst.setFangs('white')
    expect(BearInst.getFangs()).toBe('white')
  })


  test('24. Variable visibility', () => {
    var b = 1
    function outer(){
        var b = 2
        function inner(){
            b++
            var b = 3
            expect(b).toBe(3)
            //console.log(b)
        }
        inner()
    }
    outer()
  })


  test('27. typeof tricky questions', () => {
    expect(typeof undefined == typeof NULL).toBe(true)
    expect(typeof typeof 1).toBe('string')
  })


  test('26. Variable visibility', () => {
    const a = [1, 2, 3]
    a[10] = 99

    expect(a[1]).toBe(2)
    expect(a[10]).toBe(99)
    expect(a[7]).toBe(undefined)
    expect(a[6]).toBe(undefined)
  })


  test('25. How do you add an element at the begining of an array? How do you add one at the end?', () => {

    const myArray = ['a', 'b', 'c', 'd']
    myArray.push('end')
    myArray.unshift('start')
    expect(JSON.stringify(myArray)).toBe('["start","a","b","c","d","end"]')

    const myArrayES6 = ['a', 'b', 'c', 'd']
    const myArrayES6Next = ['start', ...myArrayES6, 'end']
    expect(JSON.stringify(myArrayES6Next)).toBe('["start","a","b","c","d","end"]')
  })


  test('24. How does js enjine work for comparison', () => {
    expect(1 < 2 < 3).toBe(true)
    expect(3 > 2 > 1).toBe(false)
  })


  test('23. What is difference between var and let in the question of placement?', () => {
    // var is scoped to the nearest function block, but let is scoped to the nearest enclosing block
    // var can be used before initialization, but not let
    // var can be redeclared, but not let

    var x = 21
    var girl = function () {
      // x = 5
      expect(x).toBe(undefined)
      var x = 20
    }
    girl()
  })


  test('21. What will the following code output to the console and why:\
    What is the issue with this code and how can it be fixed.', () => {

    const hero = {
      name: 'John Doe',
      getSecretIdentity: function(hi) { return `${hi} ${this.name}`},
    }

    const stoleSecretIdentity = hero.getSecretIdentity

    expect(stoleSecretIdentity('Hello')).toBe('Hello nodejs')
    expect(hero.getSecretIdentity('Hello')).toBe('Hello John Doe')
    expect(stoleSecretIdentity.call({ name: 'John Doe' }, 'Hey')).toBe('Hey John Doe')
    expect(stoleSecretIdentity.apply({ name: 'John Smith' }, ['Hi'])).toBe('Hi John Smith')
  })


  test('20. Consider the code snippet below. What will the console output be and why?', () => {
    (x => {
      return (y => {
        // console.log(x, y)
        expect(x).toBe(1)
      })(2)
    })(1)
  })


  test('19. What will the following code output to the console:', () => {
    expect((
      function f(n) {
        return ((n > 1) ? n * f(n - 1) : n)
      }
    )(10)).toBe(3628800)
  })


  test('18. What is the output out of the following code? Explain your answer.', () => {
    let a={}
    const b = { key: 'b' }
    const c = { key: 'c' }

    a[b] = 123
    a[c] = 456

    //const key = Object.keys(a)
    //console.log(a[b], key)
    expect(a[b]).toBe(456)
    expect(a['[object Object]']).toBe(456)
  })


  test('17. What will be the output when the following code is executed? Explain.', () => {

    // expect(true === 1).toBe()
    // expect(true == 1).toBe()
    // expect(false === 0).toBe(f)
    // expect(false == 0).toBe()

    // expect(true === '1').toBe()
    // expect(true == '1').toBe()
    // expect(false === '0').toBe()
    // expect(false == '0').toBe()

    expect(true === 1).toBe(false)
    expect(true == 1).toBe(true)
    expect(false === 0).toBe(false)
    expect(false == 0).toBe(true)

    expect(true === '1').toBe(false)
    expect(true == '1').toBe(true)
    expect(false === '0').toBe(false)
    expect(false == '0').toBe(true)
  })


  test('16. What would the following lines of code output to the console?', () => {

    // expect(1 && 2).toBe()
    // expect(0 && 1).toBe()
    // expect(1 || 2).toBe()
    // expect(0 || 1).toBe()

    expect(1 && 2).toBe(2)
    expect(0 && 1).toBe(0)
    expect(1 || 2).toBe(1)
    expect(0 || 1).toBe(1)
  })


  test('14. What is a “closure” in JavaScript? Provide an example.', () => {

    const globalVar = 'xyz'
    function outerFunc(outerArg) {
      const outerVar = 'a'
      expect(globalVar).toBe('xyz')
      expect(outerVar).toBe('a')

      function innerFunc(innerArg) {
        const innerVar = 'b'

        expect(globalVar).toBe('xyz')
        expect(outerVar).toBe('a')
        expect(innerVar).toBe('b')
        return innerArg + 1
      }
      innerFunc(2)
      return outerArg + 1
    }

    outerFunc(1)

    expect(true).toBe(true)
  })


  test('13. The following recursive code will cause a stack overflow\
    if the array list is too large.\
    How can you fix this and still retain the recursive pattern?', () => {
    //expect.assertions(1);

    var b = 70;
    var safety = 1000;

    function myfunction(local_b) {
      if(safety<0) return;
      safety--;

      // main task
      local_b--;

      if (local_b === 0) {
          return local_b
      }
      return myfunction(local_b)
    }
    var value = myfunction(b); // when b = 70, value = 2


    const readHugeList = n => {
      let list = []
      for (let i = 0; list.length < n; i += 1) {
        list.push(i)
      }
      // console.info('readHugeList', list)
      return list
    }


    let list = []
    const num = 5000
    list = readHugeList(num)
    // console.info('step [2]', list)

    const nextListItem = (listIn) => {
      // console.info('nextListItem [0]', listIn)
      const listOut = listIn.slice(0, listIn.length -1)
      if (listOut.length === 0) {
        // process the list item...
        // console.info('nextListItem [2]', listIn, listOut)
        return listOut
      }

      // console.info('nextListItem [4]', listIn.length, listOut.length)
      //setTimeout((listOut) => {
        // console.info('nextListItem [5]', listIn)
        return nextListItem(listOut)
      //}, 0, listOut)
    }

    const value1 = nextListItem(list)

    function callback1(data) {
      //setTimeout(() => {
        // console.info('[3]', { value1, value })
        expect(value1.length).toBe(0)
      //}, 2000)
    }


    doAsync(callback1)
    jest.runAllTimers()
    //console.log('nextListItem', { nextListItem: nextListItem(list), value });
  })


  test('12.1. How transform array to "hash" object? Provide an example.', () => {

    const hashObject = {}
    const arr = ['apple', 'cherry', 'bananas']
    arr.forEach(item => {
      hashObject[item] = null
    })
    // console.info('12.1', { hashObject, hashObjectStr: JSON.stringify(hashObject) })
    expect(JSON.stringify(hashObject)).toBe('{"apple":null,"cherry":null,"bananas":null}')
  })


  test('12. What will the arithmetics with number and strings outputs to the console and why ?', () => {

    // expect(1 + '2' + '2').toBe()
    // expect(1 +  +'2' + '2').toBe()
    // expect(1 +  -'1' + '2').toBe()
    // expect(+'1' +  '1' + '2').toBe()
    // expect(+'1' +  1 + '2').toBe()
    // expect('A' + 'B' + '2').toBe()
    // expect('A' - 'B' + '2').toBe()


    expect(1 + '2' + '2').toBe('122')
    expect(1 +  +'2' + '2').toBe('32')
    expect(1 +  -'1' + '2').toBe('02')
    expect(+'1' +  '1' + '2').toBe('112')
    expect(+'1' +  1 + '2').toBe('22')
    expect('A' + 'B' + '2').toBe('AB2')
    expect('A' - 'B' + '2').toBe('NaN2')
    //expect('A' - 'B' + 2).toBe(NaN)
  })


  test('11. What will the code below output to the console and why?', () => {
    let arr1 = [1, 2, 3]
    let arr2 = arr1.reverse()
    let arr3 = arr1.slice().reverse()
    expect(arr1[0]).toBe(3)
    expect(arr2[0]).toBe(3)
    expect(arr3[0]).toBe(1)
  })


  test('10. What gets logged to the console when the user clicks on “Button 4” and why?\
    Provide one or more alternate implementations that will work as expected.', () => {
    const buttonGenerate = (document, m) => {
      for (let i = 0; i < m; i += 1) {
        //const callback = jest.fn()
        const btn = document.createElement('button')
        btn.setAttribute('id', `id_${i}`)
        btn.appendChild(document.createTextNode(`Button ${i}`))
        btn.addEventListener('click', function() {
          document.querySelectorAll(`id_${i}`)[0].innerHTML = `Clicked ${i}`
        })
        console.info('buttonGenerate', { btn, id: btn.id })
      }
    }

    expect(true).toBe(true)
  })

  test('9. Write a sum method which will work properly when invoked using either syntax below.', () => {

    const sum2parath2 = function (x, y) {
      if (y === undefined) {
        // eslint-disable-next-line func-names
        return function (z) {
          return x + z
        }
      }
      return x + y
    }
    
    const sum2parath1 = function (x, y) {
      if (arguments.length < 2) {
        return function (z) {
          return x + z
        }
      }
      return x + y
    }
    
    const sum2parath = function (...params) {
      const xNext = params[0]
      if (params.length === 2) {
        return params[0] + params[1]
      }
      // eslint-disable-next-line func-names
      return function () {
        return xNext + arguments[0]
      }
    }

    expect(sum2parath2(2)(3)).toBe(5)
    expect(sum2parath2(2, 3)).toBe(5)
    expect(sum2parath1(2)(3)).toBe(5)
    expect(sum2parath1(2, 3)).toBe(5)
    expect(sum2parath(2)(3)).toBe(5)
    expect(sum2parath(2, 3)).toBe(5)
  })


  test('8. In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?', () => {
    
    /*
    console.log('#1 console.log(1);',1);                                //#1
    setTimeout(function(){console.log('#4 setTimeout(function(){console.log(2)}, 1000);',2)}, 1000);  //#4
    setTimeout(function(){console.log('#3 setTimeout(function(){console.log(3)}, 0);',3)}, 0);      //#3 
    console.log('#2 console.log(4);',4);                                //#2
    */

    /*
    const evt1 = new Event('first')
    const evt2 = new Event('second')
    
    document.addEventListener('first', () => {
      setTimeout(() => {
        console.log('expensiveAction() // ~2500ms');
       }, 2500);
    
     console.log('first');
    })
    
    document.addEventListener('second', () => {
     console.log('second');
    });
    
    setTimeout(() => {
     console.log('baboon');
    }, 0);
    
    document.dispatchEvent(evt1);
    document.dispatchEvent(evt2);    
    
    Correct answer:
      'first'
      'second'
      'baboon'
      'expensiveAction() // ~2500ms'
    */
    expect(true).toBe(true)
  })


  test('7. Discuss possible ways to write a function isInteger(x) that determines if x is an integer.', () => {

    const isInteger = x => {
      return x % Math.round(x) === 0
    }

    expect(isInteger(3)).toBe(true)
    expect(isInteger(3.2)).toBe(false)
  })


  test('6. Why 0.1 + 0.2 === 0.3 is false? What will the code below output? Explain your answer.', () => {
    expect(Math.round((0.1 + 0.2) * 10) / 10).toBe(0.3)
    expect(0.1 + 0.2 === 0.3).toBe(false)
  })


  test('5. What is NaN?', () => {
    const isNaN = num => {
      return typeof num === 'number' && num !== num && Number.isNaN(num)
    }

    expect(isNaN(NaN)).toBe(true)
    expect(isNaN('string')).toBe(false)
    expect(isNaN(2)).toBe(false)
  })


  test('4. foo1, foo2, foo3', () => {
    function foo1() {
      return {
        bar: 'hello',
      }
    }
    const foo1res = foo1()
    expect(foo1res.bar).toBe('hello')
  })


  test('3. self to equal "bar"', () => {
    const myObject3 = {
      foo: 'bar',
      func: function() {
        // console.info('myObject3 test')
        const self = this
        return self.foo
      }
    }

    expect(myObject3.func()).toBe('bar')
  })


  test('2. abChain to equal 3', () => {
    function abChain() {
      var b
      var a = b = 3
      // console.info('abChain', { a, b })
      return a
    }
    expect(abChain()).toBe(3)
  })

})


describe('Test file check', () => {
  test('doAsync calls both callbacks', () => {

    //expect.assertions(2);

    function callback1(data) {
      expect(data).toBeTruthy();
    }

    function callback2(data) {
      expect(data).toBeTruthy();
    }

    doAsync(callback1);
    doAsync(callback2);

    jest.runAllTimers(); // or jest.advanceTimersByTime(1000)
  })
  describe('test A', () => {
    const sum = (a, b) => { return a + b; };
    it('sum(2, 3) should be equal 5', () => {
      expect(sum(2, 3)).toBe(5) // Work to be true
    })
    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3)
    })
  })
})
