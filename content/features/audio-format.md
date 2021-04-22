+++
title = "Audio Format"
weight = "1"
+++

# Audio Format

The Nobrolla API Audio Format feature analyzes the audio of a video and returns the detected format
+ 5.1
+ 5.1 Mono
+ 5.1 Stereo.1
+ Stereo 5.1.1
+ Stereo Mono
+ Stereo Pairs

## Request JSON body

```JSON
{
    "inputUri": "input-uri",
    "features":["AUDIO_FORMAT"],
    "videoContext":{
        "audioFormatConfig":{
            "enabled":boolean,
            "compressed_channels":[0,1,..]
        }
    }
}
```
## Options

|Attribute|Type|Default|Description|
|---------|----|-------|-----------|
|enabled|boolean|false|**required if no other options are present** enable this feature|
|compressed_channels|[num,num,...]|[*empty array*]|Array of channels to allow compressed audio|

## alarmSettings Options

Include an alarmSettings object in the audioFormatConfig object to run audioFormat as an alarm on a job.

|Attribute|Type|Description|
|---------|----|-----------|
|sensitivity|float| The severity of an event at which an alarm is triggered|
|secsInAlarmDuration|int| How long in seconds an event has been going before generating an alert|
|enabled|boolean| Enable this alarm **required, default: false**|
|allowCompressedAudio|Bit mask field| Detects compressed audio on specified channels. A value of 0 turns off compressable audio on all channels, a value of 255 allows compressed audio on all channels.|
|allowableAudioFormat|Bit mask field| Allowable audio formats. A value of 0 represents no audio formats allowed, a value of 255 allows all formats.|

### allowableAudioFormat bit mask table

|Audio Format| Mask Value|
|------------|------|
|5.1|b00000001|
|5.1 Stereo|b00000010|
|Stereo 5.1|b00000100|
|Stereo SAP|b00001000|
|5.1 SAP   |b00010000|
|Stereo Pairs|b00100000|
|Mono|b01000000|
|Silent|b10000000|

## Audio Format as an Alarm

Include the alarmSettings object in the audioFormatConfig object to run audioFormat as an alarm on a job

```JSON
{
    "inputUri": "input-uri",
    "features":["AUDIO_FORMAT"],
    "videoContext":{
        "audioFormatConfig":{
            "compressed_channels":[0,1,..],
            "alarmSettings":{
                "enabled": true,
                "sensitivity": 0.2,
                "secsInAlarmDuration": 210,
                "allowCompressedAudio": 3,
                "allowableAudioFormat": 15
            }
        }
    }
}
```

## Nobrolla API JSON return

|Attribute|Description|
|---------|----|
|audioFormat|The type of audio format detected|
|startTimeOffset|Time since the start of the video that this audio format begins|
|endTimeOffset|Time since the start of the video that this audio format ends|

```JSON
{
    "audioFormatAnnotations" : [
        {
         "audioFormat":"silence",
         "startTimeOffset":"0.000000s",
         "endTimeOffset":"1.968633s"
      },
      {
         "audioFormat":"mono",
         "startTimeOffset":"1.968633s",
         "endTimeOffset":"2.035366s"
      },
      {
         "audioFormat":"silence",
         "startTimeOffset":"2.035366s",
         "endTimeOffset":"3.970633s"
      },
      {
         "audioFormat":"mono",
         "startTimeOffset":"3.970633s",
         "endTimeOffset":"34.034000s"
      }
    ]
}
```