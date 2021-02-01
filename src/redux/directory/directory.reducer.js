const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://static.highsnobiety.com/thumbor/zbFe7xYlyrXZ0YSx1zbDyzpPeh4=/fit-in/1200x720/smart/static.highsnobiety.com/wp-content/uploads/2019/12/18175713/golf-wang-winter-2019-feature.jpg",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: "sneakers",
      imageUrl:
        "https://static.sneakerjagers.com/news/nl/2018/05/gold_le_fleur_vp.jpg",
      id: 3,
      linkUrl: "shop/sneakers"
    },
    {
      title: "womens",
      imageUrl:
        "https://missbish.com/wp-content/uploads/2018/01/See-Anna-of-the-North-Sport-Converses-GOLF-Le-FLEUR-One-Star-Collection-1.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: "mens",
      imageUrl:
        "https://s1.qwant.com/thumbr/0x380/a/4/461ac49dd5ff18fae2d62f6c37c72d97bf2e321b5578cfa941d418608ffb65/Golf-Wang-Highlark-Bottom.jpg?u=https%3A%2F%2Fhighlark.wpengine.com%2Fwp-content%2Fuploads%2F2016%2F10%2FGolf-Wang-Highlark-Bottom.jpg&q=0&b=1&p=0&a=1",
      size: "large",
      id: 5,
      linkUrl: "shop/mens"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
