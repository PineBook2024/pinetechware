const seoRoutes = [
  ["/Website-Designing", "/website-designing-services"],
  ["/Website-Development", "/website-development-services"],
  ["/E-Commerce-Solution", "/e-commerce-solution"],
  ["/Custom-Application", "/custom-application-services"],
  ["/Shopify-Store", "/shopify-store-development"],
  ["/ASP-App", "/asp-net-development"],
  ["/IOS-App", "/ios-app-development-services"],
  ["/Android-App", "/android-app-development-services"],
  ["/Kotlin-App", "/kotlin-app-development"],
  ["/React-Native-App", "/react-native-app"],
  ["/Flutter-App", "/flutter-app-development-services"],
  ["/Swift-App", "/swift-app-development"],
  ["/Mobile-Game-Development", "/mobile-game-development"],
  ["/Unity-Game-Development", "/unity-game-development"],
  ["/Unreal-Game-Development", "/unreal-game-development"],
  ["/Blockchain-Game-Development", "/blockchain-game-development"],
  ["/2D-Game-Development", "/2d-game-development"],
  ["/3D-Game-Development", "/3d-game-development"],
  ["/Web3-Game-Development", "/web3-game-development"],
  ["/Multiplayer-Game-Development", "/multiplayer-game-development"],
  ["/Game-Testing", "/game-testing"],
  ["/Email-Marketing-Service", "/email-marketing-service"],
  ["/Search-Engine-Optimization", "/search-engine-optimization"],
  ["/Social-Media-Marketing", "/social-media-marketing"],
  ["/PPC-Management", "/ppc-management"],
  ["/Custom-Graphic-Design", "/custom-graphic-design"],
  ["/Logo-Design", "/logo-design-services"],
  ["/Professional-Branding", "/branding-services"],
  ["/Video-Animation", "/video-animation-services"],
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return seoRoutes.map(([destination, source]) => ({
      source,
      destination,
    }));
  },
};

export default nextConfig;
