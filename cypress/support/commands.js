import 'cypress-file-upload';

Cypress.Commands.add("dragAndDrop", { prevSubject: "element" }, (subject, targetEl) => {
    cy.wrap(subject)
        .trigger("mousedown", { button: 0 })
        .trigger("mousemove", { clientX: 100, clientY: 100 });
    cy.get(targetEl)
        .trigger("mousemove", { clientX: 100, clientY: 100 })
        .trigger("mouseup", { force: true });
});
