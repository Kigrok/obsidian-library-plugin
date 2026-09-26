> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | **বাংলা**

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
  সিনেমা, সিরিজ, বই, অ্যানিমে, কমিকস, গেম আর গান Obsidian-এ নোট হিসেবে, প্রচ্ছদ কার্ডের গ্যালারিতে।
  <br />
  <a href="https://community.obsidian.md/plugins/library">Obsidian প্লাগইন ডিরেক্টরি</a>
</p>

## বৈশিষ্ট্য

- একটি শিরোনাম খুঁজুন আর পোস্টার, বছর, ঘরানা, নির্মাতা, অভিনয়শিল্পী ও রেটিংসহ একটি নোট পান।
- লাইব্রেরি দেখুন প্রচ্ছদ কার্ড হিসেবে, বিভাগ অনুযায়ী সাজানো আর নাম, বছর, রেটিং বা তারিখ অনুযায়ী ক্রমানুসারে।
- সিরিজের পর্ব বা বইয়ের অধ্যায়ে টিক দিন আর প্রতিটিকে রেটিং দিন; `Progress` ও `My Rating` এগুলো থেকেই হিসাব হয়।
- সিনেমা ও সিরিজের নোটে ট্রেলার, স্থিরচিত্র, দৈর্ঘ্য আর সিজনের তালিকা দেখা যায়।
- ঘরানা, নির্মাতা আর অভিনয়শিল্পীরা লিংক, তাই তাদের নোট প্রতিটি শিরোনাম ব্যাকলিঙ্ক আর গ্রাফে জড়ো করে।
- পরিসংখ্যান প্যানেল আপনার বাছাই করা শীর্ষ তালিকা আর মোট দেখার সময় দেখায়।
- একটি শিরোনাম কার্ডের ছবি হিসেবে X, Telegram, Reddit আর আরও ছয়টি নেটওয়ার্কে শেয়ার করুন।
- অ্যানিমের অগ্রগতি AniList-এর সঙ্গে সিঙ্ক করুন।
- ইন্টারফেস Obsidian-এর সমর্থিত সব ভাষায় অনূদিত, আর এই README আছে [30টি ভাষায়](./)।

## দ্রুত শুরু

1. সেটিংস → কমিউনিটি প্লাগইন → ব্রাউজ থেকে বা [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases) থেকে **Library** ইনস্টল করুন।
2. সেটিংস → Library-তে প্রতিটি ধরনের কনটেন্টের জন্য একটি বিভাগ যোগ করুন: ছবি, সিরিজ, বই, কমিক্স, গেম, সংগীত, অ্যানিমে, ম্যানুয়াল।
3. আপনার উৎসগুলোর প্রয়োজনীয় API কী দিন (নিচে দেখুন)।
4. রিবন থেকে “লাইব্রেরি” ট্যাব খুলুন, **+** চাপুন, একটি বিভাগ বেছে নিন আর শিরোনাম খুঁজুন। লাইব্রেরিতে আগে থেকেই থাকা শিরোনাম তার বিদ্যমান নোট খোলে।

বিভাগের `Type` মান (যেমন `Movie`) ঠিক করে কোন নোটগুলো তার, আর তার ফোল্ডার ঠিক করে নতুন নোট কোথায় যাবে। দুটোই বিভাগের সেটিংসে **উন্নত**-এর নিচে আছে।

## উৎস

