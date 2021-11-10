export function add(values: string) {
    if(values !== ''){
        const number = Number.parseInt(values);
        return number;
    }
     return 0;
}