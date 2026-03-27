<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="YBAÑEZ, Raiza Leigh A." />
  <meta name="revised" content="3/27/2026" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
       position: fixed; 
       bottom: 0; 
       width: 100%;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
      position: relative; 
      top: 24px; 
      left: 3182px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
      position: absolute; 
      top: 66px; 
      left: 200px;
      z-index: 1;
    }    
    .notice {
        position: absolute;
        top: 60px;
        left: 400px;
        background: orange;
        padding: 10px;
        z-index: 2;
    }
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
  <div class="notice">Notice!</div>
</body>
</html>
```

### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

#### when i added position: relative; top: 20px; left: 20px; to .sidebar, the sidebar moved 20px down and 20px to the right from its original position.
- compared to static:
*       static = default, cannot be moved using top/left
*       relative = moves from its original position, but still keeps its original space.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

#### when i added position: fixed; bottom: 0; width: 100%; to .footer, the footer stays at the bottom of the screen even when i scroll.
#### why is it different?
*       fixed = attached to the screen (viewport)
*       relative = moves based on its original position in the page
- so basically, the footer behaves differently because it is no longer part of the normal page flow.SS

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

#### when i used added position: absolute; to .content, it moves to a specific position which is top: 66px; and left: 200px; and it is removed from the normal layout
#### why is it different?
*       absolute = positioned relative to its nearest positioned parent
*       fixed = positioned relative to the screen

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

#### the notice appears on top because .notice has a z-index: 2 while .content has a z-index: 1.
*       higher z-index = appears in front
#### what happens if you swap them?
- .content will cover .notice

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
    * Try to change the position of .content to relative then to fixed. What do you observed each time?
    * What do you observe on about the effect of z-index on .notice and .content boxes?

#### Challenge 1: 
```css
.content {
    position: relative;
    z-index: 1;
}

.notice {
    position: absolute;
    top: 0px;
    right: 0px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

```html
<div class = "content">
    Main Content
    <div class = "notice">Notice!</div>
</div>
```

#### Challenge 2 & 3:
*       if .content is relative --> .notice stays inside it
*       if .content is fixed --> .notice moves with it on screen
*       z-index controls which element is on top.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 

    -       static: default, no movement
    -       relative: moves from original position
    -       absolute: positioned based on its parent
    -       fixed: stays on screen even when scrolling

    b. How does absolute positioning depend on its parent element?

    -       absolute depends on the nearest parent with position (relative/absolute/fixed)
    -       if none, it uses the whole page (body)

    c. How do you differentiate sticky from fixed (you can research on sticky)?

    -       fixed: always stay in one place
    -       sticky: it acts normal until you scroll, then it sticks

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.

    -       relative: adjust layout spacing
    -       absolute: badges like "NEW!!" on announcements web pages 
    -       fixed: navigation bar that stays on top
    -       z-index: make important announcements appear on top