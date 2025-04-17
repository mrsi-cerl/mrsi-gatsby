## Site Alert Documentation

You can schedule and add site alerts in the site alert JSON file located at [/src/content/Site Alert/alert.json](../src/content/Site%20Alert/alert.json)

You can add as many alert objects into this JSON file and the site will show all alerts where the current time is between `startDate` and `endDate`

## Alert Object Values

- `startDate`:
  - the start time for when to show the alert
  - format: HH:mm MM/DD/YYYY
    - HH is 24 hour
- `endDate`:
  - the end time for when to show the alert
  - format: HH:mm MM/DD/YYYY
    - HH is 24 hour
- `message`:
  - the message to display in the alert
  - you can make the message multi-line by inserting `<br/>` when you want a newline
- `title`:
  - the title to display in the alert
- `level`:
  - the color/styling of the alert
  - options are:
    - `error` (red)
    - `warning` (yellow)
    - `success` (green)
    - `info` (blue)

# Examples

```
[
  {
    "startDate": "10:05  10/01/2019",
    "endDate": "10:05  10/05/2019",
    "message": "TESTING",
    "level": "error",
    "title": "Error status"
  },
  {
    "startDate": "10:05  10/01/2019",
    "endDate": "10:05  10/05/2019",
    "message": "TESTING",
    "level": "info",
    "title": "Informative status"
  },
  {
    "startDate": "10:05  10/01/2019",
    "endDate": "10:05  10/05/2019",
    "message": "TESTING <br/> <br/> newline",
    "level": "success",
    "title": "Success status"
  },
  {
    "startDate": "10:05  10/01/2019",
    "endDate": "10:05  10/05/2019",
    "message": "TESTING",
    "level": "warning",
    "title": "Warning status"
  }
]
```

insert image of the above examples here
