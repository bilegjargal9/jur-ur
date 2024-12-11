"use strict";


(function () {
  const products = [
    {
      _id: "1",
      name: "Юникорн",
      description: "Шоколадтай кекстэй, шоколадтай маслон крем, шоколадны бөмбөлөгний хавчуургатай. Гадна талаараа бүрсэн хүүхдийн бялуу",
      price: ["43,000", "50,000"],
      order_code: 12556,
      category: "happy_cake",
      size: ["8инч", "9инч"],
      picture_path: "product1"
    },

    {
      _id: "1",
      name: "Red Santa",
      description: "Red velvet, Шинэ жилийн онцгой загвар",
      price: ["55,000", "65,000"],
      order_code: 12557,
      category: "new_products",
      size: ["7инч", "9инч"],
      picture_path: "product5"
    },

    {
      _id: "3",
      name: "Луувантай кекс",
      description: "Лууван болон хушгаар баяжуулсан синнамонтой кекс.",
      price: ["7,400"],
      order_code: 12557,
      category: "new_products",
      size: ["7инч", "8инч"],
      picture_path: "product3"
    },
    {
      _id: "4",
      name: "Аарцтай пирог",
      description: "Монгол өв уламжлалаа шингээн аарцны амтыг пирогтой төгс зохицуулав. ",
      price: ["43,000", "50,000"],
      order_code: 12557,
      category: "new_products",
      size: ["7инч", "8инч"],
      picture_path: "product4"
    },
    {
      _id: "5",
      name: "Тахианы махан чиабатта",
      description: "Тахианы цээж мах болон чиабатта талх, амтат ногоогоор баяжуулсан сендвич.",
      price: ["8,900", "8,900"],
      order_code: 12557,
      category: "new_products",
      size: ["хар талх", "Цагаан талх"],
      picture_path: "product2"
    },
    {
      _id: "6",
      name: "Surprise sleigh",
      description: "Амтат шоколадтай жинхэнэ баярын бялуу.",
      price: ["55,000", "60,000"],
      order_code: 12557,
      category: "new_products",
      size: ["8инч", "9инч"],
      picture_path: "product6"
    },
    {
      _id: "7",
      name: "Christmastide",
      description: "Орео жигнэмэгийн амтыг мэдрүүлэм бялуу.",
      price: ["41,500", "54,500"],
      order_code: 12557,
      category: "new_products",
      size: ["7инч", "9инч"],
      picture_path: "product7"
    },


    {
      _id: "8",
      name: "Аз жаргалын бялуу",
      description: "Амтат маслон кремтэй баярын бялуу.",
      price: ["16,500"],
      order_code: 12557,
      category: "happy_cake",
      size: ["7инч"],
      picture_path: "product8"
    },    
    /*Аз жаргалын бялуу*/
    {
      _id: "9",
      name: "Зул сар",
      description: "Амтат шоколадтай зул сарын баярын бялуу.",
      price: ["28,500", "34,500", "39,500"],
      order_code: 12557,
      category: "happy_cake",
      size: ["7инч", "8инч", "9инч"],
      picture_path: "product9"
    }, 
    {
      _id: "10",
      name: "Цасхан",
      description: "Орео жигнэмэгтэй, цагаан кекстэй зул сарын баярын бялуу.",
      price: ["28,500", "34,500", "39,500"],
      order_code: 12557,
      category: "happy_cake",
      size: ["7инч", "8инч", "9инч"],
      picture_path: "product10"
    },  
    {
      _id: "11",
      name: "Гялалзах мичид",
      description: "Амтат шоколадтай жинхэнэ баярын бялуу.",
      price: ["28,500", "34,500", "39,500"],
      order_code: 12557,
      category: "happy_cake",
      size: ["7инч", "8инч", "9инч"],
      picture_path: "product11"
    }, 
    {
      _id: "12",
      name: "Шидэт боргоцой",
      description: "Маслон кремтэй жинхэнэ зул сарын баярын бялуу.",
      price: ["28,500", "34,500", "39,500"],
      order_code: 12557,
      category: "happy_cake",
      size: ["7инч", "8инч", "9инч"],
      picture_path: "product12"
    }, 
    {
      _id: "13",
      name: "Талхны үдэшлэг",
      description: "Хүүхэд багачуудын хайрт ноён талхчны үсчний газар сэдэвт шоколадтай бялуу.",
      price: ["28,500", "34,500", "39,500"],
      order_code: 12557,
      category: "happy_cake",
      size: ["7инч", "8инч", "9инч"],
      picture_path: "product13"
    }, 
    {
      _id: "14",
      name: "Талхны шинэ жил",
      description: "Хүүхэд багачуудын хайрт ноён талхчны үсчний газар сэдэвт сүүтэй бялуу.",
      price: ["43,000", "50,000"],
      order_code: 12557,
      category: "happy_cake",
      size: ["7инч", "8инч"],
      picture_path: "product14"
    }, 


    /*Бренд бялуу */
    {
      _id: "17",
      name: "Mr. Bat",
      description: "Амтат шоколадтай жинхэнэ баярын бялуу.",
      price: ["75,000"],
      order_code: 12557,
      category: "brand_cake",
      size: ["7инч"],
      picture_path: "product17"
    }, 

    {
      _id: "15",
      name: "Шоколадтай дирог",
      description: "Амтат шоколадтай орос технологиор бүтээсэн пирог.",
      price: ["43,000", "50,000"],
      order_code: 12557,
      category: "brand_cake",
      size: ["7инч", "8инч"],
      picture_path: "product15"
    },  
    {
      _id: "16",
      name: "Halloween special",
      description: "Халловины баярт зориулан урласан сүүн кекстэй бялуу.",
      price: ["35,000"],
      order_code: 12557,
      category: "brand_cake",
      size: ["8инч"],
      picture_path: "product16"
    }, 

    {
      _id: "18",
      name: "Cursed Bride",
      description: "Халловины баярт зориулсан давхар бялуу. Улаан кекстэй цагаан шоколадтай бялуу.",
      price: ["352,500", "400,000"],
      order_code: 12557,
      category: "brand_cake",
      size: ["6*6", "8*8"],
      picture_path: "product18"
    }, 
    {
      _id: "19",
      name: "Гүнжхэн",
      description: "Амтат аз жаргалын бялуу.",
      price: ["38,000", "43,000"],
      order_code: 12557,
      category: "brand_cake",
      size: ["7инч", "8инч"],
      picture_path: "product19"
    }, 
    
    {
      _id: "20",
      name: "Юникорн",
      description: "Бяцхан үрсдээ зориулсан цагаан кекстэй аз жаргалын бялуу.",
      price: ["43,000", "48,000"],
      order_code: 12557,
      category: "brand_cake",
      size: ["7инч", "8инч"],
      picture_path: "product20"
    }, 


    /*Талх нарийн боов */
    {
      _id: "21",
      name: "Үзэмтэй тэрүүн",
      description: "Үзэм болон бурмаар тэтгэсэн тэргүүнийг таны таалалд нийцүүлэв.",
      price: ["3,200"],
      order_code: 12557,
      category: "bread",
      size: ["1 ширхэг"],
      picture_path: "product21"
    }, 
    {
      _id: "22",
      name: "Булочка жигнэмэгтэй",
      description: "Пичэнтэй булочка.",
      price: ["2,000"],
      order_code: 12557,
      category: "bread",
      size: ["1 ширхэг"],
      picture_path: "product22"
    }, 
    {
      _id: "23",
      name: "Хүрэн хилэн мини",
      description: "Кекс хүрэн хилэн мини.",
      price: ["10,500"],
      order_code: 12557,
      category: "bread",
      size: ["1 ширхэг"],
      picture_path: "product23"
    }, 
    {
      _id: "24",
      name: "Талх жимстэй",
      description: "Буудайн гурил БГ-055, олон үрийн гурил, элсэн чихэр, хөх тарианы гурил, хар чавга, хушга, үзэм, чангаанз, цөцгийн тос, наран цэцгийн үр, овъёос, хатаасан дрожж, гүнжидийн үр",
      price: ["4,700"],
      order_code: 12557,
      category: "bread",
      size: ["1 ширхэг"],
      picture_path: "product24"
    },
    {
      _id: "25",
      name: "Талх амтлаг",
      description: "Буудайн гурил БГ-055, элсэн чихэр, цөцгийн тос, өндөг, хуурай крем, буйлсны самар, хуурай сүү, ургамлын тос, хатаасан дрожж, хүнсний давс, чанаржуулагч (Е472е, Е1100)",
      price: ["4,700"],
      order_code: 12557,
      category: "bread",
      size: ["1 ширхэг"],
      picture_path: "product25"
    },
    {
      _id: "26",
      name: "Шанзтай тэргүүн",
      description: "Амтат шанзаар баяжуулсан амтат тэргүүн",
      price: ["7,800"],
      order_code: 12557,
      category: "bread",
      size: ["1 ширхэг"],
      picture_path: "product26"
    },
    {
      _id: "27",
      name: "Гүзээлзгэнтэй бялуу мини",
      description: "Орц найрлага: өндөг, БГ-055, элсэн чихэр, амтлаг крем, өнгөлгөө, шоколад, цөцгийн тос, эрдэнэ шишийн цардуул, ургамлын тос, цийдмэгжүүлэгч (Е420, Е491, Е435, Е475), хөөлгөгч нунтаг (Е450а, Е341i, Е500)",
      price: ["6,900"],
      order_code: 12557,
      category: "bread",
      size: ["1 ширхэг"],
      picture_path: "product27"
    },
    /*Салат сендвич */
    {
      _id: "28",
      name: "Тахианы чиабатта",
      description: "Тахианы мах болон эрүүл мэндэд тустай гурил, витаминлаг ногоогоор баяжуулсан таны төлөө бүтээв.",
      price: ["8,900"],
      order_code: 12557,
      category: "salat_sandwich",
      size: ["1 ширхэг"],
      picture_path: "product28"
    },
    {
      _id: "29",
      name: "Сендвич",
      description: "Тахианы мах болон эрүүл мэндэд тустай гурил, витаминлаг ногоогоор баяжуулсан таны төлөө бүтээв.",
      price: ["8,900"],
      order_code: 12557,
      category: "salat_sandwich",
      size: ["1 ширхэг"],
      picture_path: "product29"
    },
    {
      _id: "30",
      name: "Үхрийн махан бургер",
      description: "Үхрийн махтай бургер",
      price: ["8,900"],
      order_code: 12557,
      category: "salat_sandwich",
      size: ["1 ширхэг"],
      picture_path: "product30"
    },
    {
      _id: "31",
      name: "Тунатай кроссант",
      description: "Тунатай кроссант",
      price: ["8,900"],
      order_code: 12557,
      category: "salat_sandwich",
      size: ["1 ширхэг"],
      picture_path: "product31"
    },
    {
      _id: "32",
      name: "Хотдог",
      description: "Зайдас болон ногоотой",
      price: ["8,900"],
      order_code: 12557,
      category: "salat_sandwich",
      size: ["1 ширхэг"],
      picture_path: "product32"
    },
    {
      _id: "33",
      name: "Хиамтай кроссант",
      description: "Хиамтай кроссант",
      price: ["8,900"],
      order_code: 12557,
      category: "salat_sandwich",
      size: ["1 ширхэг"],
      picture_path: "product33"
    },
    {
      _id: "34",
      name: "Гахайн махтай кроссант",
      description: "Гахай махтай кроссант",
      price: ["8,900"],
      order_code: 12557,
      category: "salat_sandwich",
      size: ["1 ширхэг"],
      picture_path: "product34"
    },



    /*Дессэрт*/

    {
      _id: "36",
      name: "Шоколадтай күүки",
      description: "Шоколадтай жигнэмэг, бяцхан үрсдээ зориулав.",
      price: ["5,900"],
      order_code: 12557,
      category: "dessert",
      size: ["1 ширхэг"],
      picture_path: "product36"
    },
    {
      _id: "35",
      name: "Алаг жигнэмэг",
      description: "Алаг жигнэмэг, сүү өндөгөөр баяжуулан бүтээв.",
      price: ["8,900"],
      order_code: 12557,
      category: "dessert",
      size: ["1 ширхэг"],
      picture_path: "product35"
    },
    {
      _id: "37",
      name: "Жимсний хавчуургатай талх",
      description: "Жимс болон шоколадан кремтэй бор талх.",
      price: ["5,900"],
      order_code: 12557,
      category: "dessert",
      size: ["1 ширхэг"],
      picture_path: "product37"
    },
    /*уух зүйл*/
    {
      _id: "38",
      name: "Чацаргантай шүүс",
      description: "Чацаргантай шүүс.",
      price: ["5,900"],
      order_code: 12557,
      category: "drinks",
      size: ["1 ширхэг"],
      picture_path: "product38"
    },
    {
      _id: "40",
      name: "Үзэм, алимтай шүүс",
      description: "Үзэм, алимтай шүүс.",
      price: ["5,900"],
      order_code: 12557,
      category: "drinks",
      size: ["1 ширхэг"],
      picture_path: "product40"
    },
    {
      _id: "39",
      name: "Нэрсний шүүс",
      description: "Нэрсний шүүс.",
      price: ["5,900"],
      order_code: 12557,
      category: "drinks",
      size: ["1 ширхэг"],
      picture_path: "product39"
    },
  ];


  
  const productListModel = function () {
    return products;
  };

  const productModel = function (productId) {
    return products.find((product) => product._id === productId) || null;
  };
  
  const categoryProducts = function (category) {
    return products.filter((product) => product.category === category);
  };


  const ProductModels = {
    productListModel: productListModel,
    productModel: productModel,
    categoryProducts: categoryProducts,
  };

  if (typeof exports !== "undefined") {
    exports.ProductModels = ProductModels;
  } else {
    window.ProductModels = ProductModels;
  }
})();
