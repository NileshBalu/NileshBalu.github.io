---
title: "Seam Carving: A Parallel Implementation"
image: "/images/seam_carving.png"
image_alt: "Image before and after seam carving"
description: "A parallel implementation of the seam carving operation using the OpenMP, MPI and OpenACC frameworks."
location: "Indian Institute of Technology Madras, India"
type: "Course Project: Parallel Scientific Computing"
date_range: "Mar 2024 – May 2024"
attachments:
  - link: "/attachments/ID5130_Project.pdf"
    text: "Read Report"
---

## Aim

Implement the seam carving operation from scratch using the *OpenMP*, *MPI* and *OpenACC* frameworks and compare their performance.

## Summary

*Seam carving* is an image operator that dynamically adjusts image dimensions by considering the contents of the image. The algorithm involves:

- the calculation of the gradient-based energy of the image, and
- the removal of 8-connected paths of low-energy pixels, called seams.

Real-time computation of seams is time-consuming. To address this, we propose a parallel implementation of the algorithm, focusing on phases that involve independent computations for each pixel and seam, viz., the energy calculation and seam identification phases. To this end, we demonstrate the parallelism using *OpenMP*, *MPI*, and *OpenACC* frameworks and compare their performance. Additionally, we use this algorithm as an object removal tool that removes a set of pixels selected by the user, ensuring minimal distortion of the image.

## Takeaways

This course and project introduced me to the concepts of parallel computing, which are increasingly important as GPU-accelerated computing becomes the norm. Implementing seam carving and testing it on real images made the performance differences between the frameworks tangible.
