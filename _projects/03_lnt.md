---
layout: page
title: "Mechanical Engineering Internship"
image: "/images/lnt.png"
description: "A study of Automotive Radiators."
location: "Larsen and Toubro Technology Services, India"
type: "Industrial Internship"
attachments:
  # - link: "/attachments/ID5130_Project.pdf"
  #   text: "Read Report"
---
![{{page.title}}]({{page.image}})
**Aim:** 

Investigate the key factors influencing the design of automotive radiators and establish a relationship between the rate of heat rejection and the radiator core area.

**Summary:**

I utilized the Number of Transfer Units (NTU) method to correlate the radiator core area with the rate of heat rejection. I proceeded to analyze experimental data and conduct a comparative study to validate the predicted results against measured values.

I also performed CFD simulations of thermal stress tests using OpenSim, analyzing temperature gradients, stresses, and strain to evaluate new radiator designs.

**Takeaways:**

This was my first-ever internship, and my biggest takeaway was learning the importance of good documentation. Additionally, working with numerous engineering drawings of radiators helped me understand their real-world significance, reinforcing my coursework in engineering drawings.


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
