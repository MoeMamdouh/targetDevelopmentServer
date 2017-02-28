mylife.config(['$translateProvider', function ($translateProvider) {
	$translateProvider.useStaticFilesLoader({
		prefix: 'common/translation/translations-',
		suffix: '.json'
	});
	$translateProvider.forceAsyncReload(true);
}])
.config(function(tmhDynamicLocaleProvider) {
	tmhDynamicLocaleProvider.localeLocationPattern('lib/angular-i18n/angular-locale_{{locale}}.js');
});