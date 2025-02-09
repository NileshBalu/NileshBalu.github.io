---
layout: page
title: "Seam Carving - A Parallel Implementation"
image: "/images/seam_carving.png"
description: "A parellel implementation of the Seam Carving operation, on OpenMP, MPI and OpenACC frameworks."
location: "Indian Institute of Technology Madras, India"
type: "Course Project: Parallel Scientific Computing"
attachments:
  - link: "/attachments/ID5130_Project.pdf"
    text: "Read Report"
---
![{{page.title}}]({{page.image}})
**Aim:** 

Implement the seam carving operation from scratch using the *OpenMP*, *MPI* and *OpenACC* frameworks and compare their performance.

**Summary:**

Seam Carving is an image operator that dynamically adjusts image dimensions by considering the contents of the image. The algorithm involves 
- the calculation of the gradient-based energy of the image 
- the removal of 8-connected paths of low-energy pixels, called seams.

At the end of this operation, the key features of the image are still preserved. Seam carving operates linearly in the number of pixels, making resizing linear in the number of seams to be removed or inserted. 

Real-time computation of seams is time-consuming. To address this, we propose a parallel implementation of the algorithm, focusing on phases that involve independent computations for each pixel and seam, viz., the energy calculation and seam identification phases. To this end, we demonstrate the parallelism using OpenMP, MPI, and OpenACC frameworks and compare their performance. Additionally, we utilize this algorithm as an object removal tool that removes a set of pixels selected by the user, ensuring minimal distortion of the image.

{% for attachment in page.attachments %}
  <p><a href="{{ attachment.link }}" target="_blank">{{ attachment.text }}</a></p>
{% endfor %}
