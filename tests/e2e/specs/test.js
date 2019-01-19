describe("Cookie Consent Test", () => {
  beforeEach(() => {
    cy.visit("/CookieConsent");
  });

  it("Starts with the given initial level", () => {
    cy.contains("level 1 given").should("be.visible");
    cy.contains("level 1 missing").should("not.be.visible");

    cy.contains("level 2 missing").should("be.visible");
    cy.contains("level 2 given").should("not.be.visible");
  });

  it("Opens the dialog when clicking the text", () => {
    cy.contains("Cookies och liknande tekniker").should("not.be.visible");
    cy.contains("Ändra nivå").click();
    cy.contains("Cookies och liknande tekniker").should("be.visible");
  });

  it("Does not immediately change level while making a selection", () => {
    cy.contains("Ändra nivå").click();
    cy.contains("3 Tredjepart").click();
    cy.contains("level 3 given").should("not.be.visible");
  });

  it("Changes level after OK is clicked", () => {
    cy.contains("Ändra nivå").click();
    cy.contains("3 Tredjepart").click();
    cy.get(".cookie-consent-dialog")
      .contains("OK")
      .click();
    cy.contains("level 3 given").should("be.visible");
    cy.contains("level 4 given").should("not.be.visible");
  });
});
