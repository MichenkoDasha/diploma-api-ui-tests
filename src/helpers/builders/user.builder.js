export class UserBuilder {
    withEmail(){
        this.email = process.env.TEST_USER_EMAIL;
        return this;
}
     withPassword(){
        this.password = process.env.TEST_USER_PASSWORD;
        return this;
}
  
    build(){ 
        const result = {...this};
        return result;
    }
}