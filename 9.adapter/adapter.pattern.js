//define the MomoPaymentAdapter class

class MomoPaymentAdapter {
    constructor(momoPayment) {
        this.momoPayment = momoPayment;
    }

    //define the payWithVisa method that is required by the youtube registration process
    payWithVisa(visaPayment) {
        //convert the momo to visa
        const convertedPayment = this.convertToVisaPayment(this.momoPayment);
        //make the payment using the Visa
        visaPayment.pay(convertedPayment);
    }

    //define the convertToVisaPayment method that is required by the youtube registration process
    convertToVisaPayment(momoPayment) {
        //convert the momo to a visa
        const conversionRate = 23000;
        const visaAmount = momoPayment.amount / conversionRate;
        const visaPayment = {
            cardNumber: momoPayment.cardNumber,
            expiryDate: momoPayment.expiryDate,
            cvv: momoPayment.cvv,
            amount: visaAmount,
        };
        return visaPayment;
    }
}

//define the visaPayment
class VisaPayment {
    pay(payment) {
        console.log(
            `Paying ${payment.amount} USD with Visa car ${payment.cardNumber}`
        );
    }
}

//define the MomoPayment
class MomoPayment {
    constructor(cardNumber, expiryDate, cvv, visaAmount) {
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
        this.cvv = cvv;
        this.amount = visaAmount;
    }
}

//create a momo
const momoPayment = new MomoPayment("123456789", "12/25", "123", 2300000);

//create a momo-to-visa adapter
const momoAdapter = new MomoPaymentAdapter(momoPayment);

//create a visa payment
const visaPayment = new VisaPayment();

//register fro Youtube
momoAdapter.payWithVisa(visaPayment);
