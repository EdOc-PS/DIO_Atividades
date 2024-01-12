class person{
    private name: string;
    private house: string;
    

    public constructor(name:string, house:string){
        this.name = name;
        this.house = house;
    }

    public speak() :void{
        console.log("I,m "+this.house);
    }
}
class king extends person{
    private title: string;

    constructor(name:string, house:string, title:string){
        super(name, house);
        this.title = title;
    }
}