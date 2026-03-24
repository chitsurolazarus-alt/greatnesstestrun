// ============================================
// CHRIST OR NOTHING - PROFESSIONAL SCRIPT
// Shopping Cart, Product Details, Recommendations
// Scroll-Away Header, Sizes, Types, Colors
// Delivery Fee: R60 added to WhatsApp checkout
// Headwear Price: R250
// Swapped Perfect Sacrifice & Pray Without Ceasing
// TikTok Added to Contacts
// FIXED: Proper URL encoding for WhatsApp
// FIXED: All items appear correctly in WhatsApp
// ============================================

// Product Database with Prices, Sizes, and Types
const products = {
    tshirts: [
        // Product 1 - Plain T-shirt (3 separate color products)
        {
            id: 'tshirt1-white',
            name: 'Christ or Nothing Plain - White',
            description: 'Crew neck T-shirt\nChrist or nothing (plain)\nPremium quality cotton for everyday wear.',
            price: 300,
            color: 'white',
            colorName: 'White',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard'],
            images: ['images/tshirts/tshirt1-white.jpg'],
            category: 'tshirts',
            baseId: 'tshirt1'
        },
        {
            id: 'tshirt1-camel',
            name: 'Christ or Nothing Plain - Camel Brown',
            description: 'Crew neck T-shirt\nChrist or nothing (plain)\nPremium quality cotton for everyday wear.',
            price: 300,
            color: 'camel',
            colorName: 'Camel Brown',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard'],
            images: ['images/tshirts/tshirt1-camel.jpg'],
            category: 'tshirts',
            baseId: 'tshirt1'
        },
        {
            id: 'tshirt1-black',
            name: 'Christ or Nothing Plain - Black',
            description: 'Crew neck T-shirt\nChrist or nothing (plain)\nPremium quality cotton for everyday wear.',
            price: 300,
            color: 'black',
            colorName: 'Black',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard'],
            images: ['images/tshirts/tshirt1-black.jpg'],
            category: 'tshirts',
            baseId: 'tshirt1'
        },
        // Product 2 - Faith Breaks Protocol
        {
            id: 'tshirt2-white-standard',
            name: 'Faith Breaks Protocol - White (Standard)',
            description: 'Faith breaks protocol\nCotton T-shirt\nBold statement design with premium print.',
            price: 400,
            color: 'white',
            colorName: 'White',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Standard',
            images: ['images/tshirts/tshirt2-white-front.jpg', 'images/tshirts/tshirt2-white-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt2'
        },
        {
            id: 'tshirt2-white-oversized',
            name: 'Faith Breaks Protocol - White (Oversized)',
            description: 'Faith breaks protocol\nOversized T-shirt\nBold statement design with premium print.',
            price: 500,
            color: 'white',
            colorName: 'White',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Oversized',
            images: ['images/tshirts/tshirt2-white-front.jpg', 'images/tshirts/tshirt2-white-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt2'
        },
        {
            id: 'tshirt2-camel-standard',
            name: 'Faith Breaks Protocol - Camel Brown (Standard)',
            description: 'Faith breaks protocol\nCotton T-shirt\nBold statement design with premium print.',
            price: 400,
            color: 'camel',
            colorName: 'Camel Brown',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Standard',
            images: ['images/tshirts/tshirt2-camel-front.jpg', 'images/tshirts/tshirt2-camel-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt2'
        },
        {
            id: 'tshirt2-camel-oversized',
            name: 'Faith Breaks Protocol - Camel Brown (Oversized)',
            description: 'Faith breaks protocol\nOversized T-shirt\nBold statement design with premium print.',
            price: 500,
            color: 'camel',
            colorName: 'Camel Brown',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Oversized',
            images: ['images/tshirts/tshirt2-camel-front.jpg', 'images/tshirts/tshirt2-camel-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt2'
        },
        {
            id: 'tshirt2-black-standard',
            name: 'Faith Breaks Protocol - Black (Standard)',
            description: 'Faith breaks protocol\nCotton T-shirt\nBold statement design with premium print.',
            price: 400,
            color: 'black',
            colorName: 'Black',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Standard',
            images: ['images/tshirts/tshirt2-black-front.jpg', 'images/tshirts/tshirt2-black-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt2'
        },
        {
            id: 'tshirt2-black-oversized',
            name: 'Faith Breaks Protocol - Black (Oversized)',
            description: 'Faith breaks protocol\nOversized T-shirt\nBold statement design with premium print.',
            price: 500,
            color: 'black',
            colorName: 'Black',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Oversized',
            images: ['images/tshirts/tshirt2-black-front.jpg', 'images/tshirts/tshirt2-black-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt2'
        },
        // Product 3 - Jesus Died Once
        {
            id: 'tshirt3-white-standard',
            name: 'Jesus Died Once For All Time - White (Standard)',
            description: 'Jesus died once for all time\nCotton T-shirt\nPowerful gospel message on premium fabric.',
            price: 400,
            color: 'white',
            colorName: 'White',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Standard',
            images: ['images/tshirts/tshirt3-white-front.jpg', 'images/tshirts/tshirt3-white-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt3'
        },
        {
            id: 'tshirt3-white-oversized',
            name: 'Jesus Died Once For All Time - White (Oversized)',
            description: 'Jesus died once for all time\nOversized T-shirt\nPowerful gospel message on premium fabric.',
            price: 500,
            color: 'white',
            colorName: 'White',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Oversized',
            images: ['images/tshirts/tshirt3-white-front.jpg', 'images/tshirts/tshirt3-white-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt3'
        },
        {
            id: 'tshirt3-camel-standard',
            name: 'Jesus Died Once For All Time - Camel Brown (Standard)',
            description: 'Jesus died once for all time\nCotton T-shirt\nPowerful gospel message on premium fabric.',
            price: 400,
            color: 'camel',
            colorName: 'Camel Brown',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Standard',
            images: ['images/tshirts/tshirt3-camel-front.jpg', 'images/tshirts/tshirt3-camel-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt3'
        },
        {
            id: 'tshirt3-camel-oversized',
            name: 'Jesus Died Once For All Time - Camel Brown (Oversized)',
            description: 'Jesus died once for all time\nOversized T-shirt\nPowerful gospel message on premium fabric.',
            price: 500,
            color: 'camel',
            colorName: 'Camel Brown',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Oversized',
            images: ['images/tshirts/tshirt3-camel-front.jpg', 'images/tshirts/tshirt3-camel-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt3'
        },
        {
            id: 'tshirt3-black-standard',
            name: 'Jesus Died Once For All Time - Black (Standard)',
            description: 'Jesus died once for all time\nCotton T-shirt\nPowerful gospel message on premium fabric.',
            price: 400,
            color: 'black',
            colorName: 'Black',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Standard',
            images: ['images/tshirts/tshirt3-black-front.jpg', 'images/tshirts/tshirt3-black-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt3'
        },
        {
            id: 'tshirt3-black-oversized',
            name: 'Jesus Died Once For All Time - Black (Oversized)',
            description: 'Jesus died once for all time\nOversized T-shirt\nPowerful gospel message on premium fabric.',
            price: 500,
            color: 'black',
            colorName: 'Black',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Oversized',
            images: ['images/tshirts/tshirt3-black-front.jpg', 'images/tshirts/tshirt3-black-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt3'
        },
        // Product 4 - Pray Without Ceasing
        {
            id: 'tshirt4-white-standard',
            name: 'Pray Without Ceasing - White (Standard)',
            description: 'Pray without ceasing\nCotton T-shirt\nA reminder to stay in constant prayer.',
            price: 400,
            color: 'white',
            colorName: 'White',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Standard',
            images: ['images/tshirts/tshirt4-white-front.jpg', 'images/tshirts/tshirt4-white-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt4'
        },
        {
            id: 'tshirt4-white-oversized',
            name: 'Pray Without Ceasing - White (Oversized)',
            description: 'Pray without ceasing\nOversized T-shirt\nA reminder to stay in constant prayer.',
            price: 500,
            color: 'white',
            colorName: 'White',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Oversized',
            images: ['images/tshirts/tshirt4-white-front.jpg', 'images/tshirts/tshirt4-white-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt4'
        },
        {
            id: 'tshirt4-camel-standard',
            name: 'Pray Without Ceasing - Camel Brown (Standard)',
            description: 'Pray without ceasing\nCotton T-shirt\nA reminder to stay in constant prayer.',
            price: 400,
            color: 'camel',
            colorName: 'Camel Brown',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Standard',
            images: ['images/tshirts/tshirt4-camel-front.jpg', 'images/tshirts/tshirt4-camel-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt4'
        },
        {
            id: 'tshirt4-camel-oversized',
            name: 'Pray Without Ceasing - Camel Brown (Oversized)',
            description: 'Pray without ceasing\nOversized T-shirt\nA reminder to stay in constant prayer.',
            price: 500,
            color: 'camel',
            colorName: 'Camel Brown',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Oversized',
            images: ['images/tshirts/tshirt4-camel-front.jpg', 'images/tshirts/tshirt4-camel-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt4'
        },
        {
            id: 'tshirt4-black-standard',
            name: 'Pray Without Ceasing - Black (Standard)',
            description: 'Pray without ceasing\nCotton T-shirt\nA reminder to stay in constant prayer.',
            price: 400,
            color: 'black',
            colorName: 'Black',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Standard',
            images: ['images/tshirts/tshirt4-black-front.jpg', 'images/tshirts/tshirt4-black-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt4'
        },
        {
            id: 'tshirt4-black-oversized',
            name: 'Pray Without Ceasing - Black (Oversized)',
            description: 'Pray without ceasing\nOversized T-shirt\nA reminder to stay in constant prayer.',
            price: 500,
            color: 'black',
            colorName: 'Black',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Oversized',
            images: ['images/tshirts/tshirt4-black-front.jpg', 'images/tshirts/tshirt4-black-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt4'
        },
        // Product 5 - Perfect Sacrifice
        {
            id: 'tshirt5-white-standard',
            name: 'Jesus Christ The Perfect Sacrifice - White (Standard)',
            description: 'Jesus Christ the perfect sacrifice\nCotton T-shirt\nDeclare the ultimate sacrifice.',
            price: 400,
            color: 'white',
            colorName: 'White',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Standard',
            images: ['images/tshirts/tshirt5-white-front.jpg', 'images/tshirts/tshirt5-white-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt5'
        },
        {
            id: 'tshirt5-white-oversized',
            name: 'Jesus Christ The Perfect Sacrifice - White (Oversized)',
            description: 'Jesus Christ the perfect sacrifice\nOversized T-shirt\nDeclare the ultimate sacrifice.',
            price: 500,
            color: 'white',
            colorName: 'White',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Oversized',
            images: ['images/tshirts/tshirt5-white-front.jpg', 'images/tshirts/tshirt5-white-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt5'
        },
        {
            id: 'tshirt5-camel-standard',
            name: 'Jesus Christ The Perfect Sacrifice - Camel Brown (Standard)',
            description: 'Jesus Christ the perfect sacrifice\nCotton T-shirt\nDeclare the ultimate sacrifice.',
            price: 400,
            color: 'camel',
            colorName: 'Camel Brown',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Standard',
            images: ['images/tshirts/tshirt5-camel-front.jpg', 'images/tshirts/tshirt5-camel-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt5'
        },
        {
            id: 'tshirt5-camel-oversized',
            name: 'Jesus Christ The Perfect Sacrifice - Camel Brown (Oversized)',
            description: 'Jesus Christ the perfect sacrifice\nOversized T-shirt\nDeclare the ultimate sacrifice.',
            price: 500,
            color: 'camel',
            colorName: 'Camel Brown',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Oversized',
            images: ['images/tshirts/tshirt5-camel-front.jpg', 'images/tshirts/tshirt5-camel-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt5'
        },
        {
            id: 'tshirt5-black-standard',
            name: 'Jesus Christ The Perfect Sacrifice - Black (Standard)',
            description: 'Jesus Christ the perfect sacrifice\nCotton T-shirt\nDeclare the ultimate sacrifice.',
            price: 400,
            color: 'black',
            colorName: 'Black',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Standard',
            images: ['images/tshirts/tshirt5-black-front.jpg', 'images/tshirts/tshirt5-black-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt5'
        },
        {
            id: 'tshirt5-black-oversized',
            name: 'Jesus Christ The Perfect Sacrifice - Black (Oversized)',
            description: 'Jesus Christ the perfect sacrifice\nOversized T-shirt\nDeclare the ultimate sacrifice.',
            price: 500,
            color: 'black',
            colorName: 'Black',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            types: ['Standard', 'Oversized'],
            selectedType: 'Oversized',
            images: ['images/tshirts/tshirt5-black-front.jpg', 'images/tshirts/tshirt5-black-back.jpg'],
            category: 'tshirts',
            baseId: 'tshirt5'
        }
    ],
    hoodies: [
        // Hoodie 1 - Faith Breaks Protocol
        {
            id: 'hoodie1-white',
            name: 'Faith Breaks Protocol Hoodie - White',
            description: 'Faith breaks protocol\nHeavy hoodies & Hoodies\nPremium heavyweight hoodie.',
            price: 600,
            color: 'white',
            colorName: 'White',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/hoodies/hoodie1-white-front.jpg', 'images/hoodies/hoodie1-white-back.jpg'],
            category: 'hoodies',
            baseId: 'hoodie1'
        },
        {
            id: 'hoodie1-camel',
            name: 'Faith Breaks Protocol Hoodie - Camel Brown',
            description: 'Faith breaks protocol\nHeavy hoodies & Hoodies\nPremium heavyweight hoodie.',
            price: 600,
            color: 'camel',
            colorName: 'Camel Brown',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/hoodies/hoodie1-camel-front.jpg', 'images/hoodies/hoodie1-camel-back.jpg'],
            category: 'hoodies',
            baseId: 'hoodie1'
        },
        {
            id: 'hoodie1-black',
            name: 'Faith Breaks Protocol Hoodie - Black',
            description: 'Faith breaks protocol\nHeavy hoodies & Hoodies\nPremium heavyweight hoodie.',
            price: 600,
            color: 'black',
            colorName: 'Black',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/hoodies/hoodie1-black-front.jpg', 'images/hoodies/hoodie1-black-back.jpg'],
            category: 'hoodies',
            baseId: 'hoodie1'
        },
        // Hoodie 2 - Jesus Died Once
        {
            id: 'hoodie2-white',
            name: 'Jesus Died Once For All Time Hoodie - White',
            description: 'Jesus died once for all time\nHeavy hoodies & Hoodies\nWarm, comfortable, and faith-filled.',
            price: 600,
            color: 'white',
            colorName: 'White',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/hoodies/hoodie2-white-front.jpg', 'images/hoodies/hoodie2-white-back.jpg'],
            category: 'hoodies',
            baseId: 'hoodie2'
        },
        {
            id: 'hoodie2-camel',
            name: 'Jesus Died Once For All Time Hoodie - Camel Brown',
            description: 'Jesus died once for all time\nHeavy hoodies & Hoodies\nWarm, comfortable, and faith-filled.',
            price: 600,
            color: 'camel',
            colorName: 'Camel Brown',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/hoodies/hoodie2-camel-front.jpg', 'images/hoodies/hoodie2-camel-back.jpg'],
            category: 'hoodies',
            baseId: 'hoodie2'
        },
        {
            id: 'hoodie2-black',
            name: 'Jesus Died Once For All Time Hoodie - Black',
            description: 'Jesus died once for all time\nHeavy hoodies & Hoodies\nWarm, comfortable, and faith-filled.',
            price: 600,
            color: 'black',
            colorName: 'Black',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/hoodies/hoodie2-black-front.jpg', 'images/hoodies/hoodie2-black-back.jpg'],
            category: 'hoodies',
            baseId: 'hoodie2'
        },
        // Hoodie 3 - Pray Without Ceasing
        {
            id: 'hoodie3-white',
            name: 'Pray Without Ceasing Hoodie - White',
            description: 'Pray without ceasing\nHeavy hoodies & Hoodies\nStay warm while staying in prayer.',
            price: 600,
            color: 'white',
            colorName: 'White',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/hoodies/hoodie3-white-front.jpg', 'images/hoodies/hoodie3-white-back.jpg'],
            category: 'hoodies',
            baseId: 'hoodie3'
        },
        {
            id: 'hoodie3-camel',
            name: 'Pray Without Ceasing Hoodie - Camel Brown',
            description: 'Pray without ceasing\nHeavy hoodies & Hoodies\nStay warm while staying in prayer.',
            price: 600,
            color: 'camel',
            colorName: 'Camel Brown',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/hoodies/hoodie3-camel-front.jpg', 'images/hoodies/hoodie3-camel-back.jpg'],
            category: 'hoodies',
            baseId: 'hoodie3'
        },
        {
            id: 'hoodie3-black',
            name: 'Pray Without Ceasing Hoodie - Black',
            description: 'Pray without ceasing\nHeavy hoodies & Hoodies\nStay warm while staying in prayer.',
            price: 600,
            color: 'black',
            colorName: 'Black',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/hoodies/hoodie3-black-front.jpg', 'images/hoodies/hoodie3-black-back.jpg'],
            category: 'hoodies',
            baseId: 'hoodie3'
        },
        // Hoodie 4 - Perfect Sacrifice
        {
            id: 'hoodie4-white',
            name: 'Jesus Christ The Perfect Sacrifice Hoodie - White',
            description: 'Jesus Christ the perfect sacrifice\nHeavy hoodies & Hoodies\nPremium quality with bold statement.',
            price: 600,
            color: 'white',
            colorName: 'White',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/hoodies/hoodie4-white-front.jpg', 'images/hoodies/hoodie4-white-back.jpg'],
            category: 'hoodies',
            baseId: 'hoodie4'
        },
        {
            id: 'hoodie4-camel',
            name: 'Jesus Christ The Perfect Sacrifice Hoodie - Camel Brown',
            description: 'Jesus Christ the perfect sacrifice\nHeavy hoodies & Hoodies\nPremium quality with bold statement.',
            price: 600,
            color: 'camel',
            colorName: 'Camel Brown',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/hoodies/hoodie4-camel-front.jpg', 'images/hoodies/hoodie4-camel-back.jpg'],
            category: 'hoodies',
            baseId: 'hoodie4'
        },
        {
            id: 'hoodie4-black',
            name: 'Jesus Christ The Perfect Sacrifice Hoodie - Black',
            description: 'Jesus Christ the perfect sacrifice\nHeavy hoodies & Hoodies\nPremium quality with bold statement.',
            price: 600,
            color: 'black',
            colorName: 'Black',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/hoodies/hoodie4-black-front.jpg', 'images/hoodies/hoodie4-black-back.jpg'],
            category: 'hoodies',
            baseId: 'hoodie4'
        }
    ],
    sweaters: [
        // Sweater 1 - Faith Breaks Protocol
        {
            id: 'sweater1-white',
            name: 'Faith Breaks Protocol Sweater - White',
            description: 'Faith breaks protocol\nCrew neck sweaters\nComfortable crewneck for everyday wear.',
            price: 560,
            color: 'white',
            colorName: 'White',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/sweaters/sweater1-white-front.jpg', 'images/sweaters/sweater1-white-back.jpg'],
            category: 'sweaters',
            baseId: 'sweater1'
        },
        {
            id: 'sweater1-camel',
            name: 'Faith Breaks Protocol Sweater - Camel Brown',
            description: 'Faith breaks protocol\nCrew neck sweaters\nComfortable crewneck for everyday wear.',
            price: 560,
            color: 'camel',
            colorName: 'Camel Brown',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/sweaters/sweater1-camel-front.jpg', 'images/sweaters/sweater1-camel-back.jpg'],
            category: 'sweaters',
            baseId: 'sweater1'
        },
        {
            id: 'sweater1-black',
            name: 'Faith Breaks Protocol Sweater - Black',
            description: 'Faith breaks protocol\nCrew neck sweaters\nComfortable crewneck for everyday wear.',
            price: 560,
            color: 'black',
            colorName: 'Black',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/sweaters/sweater1-black-front.jpg', 'images/sweaters/sweater1-black-back.jpg'],
            category: 'sweaters',
            baseId: 'sweater1'
        },
        // Sweater 2 - Jesus Died Once
        {
            id: 'sweater2-white',
            name: 'Jesus Died Once For All Time Sweater - White',
            description: 'Jesus died once for all time\nCrew neck sweaters\nSoft, warm, and faith-inspired.',
            price: 560,
            color: 'white',
            colorName: 'White',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/sweaters/sweater2-white-front.jpg', 'images/sweaters/sweater2-white-back.jpg'],
            category: 'sweaters',
            baseId: 'sweater2'
        },
        {
            id: 'sweater2-camel',
            name: 'Jesus Died Once For All Time Sweater - Camel Brown',
            description: 'Jesus died once for all time\nCrew neck sweaters\nSoft, warm, and faith-inspired.',
            price: 560,
            color: 'camel',
            colorName: 'Camel Brown',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/sweaters/sweater2-camel-front.jpg', 'images/sweaters/sweater2-camel-back.jpg'],
            category: 'sweaters',
            baseId: 'sweater2'
        },
        {
            id: 'sweater2-black',
            name: 'Jesus Died Once For All Time Sweater - Black',
            description: 'Jesus died once for all time\nCrew neck sweaters\nSoft, warm, and faith-inspired.',
            price: 560,
            color: 'black',
            colorName: 'Black',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/sweaters/sweater2-black-front.jpg', 'images/sweaters/sweater2-black-back.jpg'],
            category: 'sweaters',
            baseId: 'sweater2'
        },
        // Sweater 3 - Pray Without Ceasing
        {
            id: 'sweater3-white',
            name: 'Pray Without Ceasing Sweater - White',
            description: 'Pray without ceasing\nCrew neck sweaters\nComfort meets faith in this classic piece.',
            price: 560,
            color: 'white',
            colorName: 'White',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/sweaters/sweater3-white-front.jpg', 'images/sweaters/sweater3-white-back.jpg'],
            category: 'sweaters',
            baseId: 'sweater3'
        },
        {
            id: 'sweater3-camel',
            name: 'Pray Without Ceasing Sweater - Camel Brown',
            description: 'Pray without ceasing\nCrew neck sweaters\nComfort meets faith in this classic piece.',
            price: 560,
            color: 'camel',
            colorName: 'Camel Brown',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/sweaters/sweater3-camel-front.jpg', 'images/sweaters/sweater3-camel-back.jpg'],
            category: 'sweaters',
            baseId: 'sweater3'
        },
        {
            id: 'sweater3-black',
            name: 'Pray Without Ceasing Sweater - Black',
            description: 'Pray without ceasing\nCrew neck sweaters\nComfort meets faith in this classic piece.',
            price: 560,
            color: 'black',
            colorName: 'Black',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/sweaters/sweater3-black-front.jpg', 'images/sweaters/sweater3-black-back.jpg'],
            category: 'sweaters',
            baseId: 'sweater3'
        },
        // Sweater 4 - Perfect Sacrifice
        {
            id: 'sweater4-white',
            name: 'Jesus Christ The Perfect Sacrifice Sweater - White',
            description: 'Jesus Christ the perfect sacrifice\nCrew neck sweaters\nPremium crewneck with powerful message.',
            price: 560,
            color: 'white',
            colorName: 'White',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/sweaters/sweater4-white-front.jpg', 'images/sweaters/sweater4-white-back.jpg'],
            category: 'sweaters',
            baseId: 'sweater4'
        },
        {
            id: 'sweater4-camel',
            name: 'Jesus Christ The Perfect Sacrifice Sweater - Camel Brown',
            description: 'Jesus Christ the perfect sacrifice\nCrew neck sweaters\nPremium crewneck with powerful message.',
            price: 560,
            color: 'camel',
            colorName: 'Camel Brown',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/sweaters/sweater4-camel-front.jpg', 'images/sweaters/sweater4-camel-back.jpg'],
            category: 'sweaters',
            baseId: 'sweater4'
        },
        {
            id: 'sweater4-black',
            name: 'Jesus Christ The Perfect Sacrifice Sweater - Black',
            description: 'Jesus Christ the perfect sacrifice\nCrew neck sweaters\nPremium crewneck with powerful message.',
            price: 560,
            color: 'black',
            colorName: 'Black',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            images: ['images/sweaters/sweater4-black-front.jpg', 'images/sweaters/sweater4-black-back.jpg'],
            category: 'sweaters',
            baseId: 'sweater4'
        }
    ],
    headwear: [
        {
            id: 'cap-black',
            name: 'Christ or Nothing CAP',
            description: 'Christ or nothing CAPS\nPremium quality cap with embroidered logo\nAdjustable strap for perfect fit.',
            price: 250,
            color: 'black',
            colorName: 'Black',
            sizes: ['OSFA'],
            images: ['images/headwear/cap-black.jpg'],
            category: 'headwear',
            baseId: 'cap'
        },
        {
            id: 'bucket-black',
            name: 'Christ or Nothing Bucket Hat',
            description: 'Christ or nothing Bucket hats\nStreet style bucket hat with faith message\nOne size fits most.',
            price: 250,
            color: 'black',
            colorName: 'Black',
            sizes: ['OSFA'],
            images: ['images/headwear/bucket-black.jpg'],
            category: 'headwear',
            baseId: 'bucket'
        }
    ]
};

// Flatten products array
let allProducts = [];
for (const category in products) {
    allProducts = allProducts.concat(products[category]);
}

// Global variables
let cart = [];
const WHATSAPP_NUMBER = '27671664440';
const DELIVERY_FEE = 60;
let lastScrollY = 0;

// Helper Functions
function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function showNotification(message) {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = '<i class="fas fa-check-circle"></i> ' + message;
    document.body.appendChild(notification);
    
    setTimeout(function() {
        if (notification && notification.remove) {
            notification.remove();
        }
    }, 3000);
}

function findProductById(id) {
    return allProducts.find(function(p) { return p.id === id; });
}

function formatPrice(price) {
    return 'R ' + price.toLocaleString();
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('christOrNothingCart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            updateCartUI();
        } catch (e) {
            console.error('Failed to load cart:', e);
        }
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('christOrNothingCart', JSON.stringify(cart));
}

// URL Encode for WhatsApp (proper encoding without special character issues)
function encodeWhatsAppText(text) {
    return encodeURIComponent(text)
        .replace(/%20/g, ' ')
        .replace(/%21/g, '!')
        .replace(/%22/g, '"')
        .replace(/%23/g, '#')
        .replace(/%24/g, '$')
        .replace(/%25/g, '%')
        .replace(/%26/g, '&')
        .replace(/%27/g, "'")
        .replace(/%28/g, '(')
        .replace(/%29/g, ')')
        .replace(/%2A/g, '*')
        .replace(/%2B/g, '+')
        .replace(/%2C/g, ',')
        .replace(/%2D/g, '-')
        .replace(/%2E/g, '.')
        .replace(/%2F/g, '/')
        .replace(/%3A/g, ':')
        .replace(/%3B/g, ';')
        .replace(/%3C/g, '<')
        .replace(/%3D/g, '=')
        .replace(/%3E/g, '>')
        .replace(/%3F/g, '?')
        .replace(/%40/g, '@')
        .replace(/%5B/g, '[')
        .replace(/%5D/g, ']')
        .replace(/%5E/g, '^')
        .replace(/%5F/g, '_')
        .replace(/%60/g, '`')
        .replace(/%7B/g, '{')
        .replace(/%7C/g, '|')
        .replace(/%7D/g, '}')
        .replace(/%7E/g, '~');
}

// Scroll-Away Header
function initScrollHeader() {
    const header = document.getElementById('mainHeader');
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.classList.add('header-hidden');
        } else if (currentScrollY < lastScrollY) {
            header.classList.remove('header-hidden');
        }
        lastScrollY = currentScrollY;
    });
}

// About Modal
function initAboutModal() {
    const modal = document.getElementById('aboutModal');
    const aboutLinks = document.querySelectorAll('#aboutLink, #aboutLinkHero');
    const closeBtn = document.querySelector('.about-close');
    
    if (aboutLinks.length > 0) {
        aboutLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                if (modal) modal.classList.add('show');
            });
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            if (modal) modal.classList.remove('show');
        });
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }
}

// Carousel Functions
function initializeSingleCarousel(carouselElement, totalImages) {
    const imgContainer = carouselElement.querySelector('.carousel-images');
    const prevBtn = carouselElement.querySelector('.prev');
    const nextBtn = carouselElement.querySelector('.next');
    
    if (!imgContainer) return;
    if (totalImages <= 1) return;
    
    let currentIndex = 0;
    
    function updateCarousel() {
        imgContainer.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    }
    
    if (prevBtn) {
        const newPrev = prevBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(newPrev, prevBtn);
        newPrev.addEventListener('click', function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateCarousel();
        });
    }
    
    if (nextBtn) {
        const newNext = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNext, nextBtn);
        newNext.addEventListener('click', function(e) {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel();
        });
    }
}

function initializeCarousels() {
    const carousels = document.querySelectorAll('.carousel[data-carousel]');
    for (let i = 0; i < carousels.length; i++) {
        const carousel = carousels[i];
        const images = carousel.querySelectorAll('.carousel-img');
        if (images.length > 1) {
            initializeSingleCarousel(carousel, images.length);
        }
    }
}

function createCarousel(images, productId) {
    if (!images || images.length === 0) {
        return '<div class="carousel" data-product-id="' + productId + '">' +
            '<div class="carousel-images">' +
            '<img src="https://placehold.co/800x600/111111/FFFFFF?text=No+Image" class="carousel-img" alt="Product">' +
            '</div>' +
            '</div>';
    }
    
    let imagesHTML = '';
    for (let i = 0; i < images.length; i++) {
        imagesHTML += '<img src="' + images[i] + '" class="carousel-img" alt="Product image" onerror="this.src=\'https://placehold.co/800x600/111111/FFFFFF?text=Image+Error\'">';
    }
    
    if (images.length === 1) {
        return '<div class="carousel" data-product-id="' + productId + '">' +
            '<div class="carousel-images">' +
            imagesHTML +
            '</div>' +
            '</div>';
    }
    
    return '<div class="carousel" data-carousel data-product-id="' + productId + '">' +
        '<div class="carousel-images">' +
        imagesHTML +
        '</div>' +
        '<button class="carousel-btn prev">‹</button>' +
        '<button class="carousel-btn next">›</button>' +
        '</div>';
}

// Cart Functions
function addToCart(item) {
    const newItem = {
        id: item.id,
        name: item.name,
        description: item.description,
        color: item.color,
        colorName: item.colorName,
        size: item.size,
        type: item.type || '',
        price: item.price,
        addedAt: new Date().toLocaleString()
    };
    cart.push(newItem);
    saveCart();
    updateCartUI();
    showNotification(item.name + ' (' + item.colorName + ', ' + item.size + ') added to cart');
}

function removeFromCart(index) {
    const removedItem = cart[index];
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
    showNotification(removedItem.name + ' removed from cart');
}

function clearCart() {
    if (cart.length > 0) {
        cart = [];
        saveCart();
        updateCartUI();
        showNotification('Cart cleared');
    }
}

function getCartTotal() {
    return cart.reduce(function(total, item) {
        return total + item.price;
    }, 0);
}

function renderCartModal() {
    const cartItemsContainer = document.getElementById('cartItemsList');
    const cartTotalSpan = document.getElementById('cartTotalPrice');
    const cartTotalAmount = document.getElementById('cartTotalAmount');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        if (cartTotalSpan) cartTotalSpan.textContent = 'Total Items: 0';
        if (cartTotalAmount) cartTotalAmount.innerHTML = 'Total: R 0';
        return;
    }
    
    let itemsHTML = '';
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        let typeText = item.type ? ' | ' + item.type : '';
        
        itemsHTML += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-title">${escapeHTML(item.name)}</div>
                    <div class="cart-item-details">Color: ${escapeHTML(item.colorName)} | Size: ${escapeHTML(item.size)}${typeText}</div>
                    <div class="cart-item-details">${formatPrice(item.price)}</div>
                </div>
                <button class="remove-item" data-index="${i}">Remove</button>
            </div>
        `;
    }
    
    cartItemsContainer.innerHTML = itemsHTML;
    if (cartTotalSpan) cartTotalSpan.textContent = 'Total Items: ' + cart.length;
    
    const subtotal = getCartTotal();
    const totalWithDelivery = subtotal + DELIVERY_FEE;
    
    if (cartTotalAmount) {
        cartTotalAmount.innerHTML = `
            <div class="cart-summary">
                <div>Subtotal: ${formatPrice(subtotal)}</div>
                <div>Delivery Fee: ${formatPrice(DELIVERY_FEE)}</div>
                <div><strong>Total: ${formatPrice(totalWithDelivery)}</strong></div>
            </div>
        `;
    }
    
    const removeBtns = document.querySelectorAll('.remove-item');
    for (let i = 0; i < removeBtns.length; i++) {
        const btn = removeBtns[i];
        btn.addEventListener('click', function(e) {
            const index = parseInt(btn.getAttribute('data-index'));
            removeFromCart(index);
        });
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
    renderCartModal();
}

// Generate WhatsApp Message with proper formatting
function generateWhatsAppMessage() {
    if (cart.length === 0) {
        return "Hello, I would like to place an order with Christ or Nothing.";
    }
    
    const currentDate = new Date().toLocaleString();
    const orderNumber = 'ORD-' + Date.now().toString().slice(-6);
    const subtotal = getCartTotal();
    const totalWithDelivery = subtotal + DELIVERY_FEE;
    
    let message = "";
    
    // Header
    message += "*CHRIST OR NOTHING - ORDER SUMMARY*\n";
    message += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    message += "Order #: " + orderNumber + "\n";
    message += "Date: " + currentDate + "\n";
    message += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
    
    // Items Ordered
    message += "*ITEMS ORDERED:*\n";
    message += "─────────────────\n";
    
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        let typeText = item.type ? " (" + item.type + ")" : "";
        message += (i + 1) + ". " + item.name + typeText + "\n";
        message += "   Color: " + item.colorName + "\n";
        message += "   Size: " + item.size + "\n";
        message += "   Price: " + formatPrice(item.price) + "\n";
        message += "   ─────────────────\n";
    }
    
    message += "\n";
    
    // Price Summary
    message += "*PRICE SUMMARY:*\n";
    message += "─────────────────\n";
    message += "Subtotal (" + cart.length + " items): " + formatPrice(subtotal) + "\n";
    message += "Delivery Fee: " + formatPrice(DELIVERY_FEE) + "\n";
    message += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    message += "*TOTAL AMOUNT: " + formatPrice(totalWithDelivery) + "*\n";
    message += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
    
    // Customer Details
    message += "*CUSTOMER DETAILS:*\n";
    message += "─────────────────\n";
    message += "Full Name: \n";
    message += "Delivery Address: \n";
    message += "Phone Number: \n";
    message += "Email: \n\n";
    
    // Footer
    message += "*THANK YOU FOR SHOPPING WITH CHRIST OR NOTHING!*\n";
    message += "We will confirm your order shortly. God bless!";
    
    return message;
}

function sendWhatsAppQuote() {
    if (cart.length === 0) {
        showNotification('Your cart is empty. Add items before checking out.');
        return;
    }
    
    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodedMessage;
    
    window.open(whatsappUrl, '_blank');
    showNotification('Opening WhatsApp to complete your order...');
}

// Render Products on Homepage
function renderProductGrid(category, productsArray) {
    const container = document.getElementById(category + 'Grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let p = 0; p < productsArray.length; p++) {
        const product = productsArray[p];
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-product-id', product.id);
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-duration', '600');
        
        const carouselHTML = createCarousel(product.images, product.id);
        
        const escapedName = escapeHTML(product.name);
        const escapedDesc = escapeHTML(product.description).replace(/\n/g, '<br>');
        
        card.innerHTML = carouselHTML +
            '<div class="product-info">' +
            '<h3 class="product-name">' + escapedName + '</h3>' +
            '<div class="product-price">' + formatPrice(product.price) + '</div>' +
            '<div class="product-desc">' + escapedDesc.substring(0, 80) + (escapedDesc.length > 80 ? '...' : '') + '</div>' +
            '</div>';
        
        container.appendChild(card);
    }
    
    attachProductClickEvents();
}

function attachProductClickEvents() {
    const productCards = document.querySelectorAll('.product-card');
    for (let i = 0; i < productCards.length; i++) {
        const card = productCards[i];
        const productId = card.getAttribute('data-product-id');
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('carousel-btn') && !e.target.closest('.carousel-btn')) {
                window.location.href = 'product.html?id=' + productId;
            }
        });
    }
    
    initializeCarousels();
}

// Product Detail Page Functions
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function renderProductDetail() {
    const productId = getUrlParameter('id');
    if (!productId) {
        window.location.href = 'index.html';
        return;
    }
    
    const product = findProductById(productId);
    if (!product) {
        document.getElementById('productDetail').innerHTML = '<div class="error">Product not found. <a href="index.html">Return to shop</a></div>';
        return;
    }
    
    let selectedSize = product.sizes[0];
    let selectedType = product.types ? product.types[0] : null;
    
    const images = product.images;
    
    let thumbnailsHTML = '';
    for (let i = 0; i < images.length; i++) {
        thumbnailsHTML += '<img src="' + images[i] + '" class="thumbnail" data-index="' + i + '" alt="Thumbnail">';
    }
    
    let sizeButtonsHTML = '';
    for (let s = 0; s < product.sizes.length; s++) {
        const size = product.sizes[s];
        sizeButtonsHTML += '<button class="size-btn" data-size="' + size + '">' + size + '</button>';
    }
    
    let typeButtonsHTML = '';
    if (product.types && product.types.length > 1) {
        for (let t = 0; t < product.types.length; t++) {
            const type = product.types[t];
            const typePrice = type === 'Oversized' ? 500 : (product.baseId === 'tshirt1' ? 300 : 400);
            typeButtonsHTML += '<button class="type-btn" data-type="' + type + '" data-price="' + typePrice + '">' + type + '</button>';
        }
    }
    
    const detailHTML = `
        <div class="product-detail-grid">
            <div class="product-detail-images">
                <img src="${images[0]}" class="product-detail-main-image" id="mainImage" alt="${product.name}">
                <div class="product-detail-thumbnails">
                    ${thumbnailsHTML}
                </div>
            </div>
            <div class="product-detail-info">
                <h1>${escapeHTML(product.name)}</h1>
                <div class="product-detail-price" id="detailPrice">${formatPrice(product.price)}</div>
                <div class="product-detail-description">${escapeHTML(product.description).replace(/\n/g, '<br>')}</div>
                ${product.types && product.types.length > 1 ? '<div class="type-options"><strong>Style:</strong> ' + typeButtonsHTML + '</div>' : ''}
                <div class="size-options"><strong>Size:</strong> ${sizeButtonsHTML}</div>
                <button class="add-to-cart-detail" id="addToCartDetail">
                    <i class="fas fa-plus"></i> Add to Cart
                </button>
                <div class="back-to-shop">
                    <a href="index.html" class="back-link"><i class="fas fa-arrow-left"></i> Back to Shop</a>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('productDetail').innerHTML = detailHTML;
    
    // Thumbnail click handler
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('click', function() {
            mainImage.src = this.src;
            for (let j = 0; j < thumbnails.length; j++) {
                thumbnails[j].classList.remove('active');
            }
            this.classList.add('active');
        });
    }
    if (thumbnails.length > 0) thumbnails[0].classList.add('active');
    
    // Size click handler
    const sizeBtns = document.querySelectorAll('.size-btn');
    for (let i = 0; i < sizeBtns.length; i++) {
        const btn = sizeBtns[i];
        btn.addEventListener('click', function() {
            for (let j = 0; j < sizeBtns.length; j++) {
                sizeBtns[j].classList.remove('active');
            }
            this.classList.add('active');
            selectedSize = this.getAttribute('data-size');
        });
        if (i === 0) btn.classList.add('active');
    }
    
    // Type click handler (if exists)
    const typeBtns = document.querySelectorAll('.type-btn');
    const priceElement = document.getElementById('detailPrice');
    if (typeBtns.length > 0) {
        for (let i = 0; i < typeBtns.length; i++) {
            const btn = typeBtns[i];
            btn.addEventListener('click', function() {
                for (let j = 0; j < typeBtns.length; j++) {
                    typeBtns[j].classList.remove('active');
                }
                this.classList.add('active');
                selectedType = this.getAttribute('data-type');
                const newPrice = parseInt(this.getAttribute('data-price'));
                if (priceElement) priceElement.textContent = formatPrice(newPrice);
            });
            if (i === 0) btn.classList.add('active');
        }
    }
    
    // Add to cart handler
    const addToCartBtn = document.getElementById('addToCartDetail');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const finalPrice = priceElement ? parseInt(priceElement.textContent.replace('R ', '').replace(',', '')) : product.price;
            addToCart({
                id: product.id,
                name: product.name,
                description: product.description,
                color: product.color,
                colorName: product.colorName,
                size: selectedSize,
                type: selectedType,
                price: finalPrice
            });
        });
    }
    
    renderRecommendations(product);
}

function renderRecommendations(currentProduct) {
    const recommendations = allProducts
        .filter(function(p) { 
            return p.id !== currentProduct.id && p.category === currentProduct.category && p.color === currentProduct.color;
        })
        .slice(0, 4);
    
    const container = document.getElementById('recommendationsGrid');
    if (!container) return;
    
    if (recommendations.length === 0) {
        container.innerHTML = '<p>No recommendations available.</p>';
        return;
    }
    
    let recHTML = '';
    for (let i = 0; i < recommendations.length; i++) {
        const rec = recommendations[i];
        recHTML += `
            <div class="recommendation-card" data-id="${rec.id}" data-aos="fade-up" data-aos-delay="${i * 100}">
                <img src="${rec.images[0]}" alt="${rec.name}">
                <h4>${escapeHTML(rec.name)}</h4>
                <p>${formatPrice(rec.price)}</p>
            </div>
        `;
    }
    
    container.innerHTML = recHTML;
    
    const recCards = document.querySelectorAll('.recommendation-card');
    for (let i = 0; i < recCards.length; i++) {
        recCards[i].addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            window.location.href = 'product.html?id=' + id;
        });
    }
}

// Modal Functions
function initModal() {
    const modal = document.getElementById('cartModal');
    const cartIcon = document.getElementById('cartIcon');
    const closeBtn = document.getElementById('closeCartBtn');
    const whatsappBtn = document.getElementById('whatsappOrderBtn');
    const clearCartBtn = document.getElementById('clearCartBtn');
    
    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            renderCartModal();
            if (modal) modal.classList.add('open');
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            if (modal) modal.classList.remove('open');
        });
    }
    
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            sendWhatsAppQuote();
        });
    }
    
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', function() {
            clearCart();
        });
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('open');
            }
        });
    }
}

