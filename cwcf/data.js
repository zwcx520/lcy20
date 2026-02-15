// 菜谱数据管理
const recipeData = {
  // 所有菜谱数据
  recipes: {
    1: {
      id: 1,
      name: "麻婆豆腐",
      desc: "麻辣鲜香、豆腐滑嫩",
      time: "15分钟",
      spice: "麻辣",
      servings: "2人份",
      rating: "4.8分",
      image: "https://picsum.photos/id/292/600/400",
      imageLarge: "https://picsum.photos/id/292/1200/600",
      category: "classic",
      ingredients: [
        { name: "嫩豆腐", amount: "500g" },
        { name: "牛肉末", amount: "150g" },
        { name: "郫县豆瓣", amount: "2勺" },
        { name: "花椒", amount: "10g" },
        { name: "干辣椒", amount: "5个" },
        { name: "姜蒜", amount: "适量" },
        { name: "葱", amount: "适量" },
        { name: "生抽", amount: "1勺" },
        { name: "料酒", amount: "1勺" },
        { name: "盐", amount: "适量" },
        { name: "糖", amount: "适量" },
        { name: "淀粉", amount: "适量" }
      ],
      steps: [
        "豆腐切小块，盐水浸泡10分钟去腥",
        "热锅凉油，放入牛肉末炒至变色",
        "加入姜蒜末、郫县豆瓣炒出红油",
        "加入适量清水，大火煮沸",
        "放入豆腐块，小火焖煮3分钟",
        "水淀粉勾芡，收汁亮油",
        "撒上花椒面、葱花，出锅即可"
      ],
      tips: [
        "豆腐要选择嫩豆腐，口感更好",
        "勾芡要少量多次，避免汤汁过稠",
        "花椒面要最后撒，保持香味",
        "如果喜欢更麻，可以多放花椒"
      ],
      recommendations: [2, 3, 4]
    },
    2: {
      id: 2,
      name: "水煮肉片",
      desc: "麻辣过瘾、肉片滑嫩",
      time: "20分钟",
      spice: "特辣",
      servings: "2-3人份",
      rating: "4.9分",
      image: "https://picsum.photos/id/431/600/400",
      imageLarge: "https://picsum.photos/id/431/1200/600",
      category: "classic",
      ingredients: [
        { name: "猪里脊", amount: "300g" },
        { name: "豆芽", amount: "200g" },
        { name: "生菜", amount: "100g" },
        { name: "郫县豆瓣", amount: "3勺" },
        { name: "干辣椒", amount: "10个" },
        { name: "花椒", amount: "20g" },
        { name: "姜蒜", amount: "适量" },
        { name: "盐", amount: "适量" },
        { name: "料酒", amount: "1勺" },
        { name: "淀粉", amount: "2勺" },
        { name: "生抽", amount: "1勺" }
      ],
      steps: [
        "猪里脊切薄片，用盐、料酒、淀粉抓匀腌制15分钟",
        "豆芽和生菜焯水后铺在碗底",
        "热锅凉油，加入姜蒜、郫县豆瓣炒出红油",
        "加入适量清水，大火煮沸",
        "将腌制好的肉片逐片放入锅中",
        "肉片变色后关火，连汤倒入碗中",
        "在肉片上撒上干辣椒段和花椒",
        "锅中烧热油，泼在干辣椒和花椒上激香"
      ],
      tips: [
        "肉片要切得薄而均匀",
        "腌制肉片时淀粉要适量，太多会影响口感",
        "泼油的温度要高，才能激发出辣椒和花椒的香味",
        "可以根据个人口味调整辣椒和花椒的用量"
      ],
      recommendations: [1, 3, 5]
    },
    3: {
      id: 3,
      name: "回锅肉",
      desc: "肥而不腻、酱香浓郁",
      time: "25分钟",
      spice: "中辣",
      servings: "2-3人份",
      rating: "4.7分",
      image: "https://picsum.photos/id/312/600/400",
      imageLarge: "https://picsum.photos/id/312/1200/600",
      category: "classic",
      ingredients: [
        { name: "五花肉", amount: "300g" },
        { name: "青蒜", amount: "100g" },
        { name: "郫县豆瓣", amount: "2勺" },
        { name: "甜面酱", amount: "1勺" },
        { name: "生抽", amount: "1勺" },
        { name: "料酒", amount: "1勺" },
        { name: "姜", amount: "适量" },
        { name: "葱", amount: "适量" }
      ],
      steps: [
        "五花肉冷水下锅，加入姜葱、料酒煮至八成熟",
        "捞出放凉，切成薄片",
        "青蒜洗净切段",
        "热锅不放油，放入肉片煸炒至微卷出油",
        "加入郫县豆瓣、甜面酱炒出香味",
        "加入生抽调味",
        "放入青蒜段翻炒至断生",
        "出锅即可"
      ],
      tips: [
        "五花肉要选择肥瘦相间的",
        "煮肉时不要煮得太熟，八成熟即可",
        "煸炒肉片时要把油逼出来，这样吃起来不腻",
        "青蒜要最后放，保持清脆的口感"
      ],
      recommendations: [1, 2, 6]
    },
    4: {
      id: 4,
      name: "鱼香肉丝",
      desc: "酸甜可口、开胃下饭",
      time: "18分钟",
      spice: "微辣",
      servings: "2-3人份",
      rating: "4.6分",
      image: "https://picsum.photos/id/488/600/400",
      imageLarge: "https://picsum.photos/id/488/1200/600",
      category: "home",
      ingredients: [
        { name: "猪里脊肉", amount: "200g" },
        { name: "青椒", amount: "1个" },
        { name: "胡萝卜", amount: "1/2根" },
        { name: "木耳", amount: "适量" },
        { name: "姜蒜", amount: "适量" },
        { name: "葱", amount: "适量" },
        { name: "盐", amount: "适量" },
        { name: "料酒", amount: "1勺" },
        { name: "淀粉", amount: "1勺" },
        { name: "生抽", amount: "1勺" },
        { name: "醋", amount: "2勺" },
        { name: "糖", amount: "1.5勺" },
        { name: "郫县豆瓣", amount: "1勺" }
      ],
      steps: [
        "猪里脊肉切丝，用盐、料酒、淀粉腌制10分钟",
        "青椒、胡萝卜、木耳切丝",
        "调制鱼香汁：生抽、醋、糖、淀粉、清水混合",
        "热锅凉油，放入肉丝炒至变色盛出",
        "锅中留底油，放入姜蒜、郫县豆瓣炒香",
        "放入青椒、胡萝卜、木耳翻炒至断生",
        "放入炒好的肉丝",
        "倒入鱼香汁翻炒均匀",
        "撒上葱花出锅"
      ],
      tips: [
        "肉丝要切得细而均匀",
        "鱼香汁的比例很重要，一般是醋：糖：生抽 = 2：1.5：1",
        "炒制时火要大，动作要快，这样肉丝才会嫩滑",
        "可以根据个人口味调整糖和醋的比例"
      ],
      recommendations: [1, 5, 12]
    },
    5: {
      id: 5,
      name: "宫保鸡丁",
      desc: "麻辣鲜香、口感丰富",
      time: "22分钟",
      spice: "中辣",
      servings: "2-3人份",
      rating: "4.8分",
      image: "https://picsum.photos/id/493/600/400",
      imageLarge: "https://picsum.photos/id/493/1200/600",
      category: "home",
      ingredients: [
        { name: "鸡胸肉", amount: "300g" },
        { name: "花生", amount: "100g" },
        { name: "青椒", amount: "1个" },
        { name: "胡萝卜", amount: "1/2根" },
        { name: "姜蒜", amount: "适量" },
        { name: "葱", amount: "适量" },
        { name: "盐", amount: "适量" },
        { name: "料酒", amount: "1勺" },
        { name: "淀粉", amount: "1勺" },
        { name: "生抽", amount: "1勺" },
        { name: "醋", amount: "1勺" },
        { name: "糖", amount: "1勺" },
        { name: "干辣椒", amount: "5个" },
        { name: "花椒", amount: "10g" }
      ],
      steps: [
        "鸡胸肉切丁，用盐、料酒、淀粉腌制15分钟",
        "青椒、胡萝卜切丁",
        "花生炸熟或烤熟备用",
        "调制碗汁：生抽、醋、糖、淀粉、清水混合",
        "热锅凉油，放入干辣椒和花椒炒香",
        "放入鸡丁炒至变色",
        "加入姜蒜、葱翻炒",
        "放入青椒、胡萝卜丁翻炒",
        "倒入碗汁翻炒均匀",
        "最后加入花生翻炒即可"
      ],
      tips: [
        "鸡胸肉要选择新鲜的，口感更好",
        "花生要最后放，保持酥脆的口感",
        "炒制时火要大，动作要快",
        "可以根据个人口味调整辣椒和花椒的用量"
      ],
      recommendations: [2, 4, 12]
    },
    6: {
      id: 6,
      name: "夫妻肺片",
      desc: "麻辣鲜香、回味无穷",
      time: "30分钟",
      spice: "麻辣",
      servings: "2-4人份",
      rating: "4.9分",
      image: "https://picsum.photos/id/365/600/400",
      imageLarge: "https://picsum.photos/id/365/1200/600",
      category: "cold",
      ingredients: [
        { name: "牛心", amount: "100g" },
        { name: "牛舌", amount: "100g" },
        { name: "牛肚", amount: "100g" },
        { name: "牛肉", amount: "100g" },
        { name: "红油辣椒", amount: "3勺" },
        { name: "花椒面", amount: "1勺" },
        { name: "生抽", amount: "2勺" },
        { name: "醋", amount: "1勺" },
        { name: "糖", amount: "1勺" },
        { name: "姜蒜", amount: "适量" },
        { name: "葱", amount: "适量" },
        { name: "盐", amount: "适量" }
      ],
      steps: [
        "将牛心、牛舌、牛肚、牛肉洗净",
        "锅中放入清水，加入姜葱、料酒，将牛肉等放入锅中煮熟",
        "捞出放凉，切成薄片",
        "调制调味汁：红油辣椒、花椒面、生抽、醋、糖、盐、姜蒜末混合",
        "将切好的肉片放入碗中",
        "浇上调味汁",
        "撒上葱花即可"
      ],
      tips: [
        "牛肉等要煮得恰到好处，太烂会失去口感",
        "红油辣椒要正宗，最好自己炼制",
        "调味汁的比例要掌握好",
        "可以根据个人口味调整麻辣程度"
      ],
      recommendations: [1, 3, 11]
    },
    7: {
      id: 7,
      name: "麻辣火锅",
      desc: "正宗川味、麻辣鲜香",
      time: "60分钟",
      spice: "特辣",
      servings: "4-6人份",
      rating: "4.9分",
      image: "https://picsum.photos/id/488/600/400",
      imageLarge: "https://picsum.photos/id/488/1200/600",
      category: "hotpot",
      ingredients: [
        { name: "火锅底料", amount: "1包" },
        { name: "牛油", amount: "200g" },
        { name: "干辣椒", amount: "50g" },
        { name: "花椒", amount: "30g" },
        { name: "姜蒜", amount: "适量" },
        { name: "葱", amount: "适量" },
        { name: "高汤", amount: "适量" },
        { name: "各种食材", amount: "适量" }
      ],
      steps: [
        "热锅融化牛油",
        "加入姜蒜、葱炒香",
        "加入干辣椒、花椒炒至变色",
        "加入火锅底料炒香",
        "加入高汤，大火煮沸",
        "转小火熬制30分钟",
        "即可开始烫食各种食材"
      ],
      tips: [
        "牛油要选择优质的，这样锅底才会香",
        "炒底料时火候要掌握好，不要炒糊",
        "高汤可以用骨头或鸡架熬制",
        "可以根据个人口味添加其他香料"
      ],
      recommendations: [8]
    },
    8: {
      id: 8,
      name: "钵钵鸡",
      desc: "香辣可口、串串香",
      time: "40分钟",
      spice: "麻辣",
      servings: "2-4人份",
      rating: "4.8分",
      image: "https://picsum.photos/id/493/600/400",
      imageLarge: "https://picsum.photos/id/493/1200/600",
      category: "hotpot",
      ingredients: [
        { name: "鸡骨架", amount: "1个" },
        { name: "各种食材", amount: "适量" },
        { name: "红油辣椒", amount: "3勺" },
        { name: "花椒面", amount: "1勺" },
        { name: "生抽", amount: "2勺" },
        { name: "醋", amount: "1勺" },
        { name: "糖", amount: "1勺" },
        { name: "姜蒜", amount: "适量" },
        { name: "葱", amount: "适量" },
        { name: "盐", amount: "适量" }
      ],
      steps: [
        "鸡骨架熬汤，加入姜葱、料酒",
        "将各种食材洗净切好，用竹签串起",
        "将串好的食材放入沸水中煮熟",
        "调制调味汁：红油辣椒、花椒面、生抽、醋、糖、盐、姜蒜末、鸡汤混合",
        "将煮熟的食材放入调味汁中浸泡30分钟即可"
      ],
      tips: [
        "鸡骨架汤要熬制得浓郁",
        "食材要切得大小均匀",
        "调味汁要浸泡足够的时间",
        "可以根据个人口味调整麻辣程度"
      ],
      recommendations: [7]
    },
    9: {
      id: 9,
      name: "担担面",
      desc: "麻辣鲜香、面条劲道",
      time: "15分钟",
      spice: "麻辣",
      servings: "1人份",
      rating: "4.7分",
      image: "https://picsum.photos/id/365/600/400",
      imageLarge: "https://picsum.photos/id/365/1200/600",
      category: "snack",
      ingredients: [
        { name: "面条", amount: "100g" },
        { name: "肉末", amount: "50g" },
        { name: "红油辣椒", amount: "2勺" },
        { name: "花椒面", amount: "1勺" },
        { name: "生抽", amount: "1勺" },
        { name: "醋", amount: "1勺" },
        { name: "糖", amount: "半勺" },
        { name: "姜蒜", amount: "适量" },
        { name: "葱", amount: "适量" },
        { name: "盐", amount: "适量" },
        { name: "高汤", amount: "适量" }
      ],
      steps: [
        "热锅凉油，放入肉末炒至变色",
        "加入姜蒜炒香",
        "加入少量高汤煮至肉末熟",
        "调制碗底：红油辣椒、花椒面、生抽、醋、糖、盐、葱花",
        "面条煮熟捞出放入碗中",
        "加入炒好的肉末",
        "加入适量高汤即可"
      ],
      tips: [
        "面条要选择劲道的，最好是手工面",
        "肉末要炒得香",
        "碗底的调料要拌匀",
        "可以根据个人口味调整麻辣程度"
      ],
      recommendations: [10]
    },
    10: {
      id: 10,
      name: "龙抄手",
      desc: "皮薄馅大、汤鲜味美",
      time: "20分钟",
      spice: "中辣",
      servings: "2人份",
      rating: "4.6分",
      image: "https://picsum.photos/id/292/600/400",
      imageLarge: "https://picsum.photos/id/292/1200/600",
      category: "snack",
      ingredients: [
        { name: "抄手皮", amount: "20张" },
        { name: "猪肉末", amount: "200g" },
        { name: "姜葱", amount: "适量" },
        { name: "盐", amount: "适量" },
        { name: "料酒", amount: "1勺" },
        { name: "生抽", amount: "1勺" },
        { name: "香油", amount: "1勺" },
        { name: "红油辣椒", amount: "适量" },
        { name: "花椒面", amount: "适量" },
        { name: "醋", amount: "适量" }
      ],
      steps: [
        "猪肉末加入姜葱、盐、料酒、生抽、香油调味",
        "用抄手皮包入馅料",
        "锅中烧开水，放入抄手煮熟",
        "碗中加入红油辣椒、花椒面、醋、盐、葱花",
        "加入适量面汤",
        "将煮熟的抄手捞入碗中即可"
      ],
      tips: [
        "抄手皮要选择薄而韧性好的",
        "馅料要搅拌上劲",
        "煮抄手的时间不要太长，以免皮破",
        "可以根据个人口味调整调料"
      ],
      recommendations: [9]
    },
    11: {
      id: 11,
      name: "凉拌黄瓜",
      desc: "清爽可口、开胃解腻",
      time: "10分钟",
      spice: "微辣",
      servings: "2人份",
      rating: "4.5分",
      image: "https://picsum.photos/id/431/600/400",
      imageLarge: "https://picsum.photos/id/431/1200/600",
      category: "cold",
      ingredients: [
        { name: "黄瓜", amount: "2根" },
        { name: "蒜", amount: "适量" },
        { name: "醋", amount: "2勺" },
        { name: "生抽", amount: "1勺" },
        { name: "香油", amount: "1勺" },
        { name: "红油辣椒", amount: "适量" },
        { name: "盐", amount: "适量" },
        { name: "糖", amount: "适量" }
      ],
      steps: [
        "黄瓜洗净拍碎切块",
        "蒜捣成蒜泥",
        "将黄瓜放入碗中",
        "加入蒜泥、醋、生抽、香油、红油辣椒、盐、糖调味",
        "拌匀即可"
      ],
      tips: [
        "黄瓜要选择新鲜的",
        "拍黄瓜可以更好地入味",
        "可以根据个人口味调整调料",
        "最好现拌现吃，保持黄瓜的清脆"
      ],
      recommendations: [6]
    },
    12: {
      id: 12,
      name: "蚂蚁上树",
      desc: "香辣可口、下饭神器",
      time: "20分钟",
      spice: "中辣",
      servings: "2-3人份",
      rating: "4.6分",
      image: "https://picsum.photos/id/312/600/400",
      imageLarge: "https://picsum.photos/id/312/1200/600",
      category: "home",
      ingredients: [
        { name: "粉丝", amount: "100g" },
        { name: "肉末", amount: "150g" },
        { name: "郫县豆瓣", amount: "2勺" },
        { name: "姜蒜", amount: "适量" },
        { name: "葱", amount: "适量" },
        { name: "生抽", amount: "1勺" },
        { name: "料酒", amount: "1勺" },
        { name: "盐", amount: "适量" }
      ],
      steps: [
        "粉丝泡软备用",
        "热锅凉油，放入肉末炒至变色",
        "加入姜蒜、郫县豆瓣炒出红油",
        "加入料酒、生抽调味",
        "加入适量清水",
        "放入泡软的粉丝翻炒",
        "翻炒至粉丝熟透，汤汁收干",
        "撒上葱花出锅即可"
      ],
      tips: [
        "粉丝要选择细粉丝",
        "泡粉丝的时间不要太长",
        "炒制时火要适中",
        "可以根据个人口味调整辣椒的用量"
      ],
      recommendations: [4, 5]
    },
    "13": {
    "id": 13,
    "name": "鱼香茄子",
    "desc": "咸甜酸辣、外酥里嫩",
    "time": "18分钟",
    "spice": "中辣",
    "servings": "2-3人份",
    "rating": "4.7分",
    "image": "https://picsum.photos/id/100/600/400",
    "imageLarge": "https://picsum.photos/id/100/1200/600",
    "category": "home",
    "ingredients": [
      { "name": "长茄子", "amount": "2根" },
      { "name": "郫县豆瓣", "amount": "2勺" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "葱", "amount": "适量" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "醋", "amount": "2勺" },
      { "name": "糖", "amount": "1.5勺" },
      { "name": "淀粉", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "食用油", "amount": "适量" }
    ],
    "steps": [
      "茄子切条，撒少许盐腌制10分钟挤干水分",
      "调制鱼香汁：生抽、醋、糖、淀粉、清水混合",
      "热锅多放油，放入茄子炸至金黄捞出控油",
      "锅中留底油，爆香姜蒜末、郫县豆瓣",
      "倒入茄子翻炒均匀",
      "淋入鱼香汁，大火收汁",
      "撒葱花出锅即可"
    ],
    "tips": [
      "茄子腌制后可减少吸油，更健康",
      "炸茄子时油温要高，避免吸油过多",
      "鱼香汁比例可根据口味调整糖和醋的量",
      "喜欢软糯口感可少炸一会儿"
    ],
    "recommendations": [4, 5, 12]
  },
  "14": {
    "id": 14,
    "name": "辣子鸡",
    "desc": "外酥里嫩、麻辣干香",
    "time": "25分钟",
    "spice": "特辣",
    "servings": "2-3人份",
    "rating": "4.9分",
    "image": "https://picsum.photos/id/101/600/400",
    "imageLarge": "https://picsum.photos/id/101/1200/600",
    "category": "classic",
    "ingredients": [
      { "name": "鸡腿肉", "amount": "500g" },
      { "name": "干辣椒", "amount": "50g" },
      { "name": "花椒", "amount": "20g" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "葱", "amount": "适量" },
      { "name": "料酒", "amount": "1勺" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "淀粉", "amount": "1勺" },
      { "name": "白芝麻", "amount": "适量" }
    ],
    "steps": [
      "鸡腿肉切小块，用盐、料酒、淀粉腌制15分钟",
      "干辣椒剪段，姜蒜切片，葱切段",
      "热锅多放油，放入鸡块炸至金黄酥脆捞出",
      "锅中留底油，爆香姜蒜、花椒、干辣椒",
      "倒入炸好的鸡块翻炒均匀",
      "加生抽调味，撒葱段、白芝麻",
      "翻炒片刻出锅即可"
    ],
    "tips": [
      "鸡肉要炸至表面微焦，口感更酥脆",
      "干辣椒和花椒可多放，更具风味",
      "最后翻炒时间不宜过长，避免鸡肉变软",
      "可加入花生米增加口感"
    ],
    "recommendations": [2, 5, 25]
  },
  "15": {
    "id": 15,
    "name": "麻婆脑花",
    "desc": "麻辣入味、口感绵密",
    "time": "25分钟",
    "spice": "麻辣",
    "servings": "2人份",
    "rating": "4.6分",
    "image": "https://picsum.photos/id/102/600/400",
    "imageLarge": "https://picsum.photos/id/102/1200/600",
    "category": "classic",
    "ingredients": [
      { "name": "猪脑花", "amount": "2副" },
      { "name": "郫县豆瓣", "amount": "2勺" },
      { "name": "花椒", "amount": "15g" },
      { "name": "干辣椒", "amount": "8个" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "葱", "amount": "适量" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "料酒", "amount": "2勺" },
      { "name": "淀粉", "amount": "适量" },
      { "name": "盐", "amount": "适量" }
    ],
    "steps": [
      "脑花去血筋，用料酒、盐浸泡10分钟去腥",
      "锅中加水，放入脑花煮3分钟捞出切块",
      "热锅凉油，爆香姜蒜末、郫县豆瓣、干辣椒",
      "加适量清水，放入脑花块小火煮5分钟",
      "水淀粉勾芡，收汁至浓稠",
      "撒花椒面、葱花出锅即可"
    ],
    "tips": [
      "脑花一定要去净血筋，否则有腥味",
      "煮脑花时间不宜过长，避免口感变老",
      "花椒面最后撒，香味更浓",
      "可搭配豆腐同煮，口感更丰富"
    ],
    "recommendations": [1, 27, 32]
  },
  "16": {
    "id": 16,
    "name": "四川泡菜",
    "desc": "酸辣爽口、开胃解腻",
    "time": "3天（腌制）",
    "spice": "微辣",
    "servings": "多人份",
    "rating": "4.7分",
    "image": "https://picsum.photos/id/103/600/400",
    "imageLarge": "https://picsum.photos/id/103/1200/600",
    "category": "cold",
    "ingredients": [
      { "name": "白萝卜", "amount": "1根" },
      { "name": "胡萝卜", "amount": "1根" },
      { "name": "豇豆", "amount": "200g" },
      { "name": "小米辣", "amount": "10个" },
      { "name": "老姜", "amount": "1块" },
      { "name": "大蒜", "amount": "5瓣" },
      { "name": "盐", "amount": "适量" },
      { "name": "冰糖", "amount": "10g" },
      { "name": "白酒", "amount": "1勺" },
      { "name": "凉白开", "amount": "适量" }
    ],
    "steps": [
      "泡菜坛洗净晾干，确保无油无水",
      "白萝卜、胡萝卜切条，豇豆洗净晾干",
      "坛中加凉白开，放入盐、冰糖、白酒搅匀",
      "放入老姜、大蒜、小米辣",
      "放入切好的蔬菜，确保完全浸泡在水中",
      "密封泡菜坛，置于阴凉处腌制3天即可"
    ],
    "tips": [
      "泡菜坛必须无油无水，否则易变质",
      "盐的比例约为水的3%，口感最佳",
      "每次取泡菜需用干净无油的筷子",
      "可加入花椒增加风味"
    ],
    "recommendations": [11, 20, 28]
  },
  "17": {
    "id": 17,
    "name": "钟水饺",
    "desc": "皮薄馅嫩、红油香浓",
    "time": "20分钟",
    "spice": "麻辣",
    "servings": "2人份",
    "rating": "4.8分",
    "image": "https://picsum.photos/id/104/600/400",
    "imageLarge": "https://picsum.photos/id/104/1200/600",
    "category": "snack",
    "ingredients": [
      { "name": "饺子皮", "amount": "20张" },
      { "name": "猪肉末", "amount": "200g" },
      { "name": "红油辣椒", "amount": "3勺" },
      { "name": "生抽", "amount": "2勺" },
      { "name": "醋", "amount": "1勺" },
      { "name": "蒜泥", "amount": "适量" },
      { "name": "姜葱水", "amount": "适量" },
      { "name": "盐", "amount": "适量" },
      { "name": "白糖", "amount": "半勺" },
      { "name": "熟芝麻", "amount": "适量" }
    ],
    "steps": [
      "猪肉末加姜葱水、盐搅匀至上劲",
      "用饺子皮包入馅料，捏成半月形",
      "锅中烧开水，放入饺子煮至浮起熟透",
      "碗中调汁：红油辣椒、生抽、醋、蒜泥、白糖混合",
      "捞出饺子放入碗中，拌匀",
      "撒熟芝麻即可"
    ],
    "tips": [
      "馅料不加葱，保持纯肉香味",
      "红油要选炼制的熟油辣椒，香味更浓",
      "煮饺子时点两次凉水，更易熟透",
      "可根据口味增减糖的用量"
    ],
    "recommendations": [9, 10, 18]
  },
  "18": {
    "id": 18,
    "name": "红油抄手",
    "desc": "皮薄馅鲜、红油醇厚",
    "time": "15分钟",
    "spice": "麻辣",
    "servings": "2人份",
    "rating": "4.7分",
    "image": "https://picsum.photos/id/105/600/400",
    "imageLarge": "https://picsum.photos/id/105/1200/600",
    "category": "snack",
    "ingredients": [
      { "name": "抄手皮", "amount": "20张" },
      { "name": "猪肉末", "amount": "150g" },
      { "name": "红油辣椒", "amount": "3勺" },
      { "name": "花椒面", "amount": "1勺" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "醋", "amount": "1勺" },
      { "name": "姜葱水", "amount": "适量" },
      { "name": "盐", "amount": "适量" },
      { "name": "葱花", "amount": "适量" },
      { "name": "香油", "amount": "半勺" }
    ],
    "steps": [
      "猪肉末加姜葱水、盐搅匀成馅",
      "抄手皮包入馅料，捏紧封口",
      "锅中烧开水，放入抄手煮至浮起",
      "碗中调底味：红油、花椒面、生抽、醋、香油",
      "加少量面汤，捞出抄手放入碗中",
      "撒葱花即可"
    ],
    "tips": [
      "抄手皮边缘抹点水，更容易捏紧",
      "红油最好提前炼制，加入香料更香浓",
      "煮抄手时间不宜过长，避免皮烂",
      "可加入少许芽菜增加风味"
    ],
    "recommendations": [10, 17, 9]
  },
  "19": {
    "id": 19,
    "name": "麻辣兔头",
    "desc": "麻辣鲜香、骨肉入味",
    "time": "60分钟",
    "spice": "特辣",
    "servings": "2人份",
    "rating": "4.8分",
    "image": "https://picsum.photos/id/106/600/400",
    "imageLarge": "https://picsum.photos/id/106/1200/600",
    "category": "snack",
    "ingredients": [
      { "name": "兔头", "amount": "4个" },
      { "name": "干辣椒", "amount": "30g" },
      { "name": "花椒", "amount": "20g" },
      { "name": "郫县豆瓣", "amount": "2勺" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "八角", "amount": "2个" },
      { "name": "桂皮", "amount": "1小块" },
      { "name": "料酒", "amount": "3勺" },
      { "name": "生抽", "amount": "2勺" },
      { "name": "盐", "amount": "适量" }
    ],
    "steps": [
      "兔头洗净，用料酒、盐腌制30分钟去腥",
      "兔头冷水下锅，加姜葱、料酒焯水捞出",
      "热锅凉油，爆香姜蒜、豆瓣、干辣椒、花椒及香料",
      "加适量清水，放入生抽、盐调味",
      "放入兔头，大火煮沸后转小火煮40分钟",
      "关火后浸泡2小时，更入味"
    ],
    "tips": [
      "兔头一定要清洗干净，去除血水",
      "煮好后浸泡时间越长，味道越浓",
      "香料不宜过多，避免掩盖兔肉香味",
      "可根据口味调整辣椒和花椒量"
    ],
    "recommendations": [14, 29, 20]
  },
  "20": {
    "id": 20,
    "name": "泡椒凤爪",
    "desc": "酸辣脆爽、越啃越香",
    "time": "4小时（腌制）",
    "spice": "中辣",
    "servings": "2-4人份",
    "rating": "4.7分",
    "image": "https://picsum.photos/id/107/600/400",
    "imageLarge": "https://picsum.photos/id/107/1200/600",
    "category": "cold",
    "ingredients": [
      { "name": "鸡爪", "amount": "500g" },
      { "name": "泡椒", "amount": "100g" },
      { "name": "泡椒水", "amount": "200ml" },
      { "name": "姜片", "amount": "适量" },
      { "name": "料酒", "amount": "2勺" },
      { "name": "白醋", "amount": "2勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "白糖", "amount": "1勺" },
      { "name": "凉白开", "amount": "适量" },
      { "name": "花椒", "amount": "少许" }
    ],
    "steps": [
      "鸡爪剪去指甲，对半切开",
      "冷水下锅，加姜片、料酒，煮10分钟",
      "捞出鸡爪用冰水浸泡至完全冷却",
      "容器中加泡椒水、白醋、盐、白糖、花椒、凉白开搅匀",
      "放入鸡爪和泡椒，密封冷藏4小时以上"
    ],
    "tips": [
      "冰水浸泡是鸡爪脆爽的关键",
      "腌制时间越长，味道越浓",
      "泡椒水可重复使用，风味更足",
      "可加入柠檬片增加清香"
    ],
    "recommendations": [11, 16, 28]
  },
  "21": {
    "id": 21,
    "name": "干煸四季豆",
    "desc": "干香微辣、咸香下饭",
    "time": "20分钟",
    "spice": "中辣",
    "servings": "2-3人份",
    "rating": "4.6分",
    "image": "https://picsum.photos/id/108/600/400",
    "imageLarge": "https://picsum.photos/id/108/1200/600",
    "category": "home",
    "ingredients": [
      { "name": "四季豆", "amount": "400g" },
      { "name": "猪肉末", "amount": "100g" },
      { "name": "干辣椒", "amount": "8个" },
      { "name": "花椒", "amount": "5g" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "郫县豆瓣", "amount": "1勺" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "料酒", "amount": "半勺" },
      { "name": "葱花", "amount": "适量" }
    ],
    "steps": [
      "四季豆摘去老筋，洗净晾干水分",
      "热锅不放油，放入四季豆煸炒至表皮微皱盛出",
      "锅中加少许油，爆香姜蒜、干辣椒、花椒",
      "放入猪肉末炒至变色，加料酒去腥",
      "加入郫县豆瓣炒出红油",
      "倒入四季豆翻炒，加生抽、盐调味",
      "大火收干水分，撒葱花出锅"
    ],
    "tips": [
      "四季豆一定要炒熟，避免中毒",
      "煸炒四季豆时要晾干水分，避免溅油",
      "喜欢更香可多煸炒一会儿，至表皮微焦",
      "可加入芽菜增加风味"
    ],
    "recommendations": [4, 12, 13]
  },
  "22": {
    "id": 22,
    "name": "火爆腰花",
    "desc": "鲜嫩爽口、麻辣咸香",
    "time": "15分钟",
    "spice": "中辣",
    "servings": "2人份",
    "rating": "4.7分",
    "image": "https://picsum.photos/id/109/600/400",
    "imageLarge": "https://picsum.photos/id/109/1200/600",
    "category": "classic",
    "ingredients": [
      { "name": "猪腰", "amount": "2个" },
      { "name": "青椒", "amount": "2个" },
      { "name": "干辣椒", "amount": "5个" },
      { "name": "花椒", "amount": "5g" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "郫县豆瓣", "amount": "1勺" },
      { "name": "料酒", "amount": "2勺" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "淀粉", "amount": "1勺" },
      { "name": "盐", "amount": "适量" }
    ],
    "steps": [
      "猪腰去腰骚，切花刀，用料酒、盐、淀粉腌制10分钟",
      "青椒切块，姜蒜切片",
      "热锅热油，放入腰花快速滑炒至变色盛出",
      "锅中留底油，爆香姜蒜、干辣椒、花椒、豆瓣",
      "放入青椒块翻炒至断生",
      "倒入腰花，加生抽调味，大火翻炒1分钟出锅"
    ],
    "tips": [
      "腰花一定要去净腰骚，否则有腥味",
      "炒制时间要短，避免腰花变老",
      "油温要高，爆炒才够香",
      "可加入木耳搭配口感"
    ],
    "recommendations": [3, 25, 26]
  },
  "23": {
    "id": 23,
    "name": "樟茶鸭子",
    "desc": "皮酥肉嫩、樟茶香浓",
    "time": "120分钟",
    "spice": "微辣",
    "servings": "4-6人份",
    "rating": "4.9分",
    "image": "https://picsum.photos/id/110/600/400",
    "imageLarge": "https://picsum.photos/id/110/1200/600",
    "category": "classic",
    "ingredients": [
      { "name": "整鸭", "amount": "1只（约1500g）" },
      { "name": "樟树叶", "amount": "50g" },
      { "name": "茶叶", "amount": "30g" },
      { "name": "花椒", "amount": "10g" },
      { "name": "八角", "amount": "2个" },
      { "name": "桂皮", "amount": "1小块" },
      { "name": "姜葱", "amount": "适量" },
      { "name": "盐", "amount": "适量" },
      { "name": "料酒", "amount": "3勺" },
      { "name": "白糖", "amount": "1勺" }
    ],
    "steps": [
      "鸭子洗净，用盐、花椒、料酒、姜葱腌制2小时",
      "将鸭子挂起风干至表皮微干",
      "锅中铺锡纸，放入樟树叶、茶叶、白糖、香料",
      "放上篦子，摆入鸭子，小火熏制15分钟",
      "取出鸭子，上锅蒸40分钟",
      "热锅热油，将鸭子炸至表皮金黄酥脆"
    ],
    "tips": [
      "风干是鸭子皮酥的关键",
      "熏制时火候要小，避免烤焦",
      "蒸制后炸制，肉质更嫩",
      "可搭配甜面酱食用"
    ],
    "recommendations": [24, 6, 31]
  },
  "24": {
    "id": 24,
    "name": "甜皮鸭",
    "desc": "皮甜肉香、外酥里嫩",
    "time": "90分钟",
    "spice": "微辣",
    "servings": "4-6人份",
    "rating": "4.8分",
    "image": "https://picsum.photos/id/111/600/400",
    "imageLarge": "https://picsum.photos/id/111/1200/600",
    "category": "snack",
    "ingredients": [
      { "name": "白条鸭", "amount": "1只（约1200g）" },
      { "name": "冰糖", "amount": "50g" },
      { "name": "料酒", "amount": "2勺" },
      { "name": "姜葱", "amount": "适量" },
      { "name": "八角", "amount": "2个" },
      { "name": "桂皮", "amount": "1小块" },
      { "name": "生抽", "amount": "2勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "麦芽糖", "amount": "2勺" },
      { "name": "食用油", "amount": "适量" }
    ],
    "steps": [
      "鸭子洗净，用盐、料酒、姜葱、香料腌制1小时",
      "鸭子冷水下锅，煮至八成熟捞出沥干",
      "麦芽糖加少量水化开，刷在鸭子表皮",
      "风干至表皮微干",
      "热锅热油，将鸭子炸至表皮金黄",
      "锅中加少量水、冰糖、生抽，熬至浓稠",
      "将糖汁刷在炸好的鸭子上即可"
    ],
    "tips": [
      "麦芽糖能让鸭皮更亮更甜",
      "炸制时油温不宜过高，避免皮糊",
      "糖汁要熬至拉丝状，口感更佳",
      "放凉后食用口感更好"
    ],
    "recommendations": [23, 19, 6]
  },
  "25": {
    "id": 25,
    "name": "水煮鱼",
    "desc": "麻辣鲜香、鱼肉滑嫩",
    "time": "30分钟",
    "spice": "特辣",
    "servings": "3-4人份",
    "rating": "4.9分",
    "image": "https://picsum.photos/id/112/600/400",
    "imageLarge": "https://picsum.photos/id/112/1200/600",
    "category": "classic",
    "ingredients": [
      { "name": "草鱼", "amount": "1条（约1000g）" },
      { "name": "豆芽", "amount": "200g" },
      { "name": "干辣椒", "amount": "50g" },
      { "name": "花椒", "amount": "30g" },
      { "name": "郫县豆瓣", "amount": "3勺" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "料酒", "amount": "2勺" },
      { "name": "淀粉", "amount": "2勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "蛋清", "amount": "1个" }
    ],
    "steps": [
      "草鱼切片，用盐、料酒、蛋清、淀粉腌制15分钟",
      "豆芽焯水铺在碗底",
      "热锅热油，爆香姜蒜、豆瓣、干辣椒、花椒",
      "加适量清水，煮沸后调盐味",
      "将鱼片逐片放入锅中，煮至变色",
      "连汤倒入碗中，撒上干辣椒和花椒",
      "烧热油泼在上面激香"
    ],
    "tips": [
      "鱼片腌制加蛋清更滑嫩",
      "煮鱼片时火不宜大，避免煮碎",
      "泼油的油温要高，香味更浓",
      "可加入莴笋、金针菇等配菜"
    ],
    "recommendations": [2, 22, 27]
  },
  "26": {
    "id": 26,
    "name": "酸菜鱼",
    "desc": "酸香开胃、鱼肉鲜嫩",
    "time": "35分钟",
    "spice": "中辣",
    "servings": "3-4人份",
    "rating": "4.8分",
    "image": "https://picsum.photos/id/113/600/400",
    "imageLarge": "https://picsum.photos/id/113/1200/600",
    "category": "home",
    "ingredients": [
      { "name": "黑鱼", "amount": "1条（约1000g）" },
      { "name": "泡酸菜", "amount": "200g" },
      { "name": "泡椒", "amount": "10个" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "干辣椒", "amount": "5个" },
      { "name": "花椒", "amount": "10g" },
      { "name": "料酒", "amount": "2勺" },
      { "name": "淀粉", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "蛋清", "amount": "1个" },
      { "name": "胡椒粉", "amount": "少许" }
    ],
    "steps": [
      "黑鱼切片，用盐、料酒、蛋清、淀粉、胡椒粉腌制15分钟",
      "泡酸菜切碎，泡椒切段",
      "热锅热油，爆香姜蒜、泡椒、酸菜",
      "加适量清水，煮沸后调盐味",
      "先放入鱼骨煮5分钟，再放入鱼片",
      "鱼片煮至变色即可出锅",
      "撒干辣椒、花椒，泼热油激香"
    ],
    "tips": [
      "黑鱼肉质紧实，不易煮碎，适合做酸菜鱼",
      "酸菜要炒出香味，汤才更浓",
      "鱼片不要煮太久，避免变老",
      "可加入粉丝吸收汤汁，更入味"
    ],
    "recommendations": [25, 22, 13]
  },
  "27": {
    "id": 27,
    "name": "毛血旺",
    "desc": "麻辣鲜香、食材丰富",
    "time": "30分钟",
    "spice": "特辣",
    "servings": "3-4人份",
    "rating": "4.9分",
    "image": "https://picsum.photos/id/114/600/400",
    "imageLarge": "https://picsum.photos/id/114/1200/600",
    "category": "hotpot",
    "ingredients": [
      { "name": "鸭血", "amount": "200g" },
      { "name": "毛肚", "amount": "100g" },
      { "name": "黄喉", "amount": "100g" },
      { "name": "午餐肉", "amount": "100g" },
      { "name": "豆芽", "amount": "100g" },
      { "name": "干辣椒", "amount": "30g" },
      { "name": "花椒", "amount": "20g" },
      { "name": "郫县豆瓣", "amount": "3勺" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "盐", "amount": "适量" }
    ],
    "steps": [
      "鸭血、午餐肉切块，毛肚、黄喉切条",
      "豆芽焯水铺在碗底",
      "热锅热油，爆香姜蒜、豆瓣、干辣椒、花椒",
      "加适量清水，放生抽、盐调味",
      "依次放入鸭血、午餐肉煮5分钟",
      "最后放入毛肚、黄喉煮1分钟",
      "连汤倒入碗中，泼热油激香"
    ],
    "tips": [
      "毛肚、黄喉最后煮，保持脆嫩口感",
      "豆瓣要炒出红油，汤色更红亮",
      "可根据喜好添加肥肠、鱿鱼等食材",
      "花椒和辣椒可多放，更具川味"
    ],
    "recommendations": [7, 25, 15]
  },
  "28": {
    "id": 28,
    "name": "川北凉粉",
    "desc": "滑嫩爽口、麻辣鲜香",
    "time": "15分钟",
    "spice": "麻辣",
    "servings": "2人份",
    "rating": "4.7分",
    "image": "https://picsum.photos/id/115/600/400",
    "imageLarge": "https://picsum.photos/id/115/1200/600",
    "category": "cold",
    "ingredients": [
      { "name": "豌豆凉粉", "amount": "300g" },
      { "name": "红油辣椒", "amount": "3勺" },
      { "name": "花椒面", "amount": "1勺" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "醋", "amount": "1勺" },
      { "name": "蒜泥", "amount": "适量" },
      { "name": "葱花", "amount": "适量" },
      { "name": "盐", "amount": "适量" },
      { "name": "白糖", "amount": "半勺" },
      { "name": "熟芝麻", "amount": "适量" }
    ],
    "steps": [
      "豌豆凉粉切成粗条，放入碗中",
      "碗中调汁：红油、花椒面、生抽、醋、蒜泥、盐、白糖",
      "将料汁淋在凉粉上",
      "撒葱花、熟芝麻，拌匀即可"
    ],
    "tips": [
      "凉粉切条不宜过细，避免拌碎",
      "红油要选纯菜籽油炼制的，香味更浓",
      "可加入少许芽菜或榨菜增加口感",
      "现拌现吃，避免凉粉吸水变软"
    ],
    "recommendations": [11, 16, 20]
  },
  "29": {
    "id": 29,
    "name": "冷吃兔",
    "desc": "干香麻辣、越嚼越香",
    "time": "40分钟",
    "spice": "特辣",
    "servings": "2-3人份",
    "rating": "4.8分",
    "image": "https://picsum.photos/id/116/600/400",
    "imageLarge": "https://picsum.photos/id/116/1200/600",
    "category": "cold",
    "ingredients": [
      { "name": "兔肉", "amount": "500g" },
      { "name": "干辣椒", "amount": "40g" },
      { "name": "花椒", "amount": "20g" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "八角", "amount": "1个" },
      { "name": "桂皮", "amount": "1小块" },
      { "name": "料酒", "amount": "2勺" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "白糖", "amount": "半勺" }
    ],
    "steps": [
      "兔肉切小块，用料酒、盐腌制20分钟",
      "干辣椒剪段，姜蒜切片",
      "热锅热油，放入兔肉炒至水分收干",
      "加入姜蒜、八角、桂皮炒香",
      "放入干辣椒、花椒翻炒至出香味",
      "加生抽、白糖调味，大火收干汤汁",
      "放凉后食用，风味更佳"
    ],
    "tips": [
      "兔肉要炒干水分，口感更干香",
      "辣椒和花椒可多放，更具风味",
      "放凉后味道更浓，可冷藏保存",
      "可加入少许陈皮去腥增香"
    ],
    "recommendations": [14, 19, 6]
  },
  "30": {
    "id": 30,
    "name": "锅巴肉片",
    "desc": "外酥里嫩、酸甜适口",
    "time": "25分钟",
    "spice": "微辣",
    "servings": "2-3人份",
    "rating": "4.6分",
    "image": "https://picsum.photos/id/117/600/400",
    "imageLarge": "https://picsum.photos/id/117/1200/600",
    "category": "home",
    "ingredients": [
      { "name": "猪里脊肉", "amount": "200g" },
      { "name": "锅巴", "amount": "100g" },
      { "name": "木耳", "amount": "50g" },
      { "name": "冬笋", "amount": "50g" },
      { "name": "姜葱", "amount": "适量" },
      { "name": "料酒", "amount": "1勺" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "醋", "amount": "1勺" },
      { "name": "白糖", "amount": "1勺" },
      { "name": "淀粉", "amount": "适量" },
      { "name": "盐", "amount": "适量" }
    ],
    "steps": [
      "里脊肉切片，用盐、料酒、淀粉腌制10分钟",
      "木耳、冬笋切片，姜葱切末",
      "调制碗汁：生抽、醋、白糖、淀粉、清水、盐混合",
      "热锅热油，滑炒肉片至变色盛出",
      "锅中留底油，爆香姜葱，放入木耳、冬笋翻炒",
      "倒入肉片，淋入碗汁，收汁盛出",
      "另起锅，将锅巴炸至金黄，铺在盘底，浇上肉片即可"
    ],
    "tips": [
      "锅巴要现炸现用，保持酥脆",
      "碗汁的酸甜比例要适中",
      "肉片滑炒时间不宜过长，保持嫩滑",
      "可加入青椒配色增味"
    ],
    "recommendations": [4, 22, 13]
  },
  "31": {
    "id": 31,
    "name": "咸烧白",
    "desc": "肥而不腻、咸香软糯",
    "time": "90分钟",
    "spice": "微辣",
    "servings": "3-4人份",
    "rating": "4.7分",
    "image": "https://picsum.photos/id/118/600/400",
    "imageLarge": "https://picsum.photos/id/118/1200/600",
    "category": "classic",
    "ingredients": [
      { "name": "五花肉", "amount": "500g" },
      { "name": "宜宾芽菜", "amount": "200g" },
      { "name": "干辣椒", "amount": "3个" },
      { "name": "花椒", "amount": "少许" },
      { "name": "姜葱", "amount": "适量" },
      { "name": "料酒", "amount": "1勺" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "食用油", "amount": "适量" }
    ],
    "steps": [
      "五花肉冷水下锅，加姜葱、料酒煮至八成熟",
      "捞出五花肉，抹上生抽，晾干水分",
      "热锅热油，将五花肉皮朝下炸至金黄",
      "放凉后切薄片，皮朝下码入碗中",
      "锅中炒香芽菜、干辣椒、花椒，铺在肉片上",
      "加少许生抽、盐，上锅蒸60分钟",
      "取出扣入盘中即可"
    ],
    "tips": [
      "五花肉要选三层肥瘦相间的",
      "炸皮时要小心，避免溅油",
      "蒸制时间越长，肉质越软糯",
      "芽菜要炒干水分，香味更浓"
    ],
    "recommendations": [3, 23, 6]
  },
  "32": {
    "id": 32,
    "name": "水煮牛蛙",
    "desc": "麻辣鲜嫩、蛙肉Q弹",
    "time": "25分钟",
    "spice": "特辣",
    "servings": "2-3人份",
    "rating": "4.8分",
    "image": "https://picsum.photos/id/119/600/400",
    "imageLarge": "https://picsum.photos/id/119/1200/600",
    "category": "hotpot",
    "ingredients": [
      { "name": "牛蛙", "amount": "2只（约800g）" },
      { "name": "莴笋", "amount": "1根" },
      { "name": "干辣椒", "amount": "40g" },
      { "name": "花椒", "amount": "20g" },
      { "name": "郫县豆瓣", "amount": "2勺" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "料酒", "amount": "2勺" },
      { "name": "淀粉", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "蛋清", "amount": "1个" }
    ],
    "steps": [
      "牛蛙宰杀洗净，切块，用盐、料酒、蛋清、淀粉腌制15分钟",
      "莴笋切条，焯水铺在碗底",
      "热锅热油，爆香姜蒜、豆瓣、干辣椒、花椒",
      "加适量清水，煮沸后调盐味",
      "放入牛蛙块，煮至变色熟透",
      "连汤倒入碗中，撒干辣椒、花椒",
      "烧热油泼在上面激香"
    ],
    "tips": [
      "牛蛙腌制加蛋清更嫩滑",
      "煮牛蛙时间不宜过长，避免变老",
      "可加入金针菇、藕片等配菜",
      "花椒和辣椒可根据口味调整"
    ],
    "recommendations": [7, 25, 15]
  },
  "33": {
    "id": 33,
    "name": "虎皮青椒",
    "desc": "外焦里嫩、咸香微辣",
    "time": "15分钟",
    "spice": "微辣",
    "servings": "2人份",
    "rating": "4.6分",
    "image": "https://picsum.photos/id/120/600/400",
    "imageLarge": "https://picsum.photos/id/120/1200/600",
    "category": "home",
    "ingredients": [
      { "name": "青椒", "amount": "400g" },
      { "name": "大蒜", "amount": "3瓣" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "醋", "amount": "半勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "白糖", "amount": "少许" },
      { "name": "食用油", "amount": "适量" },
      { "name": "葱花", "amount": "适量" }
    ],
    "steps": [
      "青椒去蒂去籽，洗净沥干水分，用刀背拍松",
      "大蒜捣成蒜泥，碗中加生抽、醋、盐、白糖、蒜泥调成料汁",
      "热锅凉油，放入青椒煸炒至表皮起皱、呈虎皮状",
      "倒入调好的料汁，翻炒均匀，让青椒充分入味",
      "大火收干多余汤汁，撒葱花即可出锅"
    ],
    "tips": [
      "青椒要选长条形、肉质厚实的，煸炒后口感更好",
      "煸炒时不要频繁翻动，让青椒表皮充分起皱",
      "料汁不宜过多，避免青椒变软，失去虎皮口感",
      "喜欢更辣可加入少许小米辣点缀"
    ],
    "recommendations": [13, 21, 30]
  },
  "34": {
    "id": 34,
    "name": "鱼香肝片",
    "desc": "酸甜麻辣、肝片滑嫩",
    "time": "20分钟",
    "spice": "中辣",
    "servings": "2-3人份",
    "rating": "4.7分",
    "image": "https://picsum.photos/id/121/600/400",
    "imageLarge": "https://picsum.photos/id/121/1200/600",
    "category": "classic",
    "ingredients": [
      { "name": "猪肝", "amount": "300g" },
      { "name": "青椒", "amount": "1个" },
      { "name": "胡萝卜", "amount": "1/2根" },
      { "name": "郫县豆瓣", "amount": "1勺" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "葱", "amount": "适量" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "醋", "amount": "2勺" },
      { "name": "糖", "amount": "1.5勺" },
      { "name": "淀粉", "amount": "1勺" },
      { "name": "料酒", "amount": "2勺" },
      { "name": "盐", "amount": "适量" }
    ],
    "steps": [
      "猪肝切片，用料酒、盐、淀粉腌制10分钟，去除腥味",
      "青椒、胡萝卜切片，姜蒜切末，葱切段",
      "调制鱼香汁：生抽、醋、糖、淀粉、清水混合均匀",
      "热锅热油，放入猪肝快速滑炒至变色，盛出备用",
      "锅中留底油，爆香姜蒜末、郫县豆瓣，炒出红油",
      "放入青椒、胡萝卜翻炒至断生",
      "倒入炒好的猪肝和鱼香汁，大火翻炒均匀",
      "撒葱段，翻炒片刻即可出锅"
    ],
    "tips": [
      "猪肝一定要彻底清洗干净，可用清水浸泡10分钟去血水",
      "滑炒猪肝时间要短，避免变老发柴",
      "鱼香汁的比例要精准，酸甜麻辣平衡才够味",
      "可加入木耳，丰富口感和营养"
    ],
    "recommendations": [4, 13, 22]
  },
  "35": {
    "id": 35,
    "name": "凉拌猪耳朵",
    "desc": "脆嫩爽口、麻辣鲜香",
    "time": "40分钟",
    "spice": "麻辣",
    "servings": "2-4人份",
    "rating": "4.7分",
    "image": "https://picsum.photos/id/122/600/400",
    "imageLarge": "https://picsum.photos/id/122/1200/600",
    "category": "cold",
    "ingredients": [
      { "name": "猪耳朵", "amount": "1个" },
      { "name": "干辣椒", "amount": "5个" },
      { "name": "花椒", "amount": "10g" },
      { "name": "姜葱", "amount": "适量" },
      { "name": "料酒", "amount": "2勺" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "醋", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "香油", "amount": "1勺" },
      { "name": "蒜泥", "amount": "适量" },
      { "name": "熟芝麻", "amount": "适量" }
    ],
    "steps": [
      "猪耳朵洗净，冷水下锅，加入姜葱、料酒，大火煮沸后转小火煮30分钟",
      "捞出猪耳朵，放凉后切成薄片，放入碗中",
      "热锅凉油，放入干辣椒、花椒炸出香味，制成麻辣油",
      "碗中加入蒜泥、生抽、醋、盐、香油，淋入滚烫的麻辣油",
      "搅拌均匀，撒上熟芝麻，静置5分钟让味道融合即可"
    ],
    "tips": [
      "猪耳朵煮的时间不宜过长，否则会失去脆嫩口感",
      "放凉后再切，更容易切成均匀的薄片",
      "麻辣油的油温要控制好，避免炸糊辣椒和花椒",
      "可加入黄瓜丝，增加清爽口感"
    ],
    "recommendations": [6, 28, 29]
  },
  "36": {
    "id": 36,
    "name": "蛋炒饭",
    "desc": "颗粒分明、鲜香可口",
    "time": "10分钟",
    "spice": "微辣",
    "servings": "1人份",
    "rating": "4.5分",
    "image": "https://picsum.photos/id/123/600/400",
    "imageLarge": "https://picsum.photos/id/123/1200/600",
    "category": "snack",
    "ingredients": [
      { "name": "米饭", "amount": "1碗" },
      { "name": "鸡蛋", "amount": "2个" },
      { "name": "火腿", "amount": "50g" },
      { "name": "青椒", "amount": "1/2个" },
      { "name": "葱花", "amount": "适量" },
      { "name": "盐", "amount": "适量" },
      { "name": "生抽", "amount": "半勺" },
      { "name": "食用油", "amount": "适量" },
      { "name": "豆瓣酱", "amount": "少许" }
    ],
    "steps": [
      "鸡蛋打入碗中，加少许盐搅匀；火腿、青椒切丁备用",
      "热锅凉油，倒入蛋液，快速炒散至凝固，盛出备用",
      "锅中留底油，放入火腿丁、青椒丁翻炒至断生",
      "加入米饭，用铲子压散，翻炒至米饭颗粒分明",
      "放入炒好的鸡蛋，加少许豆瓣酱、生抽、盐调味",
      "大火翻炒均匀，撒葱花即可出锅"
    ],
    "tips": [
      "米饭最好用隔夜饭，颗粒更分明，不易粘黏",
      "炒鸡蛋时火要大，动作要快，避免鸡蛋变老",
      "调味不宜过重，突出食材本身的鲜香",
      "可加入玉米粒、豌豆，丰富口感和颜色"
    ],
    "recommendations": [9, 10, 18]
  },
  "37": {
    "id": 37,
    "name": "麻辣小龙虾",
    "desc": "麻辣入味、虾肉Q弹",
    "time": "40分钟",
    "spice": "特辣",
    "servings": "2-3人份",
    "rating": "4.9分",
    "image": "https://picsum.photos/id/124/600/400",
    "imageLarge": "https://picsum.photos/id/124/1200/600",
    "category": "hotpot",
    "ingredients": [
      { "name": "小龙虾", "amount": "1000g" },
      { "name": "干辣椒", "amount": "50g" },
      { "name": "花椒", "amount": "30g" },
      { "name": "郫县豆瓣", "amount": "3勺" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "葱", "amount": "适量" },
      { "name": "八角", "amount": "2个" },
      { "name": "桂皮", "amount": "1小块" },
      { "name": "料酒", "amount": "3勺" },
      { "name": "生抽", "amount": "2勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "白糖", "amount": "1勺" },
      { "name": "啤酒", "amount": "1瓶" }
    ],
    "steps": [
      "小龙虾剪去虾须、虾脚，剪开虾背，去除虾线，用清水冲洗干净",
      "姜蒜切片，葱切段，干辣椒剪段备用",
      "热锅热油，放入姜蒜、葱段、八角、桂皮、干辣椒、花椒爆香",
      "加入郫县豆瓣，炒出红油，放入小龙虾翻炒至变色",
      "淋入料酒，加生抽、盐、白糖调味，翻炒均匀",
      "倒入啤酒，没过小龙虾，大火煮沸后转小火焖煮20分钟",
      "大火收汁，撒葱花即可出锅"
    ],
    "tips": [
      "小龙虾一定要清洗干净，去除虾线，避免有腥味",
      "焖煮时间要足够，让小龙虾充分入味",
      "啤酒能去腥增香，还能让虾肉更鲜嫩",
      "喜欢更浓郁的味道，可加入火锅底料一起焖煮"
    ],
    "recommendations": [7, 27, 32]
  },
  "38": {
    "id": 38,
    "name": "香菇滑鸡",
    "desc": "鲜嫩多汁、鲜香可口",
    "time": "25分钟",
    "spice": "微辣",
    "servings": "2-3人份",
    "rating": "4.6分",
    "image": "https://picsum.photos/id/125/600/400",
    "imageLarge": "https://picsum.photos/id/125/1200/600",
    "category": "home",
    "ingredients": [
      { "name": "鸡腿肉", "amount": "400g" },
      { "name": "干香菇", "amount": "50g" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "葱", "amount": "适量" },
      { "name": "料酒", "amount": "1勺" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "淀粉", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "食用油", "amount": "适量" },
      { "name": "胡椒粉", "amount": "少许" }
    ],
    "steps": [
      "鸡腿肉切块，用料酒、盐、淀粉、胡椒粉腌制15分钟",
      "干香菇用温水泡发，洗净去蒂，切成两半；姜蒜切片，葱切段",
      "热锅凉油，放入姜蒜爆香，放入腌制好的鸡块翻炒至变色",
      "加入香菇，翻炒均匀，淋入少许泡香菇的水",
      "加生抽调味，盖上盖子，小火焖煮10分钟",
      "大火收汁，撒葱段即可出锅"
    ],
    "tips": [
      "鸡腿肉比鸡胸肉更鲜嫩，适合做这道菜",
      "泡香菇的水过滤后可加入锅中，增加香菇的香味",
      "焖煮时间不宜过长，避免鸡肉变老",
      "可加入胡萝卜丁，丰富颜色和营养"
    ],
    "recommendations": [14, 23, 30]
  },
  "39": {
    "id": 39,
    "name": "夫妻肺片升级版",
    "desc": "麻辣鲜香、层次丰富",
    "time": "35分钟",
    "spice": "麻辣",
    "servings": "3-4人份",
    "rating": "4.9分",
    "image": "https://picsum.photos/id/126/600/400",
    "imageLarge": "https://picsum.photos/id/126/1200/600",
    "category": "classic",
    "ingredients": [
      { "name": "牛心", "amount": "150g" },
      { "name": "牛舌", "amount": "150g" },
      { "name": "牛肚", "amount": "150g" },
      { "name": "牛肉", "amount": "150g" },
      { "name": "红油辣椒", "amount": "4勺" },
      { "name": "花椒面", "amount": "1.5勺" },
      { "name": "生抽", "amount": "2勺" },
      { "name": "醋", "amount": "1勺" },
      { "name": "糖", "amount": "1勺" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "葱", "amount": "适量" },
      { "name": "盐", "amount": "适量" },
      { "name": "熟芝麻", "amount": "适量" },
      { "name": "香菜", "amount": "适量" }
    ],
    "steps": [
      "将牛心、牛舌、牛肚、牛肉洗净，冷水下锅",
      "加入姜葱、料酒，大火煮沸后转小火煮25分钟，捞出放凉",
      "将煮好的肉类切成均匀的薄片，放入大碗中",
      "姜蒜捣成蒜泥，葱切葱花，香菜切段",
      "调制调味汁：红油辣椒、花椒面、生抽、醋、糖、盐、蒜泥混合均匀",
      "将调味汁淋在肉片上，搅拌均匀",
      "撒上熟芝麻、葱花、香菜即可"
    ],
    "tips": [
      "肉类煮至八成熟即可，放凉后切片更易成型，口感更好",
      "红油辣椒最好自己炼制，加入八角、桂皮等香料，香味更浓",
      "调味汁可根据个人口味调整麻辣程度",
      "冷藏30分钟后食用，口感更佳"
    ],
    "recommendations": [6, 29, 35]
  },
  "40": {
    "id": 40,
    "name": "凉拌三丝",
    "desc": "清爽解腻、酸辣可口",
    "time": "15分钟",
    "spice": "微辣",
    "servings": "2人份",
    "rating": "4.5分",
    "image": "https://picsum.photos/id/127/600/400",
    "imageLarge": "https://picsum.photos/id/127/1200/600",
    "category": "cold",
    "ingredients": [
      { "name": "土豆", "amount": "1个" },
      { "name": "胡萝卜", "amount": "1根" },
      { "name": "海带丝", "amount": "100g" },
      { "name": "大蒜", "amount": "2瓣" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "醋", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "香油", "amount": "1勺" },
      { "name": "红油辣椒", "amount": "适量" },
      { "name": "白糖", "amount": "少许" }
    ],
    "steps": [
      "土豆、胡萝卜去皮，切成均匀的细丝；海带丝洗净备用",
      "锅中烧开水，分别将土豆丝、胡萝卜丝、海带丝焯水至断生，捞出过凉水，沥干水分",
      "大蒜捣成蒜泥，放入碗中，加入生抽、醋、盐、香油、红油辣椒、白糖，调成料汁",
      "将沥干水分的三丝放入大碗中，淋入料汁",
      "搅拌均匀，静置5分钟即可食用"
    ],
    "tips": [
      "焯水时间不宜过长，避免三丝变软，失去脆嫩口感",
      "过凉水能让三丝更脆爽，颜色更鲜艳",
      "可根据个人口味调整红油辣椒的用量",
      "可加入少许花椒面，增加麻味"
    ],
    "recommendations": [11, 16, 28]
  },
  "41": {
    "id": 41,
    "name": "红糖糍粑",
    "desc": "外酥里糯、香甜可口",
    "time": "20分钟",
    "spice": "不辣",
    "servings": "2人份",
    "rating": "4.7分",
    "image": "https://picsum.photos/id/128/600/400",
    "imageLarge": "https://picsum.photos/id/128/1200/600",
    "category": "snack",
    "ingredients": [
      { "name": "糍粑", "amount": "200g" },
      { "name": "红糖", "amount": "50g" },
      { "name": "白糖", "amount": "20g" },
      { "name": "食用油", "amount": "适量" },
      { "name": "熟芝麻", "amount": "适量" },
      { "name": "清水", "amount": "少许" }
    ],
    "steps": [
      "糍粑切成均匀的小块，用厨房纸巾擦干表面水分",
      "热锅凉油，放入糍粑块，小火慢煎至表面金黄酥脆，翻面继续煎",
      "另起一锅，加入红糖、白糖、少许清水，小火熬至红糖融化，汤汁浓稠",
      "将煎好的糍粑放入红糖汁中，翻炒均匀，让每块糍粑都裹上红糖汁",
      "出锅后撒上熟芝麻即可"
    ],
    "tips": [
      "糍粑煎制时火要小，避免外焦里生",
      "红糖汁熬制不宜过稠，否则会粘在糍粑上，影响口感",
      "可加入少许姜片，中和红糖的甜腻",
      "趁热食用，口感最佳"
    ],
    "recommendations": [10, 17, 24]
  },
  "42": {
    "id": 42,
    "name": "串串香",
    "desc": "麻辣鲜香、食材多样",
    "time": "60分钟",
    "spice": "特辣",
    "servings": "4-6人份",
    "rating": "4.9分",
    "image": "https://picsum.photos/id/129/600/400",
    "imageLarge": "https://picsum.photos/id/129/1200/600",
    "category": "hotpot",
    "ingredients": [
      { "name": "火锅底料", "amount": "1包" },
      { "name": "牛油", "amount": "150g" },
      { "name": "干辣椒", "amount": "40g" },
      { "name": "花椒", "amount": "20g" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "葱", "amount": "适量" },
      { "name": "高汤", "amount": "适量" },
      { "name": "牛肉卷", "amount": "200g" },
      { "name": "毛肚", "amount": "150g" },
      { "name": "鸭肠", "amount": "150g" },
      { "name": "各种素菜", "amount": "适量" },
      { "name": "竹签", "amount": "适量" }
    ],
    "steps": [
      "各种食材洗净切好，用竹签串起，备用",
      "热锅融化牛油，加入姜蒜、葱爆香",
      "加入干辣椒、花椒炒至变色，放入火锅底料炒香",
      "加入高汤，大火煮沸后转小火熬制20分钟，煮出香味",
      "将串好的食材放入锅中，烫熟后捞出，蘸取自己喜欢的调料即可"
    ],
    "tips": [
      "食材串的时候要大小均匀，方便烫熟",
      "毛肚、鸭肠烫制时间不宜过长，10-15秒即可，保持脆嫩",
      "高汤可用骨头或鸡架熬制，味道更浓郁",
      "可根据个人口味调整火锅底料的用量和麻辣程度"
    ],
    "recommendations": [7, 8, 37]
  },
  "43": {
    "id": 43,
    "name": "番茄炒蛋",
    "desc": "酸甜可口、简单下饭",
    "time": "10分钟",
    "spice": "不辣",
    "servings": "2人份",
    "rating": "4.6分",
    "image": "https://picsum.photos/id/130/600/400",
    "imageLarge": "https://picsum.photos/id/130/1200/600",
    "category": "home",
    "ingredients": [
      { "name": "番茄", "amount": "2个" },
      { "name": "鸡蛋", "amount": "3个" },
      { "name": "葱花", "amount": "适量" },
      { "name": "盐", "amount": "适量" },
      { "name": "白糖", "amount": "少许" },
      { "name": "食用油", "amount": "适量" }
    ],
    "steps": [
      "番茄洗净，顶部划十字，用开水烫一下，去皮切块；鸡蛋打入碗中，加少许盐搅匀",
      "热锅凉油，倒入蛋液，快速炒散至凝固，盛出备用",
      "锅中留底油，放入番茄块，翻炒至番茄出汁",
      "加少许白糖、盐调味，翻炒均匀",
      "倒入炒好的鸡蛋，大火翻炒均匀",
      "撒葱花即可出锅"
    ],
    "tips": [
      "番茄去皮后口感更好，也可根据个人喜好选择不去皮",
      "炒鸡蛋时火要大，动作要快，避免鸡蛋变老",
      "白糖可中和番茄的酸味，用量不宜过多",
      "喜欢汤汁多的可加入少许清水，方便拌饭"
    ],
    "recommendations": [30, 33, 38]
  },
  "44": {
    "id": 44,
    "name": "红烧牛肉",
    "desc": "肉质软烂、酱香浓郁",
    "time": "90分钟",
    "spice": "中辣",
    "servings": "3-4人份",
    "rating": "4.8分",
    "image": "https://picsum.photos/id/131/600/400",
    "imageLarge": "https://picsum.photos/id/131/1200/600",
    "category": "classic",
    "ingredients": [
      { "name": "牛腩", "amount": "500g" },
      { "name": "郫县豆瓣", "amount": "2勺" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "葱", "amount": "适量" },
      { "name": "八角", "amount": "2个" },
      { "name": "桂皮", "amount": "1小块" },
      { "name": "香叶", "amount": "2片" },
      { "name": "料酒", "amount": "2勺" },
      { "name": "生抽", "amount": "2勺" },
      { "name": "老抽", "amount": "半勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "白糖", "amount": "1勺" },
      { "name": "食用油", "amount": "适量" },
      { "name": "清水", "amount": "适量" }
    ],
    "steps": [
      "牛腩洗净，切成大块，冷水下锅，加入姜葱、料酒，大火煮沸后撇去浮沫，捞出沥干水分",
      "姜蒜切片，葱切段，备用",
      "热锅凉油，放入姜蒜、葱段、八角、桂皮、香叶爆香",
      "加入郫县豆瓣，炒出红油，放入牛腩翻炒均匀",
      "淋入生抽、老抽，加白糖调味，翻炒至牛腩上色",
      "加入适量清水，没过牛腩，大火煮沸后转小火焖煮70分钟",
      "最后大火收汁，加盐调味，翻炒均匀即可出锅"
    ],
    "tips": [
      "牛腩最好选择肥瘦相间的，炖出来更软烂、更香浓",
      "焯水时要冷水下锅，才能更好地去除血水和腥味",
      "焖煮时间要足够，确保牛腩软烂入味",
      "可加入胡萝卜、土豆，丰富口感和营养"
    ],
    "recommendations": [3, 23, 39]
  },
  "45": {
    "id": 45,
    "name": "凉拌黄瓜木耳",
    "desc": "清爽脆嫩、开胃解腻",
    "time": "10分钟",
    "spice": "微辣",
    "servings": "2人份",
    "rating": "4.5分",
    "image": "https://picsum.photos/id/132/600/400",
    "imageLarge": "https://picsum.photos/id/132/1200/600",
    "category": "cold",
    "ingredients": [
      { "name": "黄瓜", "amount": "1根" },
      { "name": "干木耳", "amount": "20g" },
      { "name": "大蒜", "amount": "2瓣" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "醋", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "香油", "amount": "1勺" },
      { "name": "红油辣椒", "amount": "适量" },
      { "name": "葱花", "amount": "适量" }
    ],
    "steps": [
      "干木耳用温水泡发，洗净去蒂，撕成小朵；黄瓜洗净拍碎，切块备用",
      "锅中烧开水，放入木耳焯水至断生，捞出过凉水，沥干水分",
      "大蒜捣成蒜泥，放入碗中，加入生抽、醋、盐、香油、红油辣椒，调成料汁",
      "将黄瓜块、木耳放入大碗中，淋入料汁",
      "搅拌均匀，撒葱花即可食用"
    ],
    "tips": [
      "木耳泡发后要彻底清洗干净，去除杂质",
      "焯水时间不宜过长，30秒左右即可，避免木耳变软",
      "黄瓜拍碎后更易入味，口感更好",
      "现拌现吃，避免食材吸水变软"
    ],
    "recommendations": [11, 20, 40]
  },
  "46": {
    "id": 46,
    "name": "宜宾燃面",
    "desc": "油润鲜香、麻辣过瘾",
    "time": "15分钟",
    "spice": "麻辣",
    "servings": "1人份",
    "rating": "4.8分",
    "image": "https://picsum.photos/id/133/600/400",
    "imageLarge": "https://picsum.photos/id/133/1200/600",
    "category": "snack",
    "ingredients": [
      { "name": "宜宾燃面专用面", "amount": "100g" },
      { "name": "芽菜", "amount": "20g" },
      { "name": "花生碎", "amount": "20g" },
      { "name": "红油辣椒", "amount": "3勺" },
      { "name": "花椒面", "amount": "1勺" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "醋", "amount": "半勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "香油", "amount": "半勺" },
      { "name": "葱花", "amount": "适量" },
      { "name": "熟芝麻", "amount": "适量" }
    ],
    "steps": [
      "锅中烧开水，放入面条，煮至八成熟（比平时煮面少煮1分钟），捞出沥干水分",
      "将沥干的面条放入碗中，加入少许食用油，搅拌均匀，防止粘连",
      "碗中加入红油辣椒、花椒面、生抽、醋、盐、香油，搅拌均匀",
      "放入芽菜、花生碎，搅拌均匀",
      "撒上葱花、熟芝麻即可食用"
    ],
    "tips": [
      "面条不要煮得太熟，八成熟即可，口感更劲道",
      "芽菜要提前切碎，炒干水分，香味更浓",
      "花生碎最好自己现擀，保持酥脆口感",
      "搅拌时要快速均匀，让每根面条都裹上调料"
    ],
    "recommendations": [9, 17, 18]
  },
  "47": {
    "id": 47,
    "name": "麻辣香锅",
    "desc": "麻辣浓郁、食材丰富",
    "time": "40分钟",
    "spice": "特辣",
    "servings": "3-4人份",
    "rating": "4.9分",
    "image": "https://picsum.photos/id/134/600/400",
    "imageLarge": "https://picsum.photos/id/134/1200/600",
    "category": "hotpot",
    "ingredients": [
      { "name": "麻辣香锅底料", "amount": "1包" },
      { "name": "牛肉卷", "amount": "200g" },
      { "name": "虾", "amount": "200g" },
      { "name": "土豆", "amount": "1个" },
      { "name": "莲藕", "amount": "1节" },
      { "name": "青椒", "amount": "2个" },
      { "name": "洋葱", "amount": "1/2个" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "葱", "amount": "适量" },
      { "name": "干辣椒", "amount": "20g" },
      { "name": "花椒", "amount": "10g" },
      { "name": "食用油", "amount": "适量" },
      { "name": "料酒", "amount": "1勺" }
    ],
    "steps": [
      "各种食材洗净切好，虾剪去虾须、虾脚，去除虾线；土豆、莲藕切片，青椒、洋葱切块",
      "锅中烧开水，分别将土豆、莲藕焯水至断生，捞出沥干水分；牛肉卷、虾用料酒腌制10分钟",
      "热锅热油，放入姜蒜、葱段、干辣椒、花椒爆香",
      "放入麻辣香锅底料，炒出香味",
      "先放入牛肉卷、虾翻炒至变色，再放入土豆、莲藕、青椒、洋葱翻炒均匀",
      "大火翻炒5分钟，让食材充分入味，即可出锅"
    ],
    "tips": [
      "食材可根据个人喜好搭配，喜欢的食材都可以加入",
      "肉类和海鲜先炒，素菜后炒，避免素菜炒软",
      "翻炒时火要大，动作要快，保持食材的口感",
      "可加入少许生抽调味，增加鲜味"
    ],
    "recommendations": [7, 27, 42]
  },
  "48": {
    "id": 48,
    "name": "青椒肉丝",
    "desc": "鲜香可口、简单下饭",
    "time": "15分钟",
    "spice": "微辣",
    "servings": "2人份",
    "rating": "4.6分",
    "image": "https://picsum.photos/id/135/600/400",
    "imageLarge": "https://picsum.photos/id/135/1200/600",
    "category": "home",
    "ingredients": [
      { "name": "猪里脊肉", "amount": "200g" },
      { "name": "青椒", "amount": "2个" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "葱", "amount": "适量" },
      { "name": "料酒", "amount": "1勺" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "淀粉", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "食用油", "amount": "适量" }
    ],
    "steps": [
      "猪里脊肉切丝，用料酒、盐、淀粉腌制10分钟；青椒切丝，姜蒜切末，葱切段",
      "热锅热油，放入腌制好的肉丝，快速滑炒至变色，盛出备用",
      "锅中留底油，放入姜蒜末爆香，放入青椒丝翻炒至断生",
      "倒入炒好的肉丝，加生抽调味，翻炒均匀",
      "撒葱段，翻炒片刻即可出锅"
    ],
    "tips": [
      "肉丝要切得细而均匀，口感更好",
      "滑炒肉丝时间要短，避免变老发柴",
      "青椒丝不要炒得太烂，保持脆嫩口感",
      "可加入少许豆瓣酱，增加风味"
    ],
    "recommendations": [4, 21, 43]
  },
  "49": {
    "id": 49,
    "name": "粉蒸肉",
    "desc": "软糯香甜、肥而不腻",
    "time": "80分钟",
    "spice": "微辣",
    "servings": "3-4人份",
    "rating": "4.8分",
    "image": "https://picsum.photos/id/136/600/400",
    "imageLarge": "https://picsum.photos/id/136/1200/600",
    "category": "classic",
    "ingredients": [
      { "name": "五花肉", "amount": "500g" },
      { "name": "蒸肉米粉", "amount": "200g" },
      { "name": "土豆", "amount": "1个" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "葱", "amount": "适量" },
      { "name": "料酒", "amount": "1勺" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "白糖", "amount": "少许" },
      { "name": "食用油", "amount": "适量" },
      { "name": "豆瓣酱", "amount": "1勺" }
    ],
    "steps": [
      "五花肉洗净，切成薄片，用料酒、盐、生抽、白糖、豆瓣酱、姜蒜末腌制30分钟",
      "土豆去皮，切成厚片，铺在碗底；蒸肉米粉加入少许食用油，搅拌均匀",
      "将腌制好的五花肉片，均匀地裹上一层蒸肉米粉",
      "将裹好米粉的五花肉片，整齐地码在土豆上",
      "上锅蒸60分钟，取出后撒葱花，倒扣在盘中即可"
    ],
    "tips": [
      "五花肉要选三层肥瘦相间的，蒸出来更软糯",
      "蒸肉米粉可自己制作，也可购买现成的，自己制作的更香浓",
      "腌制时间要足够，让五花肉充分入味",
      "蒸制时间要足够，确保五花肉软烂、米粉软糯"
    ],
    "recommendations": [3, 31, 44]
  },
  "50": {
    "id": 50,
    "name": "凉拌海带丝",
    "desc": "清爽脆嫩、酸辣解腻",
    "time": "15分钟",
    "spice": "微辣",
    "servings": "2人份",
    "rating": "4.4分",
    "image": "https://picsum.photos/id/137/600/400",
    "imageLarge": "https://picsum.photos/id/137/1200/600",
    "category": "cold",
    "ingredients": [
      { "name": "干海带丝", "amount": "50g" },
      { "name": "大蒜", "amount": "2瓣" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "醋", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "香油", "amount": "1勺" },
      { "name": "红油辣椒", "amount": "适量" },
      { "name": "葱花", "amount": "适量" },
      { "name": "白糖", "amount": "少许" }
    ],
    "steps": [
      "干海带丝用温水泡发，洗净，去除杂质，切成均匀的长度",
      "锅中烧开水，放入海带丝焯水至断生，捞出过凉水，沥干水分",
      "大蒜捣成蒜泥，放入碗中，加入生抽、醋、盐、香油、红油辣椒、白糖，调成料汁",
      "将沥干水分的海带丝放入大碗中，淋入料汁",
      "搅拌均匀，撒葱花，静置5分钟即可食用"
    ],
    "tips": [
      "海带丝泡发时间不宜过长，避免营养流失",
      "焯水时间不宜过长，30秒左右即可，保持脆嫩口感",
      "白糖可中和海带的腥味，用量不宜过多",
      "可加入少许花椒面，增加麻味"
    ],
    "recommendations": [11, 40, 45]
  },
  "51": {
    "id": 51,
    "name": "鸡丝凉面",
    "desc": "清爽可口、麻辣鲜香",
    "time": "20分钟",
    "spice": "麻辣",
    "servings": "2人份",
    "rating": "4.7分",
    "image": "https://picsum.photos/id/138/600/400",
    "imageLarge": "https://picsum.photos/id/138/1200/600",
    "category": "snack",
    "ingredients": [
      { "name": "面条", "amount": "200g" },
      { "name": "鸡胸肉", "amount": "150g" },
      { "name": "黄瓜", "amount": "1/2根" },
      { "name": "胡萝卜", "amount": "1/2根" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "葱", "amount": "适量" },
      { "name": "红油辣椒", "amount": "3勺" },
      { "name": "花椒面", "amount": "1勺" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "醋", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "香油", "amount": "1勺" },
      { "name": "熟芝麻", "amount": "适量" }
    ],
    "steps": [
      "鸡胸肉洗净，冷水下锅，加入姜葱、料酒，大火煮沸后转小火煮15分钟，捞出放凉，撕成鸡丝",
      "黄瓜、胡萝卜洗净，切成细丝；姜蒜捣成蒜泥",
      "锅中烧开水，放入面条，煮至断生，捞出过凉水，沥干水分，加入少许食用油搅拌均匀",
      "碗中加入红油辣椒、花椒面、生抽、醋、盐、香油、蒜泥，调成料汁",
      "将面条放入碗中，铺上鸡丝、黄瓜丝、胡萝卜丝",
      "淋入料汁，撒上熟芝麻、葱花，搅拌均匀即可食用"
    ],
    "tips": [
      "面条不要煮得太熟，断生即可，过凉水后口感更劲道",
      "鸡胸肉煮至八成熟即可，放凉后更容易撕成鸡丝",
      "可根据个人口味调整麻辣程度和酸甜比例",
      "现拌现吃，避免面条吸水变软"
    ],
    "recommendations": [9, 18, 46]
  },
  "52": {
    "id": 52,
    "name": "泡椒牛蛙",
    "desc": "酸辣鲜香、蛙肉滑嫩",
    "time": "25分钟",
    "spice": "中辣",
    "servings": "2-3人份",
    "rating": "4.8分",
    "image": "https://picsum.photos/id/139/600/400",
    "imageLarge": "https://picsum.photos/id/139/1200/600",
    "category": "hotpot",
    "ingredients": [
      { "name": "牛蛙", "amount": "2只（约800g）" },
      { "name": "泡椒", "amount": "100g" },
      { "name": "泡椒水", "amount": "200ml" },
      { "name": "青椒", "amount": "2个" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "葱", "amount": "适量" },
      { "name": "料酒", "amount": "2勺" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "淀粉", "amount": "1勺" },
      { "name": "食用油", "amount": "适量" },
      { "name": "白糖", "amount": "少许" }
    ],
    "steps": [
      "牛蛙宰杀洗净，切块，用料酒、盐、淀粉腌制15分钟，去除腥味",
      "泡椒切段，青椒切块，姜蒜切片，葱切段",
      "热锅热油，放入姜蒜爆香，放入泡椒翻炒出香味",
      "加入泡椒水，大火煮沸，加生抽、白糖调味",
      "放入腌制好的牛蛙块，小火焖煮10分钟",
      "加入青椒块，翻炒至断生",
      "大火收汁，撒葱段即可出锅"
    ],
    "tips": [
      "牛蛙一定要清洗干净，去除内脏和血水，避免有腥味",
      "泡椒水不要浪费，加入锅中能增加酸辣味",
      "焖煮时间不宜过长，避免牛蛙变老发柴",
      "可加入木耳、金针菇等配菜，丰富口感"
    ],
    "recommendations": [25, 27, 32]
  },
   "53": {
    "id": 53,
    "name": "干煸土豆丝",
    "desc": "干香酥脆、咸辣适口",
    "time": "18分钟",
    "spice": "中辣",
    "servings": "2人份",
    "rating": "4.6分",
    "image": "https://picsum.photos/id/140/600/400",
    "imageLarge": "https://picsum.photos/id/140/1200/600",
    "category": "home",
    "ingredients": [
      { "name": "土豆", "amount": "2个" },
      { "name": "干辣椒", "amount": "6个" },
      { "name": "花椒", "amount": "5g" },
      { "name": "大蒜", "amount": "3瓣" },
      { "name": "盐", "amount": "适量" },
      { "name": "食用油", "amount": "适量" },
      { "name": "葱花", "amount": "适量" }
    ],
    "steps": [
      "土豆去皮，切成均匀的细丝，用清水浸泡10分钟，捞出沥干水分",
      "大蒜切片，干辣椒剪段备用",
      "热锅凉油，放入花椒、干辣椒、大蒜片爆香",
      "倒入土豆丝，转大火快速翻炒，直至土豆丝表面干燥、呈微金黄色",
      "加适量盐调味，继续翻炒2分钟，确保土豆丝酥脆",
      "撒葱花，翻炒均匀后即可出锅"
    ],
    "tips": [
      "土豆丝浸泡可去除淀粉，避免翻炒时粘连，口感更酥脆",
      "翻炒时火要大、动作要快，防止土豆丝变软",
      "喜欢更麻可多加花椒，喜欢更辣可加入小米辣",
      "不要加水，全程干煸，才能保证酥脆口感"
    ],
    "recommendations": [21, 33, 48]
  },
  "54": {
    "id": 54,
    "name": "麻辣牛肉干",
    "desc": "干香有嚼劲、麻辣过瘾",
    "time": "90分钟",
    "spice": "特辣",
    "servings": "2-3人份",
    "rating": "4.9分",
    "image": "https://picsum.photos/id/141/600/400",
    "imageLarge": "https://picsum.photos/id/141/1200/600",
    "category": "classic",
    "ingredients": [
      { "name": "牛腱子肉", "amount": "500g" },
      { "name": "干辣椒", "amount": "40g" },
      { "name": "花椒", "amount": "25g" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "葱", "amount": "适量" },
      { "name": "料酒", "amount": "3勺" },
      { "name": "生抽", "amount": "2勺" },
      { "name": "老抽", "amount": "半勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "白糖", "amount": "1勺" },
      { "name": "食用油", "amount": "适量" },
      { "name": "熟芝麻", "amount": "适量" }
    ],
    "steps": [
      "牛腱子肉洗净，切成粗条，冷水下锅，加入姜葱、料酒，大火煮沸撇去浮沫，捞出沥干",
      "锅中加适量清水，放入牛肉条、姜葱、料酒，小火煮40分钟，捞出晾凉",
      "姜蒜切片，干辣椒剪段，备用",
      "热锅热油，放入姜蒜、干辣椒、花椒爆香，加入牛肉条翻炒至表面干燥",
      "淋入生抽、老抽，加白糖、盐调味，继续翻炒15分钟，直至牛肉干香入味",
      "撒熟芝麻，翻炒均匀，放凉后食用口感更佳"
    ],
    "tips": [
      "牛腱子肉有嚼劲，适合做牛肉干，也可用牛里脊替换，口感更嫩",
      "煮牛肉时不要煮太烂，否则翻炒后会散，影响口感",
      "翻炒时间要足够，确保水分收干，牛肉干香",
      "可根据口味调整辣椒和花椒用量，喜欢麻可多加花椒"
    ],
    "recommendations": [14, 29, 39]
  },
  "55": {
    "id": 55,
    "name": "凉拌鸡脚皮",
    "desc": "脆嫩Q弹、麻辣鲜香",
    "time": "30分钟",
    "spice": "麻辣",
    "servings": "2-4人份",
    "rating": "4.7分",
    "image": "https://picsum.photos/id/142/600/400",
    "imageLarge": "https://picsum.photos/id/142/1200/600",
    "category": "cold",
    "ingredients": [
      { "name": "鸡脚皮", "amount": "300g" },
      { "name": "干辣椒", "amount": "8个" },
      { "name": "花椒", "amount": "10g" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "葱", "amount": "适量" },
      { "name": "料酒", "amount": "2勺" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "醋", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "香油", "amount": "1勺" },
      { "name": "熟芝麻", "amount": "适量" }
    ],
    "steps": [
      "鸡脚皮洗净，冷水下锅，加入姜葱、料酒，大火煮沸后转小火煮5分钟，捞出过冰水",
      "姜蒜捣成蒜泥，葱切葱花，干辣椒剪段备用",
      "热锅凉油，放入干辣椒、花椒炸出香味，制成麻辣油",
      "鸡脚皮沥干水分，放入碗中，加入蒜泥、生抽、醋、盐、香油",
      "淋入滚烫的麻辣油，搅拌均匀，撒熟芝麻、葱花",
      "冷藏10分钟，让味道充分融合即可食用"
    ],
    "tips": [
      "鸡脚皮煮的时间不宜过长，否则会失去脆嫩口感",
      "过冰水是鸡脚皮脆爽的关键，一定要彻底冷却",
      "麻辣油油温不宜过高，避免炸糊辣椒和花椒",
      "可加入少许小米辣，增加辣度和风味"
    ],
    "recommendations": [20, 28, 35]
  },
  "56": {
    "id": 56,
    "name": "蛋烘糕",
    "desc": "外酥内软、香甜可口",
    "time": "20分钟",
    "spice": "不辣",
    "servings": "2人份",
    "rating": "4.8分",
    "image": "https://picsum.photos/id/143/600/400",
    "imageLarge": "https://picsum.photos/id/143/1200/600",
    "category": "snack",
    "ingredients": [
      { "name": "鸡蛋", "amount": "2个" },
      { "name": "面粉", "amount": "100g" },
      { "name": "白糖", "amount": "50g" },
      { "name": "清水", "amount": "80ml" },
      { "name": "食用油", "amount": "20ml" },
      { "name": "酵母", "amount": "1g" },
      { "name": "馅料", "amount": "适量" },
      { "name": "熟芝麻", "amount": "适量" }
    ],
    "steps": [
      "鸡蛋打入碗中，加入白糖，搅拌至白糖融化",
      "加入清水、食用油，搅拌均匀，再加入面粉、酵母，搅拌至无颗粒的面糊",
      "面糊静置发酵20分钟，至表面有细小气泡",
      "平底锅刷少许油，小火加热，倒入适量面糊，摊成圆形",
      "待面糊表面凝固，放入喜欢的馅料（豆沙、肉松、奶油均可）",
      "将饼对折，煎至两面金黄酥脆，出锅后撒熟芝麻即可"
    ],
    "tips": [
      "面糊发酵时间不宜过长，否则会有酸味，影响口感",
      "煎制时火要小，避免外焦里生",
      "馅料可根据个人喜好选择，咸甜均可",
      "刚出锅的蛋烘糕口感最佳，外酥内软"
    ],
    "recommendations": [10, 17, 41]
  },
  "57": {
    "id": 57,
    "name": "水煮肥牛",
    "desc": "麻辣鲜香、肥牛滑嫩",
    "time": "20分钟",
    "spice": "特辣",
    "servings": "2-3人份",
    "rating": "4.8分",
    "image": "https://picsum.photos/id/144/600/400",
    "imageLarge": "https://picsum.photos/id/144/1200/600",
    "category": "hotpot",
    "ingredients": [
      { "name": "肥牛卷", "amount": "300g" },
      { "name": "豆芽", "amount": "200g" },
      { "name": "干辣椒", "amount": "40g" },
      { "name": "花椒", "amount": "20g" },
      { "name": "郫县豆瓣", "amount": "2勺" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "葱", "amount": "适量" },
      { "name": "料酒", "amount": "1勺" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "食用油", "amount": "适量" },
      { "name": "清水", "amount": "适量" }
    ],
    "steps": [
      "豆芽洗净，焯水后铺在碗底；姜蒜切片，葱切段，干辣椒剪段备用",
      "热锅热油，放入姜蒜、葱段、干辣椒、花椒爆香，加入郫县豆瓣炒出红油",
      "加入适量清水，淋入料酒、生抽，加适量盐调味，大火煮沸",
      "放入肥牛卷，煮至变色熟透，用筷子捞出，铺在豆芽上",
      "将锅中的汤汁淋在肥牛卷上，再撒上剩余的干辣椒、花椒",
      "烧热少许食用油，泼在上面激香，即可出锅"
    ],
    "tips": [
      "肥牛卷不要煮太久，变色即可，避免变老发柴",
      "豆瓣要炒出红油，汤色更红亮，味道更浓郁",
      "泼油的油温要高，才能激发出辣椒和花椒的香味",
      "可加入金针菇、娃娃菜等配菜，丰富口感"
    ],
    "recommendations": [2, 25, 32]
  },
  "58": {
    "id": 58,
    "name": "肉末茄子",
    "desc": "软糯入味、咸香微辣",
    "time": "20分钟",
    "spice": "微辣",
    "servings": "2-3人份",
    "rating": "4.6分",
    "image": "https://picsum.photos/id/145/600/400",
    "imageLarge": "https://picsum.photos/id/145/1200/600",
    "category": "home",
    "ingredients": [
      { "name": "长茄子", "amount": "2根" },
      { "name": "猪肉末", "amount": "150g" },
      { "name": "郫县豆瓣", "amount": "1勺" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "葱", "amount": "适量" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "淀粉", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "食用油", "amount": "适量" },
      { "name": "清水", "amount": "少许" }
    ],
    "steps": [
      "茄子切条，撒少许盐腌制10分钟，挤干水分；姜蒜切末，葱切段备用",
      "热锅多放油，放入茄子炸至金黄软糯，捞出控油",
      "锅中留底油，放入猪肉末翻炒至变色，加料酒去腥",
      "加入姜蒜末、郫县豆瓣，炒出红油",
      "倒入茄子，加生抽、盐调味，翻炒均匀",
      "淀粉加少许清水调成水淀粉，淋入锅中，大火收汁",
      "撒葱段，翻炒均匀即可出锅"
    ],
    "tips": [
      "茄子腌制后可减少吸油，更健康，也可直接煎制，不用油炸",
      "肉末要炒至干香，味道更浓郁",
      "水淀粉不宜过多，避免汤汁过稠",
      "喜欢更鲜可加入少许蚝油调味"
    ],
    "recommendations": [13, 33, 48]
  },
  "59": {
    "id": 59,
    "name": "宫保鸡丁",
    "desc": "酸甜麻辣、鸡丁滑嫩",
    "time": "20分钟",
    "spice": "中辣",
    "servings": "2-3人份",
    "rating": "4.8分",
    "image": "https://picsum.photos/id/146/600/400",
    "imageLarge": "https://picsum.photos/id/146/1200/600",
    "category": "classic",
    "ingredients": [
      { "name": "鸡胸肉", "amount": "250g" },
      { "name": "花生米", "amount": "50g" },
      { "name": "干辣椒", "amount": "10个" },
      { "name": "花椒", "amount": "10g" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "葱", "amount": "适量" },
      { "name": "料酒", "amount": "1勺" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "醋", "amount": "1勺" },
      { "name": "糖", "amount": "1勺" },
      { "name": "淀粉", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "食用油", "amount": "适量" }
    ],
    "steps": [
      "鸡胸肉切丁，用料酒、盐、淀粉腌制10分钟；姜蒜切末，葱切段，干辣椒剪段备用",
      "调制宫保汁：生抽、醋、糖、淀粉、清水混合均匀",
      "热锅热油，放入花生米，小火炸至金黄，捞出备用",
      "锅中留底油，放入干辣椒、花椒爆香，加入姜蒜末、葱段炒香",
      "放入腌制好的鸡丁，快速滑炒至变色",
      "淋入宫保汁，大火翻炒均匀，至汤汁浓稠",
      "倒入炸好的花生米，翻炒均匀即可出锅"
    ],
    "tips": [
      "花生米最后放，避免变软，保持酥脆口感",
      "鸡丁滑炒时间要短，避免变老发柴",
      "宫保汁的酸甜比例要适中，可根据个人口味调整",
      "喜欢更丰富口感可加入胡萝卜丁、黄瓜丁"
    ],
    "recommendations": [4, 22, 34]
  },
  "60": {
    "id": 60,
    "name": "凉拌折耳根",
    "desc": "脆嫩独特、酸辣解腻",
    "time": "10分钟",
    "spice": "微辣",
    "servings": "2人份",
    "rating": "4.5分",
    "image": "https://picsum.photos/id/147/600/400",
    "imageLarge": "https://picsum.photos/id/147/1200/600",
    "category": "cold",
    "ingredients": [
      { "name": "折耳根", "amount": "200g" },
      { "name": "大蒜", "amount": "3瓣" },
      { "name": "小米辣", "amount": "3个" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "醋", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "香油", "amount": "1勺" },
      { "name": "葱花", "amount": "适量" },
      { "name": "白糖", "amount": "少许" }
    ],
    "steps": [
      "折耳根洗净，去除老根，切成小段，放入碗中",
      "大蒜捣成蒜泥，小米辣切圈，放入碗中",
      "加入生抽、醋、盐、香油、白糖，搅拌均匀，调成料汁",
      "将料汁淋在折耳根上，搅拌均匀",
      "撒葱花、小米辣圈，静置5分钟，让味道充分融合即可食用"
    ],
    "tips": [
      "折耳根要选新鲜的，嫩根口感更好，老根需去除",
      "不喜折耳根的腥味，可用清水浸泡5分钟，加少许盐去腥",
      "白糖可中和折耳根的腥味，用量不宜过多",
      "现拌现吃，避免折耳根吸水变软，失去脆嫩口感"
    ],
    "recommendations": [11, 40, 50]
  },
  "61": {
    "id": 61,
    "name": "芝麻汤圆",
    "desc": "软糯香甜、满口芝麻香",
    "time": "15分钟",
    "spice": "不辣",
    "servings": "2人份",
    "rating": "4.7分",
    "image": "https://picsum.photos/id/148/600/400",
    "imageLarge": "https://picsum.photos/id/148/1200/600",
    "category": "snack",
    "ingredients": [
      { "name": "汤圆粉", "amount": "150g" },
      { "name": "黑芝麻", "amount": "50g" },
      { "name": "白糖", "amount": "40g" },
      { "name": "猪油", "amount": "20g" },
      { "name": "清水", "amount": "适量" },
      { "name": "熟芝麻", "amount": "适量" }
    ],
    "steps": [
      "黑芝麻放入锅中，小火翻炒至出香味，放凉后捣成粉末",
      "黑芝麻粉中加入白糖、猪油，搅拌均匀，制成芝麻馅料，搓成小丸子备用",
      "汤圆粉中加入适量温水，揉成光滑的面团，静置10分钟",
      "取适量面团，搓成小圆球，捏成薄皮，放入芝麻馅料，封口搓圆",
      "锅中烧开水，放入汤圆，煮至汤圆浮起，再煮2分钟，确保熟透",
      "捞出汤圆，撒上熟芝麻即可食用"
    ],
    "tips": [
      "汤圆粉加温水要分次加，避免面团过稀或过干",
      "馅料中的猪油可增加香味，也可用黄油替换",
      "煮汤圆时，水开后转小火，避免汤圆煮破",
      "喜欢更甜可在汤中加入少许白糖"
    ],
    "recommendations": [10, 41, 56]
  },
  "62": {
    "id": 62,
    "name": "鸭血粉丝汤",
    "desc": "鲜香浓郁、粉丝爽滑",
    "time": "25分钟",
    "spice": "微辣",
    "servings": "2人份",
    "rating": "4.7分",
    "image": "https://picsum.photos/id/149/600/400",
    "imageLarge": "https://picsum.photos/id/149/1200/600",
    "category": "hotpot",
    "ingredients": [
      { "name": "鸭血", "amount": "200g" },
      { "name": "粉丝", "amount": "100g" },
      { "name": "鸭肠", "amount": "100g" },
      { "name": "鸭肝", "amount": "100g" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "葱", "amount": "适量" },
      { "name": "料酒", "amount": "1勺" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "胡椒粉", "amount": "少许" },
      { "name": "香油", "amount": "半勺" },
      { "name": "高汤", "amount": "适量" }
    ],
    "steps": [
      "鸭血切块，鸭肠洗净切段，鸭肝切片；粉丝用温水泡发，洗净备用",
      "姜蒜切片，葱切段备用",
      "锅中加高汤，放入姜蒜、葱段、料酒，大火煮沸",
      "放入鸭血、鸭肝，转小火煮10分钟",
      "加入粉丝、鸭肠，煮5分钟，至粉丝爽滑、鸭肠熟透",
      "加生抽、盐、胡椒粉调味，搅拌均匀",
      "淋入香油，撒葱花即可出锅"
    ],
    "tips": [
      "鸭血要选新鲜的，煮前可焯水，去除腥味",
      "鸭肠最后放，煮3-5分钟即可，避免煮老，保持脆嫩",
      "高汤可用鸭架熬制，味道更浓郁，也可用清水替代",
      "喜欢更辣可加入少许红油辣椒"
    ],
    "recommendations": [7, 27, 42]
  },
  "63": {
    "id": 63,
    "name": "清炒西兰花",
    "desc": "清爽脆嫩、清淡可口",
    "time": "10分钟",
    "spice": "不辣",
    "servings": "2人份",
    "rating": "4.5分",
    "image": "https://picsum.photos/id/150/600/400",
    "imageLarge": "https://picsum.photos/id/150/1200/600",
    "category": "home",
    "ingredients": [
      { "name": "西兰花", "amount": "300g" },
      { "name": "大蒜", "amount": "2瓣" },
      { "name": "盐", "amount": "适量" },
      { "name": "食用油", "amount": "适量" },
      { "name": "生抽", "amount": "少许" },
      { "name": "蚝油", "amount": "少许" }
    ],
    "steps": [
      "西兰花切成小朵，用清水浸泡10分钟，洗净备用；大蒜切片",
      "锅中烧开水，加入少许盐和食用油，放入西兰花焯水30秒，捞出过凉水，沥干水分",
      "热锅凉油，放入大蒜片爆香",
      "倒入西兰花，大火快速翻炒2分钟",
      "加适量盐、少许生抽和蚝油调味，翻炒均匀即可出锅"
    ],
    "tips": [
      "西兰花焯水时间不宜过长，避免变软，失去脆嫩口感",
      "焯水时加少许盐和油，能让西兰花颜色更鲜艳",
      "调味不宜过重，突出西兰花本身的清香",
      "可加入少许胡萝卜片，丰富颜色和营养"
    ],
    "recommendations": [33, 43, 48]
  },
  "64": {
    "id": 64,
    "name": "红烧排骨",
    "desc": "肉质软烂、酱香浓郁",
    "time": "80分钟",
    "spice": "微辣",
    "servings": "3-4人份",
    "rating": "4.8分",
    "image": "https://picsum.photos/id/151/600/400",
    "imageLarge": "https://picsum.photos/id/151/1200/600",
    "category": "classic",
    "ingredients": [
      { "name": "排骨", "amount": "500g" },
      { "name": "郫县豆瓣", "amount": "1勺" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "葱", "amount": "适量" },
      { "name": "八角", "amount": "2个" },
      { "name": "桂皮", "amount": "1小块" },
      { "name": "料酒", "amount": "2勺" },
      { "name": "生抽", "amount": "2勺" },
      { "name": "老抽", "amount": "半勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "白糖", "amount": "1勺" },
      { "name": "食用油", "amount": "适量" },
      { "name": "清水", "amount": "适量" }
    ],
    "steps": [
      "排骨洗净，切成小段，冷水下锅，加入姜葱、料酒，大火煮沸撇去浮沫，捞出沥干",
      "姜蒜切片，葱切段，备用",
      "热锅凉油，放入姜蒜、葱段、八角、桂皮爆香",
      "加入郫县豆瓣，炒出红油，放入排骨翻炒均匀，至排骨表面微黄",
      "淋入生抽、老抽，加白糖调味，翻炒至排骨上色",
      "加入适量清水，没过排骨，大火煮沸后转小火焖煮60分钟",
      "大火收汁，加盐调味，翻炒均匀即可出锅"
    ],
    "tips": [
      "排骨焯水时冷水下锅，才能更好地去除血水和腥味",
      "焖煮时间要足够，确保排骨软烂入味",
      "白糖可中和豆瓣的咸味，还能让排骨上色更均匀",
      "可加入土豆、玉米，丰富口感和营养"
    ],
    "recommendations": [3, 44, 49]
  },
  "65": {
    "id": 65,
    "name": "凉拌豆干",
    "desc": "筋道入味、麻辣鲜香",
    "time": "15分钟",
    "spice": "麻辣",
    "servings": "2人份",
    "rating": "4.6分",
    "image": "https://picsum.photos/id/152/600/400",
    "imageLarge": "https://picsum.photos/id/152/1200/600",
    "category": "cold",
    "ingredients": [
      { "name": "豆腐干", "amount": "200g" },
      { "name": "干辣椒", "amount": "5个" },
      { "name": "花椒", "amount": "5g" },
      { "name": "大蒜", "amount": "2瓣" },
      { "name": "葱", "amount": "适量" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "醋", "amount": "半勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "香油", "amount": "1勺" },
      { "name": "红油辣椒", "amount": "适量" },
      { "name": "熟芝麻", "amount": "适量" }
    ],
    "steps": [
      "豆腐干洗净，切成均匀的条，放入锅中，加少许盐，煮5分钟，捞出沥干水分",
      "大蒜捣成蒜泥，葱切葱花，干辣椒剪段备用",
      "热锅凉油，放入干辣椒、花椒炸出香味，制成麻辣油",
      "豆腐干放入碗中，加入蒜泥、生抽、醋、盐、香油、红油辣椒",
      "淋入滚烫的麻辣油，搅拌均匀",
      "撒葱花、熟芝麻，静置5分钟即可食用"
    ],
    "tips": [
      "豆腐干煮的时间不宜过长，避免变软，失去筋道口感",
      "麻辣油的油温要控制好，避免炸糊辣椒和花椒",
      "可加入少许香菜，增加清香口感",
      "现拌现吃，避免豆腐干吸水变软"
    ],
    "recommendations": [11, 28, 45]
  },
  "66": {
    "id": 66,
    "name": "锅盔夹凉粉",
    "desc": "外酥内软、麻辣过瘾",
    "time": "25分钟",
    "spice": "麻辣",
    "servings": "2人份",
    "rating": "4.8分",
    "image": "https://picsum.photos/id/153/600/400",
    "imageLarge": "https://picsum.photos/id/153/1200/600",
    "category": "snack",
    "ingredients": [
      { "name": "面粉", "amount": "200g" },
      { "name": "豌豆凉粉", "amount": "200g" },
      { "name": "酵母", "amount": "2g" },
      { "name": "盐", "amount": "适量" },
      { "name": "食用油", "amount": "适量" },
      { "name": "红油辣椒", "amount": "2勺" },
      { "name": "花椒面", "amount": "1勺" },
      { "name": "生抽", "amount": "半勺" },
      { "name": "醋", "amount": "半勺" },
      { "name": "蒜泥", "amount": "适量" },
      { "name": "葱花", "amount": "适量" }
    ],
    "steps": [
      "面粉中加入酵母、少许盐、适量温水，揉成光滑的面团，发酵30分钟",
      "发酵好的面团分成2份，搓成圆球状，擀成薄饼，平底锅刷油，小火煎至两面金黄酥脆，制成锅盔",
      "豌豆凉粉切成粗条，放入碗中，加入红油辣椒、花椒面、生抽、醋、蒜泥、葱花，搅拌均匀",
      "将锅盔从中间切开，不要切断，把拌好的凉粉夹入锅盔中，即可食用"
    ],
    "tips": [
      "面团发酵时间要足够，才能让锅盔外酥内软",
      "煎锅盔时火要小，慢慢煎至金黄，避免外焦里生",
      "凉粉拌好后尽快夹入锅盔，避免凉粉出水，影响口感",
      "可根据个人口味调整凉粉的麻辣程度"
    ],
    "recommendations": [9, 18, 46]
  },
  "67": {
    "id": 67,
    "name": "香辣虾",
    "desc": "外酥里嫩、香辣入味",
    "time": "25分钟",
    "spice": "特辣",
    "servings": "2-3人份",
    "rating": "4.9分",
    "image": "https://picsum.photos/id/154/600/400",
    "imageLarge": "https://picsum.photos/id/154/1200/600",
    "category": "hotpot",
    "ingredients": [
      { "name": "基围虾", "amount": "500g" },
      { "name": "干辣椒", "amount": "40g" },
      { "name": "花椒", "amount": "20g" },
      { "name": "郫县豆瓣", "amount": "2勺" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "葱", "amount": "适量" },
      { "name": "料酒", "amount": "2勺" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "白糖", "amount": "半勺" },
      { "name": "食用油", "amount": "适量" },
      { "name": "熟芝麻", "amount": "适量" }
    ],
    "steps": [
      "基围虾剪去虾须、虾脚，剪开虾背，去除虾线，用料酒、盐腌制15分钟",
      "姜蒜切片，葱切段，干辣椒剪段备用",
      "热锅多放油，放入虾，大火炸至金黄酥脆，捞出控油",
      "锅中留底油，放入姜蒜、葱段、干辣椒、花椒爆香",
      "加入郫县豆瓣，炒出红油，放入炸好的虾翻炒均匀",
      "加生抽、白糖调味，大火翻炒2分钟，至虾充分入味",
      "撒熟芝麻、葱花，翻炒均匀即可出锅"
    ],
    "tips": [
      "虾要炸至表面酥脆，口感更好，也可直接煸炒，不用油炸",
      "郫县豆瓣要炒出红油，味道更浓郁",
      "翻炒时间不宜过长，避免虾变老，失去鲜嫩口感",
      "可加入洋葱、青椒，丰富口感和颜色"
    ],
    "recommendations": [7, 37, 47]
  },
  "68": {
    "id": 68,
    "name": "肉末豇豆",
    "desc": "干香入味、咸辣下饭",
    "time": "20分钟",
    "spice": "中辣",
    "servings": "2-3人份",
    "rating": "4.6分",
    "image": "https://picsum.photos/id/155/600/400",
    "imageLarge": "https://picsum.photos/id/155/1200/600",
    "category": "home",
    "ingredients": [
      { "name": "豇豆", "amount": "400g" },
      { "name": "猪肉末", "amount": "150g" },
      { "name": "干辣椒", "amount": "8个" },
      { "name": "花椒", "amount": "5g" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "郫县豆瓣", "amount": "1勺" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "料酒", "amount": "半勺" },
      { "name": "食用油", "amount": "适量" }
    ],
    "steps": [
      "豇豆摘去老筋，洗净，切成小段，用清水浸泡10分钟，捞出沥干水分",
      "姜蒜切末，干辣椒剪段备用",
      "热锅不放油，放入豇豆，小火煸炒至表面微皱、水分收干，盛出备用",
      "锅中加少许油，放入猪肉末翻炒至变色，加料酒去腥",
      "加入姜蒜末、干辣椒、花椒、郫县豆瓣，炒出红油",
      "倒入煸炒好的豇豆，加生抽、盐调味，大火翻炒均匀",
      "收干多余水分，即可出锅"
    ],
    "tips": [
      "豇豆一定要煸炒至熟透，避免中毒，也可先焯水再煸炒",
      "煸炒豇豆时要晾干水分，避免溅油",
      "肉末要炒至干香，味道更浓郁",
      "可加入少许芽菜，增加风味"
    ],
    "recommendations": [21, 33, 58]
  },
  "69": {
    "id": 69,
    "name": "回锅肉",
    "desc": "肥而不腻、酱香浓郁",
    "time": "30分钟",
    "spice": "中辣",
    "servings": "2-3人份",
    "rating": "4.9分",
    "image": "https://picsum.photos/id/156/600/400",
    "imageLarge": "https://picsum.photos/id/156/1200/600",
    "category": "classic",
    "ingredients": [
      { "name": "五花肉", "amount": "400g" },
      { "name": "青椒", "amount": "2个" },
      { "name": "蒜苗", "amount": "100g" },
      { "name": "郫县豆瓣", "amount": "2勺" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "料酒", "amount": "1勺" },
      { "name": "生抽", "amount": "1勺" },
      { "name": "盐", "amount": "适量" },
      { "name": "食用油", "amount": "适量" }
    ],
    "steps": [
      "五花肉洗净，冷水下锅，加入姜葱、料酒，大火煮沸后转小火煮20分钟，捞出放凉，切成薄片",
      "青椒切块，蒜苗切段，姜蒜切片备用",
      "热锅凉油，放入五花肉片，小火煸炒至表面微黄、出油",
      "加入姜蒜末、郫县豆瓣，炒出红油",
      "放入青椒块、蒜苗段，翻炒至青椒断生、蒜苗变软",
      "加生抽、盐调味，大火翻炒均匀即可出锅"
    ],
    "tips": [
      "五花肉要选三层肥瘦相间的，煮至八成熟即可，放凉后切片更易成型",
      "煸炒五花肉时要小火慢煸，逼出多余油脂，避免过于油腻",
      "蒜苗最后放，翻炒至变软即可，保持清香口感",
      "豆瓣要炒出红油，味道更浓郁，可根据口味调整用量"
    ],
    "recommendations": [3, 31, 44]
  },
 
  "71": {
    "id": 71,
    "name": "葱油饼",
    "desc": "外酥内软、葱香浓郁",
    "time": "20分钟",
    "spice": "不辣",
    "servings": "2人份",
    "rating": "4.7分",
    "image": "https://picsum.photos/id/158/600/400",
    "imageLarge": "https://picsum.photos/id/158/1200/600",
    "category": "snack",
    "ingredients": [
      { "name": "面粉", "amount": "200g" },
      { "name": "葱花", "amount": "100g" },
      { "name": "盐", "amount": "适量" },
      { "name": "食用油", "amount": "适量" },
      { "name": "温水", "amount": "适量" }
    ],
    "steps": [
      "面粉中加入少许盐、适量温水，揉成光滑的面团，静置15分钟",
      "葱花洗净，沥干水分，加入少许盐、少许食用油，搅拌均匀备用",
      "取静置好的面团，搓成圆球状，擀成薄饼，均匀地涂抹一层食用油",
      "撒上拌好的葱花，从一端卷起来，搓成螺旋状，再擀成薄饼",
      "平底锅刷油，小火加热，放入薄饼，煎至两面金黄酥脆，即可出锅"
    ],
    "tips": [
      "面团要揉至光滑，静置时间要足够，才能让葱油饼更松软",
      "葱花要沥干水分，避免擀饼时出水，影响口感",
      "煎制时火要小，慢慢煎至金黄，避免外焦里生",
      "喜欢更酥可多刷一层油，煎至表面起酥"
    ],
    "recommendations": [10, 41, 56]
  },
  "72": {
    "id": 72,
    "name": "酸萝卜老鸭汤",
    "desc": "鲜香解腻、微辣开胃",
    "time": "120分钟",
    "spice": "微辣",
    "servings": "4-6人份",
    "rating": "4.8分",
    "image": "https://picsum.photos/id/159/600/400",
    "imageLarge": "https://picsum.photos/id/159/1200/600",
    "category": "hotpot",
    "ingredients": [
      { "name": "老鸭", "amount": "1只（约1500g）" },
      { "name": "酸萝卜", "amount": "300g" },
      { "name": "姜蒜", "amount": "适量" },
      { "name": "葱", "amount": "适量" },
      { "name": "料酒", "amount": "3勺" },
      { "name": "花椒", "amount": "10g" },
      { "name": "八角", "amount": "1个" },
      { "name": "盐", "amount": "适量" },
      { "name": "胡椒粉", "amount": "少许" },
      { "name": "清水", "amount": "适量" }
    ],
    "steps": [
      "老鸭宰杀洗净，切成大块，冷水下锅，加入姜葱、料酒，大火煮沸撇去浮沫，捞出沥干",
      "酸萝卜切成厚片，姜蒜切片，葱切段备用",
      "锅中加适量清水，放入老鸭块、姜蒜、葱段、花椒、八角，大火煮沸后转小火焖煮90分钟",
      "加入酸萝卜片，继续焖煮30分钟，至鸭肉软烂、酸萝卜入味",
      "加适量盐、少许胡椒粉调味，搅拌均匀",
      "撒葱花即可出锅"
    ],
    "tips": [
      "老鸭要选两年以上的，肉质更紧实，炖出来的汤更香浓",
      "酸萝卜可自己腌制，也可购买现成的，自己腌制的更地道",
      "焖煮时间要足够，确保鸭肉软烂、味道浓郁",
      "喜欢更鲜可加入少许枸杞、红枣"
    ],
    "recommendations": [7, 27, 62]
  }
  },
  
  // 分类信息
  categories: {
    all: {
      title: "经典川菜教程",
      desc: "每一道都是川味灵魂，在家轻松做"
    },
    classic: {
      title: "经典川菜",
      desc: "传承百年的经典味道"
    },
    hotpot: {
      title: "火锅串串",
      desc: "热气腾腾，麻辣鲜香"
    },
    snack: {
      title: "小吃面点",
      desc: "街头巷尾的地道风味"
    },
    cold: {
      title: "凉菜系列",
      desc: "清爽可口，开胃解腻"
    },
    home: {
      title: "家常小炒",
      desc: "简单易做，美味可口"
    }
  },
  
  // 获取所有菜谱
  getAllRecipes: function() {
    return Object.values(this.recipes);
  },
  
  // 根据分类获取菜谱
  getRecipesByCategory: function(category) {
    if (category === 'all') {
      return this.getAllRecipes();
    }
    return Object.values(this.recipes).filter(recipe => recipe.category === category);
  },
  
  // 根据ID获取菜谱
  getRecipeById: function(id) {
    return this.recipes[id];
  },
  
  // 搜索菜谱
  searchRecipes: function(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    return Object.values(this.recipes).filter(recipe => {
      // 搜索菜谱名称和描述
      if (recipe.name.toLowerCase().includes(lowerKeyword) ||
          recipe.desc.toLowerCase().includes(lowerKeyword)) {
        return true;
      }
      
      // 搜索食材
      if (recipe.ingredients.some(ingredient => 
          ingredient.name.toLowerCase().includes(lowerKeyword))) {
        return true;
      }
      
      // 搜索制作步骤
      if (recipe.steps.some(step => 
          step.toLowerCase().includes(lowerKeyword))) {
        return true;
      }
      
      // 搜索小贴士
      if (recipe.tips.some(tip => 
          tip.toLowerCase().includes(lowerKeyword))) {
        return true;
      }
      
      return false;
    });
  },
  
  // 获取分类信息
  getCategoryInfo: function(category) {
    return this.categories[category] || this.categories.all;
  }
};
