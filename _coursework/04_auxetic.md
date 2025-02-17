---
layout: page
title: "A Study of Auxetic Metamaterials"
image: "/images/auxetic.png"
description: "Paper review and modelling the Poisson ratio of auxetic metamaterials."
location: "Indian Institute of Technology Madras, India"
type: "Course Project: Strength of Materials"
Date: "Sep 2021 - Dec 2021"
attachments:
  - link: "/attachments/Auxetic Materials.pdf"
    text: "Read Report"
---
![{{page.title}}]({{page.image}})
**Aim:** 

Review the derivation of the Poisson ration of auxetic metamaterials.

**Summary:**

Analysed auxetic metamaterials with a re-entrant honeycomb structure in 2D and 3D. Also analysed synclastic bending and the possible applications of this property.

**Takeaways:**

I took up this topic because it was very fascinating. What I enjoyed the most about this project was the fact that most of the equations used to derive the analytical expression were covered in the course.

**Attachments:**


<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js"></script>

<div class="pdf-thumbnail-container">
  {% for attachment in page.attachments %}
    <div class="pdf-thumbnail-wrapper">
      <canvas class="pdf-thumbnail" data-url="{{ attachment.link }}"></canvas>
      <a href="{{ attachment.link }}" target="_blank">{{ attachment.text }}</a>
    </div>
  {% endfor %}
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".pdf-thumbnail").forEach((canvas) => {
      const url = canvas.getAttribute("data-url");

      pdfjsLib.getDocument(url).promise.then(pdf => {
        return pdf.getPage(1);
      }).then(page => {
        const desiredWidth = 200; // Adjust this to control thumbnail width
        const viewport = page.getViewport({ scale: 1 }); // Default scale (1) to get original width

        const scale = desiredWidth / viewport.width; // Calculate scale based on desired width
        const scaledViewport = page.getViewport({ scale });

        const context = canvas.getContext("2d");

        // Set canvas size to match the scaled page
        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;

        const renderContext = {
          canvasContext: context,
          viewport: scaledViewport
        };

        return page.render(renderContext).promise;
      });

      canvas.addEventListener("click", () => {
        window.open(url, "_blank");
      });
    });
  });
</script>
