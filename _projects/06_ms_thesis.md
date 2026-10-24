---
order: 1
title: "Safe Flow Matching for Robot Trajectory Generation"
image: "/images/ms_thesis/fig1b_ours.svg"
hero: false   # the image is the homepage tile; the page shows its figures in the text
image_alt: "Controls optimized so that every trajectory iterate ends in the safe set"
description: "A flow-matching planner whose generated trajectories provably stay inside a safe set: auxiliary controls on the sampling dynamics are optimized with a safe gradient flow, giving a safety guarantee at every iterate."
location: "Automatic Control Laboratory, ETH Zürich, Switzerland"
type: "Master's Thesis"
date_range: "Jul 2026 – Present"
prof: "Prof. Lars Lindemann"
---

## Problem

Flow matching generates samples, such as robot trajectories, by transporting noise to data along a learned velocity field over an artificial *generative time*. On its own, it gives no guarantee that a generated trajectory satisfies hard constraints, such as avoiding obstacles or respecting actuator limits. Existing methods correct every sampler step, pushing the intermediate latents towards inflated constraint sets that have no physical meaning, and only the final sample towards the real safe set.

## Approach: a separate optimization time

I add auxiliary control inputs to each sampling step and formulate their design as an optimal control problem, with the constraints imposed only on the final sample: the trajectory that is actually executed. The controls are then evolved in a separate *optimization time* using a **safe gradient flow**. Each iterate is a whole trajectory, and a **control barrier function** keeps every iterate inside the safe set while the learned vector field is modified as little as possible.

<figure class="fig">
  <img src="/images/ms_thesis/fig1_methods.svg" alt="Existing methods versus our method">
  <figcaption>(a) Existing methods: a correction at every sampler step pushes the trajectory towards a set on the intermediate latents, and towards the safe set C at the end. (b) Ours: optimize the controls and constrain only the final sample. Every iterate U(τ) is a whole trajectory that ends in C, and the iterates move towards lower cost, closer to the nominal end point.</figcaption>
</figure>

## Guarantees

- **Anytime safety.** For any learned vector field, under standard constraint qualifications and a sufficiently fine sampler discretization, every iterate stays safe once the flow starts from a safe trajectory. Stopping early still returns a safe plan.
- **Supporting results.** Constraint qualifications are inherited from the terminal geometry, and the choice of where to intervene along the flow trades computation against optimality.

<figure class="fig wide">
  <img src="/images/ms_thesis/fig2_two_spaces.svg" alt="The sample space and the control space of the method">
  <figcaption>The two spaces of the method. Left, sample space: the final samples of the iterates move through C towards the nominal end point. Right, control space: the sampler turns C into the safe set g(x<sub>N</sub>(U)) ≤ 0. Far from the boundary the step follows the cost gradient; near it, the constraint's correction turns the step along the boundary, and at the KKT point U* the two cancel.</figcaption>
</figure>

## Preliminary results

On D3IL obstacle avoidance in MuJoCo (10 episodes), compared with HardFlow:

| | Ours | HardFlow |
|---|:---:|:---:|
| Goal reached | 10/10 | 10/10 |
| Collisions | 0 | 0 |
| Planning time per replan (incl. sampling) | 0.14 s | 0.37 s |

<figure class="fig">
  <video controls preload="metadata" poster="/images/ms_thesis/d3il_video_poster.jpg">
    <source src="/images/ms_thesis/d3il_ep0_realtime_angled.mp4" type="video/mp4">
  </video>
  <figcaption>One episode in real time: our method (left) and HardFlow (right).</figcaption>
</figure>

*This project is ongoing: I am extending the evaluation to image tasks and real-robot experiments.*
