//修正第三題、optional

// ----------第一題-------------------------

function max(numbers) {
// your code here
	let max=numbers[0];
	for(let i=0; i<numbers.length; i++){
		if(numbers[i]>max){
			max=numbers[i];
		}
	} return max;
}

console.log(max([1, 2, 4, 5])); // expected output: 5 
console.log(max([5, 2, 7, 1, 6])); // expected output: 7

//------------第二題--------------------------
function calculate(args) {
// your code here
	if(args.op === "+"){
		return args.n1 + args.n2;	
	} else if (args.op === "-"){
		return args.n1 - args.n2;
	} 
	else {
		return "Not supported";
	}
}

console.log(calculate({ n1: 2, n2: 3, op: '+' })); // expected output: 5 
console.log(calculate({ n1: 5, n2: 2, op: '-' })); // expected output: 3 
console.log(calculate({ n1: 1, n2: 6, op: 'x' })); // expected output: 'Not supported'

//-------------第三題--已修正--------------------


function calculate(data) {
// your code here
	let total=0;
	for(let k=0; k<data.products.length; k++){
		total += ( data.products[k].price )* (1-data.discount);
	} return total;
}


const discountedPrice = calculate({
	discount: 0.1, 
	products: [

			{
				name: "Product 1",
				price: 100 },
			{
				name: "Product 2",
				price: 700 },
			{
				name: "Product 3",
				price: 250 
			}
	]		
});
console.log(discountedPrice) // show the total price of all products after applying a discount

// ------------advanced optional-已修正-------------------
function twoSum(nums, target) {
// your code here
	let ans=[-1,-1]
	for(let i =0; i<nums.length; i++){
		for(let j =i+1; j<nums.length;j++){
			if(nums[i]+nums[j]===target){
				ans[0]=i;
				ans[1]=j;
			}
		}
	}
	if (ans[0]+ans[1]<0){    //條件設定
		return `No answer`;
	} else{
		return ans;
	}
}



/*
For example:
	twoSum([2, 7, 11, 15], 9); 
Should returns:
	[0, 1]
Because:
	nums[0] + nums[1] is 9
*/











