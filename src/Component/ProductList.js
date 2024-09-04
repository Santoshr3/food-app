import React from "react";
import ReactDOM from "react-dom/client";

// Define the product list with correct syntax
export const MY_IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/dsrkl546bfqeecoohkvi"

export const ProductList = [
    {
      
            type: "F",
            id: "73011",
            cuisines: ["Chicken", "Biryani"], 
            name: "KFC",
            cloudinaryImageId: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8PCRY2h1pkEI2kWPc7Al4cvpG6BWNqIpvQQ&s",
            slaString: "25-30 Minutes",
            productdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nisi corporis, ducimus ipsum quod impedit perferendis dolor temporibus laudantium porro quasi magnam ad dignissimos animi, maiores ex. Dicta, fugit sit."
    },
    {
            type: "F",
            id: "54213",
            name: "Domnic Pizza",
            cuisines: ["Domnic", "Pizza"],
            cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/dsrkl546bfqeecoohkvi",
            slaString: "20-30 Minutes",
            productdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nisi corporis, ducimus ipsum quod impedit perferendis dolor temporibus laudantium porro quasi magnam ad dignissimos animi, maiores ex. Dicta, fugit sit."
    },
    {
            type: "F",
            id: "542213",
            name: "Chinese Wok",
            cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
            cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/2e26f7eef4d68f40c00269f43d7afaa2",
            slaString: "20-30 Minutes",
            productdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nisi corporis, ducimus ipsum quod impedit perferendis dolor temporibus laudantium porro quasi magnam ad dignissimos animi, maiores ex. Dicta, fugit sit."
    },
    {   
            type: "F",
            id: "54213",
            name: "Srikanya",
            cuisines: ["Biryani", "Andhra"],
            cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/tw4ytwle8yommmgdy4b0",
            slaString: "10-30 Minutes",
            productdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nisi corporis, ducimus ipsum quod impedit perferendis dolor temporibus laudantium porro quasi magnam ad dignissimos animi, maiores ex. Dicta, fugit sit."
    },
    {
            type: "F",
            id: "5421333",
            name: "Mughal Restaurant",
            cuisines: ["Mughlai", "Biryani", "Chinese", "Tandoor"],
            cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/hncxo2crchgsderw54py",
            slaString: "50-60 Minutes",
            productdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nisi corporis, ducimus ipsum quod impedit perferendis dolor temporibus laudantium porro quasi magnam ad dignissimos animi, maiores ex. Dicta, fugit sit."
    },
    {
            type: "F",
            id: "5442413",
            name: "Sharadas Chinese Restaurant",
            cuisines: ["Mughlai", "Biryani", "Chinese", "Tandoor"],
            cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/gk9lfkobvwgurghaevbn",
            slaString: "10-30 Minutes",
            productdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nisi corporis, ducimus ipsum quod impedit perferendis dolor temporibus laudantium porro quasi magnam ad dignissimos animi, maiores ex. Dicta, fugit sit."
    },
    {
            type: "F",
            id: "3453653",
            name: "Burger ",
            cuisines: ["Hongkong", "Burger"],
            cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/j9rd9c3kx9azsdkr49mk",
            slaString: "20-30 Minutes",
            productdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nisi corporis, ducimus ipsum quod impedit perferendis dolor temporibus laudantium porro quasi magnam ad dignissimos animi, maiores ex. Dicta, fugit sit."
    },
    {
            type: "F",
            id: "455654",
            name: "Subway",
            cuisines: ["Salads", "Snacks", "Beverages",
                "Kondapur"],
            cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/09584f85981b251843e66660306f1878",
            slaString: "20-30 Minutes",
            productdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nisi corporis, ducimus ipsum quod impedit perferendis dolor temporibus laudantium porro quasi magnam ad dignissimos animi, maiores ex. Dicta, fugit sit."
    },
    {
            type: "F",
            id: "6456564",
            name: "Big Bowl",
            cuisines: ["Meals", "Andhra"],
            cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/0a5d10de-ec04-47e3-ab3b-eabc883112a7_912048.JPG",
            slaString: "50-60 Minutes",
            productdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nisi corporis, ducimus ipsum quod impedit perferendis dolor temporibus laudantium porro quasi magnam ad dignissimos animi, maiores ex. Dicta, fugit sit."
    },
    {
            type: "F",
            id: "939737",
            name: "Chandigarh Dhaba",
            cuisines: ["Butter Chicken"],
            cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dkcduodu7fuqn5lqn8f2",
            slaString: "15-30 Minutes",
            productdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nisi corporis, ducimus ipsum quod impedit perferendis dolor temporibus laudantium porro quasi magnam ad dignissimos animi, maiores ex. Dicta, fugit sit."
    },
    {
            type: "F",
            id: "73011",
            cuisines: ["Chicken", "Biryani"], 
            name: "Angaara",
            cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/568af3b3862bc0bfdf0c30c18da08ff0",
            slaString: "25-30 Minutes",
            productdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nisi corporis, ducimus ipsum quod impedit perferendis dolor temporibus laudantium porro quasi magnam ad dignissimos animi, maiores ex. Dicta, fugit sit."
    },
    {
            type: "F",
            id: "542313",
            name: "Asoka Restaurant",
            cuisines: ["Chinese", "Snacks", "Biryani"],
            cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/295f1bfc-237b-4bd4-832b-a23fdf08f8aa_622195.JPG",
            slaString: "55-60 Minutes",
            productdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nisi corporis, ducimus ipsum quod impedit perferendis dolor temporibus laudantium porro quasi magnam ad dignissimos animi, maiores ex. Dicta, fugit sit."
    },
    {
            type: "F",
            id: "5429213",
            name: "Mandi king arabian restaurant",
            cuisines: ["Kabab", "Arabian", "Biryani"],
            cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63dd75492c47fcec191132b8eb299ea5",
            slaString: "20-30 Minutes",
            productdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nisi corporis, ducimus ipsum quod impedit perferendis dolor temporibus laudantium porro quasi magnam ad dignissimos animi, maiores ex. Dicta, fugit sit."
    },
    {   
            type: "F",
            id: "542131",
            name: "Mehraab Restaurant",
            cuisines: ["Biryani", "Andhra Meals"],
            cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lm0zexw0ulqsisuvhjaj",
            slaString: "20-30 Minutes",
            productdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nisi corporis, ducimus ipsum quod impedit perferendis dolor temporibus laudantium porro quasi magnam ad dignissimos animi, maiores ex. Dicta, fugit sit."
    },
    {
            type: "F",
            id: "5421330",
            name: "Mughlai Restaurant",
            cuisines: ["Kabab", "Arabian", "Biryani"],
            cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/64250274cf06f7be4e44e5626a2aeae3",
            slaString: "15-30 Minutes",
            productdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nisi corporis, ducimus ipsum quod impedit perferendis dolor temporibus laudantium porro quasi magnam ad dignissimos animi, maiores ex. Dicta, fugit sit."
    },
    {
            type: "F",
            id: "544213",
            name: "Fire & Ice Restaurant",
            cuisines: ["Biryani", "North Indian", "Chinese"],
            cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yeednzto1jusnnhswke0",
            slaString: "30-50 Minutes",
            productdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nisi corporis, ducimus ipsum quod impedit perferendis dolor temporibus laudantium porro quasi magnam ad dignissimos animi, maiores ex. Dicta, fugit sit."
    },
    {
            type: "F",
            id: "31145363",
            name: "Sarvi Restaurant ",
            cuisines: ["Biryani", "North Indian", "Chinese"],
            cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wkvh8xtryde5dj2nrme5",
            slaString: "25-30 Minutes",
            productdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nisi corporis, ducimus ipsum quod impedit perferendis dolor temporibus laudantium porro quasi magnam ad dignissimos animi, maiores ex. Dicta, fugit sit."
    },
    {
            type: "F",
            id: "45565411",
            name: "Hilton Restaurant (Hillstar)",
            cuisines: ["Chines", "Salads", "Sweets",
                "Kondapur"],
            cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tiezrkulzv6fwvktfpoq",
            slaString: "35-40 Minutes",
            productdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nisi corporis, ducimus ipsum quod impedit perferendis dolor temporibus laudantium porro quasi magnam ad dignissimos animi, maiores ex. Dicta, fugit sit."
    },
    {
            type: "F",
            id: "6564",
            name: "Bombay Restaurant",
            cuisines: ["Biryani", "Chinese", "North Indian"],
            cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/thhf5lvskkq8nxazkyqv",
            slaString: "50-60 Minutes",
            productdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nisi corporis, ducimus ipsum quod impedit perferendis dolor temporibus laudantium porro quasi magnam ad dignissimos animi, maiores ex. Dicta, fugit sit."
    },
    {
            type: "F",
            id: "939708",
            name: "Rajwada Pure Veg Restaurant",
            cuisines: ["Indian"],
            cloudinaryImageId: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aqk3hqx8zggnfctlgcyt",
            slaString: "10-30 Minutes",
            productdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nisi corporis, ducimus ipsum quod impedit perferendis dolor temporibus laudantium porro quasi magnam ad dignissimos animi, maiores ex. Dicta, fugit sit."
    },
];
