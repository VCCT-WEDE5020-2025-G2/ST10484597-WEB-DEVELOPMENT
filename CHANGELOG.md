# Changelog

All notable changes to the Café Website project are documented in this file.

## [Unreleased]
- Planned features: hero/banner section with CTA, image slider/carousel, testimonials, dark/light mode toggle, embedded location map, animated menu interactions.

## [1.2.0] - 2025-09-29
### Added
- Menu cards section with responsive grid layout and hover scale effect
- Image gallery section with flexible layout and hover opacity effect
- Contact form styling with modern input focus outline
- Buttons with hover color transition for interactive feel
- Footer with matching café color palette and padding
- Typography harmonized across the site for headings and body text
- Logo-style text styling removed cursive for consistency

### Changed
- Unified all CSS into a single stylesheet for maintainability
- Improved brown café theme with consistent background and accent colors
- Adjusted spacing, line-height, and padding for readability and aesthetic balance

### Fixed
- Corrected menu item hover effect
- Fixed inconsistent heading sizes and spacing
- Adjusted text color contrast for better readability on brown backgrounds

## [1.1.0] - 2025-09-28
### Added
- Initial layout including header, navigation, main sections, and footer
- Basic CSS for background color, typography, and text styling
- Brown background applied site-wide for café theme
- Placeholder sections for menu, gallery, and contact form

### Changed
- Preliminary font choices and sizing applied for body and headings
- Cleaned up section spacing to avoid clutter

## [1.0.0] - 2025-09-27
### Added
- Project initialized with basic HTML structure
- Created initial CSS file with body styling and colors
- Header and navigation layout setup
- Footer section placeholder

### Added
- change the font in the homepage 

### Added
- Addded 2 images to the homepage

### Added
- Added the specification for mobile,tablet and laptop

### Initial Structure
- Created initial HTML structure for all pages: Home, Menu, About Us, and Contact.
- Added semantic HTML elements such as <header>, <nav>, <section>, <article>, and <footer> for accessibility and SEO.
- Linked external CSS stylesheet (style.css) and JavaScript file (script.js).
- Implemented consistent navigation bar across all pages.
- Added the café logo, favicon, and basic colour scheme representing coffee tones (brown, cream, beige).
### Layout and Design
- Used CSS Flexbox to create a responsive navigation bar and footer.
- Applied CSS Grid for the main layout, structuring the content into organized sections (menu items, about info, gallery).
- Styled buttons using properties such as border-radius, box-shadow, and hover transitions.
- Added background images and gradients to enhance the visual appeal.
- Chose warm and earthy colour palette for café aesthetics.
- Introduced consistent typography hierarchy using Google Fonts (e.g., “Poppins” or “Open Sans”).
- Tested layout on various screen sizes for alignment and balance.
### Responsive Design Enhancements
- Added CSS Media Queries for desktop, tablet, and mobile breakpoints.
- Modified the layout to single-column on small screens and multi-column on larger screens.
- Used relative units (em, rem, and %) for fonts and spacing to improve scalability.
- Implemented responsive images using srcset, sizes, and loading="lazy" attributes.
- Tested responsiveness using Microsoft Edge Developer Tools device simulator for different screen sizes.
-Optimized layout for mobile-first design approach.
### JavaScript Interactivity
- Added interactive navigation menu (toggle or hamburger menu) for smaller screens.
- Included a form validation script for the Contact Us page using JavaScript (required, email, and message fields).
-  Created alert messages for successful form submission simulation.
- Added “Open Now / Closed” status widget that updates based on the current time.
-Implemented Daily Specials feature, displaying unique offers depending on the day of the week.
- Introduced “Add to Cart” simulation to allow users to interact with menu items.
-Used localStorage to remember returning visitors and greet them with a welcome message.
- Added smooth scroll animations and fade-in effects when scrolling through sections.
### UI/UX Improvements
- Designed a floating “Contact Us” button fixed at the bottom right for easy access.
- Added parallax scrolling background for a professional effect.
- Implemented hover effects on images and buttons for visual feedback.
- Added dark mode toggle button for accessibility and user preference.
- Integrated animated transitions and hover colour changes for interactive feedback.
- Improved readability and spacing for better user experience.
- Optimized contrast ratios for accessibility compliance.
### SEO and Performance Optimization
- Added meta tags (description, keywords, and author) for SEO enhancement.
- Implemented Open Graph tags to optimize how the website appears when shared on social media.
- Added Schema Markup (JSON-LD) for Google’s rich search snippets (business info, contact details, and operating hours).
 - Optimized image sizes and applied loading="lazy" for faster loading.
- Used meaningful alt text for all images to improve accessibility and SEO.
- Verified all internal and external links to ensure proper navigation.
- Added robots.txt and sitemap.xml for search engine crawling (if applicable).
### Additional Interactive Features
- Implemented live digital clock showing current time in footer.
- Added countdown timer for upcoming café events or promotions.
- Created a testimonial slider that automatically cycles through customer reviews.
- Embedded Google Maps iframe showing café location.
- Integrated a newsletter signup section with email input (non-functional prototype).
- Included animated coffee icons using CSS transitions.
- Added back-to-top button for smooth navigation.
-Created a custom loading animation before the page fully loads.
### Final Testing and Deployment
- Tested website across multiple browsers (Edge, Chrome, Safari, Firefox).
- Validated HTML and CSS through W3C validators.
- Tested responsiveness using Edge Developer Tools (desktop, tablet, mobile views).
- Uploaded updated project files to GitHub repository for submission.
- Updated README.md with screenshots, references, and changelog documentation.
- Performed final review for grammar, alignment, and spacing consistency.

### Contact Form Overhaul
Completely redesigned the Contact Us form with original layout, colour scheme, and styling to match the café theme.
Implemented semantic HTML5 structure and accessible form elements (label, fieldset, legend) for clarity and usability.
Added modern CSS styling:
Café-themed colours (cream, brown, warm tones)
Rounded input fields and buttons with hover effects
Shadowed form container for a polished professional look
Rewrote JavaScript functionality from scratch to handle:
Form submission via Mail App, Gmail, or Outlook
Dynamic validation with user feedback messages for incomplete fields
Custom message formatting including sender name, email, and message content
Enhanced user experience:
Displays confirmation message when email draft is opened
Resets the form automatically after submission
Prevents empty submissions using JavaScript validation
Fully responsive and works on desktop, tablet, and mobile layouts
Added status messages with color-coded feedback for success and errors
Original design and logic ensure this form is unique and not copied from external templates
