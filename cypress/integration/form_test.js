describe("This is going to be a dummy test" , () =>{
    it("Should be true for this test" , () =>{
        expect(true).to.equal(true);
    })
}) 

describe("Going to be testing out some of the inputs here" , () =>{
    it("take us to our page" ,() => {
        cy.visit("http://localhost:3000/");
        cy.pause();
    });
});


describe("This is going to be testing for the pizza page" , () =>{
    it("will take us to our pizza page", () => {
        cy.visit("http://localhost:3000/pizza");
    })

        it("We should be able to check the boxes" , () => {
            cy.get('input[type="checkbox"]').check().should("be.checked");
        })

        it("We should be getting text in the special intructions" , () => {
            cy.pause();
            cy.get('textarea')
            .type("this will be some dummy text")
            .should("have.value" , "this will be some dummy text")
        })

        it("should be able to submit the form" , () =>{
            cy.get('form').submit() 
        })

    })