var now = new Date();
var xxday = new Date(2022,7-4,23);
count2 = Math.ceil( (now.getTime() - xxday.getTime()) / (24*60*60*1000) );
document.write("14ちゃんねる開設から" + count2 + "日目");