
describe("address plugin", function () {
    it("should return the absolute address of the jspm module", () => {
        const address = require("../lib/keyString.js!../lib/address");
        expect(address).to.equal("http://localhost:8010/lib/keyString.js");
    });
});