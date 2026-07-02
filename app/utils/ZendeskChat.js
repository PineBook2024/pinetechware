import Script from "next/script";

export default function ZendeskChat() {
  return (
    <Script
      id="ze-snippet"
      src="https://static.zdassets.com/ekr/snippet.js?key=6ad75b0f-d085-4cae-9a7a-48abeb69b973"
      strategy="afterInteractive"
    />
  );
}
