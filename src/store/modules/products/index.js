import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'


export default {
    namespaced: true,
    state() {
       return {
        // cartQty: 0,
        // cartItems: [],
        cart: {
            qty: 0,
            items: [
                
            ],
            sumTotal: 0
        },
        allProducts: [
            {
                id: '01',
                category: 'laptops',
                name: 'HP Chromebook 15a',
                price: 1029,
                description: 
                'The perfect ultra thin, lightweight, and compact computer with great power of portability to keep you connected anywhere you go. Intel Pentium Silver Processor and Intel UHD graphics with 15.6" diagonal display',
                image: require('@/assets/products-images/laptops/hpchromebook.png'),
                discount: true
            },
            {
                id: '02',
                category: 'laptops',
                name: 'HP Victus laptop',
                price: 999,
                description:
                'Here is the amazing Victus by HP laptop with 16GB memory, 512G SSD storage and 16.1" diagonal FHD display. NVIDIA® GeForce RTX™ 3050 Laptop GPU (4 GB GDDR6 dedicated) and Windows 11 Home.',
                image: require('@/assets/products-images/laptops/hpvictus.png'),
            },
            {
                id: '03',
                category: 'laptops',
                name: 'HP Omen Gaming Laptop 16-n0797nr',
                price: 1599,
                description:
                'HP Omen Gaming Laptop with AMD Ryzen™ 7 processor. NVIDIA® GeForce RTX™ 3060 Laptop GPU (6 GB GDDR6 dedicated). 16 GB memory; 1 TB SSD storage and 16.1" diagonal FHD display. Windows 11 Home',
                image: require('@/assets/products-images/laptops/hpomengaming.png'),
            },
            {
                id: '04',
                category: 'laptops',
                name: 'Omen by HP Laptop 16t-k000',
                price: 1299,
                description:
                'HP Omen Gaming Laptop with Intel® i7 and AMD Ryzen 7 processors. NVIDIA GeForce RTX 30-series graphics. 16.1" display for immersive visual experience. Windows 11 Home',
                image: require('@/assets/products-images/laptops/hpomen.png'),
            },
            {
                id: '05',
                category: 'laptops',
                name: 'Apple Macbook Air 2020',
                price: 1599,
                description:
                '2020 Apple MacBook Air 13.3" with Retina Display, M1 Chip with 8-Core CPU and 7-Core GPU, 16GB Memory, 1TB SSD, 30W USB Type-C Power Adapter. Available in Grey and Silver colors.',
                image: require('@/assets/products-images/laptops/macbookair2021.png'),
                discount: true
            },
            {
                id: '06',
                category: 'laptops',
                name: 'Apple Macbook Pro 2021',
                price: 2099,
                description:
                '16" Apple Macbook Pro 2021 Model - M1 Pro Chip with 10-core CPU and 16-core GPU - 16GB RAM - 512GB SSD storage. Available in Silver and Space grey colors. Amazing battery life and sound system.',
                image: require('@/assets/products-images/laptops/macbookpro2021.png'),
            },
            {
                id: '07',
                category: 'laptops',
                name: 'Apple Macbook Air 2022',
                price: 1499,
                description:
                '2022 Apple MacBook Air Laptop with M2 chip: 13.6", Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard,Ultra Thin Design, 1080p FaceTime HD Camera and up to 18 hours battery life. ',
                image: require('@/assets/products-images/laptops/macbookair2022.png'),
            },
            {
                id: '08',
                category: 'laptops',
                name: 'Apple Macbook Pro 2022',
                price: 2499,
                description:
                'The new MacBook Pro by Apple with blazing-fast M1 Pro or M1 Max chip, faster CPU performance, up to 21 hours battery life and a stunning Liquid Retina XDR display for faster graphics performance.',
                image: require('@/assets/products-images/laptops/macbookpro2022.png'),
            },
            {
                id: '09',
                category: 'headphones',
                name: 'Beats Studio Buds - Earphones',
                price: 149,
                description: 
                'This wireless Noise Cancelling earphones deliver powerful, balanced sound in a compact design, through an entirely customized acoustic platform. Compatible with Android and iOS devices with up to 8 hours battery life.',
                image: require('@/assets/products-images/headphones/beatsstudiobuds.png')
            },
            {
                id: '10',
                category: 'headphones',
                name: 'Beats Solo 3 Wireless',
                price: 129,
                description: 
                'Beats Solo³ Wireless headphone delivers premium playback with fine-tuned acoustics that maximize clarity, breadth, and balance. Experience better sound with the comfort-cushion ear cups which buffer outside noise for immersive sound.',
                image: require('@/assets/products-images/headphones/BeatsSolo3.png')
            },
            {
                id: '11',
                category: 'headphones',
                name: 'Coby Wireless Folding Headphones',
                price: 109,
                description: 
                'COBY Metal Wireless Bluetooth Headphones with portable ultra modern folding design, 10 hours battery life, 49 feet Distance. Enjoy comfort, style, portability and amazing battery life.',
                image: require('@/assets/products-images/headphones/cobywirelessfolding.png')
            },
            {
                id: '12',
                category: 'headphones',
                name: 'Pioneer DJ HDJ-X5BT Headphones',
                price: 429,
                description: 
                'This metallic black bluetooth over-ear DJ headphones offers flexible functionality and extended frequency reproduction for DJs on stage or at home. It supports AAC, aptX, aptX-LL, and SBC audio codecs, and offers a Bluetooth range of up to 32.8 feet.',
                image: require('@/assets/products-images/headphones/hdj-x5bt-wireless.png')
            },
            {
                id: '13',
                category: 'phones',
                name: 'Apple iPhone 13 mini',
                price: 879,
                description: 
                'iPhone 13 mini 4GB RAM 256GB Storage. 2438mAh Li-Ion Battery. 5.4" and 140 grams. iOS 15(upgradable to 16.2). Apple A15 Bionic chip. Face ID. Dual Sim(Nano Sim and eSim). Available in Red, Starlight, Pink, Green and Midnight colors.',
                image: require('@/assets/products-images/phones/iPhone13mini.png')
            },
            {
                id: '14',
                category: 'phones',
                name: 'Apple iPhone 13',
                price: 929,
                description: 
                'iPhone 13 4GB RAM 256GB Storage. 3240mAh Li-Ion Battery. 6.1" and 173 grams. iOS 15(upgradable to 16.2). Apple A15 Bionic chip. Face ID. Dual Sim(Nano Sim and eSim). Available in Red, Starlight, Pink, Green and Midnight colors.',
                image: require('@/assets/products-images/phones/iPhone13.png'),
                discount: true
            },
            {
                id: '15',
                category: 'phones',
                name: 'Apple iPhone 13 Pro',
                price: 1199,
                description: 
                'Apple\'s smaller premium  with a 6.1" screen size, 6GB RAM 128GB Storage, 3095mAh Li-Ion Battery. 6.1" and 173 grams. iOS 15(upgradable to 16.2). Apple A15 Bionic chip. Face ID. Dual Sim(Nano Sim and eSim). Available in Graphite, Gold, Silver, and Sierra Blue colors.',
                image: require('@/assets/products-images/phones/iPhone13pro.png')
            },
            {
                id: '16',
                category: 'phones',
                name: 'Apple iPhone 13 Pro Max',
                price: 1299,
                description: 
                'The iPhone 13 Pro Max comes with a massive 6.7" with 120Hz ProMotion display that ensures super smooth scrolling. 6GB RAM 128GB Storage. 4352mAh Li-Ion Battery. 6.7" and 173 grams. iOS 15(upgradable to 16.2). Apple A15 Bionic chip. Face ID. Dual Sim(Nano Sim and eSim). Available in Graphite, Gold, Silver, and Sierra Blue colors.',
                image: require('@/assets/products-images/phones/iPhone13promax.png')
            },
            {
                id: '17',
                category: 'phones',
                name: 'Apple iPhone 14',
                price: 899,
                description: 
                'iPhone 14 6GB RAM 128GB Storage. 3279mAh Li-Ion Battery. 6.1" OLED Display. 172 grams. iOS  16.x - Apple improved A15 Bionic processor. 3D Face Unlock. Dual Sim(Nano Sim and eSim). Available in Red, Blue, Purple Starlight and Midnight colors.',
                image: require('@/assets/products-images/phones/iPhone14.png')
            },
            {
                id: '18',
                category: 'phones',
                name: 'Apple iPhone 14 Plus',
                price: 1049,
                description: 
                'iPhone 14 Plus 6GB RAM 128GB Storage. 4325mAh Li-Ion Battery. 6.7" OLED Display. 203 grams.  iOS 16.x - Apple improved A15 Bionic processor. 3D Face Unlock. Dual Sim(Nano Sim and eSim). Available in Red, Blue, Purple Starlight, and Midnight colors.',
                image: require('@/assets/products-images/phones/iPhone14plus.png')
            },
            {
                id: '19',
                category: 'phones',
                name: 'Apple iPhone 14 Pro',
                price: 1299,
                description: 
                'Apple iPhone 14 Pro 6GB RAM 256GB Storage. 3200mAh Li-Ion Battery. 6.1" and 206 grams. iOS 16.x - Apple Bionic A16 processor. 3D Face Unlock. Dual Sim(Nano Sim and eSim). Available in Space Black, Silver, Gold and Deep Purple.',
                image: require('@/assets/products-images/phones/iPhone14pro.png')
            },
            {
                id: '20',
                category: 'phones',
                name: 'Apple iPhone 14 Promax',
                price: 1399,
                description: 
                'iPhone 14 promax with 6GB RAM 256GB Storage. 4323mAh Li-Ion Battery. 6.7" and 240 grams. iOS 16.x - Apple Bionic A16 processor. 3D Face Unlock. Dual Sim(Nano Sim and eSim). Available in Space Black, Silver, Gold and Deep Purple.',
                image: require('@/assets/products-images/phones/iPhone14promax.png')
            },
            {
                id: '21',
                category: 'phones',
                name: 'Samsung Galaxy S22',
                price: 1099,
                description: 
                'Samsung S22 6.1" Dynamic AMOLED Display. 8GB RAM 128/256GB Storage. 3700 mAh Battery - Supports Fast, Qi Wireless and Reverse Wireless Charging. Android 13. 2D Face Unlock, Ultrasonic in-screen fingerprint. Available in Phantom Black, White, Pink, Gold and Green.',
                image: require('@/assets/products-images/phones/s22.png')
            },
            {
                id: '22',
                category: 'phones',
                name: 'Samsung Galaxy S22 ultra 5G',
                price: 1299,
                description: 
                'Samsung S22 6.8" Dynamic AMOLED Display. 8GB RAM 128GB Storage. 5000 mAh Battery - Supports Fast, Qi Wireless and Reverse Wireless Charging. Android 13. 2D Face Unlock, Ultrasonic in-screen fingerprint. Available in Phantom Black, White, Burgundy and Green.',
                image: require('@/assets/products-images/phones/s22ultra.png')
            },
            {
                id: '23',
                category: 'phones',
                name: 'Samsung Galaxy S21',
                price: 1199,
                description: 
                'The s21 comes with 6.2" Dynamic AMOLED Display. 8GB Ram 128/256GB Storage. 4000 mAh Li-Polymer Battery. Super Fast Charging nd Samsung\'s S Pen Snapdragon 888 chipset. 2D Face Unlock, Ultrasonic in-screen fingerprint. Available in Phantom Pink, Violet, Gray and Deep White.',
                image: require('@/assets/products-images/phones/s21.png')
            },
            {
                id: '24',
                category: 'phones',
                name: 'Samsung Galaxy S21 ultra 5G',
                price: 1299,
                description: 
                'The headliner of the S21 series with 6.8" display (AMOLED Screen). 12GB Ram 128GB Storage. 5000mAh Li-Polymer Battery. Supports Wireless Charging and Samsung\'s S Pen Snapdragon 888 chipset. 2D Face unlock, Ultrasonic in-screen fingerprint. Available in Silver and Phantom Black',
                image: require('@/assets/products-images/phones/s21ultra.png')
            },
            {
                id: '25',
                category: 'consoles',
                name: 'Sony Playstation 4 Console',
                price: 499,
                description: 
                'Sleek, powerful game console with an excellent controller and plenty of compelling titles. Optical Drive Blu- ray DVD RWController(s) 1 Dualshock 4 Wireless. 1TB Storage, Audio/Video, HDMI Networking Wi-Fi',
                image: require('@/assets/products-images/gaming-consoles/sonyps4slimplaystation.png'),
                discount: true
            },
            {
                id: '26',
                category: 'consoles',
                name: 'Sony Playstation 5 Console',
                price: 599,
                description: 
                ' 16GB GDDR6/256-bit - 448GB/s - Custom 825GB SSD - Optical Drive Ultra HD Blu-ray (66G/100G) ~10xCAV. Weighs 4.5kg. Audio/Video, HDMI Networking Wi-Fi. Ultra HD Blu-ray, up to 100GB/disc',
                image: require('@/assets/products-images/gaming-consoles/sonyps5slimplaystation.png')
            },
            {
                id: '27',
                category: 'consoles',
                name: 'Microsoft X-box Series X',
                price: 549,
                description: 
                'X-box Series X with CPU 8x Cores @ 3.8 GHz (3.6 GHz w/ SMT) Custom Zen 2 CPU. Memory Info: 16 GB GDDR6 w/ 320b bus - 10GB @ 560 GB/s, 6GB @ 336 GB/s - 1 TB Custom NVME SSD. Optical Drive 4K UHD Blu-Ray Drive',
                image: require('@/assets/products-images/gaming-consoles/xboxseriesx.png')
            },
            {
                id: '28',
                category: 'consoles',
                name: 'Microsoft X-box Series S',
                price: 349,
                description: 
                'Custom NVME SSD 512GB Storage. 1440p resolution and up to 120FPS. Ray-Tracing (RTX) Support. 1440p resolution and up to 120FPS. 4K (Media playback and upscaling only). Variable Rate Shading and Refresh Rate. Ultra-Low Latency',
                image: require('@/assets/products-images/gaming-consoles/xboxseriess.png')
            }

        ]
       } 
    },
    mutations,
    actions,
    getters
}