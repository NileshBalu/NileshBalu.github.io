---
order: 3
title: "Surgeon Hand Pose Tracking for a Digital Surgery Platform"
image: "/images/blob_3d.png"
image_alt: "3D reconstruction of tracked hand keypoints"
description: "This thesis presents a real-time hand pose estimation pipeline for digital surgical platforms using a ZED Box, combining 2D/2.5D keypoint detection, 3D reconstruction, and motion filtering to enable accurate tracking for surgeon monitoring and training."
location: "ETH Zürich, Switzerland"
type: "Semester Thesis"
date_range: "Feb 2025 – Jul 2025"
prof: "Prof. Mirko Meboldt"
attachments:
  - link: "/attachments/Semester_Thesis.pdf"
    text: "Read Thesis"
  - link: "/attachments/Final_Presentation.pdf"
    text: "View Slides"
---

## Aim

This thesis aims to develop a real-time hand pose estimation pipeline for digital surgical platforms by accurately detecting and reconstructing a surgeon’s hand movements in 3D.

## Summary

The system uses a hand pose estimation model (*WiLoR*) to generate 2D and 2.5D keypoints, which are then triangulated into anatomically plausible 3D poses. It is designed to run on a compact embedded device (*ZED Box* with *NVIDIA Jetson Orin*), enabling real-time inference at 8 FPS.

The pipeline incorporates *Kalman filtering* and outlier detection to enhance temporal stability and is validated using multiple techniques, with blob-based tracking showing the best accuracy (≈10 mm RMSE). While effective in controlled environments, challenges remain in handling occlusions and complex gestures in real surgeries. Future work includes training on domain-specific data, integrating tool constraints, and adopting more advanced validation methods to improve robustness and applicability in real-world surgical settings.

## Takeaways

Through this project, I gained hands-on experience in creating a digital twin of the surgical environment. I experimented with various validation strategies and gained insight into the challenges of accurately matching markers prior to triangulation.
