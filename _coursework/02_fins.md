---
layout: page
title: "Numerical Analysis of Fluid Flow in a Pipe with Annular Fins"
image: "/images/fins.png"
description: "Developed a numerical solver in C++ for simulating fluid flow through a pipe with annular fins using the Finite Volume method."
location: "Indian Institute of Technology Madras, India"
type: "Course Project: Computational Heat and Fluid Flow"
Date: "Mar 2023 - Apr 2023"
attachments:
  - link: "/attachments/ME6151_Project_Report.pdf"
    text: "Read Report"
---
![{{page.title}}]({{page.image}})
**Aim:** 

Develop a numerical solver to solve the *convection-diffusion* equation for fluid flow in a pipe. Analyse the effect of adding annular fins to the pipe and varying its parameters.

**Method:**

The governing equations are solved in the axisymmetric coordinate system. The discretisation is performed using the upward differencing scheme (UDS), and the system of equations is solved using the line-by-line tri-diagonal matrix algorithm (TDMA). 

The solver was validated by comparing the temperature profile of the first fin along its length with analytical solutions. The fluid’s mean temperature along the pipe’s length was also compared with analytical solutions for validation. 

The parameters of the fin, viz. fin length, thickness and spacing, are varied, and their effects on the fin’s effectiveness are analysed. It is observed that the fin effectiveness increases as each of these parameters is increased.

**Takeaways:**

This served as a good introduction to how CFD solvers work. Moreover, I was introduced to the fundamental math behind the numerical methods in engineering.

**Attachments:**


<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js"></script>

<div class="pdf-thumbnail-container">
  {% for attachment in page.attachments %}
    <a href="{{ attachment.link }}" target="_blank">
    <div class="pdf-thumbnail-wrapper">
      <canvas class="pdf-thumbnail" data-url="{{ attachment.link }}"></canvas>
      {{ attachment.text }}
    </div>
    </a>
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
