const foodData = {
  menuItems: [
    {
      id: 0,
      title: "Spicy Chicken Burger",
      description:
        "A succulent chicken burger with a kick of spice, topped with lettuce, tomato, and a special sauce.",
      price: 250,
      image:
        "https://eightforestlane.com/wp-content/uploads/2024/02/Spicy-Chicken-Burger_WEB-9.jpg",
      restaurant: {
        name: "Burger Haven",
        location: "123 Food Street, Indore",
        contact: "+91 9876543210",
        cuisine: "Fast Food",
      },
      rating: [
        {
          TotalRating: 450,
          AvgRating: 4,
        },
      ],
    },
    {
      id: 1,
      title: "Margherita Pizza",
      description:
        "Classic Margherita pizza with a crispy crust, fresh basil, mozzarella, and tangy tomato sauce.",
      price: 500,
      image:
        "https://media.istockphoto.com/id/1439782668/photo/a-homemade-cheese-pizza-sits-atop-a-decorative-cutting-board.webp?a=1&b=1&s=612x612&w=0&k=20&c=-lbAdG3mmGoHqYE8ii-a1Y4VdCa_hGb8wakZmiUvOJo=",
      restaurant: {
        name: "Pizza Palace",
        location: "45 Pizza Lane, Indore",
        contact: "+91 9876543220",
        cuisine: "Italian",
      },
      rating: [
        {
          TotalRating: 500,
          AvgRating: 4.2,
        },
      ],
    },
    {
      id: 2,
      title: "Veggie Delight Sandwich",
      description:
        "A healthy sandwich loaded with fresh vegetables, cheese, and a tangy dressing.",
      price: 150,
      image:
        "https://ethigreenz.com/wp-content/uploads/2023/06/vegan-mayonnaise-sandwich.jpg",
      restaurant: {
        name: "Green Bites",
        location: "78 Healthy Way, Indore",
        contact: "+91 9876543230",
        cuisine: "Vegetarian",
      },
      rating: [
        {
          TotalRating: 100,
          AvgRating: 3.5,
        },
      ],
    },
    {
      id: 3,
      title: "Chocolate Lava Cake",
      description:
        "A decadent chocolate cake with a gooey molten center, served warm.",
      price: 200,
      image:
        "https://sallysbakingaddiction.com/wp-content/uploads/2017/02/lava-cake.jpg",
      restaurant: {
        name: "Sweet Tooth",
        location: "33 Dessert Drive, Indore",
        contact: "+91 9876543240",
        cuisine: "Desserts",
      },
      rating: [
        {
          TotalRating: 10,
          AvgRating: 3.2,
        },
      ],
    },
    {
      id: 4,
      title: "Mango Smoothie",
      description:
        "A refreshing smoothie made with ripe mangoes, yogurt, and a touch of honey.",
      price: 120,
      image:
        "https://getinspiredeveryday.com/wp-content/uploads/2023/03/Mango-Smoothie-Get-Inspired-Everyday-5.jpg",
      restaurant: {
        name: "Juice Junction",
        location: "90 Beverage Boulevard, Indore",
        contact: "+91 9876543250",
        cuisine: "Beverages",
      },
      rating: [
        {
          TotalRating: 1900,
          AvgRating: 3.8,
        },
      ],
    },
    {
      id: 5,
      title: "Grilled Cheese Sandwich",
      description:
        "A classic grilled cheese sandwich with a golden, crispy crust and melted cheese center.",
      price: 180,
      image:
        "https://www.recipetineats.com/tachyon/2023/07/Grilled-Cheese-sandwich-photo-main.jpg?resize=900%2C1125&zoom=0.72",
      restaurant: {
        name: "Sandwich Hub",
        location: "12 Snack Lane, Indore",
        contact: "+91 9876543260",
        cuisine: "Fast Food",
      },
      rating: [
        {
          TotalRating: 1510,
          AvgRating: 3.6,
        },
      ],
    },
    {
      id: 6,
      title: "Caesar Salad",
      description:
        "A fresh Caesar salad with crisp romaine lettuce, croutons, and a tangy Caesar dressing.",
      price: 220,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Caesar_salad_%282%29.jpg/1280px-Caesar_salad_%282%29.jpg",
      restaurant: {
        name: "Salad Stop",
        location: "23 Health Avenue, Indore",
        contact: "+91 9876543270",
        cuisine: "Healthy",
      },
      rating: [
        {
          TotalRating: 10,
          AvgRating: 3.0,
        },
      ],
    },
    {
      id: 7,
      title: "Pepperoni Pizza",
      description:
        "A savory pizza topped with spicy pepperoni, mozzarella cheese, and tomato sauce.",
      price: 550,
      image:
        "https://bakerbynature.com/wp-content/uploads/2023/09/pepperoni-pizza-BBN-8.23-766.jpg",
      restaurant: {
        name: "Pizza Mania",
        location: "67 Pizza Street, Indore",
        contact: "+91 9876543280",
        cuisine: "Italian",
      },
      rating: [
        {
          TotalRating: 150,
          AvgRating: 4.5,
        },
      ],
    },
    {
      id: 8,
      title: "Tandoori Chicken",
      description:
        "Juicy chicken pieces marinated in spices and cooked to perfection in a tandoor.",
      price: 300,
      image:
        "https://www.simplyrecipes.com/thmb/UVBt-pwPGBGVFZdLGBlbENCkcuc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Tandoori-Chicken-LEAD-06-04acb1fe13a141faacb7d03d87901e59.jpg",
      restaurant: {
        name: "Tandoor Tales",
        location: "89 Spice Road, Indore",
        contact: "+91 9876543290",
        cuisine: "Indian",
      },
      rating: [
        {
          TotalRating: 600,
          AvgRating: 4.4,
        },
      ],
    },
    {
      id: 9,
      title: "Veggie Pizza",
      description:
        "A healthy pizza topped with a variety of fresh vegetables, mozzarella cheese, and tomato sauce.",
      price: 500,
      image:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8890384.jpg&q=60&c=sc&poi=auto&orient=true&h=512",
      restaurant: {
        name: "Healthy Slice",
        location: "34 Wellness Boulevard, Indore",
        contact: "+91 9876543300",
        cuisine: "Healthy",
      },
      rating: [
        {
          TotalRating: 200,
          AvgRating: 4.2,
        },
      ],
    },
    {
      id: 10,
      title: "Pasta Primavera",
      description:
        "A delicious pasta dish with a variety of fresh vegetables, olive oil, and parmesan cheese.",
      price: 400,
      image:
        "https://www.cookingclassy.com/wp-content/uploads/2018/09/pasta-primavera-1-768x1152.jpg",
      restaurant: {
        name: "Pasta Perfect",
        location: "56 Italian Lane, Indore",
        contact: "+91 9876543310",
        cuisine: "Italian",
      },
      rating: [
        {
          TotalRating: 700,
          AvgRating: 4.8,
        },
      ],
    },
    {
      id: 11,
      title: "Paneer Tikka",
      description:
        "Marinated paneer cubes grilled to perfection and served with mint chutney.",
      price: 250,
      image:
        "https://www.sanjanafeasts.co.uk/wp-content/uploads/2020/02/Restaurant-Style-Paneer-Tikka-recipe.jpg.webp",
      restaurant: {
        name: "Paneer Palace",
        location: "78 Dairy Road, Indore",
        contact: "+91 9876543320",
        cuisine: "Indian",
      },
      rating: [
        {
          TotalRating: 480,
          AvgRating: 3.9,
        },
      ],
    },
    {
      id: 12,
      title: "Chicken Biryani",
      description:
        "Aromatic basmati rice cooked with tender chicken pieces and a blend of spices.",
      price: 350,
      image:
        "https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-005.jpg",
      restaurant: {
        name: "Biryani Bazaar",
        location: "90 Flavor Street, Indore",
        contact: "+91 9876543330",
        cuisine: "Indian",
      },
      rating: [
        {
          TotalRating: 10,
          AvgRating: 2.0,
        },
      ],
    },
    {
      id: 13,
      title: "Fish Tacos",
      description:
        "Crispy fish fillets served in soft tortillas with slaw and a tangy sauce.",
      price: 280,
      image:
        "https://www.recipetineats.com/tachyon/2016/05/Fish-Tacos_4-1.jpg?resize=900%2C1260&zoom=0.72",
      restaurant: {
        name: "Taco Treat",
        location: "12 Taco Lane, Indore",
      },
    },
  ],
};

export default foodData;  
