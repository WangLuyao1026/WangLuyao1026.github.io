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
  <div class="row row-cols-1 row-cols-md-2 g-4">
    {% for project in projects %}
    <div class="col">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>
          <p class="card-text">{{ project.description }}</p>
          <a href="{{ project.url | relative_url }}" class="btn btn-outline-primary btn-sm">查看详情</a>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
