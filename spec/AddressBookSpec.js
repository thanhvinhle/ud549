describe( "AddressBook", function() {

  var ab, c;

  beforeEach(function() {
    ab = new AddressBook(),
    c  = new Contact();
  });

  it("should be able to add Contact", function() {
    ab.addContact(c);
    expect(ab.getContact(0)).toBe(c);
  });

  it("should be able to delete a Contact", function() {
    var ab = new AddressBook(),
        c  = new Contact();
    ab.addContact(c);
    ab.deleteContact(0);
    expect(ab.deleteContact(0)).not.toBeDefined();
  });
});
