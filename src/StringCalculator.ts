export function add(values: string) {    
    if (values === '') return 0;
    if (values.startsWith('//')) {
        const delimiter = values.charAt(2);
        values = values.substr(4).replace(delimiter, ',');
    }
    let numbers = values
        .replace('\n', ',')
        .split(',')
        .map((n) => {
            return Number.parseInt(n);
        });
    
    if (numbers.some((n) => n < 0)){ 
        let negatives = numbers.filter((number) => number < 0).join(", ");
        throw new Error("Negatives not allowed. " + negatives);
    }
    return numbers        
        .reduce((a, n) => {
            return a + n;
    });    
}