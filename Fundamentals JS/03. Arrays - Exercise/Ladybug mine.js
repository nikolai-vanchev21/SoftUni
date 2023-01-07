function ladyBugs(arr){
    const fieldSize=arr.shift();
    let ladyBugsField=[];
   for(let i=0;i<fieldSize;i++){
    ladyBugsField[i]=0;
   }
   
    const ladyBugsPosition=arr.shift().split(' ');
    for (const iterator of ladyBugsPosition) {
        if(iterator<fieldSize)
        ladyBugsField[iterator]=1;
    }
 
    while(arr.length>0){
        let command=arr.shift();
      
        let ladyBugIndex=Number(command.split(' ')[0]);
        let direction=command.split(' ')[1];
        let flyLength=Number(command.split(' ')[2]);
        console.log(direction);
        
        if(flyLength<0 && direction=='left'){
        direction='right';
            flyLength=Math.abs(flyLength)
    }
        if(flyLength<0 && direction=='right'){
            direction='left';
            flyLength=Math.abs(flyLength)
        }
        
        if(direction=='right' && ladyBugIndex+flyLength<fieldSize){

        
        while(ladyBugsField[ladyBugIndex+flyLength]==1 && ladyBugIndex+flyLength<fieldSize)
        {
            flyLength++;
        }

        if(ladyBugIndex+flyLength>=fieldSize){
            ladyBugsField[ladyBugIndex]=0;
        }
        else{
            ladyBugsField[ladyBugIndex+flyLength]=1;
            ladyBugsField[ladyBugIndex]=0;
        }

        console.log(ladyBugsField);
    }
        
}

console.log(ladyBugsField.join(' '));
}
ladyBugs([ 3, '0 1 2',
'0 right 1',
'1 right 1',
'2 right 1']


)