// Playwright fixtures are a powerful feature that allows you to set up and tear down test environments in a modular and reusable way. They help manage the lifecycle of resources needed for tests, such as browser contexts, pages, or even custom objects.

/**
Playwright fixtures are isolated, reusable environments or objects initialized automatically before a test runs and torn down immediately after it completes. 
They offer a modular alternative to traditional beforeEach and afterEach hooks by handling setup and teardown inside a single, injectable function.

Build-in Fixtures:
- page: Provides a fresh browser page/tab isolated from other tests.
- context: Provides an isolated browser profile (cookies, storage) per test.
- browser: Provides a shared browser instance across workers to optimize speed.
- request: Provides an API testing context to fire HTTP requests directly.
*/
