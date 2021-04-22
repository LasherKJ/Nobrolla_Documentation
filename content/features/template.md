+++
title = ""
+++

# TITLE

The Nobrolla API In TITLE feature DOES THINGS

## Request JSON body

```JSON
{
    "inputUri": "input-uri",
    "features":["TITLE_GOES_HERE"],
    "options":[{"TITLE_GOES_HERE":object}]
}
```
## Options

|Attribute|Type|Default|Description|
|---------|----|-------|-----------|
|attribute|type|"default value| Description of attribute |

## Nobrolla API JSON return

```JSON
{
    "results":[
        {"titleAnnotions":[
            {"segment":
                {
                    "startTimeOffset":"12.22s",
                    "endTimeOffset":"19.19s"
                }
            }
        ]},
    ]
}
```