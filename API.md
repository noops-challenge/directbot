
## Directbot API


### Get a single direction

`GET https://api.noopschallenge.com/directbot`

`HTTP 200`

```
{
  "directions": [
    { "direction": "up", "distance": 96, "speed": 97 }
  ]
}
```


### Get multiple directions

`GET https://api.noopschallenge.com/directbot?count=5`

`HTTP 200`

```
{
  "directions": [
    { "direction": "down", "distance": 73, "speed": 58 },
    { "direction": "right", "distance": 58, "speed": 69 },
    { "direction": "down", "distance": 42, "speed": 12 },
    { "direction": "right", "distance": 51, "speed": 84 },
    { "direction": "down", "distance": 35, "speed": 14 }
  ]
}
```


### Set a max speed and distance

`GET https://api.noopschallenge.com/directbot?count=5&speed=5&distance=10`

`HTTP 200`

```
{
  "directions": [
    { "direction": "left", "distance": 10, "speed": 2 },
    { "direction": "down", "distance": 10, "speed": 2 },
    { "direction": "right", "distance": 10, "speed": 2 },
    { "direction": "down", "distance": 10, "speed": 1 },
    { "direction": "up", "distance": 10, "speed": 4 }
  ]
}
```


### Require lines to be connected

`GET https://api.noopschallenge.com/directbot?count=5&connected=1`

`HTTP 200`

```
{
  "directions": [
    {
      "coordinates": {
        "a": { "x": 84, "y": 577 },
        "b": { "x": 84, "y": 609 }
      },
      "direction": "up",
      "distance": 32,
      "speed": 6
    },
    {
      "coordinates": {
        "a": { "x": 84, "y": 609 },
        "b": { "x": 91, "y": 609 }
      },
      "direction": "right",
      "distance": 7,
      "speed": 42
    },
    {
      "coordinates": {
        "a": { "x": 91, "y": 609 },
        "b": { "x": 135, "y": 609 }
      },
      "direction": "right",
      "distance": 44,
      "speed": 10
    },
    {
      "coordinates": {
        "a": { "x": 135, "y": 609 },
        "b": { "x": 135, "y": 620 }
      },
      "direction": "up",
      "distance": 11,
      "speed": 86
    },
    {
      "coordinates": {
        "a": { "x": 135, "y": 620 },
        "b": { "x": 135, "y": 569 }
      },
      "direction": "down",
      "distance": 51,
      "speed": 39
    }
  ]
}
```


### Pass a preset pattern

`GET https://api.noopschallenge.com/directbot?count=20&pattern=chevron`

`HTTP 200`

```
{
  "directions": [
    {
      "coordinates": {
        "a": { "x": 764, "y": 191 },
        "b": { "x": 764, "y": 268 }
      },
      "direction": "up",
      "distance": 77,
      "speed": 96
    },
    {
      "coordinates": {
        "a": { "x": 764, "y": 268 },
        "b": { "x": 783, "y": 268 }
      },
      "direction": "right",
      "distance": 19,
      "speed": 49
    },
    {
      "coordinates": {
        "a": { "x": 783, "y": 268 },
        "b": { "x": 783, "y": 291 }
      },
      "direction": "up",
      "distance": 23,
      "speed": 66
    },
    {
      "coordinates": {
        "a": { "x": 783, "y": 291 },
        "b": { "x": 794, "y": 291 }
      },
      "direction": "right",
      "distance": 11,
      "speed": 78
    },
    {
      "coordinates": {
        "a": { "x": 794, "y": 291 },
        "b": { "x": 794, "y": 300 }
      },
      "direction": "up",
      "distance": 9,
      "speed": 32
    },
    {
      "coordinates": {
        "a": { "x": 794, "y": 300 },
        "b": { "x": 808, "y": 300 }
      },
      "direction": "right",
      "distance": 14,
      "speed": 21
    },
    {
      "coordinates": {
        "a": { "x": 808, "y": 300 },
        "b": { "x": 808, "y": 202 }
      },
      "direction": "down",
      "distance": 98,
      "speed": 21
    },
    {
      "coordinates": {
        "a": { "x": 808, "y": 202 },
        "b": { "x": 863, "y": 202 }
      },
      "direction": "right",
      "distance": 55,
      "speed": 70
    },
    {
      "coordinates": {
        "a": { "x": 863, "y": 202 },
        "b": { "x": 863, "y": 117 }
      },
      "direction": "down",
      "distance": 85,
      "speed": 90
    },
    {
      "coordinates": {
        "a": { "x": 863, "y": 117 },
        "b": { "x": 911, "y": 117 }
      },
      "direction": "right",
      "distance": 48,
      "speed": 53
    },
    {
      "coordinates": {
        "a": { "x": 911, "y": 117 },
        "b": { "x": 911, "y": 36 }
      },
      "direction": "down",
      "distance": 81,
      "speed": 56
    },
    {
      "coordinates": {
        "a": { "x": 911, "y": 36 },
        "b": { "x": 1008, "y": 36 }
      },
      "direction": "right",
      "distance": 97,
      "speed": 78
    },
    {
      "coordinates": {
        "a": { "x": 1008, "y": 36 },
        "b": { "x": 1008, "y": 93 }
      },
      "direction": "up",
      "distance": 57,
      "speed": 64
    },
    {
      "coordinates": {
        "a": { "x": 1008, "y": 93 },
        "b": { "x": 1049, "y": 93 }
      },
      "direction": "right",
      "distance": 41,
      "speed": 23
    },
    {
      "coordinates": {
        "a": { "x": 1049, "y": 93 },
        "b": { "x": 1049, "y": 145 }
      },
      "direction": "up",
      "distance": 52,
      "speed": 98
    },
    {
      "coordinates": {
        "a": { "x": 1049, "y": 145 },
        "b": { "x": 1144, "y": 145 }
      },
      "direction": "right",
      "distance": 95,
      "speed": 26
    },
    {
      "coordinates": {
        "a": { "x": 1144, "y": 145 },
        "b": { "x": 1144, "y": 150 }
      },
      "direction": "up",
      "distance": 5,
      "speed": 34
    },
    {
      "coordinates": {
        "a": { "x": 1144, "y": 150 },
        "b": { "x": 1206, "y": 150 }
      },
      "direction": "right",
      "distance": 62,
      "speed": 18
    },
    {
      "coordinates": {
        "a": { "x": 1206, "y": 150 },
        "b": { "x": 1206, "y": 89 }
      },
      "direction": "down",
      "distance": 61,
      "speed": 7
    },
    {
      "coordinates": {
        "a": { "x": 1206, "y": 89 },
        "b": { "x": 1232, "y": 89 }
      },
      "direction": "right",
      "distance": 26,
      "speed": 20
    }
  ]
}
```


