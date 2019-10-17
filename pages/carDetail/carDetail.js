
var carDetailFromServer = {
	"processPhotoList": [{
		"photo": "/resources/images/4brandChange8.png"
	}],
	"earnestMoney": "199",
	"typeMap": {
		"Yeti 2014款 1.4TSI DSG极地版": [{
			"saveMoney": 57000,
			"num": "38",
			"tprice": "20.08万",
			"color": "戈壁棕+黑内",
			"cprice": "14.38万",
			"typeId": "120"
		},
		{
			"saveMoney": 57000,
			"num": "96",
			"tprice": "20.08万",
			"color": "戈壁棕+米内",
			"cprice": "14.38万",
			"typeId": "121"
		},
		{
			"saveMoney": 57000,
			"num": "95",
			"tprice": "20.08万",
			"color": "藏野黑+黑内",
			"cprice": "14.38万",
			"typeId": "122"
		},
		{
			"saveMoney": 57000,
			"num": "97",
			"tprice": "20.08万",
			"color": "藏野黑+米内",
			"cprice": "14.38万",
			"typeId": "123"
		},
		{
			"saveMoney": 57000,
			"num": "93",
			"tprice": "20.08万",
			"color": "旷野灰+黑内",
			"cprice": "14.38万",
			"typeId": "125"
		},
		{
			"saveMoney": 57000,
			"num": "81",
			"tprice": "20.08万",
			"color": "旷野灰+米内",
			"cprice": "14.38万",
			"typeId": "126"
		}],
		"Yeti 2014款 1.4TSI DSG野驱版": [{
			"saveMoney": 54000,
			"num": "98",
			"tprice": "21.98万",
			"color": "戈壁棕+米内",
			"cprice": "16.58万",
			"typeId": "103"
		}]
	},
	"colors": ["戈壁棕+米内",
	"戈壁棕+黑内",
	"藏野黑+黑内",
	"藏野黑+米内",
	"旷野灰+黑内",
	"旷野灰+米内"],
	"minType": {
		"Yeti 2014款 1.4TSI DSG极地版": {
			"num": "81",
			"tprice": "20.08万",
			"color": "旷野灰+米内",
			"cprice": "14.38万",
			"typeId": "126"
		}
	},
	"photo": "/resources/images/4.png",
	"url": "http:\/\/m.chetuan.com\/temaihui\/series_68\/",
	"shareMsg": "斯柯达Yeti2014款 1.4TSI DSG极地版\/野驱版,购车即送豪华大礼包,数量有限,赶快下单吧！http:\/\/m.chetuan.com\/temaihui\/series_68\/",
	"detailPhotowhList": [""],
	"saveMoney": 35000,
	"temaihuiId": "68",
	"title": "购车即送豪华大礼包",
	"detailPhotoList": [{
		"photo": "/resources/images/4_1.png"
	}],
	"csPrice": "16.58万",
	"carName": "斯柯达Yeti2014款 1.4TSI DSG极地版\/野驱版",
	"tmPrice": "20.08万"
};

Page({
  data: {
    carDetail: {},
	currentSelect:{
			"saveMoney": 57000,
			"num": "38",
			"tprice": "20.08万",
			"color": "戈壁棕+黑内",
			"cprice": "14.38万",
			"typeId": "120"
		}
  },
  onLoad: function (option) {
    wx.showToast({title: "加载中"  , icon: "loading"});
    var carId = option.id;
    this.setData({carDetail: carDetailFromServer});

  }
})

