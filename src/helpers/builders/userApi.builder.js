import {faker} from '@faker-js/faker';

export class userApiBuilder {
    withId(id){
        this.id = (id !== undefined && id !== null) 
            ? id 
            : faker.random.numeric(2);
        return this;
    }
     withName(name){
        this.name = (name !== undefined && name !== null) 
      ? name 
      : faker.name.firstName();
    return this;
    }
    withPhone(phone) {
        this.phone = phone; 
        return this;
    }
 
    build(){ 
        const result = {...this};
        return result;
    }
}