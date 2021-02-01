const SHOP_DATA = {
  hats: {
    id: 1,
    title: "Hats",
    routeName: "hats",
    items: [
      {
        id: 1,
        name: "Six-Panels Hat",
        imageUrl:
          "https://cdn11.bigcommerce.com/s-stm8v/images/stencil/500x659/products/1005/4534/3D_G_HAT_-_RED__16804.1576811793.1280.1280__29584.1579206619.jpg?c=2&imbypass=on",
        price: 40,
      },
      {
        id: 2,
        name: "Golf Bucket Hat",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/61otrq-bX8L._UX522_.jpg",
        price: 50,
      },
      {
        id: 3,
        name: "Flame Hat Cap",
        imageUrl:
          "https://ae01.alicdn.com/kf/HTB1PrG2bUGF3KVjSZFvq6z_nXXa0.jpg",
        price: 40,
      },
      {
        id: 4,
        name: "Lacoste x Wang Le Fleur Bucket Hat",
        imageUrl:
          "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/cache=expiry:max/rotate=deg:exif/rotate=deg:0/resize=width:1200/output=quality:70/compress/u76ZTBvVQt63vWcyWlrM",
        price: 60,
      },
      {
        id: 5,
        name: "Golf Beanie",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71uZ-j5hS0L._AC_UX679_.jpg",
        price: 25,
      },
      {
        id: 6,
        name: "Le Fleur Hat",
        imageUrl:
          "https://acclaimmag.com/wp-content/uploads/2016/06/LE_FLEUR_SKETCH_CAP__94452.1465714337.1000.1200.jpg",
        price: 40,
      },
      {
        id: 7,
        name: "Flower Boy Six-Panels",
        imageUrl:
          "https://images.complex.com/complex/images/fl_lossy,q_auto/v1/q7z50vgmztsfktnrruld/tyler-creator-releases-new-golf-wang-merch",
        price: 40,
      },
      {
        id: 8,
        name: "Flower Boy Six-Panels 2",
        imageUrl:
          "https://process.fs.grailed.com/AJdAgnqCST4iPtnUxiGtTz/cache=expiry:max/rotate=deg:exif/resize=height:670,fit:scale/output=format:webp,quality:90/compress/https://cdn.fs.grailed.com/api/file/9O7gs86yQkSNb8j5evpP",
        price: 40,
      },
      {
        id: 9,
        name: "Chicken 'n Waffles Hat",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAMw8H5gcdUnYSmtctwcb1cSEZD3JFi9POkPJ5O19-tlfgfQK4aw&s",
        price: 40,
      },
    ],
  },
  sneakers: {
    id: 2,
    title: "Sneakers",
    routeName: "sneakers",
    items: [
      {
        id: 10,
        name: "Flame Chuck 70",
        imageUrl:
          "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F09%2Fgolf-le-fleur-converse-chuck-70-flames-release-2.jpg?q=75&w=800&cbr=1&fit=max",
        price: 220,
      },
      {
        id: 11,
        name: "One Star OX",
        imageUrl:
          "https://stockx.imgix.net/Converse-One-Star-Ox-Tyler-The-Creator-Golf-Le-Fleur-Bachelor-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256",
        price: 280,
      },
      {
        id: 12,
        name: "Converse Gianno OX",
        imageUrl:
          "https://s1.qwant.com/thumbr/0x380/1/f/583b9c09bbb75bc5c804022ce2a001475e54668923f267e8f68598856947b2/Golf-Le-Fleur-Gianno-Ox-Cream-167375C-2.jpg?u=https%3A%2F%2Fsneakernews.com%2Fwp-content%2Fuploads%2F2019%2F11%2FGolf-Le-Fleur-Gianno-Ox-Cream-167375C-2.jpg&q=0&b=1&p=0&a=1",
        price: 110,
      },
      {
        id: 13,
        name: "Golf Le Fleur Gianno",
        imageUrl:
          "https://s1.qwant.com/thumbr/0x380/a/b/bfe562fc92080d046061138615e9d54e15bb2dcf7a1e492a4e318c423d4f8d/11-11-2019_converse_xgolflefleu_gianno_brown_purple_167376c_blr_1.jpg?u=https%3A%2F%2Fmedia.endclothing.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F1%2F11-11-2019_converse_xgolflefleu_gianno_brown_purple_167376c_blr_1.jpg&q=0&b=1&p=0&a=1",
        price: 160,
      },
      {
        id: 14,
        name: "One Star Beige",
        imageUrl:
          "https://s1.qwant.com/thumbr/0x380/8/1/c2b329557a24873cdb7c437621bbcb0743b7d0908fbba83304b4f5c41023f4/35200080-1.jpg?u=https%3A%2F%2Fassets.atmos-tokyo.com%2Fitems%2FL%2F35200080-1.jpg&q=0&b=1&p=0&a=1",
        price: 160,
      },
      {
        id: 15,
        name: "Vans Old Skool",
        imageUrl:
          "https://s1.qwant.com/thumbr/0x380/b/b/a007f671c8ef7cc1a6d852913edbe807130e1d262c8301f8182934283de484/2.jpg?u=https%3A%2F%2Fimage.goat.com%2Fcrop%2F750%2Fattachments%2Fproduct_template_additional_pictures%2Fimages%2F000%2F049%2F808%2Foriginal%2F2.jpg&q=0&b=1&p=0&a=1",
        price: 160,
      },
      {
        id: 16,
        name: "Golf Le Fleur x Converse",
        imageUrl:
          "https://static.sneakerjagers.com/news/nl/2019/06/https___hypebeast.com_image_2019_06_tyler-the-creator-golf-le-fleur-rainbow-release-details-first-look-1-1.jpg",
        price: 190,
      },
      {
        id: 17,
        name: "Quilted Velvets Converse",
        imageUrl:
          "https://i.pinimg.com/originals/f8/7e/89/f87e89ef3f3bfe96dee1ca24a10f3ede.jpg",
        price: 200,
      },
    ],
  },
  jackets: {
    id: 3,
    title: "Jackets",
    routeName: "jackets",
    items: [
      {
        id: 18,
        name: "Pink by Golf Wang",
        imageUrl:
          "https://cdn10.bigcommerce.com/s-3vtd3yx6en/products/225/images/612/GLF_BOMBER_PINK_1__68838.1565388280.1280.1280.jpg?c=2",
        price: 125,
      },
      {
        id: 19,
        name: "Blue Flame Coat",
        imageUrl:
          "https://www.dhresource.com/600x600/f2/albu/g8/M01/5A/B8/rBVaV12mdjiAV2dqAAGBbWZXbcY858.jpg",
        price: 90,
      },
      {
        id: 20,
        name: "Unisex Lacoste x Golf Le Fleur",
        imageUrl:
          "https://cdna.lystit.com/photos/xhibition/8f682c8c/lacoste-Geode-Plumi-Golf-Le-Fleur-X-Track-Jacket.jpeg",
        price: 90,
      },
      {
        id: 21,
        name: "Flower Boy Jacket",
        imageUrl:
          "https://ae01.alicdn.com/kf/Hc939b3f8beee41abbbaf99496b732ae09.jpg_q50.jpg",
        price: 165,
      },
      {
        id: 22,
        name: "Converse Jacket",
        imageUrl:
          "https://s7d5.scene7.com/is/image/UrbanOutfitters/45221702_010_b?$xlarge$&hei=900&qlt=80&fit=constrain",
        price: 185,
      },
    ],
  },
  womens: {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "Soft Cardigan",
        imageUrl:
          "https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-INT-Site/Sites-master/en/dw852c622b/AH0467_6KF_33.jpg",
        price: 150,
      },
      {
        id: 24,
        name: "T-shirt",
        imageUrl:
          "http://thesource.com/wp-content/uploads/2019/07/tyler-the-creator-lacoste-golf-le-fleur-collection-21.jpg",
        price: 120,
      },
      {
        id: 25,
        name: "Tennis Shorts",
        imageUrl:
          "https://www.numero.com/sites/default/files/images/article_new/slides/lacoste_x_golf_le_fleur_10.jpg",
        price: 80,
      },
      {
        id: 26,
        name: "Cotton Golf Colors",
        imageUrl:
          "https://cdna.lystit.com/520/650/n/photos/lacoste/ed8ac0b4/lacoste-WhiteLight-Pink-X-Golf-Le-Fleur-Relaxed-Color-blocked-Polo.jpeg",
        price: 80,
      },
      {
        id: 27,
        name: "Golf Suit",
        imageUrl:
          "https://static.sneakerjagers.com/news/nl/2019/07/POLO-X-GOLF-LE-FLEUR-PH1026-00-59A.jpg",
        price: 200,
      },
      {
        id: 28,
        name: "Bi-Color T-Shirt",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-JC3ONZlWvWM2RH3ozqxx-3Qk3pMP2ESvmNBl0qWv5TGO20Ue2A&s",
        price: 135,
      },
      {
        id: 29,
        name: "Bermuda Shorts",
        imageUrl:
          "https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-INT-Site/Sites-master/en/dw320495c3/AH0467_6KF_32.jpg",
        price: 20,
      },
    ],
  },
  mens: {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 30,
        name: "Jeans Salopette",
        imageUrl:
          "https://i.pinimg.com/originals/35/79/8c/35798c8a56aeb6617699cd880e0e6fa0.jpg",
        price: 325,
      },
      {
        id: 31,
        name: "Light Weight Jacket",
        imageUrl:
          "https://assets.vogue.com/photos/589135eff88f7c2037364781/master/w_1600%2Cc_limit/tyler-the-creator-golf-lookbook-08.jpg",
        price: 20,
      },
      {
        id: 32,
        name: "Fur Jacket",
        imageUrl:
          "https://highlark.com/wp-content/uploads/2016/10/Golf-Wang-Highlark-07.jpg",
        price: 200,
      },
      {
        id: 33,
        name: "Find Some Time Suit",
        imageUrl: "https://i.redd.it/9kx4gr089sd21.png",
        price: 300,
      },
      {
        id: 34,
        name: "College Jacket",
        imageUrl:
          "https://i.pinimg.com/originals/ec/21/90/ec219022af2823fbb6fe68f158a0a03d.jpg",
        price: 180,
      },
      {
        id: 35,
        name: "White Golf Hoodie",
        imageUrl:
          "https://i.pinimg.com/originals/3d/93/14/3d9314146054ffbbadf46352f44e2e99.jpg",
        price: 90,
      },
    ],
  },
};

export default SHOP_DATA;
