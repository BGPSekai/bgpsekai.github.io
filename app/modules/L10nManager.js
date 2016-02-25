/*
 * 目前未使用 只有直接讀取
 */

let L10nManager = function(){
	//EventEmitter.call(this);
	this._currentLanguage = 'zh-TW';
  this.params = null;
	//this.emit('language-initialized');
}

//L10nManager.prototype = Object.create(EventEmitter.prototype);
L10nManager.constructor = L10nManager;

L10nManager.prototype.init = function( f ) {

  let t = this;
  var xmlhttp = new XMLHttpRequest();
  var url = 'assets/locales/'+this._currentLanguage + '.json';

  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
         t.params = JSON.parse(xmlhttp.responseText);
         t.init = true;
         f();
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
};

L10nManager.prototype.changeLanguage = function(newLanguage) {
  if (this._currentLanguage === newLanguage) {
    return;
  }
  else {
    var oldLanguage = this._currentLanguage;
    this._currentLanguage = newLanguage;
    //this.emit('language-changed', newLanguage, oldLanguage);
  }
};

L10nManager.prototype.get = function( ID ){
 //this.params = JSON.parse(fileInfo);
 return this.params[ID];
}

module.exports = new L10nManager();