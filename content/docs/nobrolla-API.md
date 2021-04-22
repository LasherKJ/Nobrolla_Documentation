
+++
title = "Nobrolla API"
+++
# Nobrolla Video System API

The Nobrolla Video System (NVS) API documentation encompasses REST commands for creating jobs and work flows. While there is a User Interface accessible from your Gentoo Server, this documentation covers the end-points you can use to send commands directly to Gentoo.

## Cores
```HTML 
POST /api/cores
GET /api/cores
GET /api/cores/[name]
PUT /api/cores/[name]*
DELETE /api/cores/[name]
```
Cores are NVS objects that work on jobs. Each core is capable of running one job at a time. 

Cores can be assigned a live video feed or a job from the workflow

## Jobs

Jobs can be sent to a specific core, or join the workflow and be assigned a core automatically based on availability

### Jobs:
+ Facial Detection
+ Audio Loss
+ Audio Format
+ Audio Language
+ Video Quality
+ Video Source indexing
+ Shot Change Detection
+ Text Detection
+ Explicit Content Detection
+ Logo Recognition
+ Celebrity Recognition
+ Person Detection
+ Ad Placement Suggestion
+ Lip Sync Detection
+ Video Indexing

