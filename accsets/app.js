const getElmClassContentSection = $(".content__section");
const getElmClassBtnIphone = $(".btn__iphone");
const getElmClassBtnSamsung = $(".btn__samsung");
const getElmClassBtnOppo = $(".btn__oppo");
const getElmClassBtnVivo = $(".btn__vivo");
const getElmClassBtnXiaomi = $(".btn__xiaomi");
const getElmClassBtnAll = $(".btn__all");
// hàm render ra các sản phẩm :
let productHtml = "<div class='row gy-4 p-3'>";
function renderProduct(arrays) {
  arrays.forEach(function (productObject) {
    productHtml += `
    <div class="product col-sm-6 col-md-4 col-lg-3 text-center">
    <div class="card">
    <img class='p-5' src="${productObject.image}" class="card-img-top" alt="image_mobile">
    <div class="card-body ${productObject.classProductName}">
      <h5 class="card-title text-truncate "> ${productObject.name}</h5>
      <div class="price " style="font-size:20px">${productObject.price}</div>
      <a href="#" class="btn btn-info my-3" style="color: #fff;">Mua ngay</a>
    </div>
    </div>
  </div>
    `;
  });

  productHtml+='</div>'
  getElmClassContentSection.html(productHtml);
}

// mảng danh sách các sản phẩm
let arrayProducts = [
  {
    image: "accsets/image/iphone/iphone-12-1.jpg",
    classProductName: "iphone",
    name: "Iphone 12",
    price: "20.990.000₫",
  },
  {
    image: "accsets/image/iphone/iphone-13-pro-max-sierra-blue-2.jpg",
    classProductName: "iphone",
    name: "Iphone 13 Pro Max",
    price: "33.990.000₫",
  },
  {
    image: "accsets/image/iphone/iphone-13-pro-sierra-blue-3.jpg",
    classProductName: "iphone",
    name: "Iphone 13 Pro",
    price: "30.990.000₫",
  },
  {
    image: "accsets/image/iphone/iphone-12-pro-max-xanh-duong-4.jpg",
    classProductName: "iphone",
    name: "Iphone 12 Pro Max",
    price: "31.990.000₫",
  },
  // samsung
  {
    image: "accsets/image/Samsung/samsung-galaxy-z-fold-3-green-1.jpg",
    classProductName: "samsung",
    name: "Samsung Galaxy Z Fold3 5G 512GB",
    price: "44.990.000₫",
  },
  {
    image: "accsets/image/Samsung/samsung-galaxy-a03s-black-2.jpg",
    classProductName: "samsung",
    name: "Samsung Galaxy A03s",
    price: "3.690.000₫",
  },
  {
    image: "accsets/image/Samsung/samsung-galaxy-a52s-5g-mint-3.jpg",
    classProductName: "samsung",
    name: "Samsung Galaxy A52s 5G",
    price: "10.990.000₫",
  },
  {
    image: "accsets/image/Samsung/samsung-galaxy-z-fold-2-den-4.jpg",
    classProductName: "samsung",
    name: "Samsung Galaxy Z Fold2 5G",
    price: "44.000.000₫",
  },

  // oppo
  {
    image: "accsets/image/oppo/oppo-reno6-z-5g-aurora-1.jpg",
    classProductName: "oppo",
    name: "OPPO Reno6 Z 5G",
    price: "9.490.000₫",
  },
  {
    image: "accsets/image/oppo/oppo-a74-blue-2.jpg",
    classProductName: "oppo",
    name: "OPPO A74",
    price: "6.690.000₫",
  },
  {
    image: "accsets/image/oppo/oppo-reno6-pro-blue-3.jpg",
    classProductName: "oppo",
    name: "OPPO Reno6 Pro 5G",
    price: "18.490.000₫",
  },
  {
    image: "accsets/image/oppo/oppo-find-x3-pro-black-4.jpg",
    classProductName: "oppo",
    name: "OPPO Find X3 Pro 5G",
    price: "23.990.000₫",
  },
  // vivo
  {
    image: "accsets/image/Vivo/vivo-y21-white-1.jpg",
    classProductName: "vivo",
    name: "Vivo Y21",
    price: "4.290.000₫",
  },
  {
    image: "accsets/image/Vivo/vivo-x70-pro-xanh-hong-2.jpg",
    classProductName: "vivo",
    name: "Vivo X70 Pro 5G",
    price: "18.990.000₫",
  },
  {
    image: "accsets/image/Vivo/vivo-v21-5g-xanh-den-3.jpg",
    classProductName: "vivo",
    name: "Vivo V21 5G",
    price: "9.490.000₫",
  },
  {
    image: "accsets/image/Vivo/Vivo-V23e-4.jpg",
    classProductName: "vivo",
    name: "Vivo V23e",
    price: "8.490.000₫",
  },
  // Xiaomi
  {
    image: "accsets/image/XiaoMi/xiaomi-11t-white-1.jpg",
    classProductName: "xiaomi",
    name: "Xiaomi 11T 5G 128GB",
    price: "10.990.000₫",
  },
  {
    image: "accsets/image/XiaoMi/xiaomi-mi-11-xanhduong-2.jpg",
    classProductName: "xiaomi",
    name: "Xiaomi Mi 11 5G",
    price: "19.990.000₫",
  },
  {
    image: "accsets/image/XiaoMi/xiaomi-11t-pro-blue-3.jpg",
    classProductName: "xiaomi",
    name: "Xiaomi 11T Pro 5G",
    price: "14.990.000₫",
  },
  {
    image: "accsets/image/XiaoMi/xiaomi-mi-10t-pro-den-4.jpg",
    classProductName: "xiaomi",
    name: "Xiaomi Mi 10T Pro 5G",
    price: "12.990.000₫",
  },
];

