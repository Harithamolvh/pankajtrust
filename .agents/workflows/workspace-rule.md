---
description: Master developer guidelines for the Laravel + Inertia.js stack. Enforces strict MVC architecture, mobile-first design, snake_case conventions, Spatie Media Library for files, and standardized JSON API response formats.
---

# Workspace Developer Rules: Laravel + Inertia.js Stack

**Role:** Expert Full Stack Developer specializing in Laravel, Inertia.js (React), Tailwind CSS, and Spatie Media Library.

## 0. Interaction Protocol (CRITICAL)

* **Explain First, Build Later:** Before writing any code or implementing any feature, you **MUST** first explain your plan, architectural approach, and the files you intend to modify.
* **Wait for Confirmation:** Do not proceed with the actual implementation until the user has explicitly confirmed or approved your plan.
* **Exception:** This applies unless the user explicitly states "Build this immediately" or "No explanation needed".

## 1. Core Architecture & Tech Stack (Laravel MVC + Inertia)

* **Architecture:** Strict Laravel MVC pattern bridging to React via Inertia.js.
  * **Models:** Laravel Eloquent ORM definitions in `app/Models`.
  * **Views:** React Components and Pages in `resources/js/Pages` and `resources/js/Components`.
  * **Controllers:** Business logic and request handling in `app/Http/Controllers`.
* **Frameworks:** Laravel 10/11+ and Inertia.js (React).
* **Language:** PHP 8.5+ for backend, TypeScript/JavaScript for frontend.
* **Styling & UI Library:** **Tailwind CSS**.
  * **Mobile-First Design (CRITICAL):** All designs must begin with mobile styling as the baseline, using `sm:`, `md:`, `lg:`, etc., to scale up.
  * **Theme Compatibility (CRITICAL):** All components **MUST** support both **Dark** and **Light** modes (`dark:` variants).
  * **Visibility Check:** Ensure text color contrasts against backgrounds (e.g., `bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100`).

## 2. Code Style, Imports & Naming

* **Indentation:** Use **Tabs**.
* **Quotes:** Use **Single quotes** (`'`) for strings.
* **Naming Conventions:**
  * Variables/Functions: `snake_case`
  * React Components & Classes: `PascalCase`
  * DB Tables/Columns: `snake_case`
* **Path Aliases (Frontend):**
  * Use `@/` to reference `resources/js/` (e.g., `import Button from '@/Components/Button';`).

## 3. Database & Models (Eloquent)

* **Soft Deletes:** ALL models must use Laravel's `SoftDeletes` trait (`deleted_at`). Add `delete_reason` (string) to migrations if auditing is required.
* **File & Image Storage:** Strictly use **Spatie Media Library**. Do not build manual filesystem paths or custom `file_path` logic unless strictly necessary. Models should implement `HasMedia` and use `InteractsWithMedia`.
* **Relationships:** Explicitly define all associations using Eloquent relationship methods (`hasMany`, `belongsTo`, etc.).
* **Logging:** Use centralized audit logging for key actions (e.g., Spatie Activitylog).

## 4. Routing & Controllers

* **Routing logic:**
  * Define frontend routes in `routes/web.php` returning `Inertia::render()`.
  * Define external API routes in `routes/api.php` prefixed with `/api/v1/`.
* **Strict Validation (CRITICAL):**
  * All incoming data MUST be validated using Laravel **FormRequests** (`app/Http/Requests`). Frontend validation is also needed mandatorily.
  * No data should touch the database without passing validation.
* **Route Grouping:** Group routes by middleware and prefixes for clean files (e.g., `Admin` namespace).

## 5. Standardized API Response Handler

For API routes (in `routes/api.php`), all Controllers must return a standardized JSON structure. Inertia routes will pass data via props instead.

**JSON Structure for APIs:**
```json
{
  "status": boolean,     // true/false
  "message": string,     // Human readable
  "code": number,        // Internal App Code (1xx Success, 2xx Client Err, 3xx Server Err, 4xx Business Err)
  "data": any,           // Payload or null
  "misc": object,        // Metadata (pagination, etc)
  "errors": array        // Validation error details
}
```

## 6. Authentication & Security

* **Auth System:** Use Laravel Sanctum.
  * Inertia/Web routes rely on Sanctum's stateful cookie authentication.
  * API routes rely on Sanctum Bearer tokens.
* **Super Admin Logic:** Filter out 'Super Admin' users and roles at the database query level so they never appear in API responses or UI lists unless the requester is themselves a Super Admin.

## 7. Frontend Guidelines (Inertia + React)

* **Mobile-First Responsiveness (CRITICAL):** Apply strictly to all interfaces (Admin panels, public frontends).
* **Routing:** Use Inertia's `<Link>` component for all internal navigation to prevent full-page reloads.
* **URL-Driven State:** UI states (Filters, Tabs) should sync with the URL Query Params to allow deep-linking.
* **Forms & Validation (Dual Validation):**
  * Use `react-hook-form`.
  * **Strict Frontend Validation:** Implement Zod schemas (`@hookform/resolvers/zod`) that perfectly mirror the backend Laravel FormRequest rules for immediate user feedback.
* **Feedback:** Display skeleton loaders or spinners during Inertia navigations (`router.on('start', ...)`). Use a Snackbar system (e.g., `sonner` or `react-hot-toast`) for flash messages passed down via Inertia shared props.
