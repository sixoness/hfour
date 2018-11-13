

// inCludeScript('../ffour/javascripts/jquery.js')
// inCludeScript('../ffour/javascripts/app.js')
// inCludeScript('../ffour/javascripts/index.js')
// inCludeScript('../ffour/javascripts/home.js')
// inCludeScript('../ffour/javascripts/stat.js')
inCludeScript('../ffour/javasripts/newyear.js');
inCludeScript('../ffour/javasripts/jquery.nivo.slider.js');
inCludeScript('../ffour/javasripts/imme1.js');
inCludeScript('../ffour/javasripts/counter.js');
inCludeScript('../ffour/javasripts/countdown.js');













function inCludeScript(url){
	document.write('<script type="text/javascript" "js/' + url + '"> </script>');
	return false;
}