---
title: "Numerical Analysis of Fluid Flow in a Pipe with Annular Fins"
image: "/images/fins.png"
image_alt: "Temperature field in a pipe with annular fins"
description: "Developed a numerical solver in C++ for simulating fluid flow through a pipe with annular fins using the Finite Volume Method."
location: "Indian Institute of Technology Madras, India"
type: "Course Project: Computational Heat and Fluid Flow"
date_range: "Mar 2023 – Apr 2023"
attachments:
  - link: "/attachments/ME6151_Project_Report.pdf"
    text: "Read Report"
---

## Aim

Develop a numerical solver to solve the *convection–diffusion* equation for fluid flow in a pipe. Analyse the effect of adding annular fins to the pipe and varying their parameters.

## Method

The governing equations are solved in the axisymmetric coordinate system. The discretisation is performed using the upwind differencing scheme (UDS), and the system of equations is solved using the line-by-line tri-diagonal matrix algorithm (TDMA).

The solver was validated by comparing the temperature profile of the first fin along its length with analytical solutions. The fluid’s mean temperature along the pipe’s length was also compared with analytical solutions for validation.

The parameters of the fin, viz. fin length, thickness and spacing, are varied, and their effects on the fin’s effectiveness are analysed. It is observed that the fin effectiveness increases as each of these parameters is increased.

## Takeaways

This project gave me a solid understanding of how CFD solvers work internally, and of the fundamental mathematics behind numerical methods in engineering.
