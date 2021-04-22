+++
title = "Caption Language"
+++

# Caption Language

The Nobrolla API Caption Language feature detects the language used in closed captioning. It can analyze and return up to four services of closed captioning

## Request JSON body

```JSON
{
    "inputUri": "input-uri",
    "features":["CAPTION_LANGUAGE"],
    "videoContext":{
        "captionLanguageConfig":{
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

Include an alarmSettings object in the captionLanguageConfig object to run spokenLanguage as an alarm on a job.


|Attribute|Type|Description|
|---------|----|-----------|
|sensitivity|float| The severity of an event at which an alarm is triggered|
|secsInAlarmDuration|int| How long in seconds an event has been going before generating an alert|
|enabled|boolean| Enable this alarm **required, default: false**|
|maskAllowableLanguages|Array of bit masks| An array of bit masks, with one bit mask per service, of which there are up to four services. A value of 3 in the array listens for english and spanish. A value of 0 in the array doesn't listen for any language.|

## maskAllowableLanguages Bit Mask Table

|Language| Mask Value |
|--------|------------|
|English|b01|
|Spanish|b10|

## Spoken Language as an Alarm
```JSON
{
    "inputUri": "input-uri",
    "features":["CAPTION_LANGUAGE"],
    "videoContext":{
        "captionLanguageConfig":{
            "alarmSettings":{
            "enabled": true,
            "sensitivity": 0.2,
            "secsInAlarmDuration": 210,
            "maskAllowableLangauges": [3,3,3,3],
        }
    }
}
```

## Nobrolla API JSON return

|Attribute|Description|
|---------|-----------|
|language |The most probable language|
|en|Likelyhood of english|
|es|Likelyhood of spanish|
|confidence|Strength with which the machine learning algorithm believes itself to be correct|
|timeOffset|Time since the start of the video that this annotation applies. Subsequent annotations are points where the language has likely changed|

```JSON
{
    "captionLanguageAnnotations" : [
        {

            "timeOffset" : "14.047366s",
            "services" : [
                {
                    "language" : "en",
                    "en" : 0.9588,
                    "es" : 0.0039,
                    "confidence" : 0.0096
                },
                {
                    "language" : "en",
                    "en" : 0.9588,
                    "es" : 0.0039,
                    "confidence" : 0.0096
                },
                {
                    "language" : "en",
                    "en" : 0.9588,
                    "es" : 0.0039,
                    "confidence" : 0.0096
                },
                {
                    "language" : "en",
                    "en" : 0.9588,
                    "es" : 0.0039,
                    "confidence" : 0.0096
                },
            ]
        },
        {
            "timeOffset" : "16.047366s",
            "services" : [
                {
                    "language" : "en",
                    "en" : 0.9588,
                    "es" : 0.0039,
                    "confidence" : 0.0096
                },
                {
                    "language" : "en",
                    "en" : 0.9588,
                    "es" : 0.0039,
                    "confidence" : 0.0096
                },
                {
                    "language" : "en",
                    "en" : 0.9588,
                    "es" : 0.0039,
                    "confidence" : 0.0096
                },
                {
                    "language" : "en",
                    "en" : 0.9588,
                    "es" : 0.0039,
                    "confidence" : 0.0096
                },
            ]
        }
    ]
}
```