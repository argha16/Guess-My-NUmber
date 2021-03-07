
'use strict'

		let gussedNumber=Math.trunc(Math.random()*20)+1;
			document.querySelector('.number').textContent='?';
			let score=20;
            let  highscore=0;
				document.querySelector('.check').addEventListener('click',function(){
		
				const guess= document.querySelector('.guess').value;
				console.log(guess);
				if(!guess){
			         document.querySelector('.message').textContent='please Enter a Number!!';
				}
     //for equal // 
				else if (guess==gussedNumber){
	
							document.querySelector('.message').textContent='you win**';
							document.querySelector('body').style.backgroundColor='#1f8bcf';
							document.querySelector('.number').style.width='30rem'; 
							document.querySelector('.number').textContent=gussedNumber;
							
					if(score>highscore){
								highscore=score;
								document.querySelector('.highscore').textContent=highscore;
				
							}
	  
					}	
	
   // for greater value//
						else if (guess>gussedNumber){
							if(score>0){ document.querySelector('.message').textContent='Too High**';
							score--;
								document.querySelector('.score').textContent=score;}
						else{
								document.querySelector('.message').textContent='You lose'
						}
	
	 
						}	
// for lesser value//
						else if (guess<gussedNumber){
			
							if(score>0){ document.querySelector('.message').textContent='Too Low**';
						score--;
							document.querySelector('.score').textContent=score;}
						else{
							document.querySelector('.message').textContent='You lose'
						}
		
			
						}	  
	  
	});

   //for again//

					document.querySelector('.again').addEventListener('click',
						function(){
							document.querySelector('.guess').value = '';
			
							document.querySelector('.message').textContent='Start guessing...';
							document.querySelector('.score').textContent=20;
							document.querySelector('body').style.backgroundColor='#222';
			                 document.querySelector('.number').style.width='15rem';
							
							score=20;
							document.querySelector('.score').textContent=score;
						
							gussedNumber= Math.trunc(Math.random()*20)+1;
							document.querySelector('.number').textContent='?';
	
					});
	
	