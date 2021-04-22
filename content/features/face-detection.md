+++
title = "Face Detection"
+++

# Face Detection

The Nobrolla API Face Detection feature analyzes video searching for faces.

## Request JSON body

```JSON
{
    "inputUri": "input-uri",
    "features":["FACE_DETECTION"],
    "videoContext":{
        "faceDetectionConfig":{
            "enabled":boolean
        }
    }
}
```
## Options 

|Attribute|Type|Default|Description|
|---------|----|-------|-----------|
|enabled|boolean|false|**required** enable this feature|

## alarmSettings Options

Include an alarmSettings object in the faceDetectionConfig object to run faceDetection as an alarm on a job.

|Attribute|Type|Description|
|---------|----|-----------|
|sensitivity|float| The severity of an event at which an alarm is triggered|
|secsInAlarmDuration|int| How long in seconds an event has been going before generating an alert|
|enabled|boolean| Enable this alarm **required, default: false**|
|maxFaceCount|int|Number of faces allowed visible at one time|

## Face Detection as an Alarm
```JSON
{
    "inputUri": "input-uri",
    "features":["FACE_DETECTION"],
    "videoContext":{
        "faceDetectionConfig":{
            "alarmSettings":{
                "enabled": true,
                "sensitivity": 0.2,
                "secsInAlarmDuration": 210,
                "maxFaceCount": 1,
            }
        }
    }
}
```


## Nobrolla API JSON return

```JSON
{
    "results":[
        {"titleAnnotions":[
            {"segment":
                {
                    "startTimeOffset":"12.238872s",
                    "endTimeOffset":"19.116559s"
                }
            }
        ]},
    ]
}
```