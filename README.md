# Rick & Morty Search

> Character search with pagination, powered by the Rick and Morty public API.

![Status](https://img.shields.io/badge/status-stable-success?style=flat-square)
![Stack](https://img.shields.io/badge/stack-vanilla%20JS-yellow?style=flat-square)
![API](https://img.shields.io/badge/api-Rick%20%26%20Morty-green?style=flat-square)

---

## Overview

A small, focused frontend project that consumes the [Rick and Morty API](https://rickandmortyapi.com/) to search and browse characters from the show. Built as an exercise in API consumption, paginated results, and error handling.

## Features

- Search any character by name (filtering happens server-side via the API's `?name=` query)
- Browse results in a card grid showing each character's image and name
- Pagination with previous/next buttons and a live page counter
- Graceful error message when no results are found or the network fails

## Stack

- HTML5 · CSS3 · JavaScript ES6+ (`async/await`)
- [Rick and Morty API](https://rickandmortyapi.com/) — REST, no auth required

## Project structure

```
rick-morty-search/
├── index.html
├── css.css
└── js.js
```

## Run locally

```bash
git clone https://github.com/zappytw/FAYADJOEL-Buscador-de-Ricks.git
cd FAYADJOEL-Buscador-de-Ricks
```

Open `index.html`.

## What I learned building this

- Consuming a public REST API with query parameters (`?name=` and `?page=`)
- Wrapping `fetch` in `try/catch` for clean error handling
- Managing pagination state across multiple async user actions
- Rendering dynamic content with `createElement` and `appendChild`

---

Built by **Joel Fayad** — Frontend Developer based in Colombia.
