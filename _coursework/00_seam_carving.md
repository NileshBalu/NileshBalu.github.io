---
layout: page
title: "Seam Carving - A Parallel Implementation"
image: "/images/seam_carving.png"
description: "A parellel implementation of the Seam Carving operation, on OpenMP, MPI and OpenACC frameworks."
location: "Indian Institute of Technology Madras, India"
type: "Course Project: Parallel Scientific Computing"
Date: "Mar 2024 - May 2024"
attachments:
  - link: "/attachments/ID5130_Project.pdf"
    text: "Read Report"
---
![{{page.title}}]({{page.image}})
**Aim:** 

Implement the seam carving operation from scratch using the *OpenMP*, *MPI* and *OpenACC* frameworks and compare their performance.

**Summary:**

*Seam Carving* is an image operator that dynamically adjusts image dimensions by considering the contents of the image. The algorithm involves 
- the calculation of the gradient-based energy of the image 
- the removal of 8-connected paths of low-energy pixels, called seams.

Real-time computation of seams is time-consuming. To address this, we propose a parallel implementation of the algorithm, focusing on phases that involve independent computations for each pixel and seam, viz., the energy calculation and seam identification phases. To this end, we demonstrate the parallelism using *OpenMP*, *MPI*, and *OpenACC* frameworks and compare their performance. Additionally, we utilize this algorithm as an object removal tool that removes a set of pixels selected by the user, ensuring minimal distortion of the image.

**Takeaways:**

Through this course and the project, I was introduced to the concepts of parallel computing, which i believe would be very useful in the age of the GPU. It was also fun learning about seam carving and trying it out on examples.

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
