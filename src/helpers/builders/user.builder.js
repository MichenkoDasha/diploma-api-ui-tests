import { faker } from '@faker-js/faker';
export class UserBuilder {
    withEmail(email = null){
        this.email = email ?? process.env.TEST_USER_EMAIL ?? faker.internet.email();
        return this;
}
     withPassword(password = null){
         this.password = password ?? process.env.TEST_USER_PASSWORD ?? faker.internet.password({ length: 12 });
        return this;
}
  
    build(){ 
        const result = {...this};
        return result;
    }
}