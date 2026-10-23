window.FORM_CONFIG = {
  "source": "bemineornot",
  "repo": "bemineornot_form",
  "product": "bemineornot",
  "sourceForm": "bemineornot.html",
  "context": "interactive scrapbook confession & love letter website · polaroid photo stack, timeline story gallery & interactive question screen",
  "motif": "💌",
  "media": "8 foto (1 cover scrapbook portrait + 2 foto pengirim portrait + 5 foto pasangan: 3 portrait & 2 landscape) + 1 file musik MP3",
  "theme": "bemineornot",
  "palette": [
    "#C5B7F0",
    "#F6EDAA",
    "#51475F",
    "#F3D2DE",
    "#EEE8F7",
    "#D6C9F3"
  ],
  "price": 20000,
  "sections": [
    {
      "id": "02",
      "title": "core identity & telegram chat destination",
      "fields": [
        {
          "key": "sender_name",
          "label": "nama pengirim / pembuat website (sender full name)",
          "placeholder": "default: Cassius Rosier",
          "long": false,
          "required": true
        },
        {
          "key": "receiver_name",
          "label": "nama penerima / pasangan (recipient full name)",
          "placeholder": "default: Isla Marceau",
          "long": false,
          "required": true
        },
        {
          "key": "telegram_target",
          "label": "link / username Telegram pengirim (tujuan chat setelah klik jawaban)",
          "placeholder": "default: https://t.me/huurns (atau @username kamu)",
          "long": false,
          "required": true
        },
        {
          "key": "bg_music_title",
          "label": "judul lagu background / file audio MP3",
          "placeholder": "default: assets/music.mp3 (lampirkan file audio di Telegram)",
          "long": false,
          "required": false
        }
      ]
    },
    {
      "id": "03",
      "title": "screen 0 — cover & scrapbook folder (sampul depan)",
      "fields": [
        {
          "key": "cover_eyebrow",
          "label": "top eyebrow label cover",
          "placeholder": "default: Just for you",
          "long": false,
          "required": false
        },
        {
          "key": "cover_title",
          "label": "judul headline utama cover",
          "placeholder": "default: Isla, there is something I want you to know.",
          "long": false,
          "required": false
        },
        {
          "key": "cover_subtext",
          "label": "paragraf pesan di bawah judul cover",
          "placeholder": "default: I have wanted to tell you this for a while. Every time I tried to find the right words I got a little nervous. So I made this for you. Take your time with it. I hope it makes you smile as much as you make me smile.",
          "long": true,
          "required": false
        },
        {
          "key": "cover_button",
          "label": "teks tombol buka surat (cover button)",
          "placeholder": "default: Open my letter",
          "long": false,
          "required": false
        },
        {
          "key": "folder_tab_name",
          "label": "nama tab pada folder scrapbook",
          "placeholder": "default: Feelings",
          "long": false,
          "required": false
        },
        {
          "key": "folder_stamp",
          "label": "teks stempel pada folder",
          "placeholder": "default: Made just for you",
          "long": false,
          "required": false
        },
        {
          "key": "folder_note_salutation",
          "label": "sapaan catatan di folder (folder note salutation)",
          "placeholder": "default: Dear Isla,",
          "long": false,
          "required": false
        },
        {
          "key": "folder_note_title",
          "label": "pesan catatan di folder (folder note text)",
          "placeholder": "default: Something I wanted to tell you.",
          "long": false,
          "required": false
        },
        {
          "key": "folder_from_label",
          "label": "label tanda tangan (signature label)",
          "placeholder": "default: From",
          "long": false,
          "required": false
        },
        {
          "key": "cover_photo_note",
          "label": "catatan foto 01 cover scrapbook (portrait)",
          "placeholder": "default: Foto cover portrait (lampirkan di chat Telegram)",
          "long": false,
          "required": false
        }
      ]
    },
    {
      "id": "04",
      "title": "screen 1 — the boy behind this letter (profil pengirim)",
      "fields": [
        {
          "key": "s1_label",
          "label": "top eyebrow label halaman pengirim",
          "placeholder": "default: The boy behind this letter",
          "long": false,
          "required": false
        },
        {
          "key": "s1_title",
          "label": "judul halaman profil pengirim",
          "placeholder": "default: This is me trying to tell you how I feel.",
          "long": false,
          "required": false
        },
        {
          "key": "s1_photo1_caption",
          "label": "caption foto polaroid 1 pengirim (frame caption)",
          "placeholder": "default: Soon to be your bf",
          "long": false,
          "required": false
        },
        {
          "key": "s1_photo1_story",
          "label": "cerita / narasi untuk foto 1 pengirim",
          "placeholder": "default: This is me looking way more relaxed than I actually am. I keep thinking about what to say to you. I have typed a message and deleted it more times than I want to admit. Somehow telling you this feels exciting and scary at the same time.",
          "long": true,
          "required": false
        },
        {
          "key": "s1_photo2_caption",
          "label": "caption foto polaroid 2 pengirim (frame caption)",
          "placeholder": "default: Your favourite boy, hopefully",
          "long": false,
          "required": false
        },
        {
          "key": "s1_photo2_story",
          "label": "cerita / narasi untuk foto 2 pengirim",
          "placeholder": "default: And this is still me. The boy who smiles at his phone when your name shows up. I am not great at pretending I do not care. I just needed a little courage to let you see how much I do.",
          "long": true,
          "required": false
        },
        {
          "key": "s1_button",
          "label": "teks tombol lanjut (continue button)",
          "placeholder": "default: Continue",
          "long": false,
          "required": false
        }
      ]
    },
    {
      "id": "05",
      "title": "screen 2 — how it started (catatan surat awal)",
      "fields": [
        {
          "key": "s2_label",
          "label": "top eyebrow label",
          "placeholder": "default: How it started",
          "long": false,
          "required": false
        },
        {
          "key": "s2_title",
          "label": "judul halaman catatan awal",
          "placeholder": "default: It started with a little admiration.",
          "long": false,
          "required": false
        },
        {
          "key": "s2_text",
          "label": "isi teks surat catatan awal (awal pertemuan)",
          "placeholder": "default: At first I just thought you were really pretty. Then I got to know you a little more. I noticed how easy it was to talk to you and how much I enjoyed hearing about your day. I started looking forward to our conversations. What felt like a small crush slowly became something I could not brush off. Let me tell you how I got here.",
          "long": true,
          "required": false
        },
        {
          "key": "s2_note",
          "label": "catatan kecil di bawah surat",
          "placeholder": "default: I want you to hear this from me.",
          "long": false,
          "required": false
        },
        {
          "key": "s2_button",
          "label": "teks tombol lanjut",
          "placeholder": "default: Continue",
          "long": false,
          "required": false
        }
      ]
    },
    {
      "id": "06",
      "title": "screen 3 — story gallery (moments 01 - 03)",
      "fields": [
        {
          "key": "g1_tag",
          "label": "momen 01: tag / badge label (foto portrait)",
          "placeholder": "default: At first I admired you",
          "long": false,
          "required": false
        },
        {
          "key": "g1_heading",
          "label": "momen 01: judul headline slide",
          "placeholder": "default: You caught my attention without even trying.",
          "long": false,
          "required": false
        },
        {
          "key": "g1_caption",
          "label": "momen 01: cerita / caption momen 1",
          "placeholder": "default: You are beautiful. That was the first thing I noticed. But it was not the only thing that made me want to know you. I liked the way you talked and how you could make a simple conversation feel fun. I started noticing the little things about you. The more I noticed the more I wanted to stay.",
          "long": true,
          "required": false
        },
        {
          "key": "g1_note",
          "label": "momen 01: stiker label pada foto (paper label)",
          "placeholder": "default: This is where it started.",
          "long": false,
          "required": false
        },
        {
          "key": "g2_tag",
          "label": "momen 02: tag / badge label (foto landscape)",
          "placeholder": "default: Then I had a crush",
          "long": false,
          "required": false
        },
        {
          "key": "g2_heading",
          "label": "momen 02: judul headline slide",
          "placeholder": "default: I started hoping every message was from you.",
          "long": false,
          "required": false
        },
        {
          "key": "g2_caption",
          "label": "momen 02: cerita / caption momen 2",
          "placeholder": "default: I knew I had a crush when talking to you became my favourite part of the day. I would check my phone hoping to see your name. I kept finding reasons to talk a little longer. You would say something small and I would still be smiling about it later. Honestly I was already way more into you than I let on.",
          "long": true,
          "required": false
        },
        {
          "key": "g2_bubble1",
          "label": "momen 02: bubble chat 1 (pesan melayang)",
          "placeholder": "default: Can we talk a little longer?",
          "long": false,
          "required": false
        },
        {
          "key": "g2_bubble2",
          "label": "momen 02: bubble chat 2 (pesan melayang)",
          "placeholder": "default: Goodnight always felt a little too soon.",
          "long": false,
          "required": false
        },
        {
          "key": "g3_tag",
          "label": "momen 03: tag / badge label (foto portrait)",
          "placeholder": "default: It became more than a crush",
          "long": false,
          "required": false
        },
        {
          "key": "g3_heading",
          "label": "momen 03: judul headline slide",
          "placeholder": "default: I wanted to know how you were really doing.",
          "long": false,
          "required": false
        },
        {
          "key": "g3_caption",
          "label": "momen 03: cerita / caption momen 3",
          "placeholder": "default: After a while I wanted more than the fun conversations. I wanted to know how your day really went. I cared when you were tired or upset. I wanted to listen even when you did not know how to explain what you felt. You did not have to be cheerful to make me want to be there. I liked you just as much on your quiet days.",
          "long": true,
          "required": false
        },
        {
          "key": "g3_note",
          "label": "momen 03: tape strip note pada foto",
          "placeholder": "default: You can be yourself with me.",
          "long": false,
          "required": false
        }
      ]
    },
    {
      "id": "07",
      "title": "screen 3 — story gallery (moments 04 - 05 & navigasi)",
      "fields": [
        {
          "key": "g4_tag",
          "label": "momen 04: tag / badge label (foto landscape)",
          "placeholder": "default: Then I fell in love",
          "long": false,
          "required": false
        },
        {
          "key": "g4_heading",
          "label": "momen 04: judul headline slide",
          "placeholder": "default: I wanted a real life with you.",
          "long": false,
          "required": false
        },
        {
          "key": "g4_caption",
          "label": "momen 04: cerita / caption momen 4",
          "placeholder": "default: That was when I realised I was falling in love with you. It was no longer just the excitement of seeing your name on my phone. I wanted to be someone you could count on. I pictured sharing meals and hearing about your day before we went to sleep. Nothing had to be perfect or exciting. I just wanted to be there with you.",
          "long": true,
          "required": false
        },
        {
          "key": "g4_note",
          "label": "momen 04: diary sticker note pada foto",
          "placeholder": "default: Even a normal day sounds better with you.",
          "long": false,
          "required": false
        },
        {
          "key": "g5_tag",
          "label": "momen 05: tag / badge label (foto portrait)",
          "placeholder": "default: So here is the truth",
          "long": false,
          "required": false
        },
        {
          "key": "g5_heading",
          "label": "momen 05: judul headline slide",
          "placeholder": "default: I love you. I want you to know that.",
          "long": false,
          "required": false
        },
        {
          "key": "g5_caption",
          "label": "momen 05: cerita / caption momen 5",
          "placeholder": "default: I tried to keep this casual for a while. But I cannot keep acting like you are just someone I enjoy talking to. I miss you when we do not talk. I care about you more than I know how to hide. I love you and I want the chance to show you that. I do not want to keep wondering what we could be. I want to find out with you.",
          "long": true,
          "required": false
        },
        {
          "key": "g5_note",
          "label": "momen 05: closing sticker note pada foto",
          "placeholder": "default: No more pretending it is just a crush.",
          "long": false,
          "required": false
        },
        {
          "key": "gallery_next_btn",
          "label": "teks tombol next di galeri",
          "placeholder": "default: Next",
          "long": false,
          "required": false
        },
        {
          "key": "gallery_ready_btn",
          "label": "teks tombol slide terakhir galeri",
          "placeholder": "default: Let me tell you",
          "long": false,
          "required": false
        }
      ]
    },
    {
      "id": "08",
      "title": "screen 4 — typewriter confession letter (surat ungkapan rasa)",
      "fields": [
        {
          "key": "confession_label",
          "label": "top eyebrow label surat",
          "placeholder": "default: What I want to say",
          "long": false,
          "required": false
        },
        {
          "key": "confession_title",
          "label": "judul surat ungkapan",
          "placeholder": "default: My letter to you",
          "long": false,
          "required": false
        },
        {
          "key": "confession_text",
          "label": "isi surat cinta typewriter (surat panjang)",
          "placeholder": "default: Isla, I love you. I started by admiring you. Then I had a crush on you. Somewhere along the way I began wanting more than another conversation. I wanted a real relationship with you.\n\nI want to be the person you call after a good day and the person you can lean on after a hard one. I want to learn more about you and make time for you. I want you to feel cared for without having to guess how I feel.\n\nI cannot promise to get everything right. But I can promise to be honest and to keep showing up. I want to love you through the normal days too. I have wanted to be yours for a while. Now I am finally saying it.",
          "long": true,
          "required": false
        },
        {
          "key": "confession_button",
          "label": "teks tombol setelah surat selesai diketik",
          "placeholder": "default: Continue",
          "long": false,
          "required": false
        }
      ]
    },
    {
      "id": "09",
      "title": "screen 5 — final question, buttons & answers (pertanyaan & respon)",
      "fields": [
        {
          "key": "q_badge",
          "label": "badge / label di atas amplop",
          "placeholder": "default: To Isla with all my heart",
          "long": false,
          "required": false
        },
        {
          "key": "q_lead",
          "label": "kalimat sapaan pembuka (lead-in)",
          "placeholder": "default: So, Isla.",
          "long": false,
          "required": false
        },
        {
          "key": "q_title",
          "label": "pertanyaan utama (headline nembak)",
          "placeholder": "default: Can I be your boyfriend?",
          "long": false,
          "required": false
        },
        {
          "key": "q_prelude",
          "label": "penjelasan / pesan di bawah pertanyaan",
          "placeholder": "default: I want to turn these feelings into something real with you. We can take our time. I just want the chance to love you openly and see what we can build together.",
          "long": true,
          "required": false
        },
        {
          "key": "q_left_note",
          "label": "stiker floating catatan kiri",
          "placeholder": "default: I keep hoping it could be us.",
          "long": false,
          "required": false
        },
        {
          "key": "q_right_note",
          "label": "stiker floating catatan kanan",
          "placeholder": "default: I want to be yours.",
          "long": false,
          "required": false
        },
        {
          "key": "q_yes_btn",
          "label": "teks tombol jawaban YES",
          "placeholder": "default: Yes, you can",
          "long": false,
          "required": false
        },
        {
          "key": "q_no_btn",
          "label": "teks tombol jawaban NO",
          "placeholder": "default: No, I'm sorry",
          "long": false,
          "required": false
        },
        {
          "key": "q_dodge_text",
          "label": "teks saat tombol NO kabur / menghindar",
          "placeholder": "default: Let me be a little nervous for a second.",
          "long": false,
          "required": false
        },
        {
          "key": "ans_yes_copy",
          "label": "teks yang otomatis tersalin saat pasangan klik YES",
          "placeholder": "default: Yes, you can be my boyfriend. Let's take this slowly and see where we go together.",
          "long": true,
          "required": false
        },
        {
          "key": "ans_no_copy",
          "label": "teks yang otomatis tersalin saat pasangan klik NO",
          "placeholder": "default: Thank you for telling me how you feel. I do not feel the same way. I hope we can still be kind to each other.",
          "long": true,
          "required": false
        }
      ]
    }
  ]
};
