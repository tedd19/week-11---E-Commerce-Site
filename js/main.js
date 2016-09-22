//product constructor
function Shirt(name, size, color, stock, image) {
	this.name  = name
	this.size  = size
	this.color = color
	this.stock = stock
	this.image = image
}

//create new products from the product constructor
var whitetee = new Shirt("White Tee", "medium", "white", 150, "img/whitetee.png")
var blacktee = new Shirt("Black Tee", "medium", "black", 50, "img/blacktee.png")
var redtee = new Shirt("Red Tee", "medium", "red", 20, "img/redtee.png")
var bluetee = new Shirt("Blue Tee", "medium", "blue", 70, "img/bluetee.png")
var greentee = new Shirt("Green Tee", "medium", "green", 55, "img/greentee.png")
var yellowtee = new Shirt("Yellow Tee", "medium", "yellow", 250, "img/yellowtee.png")

//create an array to add products to
var shirtArray = new Array

//add products to array of products
shirtArray.push(whitetee, blacktee, redtee, bluetee, greentee, yellowtee)

//loop through product array
for(var i = 0; i < shirtArray.length; i++) {
	//create new element for each product
	var newItem = document.createElement("div")
	var newDiv  = document.createElement("div")
	var nameH1  = document.createElement("h1")
	var sizeH4  = document.createElement("h4")
	var colorH4 = document.createElement("h4")
	var stockH4 = document.createElement("h4")
	var btn     = document.createElement("button")
	var img     = document.createElement("img")

	//create text for new elements
	var tName    = document.createTextNode(shirtArray[i].name)
	var tSize    = document.createTextNode("Available Size: " + shirtArray[i].size)
	var tColor   = document.createTextNode("Color: " + shirtArray[i].color)
	var tStock   = document.createTextNode("In stock: " + shirtArray[i].stock)
	var tButton  = document.createTextNode("Buy Now")

	//update sorce attribute
	img.src = shirtArray[i].image

	//update class attribute
	image.className = "img-responsive"
	btn.className = "btn btn-primary btn-lg"
	newItem.className = "col-sm-4"
	newDiv.className = "tshirt shirtName" + [i] + " thumbnail"

	//add text to elements
	nameH1.appendChild(tName)
	sizeH4.appendChild(tSize)
	colorH4.appendChild(tColor)
	stick.H4.appendChild(tStock)
	btn.appendchild(tButton)

	//add element to new div
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(sizeH4)
	newDiv.appendchild(colorH4)
	newDiv.appendChild(stockH4)
	newDiv.appendChild(btn)

	//add new div to new item div
	newItem.appendChild(newDiv)

	//add new item to the element with id="shirts"
	document.getElementById("products").appendChild(newItem)
}











