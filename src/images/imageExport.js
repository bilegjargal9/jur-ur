const images_s = {
    /*шинэ бүтээгдэхүүн new_products*/
    product1: require("./product1.png"),
    product2: require("./2.png"), 
    product3: require("./3.png"), 
    product4: require("./4.png"), 
    product5: require("./5.png"), 
    product6: require("./6.png"), 
    product7: require("./7.png"), 

    /*Аз жаргалын бялуу happy_cake*/
    product8: require("./8.png"),
    product9: require("./9.png"), 
    product10: require("./10.png"), 
    product11: require("./11.png"), 
    product12: require("./12.png"), 
    product13: require("./13.png"), 
    product14: require("./14.png"), 

    /*Бренд бялуу brand_cake*/
    product15: require("./15.png"),
    product16: require("./16.png"), 
    product17: require("./17.png"), 
    product18: require("./18.png"), 
    product19: require("./19.png"), 
    product20: require("./20.png"), 

    /*Талх нарийн боов bread*/
    product21: require("./21.png"),
    product22: require("./22.png"), 
    product23: require("./23.png"), 
    product24: require("./24.png"), 
    product25: require("./25.png"), 
    product26: require("./26.png"), 
    product27: require("./27.png"),

    /*Салат, сендвич salat_sandwich*/
    product28: require("./28.png"),
    product29: require("./29.png"), 
    product30: require("./30.png"), 
    product31: require("./31.png"), 
    product32: require("./32.png"), 
    product33: require("./33.png"), 
    product34: require("./34.png"),

    /*Дессерт dessert*/
    product35: require("./35.png"),
    product36: require("./36.png"), 
    product37: require("./37.png"), 
    /*Уух зүйлс drinks*/
    product38: require("./38.png"), 
    product39: require("./39.png"), 
    product40: require("./40.png"), 
};

const findImage = function (picture_name) {
    return images_s[picture_name] || null;
};

export { images_s, findImage }; 
