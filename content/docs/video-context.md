+++
title="Video Context"
+++

# Video Context

The videoContext object defines parameters for the job request. These parameters can be settings for individual features, as well parameters for the job itself, eg: segments to apply features to.

|Attribute| Type |Description|
|---------|----|-----------|
|segments|array|Segments of the video to process. Segments can overlap. If not included, the entire video will be analyzed|
|priority (optional)|num (0-139)|Priority of the feature. Default is 20|
|audioFormatConfig|object| [Audio Format options]({{< relref "../features/audio-format.md" >}}) |
|inBlackConfig|object| [In Black options]({{< relref "../features/in-black.md" >}}) |
|shotDetectionConfig|object| [Shot Change options]({{< relref "../features/shot-change.md" >}}) |
|macroBlockDetectionConfig|object| [Macroblocking Detection options]({{< relref "features/macroblocking" >}}) |
|spokenLanguageConfig|object| [Spoken Language options]({{< relref "features/spoken-language" >}}) |
|captionLanguageConfig|object| [Caption Language options]({{< relref "features/caption-language" >}}) |
|faceDetectionConfig|object|[Face Detection Options]({{< relref "features/face-detection" >}})|
|videoIndexConfig|object| [Video Index options]({{< relref "/features/video-index" >}})|

````JAVASCRIPT
"videoContext":{
    "segments":[
        {
            startTimeOffset:'0s',
            endTimeOffset:'33.033106s'
        }
    ],
    "priority":130,
    "audioFormatConfig":{object},
    "inBlackConfig":{object},
    "shotDetectionConfig":{object},
    "macroBlockDetectionConfig":{object},
    "spokenLanguageConfig":{object},
    "captionLanguageConfig":{object},
    "faceDetectionConfig":{object},
    "videoIndexConfig":{object}
}

````