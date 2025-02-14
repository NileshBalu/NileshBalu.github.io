---
layout: page
title: "Model Predictive Control for the 4 Tank Problem"
image: "/images/tank.png"
description: "A Model Predictive Controller to control the heights of liquid in the 4-tank setting."
location: "Indian Institute of Technology Madras, India"
type: "Course Project: Modern Control Theory"
attachments:
  - link: "/attachments/CH5120_1.pdf"
    text: "Comparing Kalman and Particle Filters"
  - link: "/attachments/CH5120_2.pdf"
    text: "MPC using Kalman Filter"
---
![{{page.title}}]({{page.image}})
**Aim:** 

Write a Model Predictive Controller to control the heights of the tanks in the 4 tank system.

**Summary:**

Used Matlab to implement Model Predictive Control. Used a Kalman Filter and a Particle Filter for state estimation, and compared their performance. Simulated scenarios with different measured variables, control variables and constraints on the input and the output.

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
