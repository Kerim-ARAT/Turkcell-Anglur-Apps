export class Product {
    id:number;
    name:string;
    type:Type1
    constructor(id:number,name:string,type:Type1){
        this.id=id;
        this.name=name;
        this.type =type;

    }
}
export enum Type1
{
    Big=1,
    Middle=2,
    Small=3

}
