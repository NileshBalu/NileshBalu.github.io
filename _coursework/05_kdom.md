---
layout: page
title: "Designing Cams and Gears"
image: "/images/gears.png"
description: "Designing a Cam and a Gear using user's specifications."
location: "Indian Institute of Technology Madras, India"
type: "Course Project: Kinematics and Dynamics of Machinery"
Date: "Nov 2021 - Dec 2021"
attachments:
  - link: "/attachments/KDOM_A.pdf"
    text: "Cam"
  - link: "/attachments/KDOM_B.pdf"
    text: "Gear"
---
![{{page.title}}]({{page.image}})
**Aim:** 

Design a Cam using geometric and analytical methods. Also design a gear profile using the given user specification.

**Summary:**

Used Geogebra to geometrically design a cam, given the desired profile of the follower. Also designed them analytically by plotting functions on Matlab.

Designed a gear by plotting the involute function on Matlab.

**Takeaways:**

This was the first of the many *Matlab* projects I had done. 

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