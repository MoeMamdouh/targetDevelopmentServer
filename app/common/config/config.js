var API;

if(navigator.platform == 'BlackBerry'){
	API = "http://api.staging.sps-digital.com/index.php/"
}else{
	API = "https://api.staging.sps-digital.com/index.php/"
	// API = "http://192.168.1.9/magna-accounts/index.php/"
}

var config = {
	appKey:"mml",
	appId:2,
	// API: "http://api.staging.moweex.com/index.php/",
	API: API,
	// API: "http://192.168.1.10/magna-accounts/index.php/",
	// API: "http://192.168.1.8/magna-master/index.php/",
	// API: "http://192.168.1.9/magna-accounts/index.php/",
	appVersion:'v.0.0.35',
	appLanguage:'en',
	links:{
		platform:"http://plattform.magnasteyr.com",
		onboarding:"https://www.google.com.eg/",
		recruiting_site:"http://www.steigein-magna.com/",
		intranet:"https://home.magnasteyr.com/de/web/ms-home/graz-home#http://cms.intranet.magnasteyr.com/msathome/INT/EU/AT/graz/3593_DEU_PIN.php",
		terms_of_service:"https://google.com"
	},
	email:{
		to:"marketingcommunications.magnasteyr@magna.com",
		bc:"hello@moweex.com",
		subject:"Magna mylife App",
		body:"Please add your feedback here"
	},
	rate:{
		ios:"https://itunes.apple.com/us/app/mylife-magna-steyr/id1177410012",
		android:"https://play.google.com/store/apps/details?id=com.magnamystyer.magnamylifeapp",
		blackberry:"https://appworld.blackberry.com/webstore/content/60001542/?lang=en&countrycode=AT"
	},
	// about:{
	// 	terms:"https://www.google.com.eg/?gfe_rd=cr&ei=TPJ0WKmOCu-Ltgft0bvYBQ",
	// 	copyrights:"https://www.google.com.eg/?gfe_rd=cr&ei=TPJ0WKmOCu-Ltgft0bvYBQ",
	// 	impress:"https://www.google.com.eg/?gfe_rd=cr&ei=TPJ0WKmOCu-Ltgft0bvYBQ"
	// 	}
}
