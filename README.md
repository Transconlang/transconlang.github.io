# Kumilinwa Dictionary

Hi! :3

This is a dictionary for [Kumilinwa](https://github.com/Transconlang/translang) , the trans constructed language!

## How's this thing work?

This dictionary is a [Progressive Web App](https://web.dev/progressive-web-apps/) (yay, liberalism) built with the [React](https://reactjs.org/) framework and the [Next.js](https://nextjs.org/) metaframework. It's styled with [Tailwind CSS](https://tailwindcss.com/).

It uses GitHub Actions to pull the latest language spec from the language source repository and commits, then builds the dictionary with the latest data and deploys it to GitHub Pages. _todo_

## Design

It's a simple dictionary that allows you to search for words in Kumilinwa and English. It's also a PWA, so you can install it on your device and use it offline! The app also features a paginated list for an experience similar to using a phsyical dictionary. _todo_

Color theming follows the Kumilinwa color palette (see the flag in the `public` directory).

## Tech stack

- [PWA](https://web.dev/progressive-web-apps/)
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
