## Walkthrough: Prototyping the Danebook Homepage

In this solution walkthrough, we'll rebuild the Danebook Homepage using Bootstrap, HTML5, and Sass, laid out in the <%=link_to "Danebook Homepage Assignment", lesson_path("TKTKTK") %>. Since we already created this homepage in plain-old CSS during <%= link_to "Prep Work", lesson_path("TKTKTK") %>, we're not going to try to reinvent the wheel. The key purpose of this assignment is to get used to the Bootstrap framework and learn not to fight with its often-rigid conventions. As long as you don't fight Bootstrap, you can prototype a responsive website very quickly without some of the endless tweaking of building a front-end from scratch. 

Given that purpose, Sass usage is going to be pretty minimal, because the #1 rule of using Bootstrap is "Don't fight Bootstrap." Similarly, this solution will use a little bit of semantic HTML5, but Bootstrap is older than HTML5 and pays little or no attention to semantic tags. We're on our own to make the two play nicely.


*Note: All the code for this solution is available in the [Github Repository]()*

### Never Fight the Grid

The most powerful aspect of Bootstrap is its responsive grid system, with 12 columns per row. If you follow along with its intended structure, things just *work* at all kinds of sizes. If you don't, you're going to start to wonder why you're having weird margin and wrapping problems everywhere.

Here are a few aspects of that structure:

#### One Container to Rule Them All

If you were confused about what containers are for, you don't have to be. There only needs to be one container to wrap *everything else on your page*.

Easiest way to do that?

```language-markup
<body class = "container">

</body>
```

That's it. You never have to think about containers again on this page. In my case, however, I chose to use class `container-fluid` so that the elements seamlessly expand to the width of any screen that looks at them.

#### Rows and Columns and Rows and Columns

Rows and columns can be confusing, so here are a few tips.

##### 1. Every time you make a row, make some columns inside

That's right. Every single time. Columns should always be the very next thing inside of a row. If you want columns inside of columns --and that's a very common approach to fine-grained positioning in Bootstrap -- make sure to sneak a row in between the two levels of column.

##### 2. Rows and columns don't have to be just rows and columns

Sometimes, you're nesting a whole lot of divs and elements. Sometimes a div can do double-duty, or some other semantic tag can do the duty of a div. When you're making a navbar and have decided it's a `<nav>` element, there's no rule that says you can't make it `<nav class="row">` or even `nav class = "navbar navbar-default navbar-static-top row">`.

Similarly, a `<form>` can have `class="row"` on it if you're not interested in nesting extra divs. See below for one example of that kind of double-duty. It takes trial and error to see what nestings work and which ones don't, but you get plenty of practice in lessons to come. 

```language-markup
<form role="signup" class = "row">
  <div class="col-md-12 form-group">
    <input type="email" class="form-control" id="signup-email" placeholder="Your Email">
    <input type="password" class="form-control" id="signup-password" placeholder="Enter Your Password">
    <input type="password" class="form-control" id="signup-password-confirm" placeholder="Confirm Your Password">
  </div>
</form>
```

#### Try not to mess with horizontal margins or column widths

Bootstrap is *extremely* opinionated about how its margins work horizontally. 12 columns fit in one row of any size precisely because all the margin and padding settings on containers and rows and columns are carefully orchestrated to work together. That means it's really easy to ruin the whole system by deciding you want to center a column with auto-margins or set a fixed width for your columns.

Instead, work with columns. Want some whitespace around your paragraph? Use columns and column offsets. The code below makes a section 6 columns wide and then bumps the whole thing to the right by 1 column.

```language-markup
<section class = "col-md-6 col-md-offset-1">
  <h2>Connect with all your friends!</h2>
  <ul>
      <!--list items here -->
  </ul>
</section>
```

#### Verticals are still fair game

Luckily, you can still do some tweaking with padding and verticals to make your site a little snazzier-looking.

This site managed to have almost no CSS overrides aside from setting the height and color of the navbar, as you can see below:

```language-css


/* color of the main header background*/
$danebook: #2B78E4;


.navbar-default {
    background-color: $danebook;
    color: #fff;
    border-bottom: 3px solid #333;
    min-height: 96px;
    padding-top: 20px;
    
    .navbar-header {
      a {
        color: #fff;
        font-size: 36px;
      }
    }
}

#sign-up-forms {
  form {
    input, select {
      margin-bottom: 8px;
    }
  }
}


```

#### A tip on Bootstrap selectors

A last hint here is to notice that Bootstrap is so specific about its styles that you often need to nest your CSS a couple levels deep to override it. If something in your Sass/CSS doesn't change, it's often because you don't have enough specificity to override Bootstrap defaults. This can get very annoying. A top-level ID like `#sign-up-forms` can help, as can using a selector of one class inside another.

### Takeaways

The function of Bootstrap is to turn a mockup into a working site front-end extremely quickly, not to create pixel-perfect art that makes web designers drool. If there's a built-in solution, the best thing to do is just to use it, then worry about little tweaks at the end. Doing those tweaks too early can give you a headache when you start moving things around for a redesign. More than anything, being happy with Bootstrap is about reconciling yourself to its grid system so you can battle it as little as possible.