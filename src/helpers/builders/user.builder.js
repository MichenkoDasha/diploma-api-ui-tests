export class UserBuilder {
    withEmail(email = null){
        this.email = email ?? process.env.TEST_USER_EMAIL;
        return this;
}
     withPassword(password = null){
         this.password = password ?? process.env.TEST_USER_PASSWORD;
        return this;
}
  
    build(){ 
        const result = {...this};
        return result;
    }
}