### Pass a custom pattern

`GET https://api.noopschallenge.com/directbot?count=20&pattern=up,left,left,down`

`HTTP 200`

```
{
  "directions": [
    {
      "coordinates": {
        "a": { "x": 818, "y": 925 },
        "b": { "x": 818, "y": 973 }
      },
      "direction": "up",
      "distance": 48,
      "speed": 52
    },
    {
      "coordinates": {
        "a": { "x": 818, "y": 973 },
        "b": { "x": 738, "y": 973 }
      },
      "direction": "left",
      "distance": 80,
      "speed": 1
    },
    {
      "coordinates": {
        "a": { "x": 738, "y": 973 },
        "b": { "x": 721, "y": 973 }
      },
      "direction": "left",
      "distance": 17,
      "speed": 43
    },
    {
      "coordinates": {
        "a": { "x": 721, "y": 973 },
        "b": { "x": 721, "y": 897 }
      },
      "direction": "down",
      "distance": 76,
      "speed": 44
    },
    {
      "coordinates": {
        "a": { "x": 721, "y": 897 },
        "b": { "x": 721, "y": 927 }
      },
      "direction": "up",
      "distance": 30,
      "speed": 4
    },
    {
      "coordinates": {
        "a": { "x": 721, "y": 927 },
        "b": { "x": 699, "y": 927 }
      },
      "direction": "left",
      "distance": 22,
      "speed": 16
    },
    {
      "coordinates": {
        "a": { "x": 699, "y": 927 },
        "b": { "x": 610, "y": 927 }
      },
      "direction": "left",
      "distance": 89,
      "speed": 12
    },
    {
      "coordinates": {
        "a": { "x": 610, "y": 927 },
        "b": { "x": 610, "y": 863 }
      },
      "direction": "down",
      "distance": 64,
      "speed": 40
    },
    {
      "coordinates": {
        "a": { "x": 610, "y": 863 },
        "b": { "x": 610, "y": 871 }
      },
      "direction": "up",
      "distance": 8,
      "speed": 57
    },
    {
      "coordinates": {
        "a": { "x": 610, "y": 871 },
        "b": { "x": 556, "y": 871 }
      },
      "direction": "left",
      "distance": 54,
      "speed": 74
    },
    {
      "coordinates": {
        "a": { "x": 556, "y": 871 },
        "b": { "x": 551, "y": 871 }
      },
      "direction": "left",
      "distance": 5,
      "speed": 67
    },
    {
      "coordinates": {
        "a": { "x": 551, "y": 871 },
        "b": { "x": 551, "y": 783 }
      },
      "direction": "down",
      "distance": 88,
      "speed": 50
    },
    {
      "coordinates": {
        "a": { "x": 551, "y": 783 },
        "b": { "x": 551, "y": 798 }
      },
      "direction": "up",
      "distance": 15,
      "speed": 31
    },
    {
      "coordinates": {
        "a": { "x": 551, "y": 798 },
        "b": { "x": 515, "y": 798 }
      },
      "direction": "left",
      "distance": 36,
      "speed": 50
    },
    {
      "coordinates": {
        "a": { "x": 515, "y": 798 },
        "b": { "x": 496, "y": 798 }
      },
      "direction": "left",
      "distance": 19,
      "speed": 14
    },
    {
      "coordinates": {
        "a": { "x": 496, "y": 798 },
        "b": { "x": 496, "y": 774 }
      },
      "direction": "down",
      "distance": 24,
      "speed": 28
    },
    {
      "coordinates": {
        "a": { "x": 496, "y": 774 },
        "b": { "x": 496, "y": 871 }
      },
      "direction": "up",
      "distance": 97,
      "speed": 93
    },
    {
      "coordinates": {
        "a": { "x": 496, "y": 871 },
        "b": { "x": 456, "y": 871 }
      },
      "direction": "left",
      "distance": 40,
      "speed": 46
    },
    {
      "coordinates": {
        "a": { "x": 456, "y": 871 },
        "b": { "x": 433, "y": 871 }
      },
      "direction": "left",
      "distance": 23,
      "speed": 2
    },
    {
      "coordinates": {
        "a": { "x": 433, "y": 871 },
        "b": { "x": 433, "y": 776 }
      },
      "direction": "down",
      "distance": 95,
      "speed": 19
    }
  ]
}
```

*Note: this file is automatically generated during test runs*
