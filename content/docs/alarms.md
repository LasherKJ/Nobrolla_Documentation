+++
title = "Alarms"
+++

# Alarms

Most features can also be configured as alarms. When a feature is configured as an alarm it will return annotations as if it was ran as a feature, and it will also automatically generate a recording of the video where the annotations describe. Alarms can also be configured to generate an alert, email, or other way to notify when an alarm has been triggered.

## Features that can be configured as Alarms

+ [audio format]({{< relref "/features/audio-format" >}})
+ [in black]({{< relref "/features/in-black" >}})
+ [face detection]({{< relref "features/face-detection" >}})
+ [macroblocking detection]({{< relref "features/macroblocking" >}})
+ [spoken language]({{< relref "features/spoken-language" >}})
+ [caption language]({{< relref "features/caption-language" >}})

## Alarm settings object

To configure a feature as an alarm add the `alarmSettings` object to the features config object in the [videoContext object]({{< relref "/docs/video-context.md">}}). Each feature has its own alarm settings specific to that feature, but there are a few universal settings in the alarmSettings objects.

|Attribute|Type|Description|
|---------|----|-----------|
|sensitivity|float| The severity of an event at which an alarm is triggered|
|secsInAlarmDuration|int| How long in seconds an event has been going before generating an alert|
|enabled|boolean| Enable this alarm **required, default: false**|

```JSON
{"videoContext":
    {
        "priority":20,
        "inBlackConfig":{
            "blackValue":32,
            "alarmSettings":{
                "sensitivity":0.2,
                "secsInAlarmDuration":7,
                "enabled":true
            }
        }
    }
}
```