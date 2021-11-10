export function add(values: string) {    
    if (values === '') return 0;    
    return values
        .split(',')
        .map((n) => {
            return Number.parseInt(n);
        })
        .reduce((a, n) => {
            return a + n;
        });    
}