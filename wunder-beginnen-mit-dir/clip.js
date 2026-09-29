
'use strict';
const original=[
  {
    "t": 2.89,
    "end": 5.34,
    "text": "Ein leiser Traum, ein neuer Tag.",
    "words": [
      {
        "text": "Ein",
        "start": 2.89,
        "end": 3.1
      },
      {
        "text": "leiser",
        "start": 3.1,
        "end": 3.56
      },
      {
        "text": "Traum,",
        "start": 3.56,
        "end": 4.14
      },
      {
        "text": "ein",
        "start": 4.22,
        "end": 4.4
      },
      {
        "text": "neuer",
        "start": 4.4,
        "end": 4.8
      },
      {
        "text": "Tag.",
        "start": 4.8,
        "end": 5.34
      }
    ]
  },
  {
    "t": 7.52,
    "end": 10.58,
    "text": "Was tief in dir verborgen lag.",
    "words": [
      {
        "text": "Was",
        "start": 7.52,
        "end": 7.72
      },
      {
        "text": "tief",
        "start": 7.72,
        "end": 8.36
      },
      {
        "text": "in",
        "start": 8.36,
        "end": 8.66
      },
      {
        "text": "dir",
        "start": 8.66,
        "end": 8.88
      },
      {
        "text": "verborgen",
        "start": 8.88,
        "end": 9.88
      },
      {
        "text": "lag.",
        "start": 9.88,
        "end": 10.58
      }
    ]
  },
  {
    "t": 12.78,
    "end": 15.04,
    "text": "Goldenes Licht fällt in den Raum,",
    "words": [
      {
        "text": "Goldenes",
        "start": 12.78,
        "end": 13.42
      },
      {
        "text": "Licht",
        "start": 13.42,
        "end": 13.88
      },
      {
        "text": "fällt",
        "start": 13.88,
        "end": 14.22
      },
      {
        "text": "in",
        "start": 14.22,
        "end": 14.5
      },
      {
        "text": "den",
        "start": 14.5,
        "end": 14.68
      },
      {
        "text": "Raum,",
        "start": 14.68,
        "end": 15.04
      }
    ]
  },
  {
    "t": 15.36,
    "end": 17.62,
    "text": "Du hältst ihn fest, den einen Traum.",
    "words": [
      {
        "text": "Du",
        "start": 15.36,
        "end": 15.48
      },
      {
        "text": "hältst",
        "start": 15.48,
        "end": 15.92
      },
      {
        "text": "ihn",
        "start": 15.92,
        "end": 16.02
      },
      {
        "text": "fest,",
        "start": 16.02,
        "end": 16.36
      },
      {
        "text": "den",
        "start": 16.36,
        "end": 16.8
      },
      {
        "text": "einen",
        "start": 16.8,
        "end": 17.1
      },
      {
        "text": "Traum.",
        "start": 17.1,
        "end": 17.62
      }
    ]
  },
  {
    "t": 17.78,
    "end": 20.16,
    "text": "So lange hat er dich begleitet,",
    "words": [
      {
        "text": "So",
        "start": 17.78,
        "end": 17.934
      },
      {
        "text": "lange",
        "start": 17.934,
        "end": 18.32
      },
      {
        "text": "hat",
        "start": 18.32,
        "end": 18.76
      },
      {
        "text": "er",
        "start": 18.76,
        "end": 19.04
      },
      {
        "text": "dich",
        "start": 19.04,
        "end": 19.36
      },
      {
        "text": "begleitet,",
        "start": 19.36,
        "end": 20.16
      }
    ]
  },
  {
    "t": 20.3,
    "end": 22.66,
    "text": "Bis sich dein Blick nach vorne weitet.",
    "words": [
      {
        "text": "Bis",
        "start": 20.3,
        "end": 20.52
      },
      {
        "text": "sich",
        "start": 20.52,
        "end": 20.68
      },
      {
        "text": "dein",
        "start": 20.68,
        "end": 20.88
      },
      {
        "text": "Blick",
        "start": 20.88,
        "end": 21.18
      },
      {
        "text": "nach",
        "start": 21.18,
        "end": 21.48
      },
      {
        "text": "vorne",
        "start": 21.48,
        "end": 22.08
      },
      {
        "text": "weitet.",
        "start": 22.08,
        "end": 22.66
      }
    ]
  },
  {
    "t": 22.86,
    "end": 25.0,
    "text": "Du musst nicht wissen, wie es geht,",
    "words": [
      {
        "text": "Du",
        "start": 22.86,
        "end": 22.96
      },
      {
        "text": "musst",
        "start": 22.96,
        "end": 23.16
      },
      {
        "text": "nicht",
        "start": 23.16,
        "end": 23.36
      },
      {
        "text": "wissen,",
        "start": 23.36,
        "end": 23.92
      },
      {
        "text": "wie",
        "start": 24.04,
        "end": 24.42
      },
      {
        "text": "es",
        "start": 24.42,
        "end": 24.66
      },
      {
        "text": "geht,",
        "start": 24.66,
        "end": 25.0
      }
    ]
  },
  {
    "t": 25.22,
    "end": 27.68,
    "text": "Wenn sich der Wind auf einmal dreht.",
    "words": [
      {
        "text": "Wenn",
        "start": 25.22,
        "end": 25.44
      },
      {
        "text": "sich",
        "start": 25.44,
        "end": 25.6
      },
      {
        "text": "der",
        "start": 25.6,
        "end": 25.84
      },
      {
        "text": "Wind",
        "start": 25.84,
        "end": 26.28
      },
      {
        "text": "auf",
        "start": 26.28,
        "end": 26.62
      },
      {
        "text": "einmal",
        "start": 26.62,
        "end": 27.12
      },
      {
        "text": "dreht.",
        "start": 27.12,
        "end": 27.68
      }
    ]
  },
  {
    "t": 27.8,
    "end": 29.98,
    "text": "Mach einen Schritt, so klein er scheint,",
    "words": [
      {
        "text": "Mach",
        "start": 27.8,
        "end": 27.96
      },
      {
        "text": "einen",
        "start": 27.96,
        "end": 28.24
      },
      {
        "text": "Schritt,",
        "start": 28.24,
        "end": 28.54
      },
      {
        "text": "so",
        "start": 28.54,
        "end": 28.88
      },
      {
        "text": "klein",
        "start": 28.88,
        "end": 29.34
      },
      {
        "text": "er",
        "start": 29.34,
        "end": 29.468
      },
      {
        "text": "scheint,",
        "start": 29.468,
        "end": 29.98
      }
    ]
  },
  {
    "t": 29.98,
    "end": 32.42,
    "text": "Du gehst ihn heute nicht allein.",
    "words": [
      {
        "text": "Du",
        "start": 29.98,
        "end": 30.26
      },
      {
        "text": "gehst",
        "start": 30.26,
        "end": 30.6
      },
      {
        "text": "ihn",
        "start": 30.6,
        "end": 30.8
      },
      {
        "text": "heute",
        "start": 30.8,
        "end": 31.32
      },
      {
        "text": "nicht",
        "start": 31.32,
        "end": 31.84
      },
      {
        "text": "allein.",
        "start": 31.84,
        "end": 32.42
      }
    ]
  },
  {
    "t": 32.42,
    "end": 34.82,
    "text": "Du brauchst kein Zeichen, keinen Plan.",
    "words": [
      {
        "text": "Du",
        "start": 32.42,
        "end": 32.76
      },
      {
        "text": "brauchst",
        "start": 32.76,
        "end": 33.2
      },
      {
        "text": "kein",
        "start": 33.2,
        "end": 33.38
      },
      {
        "text": "Zeichen,",
        "start": 33.38,
        "end": 33.92
      },
      {
        "text": "keinen",
        "start": 33.92,
        "end": 34.38
      },
      {
        "text": "Plan.",
        "start": 34.38,
        "end": 34.82
      }
    ]
  },
  {
    "t": 34.82,
    "end": 37.34,
    "text": "Fang heute mit dem Träumen an.",
    "words": [
      {
        "text": "Fang",
        "start": 34.82,
        "end": 35.2
      },
      {
        "text": "heute",
        "start": 35.2,
        "end": 35.72
      },
      {
        "text": "mit",
        "start": 35.72,
        "end": 36.18
      },
      {
        "text": "dem",
        "start": 36.18,
        "end": 36.42
      },
      {
        "text": "Träumen",
        "start": 36.42,
        "end": 37.02
      },
      {
        "text": "an.",
        "start": 37.02,
        "end": 37.34
      }
    ]
  },
  {
    "t": 37.34,
    "end": 39.92,
    "text": "Aus einem Funken wird ein Licht,",
    "words": [
      {
        "text": "Aus",
        "start": 37.34,
        "end": 37.76
      },
      {
        "text": "einem",
        "start": 37.76,
        "end": 38.14
      },
      {
        "text": "Funken",
        "start": 38.14,
        "end": 38.78
      },
      {
        "text": "wird",
        "start": 38.78,
        "end": 39.24
      },
      {
        "text": "ein",
        "start": 39.24,
        "end": 39.54
      },
      {
        "text": "Licht,",
        "start": 39.54,
        "end": 39.92
      }
    ]
  },
  {
    "t": 39.92,
    "end": 42.54,
    "text": "Das leise durch die Zweifel bricht.",
    "words": [
      {
        "text": "Das",
        "start": 39.92,
        "end": 40.2
      },
      {
        "text": "leise",
        "start": 40.2,
        "end": 40.7
      },
      {
        "text": "durch",
        "start": 40.7,
        "end": 41.0
      },
      {
        "text": "die",
        "start": 41.0,
        "end": 41.36
      },
      {
        "text": "Zweifel",
        "start": 41.36,
        "end": 42.02
      },
      {
        "text": "bricht.",
        "start": 42.02,
        "end": 42.54
      }
    ]
  },
  {
    "t": 43.3,
    "end": 44.9,
    "text": "Deine Magie,",
    "words": [
      {
        "text": "Deine",
        "start": 43.3,
        "end": 43.82
      },
      {
        "text": "Magie,",
        "start": 43.82,
        "end": 44.9
      }
    ]
  },
  {
    "t": 45.29,
    "end": 48.04,
    "text": "Sie fängt mit einem Herzschlag an.",
    "words": [
      {
        "text": "Sie",
        "start": 45.29,
        "end": 45.72
      },
      {
        "text": "fängt",
        "start": 45.72,
        "end": 46.08
      },
      {
        "text": "mit",
        "start": 46.08,
        "end": 46.4
      },
      {
        "text": "einem",
        "start": 46.4,
        "end": 47.04
      },
      {
        "text": "Herzschlag",
        "start": 47.04,
        "end": 47.68
      },
      {
        "text": "an.",
        "start": 47.68,
        "end": 48.04
      }
    ]
  },
  {
    "t": 48.04,
    "end": 49.72,
    "text": "Deine Magie,",
    "words": [
      {
        "text": "Deine",
        "start": 48.04,
        "end": 48.74
      },
      {
        "text": "Magie,",
        "start": 48.74,
        "end": 49.72
      }
    ]
  },
  {
    "t": 49.72,
    "end": 52.32,
    "text": "Zeigt dir, was alles werden kann.",
    "words": [
      {
        "text": "Zeigt",
        "start": 49.72,
        "end": 50.18
      },
      {
        "text": "dir,",
        "start": 50.18,
        "end": 50.42
      },
      {
        "text": "was",
        "start": 50.54,
        "end": 50.76
      },
      {
        "text": "alles",
        "start": 50.76,
        "end": 51.22
      },
      {
        "text": "werden",
        "start": 51.22,
        "end": 51.66
      },
      {
        "text": "kann.",
        "start": 51.66,
        "end": 52.32
      }
    ]
  },
  {
    "t": 52.32,
    "end": 55.46,
    "text": "Breite deine Flügel aus,",
    "words": [
      {
        "text": "Breite",
        "start": 52.32,
        "end": 53.72
      },
      {
        "text": "deine",
        "start": 53.72,
        "end": 54.26
      },
      {
        "text": "Flügel",
        "start": 54.26,
        "end": 54.94
      },
      {
        "text": "aus,",
        "start": 54.94,
        "end": 55.46
      }
    ]
  },
  {
    "t": 55.46,
    "end": 57.72,
    "text": "Trag dein Licht zur Welt hinaus.",
    "words": [
      {
        "text": "Trag",
        "start": 55.46,
        "end": 55.94
      },
      {
        "text": "dein",
        "start": 55.94,
        "end": 56.18
      },
      {
        "text": "Licht",
        "start": 56.18,
        "end": 56.56
      },
      {
        "text": "zur",
        "start": 56.56,
        "end": 56.94
      },
      {
        "text": "Welt",
        "start": 56.94,
        "end": 57.26
      },
      {
        "text": "hinaus.",
        "start": 57.26,
        "end": 57.72
      }
    ]
  },
  {
    "t": 57.72,
    "end": 60.2,
    "text": "Was morgen wird, erschaffen wir —",
    "words": [
      {
        "text": "Was",
        "start": 57.72,
        "end": 58.1
      },
      {
        "text": "morgen",
        "start": 58.1,
        "end": 58.62
      },
      {
        "text": "wird,",
        "start": 58.62,
        "end": 59.1
      },
      {
        "text": "erschaffen",
        "start": 59.36,
        "end": 59.74
      },
      {
        "text": "wir",
        "start": 59.74,
        "end": 60.2
      }
    ]
  },
  {
    "t": 61.9,
    "end": 64.5,
    "text": "Wunder beginnen mit dir.",
    "words": [
      {
        "text": "Wunder",
        "start": 61.9,
        "end": 62.66
      },
      {
        "text": "beginnen",
        "start": 62.66,
        "end": 63.42
      },
      {
        "text": "mit",
        "start": 63.42,
        "end": 64.1
      },
      {
        "text": "dir.",
        "start": 64.1,
        "end": 64.5
      }
    ]
  },
  {
    "t": 71.82,
    "end": 74.54,
    "text": "Wunder beginnen mit dir.",
    "words": [
      {
        "text": "Wunder",
        "start": 71.82,
        "end": 72.58
      },
      {
        "text": "beginnen",
        "start": 72.58,
        "end": 73.34
      },
      {
        "text": "mit",
        "start": 73.34,
        "end": 74.0
      },
      {
        "text": "dir.",
        "start": 74.0,
        "end": 74.54
      }
    ]
  },
  {
    "t": 74.54,
    "end": 77.02,
    "text": "Nicht jeder Weg führt gleich ans Ziel,",
    "words": [
      {
        "text": "Nicht",
        "start": 74.54,
        "end": 74.84
      },
      {
        "text": "jeder",
        "start": 74.84,
        "end": 75.32
      },
      {
        "text": "Weg",
        "start": 75.32,
        "end": 75.7
      },
      {
        "text": "führt",
        "start": 75.7,
        "end": 76.02
      },
      {
        "text": "gleich",
        "start": 76.02,
        "end": 76.32
      },
      {
        "text": "ans",
        "start": 76.32,
        "end": 76.58
      },
      {
        "text": "Ziel,",
        "start": 76.58,
        "end": 77.02
      }
    ]
  },
  {
    "t": 77.02,
    "end": 79.52,
    "text": "Manchmal wird selbst ein Schritt zu viel.",
    "words": [
      {
        "text": "Manchmal",
        "start": 77.02,
        "end": 77.52
      },
      {
        "text": "wird",
        "start": 77.52,
        "end": 77.78
      },
      {
        "text": "selbst",
        "start": 77.78,
        "end": 78.06
      },
      {
        "text": "ein",
        "start": 78.06,
        "end": 78.54
      },
      {
        "text": "Schritt",
        "start": 78.54,
        "end": 78.78
      },
      {
        "text": "zu",
        "start": 78.78,
        "end": 79.08
      },
      {
        "text": "viel.",
        "start": 79.08,
        "end": 79.52
      }
    ]
  },
  {
    "t": 79.52,
    "end": 82.04,
    "text": "Dann ruh dich aus und atme ein,",
    "words": [
      {
        "text": "Dann",
        "start": 79.52,
        "end": 79.8
      },
      {
        "text": "ruh",
        "start": 79.8,
        "end": 80.16
      },
      {
        "text": "dich",
        "start": 80.16,
        "end": 80.3
      },
      {
        "text": "aus",
        "start": 80.3,
        "end": 80.74
      },
      {
        "text": "und",
        "start": 80.74,
        "end": 81.06
      },
      {
        "text": "atme",
        "start": 81.06,
        "end": 81.56
      },
      {
        "text": "ein,",
        "start": 81.56,
        "end": 82.04
      }
    ]
  },
  {
    "t": 82.04,
    "end": 84.42,
    "text": "Auch leise darfst du mutig sein.",
    "words": [
      {
        "text": "Auch",
        "start": 82.04,
        "end": 82.28
      },
      {
        "text": "leise",
        "start": 82.28,
        "end": 82.72
      },
      {
        "text": "darfst",
        "start": 82.72,
        "end": 83.22
      },
      {
        "text": "du",
        "start": 83.22,
        "end": 83.48
      },
      {
        "text": "mutig",
        "start": 83.48,
        "end": 84.02
      },
      {
        "text": "sein.",
        "start": 84.02,
        "end": 84.42
      }
    ]
  },
  {
    "t": 84.42,
    "end": 86.9,
    "text": "Ich kenn die Angst, ich kenn die Nacht,",
    "words": [
      {
        "text": "Ich",
        "start": 84.42,
        "end": 84.76
      },
      {
        "text": "kenn",
        "start": 84.76,
        "end": 85.06
      },
      {
        "text": "die",
        "start": 85.06,
        "end": 85.34
      },
      {
        "text": "Angst,",
        "start": 85.34,
        "end": 85.64
      },
      {
        "text": "ich",
        "start": 85.84,
        "end": 85.98
      },
      {
        "text": "kenn",
        "start": 85.98,
        "end": 86.3
      },
      {
        "text": "die",
        "start": 86.3,
        "end": 86.52
      },
      {
        "text": "Nacht,",
        "start": 86.52,
        "end": 86.9
      }
    ]
  },
  {
    "t": 86.9,
    "end": 89.18,
    "text": "Hab selbst zu oft zu klein gedacht.",
    "words": [
      {
        "text": "Hab",
        "start": 86.9,
        "end": 87.2
      },
      {
        "text": "selbst",
        "start": 87.22,
        "end": 87.5
      },
      {
        "text": "zu",
        "start": 87.5,
        "end": 87.86
      },
      {
        "text": "oft",
        "start": 87.86,
        "end": 88.08
      },
      {
        "text": "zu",
        "start": 88.08,
        "end": 88.3
      },
      {
        "text": "klein",
        "start": 88.3,
        "end": 88.7
      },
      {
        "text": "gedacht.",
        "start": 88.7,
        "end": 89.18
      }
    ]
  },
  {
    "t": 89.18,
    "end": 91.72,
    "text": "Doch heute zählt nicht, was mal war —",
    "words": [
      {
        "text": "Doch",
        "start": 89.18,
        "end": 89.68
      },
      {
        "text": "heute",
        "start": 89.68,
        "end": 90.16
      },
      {
        "text": "zählt",
        "start": 90.16,
        "end": 90.58
      },
      {
        "text": "nicht,",
        "start": 90.58,
        "end": 90.88
      },
      {
        "text": "was",
        "start": 90.9,
        "end": 91.14
      },
      {
        "text": "mal",
        "start": 91.14,
        "end": 91.48
      },
      {
        "text": "war",
        "start": 91.48,
        "end": 91.72
      }
    ]
  },
  {
    "t": 91.72,
    "end": 94.24,
    "text": "Wir sind noch hier, der Traum ist da.",
    "words": [
      {
        "text": "Wir",
        "start": 91.72,
        "end": 92.14
      },
      {
        "text": "sind",
        "start": 92.14,
        "end": 92.4
      },
      {
        "text": "noch",
        "start": 92.4,
        "end": 92.68
      },
      {
        "text": "hier,",
        "start": 92.68,
        "end": 93.02
      },
      {
        "text": "der",
        "start": 93.16,
        "end": 93.3
      },
      {
        "text": "Traum",
        "start": 93.3,
        "end": 93.74
      },
      {
        "text": "ist",
        "start": 93.74,
        "end": 93.94
      },
      {
        "text": "da.",
        "start": 93.94,
        "end": 94.24
      }
    ]
  },
  {
    "t": 94.24,
    "end": 96.74,
    "text": "Du brauchst nicht immer stark zu sein.",
    "words": [
      {
        "text": "Du",
        "start": 94.24,
        "end": 94.64
      },
      {
        "text": "brauchst",
        "start": 94.64,
        "end": 95.06
      },
      {
        "text": "nicht",
        "start": 95.06,
        "end": 95.3
      },
      {
        "text": "immer",
        "start": 95.3,
        "end": 95.66
      },
      {
        "text": "stark",
        "start": 95.66,
        "end": 96.1
      },
      {
        "text": "zu",
        "start": 96.1,
        "end": 96.44
      },
      {
        "text": "sein.",
        "start": 96.44,
        "end": 96.74
      }
    ]
  },
  {
    "t": 96.74,
    "end": 99.2,
    "text": "Wir tragen unsre Träume nicht allein.",
    "words": [
      {
        "text": "Wir",
        "start": 96.74,
        "end": 96.88
      },
      {
        "text": "tragen",
        "start": 96.88,
        "end": 97.14
      },
      {
        "text": "unsre",
        "start": 97.14,
        "end": 97.58
      },
      {
        "text": "Träume",
        "start": 97.58,
        "end": 98.24
      },
      {
        "text": "nicht",
        "start": 98.24,
        "end": 98.66
      },
      {
        "text": "allein.",
        "start": 98.66,
        "end": 99.2
      }
    ]
  },
  {
    "t": 99.2,
    "end": 101.76,
    "text": "Aus einem Funken wird ein Licht,",
    "words": [
      {
        "text": "Aus",
        "start": 99.2,
        "end": 99.98
      },
      {
        "text": "einem",
        "start": 99.6,
        "end": 99.98
      },
      {
        "text": "Funken",
        "start": 99.98,
        "end": 100.62
      },
      {
        "text": "wird",
        "start": 100.62,
        "end": 101.08
      },
      {
        "text": "ein",
        "start": 101.08,
        "end": 101.34
      },
      {
        "text": "Licht,",
        "start": 101.34,
        "end": 101.76
      }
    ]
  },
  {
    "t": 101.76,
    "end": 104.36,
    "text": "Das leise durch die Zweifel bricht.",
    "words": [
      {
        "text": "Das",
        "start": 101.76,
        "end": 102.06
      },
      {
        "text": "leise",
        "start": 102.06,
        "end": 102.54
      },
      {
        "text": "durch",
        "start": 102.54,
        "end": 102.86
      },
      {
        "text": "die",
        "start": 102.86,
        "end": 103.22
      },
      {
        "text": "Zweifel",
        "start": 103.22,
        "end": 103.88
      },
      {
        "text": "bricht.",
        "start": 103.88,
        "end": 104.36
      }
    ]
  },
  {
    "t": 105.22,
    "end": 107.2,
    "text": "Deine Magie,",
    "words": [
      {
        "text": "Deine",
        "start": 105.22,
        "end": 105.66
      },
      {
        "text": "Magie,",
        "start": 105.66,
        "end": 107.2
      }
    ]
  },
  {
    "t": 107.2,
    "end": 109.9,
    "text": "Sie fängt mit einem Herzschlag an.",
    "words": [
      {
        "text": "Sie",
        "start": 107.2,
        "end": 107.58
      },
      {
        "text": "fängt",
        "start": 107.58,
        "end": 107.92
      },
      {
        "text": "mit",
        "start": 107.92,
        "end": 108.24
      },
      {
        "text": "einem",
        "start": 108.24,
        "end": 108.9
      },
      {
        "text": "Herzschlag",
        "start": 108.9,
        "end": 109.54
      },
      {
        "text": "an.",
        "start": 109.54,
        "end": 109.9
      }
    ]
  },
  {
    "t": 109.9,
    "end": 111.64,
    "text": "Deine Magie,",
    "words": [
      {
        "text": "Deine",
        "start": 109.9,
        "end": 110.6
      },
      {
        "text": "Magie,",
        "start": 110.6,
        "end": 111.64
      }
    ]
  },
  {
    "t": 111.64,
    "end": 114.18,
    "text": "Zeigt dir, was alles werden kann.",
    "words": [
      {
        "text": "Zeigt",
        "start": 111.64,
        "end": 112.02
      },
      {
        "text": "dir,",
        "start": 112.02,
        "end": 112.26
      },
      {
        "text": "was",
        "start": 112.42,
        "end": 112.56
      },
      {
        "text": "alles",
        "start": 112.56,
        "end": 113.04
      },
      {
        "text": "werden",
        "start": 113.04,
        "end": 113.48
      },
      {
        "text": "kann.",
        "start": 113.48,
        "end": 114.18
      }
    ]
  },
  {
    "t": 114.18,
    "end": 117.3,
    "text": "Breite deine Flügel aus,",
    "words": [
      {
        "text": "Breite",
        "start": 114.18,
        "end": 115.56
      },
      {
        "text": "deine",
        "start": 115.56,
        "end": 116.1
      },
      {
        "text": "Flügel",
        "start": 116.1,
        "end": 116.82
      },
      {
        "text": "aus,",
        "start": 116.82,
        "end": 117.3
      }
    ]
  },
  {
    "t": 117.54,
    "end": 119.52,
    "text": "Trag dein Licht zur Welt hinaus.",
    "words": [
      {
        "text": "Trag",
        "start": 117.54,
        "end": 117.82
      },
      {
        "text": "dein",
        "start": 117.82,
        "end": 118.02
      },
      {
        "text": "Licht",
        "start": 118.02,
        "end": 118.42
      },
      {
        "text": "zur",
        "start": 118.42,
        "end": 118.78
      },
      {
        "text": "Welt",
        "start": 118.78,
        "end": 119.18
      },
      {
        "text": "hinaus.",
        "start": 119.18,
        "end": 119.52
      }
    ]
  },
  {
    "t": 119.52,
    "end": 122.02,
    "text": "Was morgen wird, erschaffen wir —",
    "words": [
      {
        "text": "Was",
        "start": 119.52,
        "end": 119.94
      },
      {
        "text": "morgen",
        "start": 119.94,
        "end": 120.5
      },
      {
        "text": "wird,",
        "start": 120.5,
        "end": 120.96
      },
      {
        "text": "erschaffen",
        "start": 121.1,
        "end": 121.64
      },
      {
        "text": "wir",
        "start": 121.64,
        "end": 122.02
      }
    ]
  },
  {
    "t": 123.66,
    "end": 126.3,
    "text": "Wunder beginnen mit dir.",
    "words": [
      {
        "text": "Wunder",
        "start": 123.66,
        "end": 124.46
      },
      {
        "text": "beginnen",
        "start": 124.46,
        "end": 125.26
      },
      {
        "text": "mit",
        "start": 125.26,
        "end": 125.96
      },
      {
        "text": "dir.",
        "start": 125.96,
        "end": 126.3
      }
    ]
  },
  {
    "t": 126.3,
    "end": 127.86,
    "text": "Wir lernen zu fallen.",
    "words": [
      {
        "text": "Wir",
        "start": 126.3,
        "end": 126.88
      },
      {
        "text": "lernen",
        "start": 126.88,
        "end": 127.16
      },
      {
        "text": "zu",
        "start": 127.16,
        "end": 127.42
      },
      {
        "text": "fallen.",
        "start": 127.42,
        "end": 127.86
      }
    ]
  },
  {
    "t": 128.02,
    "end": 129.18,
    "text": "Wir lernen zu fliegen.",
    "words": [
      {
        "text": "Wir",
        "start": 128.02,
        "end": 128.16
      },
      {
        "text": "lernen",
        "start": 128.16,
        "end": 128.4
      },
      {
        "text": "zu",
        "start": 128.4,
        "end": 128.66
      },
      {
        "text": "fliegen.",
        "start": 128.66,
        "end": 129.18
      }
    ]
  },
  {
    "t": 129.18,
    "end": 130.56,
    "text": "Wir lassen die Zweifel",
    "words": [
      {
        "text": "Wir",
        "start": 129.18,
        "end": 129.36
      },
      {
        "text": "lassen",
        "start": 129.36,
        "end": 129.64
      },
      {
        "text": "die",
        "start": 129.64,
        "end": 129.86
      },
      {
        "text": "Zweifel",
        "start": 129.86,
        "end": 130.56
      }
    ]
  },
  {
    "t": 130.56,
    "end": 131.66,
    "text": "Nicht immer siegen.",
    "words": [
      {
        "text": "Nicht",
        "start": 130.56,
        "end": 130.8
      },
      {
        "text": "immer",
        "start": 130.8,
        "end": 131.14
      },
      {
        "text": "siegen.",
        "start": 131.14,
        "end": 131.66
      }
    ]
  },
  {
    "t": 131.66,
    "end": 133.54,
    "text": "Wir müssen nicht perfekt sein,",
    "words": [
      {
        "text": "Wir",
        "start": 131.66,
        "end": 131.82
      },
      {
        "text": "müssen",
        "start": 131.82,
        "end": 132.1
      },
      {
        "text": "nicht",
        "start": 132.1,
        "end": 132.54
      },
      {
        "text": "perfekt",
        "start": 132.54,
        "end": 133.02
      },
      {
        "text": "sein,",
        "start": 133.02,
        "end": 133.54
      }
    ]
  },
  {
    "t": 133.54,
    "end": 136.42,
    "text": "Nur bereit, den nächsten Schritt zu gehn.",
    "words": [
      {
        "text": "Nur",
        "start": 133.54,
        "end": 133.88
      },
      {
        "text": "bereit,",
        "start": 133.88,
        "end": 134.42
      },
      {
        "text": "den",
        "start": 134.42,
        "end": 134.8
      },
      {
        "text": "nächsten",
        "start": 134.8,
        "end": 135.22
      },
      {
        "text": "Schritt",
        "start": 135.22,
        "end": 135.7
      },
      {
        "text": "zu",
        "start": 135.7,
        "end": 136.02
      },
      {
        "text": "gehn.",
        "start": 136.02,
        "end": 136.42
      }
    ]
  },
  {
    "t": 136.42,
    "end": 139.52,
    "text": "Wir lassen unsre Lichter leuchten,",
    "words": [
      {
        "text": "Wir",
        "start": 136.42,
        "end": 137.4
      },
      {
        "text": "lassen",
        "start": 137.4,
        "end": 137.7
      },
      {
        "text": "unsre",
        "start": 137.7,
        "end": 138.46
      },
      {
        "text": "Lichter",
        "start": 138.46,
        "end": 139.12
      },
      {
        "text": "leuchten,",
        "start": 139.12,
        "end": 139.52
      }
    ]
  },
  {
    "t": 139.76,
    "end": 142.32,
    "text": "Bis wir neue Wege sehn.",
    "words": [
      {
        "text": "Bis",
        "start": 139.76,
        "end": 140.12
      },
      {
        "text": "wir",
        "start": 140.12,
        "end": 140.42
      },
      {
        "text": "neue",
        "start": 140.42,
        "end": 140.84
      },
      {
        "text": "Wege",
        "start": 140.84,
        "end": 141.82
      },
      {
        "text": "sehn.",
        "start": 141.82,
        "end": 142.32
      }
    ]
  },
  {
    "t": 142.32,
    "end": 143.94,
    "text": "Deine Magie,",
    "words": [
      {
        "text": "Deine",
        "start": 142.32,
        "end": 142.8
      },
      {
        "text": "Magie,",
        "start": 142.8,
        "end": 143.94
      }
    ]
  },
  {
    "t": 144.25,
    "end": 147.0,
    "text": "Sie fängt mit einem Herzschlag an.",
    "words": [
      {
        "text": "Sie",
        "start": 144.25,
        "end": 144.66
      },
      {
        "text": "fängt",
        "start": 144.66,
        "end": 145.06
      },
      {
        "text": "mit",
        "start": 145.06,
        "end": 145.34
      },
      {
        "text": "einem",
        "start": 145.34,
        "end": 145.96
      },
      {
        "text": "Herzschlag",
        "start": 145.96,
        "end": 146.68
      },
      {
        "text": "an.",
        "start": 146.68,
        "end": 147.0
      }
    ]
  },
  {
    "t": 147.0,
    "end": 148.72,
    "text": "Deine Magie,",
    "words": [
      {
        "text": "Deine",
        "start": 147.0,
        "end": 147.72
      },
      {
        "text": "Magie,",
        "start": 147.72,
        "end": 148.72
      }
    ]
  },
  {
    "t": 148.73,
    "end": 151.26,
    "text": "Zeigt dir, was alles werden kann.",
    "words": [
      {
        "text": "Zeigt",
        "start": 148.73,
        "end": 149.1
      },
      {
        "text": "dir,",
        "start": 149.1,
        "end": 149.38
      },
      {
        "text": "was",
        "start": 149.54,
        "end": 149.72
      },
      {
        "text": "alles",
        "start": 149.72,
        "end": 150.14
      },
      {
        "text": "werden",
        "start": 150.14,
        "end": 150.64
      },
      {
        "text": "kann.",
        "start": 150.64,
        "end": 151.26
      }
    ]
  },
  {
    "t": 151.82,
    "end": 154.42,
    "text": "Breite deine Flügel aus,",
    "words": [
      {
        "text": "Breite",
        "start": 151.82,
        "end": 152.68
      },
      {
        "text": "deine",
        "start": 152.68,
        "end": 153.22
      },
      {
        "text": "Flügel",
        "start": 153.22,
        "end": 153.92
      },
      {
        "text": "aus,",
        "start": 153.92,
        "end": 154.42
      }
    ]
  },
  {
    "t": 154.42,
    "end": 156.76,
    "text": "Trag dein Licht zur Welt hinaus.",
    "words": [
      {
        "text": "Trag",
        "start": 154.42,
        "end": 154.92
      },
      {
        "text": "dein",
        "start": 154.92,
        "end": 155.14
      },
      {
        "text": "Licht",
        "start": 155.14,
        "end": 155.54
      },
      {
        "text": "zur",
        "start": 155.54,
        "end": 155.9
      },
      {
        "text": "Welt",
        "start": 155.9,
        "end": 156.24
      },
      {
        "text": "hinaus.",
        "start": 156.24,
        "end": 156.76
      }
    ]
  },
  {
    "t": 156.76,
    "end": 159.18,
    "text": "Was morgen wird, erschaffen wir —",
    "words": [
      {
        "text": "Was",
        "start": 156.76,
        "end": 157.04
      },
      {
        "text": "morgen",
        "start": 157.04,
        "end": 157.6
      },
      {
        "text": "wird,",
        "start": 157.6,
        "end": 158.06
      },
      {
        "text": "erschaffen",
        "start": 158.36,
        "end": 158.68
      },
      {
        "text": "wir",
        "start": 158.68,
        "end": 159.18
      }
    ]
  },
  {
    "t": 161.02,
    "end": 163.66,
    "text": "Wunder beginnen mit dir.",
    "words": [
      {
        "text": "Wunder",
        "start": 161.02,
        "end": 161.94
      },
      {
        "text": "beginnen",
        "start": 161.94,
        "end": 162.609
      },
      {
        "text": "mit",
        "start": 162.609,
        "end": 162.86
      },
      {
        "text": "dir.",
        "start": 162.86,
        "end": 163.66
      }
    ]
  },
  {
    "t": 165.52,
    "end": 167.48,
    "text": "Ein Licht in deinen Händen.",
    "words": [
      {
        "text": "Ein",
        "start": 165.52,
        "end": 165.8
      },
      {
        "text": "Licht",
        "start": 165.8,
        "end": 166.14
      },
      {
        "text": "in",
        "start": 166.14,
        "end": 166.48
      },
      {
        "text": "deinen",
        "start": 166.48,
        "end": 166.92
      },
      {
        "text": "Händen.",
        "start": 166.92,
        "end": 167.48
      }
    ]
  },
  {
    "t": 170.49,
    "end": 172.32,
    "text": "Ein neuer Weg vor dir.",
    "words": [
      {
        "text": "Ein",
        "start": 170.49,
        "end": 170.72
      },
      {
        "text": "neuer",
        "start": 170.72,
        "end": 171.22
      },
      {
        "text": "Weg",
        "start": 171.22,
        "end": 171.54
      },
      {
        "text": "vor",
        "start": 171.54,
        "end": 171.98
      },
      {
        "text": "dir.",
        "start": 171.98,
        "end": 172.32
      }
    ]
  },
  {
    "t": 172.32,
    "end": 177.52,
    "text": "Wir geben unsern Träumen Flügel —",
    "words": [
      {
        "text": "Wir",
        "start": 172.32,
        "end": 174.48
      },
      {
        "text": "geben",
        "start": 174.48,
        "end": 174.96
      },
      {
        "text": "unsern",
        "start": 174.96,
        "end": 175.62
      },
      {
        "text": "Träumen",
        "start": 175.62,
        "end": 176.46
      },
      {
        "text": "Flügel",
        "start": 176.46,
        "end": 177.52
      }
    ]
  },
  {
    "t": 180.6,
    "end": 183.26,
    "text": "Wunder beginnen mit dir.",
    "words": [
      {
        "text": "Wunder",
        "start": 180.6,
        "end": 181.26
      },
      {
        "text": "beginnen",
        "start": 181.26,
        "end": 182.16
      },
      {
        "text": "mit",
        "start": 182.16,
        "end": 182.88
      },
      {
        "text": "dir.",
        "start": 182.88,
        "end": 183.26
      }
    ]
  },
  {
    "t": 190.51,
    "end": 193.14,
    "text": "Wunder beginnen mit dir.",
    "words": [
      {
        "text": "Wunder",
        "start": 190.51,
        "end": 191.12
      },
      {
        "text": "beginnen",
        "start": 191.12,
        "end": 192.1
      },
      {
        "text": "mit",
        "start": 192.1,
        "end": 192.76
      },
      {
        "text": "dir.",
        "start": 192.76,
        "end": 193.14
      }
    ]
  }
];let cues=structuredClone(original);const $=id=>document.getElementById(id),audio=$('audio'),canvas=$('film'),W=1920,H=1080;let g=canvas.getContext('2d');const transition=document.createElement('canvas');transition.width=W;transition.height=H;const tg=transition.getContext('2d');
let showText=true,ctx,analyser,bins,source,destination,recorder,recording=false,tapIndex=-1,lastRow=-1,energy=0;const image=new Image();image.src='couple.png';
try{const saved=JSON.parse(localStorage.getItem('wunder-cues-v2'));if(valid(saved))cues=saved}catch(e){}
function valid(a){return Array.isArray(a)&&a.length===original.length&&a.every((c,i)=>typeof c.text==='string'&&Number.isFinite(c.t)&&c.t>=0&&c.t<196&&(i===0||c.t>a[i-1].t))}
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v)),lerp=(a,b,t)=>a+(b-a)*t,smooth=t=>{t=clamp(t);return t*t*(3-2*t)};
function rng(n){let s=Math.sin(n*127.1+311.7)*43758.5453;return s-Math.floor(s)}
function glow(x,y,r,color='255,204,112',alpha=.3){if(r<=0)return;const z=g.createRadialGradient(x,y,0,x,y,r);z.addColorStop(0,`rgba(${color},${alpha})`);z.addColorStop(1,`rgba(${color},0)`);g.fillStyle=z;g.fillRect(x-r,y-r,r*2,r*2)}
function line(points,color,width=1){g.beginPath();points.forEach((p,i)=>i?g.lineTo(...p):g.moveTo(...p));g.strokeStyle=color;g.lineWidth=width;g.stroke()}
function bird(x,y,size,t,alpha=1){g.save();g.translate(x,y);g.rotate(Math.sin(t*.6)*.06);g.scale(size,size);g.globalAlpha*=alpha;const flap=Math.sin(t*2.8)*.27;g.shadowColor='#ffc66d';g.shadowBlur=18;let polys=[[[0,8],[-88,-43-flap*70],[-39,35],[-4,23]],[[0,8],[83,-73+flap*65],[36,31],[-4,23]],[[0,8],[18,2],[30,8],[15,13],[2,32],[-4,23]],[[-4,23],[-35,42],[-14,17]]];polys.forEach((p,i)=>{g.beginPath();p.forEach(([a,b],j)=>j?g.lineTo(a,b):g.moveTo(a,b));g.closePath();g.fillStyle=['#e8c88e','#fff0ca','#fff7e6','#c38d4d'][i];g.fill();g.strokeStyle='#fff3c0';g.lineWidth=.8;g.stroke()});g.shadowBlur=0;line([[-88,-43-flap*70],[0,8],[-39,35]],'#a47746',.7);line([[83,-73+flap*65],[0,8],[36,31]],'#b38a50',.7);g.restore()}
function sky(t){let bg=g.createLinearGradient(0,0,0,H);bg.addColorStop(0,'#050c20');bg.addColorStop(.55,'#14253f');bg.addColorStop(1,'#354657');g.fillStyle=bg;g.fillRect(0,0,W,H);glow(1450,210,460,'115,162,210',.15);for(let i=0;i<180;i++){const x=(rng(i)*W+t*(2+rng(i+4)*7))%W,y=rng(i+90)*H*.78;g.globalAlpha=.18+.55*(.5+.5*Math.sin(t*.5+i));g.fillStyle=i%5?'#c9dcf7':'#f8d293';g.beginPath();g.arc(x,y,.5+rng(i+24)*1.5,0,Math.PI*2);g.fill()}g.globalAlpha=1;for(let i=0;i<7;i++){glow((i*380-t*(9+i))%(W+700)+100,660+Math.sin(t*.15+i)*110,360,'133,165,190',.055)}}
function particles(t,strength=1){g.save();g.globalCompositeOperation='screen';for(let i=0;i<95;i++){const x=(rng(i+320)*W+Math.sin(t*.3+i)*35),y=(rng(i+420)*H-t*(10+rng(i)*18)%H+H)%H;let a=(.15+.5*rng(i+500))*strength;g.fillStyle=`rgba(255,215,146,${a})`;g.beginPath();g.arc(x,y,1+rng(i+90)*2,0,7);g.fill();}g.restore()}
function home(t,opacity=1){g.save();g.globalAlpha=opacity;if(image.complete&&image.naturalWidth){let z=1.025+.016*Math.sin(t*.11);let iw=W*z,ih=iw*image.height/image.width;g.drawImage(image,(W-iw)/2,(H-ih)/2,iw,ih)}glow(1000,635,170+energy*80,'255,203,90',.13+.04*Math.sin(t*2));particles(t,.6);g.restore()}
function ribbon(t,y,alpha=1){g.save();g.globalAlpha=alpha;g.shadowBlur=14;g.shadowColor='#f8c96e';for(let k=0;k<3;k++){let p=[];for(let x=0;x<=W;x+=12)p.push([x,y+Math.sin(x*.004+t*.5+k)*55+Math.sin(x*.009-t*.8)*12]);line(p,k===1?'#acdce3':'#eac77d',k===1?1.3:2)}g.restore()}
function bridge(t){sky(t);g.save();g.translate(960,410);for(let i=34;i>=0;i--){let z=i/34,depth=Math.pow(1-z,2),y=60+depth*680,w=22+depth*1600;g.globalAlpha=.18+depth*.5;g.fillStyle=i%2?'#69c2d2':'#edce88';g.beginPath();g.moveTo(-w/2,y);g.lineTo(w/2,y);g.lineTo(w*.48,y+4+depth*12);g.lineTo(-w*.48,y+4+depth*12);g.closePath();g.fill();glow(0,y,Math.max(15,w*.5),'130,204,214',.04)}g.restore();ribbon(t,560,.7);bird(960+Math.sin(t*.2)*110,365+Math.sin(t)*25,1.5,t);particles(t)}
function city(t,grand=false){sky(t);const lift=grand?smooth((t-153)/28):0;glow(960,340,650,'238,193,123',.08+lift*.16);g.save();g.translate(960,590-lift*100);g.scale(1-lift*.22,1-lift*.22);for(let layer=0;layer<3;layer++){for(let i=0;i<26;i++){let seed=i+layer*80;let x=(i-13)*91+Math.sin(layer)*30;let h=65+rng(seed+1000)*230;let base=110+layer*85+Math.sin(i*.5)*35;g.fillStyle=['#1a3148','#243e50','#284452'][layer];g.strokeStyle='rgba(224,192,139,.3)';g.lineWidth=1;g.fillRect(x,base-h,60,h);g.strokeRect(x,base-h,60,h);g.beginPath();g.moveTo(x-7,base-h);g.lineTo(x+30,base-h-30);g.lineTo(x+67,base-h);g.fill();for(let yy=base-h+16;yy<base-10;yy+=25){for(let xx=x+10;xx<x+55;xx+=17){let a=.2+.7*(.5+.5*Math.sin(t*.6+seed+yy));g.fillStyle=`rgba(255,214,135,${a})`;g.fillRect(xx,yy,6,11)}}}}g.restore();if(grand){g.save();g.globalCompositeOperation='screen';for(let side of [-1,1]){for(let i=0;i<34;i++){const p=i/34,x=960+side*(110+p*760),y=420-Math.sin(p*Math.PI)*240+Math.sin(t*.7+p*4)*20;line([[960,550],[x,y],[x+side*70,y-90-p*70]],`rgba(245,212,156,${.15+lift*.55})`,1.5);glow(x,y,18,'255,220,150',.25)}}g.restore();bird(960,430,2.6+lift,t)}else{bird(960+Math.sin(t*.13)*250,300,1.1,t)}particles(t);ribbon(t,710,.5)}
function flight(t){sky(t);let u=(t-128)/25;for(let i=0;i<24;i++){let a=i*2.399+t*.15,r=100+(i%8)*80;bird(960+Math.cos(a)*r*1.5,440+Math.sin(a)*r*.58,(.22+rng(i)*.45)*(1+u*.3),t+i,.25+rng(i)*.65)}bird(960,460+Math.sin(t)*20,2.4,t);glow(960,400,400,'221,205,167',.13);particles(t);ribbon(t,680,.6)}
const scenes=[{s:0,e:24,fn:home},{s:24,e:49,fn:bridge},{s:49,e:77,fn:(t)=>city(t)},{s:77,e:99,fn:home},{s:99,e:128,fn:(t)=>city(t)},{s:128,e:153,fn:flight},{s:153,e:180,fn:(t)=>city(t,true)},{s:180,e:196,fn:home}];
function scene(t){let i=scenes.findIndex(s=>t<s.e);if(i<0)i=scenes.length-1;scenes[i].fn(t);const remain=scenes[i].e-t;if(remain<2&&i<scenes.length-1){const screen=g;g=tg;g.clearRect(0,0,W,H);g.globalAlpha=1;scenes[i+1].fn(t);g=screen;g.save();g.globalAlpha=smooth(1-remain/2);g.drawImage(transition,0,0);g.restore()}let v=g.createRadialGradient(960,450,200,960,500,1100);v.addColorStop(0,'#0000');v.addColorStop(1,'#01030a99');g.fillStyle=v;g.fillRect(0,0,W,H)}
function cueAt(t){let i=-1;for(let j=0;j<cues.length;j++)if(cues[j].t<=t)i=j;else break;return i}
function lyricProgress(c,t){const words=c.words;if(!words?.length)return clamp((t-c.t)/Math.max(.2,c.end-c.t));let total=0,done=0;for(const w of words){let size=w.text.length+1;total+=size;done+=size*clamp((t-w.start)/Math.max(.02,w.end-w.start))}return done/Math.max(1,total)}
function captions(t){if(!showText)return;let i=cueAt(t);if(i<0)return;let c=cues[i];if(t>c.end+.45)return;const p=lyricProgress(c,t);let grad=g.createLinearGradient(0,780,0,H);grad.addColorStop(0,'#02061200');grad.addColorStop(.45,'#020612c9');grad.addColorStop(1,'#020612f0');g.fillStyle=grad;g.fillRect(0,780,W,300);let size=50;g.font=`500 ${size}px Georgia`;while(g.measureText(c.text).width>1660&&size>28){size-=2;g.font=`500 ${size}px Georgia`};g.textAlign='left';let width=g.measureText(c.text).width,x=(W-width)/2;g.shadowColor='#000';g.shadowBlur=12;g.fillStyle='#c6cbd6';g.fillText(c.text,x,943);let advance=0;const parts=c.text.split(' ');for(let j=0;j<parts.length;j++){let word=parts[j],w=c.words?.find((v,k)=>k===j),fraction=w?clamp((t-w.start)/Math.max(.02,w.end-w.start)):p;let ww=g.measureText(word).width;g.save();g.beginPath();g.rect(x+advance-1,880,(ww+2)*fraction,90);g.clip();g.fillStyle='#ffe3a5';g.fillText(word,x+advance,943);g.restore();advance+=g.measureText(word+' ').width}g.shadowBlur=0;g.fillStyle='#a4afc0';g.font='28px Georgia';g.textAlign='center';if(i+1<cues.length&&cues[i+1].t-c.end<4)g.fillText(cues[i+1].text,960,1000);g.fillStyle='#6c634e';g.fillRect(760,1034,400,2);g.fillStyle='#edce89';g.fillRect(760,1034,400*p,2)}
function audioSetup(){if(ctx)return;ctx=new AudioContext();source=ctx.createMediaElementSource(audio);analyser=ctx.createAnalyser();analyser.fftSize=256;bins=new Uint8Array(analyser.frequencyBinCount);destination=ctx.createMediaStreamDestination();source.connect(analyser);analyser.connect(ctx.destination);analyser.connect(destination)}
async function play(){try{audioSetup();await ctx.resume();await audio.play();$('status').textContent=''}catch(e){$('status').textContent='Не вдалося почати відтворення. Спробуй Chrome або Edge.'}}
audio.volume=.85;audio.onplay=()=>$('play').textContent='Ⅱ Пауза';audio.onpause=()=>$('play').textContent='▶ Відтворити';audio.onended=()=>{if(recording)stopRecording();$('play').textContent='▶ Відтворити'};
$('play').onclick=()=>audio.paused?play():audio.pause();$('restart').onclick=()=>{audio.currentTime=0};$('seek').oninput=e=>{audio.currentTime=+e.target.value};$('volume').oninput=e=>audio.volume=+e.target.value;$('full').onclick=()=>document.fullscreenElement?document.exitFullscreen():$('stage').requestFullscreen();$('textToggle').onclick=()=>{showText=!showText;$('textToggle').textContent='Текст: '+(showText?'увімкнено':'вимкнено')};
const clock=s=>Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0');let prev=0;function frame(now){requestAnimationFrame(frame);if(now-prev<31)return;prev=now;let t=audio.currentTime||0;if(analyser){analyser.getByteFrequencyData(bins);energy=bins.slice(0,15).reduce((a,b)=>a+b,0)/15/255}g.globalAlpha=1;g.shadowBlur=0;scene(t);captions(t);$('seek').value=t;$('time').textContent=clock(t)+' / '+clock(Number.isFinite(audio.duration)?audio.duration:195.38);let i=cueAt(t);if(i!==lastRow){document.querySelector('.cue.active')?.classList.remove('active');$('row'+i)?.classList.add('active');lastRow=i}}
function shiftCue(c,t){let d=t-c.t;c.t=t;c.end+=d;c.words?.forEach(w=>{w.start+=d;w.end+=d})}
function persist(){try{localStorage.setItem('wunder-cues-v2',JSON.stringify(cues))}catch(e){$('status').textContent='Браузер не зберіг зміни. Завантаж розмітку JSON.'}}
function editor(){const root=$('editor');root.replaceChildren();cues.forEach((c,i)=>{let r=document.createElement('div');r.className='cue';r.id='row'+i;let n=document.createElement('span');n.textContent=i+1;let input=document.createElement('input');input.type='number';input.step='.05';input.min='0';input.value=c.t;input.setAttribute('aria-label','Час рядка '+(i+1));input.onchange=()=>{let a=structuredClone(cues);shiftCue(a[i],+input.value);if(valid(a)){cues=a;persist()}else{input.value=cues[i].t;$('status').textContent='Часи повинні зростати від рядка до рядка.'}};let text=document.createElement('span');text.textContent=c.text;r.append(n,input,text);root.append(r)})}
function mark(){if(tapIndex<0||tapIndex>=cues.length)return;let t=+audio.currentTime.toFixed(2);if(tapIndex>0&&t<=cues[tapIndex-1].t)return;shiftCue(cues[tapIndex],t);tapIndex++;if(valid(cues))persist();editor();$('nextCue').textContent=tapIndex<cues.length?'Наступний: '+cues[tapIndex].text:'Усі рядки розмічено.'}
$('tapStart').onclick=()=>{tapIndex=0;audio.currentTime=0;$('nextCue').textContent='Наступний: '+cues[0].text;play()};$('tap').onclick=mark;document.addEventListener('keydown',e=>{if(e.target.tagName==='INPUT')return;if(e.code==='Enter'&&tapIndex>=0){e.preventDefault();mark()}else if(e.code==='Space'){e.preventDefault();audio.paused?play():audio.pause()}});
function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),30000)}
$('saveTiming').onclick=()=>download(new Blob([JSON.stringify(cues,null,2)],{type:'application/json'}),'wunder-timing.json');$('importTiming').onchange=async e=>{try{let a=JSON.parse(await e.target.files[0].text());if(!valid(a))throw Error();cues=a;persist();editor();$('status').textContent='Розмітку завантажено.'}catch(err){$('status').textContent='Файл розмітки некоректний.'}e.target.value=''};$('resetTiming').onclick=()=>{cues=structuredClone(original);persist();editor()};
function stopRecording(){if(recorder?.state==='recording')recorder.stop();recording=false;$('export').textContent='Зберегти відео';$('seek').disabled=false;$('play').disabled=false;$('restart').disabled=false}
$('export').onclick=async()=>{if(recording){stopRecording();audio.pause();return}if(!window.MediaRecorder||!canvas.captureStream){$('status').textContent='Для запису відео відкрий файл у Chrome або Edge.';return}try{audio.pause();audio.currentTime=0;audioSetup();await ctx.resume();const stream=canvas.captureStream(30);for(const track of destination.stream.getAudioTracks())stream.addTrack(track);const mime=['video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm'].find(v=>MediaRecorder.isTypeSupported(v));if(!mime)throw Error();let parts=[];recorder=new MediaRecorder(stream,{mimeType:mime,videoBitsPerSecond:8000000});recorder.ondataavailable=e=>{if(e.data.size)parts.push(e.data)};recorder.onstop=()=>{download(new Blob(parts,{type:mime}),'Wunder-beginnen-mit-dir.webm');stream.getVideoTracks().forEach(t=>t.stop());$('status').textContent='Відео збережено у WebM.'};recorder.start(1000);recording=true;$('export').textContent='Завершити запис';$('seek').disabled=true;$('play').disabled=true;$('restart').disabled=true;await audio.play();$('status').textContent='Запис триває в реальному часі. Залиш цю вкладку видимою до кінця пісні (3:15).'}catch(e){stopRecording();$('status').textContent='Не вдалося почати запис у цьому браузері.'}};
editor();requestAnimationFrame(frame);
