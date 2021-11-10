export function add(values: string) {    
    if (values === '') return 0;
    if(values.startsWith('//[')){
        const limit = values.indexOf(']');
        const delimiter = values.substr(0, limit).replace('//[', '');
        values = values.substr(limit + 2).split(delimiter).join(',');
    }
    else if (values.startsWith('//')) {
        const delimiter = values.charAt(2);
        values = values.substr(4).split(delimiter).join(',');
    }
    let numbers = values
        .split('\n').join(',')
        .split(',')
        .map((n) => {
            return Number.parseInt(n);
        });
    if (numbers.some((n) => n < 0)){ 
        let negatives = numbers.filter((number) => number < 0).join(", ");
        throw new Error("Negatives not allowed. " + negatives);
    }
    numbers = numbers.filter(number => number <= 1000);
    return numbers
        .reduce((a, n) => {
            return a + n;
    });    
}