+++
title = "Live Jobs Example"
+++

# Live jobs example

When a core is configured to be watching a live video, jobs can still be assigned to it via the workflow. One main difference is that the job will no longer return annotations, it will only return live information and record alarms. For this reason it is best to assign a workflow with alarms configured.

In order to return live information from the job a websocket has to be created.

```JAVASCRIPT

var webSocketExample = new Websocket("wss://[ip]:9002")
websocket.onmessage = function (event) {
    console.log(event.data)
}

```
This will return live information about every core. To narrow the scope of the data, a `GET` call will list all cores, and which ones are live video.

```JAVASCRIPT

function getCoreList(){
    
    var url='https://[ip]/api/config/cores'
    fetch(url,{
        method:'GET'
    })
    .then(res => res.json())
    .then(json => console.log(json))
}
```

This `getCoreList` function will return a list of cores

```JSON
[    {
        "index": 0,
        "_id": "5fcaa8e9ad806e599a8767d3",
        "name": "core-1",
        "slug": "core-1",
        "coreNumber": 1,
        "type": "file_once",
        "source": "clipPlayer-2",
        "__v": 0
    },
    {
        "index": 1,
        "_id": "5fcaa8e9ad806e599a8767d3",
        "name": "core-2",
        "slug": "core-2",
        "coreNumber": 2,
        "type": "live",
        "source": "clipPlayer-4",
        "__v": 0
    }
]

```
The core with `"type":"live"` is the one running a live job. Using the `name` entry of the core, select just that core from the JSON received from the websocket

```JAVASCRIPT
var webSocketExample = new Websocket("wss://[ip]:9002")
websocket.onmessage = function (event) {
    var liveData = event.data.cores["core-2"]
    console.log(liveData)
}

```

The websocket will send a block of JSON every tenth of a second

