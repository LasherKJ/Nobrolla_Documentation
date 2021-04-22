+++
title="Nobrolla Video System"
+++

# Nobrolla Video System API

The Gentoo Server processes video by passing them through Artificial Intelligence models, or `features`, and returns the results of the process.

## Using Gentoo

The Gentoo API documentation encompasses REST commands for creating jobs and work flows. While there is a User Interface accessible from your Gentoo Server, this documentation covers the end-points you can use to send commands directly to the Gentoo Server.


## Core Concepts

### Cores

[Cores]({{< relref "/docs/cores" >}}) are individual processessing units of the Gentoo System. Each one can be linked to one input at a time, and perform one job at a time. Cores can be configured to start a job using `REST` commands, perform a job on a file directory whenever a change is detected, or process live video as it comes in.

### Jobs

[Jobs]({{< relref "/docs/jobs" >}}) are Artificial Intelligence models to be applied to video files by the Gentoo Server. Jobs should contain a list of features like face detection or spoken language detection. Jobs can be saved as a workflow in order to be repeated, or sent as a REST command to be ran once. When a job is completed it will return the results as JSON. 

### Alarms

Some jobs can be configured as [Alarms]({{< relref "/docs/alarms" >}}). These alarms will generate a video recording as well as JSON  of the results. Alarms can also be configured to generate an alert or send an email to inform the right people when an issue with video is detected.

### Features

[Features]({{< relref "/features/features.md" >}}) are individual tasks to be performed on a video.

+ [Audio Format]({{< relref "/features/audio-format" >}})
+ [In Black]({{< relref "/features/in-black" >}})
+ [Shot Change]({{< relref "/features/shot-change" >}})
+ [Video Index]({{< relref "/features/video-index" >}})
+ [Face Detection]({{< relref "features/face-detection" >}})
+ [Macroblocking detection]({{< relref "features/macroblocking" >}})
+ [Spoken Language]({{< relref "features/spoken-language" >}})
+ [Caption Language]({{< relref "features/caption-language" >}})

### Workflow

A [workflow]({{< relref "/docs/workflow" >}}) is a configured job that is saved into the Gentoo System. By using a workflow instead of creating a new job, a task can be repeated without needing to rewrite a complex request object every time. 

