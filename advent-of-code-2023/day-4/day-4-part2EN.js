import fs from 'fs'



var input = fs.readFileSync('./input.txt').toString()

var allGames = input.split('\n') 
    var quantityOfCards = {}
   
for(var i = 0; i < allGames.length; i++) {

   if(!quantityOfCards[i]) quantityOfCards[i] = 1; 

    var winningNumbers = []

    var game = allGames[i]

    game = game.split(':')[1] 
    
    var winnerNumbers = game.split('|')[0].trim().split(' ').filter(num=>num!='')

    var numbersYouHave = game.split('|')[1].trim().split(' ').filter(num=>num!='')



        for(var numero of numbersYouHave) {
                if(winnerNumbers.includes(numero)) {
                    winningNumbers.push(numero)
                }
        }

            var points = winningNumbers.length;
            
                
            var numberOfCards = quantityOfCards[i]
          
                for(var k = 0; k< numberOfCards; k++) {
           
            for(var j = 1; j<points + 1 ;j++) { 
                if(!quantityOfCards[i+j]) {
                    quantityOfCards[i+j] = 1 
                }
                 
                    quantityOfCards[i+j] ++ 
                    
                    
            } 

                
              }


        
}


    var sum = 0;

    for (let game in quantityOfCards) {
       
        if (quantityOfCards.hasOwnProperty(game)) {
            
            sum += quantityOfCards[game];
        }
    }

   console.log(sum)