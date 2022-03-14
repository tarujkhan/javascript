const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  
  let indexwithid = comments.findIndex(function(n){
        //   console.log(n)
          if (n.id === 123523){
              return (n.text)
          }
      })

      console.log(indexwithid)