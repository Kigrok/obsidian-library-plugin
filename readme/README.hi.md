> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | **हिन्दी**

<p align="center">
  <img src="../banner.png" alt="Obsidian Library Banner" width="100%">
</p>

<h1 align="center">Library</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.3.2-blue" alt="Version">
  <img src="https://img.shields.io/github/downloads/Kigrok/obsidian-library-plugin/total?color=brightgreen" alt="Downloads">
  <img src="https://img.shields.io/badge/Obsidian-v1.8.7+-purple" alt="Obsidian Version">
  <img src="https://img.shields.io/github/license/Kigrok/obsidian-library-plugin?color=orange" alt="License">
</p>

<p align="center">
  फ़िल्में, सीरीज़, किताबें, एनीमे, कॉमिक्स, गेम और संगीत Obsidian में नोट्स के रूप में, कवर कार्ड की गैलरी की तरह।
  <br />
  <a href="https://community.obsidian.md/plugins/library">Obsidian प्लगइन निर्देशिका</a>
</p>

## सुविधाएँ

- किसी शीर्षक को खोजें और पोस्टर, वर्ष, शैली, रचनाकारों, कलाकारों और रेटिंग से भरा नोट पाएँ।
- लाइब्रेरी को कवर कार्ड के रूप में देखें, श्रेणी के अनुसार समूहित और नाम, वर्ष, रेटिंग या तारीख के अनुसार क्रमबद्ध।
- सीरीज़ के एपिसोड या किताब के अध्याय पर टिक लगाएँ और हर एक को रेट करें; `Progress` और `My Rating` इन्हीं से गिने जाते हैं।
- फ़िल्मों और सीरीज़ के नोट्स में ट्रेलर, स्टिल्स, अवधि और सीज़न की सूची दिखती है।
- शैलियाँ, रचनाकार और कलाकार लिंक हैं, इसलिए उनके नोट्स हर शीर्षक को बैकलिंक्स और ग्राफ़ में इकट्ठा करते हैं।
- आँकड़े पैनल आपकी चुनी हुई शीर्ष सूचियाँ और देखने का कुल समय दिखाता है।
- किसी शीर्षक को कार्ड इमेज के रूप में X, Telegram, Reddit और छह अन्य नेटवर्क पर शेयर करें।
- एनीमे की प्रगति AniList के साथ सिंक करें।
- इंटरफ़ेस Obsidian की हर समर्थित भाषा में अनूदित है, और यह README [30 भाषाओं](./) में उपलब्ध है।

## जल्दी शुरुआत

1. **Library** को Settings → Community plugins → Browse से या [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases) से इंस्टॉल करें।
2. Settings → Library में हर तरह की सामग्री के लिए एक श्रेणी जोड़ें: फ़िल्में, सीरीज़, किताबें, कॉमिक्स, गेम्स, संगीत, एनीमे, मैनुअल।
3. अपने स्रोतों के लिए ज़रूरी API कुंजियाँ डालें (नीचे देखें)।
4. रिबन से “लाइब्रेरी” टैब खोलें, **+** दबाएँ, श्रेणी चुनें और शीर्षक खोजें। जो शीर्षक पहले से लाइब्रेरी में है, वह अपना मौजूदा नोट खोलता है।

किसी श्रेणी का `Type` मान (जैसे `Movie`) तय करता है कि कौन से नोट्स उसके हैं, और उसका फ़ोल्डर तय करता है कि नए नोट्स कहाँ जाएँ। दोनों श्रेणी की सेटिंग्स में **उन्नत** के नीचे हैं।

## स्रोत

