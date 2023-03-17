import user from '../fixtures/user.json';
import urls from '../fixtures/urls.json';

export class Student {
    
    createStudent() {

        return cy.postRequest(urls.TEST.apiTestURL, {
            student: user.int.student,
            email_address: user.int.email_address,
            phone: user.int.phone,
            current_grade: user.int.current_grade,
            topping: ['bacon', 'cheese', 'mushroom'],
        });
    }
};