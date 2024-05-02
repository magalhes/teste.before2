describe('Preenchimento incorreto do campo CPF', () => {
    it('erro ao inserir um cpf invalido', () => {
      cy.visit('https://buger-eats.vercel.app/deliver')
  
      
      cy.get('input[name="cpf"]').type('0000000000')
  
   
      cy.get('button[type="submit"]').should('be.visible').click()
  
      cy.contains('Oops! CPF inválido').should('be.visible')
     
    })
  })