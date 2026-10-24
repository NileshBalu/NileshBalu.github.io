---
order: 2
title: "Dynamical Modeling and System Identification of Haptic Actuators"
image: "/images/mpi/mpi_model.svg"
hero: false   # the image is the homepage tile; the page shows its figures in the text
image_alt: "Lumped-parameter model of a voice-coil actuator held between the fingers"
description: "Worked on the dynamical modeling and system identification of haptic actuators in two key projects. Developed a feedforward control strategy to track a reference output and analysed the underlying physics of perceived force illusions. Also characterized a novel haptic actuator to understand its dynamical behavior."
location: "Max Planck Institute for Intelligent Systems, Germany"
type: "Research Internship"
date_range: "Aug 2025 – Dec 2025"
prof: "Prof. Katherine J. Kuchenbecker"
---

## Overview

A voice-coil actuator that vibrates *asymmetrically*, following a specific acceleration profile, can create the illusion of a pulling force in the user's fingers. I worked on the dynamics behind this effect: building models of two haptic actuators from experimental data, using them for control, and studying how the user's grip changes the result.


## Lumped-parameter model

I modeled the actuator held between the fingers as two masses, the case and the magnet, coupled by the suspension and the voice-coil force, with the fingers acting as a spring–damper on the case.

<figure class="fig">
  <img src="/images/mpi/mpi_model.svg" alt="Lumped-parameter model: finger, case and magnet with springs, dampers and voice-coil force">
  <figcaption>Model of the gripped actuator: input coil current, output case acceleration.</figcaption>
</figure>

## System identification

I excited the actuator with chirp signals (50–400 Hz), measured its response with an accelerometer, and computed the frequency response. The model parameters were identified with a hybrid optimizer: a particle swarm explores the parameter space, and sequential quadratic programming refines the result. The identified models matched the measurements with NRMSE fits of 81–91%.

<figure class="fig">
  <img src="/images/mpi/mpi_bode.svg" alt="Bode plot: measured response and identified model">
  <figcaption>Gripped actuator (1 N grip force): measured frequency response and identified model.</figcaption>
</figure>

## The user is part of the dynamics

Repeating the identification at different grip forces showed that a firmer grip increases the stiffness and damping that the fingers contribute, which lowers and broadens the resonance peak.

<figure class="fig">
  <img src="/images/mpi/mpi_gripforce.svg" alt="Frequency response at 0, 1, 4 and 7 N grip force">
  <figcaption>Magnitude response at 0, 1, 4 and 7 N grip force: measurements and identified models. The red arrow marks the peak dropping as grip force increases.</figcaption>
</figure>

## Feedforward control

Inverting the identified model gave a feedforward controller that makes the actuator track a desired acceleration profile, which an uncompensated input does not.

<figure class="fig">
  <img src="/images/mpi/mpi_tracking.svg" alt="Tracking a desired acceleration with and without feedforward compensation">
  <figcaption>Desired acceleration, uncompensated response, and response with feedforward compensation.</figcaption>
</figure>

## User study

I designed and conducted a user study on how grip force affects the perceived lateral force when asymmetric vibrations are applied. This work is part of a work-in-progress paper at EuroHaptics 2026.

## A second actuator: the Flexi Ring

For the Flexi Ring, a novel fingertip haptic actuator made of a magnet on a compliant polymer ring, I developed a dynamical model and identified its parameters from vibrometer measurements under chirp excitation (10–500 Hz). The model simulates the high-frequency fingertip vibrations the actuator induces, with an NRMSE fit of 84%.

## Takeaways

Working in the Haptic Intelligence Department was my first experience performing system identification from the ground up — from designing and fabricating the mounts that hold the actuator in place, to choosing the optimal excitation signal, to running an optimizer to fit the data. It was also my first time designing a user study. I additionally took part in a workshop on creating effective scientific figures for academic publications.
