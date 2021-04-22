
//core config
const core = {
    "name": string,
    "slug": string,
    "coreNumber":int,
    "type":"file_once", //file_once, dir_poll, live
    "inputType":"asi", //req if live asi, sdi
    "device":int, //req if live
    "channel":int, //req if live
    "index":int
}

//will build "source" and return on GET, POST, PUT
//cannot add or delete a core


//workflow config
const wf = {

}

//job description
const job ={

}

//response from job
const jobResponse={

}

