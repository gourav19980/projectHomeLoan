export class User{
    firstname:string="";
    lastname:string="";
    gender:string="";
    email:string="";
    mobileNum:number=0;
    currentLoc:string="";
    loanAmt:number=0;

    constructor(firstname:string,lastname:string,gender:string,email:string,mobileNum:number,currentLoc:string,loanAmt:number){
        this.firstname=firstname;
        this.lastname=lastname;
        this.gender=gender;
        this.email=email;
        this.mobileNum=mobileNum;
        this.currentLoc=currentLoc;
        this.loanAmt=loanAmt;
    }

}