import {faker} from '@faker-js/faker';

export class TemplateBuilder {
    withTitle(){
        this.title = faker.animal.bear() + '-test-' + Math.floor(Math.random() * 1000);
        return this;
}
     withText(){
        this.text = faker.animal.bear();
        return this;
}
  
    build(){ 
        const result = {...this};
        return result;
    }
}
