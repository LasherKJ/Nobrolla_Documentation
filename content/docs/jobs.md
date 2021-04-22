+++
title = "Jobs"
+++

# Jobs
Jobs are tasks to be performed by the Gentoo system, they can be sent directly to the Gentoo System, or you can create a [workflow]({{< relref "/docs/workflow" >}}) with a preset group of features and options and send a workflow ID.

See an example [here]({{< relref "examples/jobs-example.md">}})
## Features

+ [audio format]({{< relref "/features/audio-format" >}})
+ [in black]({{< relref "/features/in-black" >}})
+ [shot change]({{< relref "/features/shot-change" >}})
+ [video index]({{< relref "/features/video-index" >}})
+ [face detection]({{< relref "features/face-detection" >}})
+ [macroblocking detection]({{< relref "features/macroblocking" >}})
+ [spoken language]({{< relref "features/spoken-language" >}})
+ [caption language]({{< relref "features/caption-language" >}})

## Creating A Job

Make a POST call to begin a job.

|Attribute|Type|Description|
|---------|----|-----------|
|inputUri|string|Location of target file (required if video is not from a live source)|
|features|[enum,...]|An array of Features|
|[videoContext]({{< relref "/docs/video-context">}})|object| **optional** an object of options for the job|
|[workflow]({{< relref "/docs/workflow" >}})|string|**optional** instead of using a videoContext object or a features array, a workflow can be applied to a job|
|origin|string| **optional** Source of the api call *(eg: "janesCustomIndexer")*|
|TTL|int| **optional** How long, in days, to keep this job in the database. **default is 30**|

```JAVASCRIPT
{
    "inputUri": string,
    "features": [enum (Feature)],
    "videoContext":{object (videoContext)},
    "origin": string,
    "TTL":int
}
```

A job can be sent to the Gentoo Server without a videoContext object or workflow if you choose to use the default values for the features requested.

For example:
```JAVASCRIPT
    "inputUri":"some/file/name.mp4",
    "features":["SPOKEN_LANGUAGE", "AUDIO_FORMAT"]
    "origin":"api_call"

```


## Return

A POST call will begin a job and return an object containing a name, which acts as a unique identifier for that job.

|Attribute|Type|Description|
|---------|----|-----------|
|name|string|A unique identifier for the job created|

```Javascript
{
    "name":string
}
```

The `name` returned by a POST call is the unique Identifier used in the body of a GET call to receive information about a job that is in progress or completed.

## Results of a job

A GET call wil return the name and status of a job as well as information about the job.

A job that is still being processed will return the progress on the requested features.

```JSON
{
    "name": "OID",
    "metadata": {
        "@type": "annotationProgress",
        "annotationProgress": [
            {
                "inputUri": "file://some/path/somefile.mp4",
                "startTime": "2020-11-17T23:57:11.677183Z",
                "updateTime": "2020-11-17T23:57:11.677183Z",
                "feature": "FEATURE_ONE"
            },
            {
                "inputUri": "file://some/path/somefile.mp4",
                "startTime": "2020-11-17T23:57:11.677183Z",
                "updateTime": "2020-11-17T23:57:11.677183Z",
                "feature": "FEATURE_TWO"
            }
        ]
    }
}
```

A GET call for a completed job will return the name of the job, all annotations for the requested features, as well as a ```done:true``` object

|Attribute|Description|
|---------|------------|
|name|A unique identifier of the completed job|
|origin|Where the job was started from, eg: *dashboard*,*api*, or a custom string|
|status|Current status of the job. A completed job will return `done`|
|done|Only exists for completed job, always returns `true`|
|workflow|The name of the workflow if the job was ran with one|
|TTL| How long in days after the job was created, to keep the job in the database|
|metadata|Object|
|response|An object containing the results of the job|

## The Response Object
The response object contains the results of the completed job. 

|Attribute|Description|
|---------|-----------|
|inputUri|The location of the original video file|
|segment|An object containing the `startTimeOffset` and `endTimeOffset` of the original video file|
|recording|A unique ID that can be used to query the NVS API and return the recording of the completed job, and results|
|status|The status of the requested job|
|recording|A unique ID for the recording of a jobs result|
|workflow|If the job was started using a workflow, the name of the workflow will be returned|
|metadata|An object containing details about the job|
|response|An object containing the results of a job, including the annotation objects for the requested features|

Any requested [features]({{< relref "/features/features.md" >}}) will also have the results annotations in this object. 


```JSON
{
    "name": "5fd029158c82e7313614426f",
    "origin":"dashboard",
    "status":"done",
    "metadata": {
        "@type": "annotationProgress",
        "annotationProgress":[
         {
            "inputUri":"/mnt/nobrolla/media/TestClips/playlist//VR4510.mp4",
            "startTime":"2020-12-09T01:32:05.304Z",
            "updateTime":"2020-12-09T01:32:31.458Z",
            "progressPercent":100
         }
      ]
    },
    "done": true,
    "TTL":30,
    "response": {
        "inputUri": "file://some/path/somefile.mp4",
        "captionLanguageAnnotations" : [
            {
                "services" : [
                    {
                        "language" : "en",
                        "en" : 0.9588,
                        "es" : 0.0039,
                        "confidence" : 0.0096,
                        "timeOffset" : "14.047366s"
                    },
                    
                    {
                        "language" : "en",
                        "en" : 0.9588,
                        "es" : 0.0039,
                        "confidence" : 0.0096,
                        "timeOffset" : "14.047366s"
                    },
                ]
            },
            {
                "services" : [
                    {
                        "language" : "en",
                        "en" : 0.9588,
                        "es" : 0.0039,
                        "confidence" : 0.0096,
                        "timeOffset" : "16.047366s"
                    },
                    
                    {
                        "language" : "en",
                        "en" : 0.9588,
                        "es" : 0.0039,
                        "confidence" : 0.0096,
                        "timeOffset" : "16.047366s"
                    },
                ]
            }
        ],
        
        "shotAnnotations" : [
            {
                "startTimeOffset" : "0.000000s",
                "endTimeOffset" : "8.458449s"
            },
            
            {
                "startTimeOffset" : "8.458449s",
                "endTimeOffset" : "14.468620s"
            },
            
            {
                "startTimeOffset" : "14.468620s",
                "endTimeOffset" : "16.466449s"
            },
        ],

        "segment": {
            "startTimeOffset": "0s",
            "endTimeOffset": "34.334300s"
        }
    }
}
```

