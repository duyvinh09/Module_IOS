var objc = JSON.parse($response.body);

objc = {
    "result": {
        "result": "success",
        "msTime": 1704758400000,
        "accountCreatedMillis": null,
        "licenses": [
        {
            "benefits": [
                "RemoveWatermark",
                "MemberEffects",
                "ProjectPackageSharing",
                "FutureMemberFeatures",
                "AdvancedEasing",
                "CameraObjects",
                "LayerParenting",
                "CloudStorageLowTier"
            ],
            "type": "subscription",
            "store": "apple_app_store",
            "autoRenewing": true,
            "orderNumber": "300001752007005",
            "productId": "alightcreative.motion.1y_t60_1w",
            "period": "1y",
            "label": null,
            "details": null,
            "expires": 32662137600000,
            "valid": true,
            "linkStatus": "linked-current"
        }
        ],
        "warnings": []
    }
}


$done({ body: JSON.stringify(objc) });