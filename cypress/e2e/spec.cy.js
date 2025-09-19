import PractoHospitalPage from '../support/pageobject/PractoHospitalPage';

describe('Practo Hospital Feature Tests', () => {
  Cypress.on('uncaught:exception', () => false);
  it('should validate top 10 hospitals with 24x7 availability and rating > 3.5', () => {
    PractoHospitalPage.visitHospitalsPage();
    PractoHospitalPage.validateTopHospitals();
  });
 
  it('should get top locations in Bangalore', () => {
    PractoHospitalPage.visitHomePage();
    PractoHospitalPage.getTopLocations();
  });
 
  it('should disable Schedule a Demo button for invalid email', () => {
    PractoHospitalPage.visitCorporatePage();
    PractoHospitalPage.fillInvalidDemoForm();
  });
});




































// describe('Validate Top 10 Hospital Features on Practo', () => {
//   Cypress.on('uncaught:exception', () => false);
//   it('Checks  24x7 availability, and rating > 3.5 for top 10 hospitals', () => {
//     cy.visit('https://www.practo.com/bangalore/hospitals');
//     cy.wait(5000)
//     let hospitalNames = [];
//     cy.get(".c-estb-card").each((item)=>{
//         const rating=item.find(".text-1").find(".u-bold").text()
//         const opening=item.find(".pd-right-2px-text-green").text()
       
//         if(rating >3.5 && opening ==='Open 24x7')
//         {
//             const hospitalName=item.find(".line-1").text()
//             hospitalNames.push(hospitalName)
//         }
//     }).then(()=>{
//         hospitalNames.forEach((item)=>{
//             cy.log(item)
//         })
//     })  
// })
 
// it("Get Top locations in Banglore",()=>{
//     cy.visit("https://www.practo.com")
//     cy.contains("Search for hospitals").click()
//     cy.contains("Hospitals in Bangalore").click()    
//     cy.get("input[placeholder='Search location']").click()
//     let locations=[]
//     cy.get(".c-omni-suggestion-group").find(".c-omni-suggestion-item").each((item)=>{
//         locations.push(item.text().replace("bangalore",""))
//     }).then(()=>{
//         locations.forEach((item)=>{
//             cy.log(item)
//         })
//     })
// })
 
// it('should disable Schedule a Demo button for invalid email', () => {
//     cy.visit('https://www.practo.com/plus/corporate');
//     cy.viewport(1280, 800);
//     cy.get('form', { timeout: 10000 }).first().should('be.visible').within(() => {
//     cy.get('input[name="name"]', { timeout: 10000 }).should('be.visible').type('John');
//     cy.get('input[name="organizationName"]').should('be.visible').type('Acme Corp');
//     cy.get('input[name="contactNumber"]').should('be.visible').type('98765432');
//     cy.get('input[placeholder*="Email"]').type('johndoe.example.com');
//     cy.get('select[name="organizationSize"]').should('be.visible').select(1);
//     cy.get('select[name="interestedIn"]').should('be.visible').select('Taking a demo');
//     cy.get('button[type="submit"]', { timeout: 10000 }).should('be.disabled');
//     });
//   });
 
// })
 