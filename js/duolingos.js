const url = $request.url;
let obj = JSON.parse($response.body);

if (url.includes("subscriberLevel")) {
    obj.subscriberLevel = "PREMIUM";
} else if (url.includes("available-features")) {
    obj.subscriptionFeatures = [
        "NO_NETWORK_ADS",
        "UNLIMITED_HEARTS",
        "LEGENDARY_LEVEL",
        "MISTAKES_INBOX",
        "MASTERY_QUIZ",
        "NO_SUPER_PROMOS",
        "LICENSED_SONGS",
        "CHAT_TUTORS",
        "VIDEO_CALL_IN_PATH",
        "VIDEO_CALL_IN_PRACTICE_HUB"
    ];

    obj.purchasableFeatures = [
        "CAN_PURCHASE_IAP",
        "CAN_PURCHASE_SUBSCRIPTION",
        "CAN_PURCHASE_LITE"
    ];
} else if (url.includes("subscription-catalog")) {
    obj.layout = "STANDARD";
    obj.productExperiments = [];

    obj.plusPackageViewModels = [
        {
            "productId": "com.duolingo.DuolingoMobile.subscription.Lite.TwelveMonth.26Q2RtrIncHigher27D.Trial7.36",
            "isFamilyPlan": false,
            "isStudentPlan": false,
            "trackingProperties": {
                "subscription_tier": "twelve_month",
                "subscription_item_type": "PREMIUM_SUBSCRIPTION",
                "is_family_plan": false,
                "free_trial_length": 7,
                "free_trial_period": true
            },
            "type": "premium",
            "advertisableFeatures": [
                "NO_NETWORK_ADS",
                "UNLIMITED_HEARTS"
            ]
        }
    ];

    obj.subscriptionFeatureGroupId = 4;
}

$done({ body: JSON.stringify(obj) });