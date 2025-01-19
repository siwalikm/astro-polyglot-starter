# Astro Polyglot Starter Template

```sh
npm create astro@latest -- --template siwalikm/astro-polyglot-starter
```


[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/github/siwalikm/astro-polyglot-starter/main)

## Some projects using this starter
- https://urlaubplan.de

Did you create a project using polyglot? [submit it here](https://github.com/siwalikm/astro-polyglot-starter/issues)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!
## Highlights
- Astro V5
- i18n setup with Paraglide-js 
- SEO friendly (sitemap and locale specific meta tags built-in)
- Tailwind CSS out of the box
- React + TS (built-in but optional)
- Framer Motion (built-in but optional)
- Lucide icons (built-in but optional)

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── messages/
│       └── en.json
│       └── {locale1}.json
│
├── src/
│   └── pages/
│       └── index.astro (redirects to pages/en/)
│   └── pages/en/
│       └── index.astro
│   └── pages/{locale1}/
│       └── index.astro
│
└── package.json
```

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Adding new locales
1. Update new `languageTags` in `./project.inlang/settings.json`
2. Update `i18n.locales` in `./astro.config.mjs`
```
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", {_new_locale_}],
  }
})
```
3. Create new translation file in `./messages/{locale}.json`
4. After setting it up you can use a folder for each language, or a locale paramter if you prefer:
```
src/pages/
- en/index.astro
- es/index.astro
```
Or
```
src/pages/
- [lang]/index.astro
```
You can access the language on each page via the Astrp.currentLocale global.

In order to translate text-content of the pages you can set up a content collection for each language & query that from your page.
```
src/content/
- blog/
  - en/
    - post-1.md
    - post-2.md
  - es/
    - post-1.md
    - post-2.md
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run postinstall`     | Compiles translations                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |


## Join the Conversation

Love this project? Show your support by giving it a star ⭐ on GitHub and sharing it with others!  

If you have any feedback or spot a bug, you can:  
- Open an issue on [GitHub](https://github.com/siwalikm/astro-polyglot-starter/issues).  

I’d also love to connect, see what you're building, or hear your thoughts! Feel free to reach out:  
- On [Bluesky](https://bsky.app/profile/siwalik.in)  
- Or [Twitter X](https://x.com/siwalikm)  

Looking forward to hearing from you!
Your support and feedback are greatly appreciated!

## License

This project is licensed under the **Creative Commons Attribution 4.0 International (CC BY 4.0)**. 

You are free to:
- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material for any purpose, even commercially.

Under the following terms:
- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

### Full License Text
For more details, see the full license at [https://creativecommons.org/licenses/by/4.0/](https://creativecommons.org/licenses/by/4.0/).
