let parent=document.querySelector(".connect4Box")
   let rows=parent.children // getting rows as children of connect4Box
   let blocks=[];
   let i;
   let j;
   let currentPlayer="player1";
   let txt;
   const blockStyle=()=>{
    
    for(i=0;i<=5;i++)
    {
    blocks[i]=rows[i].children// getting circle blocks as children of rows
    for(k=0;k<=6;k++)
    {
    blocks[i][k].style.cssText=
      "height:70px;width:70px; border:solid; blue;border-radius: 50%;background-color:white";// adding styles to blocks
    
     
    }
    }
  }
  blockStyle();
  
  const btnClick=()=>{
    txt=document.querySelector(".txt")
    txt.innerHTML=currentPlayer
    blocks[0]=rows[0].children
    blocks[0][0].addEventListener("click",function(){player(0)})
    blocks[0][1].addEventListener("click",function(){player(1)})
    blocks[0][2].addEventListener("click",function(){player(2)})
    blocks[0][3].addEventListener("click",function(){player(3)})
    blocks[0][4].addEventListener("click",function(){player(4)})
    blocks[0][5].addEventListener("click",function(){player(5)})
    blocks[0][6].addEventListener("click",function(){player(6)})
    }
    const player=(p)=>{
        if(currentPlayer=="player1"){
            player1(p)
            }
            else if(currentPlayer=="player2"){
             player2(p)
            }

    }
    const player1=(i)=>{
      for (j=5;j>=0;j--){
              if(blocks[j][i].style.backgroundColor==="white"){
                blocks[j][i].style.backgroundColor="red"
               
                currentPlayer="player2"
                txt=document.querySelector(".txt")
                txt.innerHTML=currentPlayer
                break;
               }
               
         
            // checkWinner(i);       
    }
  }

  const player2=(i)=>{
        
          
    for( j=5;j>=0;j--) {
   
    {
      if(blocks[j][i].style.backgroundColor==="white"){
        blocks[j][i].style.backgroundColor="yellow"
        
     
        currentPlayer="player1"
        txt=document.querySelector(".txt")
        txt.innerHTML=currentPlayer
        break;
       }
     } 
    
    // checkWinner(i);       
}
}
const startGame=()=>{
  btnClick();

}