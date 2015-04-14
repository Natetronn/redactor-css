if (!RedactorPlugins) var RedactorPlugins = {};

RedactorPlugins.redactorcss = function() {

    return {

        init: function()
		{
			// Add Font Awesome button
			var button = this.button.add('redactorcss', 'Classes');
			this.button.setAwesome('redactorcss', 'fa-css3');
			this.button.addCallback(button, this.redactorcss.show);
		},
		getTemplate: function()
		{
			// Grab our labels/classess from RedactorCssPlugin.php
			var items = RedactorPlugins.redactorcss.items;

			// Build our template for our modal
			this.redactorcss.template = $('<ul id="redactor-modal-list">');

			for (var i = 0; i < items.length; i++)
			{
				var li = $('<li class="redactorcss">');
				var a = $('<a href="#" class="redactorcss-link">').text(items[i][0]);
				var div = $('<div class="redactorcss-class">').hide().text(items[i][1]);

				li.append(a);
				li.append(div);
				this.redactorcss.template.append(li);

			}

			return this.utils.getOuterHtml(this.redactorcss.template);

		},
		show: function()
		{
			this.modal.addTemplate('redactorcss', '<section>' + this.redactorcss.getTemplate() + '</section>');

			this.modal.load('redactorcss', 'Insert Class', 400);

			this.modal.createCancelButton();

			//this.selection.save();
			this.observe.load();
			this.modal.show();

			$('#redactor-modal-list').focus();

			$('#redactor-modal-list').find('.redactorcss-link').each($.proxy(this.redactorcss.load, this));
		},
		load: function(i,s)
		{
			$(s).on('click', $.proxy(function(e)
			{
				e.preventDefault();

				var myClass = $(s).next().html();
				this.inline.toggleClass(myClass);
				this.modal.close();

			}, this));
		}
    };
};
