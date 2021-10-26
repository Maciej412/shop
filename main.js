let $mainShopItemList= document.querySelector('.main-shop-item-list');
let $options = document.getElementsByTagName('select');
let $productNameCart = document.querySelector('.product-name');
let $productNameShop = document.querySelector('.item-title');
let $btns = document.getElementsByTagName('input');
let $shoppingCart= document.querySelector('.shopping-cart');
let $mainShopCart=document.querySelector('.main-shop-cart');
let $productPhoto;
let $cartPanel;
let $cartName;
let $cartPrice;
let $cartQuantity;
let $cartPhoto;
let $cenaKoncowa=0;

itemAddedToCart=(e)=>{
    createCartItem()
        if(e.target==$btns[0]){$cartPhoto.innerHTML=ProductId1.photo;$cartName.innerText=ProductId1.name;$cartQuantity.innerText="Ilość: "+$options[0].value;$cartPrice.innerText="Całkowity koszt: "+ProductId1.price*$options[0].value+" zł";$cartPanel.classList.add('checked');}
        if(e.target==$btns[1]){$cartPhoto.innerHTML=ProductId2.photo;$cartName.innerText=ProductId2.name;$cartQuantity.innerText="Ilość: "+$options[1].value;$cartPrice.innerText="Całkowity koszt: "+ProductId2.price*$options[1].value+" zł";$cartPanel.classList.add('checked');}
        if(e.target==$btns[2]){$cartPhoto.innerHTML=ProductId3.photo;$cartName.innerText=ProductId3.name;$cartQuantity.innerText="Ilość: "+$options[2].value;$cartPrice.innerText="Całkowity koszt: "+ProductId3.price*$options[2].value+" zł";$cartPanel.classList.add('checked');}
        if(e.target==$btns[3]){$cartPhoto.innerHTML=ProductId4.photo;$cartName.innerText=ProductId4.name;$cartQuantity.innerText="Ilość: "+$options[3].value;$cartPrice.innerText="Całkowity koszt: "+ProductId4.price*$options[3].value+" zł";$cartPanel.classList.add('checked');}
}
createCartItem=()=>{
    $cartPanel=document.createElement('div');
    $cartPanel.classList.add('cart-item');
    $shoppingCart.appendChild($cartPanel);   
    $cartPhoto=document.createElement('div');
    $cartPhoto.classList.add('product-photo');
    $cartPanel.appendChild($cartPhoto);
    $cartName=document.createElement('div');
    $cartName.classList.add('product-name');
    $cartPanel.appendChild($cartName);
    $cartQuantity=document.createElement('div');
    $cartQuantity.classList.add('product-quantity');
    $cartPanel.appendChild($cartQuantity); 
    $cartPrice=document.createElement('div');
    $cartPrice.classList.add('product-price');
    $cartPanel.appendChild($cartPrice); 
}
for (let i=0; i<$btns.length-1; i++){
$btns[i].addEventListener('click',itemAddedToCart)}
//! Baza danych
function Product(name,price,photo){
    this.name = name;
    this.price = price;
    this.photo = photo;
}
const ProductId1=new Product('Jasne spodnie jeansowe',179.99,`<img class="item-image" src="https://assets.butiklalala.pl/thumbs/1000xauto/2020-04::1587726161-93835997-1116846812002034-3093730170977124352-n.jpg">`);
const ProductId2=new Product('Ciemne spodnie jeansowe',189.99,`<img class="item-image" src="https://fau-butik.pl/wp-content/uploads/2020/10/288DC260-996A-4E69-ADEA-8F9D262CD008.jpeg">`);
const ProductId3=new Product('Spodnie jeansowe z wysokim stanem',167.99,`<img class="item-image" src="https://olika.com.pl/pol_pl_Jasne-spodnie-typu-balloon-jeans-z-wysokim-stanem-10234_5.jpg">`);
const ProductId4=new Product('Spodnie jeansowe z dziurami',99.99,`<img class="item-image" src="https://www.cocomoda.pl/img/product_media/67001-68000/cr605.jpg">`);
const ProductId5=new Product('Białe spodnie jeansowe',221.99,`<img class="item-image" src="https://olika.com.pl/data/gfx/pictures/medium/0/0/6500_4.jpg">`);
const $productNamesTable=[$mainShopItemList.children[1].children[0].children[0],$mainShopItemList.children[2].children[0].children[0],$mainShopItemList.children[3].children[0].children[0],$mainShopItemList.children[4].children[0].children[0]];
const $productPricesTable=[$mainShopItemList.children[1].children[0].children[2].children[0].children[0],$mainShopItemList.children[2].children[0].children[2].children[0].children[0],$mainShopItemList.children[3].children[0].children[2].children[0].children[0],$mainShopItemList.children[4].children[0].children[2].children[0].children[0]];
const $ProductPhotosTable=[$mainShopItemList.children[1].children[1],$mainShopItemList.children[2].children[1],$mainShopItemList.children[3].children[1],$mainShopItemList.children[4].children[1]]
const prizesOnSite=()=>{
    $ProductPhotosTable[0].innerHTML=ProductId1.photo;$productNamesTable[0].innerHTML=ProductId1.name;$productPricesTable[0].innerHTML=`Cena: ${ProductId1.price}zł`;
    $ProductPhotosTable[1].innerHTML=ProductId2.photo;$productNamesTable[1].innerHTML=ProductId2.name;$productPricesTable[1].innerHTML=`Cena: ${ProductId2.price}zł`;
    $ProductPhotosTable[2].innerHTML=ProductId3.photo;$productNamesTable[2].innerHTML=ProductId3.name;$productPricesTable[2].innerHTML=`Cena: ${ProductId3.price}zł`;
    $ProductPhotosTable[3].innerHTML=ProductId4.photo;$productNamesTable[3].innerHTML=ProductId4.name;$productPricesTable[3].innerHTML=`Cena: ${ProductId4.price}zł`;
}
window.onload = prizesOnSite;
            