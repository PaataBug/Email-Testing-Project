class DocumentsPage {
    constructor() {
        this.selectors = {
            documentsPage: '.icon24-Documents',
            attachFileButton: '#new_doc > input',
            trashCan: '#doc_tree_trash'
        };
    }

    goToDocumentsPage() {
        cy.get(this.selectors.documentsPage).click();
    }

    attachFile() {
        cy.get(this.selectors.attachFileButton).attachFile('automation.txt');
        cy.contains('automation.txt').should('exist');
    }

    moveFileToTrash(fileName) {
        cy.contains(fileName).dragAndDrop(this.selectors.trashCan);
    }

    verifyFileInTrash(fileName) {
        cy.get(this.selectors.trashCan).click();
        cy.contains(fileName).should('exist');
    }
}

export const documentsPage = new DocumentsPage();
