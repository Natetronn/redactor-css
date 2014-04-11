<?php
namespace Craft;

/**
 * Redactor CSS plugin
 */
class RedactorCssPlugin extends BasePlugin
{
	public function getName()
	{
		return 'Redactor CSS';
	}

	public function getVersion()
	{
		return '0.1';
	}

	public function getDeveloper()
	{
		return 'Natetronn';
	}

	public function getDeveloperUrl()
	{
		return 'https://github.com/Natetronn';
	}

	public function init()
	{
		if (craft()->request->isCpRequest())
		{
			craft()->templates->includeCssResource('redactorcss/redactorcss.css');
			craft()->templates->includeJsResource('redactorcss/jquery-ui-1.10.4.custom.min.js');
			craft()->templates->includeJsResource('redactorcss/jquery.ui.touch-punch.min.js');
			craft()->templates->includeJsResource('redactorcss/redactorcss.js');

			$modalHtml = craft()->templates->render('redactorcss/modal', array(
				'classes' => $this->getSettings()->classes
			));

			craft()->templates->includeFootNode($modalHtml);
		}
	}

	protected function defineSettings()
	{
		return array(
			'classes' => array(AttributeType::Mixed, 'default' => array())
		);
	}

	public function getSettingsHtml()
	{
		return craft()->templates->renderMacro('_includes/forms', 'editableTableField', array(
			array(
				'label' => Craft::t('Classes'),
				'instructions' => Craft::t('Define the CSS Classes you want to be available in your Rich Text fields.'),
				'id'   => 'classes',
				'name' => 'classes',
				'cols' => array(
							'label' => array('heading' => Craft::t('Label'), 'type' => 'singleline', 'width' => '50%'),
							'class' => array('heading' => Craft::t('Class'), 'type' => 'singleline', 'width' => '50%')
						),
				'rows' => $this->getSettings()->classes
			)
		));
	}

	/**
	 * Preps the settings before they're saved to the database.
	 *
	 * @param array $settings
	 * @return array
	 */
	public function prepSettings($settings)
	{
		if (!empty($settings['classes']))
		{
			// Drop the string row keys
			$settings['classes'] = array_values($settings['classes']);
		}

		return $settings;
	}
}