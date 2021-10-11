
export class Todo {
    constructor(
         public text:string,
         public id: number = new Date().getTime(),
         public completed:boolean=false
               ){
    }
}