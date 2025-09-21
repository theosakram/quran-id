// Mapping of English surah names to Indonesian translations
export const surahNamesIndonesian: Record<string, string> = {
  // Surah 1-10
  "The Opener": "Pembukaan",
  "The Cow": "Sapi Betina",
  "Family of Imran": "Keluarga Imran",
  "The Women": "Wanita",
  "The Table Spread": "Hidangan",
  "The Cattle": "Binatang Ternak",
  "The Heights": "Tempat Tinggi",
  "The Spoils of War": "Rampasan Perang",
  "The Repentance": "Taubat",
  Jonah: "Yunus",

  // Surah 11-20
  Hud: "Hud",
  Joseph: "Yusuf",
  "The Thunder": "Guruh",
  Abraham: "Ibrahim",
  "The Rocky Tract": "Hijr",
  "The Bee": "Lebah",
  "The Night Journey": "Perjalanan Malam",
  "The Cave": "Gua",
  Mary: "Maryam",
  "Ta-Ha": "Taha",

  // Surah 21-30
  "The Prophets": "Para Nabi",
  "The Pilgrimage": "Haji",
  "The Believers": "Orang-orang Mukmin",
  "The Light": "Cahaya",
  "The Criterion": "Pembeda",
  "The Poets": "Penyair",
  "The Ant": "Semut",
  "The Stories": "Kisah",
  "The Spider": "Laba-laba",
  "The Romans": "Rum",

  // Surah 31-40
  Luqman: "Luqman",
  "The Prostration": "Sajdah",
  "The Clans": "Golongan yang Bersekutu",
  Sheba: "Saba",
  Originator: "Pencipta",
  "Ya Sin": "Yasin",
  "Those Who Set The Ranks": "Berbaris",
  "The Letter Sad": "Sad",
  "The Troops": "Rombongan",
  "The Forgiver": "Yang Maha Pengampun",

  // Surah 41-50
  "Explained In Detail": "Yang Dijelaskan",
  "The Consultation": "Musyawarah",
  "The Ornaments of Gold": "Perhiasan",
  "The Smoke": "Kabut",
  "The Crouching": "Yang Berlutut",
  "The Wind-Curved Sandhills": "Bukit Pasir",
  Muhammad: "Muhammad",
  "The Victory": "Kemenangan",
  "The Rooms": "Kamar",
  "The Letter Qaf": "Qaf",

  // Surah 51-60
  "The Winnowing Winds": "Angin yang Menerbangkan",
  "The Mount": "Bukit Tursina",
  "The Star": "Bintang",
  "The Moon": "Bulan",
  "The Beneficent": "Yang Maha Pemurah",
  "The Inevitable": "Hari Kiamat",
  "The Iron": "Besi",
  "The Pleading Woman": "Wanita yang Berdebat",
  "The Exile": "Pengusiran",
  "She That Is To Be Examined": "Wanita yang Diuji",

  // Surah 61-70
  "The Ranks": "Barisan",
  "The Congregation": "Hari Jumat",
  "The Hypocrites": "Orang-orang Munafik",
  "The Mutual Disillusion": "Hari Dinampakkan Kesalahan",
  "The Divorce": "Talak",
  "The Prohibition": "Mengharamkan",
  "The Sovereignty": "Kerajaan",
  "The Pen": "Pena",
  "The Reality": "Hari Kiamat",
  "The Ascending Stairways": "Tempat Naik",

  // Surah 71-80
  Noah: "Nuh",
  "The Jinn": "Jin",
  "The Enshrouded One": "Orang yang Berselimut",
  "The Cloaked One": "Orang yang Berkemul",
  "The Resurrection": "Hari Kiamat",
  "The Man": "Manusia",
  "The Emissaries": "Malaikat yang Diutus",
  "The Tidings": "Berita Besar",
  "Those Who Drag Forth": "Malaikat yang Mencabut",
  "He Frowned": "Bermuka Masam",

  // Surah 81-90
  "The Overthrowing": "Menggulung",
  "The Cleaving": "Terbelah",
  "The Defrauding": "Orang-orang Curang",
  "The Splitting Open": "Terbelah",
  "The Mansions of Stars": "Buruj",
  "The Morning Star": "Bintang yang Menembus",
  "The Most High": "Yang Maha Tinggi",
  "The Overwhelming": "Hari Pembalasan",
  "The Dawn": "Fajar",
  "The City": "Negeri",

  // Surah 91-100
  "The Sun": "Matahari",
  "The Night": "Malam",
  "The Morning Hours": "Dhuha",
  "The Relief": "Lapang",
  "The Fig": "Buah Tin",
  "The Clot": "Segumpal Darah",
  "The Power": "Kemuliaan",
  "The Clear Proof": "Bukti yang Nyata",
  "The Earthquake": "Guncangan",
  "The Chargers": "Kuda Perang",

  // Surah 101-110
  "The Calamity": "Hari Kiamat",
  "The Rivalry In World Increase": "Bermegah-megahan",
  "The Declining Day": "Asar",
  "The Traducer": "Pengumpat",
  "The Elephant": "Gajah",
  "The Quraysh": "Quraisy",
  "The Small Kindnesses": "Barang Berguna",
  "The Abundance": "Nikmat yang Banyak",
  "The Disbelievers": "Orang-orang Kafir",
  "The Divine Support": "Pertolongan",

  // Surah 111-114
  "The Palm Fibre": "Sabut",
  "The Sincerity": "Ikhlas",
  "The Daybreak": "Waktu Subuh",
  Mankind: "Manusia",
};

/**
 * Get Indonesian translation for a surah name
 * @param englishName - The English name of the surah
 * @returns Indonesian translation or the original English name if not found
 */
export function getSurahNameInIndonesian(englishName: string): string {
  return surahNamesIndonesian[englishName] || englishName;
}

/**
 * Get translated surah name based on language
 * @param englishName - The English name of the surah
 * @param language - The target language ('id' for Indonesian, 'en' for English)
 * @returns Translated name or original English name
 */
export function getTranslatedSurahName(
  englishName: string,
  language: string,
): string {
  if (language === "id") {
    return getSurahNameInIndonesian(englishName);
  }
  return englishName;
}