| श्रेणी | स्रोत | कुंजी |
| --- | --- | --- |
| फ़िल्में, सीरीज़ | OMDb | [मुफ़्त कुंजी](https://www.omdbapi.com/apikey.aspx) |
| किताबें | Google Books + Open Library | वैकल्पिक [Google Books कुंजी](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| गेम | RAWG + Steam | [मुफ़्त RAWG कुंजी](https://rawg.io/apidocs); Steam को ज़रूरत नहीं |
| संगीत | Deezer | ज़रूरत नहीं |
| एनीमे | AniList | ज़रूरत नहीं |
| कॉमिक्स | Comic Vine | [मुफ़्त कुंजी](https://comicvine.gamespot.com/api/) |
| बाकी सब | मैनुअल: फ़ील्ड आप खुद भरते हैं | ज़रूरत नहीं |

ट्रेलर, स्टिल्स, अवधि और सीज़न की सूचियाँ बिना कुंजी के Cinemeta से आती हैं। [TMDB कुंजी](https://www.themoviedb.org/settings/api) सीज़न की रेटिंग और ज़्यादा स्टिल्स जोड़ती है।

## प्रगति और रेटिंग

सीरीज़ के नोट का हेडर सीज़न की सूची दिखाता है, और हर सीज़न खुलकर अपने एपिसोड दिखाता है, अगर स्रोत के पास हों तो नामों के साथ। किसी एपिसोड या पूरे सीज़न को देखा हुआ चिह्नित करें और 1 से 10 तक रेटिंग दें। `Progress` चिह्नित एपिसोड गिनता है, सीज़न की रेटिंग उसके रेट किए गए एपिसोड का औसत है, और `My Rating` रेट किए गए सीज़न का औसत है। जिस सीज़न में कोई एपिसोड रेट नहीं है, उसे अलग से रेटिंग दी जा सकती है।

एनीमे भी इसी तरह काम करता है, एपिसोड के नामों के बिना एक सीज़न के रूप में।

किताब के अध्याय Open Library पर किसी संस्करण की विषय-सूची से आते हैं। अगर विषय-सूची न मिले, तो नोट के हेडर में **अध्याय जोड़ें** अध्यायों की संख्या या हर पंक्ति में एक शीर्षक लेता है। इसके बाद `Progress` पन्नों की जगह अध्याय गिनता है, और पढ़े गए पन्ने अध्यायों के उसी अनुपात में बदल जाते हैं।

पुराने संस्करणों के नोट्स अपनी प्रगति बनाए रखते हैं। जब तक आप कुछ चिह्नित नहीं करते, `Progress` की संख्या तक के पहले एपिसोड देखे हुए दिखते हैं।

## आँकड़े

“लाइब्रेरी” टैब के ऊपर का पैनल वे कॉलम दिखाता है जो आप Settings → Library → आंकड़े में चुनते हैं: किसी श्रेणी के तीन सबसे ऊँची रेटिंग वाले शीर्षक, किसी गुण के तीन सबसे आम मान (शैलियाँ, कलाकार या कोई और), और फ़िल्मों, सीरीज़ और एनीमे पर बिताए घंटे। चार्ट के नीचे हर दिन एक तुलना दिखती है, जैसे: अपोलो 11 8 बार चाँद तक जाकर लौट सकता था।

## ग्राफ़ लिंक

`Genre`, `Creator` और `Cast` में `[[Christopher Nolan]]` जैसे लिंक होते हैं, इसलिए किसी शैली या व्यक्ति का नोट उसके शीर्षक बैकलिंक्स में दिखाता है। हाथ से लिखे नाम नोट बदलने पर लिंक बन जाते हैं, और `ग्राफ लिंक पुनर्निर्माण करें` पूरी लाइब्रेरी को बदल देता है।

## शेयरिंग और AniList

नोट के हेडर में **शेयर करें** पोस्टर, शीर्षक, वर्ष, शैली, कलाकारों, रेटिंग और आपके स्कोर वाला कार्ड बनाता है। डेस्कटॉप पर इमेज क्लिपबोर्ड में जाती है और आपका चुना नेटवर्क तैयार कैप्शन के साथ खुलता है, बस इमेज को पोस्ट में पेस्ट करें। मोबाइल पर इमेज सिस्टम के शेयर मेनू में जाती है। आप इमेज या कैप्शन कॉपी भी कर सकते हैं, या इमेज को वॉल्ट में सहेज सकते हैं।

एनीमे सिंक करने के लिए [anilist.co/settings/developer](https://anilist.co/settings/developer) पर रीडायरेक्ट URL `https://anilist.co/api/v2/oauth/pin` के साथ एक क्लाइंट रजिस्टर करें। Client ID को Settings → Library → AniList सिंक में पेस्ट करें, **कनेक्ट करें** पर क्लिक करें और AniList का दिखाया टोकन पेस्ट करें। `मौजूदा नोट को AniList पर भेजें` प्रगति, स्थिति और स्कोर भेजता है। `AniList से प्रगति प्राप्त करें` आपके नोट्स अपडेट करता है, प्रगति को कभी पीछे नहीं करता और `My Rating` को नहीं छूता। सिर्फ़ `Source: anilist` वाले नोट्स सिंक होते हैं।

## Frontmatter

हर कार्ड एक नोट है, और प्लगइन उसके बारे में जो कुछ जानता है वह frontmatter में है:

```yaml
---
Type: Series
Name: Stranger Things
Year: 2016
End Year: 2025
Season: 5
Genre: ["[[Drama]]", "[[Horror]]"]
Creator: ["[[The Duffer Brothers]]"]
Cast: ["[[Winona Ryder]]", "[[David Harbour]]"]
Rating IMDB: 8.7
Rating RT: 91
Runtime: 42
My Rating: 9
Cover: https://m.media-amazon.com/images/...
URL: https://www.imdb.com/title/tt4574334/
Trailer: https://www.youtube.com/watch?v=b9EkMc79ZSU
Gallery: ["https://image.tmdb.org/t/p/w780/56v2KjBlU4XaOv9rVYEQypROD7P.jpg"]
Seasons:
  - name: Season 1
    episodes: 8
    rating: 8.0
    episode_list:
      - title: "Chapter One: The Vanishing of Will Byers"
        watched: true
        my_rating: 9
      # ...7 और एपिसोड
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

सीरीज़ में `Runtime` एक एपिसोड की अवधि है। किताबों में `ISBN` भी होता है और अध्याय `Chapters` में उन्हीं फ़ील्ड `title`, `watched` और `my_rating` के साथ रहते हैं; एनीमे में `Rating AniList` और `Status` होते हैं। कवर वाली प्रॉपर्टी का नाम सेटिंग्स में बदला जा सकता है, जैसे `image`।

रिफ़्रेश सिर्फ़ खाली फ़ील्ड भरता है, इसलिए आपके बदले हुए मान बने रहते हैं। यह `Progress` में एपिसोड की कुल संख्या भी अपडेट करता है और नए सीज़न और एपिसोड के नाम जोड़ता है।

## निजता और नेटवर्क उपयोग

आपकी लाइब्रेरी सादे नोट्स है और ऑफ़लाइन काम करती है। प्लगइन तब ऑनलाइन जाता है जब आप खोजते, रिफ़्रेश करते, सिंक करते या शेयर करते हैं; जब आप लाइब्रेरी का कोई नोट खोलते हैं, हर नोट के लिए अधिकतम 5 मिनट में एक बार; और किसी अपडेट या कुंजी बदलने के बाद एक बार, नए फ़ील्ड भरने के लिए। इसमें टेलीमेट्री, एनालिटिक्स या स्वचालित अपडेट नहीं है। API कुंजियाँ प्लगइन की स्थानीय सेटिंग्स में रहती हैं और सिर्फ़ अपनी सेवा को भेजी जाती हैं।

| होस्ट | कब | क्या भेजा जाता है |
| --- | --- | --- |
| `www.omdbapi.com` | फ़िल्म और सीरीज़ खोज | शीर्षक या IMDb id, OMDb कुंजी |
| `openlibrary.org` | किताब खोज; किताब जोड़ने या खोलने पर अध्याय खोज | शीर्षक और लेखक, ISBN या कृति id |
| `covers.openlibrary.org` | किताबों के कवर | कवर id |
| `www.googleapis.com` | किताब खोज | शीर्षक, Google Books कुंजी |
| `api.rawg.io` | गेम खोज | शीर्षक, RAWG कुंजी |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | गेम खोज और कवर | शीर्षक या Steam ऐप id |
| `api.deezer.com` | संगीत खोज | एल्बम या कलाकार |
| `graphql.anilist.co` | एनीमे खोज; AniList सिंक | शीर्षक; आपका टोकन, प्रगति, स्थिति और स्कोर |
| `anilist.co` | आप **कनेक्ट करें** पर क्लिक करते हैं | Client ID, आपके ब्राउज़र में खुलता है |
| `s4.anilist.co` | एनीमे बैनर | CDN पथ |
| `comicvine.gamespot.com` | कॉमिक्स खोज | शीर्षक, Comic Vine कुंजी |
| `v3-cinemeta.strem.io` | फ़िल्म या सीरीज़ जोड़ना या रिफ़्रेश करना | IMDb id |
| `images.metahub.space`, `episodes.metahub.space` | स्टिल्स | IMDb id, सीज़न और एपिसोड नंबर |
| `api.themoviedb.org`, `image.tmdb.org` | TMDB कुंजी सेट होने पर फ़िल्म या सीरीज़ जोड़ना या रिफ़्रेश करना | IMDb id और TMDB कुंजी; इमेज पथ |
| `i.ytimg.com` | ट्रेलर स्टिल्स | वीडियो id |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | ट्रेलर वाला नोट खोलना | वीडियो id |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | आप शेयर बटन पर क्लिक करते हैं | कैप्शन: शीर्षक, आपका स्कोर, स्रोत लिंक। इमेज आपके डिवाइस पर रहती है |

## कमांड

| कमांड | क्या करता है |
| --- | --- |
| `लाइब्रेरी खोलें` | “लाइब्रेरी” टैब खोलता है |
| `सामग्री जोड़ें` | स्रोत में खोजकर नोट बनाता है |
| `अपनी लाइब्रेरी में खोजें` | लाइब्रेरी का नोट ढूँढकर खोलता है |
| `वर्तमान नोट के लिए मेटाडेटा रीफ्रेश करें` | सक्रिय नोट का डेटा फिर से लाता है |
| `सभी नोट्स के लिए मेटाडेटा रीफ्रेश करें` | लाइब्रेरी के हर नोट का डेटा एक-एक करके फिर से लाता है |
| `ग्राफ लिंक पुनर्निर्माण करें` | `Genre`, `Creator` और `Cast` को लिंक में बदलता है |
| `डुप्लिकेट खोजें और हटाएं` | एक जैसे URL वाले नोट्स दिखाता है और चुने हुए हटाता है |
| `मौजूदा नोट शेयर करें` | शेयर कार्ड खोलता है |
| `मौजूदा नोट को AniList पर भेजें` | प्रगति, स्थिति और स्कोर भेजता है |
| `AniList से प्रगति प्राप्त करें` | आपकी AniList सूची से नोट्स अपडेट करता है |

## सहायता

बग [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues) में और सुझाव [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions) में बताएँ। प्लगइन [MIT लाइसेंस](../LICENSE) के तहत है।

अगर प्लगइन आपके काम आया है, तो आप इसका समर्थन कर सकते हैं:

| | नेटवर्क | पता |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
