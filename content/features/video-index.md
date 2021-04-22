+++
title = "Video Index"
+++

# Video Index

The Nobrolla API Video Index feature will analyze a video looking for segments that match videos already processed by the Nobrolla API. A 'query' request will search for matching videos or segments in the database of known videos. An 'index' query will add the video to it's database of known videos so it can be searched for later.

## Request JSON body

```JSON
{
    "inputUri": "input-uri",
    "features":["VIDEO_INDEX"],
    "videoContext":{
        "videoIndexConfig":{
            "enabled":boolean,
            "query":boolean,
            "index":boolean
        }
    }
}
```
## Options

|Attribute|Type|Default|Description|
|---------|----|-------|-----------|
|enabled|boolean|false|**required** enable this feature|
|query|boolean|false| Search for this clip in known clips  |
|index|boolean|false| Add this clip to the database of known clips |

## Nobrolla API JSON return

|Attribute|Description|
|---------|-----------|
|timeOffset|Time since the beginning of the query video that matches with the match video|
|matches|An array of matches at a given time|
|source|File name for the source of the match|
|sourceTimestamp|Time since the beginning of the match video that matches with the query video|
|confidence|Strength with which the machine learning algorithm believes itself to be correct|

```JSON
{
    "videoIndexAnnotations" : [
        {   
            "timeOffset" : "16.047366s",
            "matches":[
                {
                    "source": "someclip.mp4",
                    "sourceTimestamp": "12.965760s",
                    "confidence" : 0.0096,
                },
                {
                    "source": "someotherclip.mp4",
                    "sourceTimestamp": "32.392979s",
                    "confidence" : 0.0086,
                },
            ]
        },
        {
            "timeOffset" : "20.047366s",
            "matches":[    
                {
                    "source": "someclip.mp4",
                    "sourceTimestamp": "19.698064s",
                    "confidence" : 0.0096,
                },
                {
                    "source": "somethirdclip.mp4",
                    "sourceTimestamp": "44.042122s",
                    "confidence" : 0.0086,
                },
            ]
        },
    ],
}
```