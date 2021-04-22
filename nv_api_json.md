core: 
Mutate only

```JSON
{
    "name": "core-1",       <-- unq
    "slug": "core-1",
    "coreNumber": 1,        <-- unq
    "type": "file_once",    <-- file_once, dir_poll, live
    "inputType": "asi",     <-- req if live [asi, sdi]
    "device": 1,            <-- req if live
    "channel": 1,           <-- req if live
    "workflow": "workflow1", <-- req if live
    "sessionLength": 60,     <-- req if live  seconds
    "index": 1              <-- unq
}
```

will build "source" and return on reads (GET, POST, PUT return etc)

workflow:

```JSON
{
  "name": "default",                        <--req, unq
  "index": 0,                               <--req, unq
  "videoContext": {                         <--req
    "priority": 20,                     
    "inBlackConfig": {                  
      "enabled": false,
      "blackValue": 32,
      "alarmSettings": {
        "enabled": false,
        "sensitivity": 0.2,
        "secsInAlarmDuration": 210,
      },
    },
    "audioFormatConfig": {
      "enabled": false,
      "alarmSettings": {
        "enabled": false,
        "sensitivity": 0.2,
        "secsInAlarmDuration": 210,
        "allowCompressedAudio": 3,
        "allowableAudioFormat": 15,
      },
    },
    "macroBlockDetectionConfig": {
      "enabled": false,
      "alarmSettings": {
        "enabled": false,
        "sensitivity": 0.2,
        "secsInAlarmDuration": 210,
        "minSsimValue": 0.9,
      },
    },
    "spokenLanguageConfig": {
      "enabled": false,
      "alarmSettings": {
        "enabled": false,
        "sensitivity": 0.2,
        "secsInAlarmDuration": 210,
        "maskAllowableLangauges": [
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
        ],
      },
    },
    "captionLanguageConfig": {
      "enabled": false,
      "alarmSettings": {
        "enabled": false,
        "sensitivity": 0.2,
        "secsInAlarmDuration": 210,
        "maskAllowableLangauges": [3, 3, 3, 3],
      },
    },
    "facialRecognitionConfig": {
      "enabled": false,
      "alarmSettings": {
        "enabled": false,
        "sensitivity": 0.2,
        "secsInAlarmDuration": 210,
        "maxFaceCount": 1,
      },
    },
    "shotDetectionConfig": {
      "enabled": false,
    },
    "videoIndexConfig": {
      "enabled": false,
      "index": false,
      "query": false,
      "ttl": 5,
    },
  },
}
```

POST, create job:

    min:

```JSON
{
    "inputUri": "file://some/path/file.mp4",        <-- req if !live
    "workflow": "workflow_name",
    "target": 1,                                    <-- 1-4 or not set
    "origin": "dashboard"                           <-- default to `api`
}
```

// OR //

```JSON
{
    "inputUri": "file://some/path/file.mp4",        <-- req if !live
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
    "origin": "live_alarm"
}
```

    features w/ context:

```JSON
{
    "inputUri": "file://some/path/file.mp4",        <-- req if !live
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
    "videoContext": {                         <--req
        "priority": 20,                     
        "inBlackConfig": {                      <--optional                 
          "blackValue": 32,
          "alarmSettings": {                    <--optional
            "sensitivity": 0.2,
            "secsInAlarmDuration": 210,
          },
        },
        "audioFormatConfig": {
          "alarmSettings": {
            "sensitivity": 0.2,
            "secsInAlarmDuration": 210,
            "allowCompressedAudio": 3,
            "allowableAudioFormat": 15,
          },
        },
        "macroBlockDetectionConfig": {
          "alarmSettings": {
            "sensitivity": 0.2,
            "secsInAlarmDuration": 210,
            "minSsimValue": 0.9,
          },
        },
        "spokenLanguageConfig": {
          "alarmSettings": {
            "sensitivity": 0.2,
            "secsInAlarmDuration": 210,
            "maskAllowableLangauges": [
              3,
              3,
              3,
              3,
              3,
              3,
              3,
              3,
            ],
          },
        },
        "captionLanguageConfig": {
          "alarmSettings": {
            "sensitivity": 0.2,
            "secsInAlarmDuration": 210,
            "maskAllowableLangauges": [3, 3, 3, 3],
          },
        },
        "faceDetectionConfig": {
          "alarmSettings": {
            "sensitivity": 0.2,
            "secsInAlarmDuration": 210,
            "maxFaceCount": 1,
          },
        },
        "shotDetectionConfig": {
        },
        "videoIndexConfig": {
          "index": false,
          "query": false,
          "ttl": 5,
        },
        "segments": [                       <-- TODO oof
            {
                "startTimeOffset":"0s",
                "endTimeOffset":"33.06s"
            },
            {
                "startTimeOffset":"56.0s",
                "endTimeOffset":"75.06s"
            },
        ]
    },
    "origin": "api"
}
```

Jobs returns:

    POST:

```JSON
{
    "name": "OID"
}
```

    GET (no work done, still in op queue):

