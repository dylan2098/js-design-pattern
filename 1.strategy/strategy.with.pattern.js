/**
 * Giảm giá khi người dùng đặt trước một sản phẩm VINFAST
 * @param {*} originalPrice
 * @returns
 * **/
function preOrderPrice(originalPrice) {
    return originalPrice * 0.8;
}

/**
 * Tiếp tục thêm tính năng khuyến ãi thông thường
 * @param {*} originalPrice
 * @returns
 * **/
function promotionPrice(originalPrice) {
    return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
}

/**
 * Tiếp tục thêm tính năng khuyến ãi thông thường
 * @param {*} originalPrice
 * @returns
 * **/

function defaultPrice(originalPrice) {
    return originalPrice;
}

/**
 * Tiếp tục thêm tính năng khuyến ãi thông thường
 * @param {*} originalPrice
 * @returns
 * **/
function dayPrice(originalPrice) {
    return originalPrice * 0.6;
}

/**
 * Tiếp tục thêm tính năng khuyến ãi thông thường
 * @param {*} originalPrice
 * @returns
 * **/
function blackFridayPrice(originalPrice) {
    return originalPrice * 0.7;
}

// function getPrice(originalPrice, typePromotion) {
//     if (typePromotion === "preOrder") {
//         return preOrderPrice(originalPrice);
//     }

//     if (typePromotion === "blackFriday") {
//         return blackFriday(originalPrice);
//     }

//     if (typePromotion === "promotion") {
//         return promotionPrice(originalPrice);
//     }

//     if (typePromotion === "default") {
//         return defaultPrice(originalPrice);
//     }
// }

const getPriceStrategies = {
    preOrder: preOrderPrice,
    promotion: promotionPrice,
    blackFriday: blackFridayPrice,
    dayPrice,
    default: defaultPrice,
};

function getPrice(originalPrice, typePromotion) {
    return getPriceStrategies[typePromotion](originalPrice);
}

console.log("---->", getPrice(200, "dayPrice"));
