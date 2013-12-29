# Leap Impress

> Control your [Impress.js] presentations with gestures using Leap Motion.

## Usage

Once set up, you can swipe slides with your hand.<br>
It really works better when your hand is just above the Leap device, and you use 2 or 3 fingers.

Gesture recognition is disabled when slides are transitioning. This avoid jumping one slide when the framework
wrongly recognizes two swipes in a row.

## Install

1. Install `leapjs`: https://github.com/leapmotion/leapjs.
1. Include `leapjs` and `impress-leap.js` scripts after `impress.js`.
2. Add the following line: `impressLeap().init();`
3. Enjoy!

## Example

```html
<script src="js/impress.js"></script>
<script src="//js.leapmotion.com/0.2.0-beta1/leap.min.js"></script>
<script src="../src/impress-leap.js"></script>
<script>
    impress().init();
    impressLeap().init();
</script>
```

Take a look at https://github.com/ngryman/leap-impress/tree/master/example.

[Impress.js]: https://github.com/bartaz/impress.js
