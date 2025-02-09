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

Develop a proof-of-concept prototype of a hand assistive device for people with partial paralysis in their hands as a result of a spinal cord injury.
The device must be compliant, must contain force feedback and should provide more than one degree of freedom in the thumb.

**Method:**

Inspired by the working principle of the human finger, we employed an underactuated tendon mechanism to actuate the user's fingers. 
We modeled the tension as a function of the link lengths, the link orientations and the angle of attachment. We also modeled the forward kinematics of the finger under flexion. 
Using simulations on Simulink Multibody, we estimated the torque required to produce a contact force of 10N. Using this estimated value, we chose the required motor. 

A Teensy 4.1 dev board was used to control the device. We chose a motor with a maximum torque rating of 0.8 kg-cm. Force sensors were installed on the fingertips to close the control loop and mantain a constant grip force. We used surface-EMG sensors to estimate user intention. A 3-D printed hand was used as the testing base. 

Our prototype was able to perform 2 gestures - cylindrical grasp and lateral pinch.

**Results**

<img src="/images/glove_2.png" alt="{{page.title}}" width="50%">

**Takeaways:**

This was my first large-scale solo project. I gained experience managing all 3 verticals - the coding, the mechanical design of the prototype and the electronic module. This was the first time I worked with compliant systems and was exposed to the caveats of soft robotic mechanisms. I also gained experience developing a state-machine to control the system.

{% for attachment in page.attachments %}
  <p><a href="{{ attachment.link }}" target="_blank">{{ attachment.text }}</a></p>
{% endfor %}