```JSON
{
    "name": "OID"
    "metadata": {
        "@type": "annotationProgress",             <-- the class of object this block instantiates.
        "annotationProgress": [
            {
                "inputUri": "file://some/path/somefile.mp4",
                "startTime": "2020-11-17T23:57:11.677183Z",
                "updateTime": "2020-11-17T23:57:11.677183Z",
                "feature": "SHOT_CHANGE_DETECTION"
            },
            {
                "inputUri": "file://some/path/somefile.mp4",
                "startTime": "2020-11-17T23:57:11.677183Z",
                "updateTime": "2020-11-17T23:57:11.677183Z",
                "feature": "CAPTION_LANGUAGE"
            }
        ]
    }
}
```

    GET (some work is done): 

    //TODO

    GET (work is done):

```JSON
{
    "name": "OID",
    "metadata": {
        "@type": "annotationProgress",             <-- the class of object this block instantiates.
        "annotationProgress": [
            {
                "inputUri": "file://some/path/somefile.mp4",
                "progressPercent": 100,
                "startTime": "2020-11-17T23:57:11.677183Z",
                "updateTime": "2020-11-17T23:57:11.677183Z",
                "feature": "SHOT_CHANGE_DETECTION"
            },
            {
                "inputUri": "file://some/path/somefile.mp4",
                "progressPercent": 100,
                "startTime": "2020-11-17T23:57:11.677183Z",
                "updateTime": "2020-11-17T23:57:11.677183Z",
                "feature": "CAPTION_LANGUAGE"
            }
        ]
    },
    "done": true,
    "response": {
        "@type": "type.googleapis.com/google.cloud.videointelligence.v1.AnnotateVideoResponse",
        "annotationResults": {
            "inputUri": "file://some/path/somefile.mp4",
            "blackAnnotations" : [
                {
                    "startTimeOffset" : "2.135466s",
                    "endTimeOffset" : "4.070733s"
                },
            ],
            "spokenLanguageAnnotations" : [
                {
                    "channels" : [
                        {
                            "language" : "en",
                            "en" : 0.8972,
                            "es" : 0.0001,
                            "oob" : 0.0002,
                            "timeOffset" : "9.042366s"
                        }, 
                        {
                            "language" : "es",
                            "en" : 0.0972,
                            "es" : 0.8001,
                            "oob" : 0.0002,
                            "timeOffset" : "9.042366s"
                        }
                    ]
                },
                {
                    "channels" : [
                        {
                            "language" : "en",
                            "en" : 0.9588,
                            "es" : 0.0039,
                            "oob" : 0.0096,
                            "timeOffset" : "14.047366s"
                        }
                    ]
                },
            ],
            "audioFormatAnnotations" : [
                {
                    "audioFormat" : "silence",
                    "timeOffset" : "0.033366s"
                },
                {
                    "audioFormat" : "mono",
                    "timeOffset" : "1.968633s"
                },
                {
                    "audioFormat" : "silence",
                    "timeOffset" : "2.035366s"
                },
                {
                    "audioFormat" : "mono",
                    "timeOffset" : "3.970633s"
                },
                {
                    "audioFormat" : "silence",
                    "timeOffset" : "34.034000s"
                },
            ],
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
            "videoIndexAnnotations" : [
                {
                    "matches":[
                        {
                            "source": "someclip.mp4"
                            "sourceTimestamp": "16.047366s"
                            "confidence" : 0.0096,
                            "timeOffset" : "16.047366s"
                        },
                        {
                            "source": "someotherclip.mp4"
                            "sourceTimestamp": "16.047366s"
                            "confidence" : 0.0086,
                            "timeOffset" : "16.047366s"
                        },
                    ]
                },
                {
                    "matches":[
                        {
                            "source": "someclip.mp4"
                            "sourceTimestamp": "20.047366s"
                            "confidence" : 0.0096,
                            "timeOffset" : "20.047366s"
                        },
                        {
                            "source": "somethirdclip.mp4"
                            "sourceTimestamp": "20.047366s"
                            "confidence" : 0.0086,
                            "timeOffset" : "20.047366s"
                        },
                    ]
                },
            ],
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
            "macroblockAnnotations" : [
                {
                    "ssim" : {
                        "mean" : 0.7881,
                        "min" : 0.7881
                    },
                    "startTimeOffset" : "0.000000s",
                    "endTimeOffset" : "8.541866s"
                },
                {
                    "ssim" : {
                        "mean" : 0.7957,
                        "min" : 0.7957
                    },
                    "startTimeOffset" : "8.541866s",
                    "endTimeOffset" : "11.344666s"
                },
                {
                    "ssim" : {
                        "mean" : 0.9835,
                        "min" : 0.9608
                    },
                    "startTimeOffset" : "11.344666s",
                    "endTimeOffset" : "12.779433s"
                },
                {
                    "ssim" : {
                        "mean" : 0.9901,
                        "min" : 0.9868
                    },
                    "startTimeOffset" : "12.779433s",
                    "endTimeOffset" : "13.747066s"
                },
            ],
            "segment": {
                "startTimeOffset": "0s",
                "endTimeOffset": "34.334300s"
            }
        }
    }
}
```
