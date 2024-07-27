// Write your solution in this file!

var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'some customer';

function changeLeastFavoriteCustomer() {
    try {
        leastFavoriteCustomer = 'another customer';
    } catch (error) {
        console.error('You cannot change a constant variable:', error.message);
    }
}
