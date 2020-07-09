import validateEmail from './index';

test('just a string', () => {
    expect(validateEmail("my name is Pensy")).toBeFalsy()
});

test("tld missing", () => {
    expect(validateEmail("gabriel@gmail")).toBeFalsy()
});

test("tld without a preceeding dot", () => {
    expect(validateEmail("gabriel@gmailcom")).toBeFalsy()
});

test("no at sign", () => {
    expect(validateEmail("gabriel.gmail.com")).toBeFalsy()
});


test("valid corporate email", () => {
    expect(validateEmail("John.Doe@ibm.com")).toBeTruthy()
});
test(".apartments tld", () => {
    expect(validateEmail("John.Doe@airbnb.apartments")).toBeTruthy()
});
test(".cancerresearch tld", () => {
    expect(validateEmail("John.Doe@foundation.cancerresearch")).toBeTruthy()
});
test(".porn tld", () => {
    expect(validateEmail("John.Doe@myhomemade.porn")).toBeTruthy()
});

test("argentinian email test", () => {
    expect(validateEmail("ñoñó1234@server.com")).toBeTruthy()
});