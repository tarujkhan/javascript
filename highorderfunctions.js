const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  
  // Array.prototype.filter()
  // 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's.
  
//   let checkinventors = inventors.filter(function(c){
//       return c.year > 1499 && c.year < 1600
//   })
//   console.log(checkinventors)

  
  // Array.prototype.map()
  // 2. Map the array of the inventors into a new array containing objects with just the first and last names as properties.
//   let inventornames = inventors.map(function(n){
//     return '${n.first} {n.last}'
//   })
//   console.log(inventornames)
  
  // 3. Sort the inventors by birthdate, from those born furthest in the past to those born most recently.
//   let sorteddate = inventors.sort((a, b) => a.year - b.year)
//   console.log(sorteddate)
  
  // 4. Sort the inventors by years lived from shortest to longest-lived.
    // let sortedyears = inventors.sort((a, b) => (a.passed - a.year > b.passed - b.year),)
    // console.log(sortedyears)
        
  
  
  // Array.prototype.reduce()
  // 5. Find how many years all the inventors lived combined.
//   let totalyrs = inventors.reduce((total, inventor) => {
//       return total + (inventor.passed - inventor.year)
//   }, 0);
//   console.log(totalyrs)







const people = [
    'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
    'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
    'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
    'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
    'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
    'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
    'Blake, William'
  ];
  
  // Array.prototype.map()
  // 6. Map the people array such that the new array consists of strings with the names formatted as "First Last", e.g., "Becker, Carl" should be mapped to "Carl Becker".
//   let newarray = people.map(function(name){
//     return name.split("").reverse().join("")
//   })
//   console.log(newarray)
  
  const data = [
    'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
    'bike', 'walk', 'car', 'van', 'car', 'truck'
  ];
  
  // Array.prototype.reduce()
  // 7. Count the number of instances for each of the data items.
  // Hint: Return an object where the keys are 'car', 'truck', etc., and the value is the total number of times each data item appears.
//   let countOccurences = function(arr, val) {
//       return arr.reduce((acc, element) => {
//           return (val === element ? acc + 1 : acc)
//       }, 0);
//   }
//   console.log(countOccurences(data, 'truck'))
  
  const devs = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  
  // Array.prototype.some()
  // 8. Check if at least one person is 19 or older.
//   let olderthannineteen = devs.some(function(n){
//       return 19 < 2021 - n.year
//   })
//   console.log(olderthannineteen)
  
  // Array.prototype.every()
  // 9. Check if everyone is 19 or older.
//   let everyolderthannineteen = devs.every(function(n){
        //  console.log(n)
//     return 19 < 2021 - n.year
//   })
//   console.log(everyolderthannineteen)
  
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  
  // Array.prototype.find()
  // 10. Find the comment with the id of 823423.
//   let commentwithid = comments.find(function(n){
    //   console.log(n)
//    return (n.text)
//    if (n.id === 823423){
//        return (n.text)
//    }
//     })
//   console.log(commentwithid)
  
  // Array.prototype.findIndex()
  // 11. Find the index of the comment with an id of 123523.
//   let indexwithid = comments.findIndex(function(n){
//       console.log(n)
//       if (n.id === 123523){
//           return (n.text)
//       }
//   })