| বিভাগ | উৎস | কী |
| --- | --- | --- |
| সিনেমা, সিরিজ | OMDb | [বিনামূল্যের কী](https://www.omdbapi.com/apikey.aspx) |
| বই | Google Books + Open Library | ঐচ্ছিক [Google Books কী](https://console.cloud.google.com/apis/library/books.googleapis.com) |
| গেম | RAWG + Steam | [বিনামূল্যের RAWG কী](https://rawg.io/apidocs); Steam-এর দরকার নেই |
| গান | Deezer | দরকার নেই |
| অ্যানিমে | AniList | দরকার নেই |
| কমিকস | Comic Vine | [বিনামূল্যের কী](https://comicvine.gamespot.com/api/) |
| বাকি সবকিছু | ম্যানুয়াল: ঘরগুলো আপনি নিজে পূরণ করেন | দরকার নেই |

ট্রেলার, স্থিরচিত্র, দৈর্ঘ্য আর সিজনের তালিকা কী ছাড়াই Cinemeta থেকে আসে। [TMDB কী](https://www.themoviedb.org/settings/api) সিজনের রেটিং আর আরও স্থিরচিত্র যোগ করে।

## অগ্রগতি ও রেটিং

সিরিজের নোটের হেডারে সিজনের তালিকা থাকে, আর প্রতিটি সিজন খুললে তার পর্বগুলো দেখা যায়, উৎসের কাছে থাকলে নামসহ। একটি পর্ব বা পুরো সিজন দেখা হয়েছে বলে চিহ্নিত করুন আর 1 থেকে 10 রেটিং দিন। `Progress` চিহ্নিত পর্ব গোনে, সিজনের রেটিং তার রেট করা পর্বগুলোর গড়, আর `My Rating` রেট করা সিজনগুলোর গড়। যে সিজনের কোনো পর্ব রেট করা নেই, সেটি নিজস্ব রেটিং পায়।

অ্যানিমেও একইভাবে কাজ করে, পর্বের নাম ছাড়া একটি সিজন হিসেবে।

বইয়ের অধ্যায় আসে Open Library-তে কোনো সংস্করণের সূচিপত্র থেকে। সূচিপত্র না পেলে নোটের হেডারের **অধ্যায় যোগ করুন** অধ্যায়ের সংখ্যা বা প্রতি লাইনে একটি শিরোনাম নেয়। এরপর `Progress` পৃষ্ঠার বদলে অধ্যায় গোনে, আর পড়া পৃষ্ঠাগুলো অধ্যায়ের একই অনুপাতে চলে যায়।

পুরোনো সংস্করণের নোট তাদের অগ্রগতি ধরে রাখে। আপনি কিছু চিহ্নিত না করা পর্যন্ত `Progress`-এর সংখ্যা পর্যন্ত প্রথম পর্বগুলো দেখা হয়েছে বলে দেখায়।

## পরিসংখ্যান

“লাইব্রেরি” ট্যাবের ওপরের প্যানেল সেই কলামগুলো দেখায় যা আপনি সেটিংস → Library → পরিসংখ্যান-এ বাছেন: কোনো বিভাগের সবচেয়ে বেশি রেটিংয়ের তিনটি শিরোনাম, কোনো বৈশিষ্ট্যের সবচেয়ে বেশি আসা তিনটি মান (ঘরানা, অভিনয়শিল্পী বা অন্য যেকোনো), আর সিনেমা, সিরিজ ও অ্যানিমেতে কাটানো ঘণ্টা। চার্টের নিচে প্রতিদিন একটি তুলনা দেখা যায়, যেমন: অ্যাপোলো 11 8 বার চাঁদে গিয়ে ফিরে আসতে পারত।

## গ্রাফ লিংক

`Genre`, `Creator` আর `Cast`-এ `[[Christopher Nolan]]`-এর মতো লিংক থাকে, তাই কোনো ঘরানা বা ব্যক্তির নোট তার শিরোনামগুলো ব্যাকলিঙ্কে দেখায়। হাতে লেখা নাম নোট বদলালে লিংক হয়ে যায়, আর `গ্রাফ লিংক পুনর্নির্মাণ করুন` পুরো লাইব্রেরি রূপান্তর করে।

## শেয়ার ও AniList

নোটের হেডারে **শেয়ার** পোস্টার, শিরোনাম, বছর, ঘরানা, অভিনয়শিল্পী, রেটিং আর আপনার স্কোরসহ একটি কার্ড আঁকে। ডেস্কটপে ছবিটি ক্লিপবোর্ডে যায় আর আপনার বাছাই করা নেটওয়ার্ক তৈরি ক্যাপশনসহ খোলে, শুধু ছবিটি পোস্টে পেস্ট করুন। মোবাইলে ছবিটি সিস্টেমের শেয়ার মেনুতে যায়। ছবি বা ক্যাপশন কপিও করতে পারেন, বা ছবিটি সংরক্ষণ করতে পারেন।

অ্যানিমে সিঙ্ক করতে [anilist.co/settings/developer](https://anilist.co/settings/developer)-এ রিডাইরেক্ট URL `https://anilist.co/api/v2/oauth/pin` দিয়ে একটি ক্লায়েন্ট নিবন্ধন করুন। Client ID সেটিংস → Library → AniList সিঙ্ক-এ পেস্ট করুন, **সংযুক্ত করুন** চাপুন আর AniList যে টোকেন দেখায় তা পেস্ট করুন। `বর্তমান নোট AniList-এ পাঠান` অগ্রগতি, অবস্থা আর স্কোর পাঠায়। `AniList থেকে অগ্রগতি আনুন` আপনার নোট আপডেট করে, অগ্রগতি কখনো পিছিয়ে দেয় না আর `My Rating` ছোঁয় না। শুধু `Source: anilist` থাকা নোটগুলো সিঙ্ক হয়।

## Frontmatter

প্রতিটি কার্ড একটি নোট, আর প্লাগইন সেটি সম্পর্কে যা জানে সবই frontmatter-এ থাকে:

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
      # ...আরও 7টি পর্ব
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

সিরিজে `Runtime` হলো একটি পর্বের দৈর্ঘ্য। বইয়ে `ISBN`-ও থাকে আর অধ্যায়গুলো একই `title`, `watched` ও `my_rating` ঘরসহ `Chapters`-এ থাকে; অ্যানিমেতে থাকে `Rating AniList` ও `Status`। প্রচ্ছদের বৈশিষ্ট্যের নাম সেটিংসে বদলানো যায়, যেমন `image`।

রিফ্রেশ শুধু খালি ঘর পূরণ করে, তাই আপনার সম্পাদিত মান থেকে যায়। এটি `Progress`-এ মোট পর্বসংখ্যাও আপডেট করে আর নতুন সিজন ও পর্বের নাম যোগ করে।

## গোপনীয়তা ও নেটওয়ার্ক ব্যবহার

আপনার লাইব্রেরি সাধারণ নোট আর অফলাইনে কাজ করে। প্লাগইন তখনই অনলাইনে যায় যখন আপনি খোঁজেন, রিফ্রেশ করেন, সিঙ্ক করেন বা শেয়ার করেন; যখন লাইব্রেরির কোনো নোট খোলেন, প্রতি নোটে সর্বোচ্চ 5 মিনিটে একবার; আর আপডেট বা কী বদলের পর নতুন ঘর পূরণ করতে একবার। এতে টেলিমেট্রি, অ্যানালিটিক্স বা স্বয়ংক্রিয় আপডেট নেই। API কী প্লাগইনের স্থানীয় সেটিংসে থাকে আর শুধু নিজের পরিষেবায় যায়।

| হোস্ট | কখন | কী পাঠানো হয় |
| --- | --- | --- |
| `www.omdbapi.com` | সিনেমা ও সিরিজ খোঁজা | শিরোনাম বা IMDb id, OMDb কী |
| `openlibrary.org` | বই খোঁজা; বই যোগ বা খোলার সময় অধ্যায় খোঁজা | শিরোনাম ও লেখক, ISBN বা রচনার id |
| `covers.openlibrary.org` | বইয়ের প্রচ্ছদ | প্রচ্ছদের id |
| `www.googleapis.com` | বই খোঁজা | শিরোনাম, Google Books কী |
| `api.rawg.io` | গেম খোঁজা | শিরোনাম, RAWG কী |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | গেম খোঁজা ও প্রচ্ছদ | শিরোনাম বা Steam অ্যাপ id |
| `api.deezer.com` | গান খোঁজা | অ্যালবাম বা শিল্পী |
| `graphql.anilist.co` | অ্যানিমে খোঁজা; AniList সিঙ্ক | শিরোনাম; আপনার টোকেন, অগ্রগতি, অবস্থা ও স্কোর |
| `anilist.co` | আপনি **সংযুক্ত করুন** চাপেন | Client ID, আপনার ব্রাউজারে খোলে |
| `s4.anilist.co` | অ্যানিমের ব্যানার | CDN পাথ |
| `comicvine.gamespot.com` | কমিকস খোঁজা | শিরোনাম, Comic Vine কী |
| `v3-cinemeta.strem.io` | সিনেমা বা সিরিজ যোগ বা রিফ্রেশ করা | IMDb id |
| `images.metahub.space`, `episodes.metahub.space` | স্থিরচিত্র | IMDb id, সিজন ও পর্বের নম্বর |
| `api.themoviedb.org`, `image.tmdb.org` | TMDB কী সেট থাকলে সিনেমা বা সিরিজ যোগ বা রিফ্রেশ করা | IMDb id ও TMDB কী; ছবির পাথ |
| `i.ytimg.com` | ট্রেলারের স্থিরচিত্র | ভিডিও id |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | ট্রেলারসহ নোট খোলা | ভিডিও id |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | আপনি শেয়ার বোতাম চাপেন | ক্যাপশন: শিরোনাম, আপনার স্কোর, উৎসের লিংক। ছবি আপনার ডিভাইসেই থাকে |

## কমান্ড

| কমান্ড | কী করে |
| --- | --- |
| `লাইব্রেরি খুলুন` | “লাইব্রেরি” ট্যাব খোলে |
| `বিষয়বস্তু যোগ করুন` | উৎসে খুঁজে একটি নোট তৈরি করে |
| `আপনার লাইব্রেরিতে অনুসন্ধান করুন` | লাইব্রেরির একটি নোট খুঁজে খোলে |
| `বর্তমান নোটের মেটাডেটা রিফ্রেশ করুন` | সক্রিয় নোটের তথ্য আবার আনে |
| `সব নোটের মেটাডেটা রিফ্রেশ করুন` | লাইব্রেরির প্রতিটি নোটের তথ্য একে একে আবার আনে |
| `গ্রাফ লিংক পুনর্নির্মাণ করুন` | `Genre`, `Creator` আর `Cast`-কে লিংকে বদলায় |
| `ডুপ্লিকেট খুঁজুন এবং সরান` | একই URL-এর নোট দেখায় আর বাছাই করাগুলো মুছে দেয় |
| `বর্তমান নোট শেয়ার করুন` | শেয়ার কার্ড খোলে |
| `বর্তমান নোট AniList-এ পাঠান` | অগ্রগতি, অবস্থা আর স্কোর পাঠায় |
| `AniList থেকে অগ্রগতি আনুন` | আপনার AniList তালিকা থেকে নোট আপডেট করে |

## সহায়তা

বাগ জানান [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues)-এ আর আইডিয়া দিন [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions)-এ। প্লাগইনটি [MIT লাইসেন্স](../LICENSE)-এর অধীনে।

প্লাগইনটি কাজে লাগলে আপনি এটিকে সমর্থন করতে পারেন:

| | নেটওয়ার্ক | ঠিকানা |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
