# Pure JavaScript Slider

## Simple Reusuable javascript slider.

HTML Structure:

```
<div class='slider'>

    <div class='slider__items'>
        <div class='slider__items--item' id='one'>Item</div>
        <div class='slider__items--item' id='two'>Item</div>
        <div class='slider__items--item' id='three'>Item</div>
        <div class='slider__items--item' id='four'>Item</div>
        <div class='slider__items--item' id='five'>Item</div>
    </div>
    
    <div class='slider__nav'>
        <button class='slider__nav--prev'><</button>
        <button class='slider__nav--next'>></button>
    </div>

</div>
```
 
 Every child element of ``.slider__items`` with the class ``.slider__items--item`` is a slide. 

 Slider navigation is created by a parent element ``.slider__nav`` with child elements ``.slider__nav--prev`` and ``.slider__nav--next`` to navigate through the slider.