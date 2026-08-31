# maxharkins.github.io

Personal site for Max Harkins — University of Rochester, Biomedical Engineering (Class of 2027).

## Structure

```
docs/                     ← GitHub Pages serves the site from this folder
├── index.html            ← the landing page (name, about, documents, projects)
├── portfolio.html        ← portfolio page (currently "coming soon")
└── assets/
    ├── styles.css        ← all styling (colors, fonts, layout) — edit here
    ├── theme.js          ← light/dark toggle behavior
    ├── max-harkins-resume.pdf     ← the redacted résumé the site links to
    ├── me-with-a-stegosaurus.jpg  ← the photo used on the site (web-optimized)
    └── me-with-a-stegosaurus.png  ← original full-res photo (not used by the site)

drafts/                   ← working files — NEVER published, git-ignored
    └── (résumé .docx drafts, dated PDF exports, anything unredacted)
```

**Anything inside `docs/` is publishable.** Everything served by GitHub Pages lives
there, so unredacted drafts stay in `drafts/` — a sibling folder, outside the publish
directory. `.gitignore` covers `drafts/` as a second layer, but the folder boundary is
the real protection: a file that never enters `docs/` can never be served.

## How to edit

Everything is plain HTML/CSS — no build step. Edit the files directly (locally, or in
GitHub's web editor by clicking the pencil ✏️ on any file), commit, and the live site updates.

- **About text** — `docs/index.html`, the section marked `<!-- ABOUT -->`.
- **Pinned projects** — `docs/index.html`, the section marked `<!-- PINNED PROJECTS -->`.
  Replace each `[Project ...]` title, the `href="#"` with the real link, and the blurb.
- **Résumé & CV** — these tiles open PDF files. Edit drafts in `drafts/`, then export a
  redacted PDF into `docs/assets/` named:
  - `docs/assets/max-harkins-resume.pdf`
  - `docs/assets/max-harkins-cv.pdf`

  (or change the `href`s in the `<!-- DOCUMENTS -->` section to match your filenames.)
  Copy only the finished, redacted PDF across — never the `.docx` or a dated export.
- **Portfolio** — edit `docs/portfolio.html` when you're ready to build it out.
- **Colors & fonts** — `docs/assets/styles.css`, at the top under `:root`.

## Publishing to GitHub Pages

1. Push this folder to the `maxharkins/maxharkins.github.io` repository on GitHub.
2. On GitHub: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main**, folder: **/docs**
   - Save.
3. The site goes live at **https://maxharkins.github.io** within a minute or two.
