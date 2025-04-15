const pro = {
    "subscription": {
        "provider": "apple",
        "startDate": isoDateString(new Date(new Date().getTime() - 24 * 60 * 60 * 1000)),
        "plan": "com.alltrails.AllTrails.pro.yearly.36.trial7.int",
        "proStatus": "active",
        "trial": true
    },
    "pro": true,
    "subscriptionTier": "plus",
    "admin": false,
    "permissions": [
        "plus:access"
    ],
    "featureEntitlements": [
        "ad_free",
        "area_download",
        "distance_away",
        "guides",
        "live_share",
        "map_download",
        "park_download",
        "photo_tour",
        "print_maps",
        "three_d_map",
        "trail_conditions",
        "trail_flyover",
        "wrong_turn_alerts"
    ],
    "canPurchaseNewSubscription": false,
    "canUpgradeExistingSubscription": true,
    "isPromoEligible": false,
    "isSpecialPeakPromoEligible": true,
    "expirationDate": isoDateString(new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000)),
}

function isoDateString(now) {
    return now.toISOString().split('.')[0] + 'Z'
}

const parsed = JSON.parse($response.body)
let users = []
for (const u of parsed.users) {
    users.push(Object.assign({}, u, pro))
}

const result = JSON.stringify(Object.assign({}, parsed, {"users": users}))
$done({body: result})