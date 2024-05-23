class LoginPage {
    constructor() {
        this.selectors = {
            loginButton: '#signin',
            userID: '#UserID',
            password: '#Password',
            enterButton: '.btn'
        };
    }

    loginToAccount(username, password) {
        cy.get(this.selectors.loginButton).click();
        cy.get(this.selectors.userID).type(username);
        cy.get(this.selectors.password).type(password);
        cy.get(this.selectors.enterButton).click();
    }
}

export const loginPage = new LoginPage();
