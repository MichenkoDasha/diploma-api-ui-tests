import {faker} from '@faker-js/faker';

export class TagBuilder {
    withName(){
        this.name = faker.word.noun();
        return this;
}
  
    build(){ 
        const result = {...this};
        return result;
    }
}