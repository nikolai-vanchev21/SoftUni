function smallestNumber(num1,num2,num3){
    const nums=[num1,num2,num3];
    
    for(let i=0;i<nums.length;i++){
       
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]>nums[j]){
                let temp=nums[i];
                nums[i]=nums[j];
                nums[j]=temp;
            }
        }
    }
    console.log(nums[0]);
}
smallestNumber(2,5,3)