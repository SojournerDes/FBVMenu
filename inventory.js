let inventory = [
	{brand: 'river', shelfName: "", product: "logo", blurb: "Available in 00, 03, 06, 12, and 18mg."},
	{brand: 'river', shelfName: 'Bandit', product: 'bandit', blurb: 'Tobacco with blackberry custard.'},
	{brand: 'river', shelfName: 'Blackberry Waffle Cone', product: 'blackberrywaffle', blurb: 'Blackberry topping on a scoop of vanilla ice cream, all atop a vanilla waffle cone.'},
	{brand: 'river', shelfName: 'Blackberry Cream', product: 'blackberrycream', blurb: 'Whipped cream with blackberries.'},
	{brand: 'river', shelfName: 'Blue Island Punch', product: 'blueislandpunch', blurb: 'Blue raspberry fruit punch.'},
	{brand: 'river', shelfName: 'Caramel Cove', product: 'caramelcove', blurb: 'Caramel, hazelnut, and marshmallows.'},
	{brand: 'river', shelfName: 'Castaway', product: 'castaway', blurb: 'Coconut, watermelon, and mango.'},
	{brand: 'river', shelfName: 'Eddy', product: 'eddy', blurb: 'Mango pomegranate lemonade.'},
	{brand: 'river', shelfName: 'Great Wall', product: 'greatwall', blurb: 'Graham crackers and caramel adorned with shaved almonds, Kentucky bourbon and a splash of coconut cream.'},
	{brand: 'river', shelfName: 'Lemon Cream', product: 'lemoncream', blurb: 'Whipped cream with tart lemon.'},
	{brand: 'river', shelfName: 'Midori Sour', product: 'midori', blurb: 'Honeydew, lemonlime, and cherry.'},
	{brand: 'river', shelfName: 'Peach Mango Lemonade Menthol', product: 'peachmangolemonadementhol', blurb: ' '},
	{brand: 'river', shelfName: 'Pineapple Grape Menthol', product: 'pineapplegrapementhol', blurb: ' '},
	{brand: 'river', shelfName: 'Raspberry Splash', product: 'raspberrysplash', blurb: 'Raspberry and lemon.'},
	{brand: 'river', shelfName: 'Strawnana Cream', product: 'strawnanacream', blurb: 'Whipped cream with strawberry and banana.'},
	{brand: 'river', shelfName: 'Swamp Mama', product: 'swampmama', blurb: 'Strawberries mixed with sweet vanilla custard.'},
	{brand: 'river', shelfName: 'Strawberry Cream', product: 'strawberrycream', blurb: "Whipped cream with strawberries."},
	{brand: 'river', shelfName: "Tiger's Blood", product: 'tigersblood', blurb: 'Strawberry and coconut.'},
	{brand: 'river', shelfName: 'Vanilla Bandit', product: 'vanbandit', blurb: 'Tobacco with vanilla custard.'},
	{brand: 'river', shelfName: 'Vanilla Graham', product: 'vangraham', blurb: 'Vanilla graham cracker with a brown sugar dusting.'},
	{brand: 'river', shelfName: 'Vanilla Waffle Cone', product: 'vanwafflecone', blurb: 'A scoop of vanilla ice cream atop a vanilla waffle cone.'},
	{brand: 'river', shelfName: 'Watermelon Menthol', product: 'watermelonpunchmenthol', blurb: 'Watermelon fruit punch with menthol.'},
	{brand: 'river', shelfName: 'Wiki', product: 'wiki', blurb: 'Watermelon and kiwi.'},

	{brand: "naked", shelfName: "", product: "logo", blurb: ""},
	{brand: 'naked', shelfName: 'Hawaiian P.O.G.', product: 'pog', blurb: 'Passion fruit, orange, and guava.'},
	{brand: 'naked', shelfName: 'Lava Flow', product: 'lavaflow', blurb: 'Strawberry, pineapple, and coconut.'},
	{brand: 'naked', shelfName: 'Really Berry', product: 'reallyberry', blurb: 'Blue raspberry with a hint of lemon.'},
	{brand: 'naked', shelfName: 'Melon Menthol', product: 'melonmenthol', blurb: 'Honeydew, pineapple, and cantaloupe menthol.'},
	{brand: 'naked', shelfName: 'Strawberry Pom', product: 'strawberrypom', blurb: 'Strawberry pomegranate menthol.'},
	{brand: 'naked', shelfName: 'Berry Menthol', product: 'berrymenthol', blurb: 'Blue raspberry menthol.'},

	{brand: 'kilo', shelfName: ' ', product: 'logo', blurb: ' '},
	{brand: 'kilo', shelfName: 'Watermelon Sours', product: 'watermelonsours', blurb: 'Watermelon sour straws.'},
	{brand: 'kilo', shelfName: 'Blue Raspberry Sours', product: 'blueraspberrysours', blurb: 'Blue raspberry sour straws.'},
	{brand: 'kilo', shelfName: 'Strawberry Sours', product: 'strawberrysours', blurb: 'Strawberry sour straws.'},
	{brand: 'kilo', shelfName: 'Peach Pineapple Sours', product: 'peachpineapplesours', blurb: 'Peach and pineapple sour straws.'},

	{brand: 'vapetasia', shelfName: ' ', product: 'logo', blurb: ' '},
	{brand: 'vapetasia', shelfName: 'Rainbow Road', product: 'rainbowroad', blurb: 'Berries, citrus, and cream for a fruity breakfast cereal.'},
	{brand: 'vapetasia', shelfName: 'Blackberry Lemon', product: 'blackberrylemon', blurb: 'Sweet and tart, blackberries and lemon.'},
	{brand: 'vapetasia', shelfName: 'Vanilla', product: 'vanilla', blurb: 'Vanilla custard.'},
	{brand: 'vapetasia', shelfName: 'Strawberry', product: 'strawberry', blurb: 'Strawberry custard.'}, 
	{brand: 'vapetasia', shelfName: 'Blueberry', product: 'strawberry', blurb: 'Blueberry custard.'},

	{brand: 'fivestar', shelfName: ' ', product: 'logo', blurb: ' '},
	{brand: 'choice', shelfName: 'Stackin Chips', product: 'stackinchips', blurb: 'Iced watermelon lemonade.'},
	{brand: 'choice', shelfName: 'Ballin', product: 'ballin', blurb: 'Just plain watermelon.'},
	{brand: 'choice', shelfName: 'Hood Rich', product: 'hoodrich', blurb: 'A cinnamon and vanilla baked treat.'},
	{brand: 'choice', shelfName: 'Six Figures', product: 'sixfigures', blurb: 'Strawberry, apple and peach.'},
	{brand: 'choice', shelfName: 'Skrilla', product: 'skrilla', blurb: 'Blueberry cereal.'},
	{brand: 'choice', shelfName: '100 Racks', product: '100racks', blurb: 'Green apple, blue raspberry.'},
	{brand: 'silverback', shelfName: 'Lola', product: 'lola', blurb: 'Strawberry, banana, dragonfruit.'},
	{brand: 'silverback', shelfName: 'Jenny', product: 'jenny', blurb: 'Strawberry, bubblegum, mint.'},
	{brand: 'silverback', shelfName: 'Booboo', product: 'booboo', blurb: 'Grape and blueberry.'},
	{brand: 'silverback', shelfName: 'Sandy', product: 'sandy', blurb: 'Strawberry watermelon.'},
	{brand: 'silverback', shelfName: 'Harambe', product: 'harambe', blurb: 'Cinnamon and cream liqueur.'}, 

	{brand: 'oneup', shelfName: ' ', product: 'logo', blurb: ' '},
	{brand: 'oneup', shelfName: 'Orgasm', product: 'orgasm', blurb: 'Peach, guava, and watermelon.<br>Also available in menthol.'},

	{brand: 'transistor', shelfName: ' ', product: 'logo', blurb: ' '}, 
	{brand: 'transistor', shelfName: 'Bluetiful Disaster', product: 'deepblueraspberry', blurb: 'Blue raspberry gummy.'},
	{brand: 'transistor', shelfName: 'Tango Melon', product: 'tangerinemangowatermelon', blurb: ' '},
	{brand: 'transistor', shelfName: "Lem'n Berry", product: 'exoticpinklemonade', blurb: 'Exotic pink lemonade.'},
	{brand: 'transistor', shelfName: 'LSD', product: 'lemonsugardrop', blurb: 'Sweet and tart lemon hard candy.'},	

	{brand: "shijin", shelfName: " ", product: "logo", blurb: " "},
	{brand: "shijin", shelfName: "Tiger's Milk", product: "tigersmilk", blurb: "Peach Mango Slushy."},
	{brand: 'shijin', shelfName: 'Tortoise Blood on the Rocks', product: 'tortoiseontherocks', blurb: 'Green apple, blue raspberry, and crushed mint.'},
	{brand: 'shijin', shelfName: 'Tortoise Blood on Ice', product: 'tortoiseonice', blurb: 'Green apple, blue raspberry, and menthol.'},
	{brand: 'shijin', shelfName: 'Tortoise Blood', product: 'tortoiseblood', blurb: 'Green apple, blue raspberry.'},
	{brand: 'shijin', shelfName: 'Dragon Cloud', product: 'dragoncloud', blurb: 'Cinnamon, sugar, vanilla ice cream, all on a savory pastry.'},
	{brand: 'shijin', shelfName: 'Phoenix Tears', product: 'phoenixtears', blurb: 'Sugar cookie with vanilla custard.'},

	{brand: "juicehead", shelfName: " ", product: "logo", blurb: " "},
	{brand: "juicehead", shelfName: "Peach Pear", product: "peachpear", blurb: " "},
	{brand: "juicehead", shelfName: "Pineapple Grapefruit", product: "pineapplegrapefruit", blurb: " "},
	{brand: "juicehead", shelfName: "Watermelon Lime", product: "watermelonlime", blurb: " "},
	{brand: "juicehead", shelfName: "Blueberry Lemon", product: "blueberrylemon", blurb: " "},
	{brand: "juicehead", shelfName: "Strawberry Kiwi", product: "strawberrykiwi", blurb: " "},

	{brand: "monster", shelfName: " ", product: "logo", blurb: " "},
	{brand: "monster", shelfName: "Mango Tangerine Guava Ice", product: "icemangotangerineguava", blurb: " "},
	{brand: "monster", shelfName: "Mango Peach Guava", product: "mangopeachguava", blurb: " "},
	{brand: "monster", shelfName: "Blueberry Raspberry Lemon", product: "blueberryraspberrylemon", blurb: " "},
	{brand: "monster", shelfName: "Banana", product: "banana", blurb: "25% Toast, 25% Butter, 50% Banana."},
	{brand: "monster", shelfName: "Blueberry", product: "blueberry", blurb: "25% Toast, 25% Butter, 50% Blueberry Jam."},
	{brand: "monster", shelfName: "Strawberry", product: "strawberry", blurb: "25% Toast, 25% Butter, 50% Strawberry Jam."},
	{brand: "monster", shelfName: "Raspberry", product: "raspberry", blurb: "25% Toast, 25% Butter, 50% Raspberry Jam."},
	{brand: "monster", shelfName: "Blackberry", product: "blackberry", blurb: "25% Toast, 25% Butter, 50% Blackberry Jam."},
	{brand: "monster", shelfName: "Peanut Butter & Strawberry Jam", product: "peanutbutterstrawberryjam", blurb: "25% Toast, 25% Peanut Butter, 50% Strawberry Jam."},

	{brand: "cloudnurdz", shelfName: " ", product: "logo", blurb: " "},
	{brand: "cloudnurdz", shelfName: "Strawberry Lemon", product: "strawberrylemon", blurb: " "},
	{brand: "cloudnurdz", shelfName: "Watermelon Apple", product: "watermelonapple", blurb: " "},
	{brand: "cloudnurdz", shelfName: "Peach Blue Raspberry", product: "peachblueraspberry", blurb: " "},
	{brand: "cloudnurdz", shelfName: "Grape Apple", product: "grapeapple", blurb: " "},
	{brand: "cloudnurdz", shelfName: "Grape Strawberry", product: "grapestrawberry", blurb: " "},

	{brand: "fruitia", shelfName: " ", product: "logo", blurb: " "},
	{brand: "fruitia", shelfName: "Pineapple Citrus Twist", product: "pineapplecitrustwist", blurb: "Pineapple mango citrus."},
	{brand: "fruitia", shelfName: "Strawberry Coconut Refresher", product: "strawberrycoconutrefresher", blurb: " "},
	{brand: "fruitia", shelfName: "Apple Kiwi Crush", product: "applekiwicrush", blurb: " "},
	{brand: "fruitia", shelfName: "Blood Orange Cactus Cooler", product: "bloodorangecactuscooler", blurb: " "},
	{brand: "fruitia", shelfName: "Passion Fruit Guava Punch", product: "passionfruitguavapunch", blurb: " "},
	{brand: "fruitia", shelfName: "Smooth Banana Ice", product: "smoothbananaice", blurb: " "},

	{brand: "pachamama", shelfName: " ", product: "logo", blurb: " "},
	{brand: "pachamama", shelfName: "Huckleberry Pear Acai", product: "huckleberrypearacai", blurb: " "},
	{brand: "pachamama", shelfName: "Passion Fruit Yuzu Raspberry", product: "passionfruityuzuraspberry", blurb: "Yuzu is a citrus fruit."},
	{brand: "pachamama", shelfName: "Fuji Apple Strawberry Nectarine", product: "fujiapplestrawberrynectarine", blurb: " "},
	{brand: "pachamama", shelfName: "Strawberry Guava Jackfruit", product: "strawberryguavajackfruit", blurb: "Jackfruit is often compared to mango or pineapple."},
	{brand: "pachamama", shelfName: "Mint Honeydew Berry Kiwi", product: "minthoneydewberrykiwi", blurb: " "},
	{brand: "pachamama", shelfName: "Blood Orange Banana Gooseberry", product: "bloodorangebananagooseberry", blurb: "Ripe gooseberries are like sour grapes."},
	{brand: "pachamama", shelfName: "Peach Papaya Coconut Cream", product: "peachpapayacoconutcream", blurb: ""}, 
	
	{brand: "coastalclouds", shelfName: " ", product: "logo", blurb: " "},
	{brand: "coastalclouds", shelfName: "Passion Fruit Orange Guava", product: "passionfruitorangeguava", blurb: " "},
	{brand: "coastalclouds", shelfName: "Blueberry Limeade", product: "blueberrylimeade", blurb: " "},
	{brand: "coastalclouds", shelfName: "Pink Lemonade", product: "pinklemonade", blurb: " "},
	{brand: "coastalclouds", shelfName: "Apple Peach Strawberry", product: "applepeachstrawberry", blurb: " "},
	{brand: "coastalclouds", shelfName: "Apple Peach Strawberry Ice", product: "applepeachstrawberryice", blurb: " "},
	{brand: "coastalclouds", shelfName: "Blood Orange Mango Snow Cone", product: "bloodorangemangosnowcone", blurb: " "},
	{brand: "coastalclouds", shelfName: "Mango Berries Ice", product: "mangoberriesice", blurb: " "},

	{brand: "loyalty", shelfName: " ", product: "logo", blurb: " "},
	{brand: "loyalty", shelfName: "Wata Mango", product: "watamango", blurb: "Watermelon mango."},
	{brand: "loyalty", shelfName: "Ki Berry", product: "kiberry", blurb: "Kiwi strawberry."},
	{brand: "loyalty", shelfName: "Pom-n-ade", product: "pomnade", blurb: "Pomegranate lemonade."},

	{brand: "boba", shelfName: " ", product: "logo", blurb: " "},
	{brand: "boba", shelfName: "Dewwy", product: "dewwy", blurb: "Honeydew milk tea."},
	{brand: "boba", shelfName: "Jazzy", product: "jazzy", blurb: "Jasmine milk tea."},
	{brand: "boba", shelfName: "Manggo", product: "manggo", blurb: "Mango milk tea."},

	{brand: "ruthless", shelfName: " ", product: "logo", blurb: " "},
	{brand: "ruthless", shelfName: "Jungle Fever", product: "junglefever", blurb: "Pineapple, mango, citrus."},
	{brand: "ruthless", shelfName: "Swamp Thang", product: "swampthang", blurb: "Sour candy apple."},
	{brand: "ruthless", shelfName: "Rage", product: "rage", blurb: "Apple mango."},
	{brand: "ruthless", shelfName: "Paradize", product: "paradize", blurb: "Passion fruit, pear, and peaches."},
	{brand: "ruthless", shelfName: "Slurricane", product: "slurricane", blurb: "Peach, papaya, and guava."},
	{brand: "ruthless", shelfName: "Grape Drank", product: "grapedrank", blurb: "Grape soda, also available in menthol."},
	{brand: "ruthless", shelfName: "Ez Duz It", product: "ezduzit", blurb: "Strawberry watermelon, also available in menthol."},
	{brand: "ruthless", shelfName: "Strizzy", product: "strizzy", blurb: "Raspberry, kiwi, and strawberry."},
	{brand: "ruthless", shelfName: "Antidote", product: "antidote", blurb: "Peach, mango, and blue raspberry."},
	{brand: "ruthless", shelfName: "Skir Skirr on Ice", product: "skirskirronice", blurb: "Honeydew melon, green apple, menthol."},

	{brand: "airfactory", shelfName: " ", product: "logo", blurb: " "},
	{brand: "airfactory", shelfName: "Melon Lush", product: "melonlush", blurb: "Watermelon and honeydew taffy, also available in menthol."},
	{brand: "airfactory", shelfName: "Mix Berry", product: "mixberry", blurb: "A pool of 'mysterious berries.'"},
	{brand: "airfactory", shelfName: "Berry Rush", product: "berryrush", blurb: "Strawberry and blueberry."},
	{brand: "airfactory", shelfName: "Blue Razz", product: "bluerazz", blurb: "Blue raspberry taffy, also available in menthol."},
	{brand: "airfactory", shelfName: "Custard", product: "custard", blurb: "Smooth vanilla custard."},
	{brand: "airfactory", shelfName: "Tropic Freeze", product: "tropicfreeze", blurb: "Kiwi, strawberry, menthol."},
	{brand: "airfactory", shelfName: "Menthol", product: "menthol", blurb: "Probably closer to mint, but that's okay."},
	{brand: "airfactory", shelfName: "Mint", product: "mint", blurb: "Mintier than menthol."},

	{brand: "aqua", shelfName: " ", product: "logo", blurb: " "},
	{brand: "aqua", shelfName: "Oasis", product: "oasis", blurb: "Peach, cataloupe, papaya."},
	{brand: "aqua", shelfName: "Mist", product: "mist", blurb: "Green apple, peach, and kiwi."},
	{brand: "aqua", shelfName: "Flow", product: "flow", blurb: "Pineapple, guava, mango."},
	{brand: "aqua", shelfName: "Pure", product: "pure", blurb: "Strawberry, apple, and watermelon."},

	{brand: "pacificnorthwest", shelfName: " ", product: "logo", blurb: " "},
	{brand: "pacificnorthwest", shelfName: "Arctic Tobacco", product: "arctictobacco", blurb: "Bold tobacco and menthol."},
	{brand: "pacificnorthwest", shelfName: "Arctic Frost", product: "arcticfrost", blurb: "An icy cold hit to the back of your throat."},
	{brand: "pacificnorthwest", shelfName: "Cherry Limeade", product: "cherrylimeade", blurb: " "},
	{brand: "pacificnorthwest", shelfName: "Fruity O's", product: "fruityos", blurb: "Sweet fruity cereal and milk."},
	{brand: "pacificnorthwest", shelfName: "Mad Batter", product: "madbatter", blurb: "Soft vanilla cake batter."},
	{brand: "pacificnorthwest", shelfName: "NW4", product: "nw4", blurb: "Vanilla caramel tobacco."},
	{brand: "pacificnorthwest", shelfName: "Peaches", product: "peaches", blurb: "Also available in menthol."},
	{brand: "pacificnorthwest", shelfName: "Spearmint", product: "spearmint", blurb: "Menthol and mint leaf."},
	{brand: "pacificnorthwest", shelfName: "Vanilla Nut Latte", product: "vanillanutlatte", blurb: "Soft vanilla, hazelnut and coffee."}, 
	];