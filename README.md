# Portfolio Assignment

## Description
This project is a single-page application (SPA) showcasing a portfolio website that integrates with a REST API to display dynamic content. It aims to evaluate skills in creating responsive designs, leveraging modern front-end frameworks, designing visually appealing UIs, and building fast, modern websites.

## Tech Stack
- Next.js: Used for server-side rendering and routing.
- Tailwind CSS: Utilized for styling and responsive design.
- Prisma with PostgreSQL: Used as the database ORM for storing blogs and project data.
- TypeScript: Used for type-checking and enhancing code quality.
- Axios: Used for making HTTP requests to the API endpoints.
- Zod: Used for schema validation of form data.

## Setup Instructions
1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd <project_directory>`
3. Install dependencies: `npm install`
4. Create a `.env` file based on the provided `.env.example` file and configure environment variables such as database connection details.
5. Run the migrations to create the necessary tables in the database: `npx prisma db push`
6. Start the Next.js development server: `npm run dev`
7. Access the application in your web browser at `http://localhost:3000`

## Features
- Responsive design across various devices and screen sizes.
- Showcase of projects with dynamic content fetched from a REST API.
- Creation of new projects and blogs through forms with client-side and server-side validation.
- Display of individual blogs and posts page.
- Integration with Prisma and PostgreSQL for database management.


## Project Structure
- `/pages`: Contains Next.js pages for routing.
- `/components`: Contains reusable UI components.
- `/api`: Contains API routes for server-side functionality.
- `/lib`: Contains utility functions and configurations.
- `/prisma`: Contains Prisma schema and migrations for database management.
- `/public`: Contains static assets such as images and fonts.


