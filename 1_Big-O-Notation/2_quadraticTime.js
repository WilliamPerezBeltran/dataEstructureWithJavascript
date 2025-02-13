// O(n^2) is quadratic time and  O(n^3) is cubic time

function exampleQuadratic(n){
	for(var i=0;i<n;i++){
		console.log(i);
		for(var j=i;j<n;j++){
			console.log(j);
		}
	}
}

console.log(exampleQuadratic(5))