for (let i = 0; i < arrayProducts.length; i++) {
  if (i % 2 == 0) {
    arrayProducts[i].classBtnBuy1 = "";
  } else {
    arrayProducts[i].classBtnBuy1 = "btn-buy1";
  }
}
const newArrayProducts = mixArray(arrayProducts);
renderProduct(newArrayProducts);
// hien thi danh sach dien thoai theo hang khi click:
function showMobile(btn, key) {
  let arrayMobile = [];
  btn.click(function () {
    reserBorderBtn();
    btn.css("border", "1px solid rgb(35, 20, 243)");
    arrayMobile = arrayProducts.filter(function (object) {
      if (object.classProductName.trim() == key) {
        return object;
      }
    });
    productHtml = "<div class='row gy-3'>";
    // console.log(arrayMobile);
    renderProduct(arrayMobile);
  });
}

showMobile(getElmClassBtnIphone, "iphone");
showMobile(getElmClassBtnSamsung, "samsung");
showMobile(getElmClassBtnOppo, "oppo");
showMobile(getElmClassBtnVivo, "vivo");
showMobile(getElmClassBtnXiaomi, "xiaomi");
// render lai toàn bộ điện thoại;
function showMobileAll() {
  getElmClassBtnAll.click(function () {
    productHtml = "<div class='row gy-3'>";
    reserBorderBtn();
    getElmClassBtnAll.css("border", "1px solid rgb(35, 20, 243)");
    renderProduct(newArrayProducts);
  });
}
showMobileAll();
// ham reset lại border tất cả các nút
function reserBorderBtn() {
  $(".btn__header").css("border", "1px solid #ccc");
}
// ham hoan doi các phan tu trong mang
function mixArray(array) {
  for (let i = 0; i < array.length; i = i + 2) {
    for (let j = i + 2; j < array.length; j++) {
      let term = array[j];
      array[j] = array[i];
      array[i] = term;
    }
  }
  return array;
}

// const getElmClassBtnProduct=$('.product')
// const getElmClassBtnBuy=$('.product__btn-buy')
// function translateBtnBuy(){
//     for(let i=0;i<arrayProducts.length;i++){
//         $(getElmClassBtnProduct[i]).mouseover(function(){
//             $(getElmClassBtnBuy[i]).css('transform','translateX(0)').css('opacity','1')
//         })
//         $(getElmClassBtnProduct[i]).mouseout(function(){
//             $(getElmClassBtnBuy[i]).css('transform','translateX(180px)').css('opacity','0')
//             setTimeout(function(){
//                 if(getElmClassBtnBuy[i].style.transform=='translateX(180px)'){
//                     console.log(getElmClassBtnBuy[i].style.transform)
//                     setTimeout(function(){
//                         $(getElmClassBtnBuy[i]).css('transform','translateX(-180px)').css('opacity','0')

//                     },600)
//         }
//         })
//     })}}
// translateBtnBuy();
