export function capitalizeFirstLetter(string: string | number) {
    string = string.toString();
    return string.charAt(0).toUpperCase() + string.slice(1);
}