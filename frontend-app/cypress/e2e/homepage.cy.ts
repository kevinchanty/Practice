describe("homepage", () => {
  it("user can select products and deselect them in a list", async () => {
    cy.visit("http://localhost:3000");

    // Name in 1st product cart
    let sampleName1;
    cy.get(":nth-child(1) > .ant-card > .ant-card-body")
      .invoke("text")
      .then((name1) => {
        sampleName1 = name1;
      });

    // Select checkbox of 1st product card
    cy.get(
      ":nth-child(1) > .ant-card > .ant-card-actions > :nth-child(1) > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input"
    ).click();

    const listName1 = cy
      .get(".ant-list-item-meta-title > a")
      .should("be.visible")
      .invoke("text")
      .then((text) => expect(text).eq(sampleName1));

    // Remove button
    cy.get(".ant-btn > span").should("be.visible").click();

    cy.get(".ant-list-item-meta-title > a").should("not.exist");
  });
});
