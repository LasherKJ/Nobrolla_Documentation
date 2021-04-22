+++
title = "Macroblocking"
+++

# Macroblocking

The Nobrolla API Macroblocking feature detects drops in quality caused by macroblocking.

## Request JSON body

```JSON
{
    "inputUri": "input-uri",
    "features":["MACROBLOCKING"],
    "videoContext":{
        "macroBlockDetectionConfig":{
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

Include the alarmSettings object in the macroBlockDetectionConfig object to run macro block detection as an alarm on a job.

|Attribute|Type|Description|
|---------|----|-----------|
|sensitivity|float| The severity of an event at which an alarm is triggered|
|secsInAlarmDuration|int| How long in seconds an event has been going before generating an alert|
|enabled|boolean| Enable this alarm **required, default: false**|
|minSsimValue|float| Minimum amount of blocking based on the SSIM algorithm before triggering an alarm|


```JSON
{
    "inputUri": "input-uri",
    "features":["MACROBLOCKING"],
    "videoContext":{
        "macroBlockDetectionConfig":{
            "alarmSettings":{
                "enabled": true,
                "sensitivity": 0.2,
                "secsInAlarmDuration": 210,
                "minSsimValue": 0.9,
            }
        }
    }
}
```

## Nobrolla API JSON return
|Attribute|Description|
|---------|-----------|
|ssim|A metric of image quality|
|mean|Average quality between the startTimeOffset and endTimeOffset|
|min|Lowest quality reached between the startTimeOffset and endTimeOffset|
|startTimeOffset|Time since the beginning of the video that this event began|
|endTimeOffset|Time since the beginning of the video that this event ends|

```JSON
{
   "macroblockAnnotations" : [
      {
         "ssim":{
            "mean":0.8764,
            "min":0.8764
         },
         "startTimeOffset":"0.000000s",
         "endTimeOffset":"34.100733s"
      },
      {
         "ssim":{
            "mean":0.8774,
            "min":0.8664
         },
         "startTimeOffset":"34.100733s",
         "endTimeOffset":"0.000000s"
      }
    ]
}
```