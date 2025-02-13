function exampleCubic(n){
	for (var i = 0;i<n;i++){
		console.log(i);
		for(var j=n;j<n;j++){
			console.log(j);
			for(var k=j;j<n;j++){
				console.log(k);
			}		
		}
	}
}

console.log(exampleCubic(3));


