export class Faculty{
    constructor(
    public id: string,
    public firstName:string,
    public lastName:string,
    public gender:string,
    public email: string,
    public phone:string,
    public experiance:string,
    public qualification:string,
    public designation:string,
    public password: string,
    public dob?: string
    ){}
    }
export interface Faculty{
    department : string;
}
    