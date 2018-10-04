
var cust_name = prompt("Please Enter your Name");
document.getElementById("msg").innerHTML="Welcome to us: "+cust_name;
$(function (){

     
    //List of products in Array
var products = [
    { name: 'Blocks', price: 200, id: 1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture:'images/kidstoy1.jpg', category: 'Toys' },
    { name: 'sweater', price: 755, id: 2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'images/clothes.jpg', category: 'Clothing' },
    { name: 'womenshoes', price: 25, id: 3, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'images/shoes1.jpg', category: 'Shoes' },
    { name: 'mensshoes', price: 20, id: 4, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'images/shoes2.jpg', category: 'Shoes' },
    { name: 'watch', price: 800, id: 5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'images/acessories2.jpg', category: 'Acessories' },
    { name: 'phone', price: 2000, id: 6, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'images/electronic1.jpg', category: 'Electronic' },
    { name: 'toycar', price: 2000, id: 6, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'images/kidstoy2.jpg', category: 'Toys' },
    { name: 'Mensuit', price: 2000, id: 6, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'images/clothes1.jpg', category: 'Textiles' },
    { name: 'Camera', price: 2000, id: 6, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'images/electronic2.jpg', category: 'Gadjets' }
];

//Empty cart Array
var cart = [];


var appendList = function(array, location){
    var template = array.map(function (item, id) {//string interpolation means modern string concatenation
        return `
            <li class="product col-3">
                <img class ="proimg" src="${item.picture}" alt="${item.name}">
                <div class="product-content">
                <h4>
                ${item.name} - 
                <span class="category">${item.category}</span><small> ${item.price}</small>
                </h4>
                <p>${item.description}</p>
                </div>
                <button type="button" class ="btn" id="${item.id}">köp Nu</button>
         </li>       
        `;

    });
    $(location).html(template);
};

var addToCart = function(array,id,location){ // location in UL means cart-list
    
    // searching for a specific ID
    var a = array.find(function(i){
        return i.id===id;
    });
 //lägger till products in cart array and showing on website
 cart.push(a);
 var item = `
    <li class="item" id="${a.id}">
        <h4>${a.name}</h4>
        <button type="button">X</button>
    </li> 
 `;

  $("span.amount").text(cart.length);
  $(location).append(item);
}
appendList(products,$('.product-list'));
$(".product").on("click","button",function(event){
    //button ID
    var id = $(this).attr("id");
    addToCart(products,+id,$(".cart-list"));
});

var removeFromCart = function(array,removedItem){
    array.splice(removedItem,1);
};

var populateCart = function(array,location){
    var item=`

        <li class="item" id="${array.id}">
            <h4>${array.name}</h4>
            <button type="button">X</button>
        </li>
    `;
    $("span.amount").text(array.length);

};
$(".cart-list").on("click","button",function(e){
    //Item is list item in cart
    var item = $(e.currentTarget).closest("li").remove();
 
    // take away from cart
    removeFromCart(cart,item);
    // lägg till i cart igen
    populateCart(cart,$(".cart-list"));
});

});
