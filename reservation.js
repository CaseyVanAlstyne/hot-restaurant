function reservation(name, number, email, id) {
    this.customerName = name;
    this.phoneNumber = number;
    this.customerEmail = email;
    this.customerID = id;
}

module.exports = reservation;