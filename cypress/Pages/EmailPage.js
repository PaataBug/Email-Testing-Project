class EmailPage {
    constructor() {
        this.selectors = {
            emailPage: '.icon24-Message',
            newEmailButton: '#mailNewBtn',
            mailToField: '#mailTo > .GCSDBRWBPL',
            subjectField: '#mailSubject',
            clickOnAttachButton: '.GCSDBRWBLSB > :nth-child(2)',
            chooseFromDocuments: ':nth-child(2) > .GCSDBRWBPQ > .GCSDBRWBGR',
            checkIcon: '.checkIcon',
            submitFile: '#dialBtn_OK > .btnCtn > div',
            sendButton: '#mailSend',
            refreshButton: '[title="Refresh"]',
            mailList: '#mailList',
            clickOnReceivedEmail: '.GCSDBRWBHVB > .GCSDBRWBGT',
            saveAttachmentFromEmailArrow: '.GCSDBRWBKRB > .icon-Arrow-down',
            saveButtonForSavingDocument: '#dialBtn_OK > .btnCtn > div'
        };
    }

    goToEmailPage() {
        cy.get(this.selectors.emailPage).click();
    }

    createNewEmailWithAttachment(recipient, subject) {
        cy.get(this.selectors.newEmailButton).click();
        cy.get(this.selectors.mailToField).type(recipient);
        cy.get(this.selectors.subjectField).type(subject);
        cy.get(this.selectors.clickOnAttachButton).click();
        cy.get(this.selectors.chooseFromDocuments).click();
        cy.get(this.selectors.checkIcon).first().click();
        cy.get(this.selectors.submitFile).click();
        cy.get(this.selectors.sendButton).click();
    }

    checkIfEmailIsReceived(subject) {
        cy.wait(10000);
        cy.get(this.selectors.refreshButton).click();
        cy.get(this.selectors.mailList).contains(subject).should('exist');
    }

    clickAndSaveNewEmail() {
        cy.get(this.selectors.clickOnReceivedEmail).click();
        cy.get(this.selectors.saveAttachmentFromEmailArrow).click({ force: true });
        cy.contains('Save in Documents').click();
        cy.contains('My documents').click();
        cy.wait(3000);
        cy.get(this.selectors.saveButtonForSavingDocument).click();
    }
}

export const emailPage = new EmailPage();
