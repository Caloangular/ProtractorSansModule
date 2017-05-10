// conf.js
exports.config = {
   	directConnect: true,
	framework: 'jasmine',
	chromeDriver: '/home/jenkins/tools/com.cloudbees.jenkins.plugins.customtools.CustomTool/Chromedriver-2.6/chromedriver',
	specs: ['spec.js', 'spec2.js'],
	capabilities: {
		browserName: 'chrome'
	},
	jasmineNodeOpts: {
		showColors: true,
	}
};
