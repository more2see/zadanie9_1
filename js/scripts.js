function getTriangleArea(a, h) {
	if (a <= 0) return 'nieprawidlowe dane';
	else if (h <= 0) return 'nieprawidlowe dane';
	else((a > 0) && (h > 0));
	return (a * h / 2);
};
console.log(getTriangleArea(10, 6));
var triangle1Area = getTriangleArea(10, 15);
console.log(triangle1Area);
var triangle2Area = getTriangleArea(-2, 20);
console.log(triangle2Area);
var triangle3Area = getTriangleArea(7, 3);
console.log(triangle3Area);