Note to all: currently redactor-css works with Craft 2.2.2607 and below. Craft 2.3.2615 introduces Redactor v.10 and therefore this plugin will require a full re-write.

# Redactor CSS

> Apply CSS classes to your Craft CMS Rich Text fields i.e. Redactor WYSIWYG

## Installation

**For Craft 2.2.2607 <=**

Download current version and unzip the redactorcss folder.

Copy `redactorcss` to your `craft/plugins` directory

## Usage

Install as you would any Craft plugin. Once installed click Redactor CSS link to add your classes.

Click the " + Add a row" button to start adding your class label and class as seen below. Repeat for each class:

![Redactor CSS](http://i.imgbox.com/zUWj1jdj.png)

Update [Redactor Configs](http://buildwithcraft.com/docs/rich-text-fields#redactor-configs) by adding `redactorcss` to the plugins object e.g. `plugins: ['fullscreen', 'pagebreak', 'redactorcss']`

Now you should see a new CSS3 Icon in the Rich Text field:
![Launch Redactor CSS](http://i.imgbox.com/OvzXamTP.png)

Click on an element you would like to apply a class to and then click the icon to access Redactor CSS's Modal Window:

![Redactor CSS Modal](http://i.imgbox.com/8q2yf3ul.png)

Choose the classes you'd like to apply to the element. You may apply multiple classes by SHIFT clicking a set of classes or by CTRL (Win) or CMD (MAC) clicking each class one by one. CTRL/CMD click again to unset a selection.

Finally hit the insert button and you're done!

There is an add/edit shortcut link which will take you to the plugin's settings to add/edit/delete classes.

Note: your frontend CSS files should include the styles for the classes you've added but, you knew that already, I'm sure.

### Change Log

**Apr 11, 2014: 0.1**

    Beta - Initial Release
    
### To-do & Considerations:

- Edit current class/classes option
- Remove all added class/classes option
- Research Redactor in editor styling
- Add regex checking for Class field
- Inline style support 
  - applies style="{some_saved_styles}" to the element
- Image or info icon - when clicked gives more information or even a visual regarding class so clients know the outcome once applied
    
## Support

[Github Issues](https://github.com/Natetronn/redactor-css/issues)

[@natetronn](http://twitter.com/natetronn)
