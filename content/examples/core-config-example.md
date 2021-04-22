+++
title = "Core Configuration"
+++

# Core Configuration

A Gentoo system will come with the cores setup in a generic configuration. A `GET` call can be used to list all of the available cores.

````Javascript

function listCores(){
     var url='https://[ip]/api/ai/cores'

    fetch(url,{
        method:'GET'
    })
    .then(res => res.json())
    .then(json => console.log(json))
}
````
 A `PUT` call can be used to change the configuration of a core. 

 ````Javascript

function changeCore(){
    var core = {
        name:"core-1",
        type:"file_once"
    }
    var url='https://[ip]/api/ai/cores/core-1'
    fetch(url,{
        method:'POST',
        body:JSON.stringify(core)
    })
    .then(res => res.json())
    .then(json => console.log(json))
}
 ````