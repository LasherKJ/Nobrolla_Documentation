+++
title = "Video Quality"
weight = "1"
+++

# Video Quality

The Nobrolla API Video Quality feature analyzes video and searches for segments where video and audio quality drop.

## Request JSON body

```JSON
{
    "inputUri": "input-uri",
    "features":["VIDEO_QUALITY"],
    "videoContext":{
        "videoQualityConfig":{
            "enabled":boolean,
            "minimum":float
        }
    }
}
```
## Options

|Attribute|Type|Default|Description|
|---------|----|-------|-----------|
|enabled|boolean|false|**required** enable this feature|
|MINIMUM|float **0.1 - 1**|.5| The minimum quality level allowed |

## Nobrolla API JSON return

```JSON
{
    "results":[
        {"videoQualityAnnotations":[
            {"segment":
                {
                    "startTimeOffset":"12.228747s",
                    "endTimeOffset":"19.233210ss"
                },
                "value":0.4
            }
        ]},
        {"videoQualityAnnotations":[
            {"segment":
                {
                    "startTimeOffset":"19.233210s",
                    "endTimeOffset":"21.097552s"
                },
                "value":0.1
            }
        ]},
    ]
}
```