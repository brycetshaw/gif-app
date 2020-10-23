describe("Test to search, select, unselect" , () => {
    it("visit the app", () => {
        //go to app
        cy.visit('/');

        //input search
        cy.get('.form-control').click();
        cy.get('.form-control').type('pedro');
        cy.get('.btn:nth-child(2)').click();
        cy.get('.form-inline').submit();

        //click some gif, assert class changes
        [0,2,3,4].map((idx) => {
            cy.get(`[data-cy=gif-item-${idx}] > .figure > .figure-img`).then(element => {
                cy.get(element).parents().should('have.class', 'not-selected')
                cy.get(element).click()
                cy.get(element).parents().should('have.class', 'selected')
            })
        })

        //assert 4 elements selected
        cy.get('.selected').should('have.length', 4)

        // go to saved items
        cy.get('.btn-outline-light').click();

        //check route
        cy.url().should('contain', 'saved')

        //assert length of selected items
        cy.get(`.figure-img`).should('have.length', 4)

        //unselect some saved items
        cy.get('.selected:nth-child(1) .figure-img').click();
        cy.get('.selected:nth-child(1) .figure-img').click();

        //search gifs again
        cy.get('.btn').click();
        cy.get('.form-control').click();
        cy.get('.form-control').type('pedro');
        cy.get('.btn:nth-child(2)').click();
        cy.get('.form-inline').submit();

        //expect correct number of selected items
        cy.get('.selected').should('have.length', 2)
    })
})

