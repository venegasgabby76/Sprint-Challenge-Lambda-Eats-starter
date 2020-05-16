describe("This is going to be a dummy test" , () =>{
    it("Should be true for this test" , () =>{
        expect(true).to.equal(true);
    })
}) 

describe("Going to be testing out some of the inputs here" , () =>{
    it("take us to our page" ,() => {
        cy.visit("http://localhost:3000/");
    });
});