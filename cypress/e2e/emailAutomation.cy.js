import { loginPage } from '../Pages/LoginPage';
import { documentsPage } from '../Pages/DocumentsPage';
import { emailPage } from '../Pages/EmailPage';

const username = Cypress.env('username');
const password = Cypress.env('password');

describe('Mailfence email testing project', () => {

  beforeEach(() => {
    cy.viewport(1366, 768);
    cy.visit(Cypress.env('baseUrl'));
  });

  it("login, send email with attachment, and handle file operations", function () {
    // Login to account
    loginPage.loginToAccount(username, password);

    // Create new file in documents page
    cy.wait(2500);
    documentsPage.goToDocumentsPage();
    documentsPage.attachFile();

    // Create new email with attachment and send it to yourself
    emailPage.goToEmailPage();
    emailPage.createNewEmailWithAttachment(Cypress.env('emailRecipient'), 'subject');

    // Check that email is received, open it, and save attachment
    emailPage.checkIfEmailIsReceived('subject');
    emailPage.clickAndSaveNewEmail();

    // Move file to Trash
    documentsPage.goToDocumentsPage();
    cy.wait(2500);
    documentsPage.moveFileToTrash('automation_1.txt');

    // Verify that the file is in the trash
    documentsPage.verifyFileInTrash('automation_1.txt');
  });

});
