export class UserBuilder {
    withEmail(){
        this.email = 'bibbyunexpected@wshu.net';
        return this;
}
     withPassword(){
        this.password = 'bibbyunexpected@wshu.net';
        return this;
}
  
    build(){ 
        const result = {...this};
        return result;
    }
}