# Changelog

All notable changes to this project are documented below.

## [1.0.0] - 2026-09-13

### Added
- Created `src/data/technologies.json` with 10 technology entries including React, Next.js, Node.js, Express, MongoDB, PostgreSQL, TypeScript, Vue.js, Tailwind CSS, and GraphQL
- Each technology includes metadata: id, name, category, description, icon URL, rating, difficulty level, and badge

### Fixed
- **Navbar Component**: Modernized DaisyUI classes
  - Changed `min-h-[72px]` to `min-h-18` for height sizing
  - Changed `bg-gradient-to-r` to `bg-linear-to-r` for gradient backgrounds
  - Applied to active link styling and navigation menu
  
- **Hero Component**: Updated Tailwind classes for better compatibility
  - Changed `max-w-[1440px]` to `max-w-360` for max-width container
  - Changed `bg-gradient-to-r` to `bg-linear-to-r` for gradient text effects
  
- **Footer Component**: Standardized layout classes
  - Changed `max-w-[1440px]` to `max-w-360` for consistent container sizing
  
- **Technologies Component**: Fixed import path and updated styles
  - Resolved import issue: now correctly imports from `../data/technologies.json`
  - Changed `min-h-[72px]` to `min-h-18` for description text height
  - Changed `bg-gradient-to-r` to `bg-linear-to-r` for button and heading styles
  - Modernized all DaisyUI button and badge classes

### Technical Details
- All components now use modern DaisyUI v4 class naming conventions
- Improved CSS maintainability with standardized utility classes
- Fixed TypeScript import resolution for JSON data files
- Maintained responsive design across all breakpoints (sm, md, lg, xl)
