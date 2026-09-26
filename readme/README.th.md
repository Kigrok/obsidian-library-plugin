> [EN](../README.md) | [RU](README.ru.md) | [UK](README.uk.md) | [DE](README.de.md) | [ES](README.es.md) | [FR](README.fr.md) | [ZH](README.zh.md) | [JA](README.ja.md) | [KO](README.ko.md) | [AR](README.ar.md)

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
  ภาพยนตร์ ซีรีส์ หนังสือ อนิเมะ การ์ตูน เกม และเพลง เป็นโน้ตใน Obsidian แสดงเป็นแกลเลอรีการ์ดหน้าปก
  <br />
  <a href="https://community.obsidian.md/plugins/library">ไดเรกทอรีปลั๊กอินของ Obsidian</a>
</p>

## ฟีเจอร์

- ค้นหาชื่อเรื่องแล้วได้โน้ตที่มีโปสเตอร์ ปี ประเภท ผู้สร้าง นักแสดง และคะแนนครบ
- ดูคลังเป็นการ์ดหน้าปก จัดกลุ่มตามหมวดหมู่ และเรียงตามชื่อ ปี คะแนน หรือวันที่
- ติ๊กตอนของซีรีส์หรือบทของหนังสือและให้คะแนนแต่ละรายการ `Progress` และ `My Rating` คำนวณจากสิ่งเหล่านี้
- โน้ตภาพยนตร์และซีรีส์แสดงตัวอย่าง ภาพนิ่ง ความยาว และรายการซีซัน
- ประเภท ผู้สร้าง และนักแสดงเป็นลิงก์ โน้ตของพวกเขาจึงรวบรวมทุกชื่อเรื่องไว้ในแบ็คลิงค์และมุมมองกราฟ
- แผงสถิติแสดงอันดับที่คุณเลือกและเวลาดูทั้งหมดของคุณ
- แชร์ชื่อเรื่องเป็นรูปการ์ดไปยัง X, Telegram, Reddit และอีกหกเครือข่าย
- ซิงก์ความคืบหน้าอนิเมะกับ AniList
- อินเทอร์เฟซแปลเป็นทุกภาษาที่ Obsidian รองรับ และ README นี้มี [30 ภาษา](./)

## เริ่มต้นอย่างรวดเร็ว

