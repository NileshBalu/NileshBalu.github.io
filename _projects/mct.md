---
layout: page
title: "Model Predictive Control for the 4 Tank Problem"
image: "/images/tank.png"
description: "A Model Predictive Controller to control the heights of liquid in the 4-tank setting."
location: "Indian Institute of Technology Madras, India"
type: "Course Project: Modern Control Theory"
attachments:
  - link: "/attachments/CH5120_1.pdf"
    text: "Read Report: State Estimation using Kalman and Particle Filters"
  - link: "/attachments/CH5120_2.pdf"
    text: "Read Report: MPC using Kalman Filter"
---
![{{page.title}}]({{page.image}})
**Aim:** 

Write a Model Predictive Controller to control the heights of the tanks in the 4 tank system.

**Summary:**

Used Matlab to implement Model Predictive Control. Used a Kalman Filter and a Particle Filter for state estimation, and compared their performance. Simulated scenarios with different measured variables, control variables and constraints on the input and the output.

{% for attachment in page.attachments %}
  <p><a href="{{ attachment.link }}" target="_blank">{{ attachment.text }}</a></p>
{% endfor %}
