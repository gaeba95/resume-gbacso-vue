## Project Overview

This project is a Vue 3 application built using Vite. It leverages the latest features of Vue 3, including the `<script setup>` syntax for Single File Components (SFCs). The project is designed to be a starting point for building modern, high-performance web applications.

This project is my personal resume and portfolio website.

## Features

- **Vue 3**: Utilizes the latest version of Vue for reactive and component-based development.
- **Vite**: A fast build tool and development server for modern web projects.
- **Script Setup**: Simplified syntax for defining components in Vue SFCs.
- **Hot Module Replacement (HMR)**: Instant updates during development.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- npm or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd resume-gbacso-vue
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

### Development

Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

### Build

To create a production build:
```bash
npm run build
```
The build output will be located in the `dist` directory.

### Preview

To preview the production build:
```bash
npm run preview
```

### Build docker image and push it

To build the docker image and push it:
```bash
chmod +x build-and-push.sh
bash build-and-push.sh
```

### Source Code Details

```
resume-gbacso-vue/
├── public/                             # Static assets
│   ├── img/                            # Images folder
│   │   ├── profile.jpg                 # Image profile of the resume
│   ├── pdf/                            # PDFs download folder
│   │   ├── resume_fr.pdf               # PDF of the resume in french
│   │   ├── resume_en.pdf               # PDF of the resume in english
│   ├── favicon.svg                     # Favicon for the application
├── src/                                # Source code
│   ├── assets/                         # Project assets
│   │   ├── main.css                    # Global styles
│   ├── components/                     # Vue components
│   │   ├── LanguageDropdown.vue        # Dropdown component for selecting the language
│   │   ├── SkillBadges.vue             # Component for list the skills
│   │   ├── TimelineItem.vue            # Component for experience and education timeline
│   ├── locales/                        # Translations
│   │   ├── fr.json                     # French translation
│   │   ├── en.json                     # English translation
│   ├── i18n.d.ts                       # Translation structure for i18n module
│   ├── i18n.js                         # Config for i18n module
│   ├── App.vue                         # Root component
│   └── main.js                         # Application entry point
├── package.json                        # Project metadata and dependencies
├── vite.config.js                      # Vite configuration
├── README.md                           # Project documentation
├── .gitignore                          # Git ignore rules
├── .dockerignore                       # Docker ignore rules
├── Dockerfile                          # Description file for building docker image
├── build-and-push.sh                   # Script to build the docker image and push it
```

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Vue.js Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Node.js](https://nodejs.org/)
- [GitHub Copilot](https://github.com/features/copilot)