import {faker} from '@faker-js/faker';

export class TagBuilder {
    withName(name) {
        this.name = (name !== undefined && name !== null)
            ? name
            : faker.lorem.word(); 
        return this;
}
  
    build(){ 
        const result = {...this};
        return result;
    }
}