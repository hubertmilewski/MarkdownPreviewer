# React Markdown Previewer

This is a simple **Markdown Previewer** built using React and Tailwind CSS. The application allows users to input Markdown text in a live editor, which is instantly rendered into HTML on the right side of the screen. It supports GitHub-flavored Markdown and line breaks.

## Features
- Real-time Markdown preview.
- Supports GitHub-flavored Markdown (tables, task lists, etc.).
- Line breaks are properly handled.
- Responsive design with a clean UI.
- Built with React and styled using Tailwind CSS.

## Technologies Used
- **React**: For building the user interface and managing state.
- **Tailwind CSS**: For styling the application and making it responsive.
- **ReactMarkdown**: A library that converts Markdown text into HTML.
- **remarkGfm**: Adds support for GitHub-flavored Markdown.
- **remarkBreaks**: Ensures that line breaks are preserved in the rendered preview.

## How It Works
1. The user can enter or edit Markdown text in the left-side editor.
2. As the user types, the content is automatically updated and rendered as HTML on the right side of the screen.
3. The application uses the `ReactMarkdown` component with `remarkGfm` and `remarkBreaks` plugins to parse and display the Markdown.
