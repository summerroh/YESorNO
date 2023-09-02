import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import mobileAds, {
  BannerAd,
  TestIds,
  BannerAdSize,
} from "react-native-google-mobile-ads";

export default function Admob() {
  const [initialized, setInitialized] = useState(false);
  const [showBannerAd, setShowBannerAd] = useState(true);

  mobileAds()
    .initialize()
    .then((adapterStatuses) => {
      // Admob Initialization complete!
      setInitialized(true);
    })
    .catch((error) => {
      console.error("AdMob Initialization Error:", error);
      setShowBannerAd(false); // Hide the banner ad on initialization error
    });

  return (
    <View style={styles.container}>
      {initialized && showBannerAd && (
        <BannerAd
          unitId={TestIds.BANNER}
          size={BannerAdSize.BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
          onAdFailedToLoad={(error) => {
            console.error("Banner Ad Failed To Load:", error);
            setShowBannerAd(false); // Hide the banner ad on load error
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -15,
  },
});
