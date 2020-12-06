# Client Side JavaScript  Gulp Starter Pack
It’s important to have a comfortable and streamlined workflow when sitting down to develop HTML CSS and JavaScript for client side apps. You can use this simple boilerplate to start any client side javascript project. As you get more skilled you can and and subtract elements to this setup. Make sure you update the Readme.md  and keep track of it on github.


 ```bash
├── Readme.md
├── css
├── fonts
├── img
├── index.html
└── js

```

## css ##
Reboot is the minicssreset by Jeremy Thomas  [available for download here](https://jgthms.com/minireset.css/). I prefer to start all UI Development with all margin padding striped out and with all elements having the same font size and line height. The styles.css file is you're custom developer styles.
```bash
./css
├── reboot.css
├── style.css
```

## fonts ##
Contains several san-serif fonts that I use for front end UI Development. Each font has a file called @font-face.css which has the @font-face rule for a particular font style you wish to use. Just copy and paste the @font-face rule into your styles.css.
```bash
./fonts
├── neue
├── noto
├── open_sans
├── poppins
├── product
└── roboto    
```

## img ##
Folder constains some icons that are useful when building UI components you can add more from any of the sites below. Most of the icons sets allow you to download all the icons I would caution you agains that as you will spend more time deleting icons than its worth. Most of the icon sets are on github and you can get them when  you need them.  

- [Ionic Icons](https://ionicons.com/)  
- [Material Icons](https://material.io/resources/icons/?style=baseline)  
- [Font Awsome](https://fontawesome.com/)  
- [Flat Icon](https://www.flaticon.com/)
- [Fontisto](https://fontisto.com/)
- [Best Free Sets For Developers](https://medium.com/@GrayGrids/30-best-free-icon-packs-for-web-designers-2f2317ceaff9)  

```bash
./img
  ├── icons
```


## js ##
This folder contains index.js which is linked into the html document at the foot of the page. You can find the script tag at the bottom of the index.html page just before the closing html tag. This file is where we will develop your JavaScript

```bash
./js
└── app.js
```





