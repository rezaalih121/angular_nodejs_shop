

export const sample_foods: any[] = [
    {
        id: '1',
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
    },
    {
        id: '2',
        name: 'Fessen-joon',
        price: 20,
        cookTime: '30-40',
        favorite: true,
        origins: ['persia', 'middle east'],
        stars: 4.7,
        imageUrl: 'assets/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
    },
    {
        id: '3',
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: 'assets/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
    },
    {
        id: '4',
        name: 'Kabab',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['persia', 'Iran'],
        stars: 4.3,
        imageUrl: 'assets/food-4.jpg',
        tags: ['SlowFood', 'Lunch'],
    },
    {
        id: '5',
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: 'assets/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
    },
    {
        id: '6',
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
    },
]

export const sample_users: any[] = [
    {
        name: "John Doe",
        email: "john@gmail.com",
        password: "12345",
        address: "Toronto On",
        token: "",
        isAdmin: true,
    },
    {
        name: "Reza Ali",
        email: "rai@gmail.com",
        password: "12345",
        address: "Iran",
        token: "",
        isAdmin: false,
    },
];



export const sample_tags: any[] = [
    { name: 'All', count: 6 },
    { name: 'FastFood', count: 4 },
    { name: 'Pizza', count: 2 },
    { name: 'Lunch', count: 3 },
    { name: 'SlowFood', count: 2 },
    { name: 'Hamburger', count: 1 },
    { name: 'Kabab', count: 1 },
    { name: 'Soup', count: 1 },
]