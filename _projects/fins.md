---
layout: page
title: "Numerical Analysis of Fluid Flow in a Pipe with Annular"
image: "/images/fins.png"
description: "Developed a numerical solver in C++ for simulating fluid flow through a pipe with annular fins using the Finite Volume method."
location: "Indian Institute of Technology Madras, India"
type: "Course Project: Computational Heat and Fluid Flow"
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

{% for attachment in page.attachments %}
  <p><a href="{{ attachment.link }}" target="_blank">{{ attachment.text }}</a></p>
{% endfor %}
