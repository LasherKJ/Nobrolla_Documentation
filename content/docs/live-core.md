+++
title="Live Cores"
+++

# Live Cores

Live cores have a continuous video feed as the video source. Jobs cannot be applied directed to a live core, but need to be configured as a [workflow]({{< relref "/docs/workflow" >}}), which is then applied to the source.

Alarms should be configured to generate alerts and recordings because unlike other jobs, **live cores will not return annotations when completed**.

One way to monitor live cores outside of the alarms generated is to connect to the core directly with a websocket. This websocket will return live data about all of the features included in the workflow. Once connected, the websocket will send data every 1/10th of a second.

See an example [here]({{< relref "examples/live-cores-example.md">}})

## Data

|attribute|description|
|---------|-----------|
|bitrate|Total bitrate of the media|
|videoBitrate|Bitrate for only the video|
|audioBitrate|Bitrate for only the audio|
|avSync| Detected delay between audio and video, presented as an array of floats where each flow represents an audio channel|
|pts|Presentation Timestap, current time a frame was received|
|dur|Duration of each frame in microseconds|
|frameRate| Detected frames per second of the video|
|interlaced| Whether or not a video is interlaced. 0 = false, 1 = true |
|frameSize| The detected frame size presented as a two number array: \[*width*,*height*\] |
|probeData| An object containing information about the audio |
|mean| An array of the mean pixel value for each color pane \[*y*,*u*,*v*\]|
|std| An array of the standard pixel value for each color pane \[*y*,*u*,*v*\]|
|correlation| The percent similarity between two congruent audio channels, expressed a float |
|dbPeak|The peak volume of an audio channel over the last few frames|
|dbRMS|The current volume of an audio channel|
|captioning|An object containing the closed captioning information of up to four closed CEA-708 services|
|cea708:1 - cea708:4|An object containing the closed captiong information for each CEA-708 service|
|ver|An index of each line of closed captioning|
|display|The text displayed by the closed captioning|
|features|An object describing the features in the job|
|annotationLive|An array containing live data about the requested features|
|annotationResults|An array containing a few of the previous returns from the requested. This is not a comprehensive list of all returns from the job. See [features]({{< relref "/features/features.md" >}}) for information on feature returns|


## JSON

```JSON
{
   "cores":{
      "live_stream":{
         "bitrate":34.899,
         "videoBitrate":33.399,
         "audioBitrate":1.500,
         "avSync":[
            0.000,
            0.043,
            0.043,
            0.000,
            0.000,
            0.000,
            0.000,
            0.000,
            0.000,
            0.000,
            0.000,
            0.000,
            0.000,
            0.000,
            0.000,
            0.000
         ],
         "pts":1837258996546,
         "dur":16683,
         "frameRate":59.940,
         "interlaced":0,
         "frameSize":[
            1280,
            720
         ],
         "probeData":{
            "mean":[
               144.9,
               139.3,
               103.7,
               137.4
            ],
            "std":[
               58.0,
               60.6,
               58.9,
               57.7
            ],
            "correlation":[
               0.873,
               0.000,
               0.000,
               0.000,
               0.000,
               0.000,
               0.000,
               0.000
            ],
            "dbPeak":[
               -7.14,
               -7.18,
               -66.00,
               -66.00,
               -66.00,
               -66.00,
               -66.00,
               -66.00
            ],
            "dbRMS":[
               -15.95,
               -15.98,
               -66.00,
               -66.00,
               -66.00,
               -66.00,
               -66.00,
               -66.00
            ],
            "__v":0
         },
         "captioning":{
            "cea708:0":{
               "ver":1,
               "display":[
                  
               ]
            },
            "cea708:1":{
               "ver":1,
               "display":[
                  
               ]
            },
            "cea708:2":{
               "ver":1,
               "display":[
                  
               ]
            },
            "cea708:3":{
               "ver":1,
               "display":[
                  
               ]
            },
            "__v":0
         },
         "features":{
            "black":{
               "slug":"In Black",
               "predictionDuration":"0.000000s"
            },
            "ObjectDetection":{
               "slug":"Object Detection",
               "predictionDuration":"0.083358s"
            },
            "__v":0
         },
         "annotationLive":{
            "blackAnnotations":[
               {
                  "inBlack":0.0,
                  "startTimeOffset":"7.040366s",
                  "endTimeOffset":"31.531500s"
               }
            ],
            "objectAnnotations":[
               {
                  "confidence":0.691162,
                  "entity":{
                     "entitiyId":"/m/01g317",
                     "description":"person",
                     "languageCode":"en-US"
                  },
                  "frames":[
                     {
                        "normalizedBoundingBox":{
                           "left":0.668587,
                           "top":0.100081,
                           "right":0.903273,
                           "bottom":0.695098
                        },
                        "timeOffset":"4.004000s"
                     }
                  ],
                  "segment":{
                     "startTimeOffset":"27.193833s",
                     "endTimeOffset":"31.197833s"
                  }
               }
            ],
            "__v":0
         },
         "annotationResults":{
            "blackAnnotations":[
               {
                  "startTimeOffset":"0.033366s",
                  "endTimeOffset":"0.033366s"
               },
               {
                  "startTimeOffset":"5.071733s",
                  "endTimeOffset":"7.040366s"
               }
            ],
            "objectAnnotations":[
               {
                  "confidence":0.521750,
                  "entity":{
                     "entitiyId":"/m/01g317",
                     "description":"person",
                     "languageCode":"en-US"
                  },
                  "frames":[
                     {
                        "normalizedBoundingBox":{
                           "left":0.376134,
                           "top":0.171812,
                           "right":0.582170,
                           "bottom":0.534790
                        },
                        "timeOffset":"0.000000s"
                     }
                  ],
                  "segment":{
                     "startTimeOffset":"31.197833s",
                     "endTimeOffset":"31.197833s"
                  }
               },
               {
                  "confidence":0.616842,
                  "entity":{
                     "entitiyId":"/m/01mzpv",
                     "description":"chair",
                     "languageCode":"en-US"
                  },
                  "frames":[
                     {
                        "normalizedBoundingBox":{
                           "left":0.892399,
                           "top":0.470457,
                           "right":0.995089,
                           "bottom":0.717162
                        },
                        "timeOffset":"0.000000s"
                     }
                  ],
                  "segment":{
                     "startTimeOffset":"31.197833s",
                     "endTimeOffset":"31.197833s"
                  }
               }
            ],
            "__v":0
         },
         "index":0,
         "name":"live_stream",
         "slug":"live_stream",
         "src":"",
         "type":"Live"
      }
   }
}
```

