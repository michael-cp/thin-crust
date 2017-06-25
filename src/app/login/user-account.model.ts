export class UserAccount {
    public userAccountId: number;
    public emailAddress: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    
    constructor(emailAddress, password) {
        this.emailAddress = emailAddress;
        this.password = password;
    }

}