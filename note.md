___
CSS units

__Absolute units__  
Suitable for print

* __cm__ : 1cm
* __mm__ : 0.1cm
* __Q__: 0.25mm

- __in__ : 1 inch
- __pc__ : 1/6 inch
- __pt__ : 1/72 inch
- __px__ : 1/96 inch

__Relative units__  
Suitable for screen

> Relative to font

* __ch__ : width of number 0. (around 0.5em wide, 1em tall)
* __em__ : font size (width of capital M)

- __cap__ : height of capital letters
- __ex__ : x-height (around height of lowercase letters)
- __lh__ : line height

* __ic__ : width of CJK glyph 水

> Relative to root element font

* __rch__ : root ch, width of 0
* __rem__ : root em, width of M

- __rcap__ : root cap, height of capital letters
- __rex__ : root ex, height of lowercase letters
- __rlh__ : root lh, line height

* __ric__ : root ic, width of 水

> Relative to viewport

* __vw__ : 1% of viewport width
* __vh__ : 1% of viewport height
* __vmax__ : max(1vw, 1vh)
* __vmin__ : min(1vw, 1vh)

- __vi__ : 1% of inline axis viewport size
- __vb__ : 1% of block axis viewport size

1. __Default viewport unit__ : (v*) Depending on browser, can be small / large / intermediate / dynamic viewport unit

2. __Small viewport unit__ : (sv*) Optimized for when browser menus are expanded

3. __Large viewport unit__ : (lv*) Optimized for when
   browser menus are retracted

4. __Dynamic viewport unit__ : (dv*) Optimized for both when browser menus are expanded and retracted. May cause resize
   while scrolling

> Relative to container query

* __cqw__ : 1% of query container width
* __cqh__ : 1% of query container height
* __cqmax__ : max(cqw, cqh)
* __cqmin__ : min(cqw, cqh)

- __cqi__ : 1% of inline axis query container size
- __cqb__ : 1% of block axis query container size

---
CSS container types

__container-type: value;__

* When non-direct parent needs to be queried, container must have a name.

__container-name: value;__

> Size context

* __normal__ (default) : No size query, only for style query
    * Style query example: <br/> __Parent__ <br/> style = { --some-key: some-value; } <br/> __Child__ @container style(
      --some-key: some-value) {}
* __inline-size__ : Inline axis size, style, layout. <br/> Size can be computed in isolation ignoring child elements
* __size__ : Both inline and block axis size, style, layout. <br/> Size can be computed in isolation ignoring child
  elements
    * Size query example: <br/> __Parent__ <br/> container-type: size; <br/> __Child__ <br/> @container (inline_size <=
      150px)
      and (300px <= block_size <= 450px) {}
        - __width__
        - __height__
        - __inline-size__
        - __block-size__
        - __aspect-ratio__ : (width / height)
        - __orientation__ : (portrait if height >= width, otherwise landscape)

> Scroll-state context (Can be combined with Size context)

* __scroll-state__ : Size cannot be computed in isolation
    - __Stuck__:
        - Syntax: <br/> __Parent__ <br/> container-type: scroll-state; <br/> __Child__ <br/> @container scroll-state((
          stuck: left) and (stuck : top)) {}
        - Valid values: none, top, right, bottom, left, <br/> block-start, inline-start, block-end, inline-end
        - Usage: Detects when a sticky container element is stuck in some direction

    - __Snapped__:
        - Syntax: <br/> __Grandparent__ <br/> scroll-snap-type: x mandatory; <br/> __Parent__ <br/> scroll-snap-align:
          center; <br/> container-type: scroll-state; <br/> __Child__ <br/> @container scroll-state(snapped: x) {}
        - Valid values: none, x, y, block, inline
        - Usage: Detects when a snappy scroll context like a carousel is focusing on this target or not

    - __Scrollable__:
        - Syntax: <br/> __Parent__ <br/> container-type: scroll-state size; <br/> __Child__ <br/> @container
          scroll-state(scrollable: top) {} <br/> @container scroll-state(scrollable: bottom) {}
        - Valid values: none, top, right, bottom, left, <br/> block-start, inline-start, block-end, inline-end, <br/>
          block, inline, x, y
        - Usage: Detects if there is left over scrollable space in the direction

---
CSS layer rule
> @layer reset, default, utilities, overrides;
>
> /* importance increases -> */

> @import url('some-style.css') layer(overrides.some-style);
>
> /* import stylesheet into a layer */

Cascade order (bottommost & rightmost style in the order wins)

> top style - bottom style - :where(), * - ::pseudo, element - :pseudo, .class, [attr] - #ID - first layer - last
> layer - no-layer styles - !important no-layer styles - !important last layer - !important first layer - inline
> styles -
> shadow - host - !important host - !important shadow - browser - user - author - !important author - !important
> user - !
> important browser