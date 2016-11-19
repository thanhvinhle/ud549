function AddressBook() {
  this.contacts = []
}

AddressBook.prototype.addContact = function(c) {
  this.contacts.push(c);
}

AddressBook.prototype.getContact = function(i) {
  return this.contacts[i];
}

AddressBook.prototype.deleteContact = function(i) {
  this.contacts.splice(i, 1);
}
