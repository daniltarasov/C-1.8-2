function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector));
	return this
}

jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}


jQuery.prototype.text = function(arg) {
  this.each(element => element.innerText = arg)
  return this;
}


const $ = (e) => new jQuery(e);
$('.btn2').text("кнопка 2")



