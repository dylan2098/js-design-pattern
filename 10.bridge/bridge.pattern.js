//define PaymentProcess

class PaymentProcess {
    pay(amount) {}
}

//define VisaPaymentProcess class
class VisaPaymentProcess extends PaymentProcess {
    constructor(cardNumber, expiryDate, cvv) {
        super();
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
        this.cvv = cvv;
    }

    //implements the pay method
    pay(amount) {
        console.log(`Paying ${amount} USD with Visa car ${this.cardNumber}`);
    }
}

//define MomoPaymentProcess
class MomoPaymentProcess extends PaymentProcess {
    constructor(phoneNumber) {
        super();
        this.phoneNumber = phoneNumber;
    }

    pay(amount) {
        console.log(`Paying ${amount} VND with momo car ${this.cardNumber}`);
    }
}

//define MemverRgisration
class MemberRegistration {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    //regis
    register() {
        const amount = 100;
        this.paymentProcessor.pay(amount);
        console.log(`Registered for Youtube membership!`);
    }
}

//create visa payment
const visaPaymentProcessor = new VisaPaymentProcess(
    "1234.3456.xxx",
    "12/25",
    "123"
);
const memebership = new MemberRegistration(visaPaymentProcessor);
memebership.register();

//create momo payment
const momoPaymentProcessor = new MomoPaymentProcess("09090909090");
const membership = new MemberRegistration(momoPaymentProcessor);
membership.register();
