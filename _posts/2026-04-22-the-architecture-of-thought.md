---
layout: post
title: "The Architecture of Thought"
subtitle: "A five-part series on the mathematical foundations of modern AI"
date: 2026-04-22 00:00:00 +0000
categories: [Whiteboard Theory]
tags: [ai, llm, transformers, optimization, probability, scaling]
podcast_id: "/audio/Part_1_Wie_Skalierungsgesetze_und_Vektorräume_ChatGPT_antreiben.m4a"
podcast_type: "audio"
further_reading:
  - title: "The Illustrated Transformer (Jay Alammar)"
    url: "https://jalammar.github.io/illustrated-transformer/"
  - title: "LLM Embeddings Explained (Hugging Face Space)"
    url: "https://huggingface.co/spaces/hesamation/llm-embeddings-explained"
  - title: "The Technical User's Introduction to LLMs"
    url: "https://christophergs.com/blog/technical-introduction-llms"
  - title: "On the Dangers of Stochastic Parrots"
    url: "https://doi.org/10.1145/3442188.3445922"
  - title: "Handbook of Convergence Theorems for (Stochastic) Gradient Methods"
    url: "https://arxiv.org/abs/2301.11235"
  - title: "Deep Neural Networks Inspired by Differential Equations"
    url: "https://arxiv.org/abs/2510.09685"
  - title: "Emergent Abilities of Large Language Models"
    url: "https://arxiv.org/abs/2206.07682"
  - title: "Die Geschichte der KI (Till Freitag)"
    url: "https://till-freitag.com/blog/ki-geschichte-3-chatgpt"
  - title: "ChatGPT - Wikipedia"
    url: "https://en.wikipedia.org/wiki/ChatGPT"
  - title: "AI Winter - Wikipedia"
    url: "https://en.wikipedia.org/wiki/AI_winter"
  - title: "Information Theory, Inference, and Learning Algorithms (David MacKay)"
    url: "http://www.inference.phy.cam.ac.uk/mackay/itila/"
  - title: "Mathematics for Machine Learning"
    url: "https://mml-book.com"
  - title: "The Quest for Artificial Intelligence (Nils J. Nilsson)"
    url: "https://www.cambridge.org/9780521122931"
---

The sudden ubiquity of large language models has left many wondering whether we have stumbled upon true machine intelligence or merely perfected a very sophisticated form of statistical mimicry.

This five-part series strips away the marketing gloss to examine the mathematical foundations of the AI boom, tracing the path from simple linear regressions to the high-dimensional wizardry of the transformer.

We revisit the core principles of optimization and probability to explain how silicon finally began to master syntax.

It is a journey for the technically curious who prefer the rigour of the whiteboard to the hype of the boardroom.

## The Episodes

### Episode 1: The New Calculus

An executive summary of the current landscape, exploring how high-level statistical patterns are aggregated to simulate coherent human reasoning.

{% include podcast-embed.html podcast_id="/audio/Part_1_Wie_Skalierungsgesetze_und_Vektorräume_ChatGPT_antreiben.m4a" podcast_type="audio" podcast_title="Episode 1 Audio" %}

### Episode 2: The Long Road to Silicon

A historical retrospective on the "AI winters" and the eventual triumph of connectionism over the rigid, rule-based logic of the past.

{% include podcast-embed.html podcast_id="/audio/Part_2_Von_starren_Regeln_zu_stochastischen_Giganten.m4a" podcast_type="audio" podcast_title="Episode 2 Audio" %}

### Episode 3: Under the Hood

A technical dive into the transformer architecture, focusing on how self-attention mechanisms and backpropagation turn raw data into structured weights.

{% include podcast-embed.html podcast_id="/audio/Part_3_Mathematik_statt_Magie_unter_der_Motorhaube.m4a" podcast_type="audio" podcast_title="Episode 3 Audio" %}

### Episode 4: The Scaling Hypothesis

An examination of the brutal physics of AI: why throwing more compute, data, and parameters at a model leads to the "emergent" behaviours we see today.

{% include podcast-embed.html podcast_id="/audio/Part_4_Scaling_Laws_und_die_Datenmauer.m4a" podcast_type="audio" podcast_title="Episode 4 Audio" %}

### Episode 5: The Horizon Line

A concluding look at the limits of current architectures and the theoretical hurdles that remain between today's predictors and tomorrow's general intelligence.

*Audio for Episode 5 is currently in production.*

## Bibliography

The available sources include a comprehensive set of references covering the history, mathematical foundations, and technical breakthroughs of artificial intelligence. Below is a thematically organized summary of the most relevant entries.

### Foundations and History of AI

- **Russell, S. J. & Norvig, P. (2021/2003):** *Artificial Intelligence: A Modern Approach*. This standard reference is consistently cited as a foundational source for AI theory and practice.
- **Nilsson, N. J. (2010):** *The Quest for Artificial Intelligence: A History of Ideas and Achievements*. A detailed account of AI's development from its origins to the modern era.
- **McCorduck, P. (2004):** *Machines Who Think*. A classic on the philosophical and historical aspects of AI research.
- **Crevier, D. (1993):** *AI: The Tumultuous Search for Artificial Intelligence*. Focuses in particular on the early phases and the "AI winters".

### Landmark Publications on LLMs and Transformers

- **Vaswani, A. et al. (2017):** *Attention Is All You Need*. The foundational paper that introduced the **Transformer architecture**, which underpins nearly all modern LLMs.
- **Brown, T. B. et al. (2020):** *Language Models are Few-Shot Learners*. The publication on **GPT-3** that highlighted the potential of models with very large parameter counts.
- **Devlin, J. et al. (2018/2019):** *BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding*. Introduced bidirectional training, which became crucial for many NLP tasks.
- **Kaplan, J. et al. (2020):** *Scaling Laws for Neural Language Models*. A central study on how model performance scales with compute, dataset size, and parameter count.

### Embeddings and Specific Techniques

- **Mikolov, T. et al. (2013):** *Efficient Estimation of Word Representations in Vector Space*. The original **word2vec** paper that paved the way for modern word embeddings.
- **Ouyang, L. et al. (2022):** *Training Language Models to Follow Instructions with Human Feedback*. The **InstructGPT** paper that popularized RLHF (Reinforcement Learning from Human Feedback) for aligning AI systems with human values.
- **Raschka, S. (2025):** *Build a Large Language Model (From Scratch)*. A practical work on implementing embedding layers and transformers.

### Critical Analyses and Societal Impact

- **Bender, E. M., Gebru, T. et al. (2021):** *On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?*. An influential critique of unchecked language-model scaling and its ethical risks.
- **Wei, J. et al. (2022):** *Emergent Abilities of Large Language Models*. Examines capabilities that appear only once models reach a certain scale ("emergence").
- **Christian, B. (2020):** *The Alignment Problem: Machine Learning and Human Values*. Addresses the challenge of designing AI systems that do not violate human goals.

### Mathematical and Technical Textbooks

- **MacKay, D. J. C. (2003):** *Information Theory, Inference, and Learning Algorithms*. A comprehensive work on the connection between **information theory** and machine learning.
- **Bishop, C. M. (2006):** *Pattern Recognition and Machine Learning*. An in-depth textbook on the statistical foundations of pattern recognition.
- **Goodfellow, I., Bengio, Y. & Courville, A. (2016):** *Deep Learning*. The standard textbook for the modern era of deep neural networks.
