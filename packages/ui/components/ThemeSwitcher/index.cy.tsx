import { ThemeSwitcher } from "./index";

const SWITCH = "[data-cy=switch]";

describe("<ThemeSwitcher />", () => {
  it("renders", () => {
    cy.mount(<ThemeSwitcher />);
  });

  it("triggers change event with value 'dark' then 'light", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");
    cy.mount(<ThemeSwitcher onChange={onChangeSpy} value="light" />);
    cy.get(SWITCH).click();
    cy.get("@onChangeSpy").should("have.been.calledWith", "dark");
    cy.get(SWITCH).click();
    cy.get("@onChangeSpy").should("have.been.calledWith", "light");
  });
});
