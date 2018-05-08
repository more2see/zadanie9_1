function area(a, h) {
	if ((a > 0) && (h > 0)) {
		return a * h / 2;
	} else {
		return 'niepoprawne dane';
	}
}

console.log(area(10, 6));

var triangle1Area = area(10, 15);
console.log(triangle1Area);
var triangle2Area = area(-2, 20);
console.log(triangle2Area);
var triangle3Area = area(7, 3);
console.log(triangle3Area);


/* BYŁO, MOJE STARE: 
function Area(a, h) {
	if ((a <= 0) || (h <= 0)) {
		return "nieprawidlowe dane";
 	} else if ((a > 0) && (h > 0)) {
 		var Area = a * h / 2;
 		return Area;
 	}
}
*/