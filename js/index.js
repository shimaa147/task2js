// const arrayOfQuotes = [
//   {'author': 'Jim Rohn', 
//    'quote': 'Beware of what you become in pursuit of what you want.'
//   },
//   {'author': 'Epictetus', 
//    'quote': 'It\'s not what happens to you, but how you react to it that matters.'
//   },
//   {'author': 'Frank Sinatra', 
//    'quote': 'The best revenge is massive success.'
//   },
//   {'author': 'Wayne Gretzy', 
//    'quote': 'You miss 100% of the shots you don\'t take.'
//   },
//   {'author': 'Nelson Mandela', 
//    'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
//   },
//   {'author': 'Elbert Hubbard', 
//    'quote': 'Do not take life too seriously. You will not get out alive.'
//   },
// ];
// var x=document.getElementById('quoteOutput');
// var y=document.getElementById('authorOutput');

// console.log(x);
// console.log(y);


// function generateQuote(){
  
//   const random=Number.parseInt(Math.random()*arrayOfQuotes.length);
//     console.log(random);

 
//     x.innerHTML= `<q>${arrayOfQuotes[random].quote} </q>`;
//     y.innerHTML= `--- ${arrayOfQuotes[random].author}---`;
   
// }
const arrayOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
  ];


// متغير لتخزين الرقم العشوائي السابق a variable to store the previous random index.
let previousIndex = -1;

//   function is used to generate a new random indexدالة لتوليد رقم عشوائي جديد
function generateQuotes() {
    let randomIndex;
    do {
        // randomIndex = Math.floor(Math.random() * arrayOfQuotes.length); // 
          randomIndex = Number.parseInt((Math.random() * arrayOfQuotes.length));
    } while (randomIndex === previousIndex); //comparsion between the current random and the previous random
    previousIndex = randomIndex;//assignrandomindex to the previous index.
   
    return randomIndex;


}

// function is used to display a random quote.
function displayRandomQuote() {
    const x = document.getElementById("quoteOutput");
    const y= document.getElementById("authorOutput");

    const randomIndex =  generateQuotes();
  
    
    x.innerHTML= `<q>${arrayOfQuotes[randomIndex].quote} </q>`;
    y.innerHTML= `--- ${arrayOfQuotes[randomIndex].author}---`;
}

