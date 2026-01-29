---
layout: page
title: Portfolio
permalink: /projects/
description: 个人作品集 | Selected Works
nav: true
nav_order: 3
---

<div class="projects">
  {% assign projects = site.projects | sort: "importance" %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      {% for project in projects %}
      <div class="col">
        <div class="card h-100 z-depth-1 border-0 shadow-sm">
          {% if project.img %}
          <a href="{{ project.url | relative_url }}">
            <img src="{{ project.img | relative_url }}" class="card-img-top" alt="{{ project.title }}" style="height: 200px; object-fit: cover;">
          </a>
          {% endif %}
          <div class="card-body">
            <h5 class="card-title" style="font-weight: bold;">{{ project.title }}</h5>
            <p class="card-text" style="font-size: 0.9rem; color: #666;">{{ project.description }}</p>
            <a href="{{ project.url | relative_url }}" class="btn btn-sm" style="background-color: #4D0099; color: white;">查看详情</a>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</div>

<style>
  .card { transition: all 0.3s ease; border-radius: 10px; overflow: hidden; }
  .card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important; }
  .card-img-top { border-bottom: 1px solid #eee; }
</style>
