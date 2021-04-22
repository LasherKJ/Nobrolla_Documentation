+++
title = "Features"
+++

# Features

Features are tasks to be performed by a job that the Gentoo Server performs, and can be initiated by the Nobrolla Video System API. When making a REST call to start a job, the features to be used are listed in an array in the `features` object in the request body.

+ [audio format]({{< relref "/features/audio-format" >}})
+ [in black]({{< relref "/features/in-black" >}})
+ [shot change]({{< relref "/features/shot-change" >}})
+ [video index]({{< relref "/features/video-index" >}})
+ [face detection]({{< relref "features/face-detection" >}})
+ [macroblocking detection]({{< relref "features/macroblocking" >}})
+ [spoken language]({{< relref "features/spoken-language" >}})
+ [caption language]({{< relref "features/caption-language" >}})

## Request JSON body

```JSON
{
    "inputUri": "input-uri",
    "features": [
        "IN_BLACK",
        "VIDEO_INDEX",
        "MACROBLOCKING",
        "SHOT_CHANGE_DETECTION",
        "SPOKEN_LANGUAGE",
        "CAPTION_LANGUAGE",
        "AUDIO_FORMAT",
        "FACE_DETECTION",
    ],
    "videoContext":{object}
}
```
## Video Context

The [videoContext]({{< relref "/docs/video-context">}}) object of a job request contains the configuration for each requested feature. 

