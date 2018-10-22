export class Response{
    constructor(
        public id:number,
        public content:string,
        public votes:number,
        public topicId:number,
        public userId:string
    ){}
}