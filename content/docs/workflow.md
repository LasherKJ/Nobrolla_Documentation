+++
title = "Workflows"
+++

# Workflows

Workflows are groups of features and presets. These workflows can be assigned to jobs in order to save time and work when initiating a new [job]({{< relref "/docs/jobs" >}}). 

See an example [here]({{< relref "examples/workflow-example.md">}})

## Configuring and Saving a Workflow

|Attribute|type|Description|
|---------|----|-----------|
|name|string|**required, must be unique**|
|index|int|**required, must be unique**|
|videoContext|object|**required** A collection of settings and feature settings|

A POST call will create a new workflow. 
```JSON
{
  "name": "default",                  
  "index": 0,                               
  "videoContext": {                         
    "priority": 20,                     
    "inBlackConfig": {object},
    "audioFormatConfig": {object},
  },
}

```
a PUT call to a specific workflow will modify that workflow.

## Starting a Job using a Workflow

Using the name of an already existing workflow, a job can be created that will use the presets and features in that workflow. Using a workflow means you do not have to use the same videoContext object every time you run a job, you can simply assign a workflow.

|Attribute|type|Description|
|---------|----|-----------|
|inputUri|string|Location of the target file (required if video is not from a live source)|
|workflow|string|**required** Desired workflow to run on target file|
|target|int|**optional** Specific core to use in order to run the job|
|origin|string|**optional** Source of the api call *(eg: "janesCustomIndexer)*|

```JSON
{
    "inputUri": "file://some/path/file.mp4",
    "workflow": "workflow_name",
    "target": 1,                              
    "origin": "dashboard"                       
}
```