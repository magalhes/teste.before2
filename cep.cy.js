describe(' CEP', () => {
    it('deve exibir uma mensagem ao preencher o campo CEP de maneira incorreta', () => {
      cy.visit('https://buger-eats.vercel.app/deliver')
  
     
      cy.get('input[name="postalcode"]').type('asdsagfas')
  
      
      cy.get('input[type="button"]').should('be.visible').click()
  
    
      cy.contains('É necessário informar o CEP').should('be.visible')
    })
  })