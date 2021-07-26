// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

describe('fibonacci', () => {
  it('prints the fibonacci sequence as an array to the appropriate place', () => {
    expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    expect(fibonacci(15)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610])
    expect(fibonacci(32)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309])
  })
})

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



// b) Create the function that makes the test pass.
// For this function I have to take the previous two numbers behind the current index to determine the value of the current index
// However, attempting to access the previous two indices at an index less than 2 will break things
// I should initialize my solution as an array with the first two values already present, and then when operating I can simply start at the 3rd index.
// I will use a for loop, but instead of using array.length I will use the input as the limiter for the loop
// Inside this for loop I will push the sum of the previous two indices of my answers array to the latest index.
// By starting at 0 and continuing until the input-3, I will ensure my array is the appropriate length and that I am grabbing the correct numbers to sum
// I might have to tweak how much I'm subtracting from my input depending on if I got this right, but the rest of my logic should be applicable as is

const fibonacci = length => {
  let solution = [1, 1]
  if(length>2){ // I added this while starting my next pseudocode just for sanitation's sake
    for(let i=0; i<length-2; i++){ // Has to be length-2, as I am only populating the first two indices. I was thinking in index terms instead of length terms
      solution.push(solution[i]+solution[i+1])
    }
  }
  return solution
}

// Both tests pass as expected. I'm going to add a couple more up above just for the sake of verification
// While making these tests I didn't want to mess up the sequence in my toEqual statement, so I looked it up on Google. I found that fibonacci is actually spelled 'fibonacci' so I will be correcting it up above
// And I can do this with one command because I'm using MacVim :)
// %s/fibonnaci/fibonacci/g

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe('oddsInOrder', () => {
  it('returns an array of only the odd numbers from least to greatest', () => {
    expect(oddsInOrder(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(oddsInOrder(fullArr2)).toEqual([-823, 7, 23])
  })
})

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.

// I will need an array to store my output, which I will initialize at the beginning as empty.
// I can loop through the input with a for loop, and use the typeof operator to check that my index contains a number
// if the current index is a number, then I push it to my storage array
// after the loop, I can use the sort function and then return
// I'm going to try to refrain from looking up the syntax, so for posterity here is what I think it is: array.sort(a, b => a-b)
// fingers crossed

const oddsInOrder = data => {
  let numbers = []
  for(let i=0; i<data.length; i++){
    if(typeof data[i] == 'number' && data[i]%2 != 0){ //I forgot to factor in odds only in my pseudocode, but a simple fix in our conditional will solve it
      numbers.push(data[i])
    }
  }
  numbers.sort((a, b) => a-b)
  return numbers
}

// Fin

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe('arrayAccumulator', () => {
  it('returns an array where each index is the sum of all the previous indices', () => {
    expect(arrayAccumulator(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(arrayAccumulator(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(arrayAccumulator([])).toEqual([])
  })
})

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []



// b) Create the function that makes the test pass.

// This is really similar to the first problem. I can take a similar approach
// Create an empty array for storing my output
// Initialize this array with the value of the first index of the input
// Loop through the input with a for loop, starting at index 1
// During each iteration I can push the sum of the current input index and the previous output index to the output array
// Then I return the output array.

const arrayAccumulator = nums => {
  if(nums.length !=0){
    let arraySum = [nums[0]]
    for(let i=1; i<nums.length; i++){
      arraySum.push(nums[i]+arraySum[i-1])
    }
    return arraySum
  }
  return []
}

// I really didnt expect that to work 100% first try, so cool beans. I would love to make it a oneline but that's kind of impossible when using our for loop, or at least not helpful
