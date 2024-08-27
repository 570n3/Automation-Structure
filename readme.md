# Admiral Automation Project

Welcome to the Admiral Automation project readme! This document provides an overview of the Admiral Automation project, including design patterns, folder structure, and rules for contributing to this automation framework.

## Design Pattern

Implemented the Page Object Model (POM) design pattern in this project, with a variation known as the Component Object Model (COM). When adding new code, please adhere to the following four key principles of 'Page':

1. **Encapsulation of UI Elements:**

    The Page class encapsulates all the UI elements present on the specific web page. Each UI element (e.g., text fields, buttons, links) is defined as a member variable within the Page/Component class.
    These member variables are usually private or protected to hide the implementation details from test scripts.

2. **Actions and Interactions:**

    The Page/Component class provides methods to perform actions on the elements present on the page. These methods encapsulate interactions like clicking buttons, filling out forms, and navigating to other pages.
    For example, the LoginPage class might include methods like `login(username, password)` to perform the login action.

3. **Abstraction:**

    The Page/Component class abstracts the complexities of the web page. It simplifies interactions with the page by providing descriptive and user-friendly methods. Test scripts don't need to be aware of the specific HTML structure or implementation details of the page.

4. **Isolation of Changes:**

    If the UI of the web page changes due to updates or redesigns, you only need to update the Page class corresponding to that page. This isolation of changes ensures that the impact on test scripts is minimal.

**Note:** These four key principles are fundamental to this project's success.

## Folder Structure

```plaintext
.
└── src/
    ├── components/
    │   ├── homepage.ts
    ├── pages/
    │   ├── homepage/
    │   │   ├── homepage.component.ts
    │   │   ├── homepage.page.ts
    │   │   └── homepage.fixture.ts
    │   ├── constants/
    |   |   ├── storage-path.ts 
    │   ├── helpers/
    |   |   ├── componentMapper.ts   
    │   ├── interfaces/
    |   |   ├── fixture-options.ts       
    │   └── ---
    ├── tests/
    │   └── shared/
    │       ├── homepage/
    │       │   ├── homepage.spec.ts
    │       │   
    │       ├── ---
    │       └── ---
    ├── test-results
    ├── package.json
    └── .env
```

- **src/components:**
  Shared components that are used across different pages.

- **src/pages:**
  All of the page objects are organized here. Each folder should contain a .page.ts class and a .fixture.ts class. The .page.ts class should contain the main page class, while the fixture exports it for use in tests. Any components specific to a page should have names ending with .component.ts.

- **src/tests:**
  All test specifications are housed in this directory. This is where developers are allowed to write `expect` statements for verification. No other part of the codebase should contain validation logic.

## Rules

Established some essential rules for this project:

1. **No DOM Referencing in Page Class:**
   - Do not include any DOM referencing code in the Page class. Instead, move all such code to a component class, whether it's a shared component or a page-specific component. This approach keeps the Page object clean, readable, maintainable, and acts as an index to all page components.

2. **No Validation Logic in Page/Component Class:**
   - Page/Component classes should not include validation logic using `expect`.

3. **Validation in the 'tests/' Folder:**
   - All validation logic must be performed in the 'tests/' folder.

By adhering to these rules, maintain a robust and organized automation framework that is efficient and easy to maintain.