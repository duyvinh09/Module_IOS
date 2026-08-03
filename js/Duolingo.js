var objc = JSON.parse($response.body);

objc = {
    "decisions": {
        "general": {
            "result": "falstaff_streaming",
            "contextTrackingProperties": {
                "decision_id": "61697777-5228-4e88-ae79-37792c8cc2c4"
            }
        },
        "enriched": {
            "stringID": "falstaff_streaming",
            "variantClass": "StaticDuolingoVideoVariant",
            "contextTrackingProperties": {
                "decision_id": "61697777-5228-4e88-ae79-37792c8cc2c4"
            },
            "adStartBackgroundColor": "E6DBA5",
            "videoURL": "https://simg-ssl.duolingo.com/videos/promo/DuolingoInterstitial_FalstaffStreaming_English_Energy.mp4",
            "madJsonURL": "https://simg-ssl.duolingo.com/videos/promo/DuolingoInterstitial_FalstaffStreaming_Energy_English.json",
            "isModular": true,
            "iconStyle": "LIGHT",
            "offerOrigin": "INTERSTITIAL_PLUS_VIDEO",
            "shouldHideCloseButton": false,
            "standardButtonsState": "GENERAL_STATE",
            "madWrapper": "falstaff_nature",
            "madWorldCharacters": [
                "falstaff"
            ],
            "numWorldCharacters": 1,
            "madValuePropositions": [
                "intervention",
                "no_ads",
                "unlimited_energy"
            ]
        }
    },
    "trackingProperties": null
}


$done({ body: JSON.stringify(objc) });