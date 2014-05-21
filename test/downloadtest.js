var FileDownloader=require("../src/utils/FileDownloader");

var dl=new FileDownloader();
//dl.setUrl("https://github.com/Wizcorp/Ejecta-X/archive/v0.8.0.zip");
dl.setUrl("http://www.dn.se/adsfadsf");
dl.setTargetFileName("test.zip");

dl.download();

