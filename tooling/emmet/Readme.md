# Speed Up Your Workflow With Emmet
There is no getting around it you have to be able to write HTML markup fast when your a front end web developer. The most helpful tool that I found to do this is called Emmet. Emmet is a code editor plugin built into VSCode that helps you with your HTML and CSS Workflow. To start learning it I have included a few links for you. First if your using VSCode as your editor then your in luck as it is built into VSCode (see they even know its a good thing) 
<br>
<br>
 ## Emmet Resources <br>
[Online Cheat Sheet](https://docs.emmet.io/cheat-sheet/)<br>[Emmet Documentation](https://docs.emmet.io/)<br>[Configure Emmet With VSCode](https://code.visualstudio.com/docs/editor/emmet)
<br>
<br>
## Teach Yourself Emmet
Teaching yourself Emmet is relatively painless, it should only take you about an hour to be completely fluent in using Emmet syntax. To start go to the [abbreviations section](https://docs.emmet.io/abbreviations/) of the Emmet Documentation. There you will find a detailed explication of emmet abbreviations. Abbreviations are just a short form of markup that you want to write. Lets take a look at an example.Say you want to create six list item elements. You could type them out one by one, write one and copy and paste it five times or you could use an Emmet abbreviation.
<br><br>
```html
<!-- 
    Your write Emmet abbreviations in your html or css document using the VSCode Editor.
    You write Emmet an Emmet abbreviation with no spaces between the commands.
    There 
    To expand the abbreviation hit the tab key.(it you add a space and hit tab the abbreviation will not expand) 
-->
li*6
<!-- 
    Once you hit the tab key you should see the following HTML
-->
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<!-- Emmet writes six li elements for you. --> 
```
 
Before you move on practice the simple skill of write an abbreviation and have it expand into markup. Once you have that skill mastered then you can move on to writing more complex abbreviations. To do that you need to learn the [Emmet Syntax](https://docs.emmet.io/abbreviations/syntax/). Take a look at the following example.

 
```html
<!-- 
    TASK
    Write an emmet abbreviation that creates an unordered list with four nested list items.

    SOlUTION
    - use the ul element 
    - use the child element syntax > (greater than arrow)
    - then use the li as you want those to be children of the unordered list.
    - use the multiplication syntax * and tell emmet you want to create 4 li's.
-->
ul>li*4
<!-- 
    Once you hit the tab key you should see the following HTML written.
-->
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
<!-- Emmet writes six li elements for you. --> 
```
