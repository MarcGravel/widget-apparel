const SHOP_DATA = [
    {
        id: 1,
        title: 'Hats',
        routeName: 'hats',
        items: [
        {
            id: 1,
            name: 'Black Brim',
            imageUrl: "https://images.unsplash.com/photo-1474039880361-1cd8259d95db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            price: 35
        },
        {
            id: 2,
            name: 'Green Beanie',
            imageUrl: "https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            price: 16
        },
        {
            id: 3,
            name: 'Black Bucket Hat',
            imageUrl: "https://images.unsplash.com/photo-1600725388723-0fac4b3430ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGhhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            price: 24
        },
        {
            id: 4,
            name: 'Blue Ballcap',
            imageUrl: "https://images.unsplash.com/photo-1542925554-2ec208930b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            price: 25
        },
        {
            id: 5,
            name: 'Sun Hat',
            imageUrl: "https://images.unsplash.com/photo-1603712724589-9105d18d2d77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            price: 30
        },
        {
            id: 6,
            name: 'White Pom-Pom Beanie',
            imageUrl: "https://images.unsplash.com/photo-1514867312438-db0960ee52e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80",
            price: 21
        },
        {
            id: 7,
            name: 'Brown Brim',
            imageUrl: "https://images.unsplash.com/photo-1542728034-9f9781a0b9e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU4fHxoYXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 30
        },
        {
            id: 8,
            name: 'Kids Blue Sun Hat',
            imageUrl: "https://images.unsplash.com/photo-1612196182754-dae1ec49efc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM2fHxoYXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 18
        },
        {
            id: 9,
            name: 'Colored Beanie',
            imageUrl: "https://images.unsplash.com/photo-1633853706942-59f668add391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzM2fHxoYXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 17
        }
        ]
    },
    {
        id: 2,
        title: 'Shoes',
        routeName: 'shoes',
        items: [
        {
            id: 10,
            name: 'Red Nikes',
            imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", 
            price: 120
        },
        {
            id: 11,
            name: 'Adidas Yeezy',
            imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
            price: 280
        },
        {
            id: 12,
            name: 'Green Converse',
            imageUrl: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 95
        },
        {
            id: 13,
            name: 'White/Tan Boat Shoes',
            imageUrl: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 110
        },
        {
            id: 14,
            name: 'Leather Heel Boots',
            imageUrl: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
            price: 160
        },
        {
            id: 15,
            name: 'Nike Runners',
            imageUrl: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 125
        },
        {
            id: 16,
            name: 'Mens Dress Black',
            imageUrl: "https://images.unsplash.com/photo-1621881538090-b2b5ffaa996a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 190
        },
        {
            id: 17,
            name: 'Shoes That Dont Match',
            imageUrl: "https://images.unsplash.com/photo-1563662931846-29b0af7443ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 270
        }
        ]
    },
    {
        id: 3,
        title: 'Jackets',
        routeName: 'jackets',
        items: [
        {
            id: 18,
            name: 'Black Puffy',
            imageUrl: "https://images.unsplash.com/photo-1605908502724-9093a79a1b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8amFja2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            price: 210
        },
        {
            id: 19,
            name: 'Blue Expedition',
            imageUrl: "https://images.unsplash.com/flagged/photo-1578507054195-f96dec3a8b14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGphY2tldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            price: 99
        },
        {
            id: 20,
            name: 'Pink Fuzzy Long',
            imageUrl: "https://images.unsplash.com/flagged/photo-1554033750-2137b5cfd7ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGphY2tldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            price: 240
        },
        {
            id: 21,
            name: 'Black Leather',
            imageUrl: "https://images.unsplash.com/photo-1606689288233-96192d451cc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGphY2tldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            price: 175
        },
        {
            id: 22,
            name: 'Denim',
            imageUrl: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 70
        }
        ]
    },
    {
        id: 4,
        title: 'Womens',
        routeName: 'womens',
        items: [
        {
            id: 23,
            name: 'Yellow Ensemble',
            imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
            price: 105
        },
        {
            id: 24,
            name: 'Red Dress',
            imageUrl: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVucyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            price: 119
        },
        {
            id: 25,
            name: 'Floral Outfit',
            imageUrl: "https://images.unsplash.com/photo-1593595067438-f4e8133fe7b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHdvbWVucyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            price: 80
        },
        {
            id: 26,
            name: 'Knit Sweater',
            imageUrl: "https://images.unsplash.com/photo-1621573320029-275612d787ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHdvbWVucyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            price: 80
        },
        {
            id: 27,
            name: 'Blue Yoga Pants',
            // imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
            imageUrl: "https://images.unsplash.com/photo-1591259354202-d1e6123e7b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8eW9nYSUyMHBhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 80
        },
        {
            id: 28,
            name: 'Black Outfit w/ Hat',
            imageUrl: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=672&q=80",
            price: 195
        },
        {
            id: 29,
            name: 'Black Tracksuit w/ Shoes',
            imageUrl: "https://images.unsplash.com/photo-1590330297626-d7aff25a0431?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHdvbWVucyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            price: 20
        }
        ]
    },
    {
        id: 5,
        title: 'Mens',
        routeName: 'mens',
        items: [
        {
            id: 30,
            name: 'Tan Outfit w/ Shoes',
            imageUrl: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            price: 225
        },
        {
            id: 31,
            name: 'Blue Suit',
            imageUrl: "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            price: 550
        },
        {
            id: 32,
            name: 'Black Suit Jacket',
            imageUrl: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 180
        },
        {
            id: 33,
            name: 'Grey Sweater',
            imageUrl: "https://images.unsplash.com/photo-1619622376461-28732c2b88c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 35
        },
        {
            id: 34,
            name: 'Red Shorts',
            imageUrl: "https://images.unsplash.com/photo-1617952236317-0bd127407984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 20
        },
        {
            id: 35,
            name: 'Checkered Dress Shirt',
            imageUrl: "https://images.unsplash.com/photo-1612983881270-6de7d8862f11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEwfHxtZW5zJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            price: 35
        }
        ]
    }
] 

export default SHOP_DATA;