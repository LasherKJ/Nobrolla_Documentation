+++
title = "Spoken Language"
+++

# Spoken Language

The Nobrolla API Spoken Language feature analyzes audio and detects which language is being spoken. The Spoken Language feature can also return that music, or non-language sound was detected. 

## Request JSON body

```JSON
{
    "inputUri": "input-uri",
    "features":["SPOKEN_LANGUAGE"],
    "videoContext":{
        "spokenLanguageConfig":{
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

Include an alarmSettings object in the spokenLanguageConfig object to run spokenLanguage as an alarm on a job.

|Attribute|Type|Description|
|---------|----|-----------|
|sensitivity|float| The severity of an event at which an alarm is triggered|
|secsInAlarmDuration|int| How long in seconds an event has been going before generating an alert|
|enabled|boolean| Enable this alarm **required, default: false**|
|maskAllowableLanguages|Array of bit masks| An array of bit masks, with one bit mask per channel, of which there are eight channels. A value of 7 in the array listens for english, spanish, and noise. A value of 0 in the array doesn't listen for any language.|

## maskAllowableLanguages Bit Mask Table

|Language| Mask Value |
|--------|------------|
|Noise/Music|b001|
|English|b010|
|Spanish|b100|

## Spoken Language as an Alarm
```JSON
{
    "inputUri": "input-uri",
    "features":["SPOKEN_LANGUAGE"],
    "videoContext":{
        "spokenLanguageConfig":{
            "alarmSettings":{
            "enabled": true,
            "sensitivity": 0.2,
            "secsInAlarmDuration": 210,
            "maskAllowableLangauges": 
            [
                7,
                7,
                7,
                7,
                7,
                7,
                7,
                7,
            ],
        }
    }
}
```

## Nobrolla API JSON return

|Attribute|Description|
|---------|-----------|
|Channels|Results of the Spoken Language feature seperated into an array of audio channels|
|language |The most probable language. When `oob` is the most probable language it will return \&#x266A; (&#x266A;)|
|en|Likelyhood of english|
|es|Likelyhood of spanish|
|oob|likelyhood of music or non-language sound *eg: applause*|
|timeOffset|Time since the start of the video that this annotation applies. Subsequent annotations are points where the language has likely changed|

```JSON
{
    "spokenLanguageAnnotations" : [
            {
                "timeOffset" : "9.042366s",
                "channels" : [
                    {
                        "language" : "en",
                        "en" : 0.8972,
                        "es" : 0.0001,
                        "oob" : 0.0002
                    }, 
                    {
                        "language" : "es",
                        "en" : 0.0972,
                        "es" : 0.8001,
                        "oob" : 0.0002
                    }
                ]
            },
            {
                "timeOffset" : "14.047366s",
                "channels" : [
                    {
                        "language" : "en",
                        "en" : 0.9588,
                        "es" : 0.0039,
                        "oob" : 0.0096
                    },
                    {
                        "language" : "es",
                        "en" : 0.0588,
                        "es" : 0.8039,
                        "oob" : 0.0096
                    }
                ]
            },
        ]
    }
```