// Update Contacts Section with TikTok
function updateContactsWithTikTok() {
    const contactGrid = document.querySelector('.contact-grid');
    if (contactGrid && !document.querySelector('.contact-card.tiktok-card')) {
        const tiktokCard = document.createElement('div');
        tiktokCard.className = 'contact-card tiktok-card';
        tiktokCard.setAttribute('data-aos', 'flip-up');
        tiktokCard.setAttribute('data-aos-duration', '600');
        tiktokCard.innerHTML = `
            <div class="contact-icon">
                <i class="fab fa-tiktok"></i>
            </div>
            <h3>TikTok</h3>
            <p>@christ.or.nothing_</p>
            <span class="contact-note">Follow for updates & content</span>
        `;
        tiktokCard.addEventListener('click', function() {
            window.open('https://www.tiktok.com/@christ.or.nothing_?_r=1&_t=ZS-94xMFltNYn9', '_blank');
        });
        contactGrid.appendChild(tiktokCard);
    }
}

// Update WhatsApp button text in cart modal
function updateWhatsAppButtonText() {
    const whatsappBtn = document.getElementById('whatsappOrderBtn');
    if (whatsappBtn) {
        whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Checkout via WhatsApp';
    }
}

// Initialize AOS
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    initScrollHeader();
    initAboutModal();
    initModal();
    initAOS();
    updateContactsWithTikTok();
    updateWhatsAppButtonText();
    
    if (window.location.pathname.includes('product.html')) {
        renderProductDetail();
    } else {
        renderProductGrid('tshirts', products.tshirts);
        renderProductGrid('hoodies', products.hoodies);
        renderProductGrid('sweaters', products.sweaters);
        renderProductGrid('headwear', products.headwear);
    }
});