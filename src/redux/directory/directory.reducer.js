const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
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
        "https://i.pinimg.com/originals/f0/b0/75/f0b07531256da8640d5ccae31c02d6ef.jpg",
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
