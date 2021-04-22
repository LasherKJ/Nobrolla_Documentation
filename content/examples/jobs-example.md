+++
title = "Jobs example"
+++

# Jobs Example

## Starting a job

Begin a job by doing a `POST` call to a Gentoo device. The body of the call must contain either a `workflow` or a `features` entry. Including a `videoContext` entry alongside `features` will define parameters for the job, otherwise default settings will be used.

```JAVASCRIPT

function startJob(){
    var job = {
        inputUri:'/myfiles/movie.mp4',
        features:['AUDIO_FORMAT'],
        origin:'example_page'
    }

    var url='https://[ip]/api/ai/jobs'
    fetch(url, {
        method:'POST',
        body:JSON.stringify(job)
    })
    .then(res => res.json())
    .then(json => console.log(json))
}

```

The response will contain a `name` entry with a unique identifier. That name field is used to return information about that job with a `GET` call.

## Retreiving information about a job

Use a `GET` call to the Gentoo device using the `name` returned by the `POST` call. the `name` value is added the end of the url.

```JAVASCRIPT

function checkJob(){

    var name = '5fd029158c82e7313614426f'
    var url='https://[ip]/api/ai/jobs/'+name

    fetch(url,{
        method:'GET'
    })
    .then(res => res.json())
    .then(json => console.log(json))
}

```

A job that is still being processed will return the status of the job as well as information about the features that were requested

```JSON
{
    "name": "5fd029158c82e7313614426f",
    "metadata": {
        "@type": "annotationProgress",
        "annotationProgress": [
            {
                "inputUri": "/myfiles/movie.mp4",
                "startTime": "2020-11-17T23:57:11.677183Z",
                "updateTime": "2020-11-17T23:57:11.677183Z",
                "feature": "AUDIO_FORMAT"
            }
        ]
    }
}

```

A completed job will return the annotation results

```JSON
{
    "name": "5fd029158c82e7313614426f",
    "status":"done",
    "TTL":30,
    "workflow":"testRun",
    "metadata":{
        "@type": "annotationProgress",
        "annotationProgress":[
         {
            "inputUri": "/myfiles/movie.mp4",
            "startTime":"2020-12-09T01:32:05.304Z",
            "updateTime":"2020-12-09T01:32:31.458Z",
            "progressPercent":100
         }
      ]
    },
    "done":true,
    "response":{
        "inputUri":"/myfiles/movie.mp4",
        "recording":"5fd028d00afd0a5e5a77e2d2",
        "audioFormatAnnotations":[
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
        ]
    }
}
```

## Starting a job using a workflow

To use a predisigned set of features and parameters, use a `workflow` in the `POST` call instead of a list of features and videoConfig.

```JAVASCRIPT

function startJobWithWorkflow(){
    var job = {
        inputUri:'/myfiles/movie.mp4',
        workflow:'workflow-1',
        origin:'example_page'
    }

    var url='https://[ip]/api/ai/jobs'
    fetch(url, {
        method:'POST',
        body:JSON.stringify(job)
    })
    .then(res => res.json())
    .then(json => console.log(json))
}

```

The returns for the job will be the same as using a list of features.

## Retreiving a list of all jobs

Doing a `GET` call without a job name will return a list of all jobs stored in the Gentoo database with an object of information about each job.

```JAVASCRIPT

function viewAllJobs(){

    var url='https://[ip]/api/ai/jobs'

    fetch(url,{
        method:'GET'
    })
    .then(res => res.json())
    .then(json => console.log(json))
}

```
This will return an array like this

```JSON

[
    {
        "origin": "dashboard",
        "status": "cancelled",
        "_id": "5fca8d08668d680d0bcafc0d",
        "inputUri": "file://test.mp4",
        "workflow": "jktest",
        "insertTime": "2020-12-04T19:24:56.728Z"
    },
    {
        "origin": "dashboard",
        "status": "cancelled",
        "_id": "5fca8d08668d680d0bcafc0d",
        "inputUri": "file://test.mp4",
        "workflow": "jktest",
        "insertTime": "2020-12-04T19:24:56.728Z"
    }
]

```