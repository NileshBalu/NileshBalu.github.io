---
layout: page
title: "A Wearable Hand Assistive Device"
image: "/images/glove_1.png"
description: "Developed the proof of concept prototype of an assistive device for the hand that would provide the assistive
forces (up to 10 N) required to grasp objects and perform activities of daily living."
location: "Indian Institute of Technology Madras, India"
type: "Bachelor Thesis Project"
Date: "Aug 2023 - May 2024"
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

Inspired by the biomechanics of the human finger, we employed an *underactuated tendon-driven mechanism* to actuate the user’s fingers. We modeled tendon tension as a function of link lengths, link orientations, and the angle of attachment. Additionally, we formulated the forward kinematics of finger flexion.

Using *Simulink Multibody* simulations, we estimated the torque required to generate a contact force of 10N and selected an appropriate motor based on these results. A Teensy 4.1 development board was used for control, and we integrated a motor with a maximum torque rating of 0.8 kg-cm.

To ensure precise force control, we installed force sensors on the fingertips, allowing for closed-loop control to maintain a constant grip force. Flex sensors were embedded on the glove's backside to prevent unsafe flexion and extension. Additionally, surface-EMG sensors were used to estimate user intent. A 3D-printed hand served as the testing platform.

The prototype successfully demonstrated two grasping gestures: Cylindrical grasp and Lateral pinch

**Takeaways:**

This was my first large-scale solo project, where I managed all three key aspects: coding, mechanical design, and electronics integration. Working with compliant systems introduced me to the challenges of soft robotic mechanisms. Additionally, I gained experience in state machine development for system control.

**Media:**

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
        }
        .media-section {
            max-width: 1000px;
            margin: 20px auto;
            padding: 20px;
            background: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
        .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 15px;
        }
        .grid-item img, .grid-item video {
            width: 100%;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <section class="media-section">
        <div class="grid-container">
            <div class="grid-item">
                <img src="/images/img_1.jpg" alt="Project Image 1">
            </div>
            <div class="grid-item">
                <img src="/images/img_2.jpg" alt="Project Image 2">
            </div>
            <div class="grid-item">
                <img src="/images/img_3.jpg" alt="Project Image 3">
            </div>
            <div class="grid-item">
                <img src="/images/img_4.jpg" alt="Project Image 4">
            </div>
            <div class="grid-item">
                <img src="/images/img_5.jpg" alt="Project Image 5">
            </div>
            <div class="grid-item">
                <video controls>
                    <source src="/images/video_1.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="grid-item">
                <video controls>
                    <source src="/images/video_2.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </section>
</body>

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
