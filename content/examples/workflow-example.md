+++
title = "Workflow Example"
+++

# Workflow example

A `workflow` is a preset configuration that can be applied to jobs. Workflows can save time and work when many videos need to be processed with the same configuration, or when a preset configuration is used often.

## Creating a workflow

Create a new workflow by doing a `POST` call to a Gentoo device. The body of the call *must* contain a name, which must be unique, an index, which must be unique, and a `videoContext` object. Instead of an array of features, features are included by adding the corresponding config object for the desired features.

```JAVASCRIPT

function createWorkflow(){
    var workflow = {
        name:"my-workflow",
        videoContext:{
            priority:20,
            index:2,
            audioFormatConfig:{
                compressed_channels:[0,1,2]
            }
        }
    }

    var url='https://[ip]/api/ai/workflows'

    $.ajax({
        type:"POST",
        url:url,
        data:JSON.stringify(job),
        contentType:"application/json",
        success: function(response){
            console.log(response)
        }
    })
}

```

The `POST` will return an object with information about the workflow.

```JSON
{
    "index": 2,
    "_id": "5fd936cd84879f63d83d54c4",
    "name":"my-workflow",
    "videoContext": {
        "priority":20,
        "audioFormatConfig":{
                "compressed_channels":[0,1,2]
            }
    }
}
```
## Using a workflow

Once a workflow has been created it can be used to initiate a job without having to include an array of features or a videoContext object every time a job is initiated. 

```JAVASCRIPT
function startJobWithWorkflow(){
    var job = {
        inputUri:"/myfiles/movie.mp4",
        workflow:"my-workflow",
        origin:"example_page"
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

## Editing a workflow

A `PUT` call can be used to edit an existing workflow

```JAVASCRIPT

function editWorkflow(){
    var workflow = {
        name:"my-workflow",
        videoContext:{
            priority:20,
            index:2,
            inBlackConfig:{
                black_value:0.02
            }
        }
    }

    var url='https://[ip]/api/ai/workflows/my-workflow'

   fetch(url, {
        method:'PUT',
        body:JSON.stringify(job)
    })
    .then(res => res.json())
    .then(json => console.log(json))
}

```

The `PUT` call will send a response with the updated workflow

```JSON
{
    "name":"my-workflow",
    "index":2,
    "videoContext":{
        "priority":20,
        "index":2,
        "inBlackConfig":{
            "black_value":0.02
        }
    }
}
```
