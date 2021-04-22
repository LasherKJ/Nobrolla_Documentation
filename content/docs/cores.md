+++
title = "Cores"
+++

# Cores

Cores are the indivudal processing units of the Gentoo system. Each core is capable of doing one [job]({{< relref "/docs/jobs" >}}) at a time.

## Core Types

Cores can be assigned one of three `types`. 

|Type|Description|
|----|-----------|
|file_once|This will perform a job on a single specified file|
|dir_poll|This will perform a job on an entire specified directory whenever a file is added or changed|
|live|This will perform a workflow on a live video feed|

## List available cores

Perform a `GET` call to receive a list objects for each core and information about them

|Attribute|Description|
|---------|-----------|
|Index|The index of each core|
|_id|A unique ID|
|name|Unique text string|
|slug|The name to display on the Gentoo UI| 
|coreNumber|The number of each core|
|type|The function the core performs|
|source| |
|sessionLength|The length of time to record a live feed when an alarm has been triggered. sessionLength only applies to live feeds|
|workflow|The workflow assigned to a live feed|
|device|The video input card source for live feeds|
|channel|The pin on the video input card for live feeds|
|inputType|The type of video input card|

## Example of a GET response

```JSON
[
    {
        "index": 4,
        "_id": "5fcaa8e9ad806e599a8767d3",
        "name": "core-4",
        "slug": "core-4",
        "coreNumber": 4,
        "type": "file_once",
        "source": "clipPlayer-4",
        "__v": 0
    },
    {
        "index": 1,
        "_id": "5fcaa8e9ad806e599a8767d4",
        "name": "core-1",
        "slug": "Core 1",
        "coreNumber": 1,
        "type": "live",
        "source": "asi-1:1",
        "__v": 0,
        "sessionLength": 60,
        "workflow": "workflow_test",
        "channel": 1,
        "device": 1,
        "inputType": "asi"
    },
    {
        "index": 2,
        "_id": "5fcaa8e9ad806e599a8767d5",
        "name": "core-2",
        "slug": "core-2",
        "coreNumber": 2,
        "type": "dir_poll",
        "source": "clipPlayer-2",
        "__v": 0,
        "workflow": ""
    },
    {
        "index": 3,
        "_id": "5fcaa8e9ad806e599a8767d6",
        "name": "core-3",
        "slug": "core-3",
        "coreNumber": 3,
        "type": "file_once",
        "source": "clipPlayer-3",
        "__v": 0
    }
]
```

## Configuring Cores

A Gentoo System will come with each core having a generic configuration. Perform a `PUT` call to edit individual cores and configure them for specific needs. Learn more [here.]({{< relref "/examples/core-config-example" >}})

## Configurable Values

|Attribute|Type|Description|
|---------|----|-----------|
|name|string|The string used to identify a specific core|
|slug|string|The name for this core that will appear on the Gentoo UI **default: same as name**|
|type|string| `live`,`file_once`, or `dir_poll` *see Core Types*|
|inputType|enum|`asi`, `sdi`, or `10g`. **Required if the type is `live`**|
|device|int|Number of the video input card source.  **Required if the type is `live`**|
|channel|int|Number of the pin of the video input card source.  **Required if the type is `live`**|
|workflow|string|The name of the workflow to run on this core **Required if the type is `live`**|
|sessionLength|int|The length of time in seconds to record a live feed when an alarm has been triggered. **Required if the type is `live`**|
