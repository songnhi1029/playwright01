# Playwright Test Suite

This repository serves as a collection of Playwright end-to-end tests. It is designed to house various test cases for web applications, starting with an example demonstrating navigation link extraction.

## Table of Contents
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Cases](#test-cases)
  - [`test_nav.spec.ts`](#test_navspects)

## Installation
To set up the project and run the tests, follow these steps:

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <repository-url>
    cd play01 # Or your project directory name
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```
    This will install Playwright and other necessary packages.

## Running Tests

### Run all tests
To execute all tests in the suite, use the following command:

```bash
npx playwright test
```

### Run a specific test file
To run a particular test file, specify its path:

```bash
npx playwright test tests/test_nav.spec.ts
```

### Run tests in UI Mode
For an interactive experience with tracing and debugging, run tests in UI mode:

```bash
npx playwright test --ui
```

## Test Cases

### `test_nav.spec.ts`

**Purpose:**
This test navigates to `https://playwright.dev/`, identifies all navigation links within the `<nav>` element, extracts their visible text (or `aria-label`/`title` if text is absent) and their corresponding URLs. It then logs this information to the console and asserts that at least one navigation link is present.

**Functionality:**
- Navigates to `https://playwright.dev/`.
- Selects all `<a>` tags within the `<nav>` element.
- Iterates through the found links to extract:
    - Display text (prefers `textContent`, falls back to `aria-label`, then `title`).
    - The `href` attribute (URL) of the link.
- Prints the total count of navigation links.
- Prints each link's extracted text and URL.
- Verifies that the number of navigation links found is greater than or equal to 1.

