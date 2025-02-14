---
layout: page
title: "A Wearable Hand Assistive Device"
image: "/images/glove_1.png"
description: "Developed the proof of concept prototype of an assistive device for the hand that would provide the assistive
forces (up to 10 N) required to grasp objects and perform activities of daily living"
location: "Indian Institute of Technology Madras, India"
type: "Bachelor Thesis Project"
attachments:
  - link: "/attachments/BTP_Report.pdf"
    text: "Read Thesis"
  - link: "/attachments/BTP_Template.pdf"
    text: "View Poster"
---
<img src="{{page.image}}" alt="{{page.title}}" width="50%">
<!-- ![{{page.title}}]({{page.image}}) -->

**Aim:** 

Develop a proof-of-concept prototype of a hand assistive device for individuals with partial hand paralysis due to spinal cord injury. The device must be compliant, incorporate force feedback, and provide more than one degree of freedom in the thumb.

**Summary:**

Inspired by the biomechanics of the human finger, we employed an underactuated tendon-driven mechanism to actuate the user’s fingers. We modeled tendon tension as a function of link lengths, link orientations, and the angle of attachment. Additionally, we formulated the forward kinematics of finger flexion.

Using Simulink Multibody simulations, we estimated the torque required to generate a contact force of 10N and selected an appropriate motor based on these results. A Teensy 4.1 development board was used for control, and we integrated a motor with a maximum torque rating of 0.8 kg-cm.

To ensure precise force control, we installed force sensors on the fingertips, allowing for closed-loop control to maintain a constant grip force. Flex sensors were embedded on the glove's backside to prevent unsafe flexion and extension. Additionally, surface-EMG sensors were used to estimate user intent. A 3D-printed hand served as the testing platform.

The prototype successfully demonstrated two grasping gestures:

    Cylindrical grasp
    Lateral pinch



**Media:**

<img src="/images/glove_2.png" alt="{{page.title}}" width="50%">

**Takeaways:**

This was my first large-scale solo project, where I managed all three key aspects: coding, mechanical design, and electronics integration. Working with compliant systems introduced me to the challenges of soft robotic mechanisms. Additionally, I gained experience in state machine development for system control.

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
