export function add(values: string) {    
    if (values === '') return 0;
    if (values.startsWith('//')) {
        const delimiter = values.charAt(2);
        values = values.substr(4).replace(delimiter, ',');
    }
    return values
        .replace('\n', ',')
        .split(',')
        .map((n) => {
            return Number.parseInt(n);
        })
        .reduce((a, n) => {
            return a + n;
        });    
}