1. ติดตั้ง **Library** จาก การตั้งค่า → ปลั๊กอินโดยชุมชน → เลือกดู หรือจาก [GitHub Releases](https://github.com/Kigrok/obsidian-library-plugin/releases)
2. ใน การตั้งค่า → Library เพิ่มหมวดหมู่สำหรับสื่อแต่ละประเภท: ภาพยนตร์, ซีรีส์, หนังสือ, การ์ตูน, เกม, ดนตรี, อนิเมะ, ด้วยตนเอง
3. ใส่คีย์ API ที่แหล่งข้อมูลของคุณต้องใช้ (ดูด้านล่าง)
4. เปิดแท็บ "คลัง" จากริบบอน กด **+** เลือกหมวดหมู่ แล้วค้นหาชื่อเรื่อง ชื่อเรื่องที่มีอยู่ในคลังแล้วจะเปิดโน้ตเดิม

ค่า `Type` ของหมวดหมู่ (เช่น `Movie`) กำหนดว่าโน้ตใดอยู่ในหมวดนั้น และโฟลเดอร์ของหมวดกำหนดว่าโน้ตใหม่จะไปอยู่ที่ใด ทั้งสองอยู่ใต้ **ขั้นสูง** ในการตั้งค่าของหมวดหมู่

## แหล่งข้อมูล

| หมวดหมู่ | แหล่งข้อมูล | คีย์ |
| --- | --- | --- |
| ภาพยนตร์, ซีรีส์ | OMDb | [คีย์ฟรี](https://www.omdbapi.com/apikey.aspx) |
| หนังสือ | Google Books + Open Library | [คีย์ Google Books](https://console.cloud.google.com/apis/library/books.googleapis.com) (ไม่บังคับ) |
| เกม | RAWG + Steam | [คีย์ RAWG ฟรี](https://rawg.io/apidocs); Steam ไม่ต้องใช้ |
| เพลง | Deezer | ไม่ต้องใช้ |
| อนิเมะ | AniList | ไม่ต้องใช้ |
| การ์ตูน | Comic Vine | [คีย์ฟรี](https://comicvine.gamespot.com/api/) |
| อย่างอื่นทั้งหมด | กรอกเอง: คุณกรอกช่องต่าง ๆ เอง | ไม่ต้องใช้ |

ตัวอย่าง ภาพนิ่ง ความยาว และรายการซีซันมาจาก Cinemeta โดยไม่ต้องใช้คีย์ [คีย์ TMDB](https://www.themoviedb.org/settings/api) เพิ่มคะแนนซีซันและภาพนิ่งมากขึ้น

## ความคืบหน้าและคะแนน

ส่วนหัวของโน้ตซีรีส์แสดงรายการซีซัน และแต่ละซีซันกางออกเป็นตอน พร้อมชื่อตอนหากแหล่งข้อมูลมี ติ๊กตอนหรือทั้งซีซันว่าดูแล้วและให้คะแนน 1 ถึง 10 `Progress` นับตอนที่ติ๊ก คะแนนของซีซันคือค่าเฉลี่ยของตอนที่ให้คะแนน และ `My Rating` คือค่าเฉลี่ยของซีซันที่ให้คะแนน ซีซันที่ไม่มีตอนใดได้คะแนนจะให้คะแนนของตัวเองได้

อนิเมะทำงานแบบเดียวกัน เป็นซีซันเดียวที่ไม่มีชื่อตอน

บทของหนังสือมาจากสารบัญของฉบับพิมพ์ใดฉบับหนึ่งใน Open Library หากไม่พบสารบัญ **เพิ่มบท** ในส่วนหัวของโน้ตจะรับจำนวนบทหรือชื่อบทบรรทัดละหนึ่งชื่อ จากนั้น `Progress` จะนับบทแทนหน้า และหน้าที่อ่านแล้วจะแปลงเป็นสัดส่วนเดียวกันของบท

โน้ตจากเวอร์ชันเก่ายังคงความคืบหน้าไว้ ตราบใดที่คุณยังไม่ติ๊กอะไร ตอนแรก ๆ จนถึงจำนวนใน `Progress` จะแสดงว่าดูแล้ว

## สถิติ

แผงด้านบนของแท็บ "คลัง" แสดงคอลัมน์ที่คุณเลือกใน การตั้งค่า → Library → สถิติ: สามชื่อเรื่องคะแนนสูงสุดของหมวดหมู่ สามค่าที่พบบ่อยที่สุดของคุณสมบัติ (ประเภท นักแสดง หรืออื่น ๆ) และจำนวนชั่วโมงที่ใช้กับภาพยนตร์ ซีรีส์ และอนิเมะ ใต้แผนภูมิจะมีการเปรียบเทียบวันละหนึ่งข้อ เช่น อะพอลโล 11 จะบินไปดวงจันทร์และกลับได้ 8 ครั้ง

## ลิงก์ในกราฟ

`Genre`, `Creator` และ `Cast` เก็บลิงก์อย่าง `[[Christopher Nolan]]` โน้ตของประเภทหรือบุคคลจึงแสดงชื่อเรื่องในแบ็คลิงค์ ชื่อที่พิมพ์เองจะกลายเป็นลิงก์เมื่อโน้ตเปลี่ยน และ `สร้างลิงก์กราฟใหม่` แปลงทั้งคลัง

## การแชร์และ AniList

**แชร์** ในส่วนหัวของโน้ตวาดการ์ดที่มีโปสเตอร์ ชื่อเรื่อง ปี ประเภท นักแสดง คะแนน และคะแนนของคุณ บนเดสก์ท็อป รูปจะไปที่คลิปบอร์ดและเครือข่ายที่คุณเลือกจะเปิดพร้อมคำบรรยาย คุณแค่วางรูปลงในโพสต์ บนมือถือ รูปจะไปที่เมนูแชร์ของระบบ คุณยังคัดลอกรูปหรือคำบรรยาย หรือบันทึกรูปไว้ได้

หากต้องการซิงก์อนิเมะ ให้ลงทะเบียนไคลเอนต์ที่ [anilist.co/settings/developer](https://anilist.co/settings/developer) พร้อม redirect URL `https://anilist.co/api/v2/oauth/pin` วาง Client ID ใน การตั้งค่า → Library → การซิงก์ AniList คลิก **เชื่อมต่อ** แล้ววางโทเค็นที่ AniList แสดง `ส่งโน้ตปัจจุบันไปยัง AniList` ส่งความคืบหน้า สถานะ และคะแนน `ดึงความคืบหน้าจาก AniList` อัปเดตโน้ตของคุณ ไม่เคยถอยความคืบหน้า และไม่แตะ `My Rating` เฉพาะโน้ตที่มี `Source: anilist` เท่านั้นที่ซิงก์

## Frontmatter

การ์ดแต่ละใบคือโน้ต และทุกอย่างที่ปลั๊กอินรู้เกี่ยวกับมันอยู่ใน frontmatter:

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
      # ...อีก 7 ตอน
Progress: 8/42
Complete: false
Date: 01.03.2026
Source: omdb
Source ID: tt4574334
---
```

สำหรับซีรีส์ `Runtime` คือความยาวของหนึ่งตอน หนังสือมี `ISBN` เพิ่ม และเก็บบทไว้ใน `Chapters` ด้วยฟิลด์เดียวกัน `title`, `watched` และ `my_rating` อนิเมะมี `Rating AniList` และ `Status` เปลี่ยนชื่อคุณสมบัติของหน้าปกได้ในการตั้งค่า เช่น เป็น `image`

การรีเฟรชเติมเฉพาะฟิลด์ว่าง ค่าที่คุณแก้จึงยังอยู่ และยังอัปเดตจำนวนตอนทั้งหมดใน `Progress` และเพิ่มซีซันและชื่อตอนใหม่

## ความเป็นส่วนตัวและการใช้เครือข่าย

คลังของคุณเป็นโน้ตธรรมดาและใช้งานออฟไลน์ได้ ปลั๊กอินจะออนไลน์เมื่อคุณค้นหา รีเฟรช ซิงก์ หรือแชร์ เมื่อคุณเปิดโน้ตในคลัง (ไม่เกินทุก 5 นาทีต่อโน้ต) และหนึ่งครั้งหลังอัปเดตหรือเปลี่ยนคีย์ เพื่อเติมฟิลด์ใหม่ ไม่มีการเก็บข้อมูลการใช้งาน ไม่มีการวิเคราะห์ และไม่มีการอัปเดตตัวเอง คีย์ API อยู่ในการตั้งค่าในเครื่องของปลั๊กอินและส่งไปยังบริการของตัวเองเท่านั้น

| โฮสต์ | เมื่อใด | สิ่งที่ส่ง |
| --- | --- | --- |
| `www.omdbapi.com` | ค้นหาภาพยนตร์และซีรีส์ | ชื่อเรื่องหรือ IMDb id, คีย์ OMDb |
| `openlibrary.org` | ค้นหาหนังสือ; ค้นหาบทเมื่อเพิ่มหรือเปิดหนังสือ | ชื่อเรื่องและผู้แต่ง, ISBN หรือ id ของผลงาน |
| `covers.openlibrary.org` | ปกหนังสือ | id ของปก |
| `www.googleapis.com` | ค้นหาหนังสือ | ชื่อเรื่อง, คีย์ Google Books |
| `api.rawg.io` | ค้นหาเกม | ชื่อเรื่อง, คีย์ RAWG |
| `store.steampowered.com`, `cdn.cloudflare.steamstatic.com` | ค้นหาเกมและปก | ชื่อเรื่องหรือ id แอป Steam |
| `api.deezer.com` | ค้นหาเพลง | อัลบั้มหรือศิลปิน |
| `graphql.anilist.co` | ค้นหาอนิเมะ; ซิงก์ AniList | ชื่อเรื่อง; โทเค็นของคุณ ความคืบหน้า สถานะ และคะแนน |
| `anilist.co` | คุณคลิก **เชื่อมต่อ** | Client ID เปิดในเบราว์เซอร์ของคุณ |
| `s4.anilist.co` | แบนเนอร์อนิเมะ | พาธ CDN |
| `comicvine.gamespot.com` | ค้นหาการ์ตูน | ชื่อเรื่อง, คีย์ Comic Vine |
| `v3-cinemeta.strem.io` | เพิ่มหรือรีเฟรชภาพยนตร์หรือซีรีส์ | IMDb id |
| `images.metahub.space`, `episodes.metahub.space` | ภาพนิ่ง | IMDb id, หมายเลขซีซันและตอน |
| `api.themoviedb.org`, `image.tmdb.org` | เพิ่มหรือรีเฟรชภาพยนตร์หรือซีรีส์ เมื่อตั้งคีย์ TMDB ไว้ | IMDb id และคีย์ TMDB; พาธรูปภาพ |
| `i.ytimg.com` | ภาพนิ่งจากตัวอย่าง | id วิดีโอ |
| `www.youtube.com`, `www.youtube-nocookie.com`, `player.vimeo.com`, `www.dailymotion.com` | เปิดโน้ตที่มีตัวอย่าง | id วิดีโอ |
| `twitter.com`, `t.me`, `wa.me`, `www.reddit.com`, `www.facebook.com`, `www.linkedin.com`, `vk.com`, `bsky.app`, `www.pinterest.com` | คุณคลิกปุ่มแชร์ | คำบรรยาย: ชื่อเรื่อง คะแนนของคุณ ลิงก์แหล่งที่มา รูปจะอยู่ในอุปกรณ์ของคุณ |

## คำสั่ง

| คำสั่ง | ทำอะไร |
| --- | --- |
| `เปิดคลัง` | เปิดแท็บ "คลัง" |
| `เพิ่มเนื้อหา` | ค้นหาในแหล่งข้อมูลและสร้างโน้ต |
| `ค้นหาในคลังของคุณ` | ค้นหาและเปิดโน้ตในคลัง |
| `รีเฟรชข้อมูลเมตาสำหรับหมายเหตุปัจจุบัน` | ดึงข้อมูลของโน้ตที่เปิดอยู่ใหม่ |
| `รีเฟรชข้อมูลเมตาสำหรับหมายเหตุทั้งหมด` | ดึงข้อมูลของทุกโน้ตในคลังใหม่ทีละโน้ต |
| `สร้างลิงก์กราฟใหม่` | เปลี่ยน `Genre`, `Creator` และ `Cast` เป็นลิงก์ |
| `ค้นหาและลบรายการซ้ำ` | แสดงโน้ตที่มี URL เดียวกันและลบรายการที่เลือก |
| `แชร์โน้ตปัจจุบัน` | เปิดการ์ดสำหรับแชร์ |
| `ส่งโน้ตปัจจุบันไปยัง AniList` | ส่งความคืบหน้า สถานะ และคะแนน |
| `ดึงความคืบหน้าจาก AniList` | อัปเดตโน้ตจากรายการ AniList ของคุณ |

## การสนับสนุน

แจ้งบั๊กได้ที่ [Issues](https://github.com/Kigrok/obsidian-library-plugin/issues) และเสนอไอเดียที่ [Discussions](https://github.com/Kigrok/obsidian-library-plugin/discussions) ปลั๊กอินนี้อยู่ภายใต้ [สัญญาอนุญาต MIT](../LICENSE)

หากปลั๊กอินนี้มีประโยชน์กับคุณ คุณสามารถสนับสนุนได้:

| | เครือข่าย | ที่อยู่ |
| --- | --- | --- |
| <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white" alt="EVM"> | **EVM** | `0xf9B4807E107f6f8Db79D86aCef6072A31d570201` |
| <img src="https://img.shields.io/badge/Sui-4DA2FF?style=flat&logo=sui&logoColor=white" alt="Sui"> | **Sui** | `0x1d6989810ee7e55d43f65398253b02462b921e9ce8ad626b542929f02c3d3e9a` |
| <img src="https://img.shields.io/badge/Solana-9945FF?style=flat&logo=solana&logoColor=white" alt="Sol"> | **Sol** | `2jmrmQrLVeUDFgHzSkHvHKBrmRJXes5X8h3GHXxrLaX6` |
| <img src="https://img.shields.io/badge/Bitcoin-F7931A?style=flat&logo=bitcoin&logoColor=white" alt="BTC"> | **BTC** | `bc1q4pdlj35uev8r0rgncpmn999n3jvj472pppds6r` |
| <img src="https://img.shields.io/badge/TON-0098EA?style=flat&logo=ton&logoColor=white" alt="TON"> | **TON** | `UQCphscY14j0AiRY1lGPciQjd9_XcRbUDyPLDxG4O1unEpgM` |
| <img src="https://img.shields.io/badge/Tron-EB0029?style=flat&logo=tron&logoColor=white" alt="Tron"> | **Tron** | `TYhmDLfx7aGHL1ikmNN3t72oGB3DjBjydR` |
