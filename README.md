# Redactor CSS

> Apply CSS classes to your Craft CMS Rich Text fields i.e. Redactor WYSIWYG

## Installation

**For Craft 2.x**

Download current version and unzip the redactorcss folder.

Copy `redactorcss` to your `craft/plugins` directory

## Usage

Install as you would any Craft plugin. Once installed click Redactor CSS link to add your classes.

Click the " + Add a row" button to start adding your class label and class as seen below. Repeat for each class:

![Redactor CSS](https://d2oawfjgoy88bd.cloudfront.net/510973ede4b091cff3ff4e91/510974fbe4b091cff3ff4f6b/53485c3cc38aa522167cedd1.png?Expires=1397337548&Signature=R6rawJK2Q02qRLYTvIWV8CZ9RkOHCvfQsQu1eT2SU77uGWRThNeRHl7X-0lPiVYzAIpqJMRv0yfEu7JVa~OYyG8adfb2fBreyWv-JBZl74s7ZEBAm46ZT83zPzR6uMdvCgAmbBYOa74cLhRMHoyyIvQdCtLRyeVBICxW3BfMwFt8dZ23mu2TCy4oJEG3QJlIkor25Q9Hf5UurUHWzSVi87yXA9rXGH09ou~96Ckm1o1CSBTifO4eHmYc3lkTHKlpEExLuY8MA-Y~28hJ9NEaC5Y3b8ge~KOroqRtyUAti--f4M7JXKVwj0Qmgh9oiQo59ahwjm0XuTdZb3uwDw3BQw__&Key-Pair-Id=APKAJHEJJBIZWFB73RSA)

Update [Redactor Configs](http://buildwithcraft.com/docs/rich-text-fields#redactor-configs) by adding `redactorcss` to the plugins object e.g. `plugins: ['fullscreen', 'pagebreak', 'redactorcss']`

Now you should see a new CSS3 Icon in the Rich Text field:
![Launch Redactor CSS](https://d2oawfjgoy88bd.cloudfront.net/510973ede4b091cff3ff4e91/510974fbe4b091cff3ff4f6b/5348751bc38aa522140c14f5.png?Expires=1397343940&Signature=GRXDG-9WSBuYUNccm4to~aEaJA-~~hBTP6oE8ulsarRrBLw3bC8nNGphmrSBspG12mb~197YCFR4d3PX2CnSrjs8i6YiVzYtD~fA2UMcf~39ZHDsmFs8puls~frvP39CfdJTYDHurbi31jxgodMivJT0A5cIIjoa8a11phXKzC0Y7z716~LLZfijvnF8ckf7ZljmmaS5Pbo07Ebt2iA3w1EAEavDumEbpcJgIaVoNw4ppRFwDtyoQkVca5g05gAW-4mQI8jw-esbHmJ~sky08iIVDuDeXy-xFV6vVhhfK4K5a8anfS3X0EgW2oxh1Mhrk6heSKsYnMqyi3zPiaXq2Q__&Key-Pair-Id=APKAJHEJJBIZWFB73RSA)

Click on an element you would like to apply a class to and then click the icon to access Redactor CSS's Modal Window:

![Redactor CSS Modal](https://d2oawfjgoy88bd.cloudfront.net/510973ede4b091cff3ff4e91/510974fbe4b091cff3ff4f6b/534875b9c38aa5221a1a4434.png?Expires=1397344074&Signature=U1kGWk0JxvlZPdk4aTluXrkFYanuWhgwoIEey86~oVNGwfwmoIYV3Lr2zj31kk7Dcrt35nlcWQkFrrUbV8xXMtXyL7GF2Xc87Lot6EnWiS9jNNDxhQrZAP8bbvOwUzfpKmOzJGKmYZBXsjZVGSBmFhYYDOukGan3IJ9eFhYtqMboUZ71ijZ9egFnE8I8WxRVlqV1Hqh72heXc1ClqKzgGMvXX9VmguUE-XZNEAZDoC8QfaGZchNqb-MEiB7DUnH3Wl38dkwxE1XxhiMKb5454obA5zBk3dcxAM3ctMdM6K9Ge2I1ENhoaY0XjDezHMGgRi1dx8Nanu7ueJvAJUgc-g__&Key-Pair-Id=APKAJHEJJBIZWFB73RSA)

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