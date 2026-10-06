---
title: "A Wearable Hand Assistive Device"
image: "/images/glove_1.png"
image_alt: "Tendon-driven assistive glove prototype on a 3D-printed hand"
description: "Developed the proof-of-concept prototype of an assistive device for the hand that provides the assistive forces (up to 10 N) required to grasp objects and perform activities of daily living."
location: "Indian Institute of Technology Madras, India"
type: "Bachelor Thesis Project"
date_range: "Aug 2023 – May 2024"
prof: "Prof. Manish Anand"
media:
  - src: "/images/img_1.jpg"
    alt: "Assistive glove prototype, photo 1"
  - src: "/images/img_2.jpg"
    alt: "Assistive glove prototype, photo 2"
  - src: "/images/img_3.jpg"
    alt: "Assistive glove prototype, photo 3"
  - src: "/images/img_4.jpg"
    alt: "Assistive glove prototype, photo 4"
  - src: "/images/img_5.jpg"
    alt: "Assistive glove prototype, photo 5"
  - src: "/images/video_1.mp4"
  - src: "/images/video_2.mp4"
attachments:
  - link: "/attachments/BTP_Report.pdf"
    text: "Read Thesis"
  - link: "/attachments/BTP_Template.pdf"
    text: "View Poster"
---

## Aim

Develop a proof-of-concept prototype of a hand assistive device for individuals with partial hand paralysis due to spinal cord injury. The device must be compliant, incorporate force feedback, and provide more than one degree of freedom in the thumb.

## Summary

Inspired by the biomechanics of the human finger, we employed an *underactuated tendon-driven mechanism* to actuate the user’s fingers. We modeled tendon tension as a function of link lengths, link orientations, and the angle of attachment. Additionally, we formulated the forward kinematics of finger flexion.

Using *Simulink Multibody* simulations, we estimated the torque required to generate a contact force of 10 N and selected an appropriate motor based on these results. A Teensy 4.1 development board was used for control, and we integrated a motor with a maximum torque rating of 0.8 kg·cm.

To ensure precise force control, we installed force sensors on the fingertips, allowing for closed-loop control to maintain a constant grip force. Flex sensors were embedded on the glove’s backside to prevent unsafe flexion and extension. Additionally, surface-EMG sensors were used to estimate user intent. A 3D-printed hand served as the testing platform.

The prototype successfully demonstrated two grasping gestures: the cylindrical grasp and the lateral pinch.

## Takeaways

This was my first large-scale solo project, where I managed all three key aspects: coding, mechanical design, and electronics integration. Working with compliant systems introduced me to the challenges of soft robotic mechanisms. Additionally, I gained experience in state machine development for system control.
