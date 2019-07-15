![](https://user-images.githubusercontent.com/212941/59181635-c0b5dd00-8b1c-11e9-8224-3eecefc08713.png)
# 👋 Meet Directbot
Meet the Directbot. Up, down, left, right—patterns emerge if you follow the sequence.

With an endless stream of directions, you can do anything you want—draw lines on screen, control a character, provide random behavior for characters in your game, or even use it as the basis for your own version of Beat Saber (or Guitar Hero for you old schoolers).

The Directbot has a lot to say, but it's also a good listener. If you tell it a pattern ('up', 'up', 'down', 'down', 'left', 'right', 'left', 'right') it will give you up to a thousand coordinates that follow the pattern. You can pass patterns to draw hearts, space invaders, or any other pixel art you can fit into a thousand instructions. 👾

## ↗ What can you do?

First, request a set of directions:

`GET https://api.noopschallenge.com/directbot?count=25`

```
{
  "directions": [
    { "direction": "down", "distance": 73, "speed": 58 },
    { "direction": "right", "distance": 58, "speed": 69 },
    { "direction": "down", "distance": 42, "speed": 12 },
    { "direction": "right", "distance": 51, "speed": 84 },
    ...
    { "direction": "down", "distance": 35, "speed": 14 }
  ]
}
```

Then draw them on screen for a nice, minimal composition:

![](https://user-images.githubusercontent.com/212941/59218324-dc4cd200-8b74-11e9-8995-b22e7fd49dd4.png)

Using the code in the starter, you can then layer more lines on top of each other for a cross-hatched effect:

![thatch-buildup](https://user-images.githubusercontent.com/212941/59218515-4a919480-8b75-11e9-93aa-af4a1a27815c.gif)

Try varying the line width, opacity, and colors for even neater effects. 💯

But that's just the start.

If you pass `connected=1` with your request, Directbot will chain all the lines together:

`GET https://api.noopschallenge.com/directbot?count=1000&connected=1`

![](https://user-images.githubusercontent.com/212941/59222940-90ebf100-8b7f-11e9-9ddb-d4f639899cfb.png)

And if you pass a `pattern` with your request, Directbot will chain the lines together following the pattern:

`GET https://api.noopschallenge.com/directbot?count=60&pattern=invader`

![](https://user-images.githubusercontent.com/212941/59222403-41f18c00-8b7e-11e9-8ee5-b7d11042af47.png)

We've included a few pre-built patterns (below), but you can pass your own sequences like this:

`GET https://api.noopschallenge.com/directbot?count=12&pattern=right,up,right,down,right,down,left,down,left,up,left,up`

![](https://user-images.githubusercontent.com/212941/59223122-ff30b380-8b7f-11e9-905e-3afa3477f799.png)

Directbot will accept up to **1,000** directions, so you can draw some pretty complicated pixel art.


## ✨ A few ideas

**Draw the lines.** Gotta start somewhere. Drawing the directions is a straightforward exercise in learning how to render graphics on-screen. Choose a random point on screen and draw a line of `distance` in `direction`. Try varying line weight, colors, or experimenting with curving to the end point instead of a straight line. When you've mastered that, try animating the line from point A to point B.

**Animate the directions:** Easy peasy. Wouldn't it be adorable to send a little hero skittering across the screen based on the random whims of the Directbot? A great opportunity to play with game mechanics: facing your character in the right direction, boundary detection, animation, and (potentially) mouse interaction. Wouldn't it be even better if your little hero **wanted** to go "down 32pixels" but she was blocked by the user or obstacles you put on the level?

**Pattern maker:** Directbot doesn't just give orders, it takes them. You can pass up to 1,000 directions to the API, and it will return the coordinates for them. With a little randomization, you can make very interesting overlaid patterns. Two neat things you could do: create an editor for making patterns, and create a way for people to share them.

**Make a Magic 8-ball:** Sure, Directbot tells you "up", "down", "left", "right", but who is to say you can't remap those to "Yes", "No", "Maybe", "Try again" or, if you want to add more options, take into consideration whether the distance or speed is above or below 50. Now you have 8 options—or 400. That's a heckuva Magic 8-ball. 🎱


## 🤖 API basics

There's a single endpoint: `api.noopschallenge.com/directbot`

The endpoint accepts 6 parameters, all optional:

- **count** *(optional, numeric)*: Between 1 and 1000. Number of colors to return.
- **width** *(optional, numeric)*: Between 10 and 100,000. Maximum width of returned points.
- **height** *(optional, numeric)*: Between 10 and 100,000. Maximum height of returned points.
- **speed** *(optional, numeric)*: Between 1 and 1000. Maximum speed passed with direction.
- **connected** *(optional, numeric)*: 0 or 1. Numeric boolean that defines whether coordinates are connected.
- **pattern** *(optional, string)*:  One of our preset patterns (chevron, diamond, plus, zig-zag) or a comma separated list of directions, up to 1000. If you submit an invalid direction or pattern, you'll receive an error instead of more beautiful directions.

Preset patterns: chevron, diamond, invader, konami, plus, zigzag.

Pass a pattern name in the <code>pattern</code> parameter to receive that pattern's coordinates back.

The endpoint returns a JSON object with an array named `directions` of *n* length. Each item in the `directions` array is an object with the property `direction`, `distance`, and `speed`. If `connected=1` or `pattern` is not null, each item will also have a `coordinates` object that has `x` and `y` properties.

### Get a single direction

`GET /directbot`

```
{
  "directions": [
    { "direction": "up", "distance": 96, "speed": 97 }
  ]
}
```

### Get multiple directions

`GET https://api.noopschallenge.com/directbot?count=5`

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

### Pass a custom pattern

`GET https://api.noopschallenge.com/directbot?count=4&pattern=up,left,left,down`

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
    }
  ]
}
```

Complete API documentation: [API.md](./API.md)

More about Directbot here: https://noopschallenge.com/challenges/directbot