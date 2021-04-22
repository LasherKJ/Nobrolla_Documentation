+++
title = "Shot Change"
weight = "1"
+++

# Shot Change Detection

The Nobrolla API Shot Change feature analyzes video and searches for a shot change.

## Request JSON body

```JSON
{
    "inputUri": "input-uri",
    "features":["SHOT_CHANGE_DETECTION"],
    "videoContext":{
        "shotDetectionConfig":{
            "enabled":boolean
        }
    }
}
```

## Options

|Attribute|Type|Default|Description|
|---------|----|-------|-----------|
|enabled|boolean|false|**required** enable this feature|

## Nobrolla API JSON return

|Attribute|Description|
|---------|-----------|
|startTimeOffset|Time since the beginning of the video that a shot change event was detected to start |
|endTimeOffset|Time since the beginning of the video that a shot change event was detected to end |


```JSON
{
"shotAnnotations" : [
    {
        "startTimeOffset" : "0.000000s",
        "endTimeOffset" : "8.458449s"
    },
    {
        "startTimeOffset" : "8.458449s",
        "endTimeOffset" : "12.712699s"
    },
    {
        "startTimeOffset" : "12.712699s",
        "endTimeOffset" : "13.697016s"
    },
    {
        "startTimeOffset" : "13.697016s",
        "endTimeOffset" : "14.468620s"
    },
    {
        "startTimeOffset" : "14.468620s",
        "endTimeOffset" : "16.466449s"
    },
],
}
```