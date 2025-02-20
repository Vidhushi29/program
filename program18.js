// Accept the value of a, b, c - The values in a quadratic equation and find its roots.
function findRoots(a, b, c) {
    // Calculate the discriminant
    let discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        // Two real and distinct roots
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(`The roots are real and distinct: root1 = ${root1}, root2 = ${root2}`);
    } else if (discriminant === 0) {
        // One real root (repeated)
        let root = -b / (2 * a);
        console.log(`The root is real and repeated: root = ${root}`);
    } else {
        // Complex roots
        let realPart = -b / (2 * a);
        let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        console.log(`The roots are complex: root1 = ${realPart} + ${imaginaryPart}i, root2 = ${realPart} - ${imaginaryPart}i`);
    }
}
let a=1,b=-3,c=2;
findRoots(a,b,c);