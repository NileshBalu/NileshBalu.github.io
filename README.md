# nileshbalu.github.io

Personal portfolio of **Nilesh Balu**, MSc Mechanical Engineering student at ETH Zürich: robotics, dynamics and control, and rehabilitation and medical robotics.

**Live site:** <https://nileshbalu.github.io>

## Structure

| Path | Contents |
| --- | --- |
| `index.html` | Home page: about, education, publications, project tiles |
| `_projects/` | Research and industry projects (one Markdown file each) |
| `_coursework/` | Course projects (one Markdown file each) |
| `_data/publications.yml` | Publications list |
| `_layouts/`, `_includes/` | Page templates |
| `images/`, `attachments/` | Figures, photos, reports and the CV |

### Adding a project

Create `_projects/NN_name.md`. Projects are listed by their `order` value (1 = top), so bump the others when inserting one:

```yaml
---
order: 1
title: "Project title"
image: "/images/thumbnail.png"   # optional
image_alt: "Short description of the image"
description: "One or two sentences shown on the home page tile."
location: "Institution, Country"
type: "Research Internship"
date_range: "Jan 2026 – Jun 2026"
prof: "Prof. Name"            # optional
media:                        # optional: images or .mp4 videos
  - src: "/images/photo.jpg"
    alt: "Photo description"
attachments:                  # optional: PDFs, shown with thumbnails
  - link: "/attachments/report.pdf"
    text: "Read Report"
---

## Aim
...
```

## Local development

```sh
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>. Pushing to `master` builds and deploys the site through GitHub Actions (`.github/workflows/pages.yml`).

## Credits

Layout based on the [Hyde](https://github.com/poole/hyde) theme by Mark Otto (MIT license, see `LICENSE.md`).
