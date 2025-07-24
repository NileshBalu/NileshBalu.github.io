---
layout: page
title: "Surgeon Hand Pose Tracking for a Digital Surgery Platform"
image: "/images/blob_3d.png"
description: "This thesis presents a real-time hand pose estimation pipeline for digital surgical platforms using a ZED Box, combining 2D/2.5D keypoint detection, 3D reconstruction, and motion filtering to enable accurate tracking for surgeon monitoring and training."
location: "ETH Zurich"
type: "Semester Thesis"
Date: "Feb 2025 - Jul 2024"
prof: "Prof. Mirko Meboldt"
attachments:
  - link: "/attachments/Semester_Thesis.pdf"
    text: "Read Thesis"
  - link: "/attachments/Final_Presentation.ppt"
    text: "View Presentation"
---
<img src="{{page.image}}" alt="{{page.title}}" width="50%">
<!-- ![{{page.title}}]({{page.image}}) -->

**Aim:** 

This thesis aims to develop a real-time hand pose estimation pipeline for digital surgical platforms by accurately detecting and reconstructing a surgeon’s hand movements in 3D. 

**Summary:**

The system uses a hand pose estimation model (WiLoR) to generate 2D and 2.5D keypoints, which are then triangulated into anatomically plausible 3D poses. It is designed to run on a compact embedded device (ZED Box with NVIDIA Jetson Orin), enabling real-time inference at 8 FPS.

The pipeline incorporates Kalman filtering and outlier detection to enhance temporal stability and is validated using multiple techniques, with blob-based tracking showing the best accuracy (≈10 mm RMSE). While effective in controlled environments, challenges remain in handling occlusions and complex gestures in real surgeries. Future work includes training on domain-specific data, integrating tool constraints, and adopting more advanced validation methods to improve robustness and applicability in real-world surgical settings.

**Takeaways:**

Through this project, I gained hands-on experience in creating a digital twin of the surgical environment. I experimented with various validation strategies and gained insight into the challenges of accurately matching markers prior to triangulation.

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
              <a href="/images/img_1.jpg" target="_blank">
                <img src="/images/img_1.jpg" alt="Project Image 1">
              </a>
            </div>
            <div class="grid-item">
              <a href="/images/img_2.jpg" target="_blank">
                <img src="/images/img_2.jpg" alt="Project Image 2">
              </a>
            </div>
            <div class="grid-item">
              <a href="/images/img_3.jpg" target="_blank">
                <img src="/images/img_3.jpg" alt="Project Image 3">
              </a>
            </div>
            <div class="grid-item">
              <a href="/images/img_4.jpg" target="_blank">
                <img src="/images/img_4.jpg" alt="Project Image 4">
              </a>
            </div>
            <div class="grid-item">
              <a href="/images/img_5.jpg" target="_blank">
                <img src="/images/img_5.jpg" alt="Project Image 5">
              </a>
            </div>
            <div class="grid-item">
              <a href="/images/video_1.mp4" target="_blank">
                <video controls>
                  <source src="/images/video_1.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
              </a>
            </div>
            <div class="grid-item">
              <a href="/images/video_2.mp4" target="_blank">
                <video controls>
                  <source src="/images/video_2.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
              </a>
            </div>

        </div>
    </section>
</body>

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
