+++
title = "In Black"
weight = "1"
+++

# In Black

The Nobrolla API In Black feature analyzes video and searches for segments where video and audio would be expected, but no audio is being generated and the image is black.

## Request JSON body

```JSON
{
    "inputUri": "input-uri",
    "features":["IN_BLACK"],
    "videoContext":{
        "inBlackConfig":{
            "enabled":boolean,
            "delay":float,
            "black_value":float
        }
    }
}
```
## Options

|Attribute|Type|Default|Description|
|---------|----|-------|-----------|
|enabled|boolean|false|**required if no other options are present** enable this feature|
|delay|float|7.0| Amount of time in black is allowed before feature is triggered |
|black_value|float|.001| Brightness value used for black |

## alarmSettings Options

Include the alarmSettings object in the inBlackConfig object to run inBlack as an alarm on a job.

|Attribute|Type|Description|
|---------|----|-----------|
|sensitivity|float| The severity of an event at which an alarm is triggered|
|secsInAlarmDuration|int| How long in seconds an event has been going before generating an alert|
|enabled|boolean| Enable this alarm **required, default: false**|



```JSON
{
    "inputUri": "input-uri",
    "features":["IN_BLACK"],
    "videoContext":{
        "inBlackConfig":{
            "enabled":true,
            "delay":1,
            "black_value":0.2,
            "alarmSettings":{
                "enabled": true,
                "sensitivity": 0.2,
                "secsInAlarmDuration": 210
            }
        }
    }
}
```

## Nobrolla API JSON return

|Attribute|Description|
|---------|-----------|
|startTimeOffset|Time since the beginning of the video that an in black event was detected to start |
|endTimeOffset|Time since the beginning of the video that an in black event was detected to end |

```JSON
{
"blackAnnotations" : [
        {
            "startTimeOffset" : "2.135466s",
            "endTimeOffset" : "4.070733s"
        },
    ],
}
```