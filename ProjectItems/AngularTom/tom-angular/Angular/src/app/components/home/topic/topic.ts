export class Topic {
    id:number;
    name:string;
    privId:number;
    constructor(id:number, name:string, privId:number){
        this.id = id;
        this.name = name;
        this.privId = privId;
    }
}