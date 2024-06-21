export type InformationType = {
    [key: string]: string;
}


export interface IAboutCharacter {
    id: number,
    name: string,
    information: InformationType,
    description: string,
    img: string
}