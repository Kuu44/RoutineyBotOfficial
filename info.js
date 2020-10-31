/*
For easy navigation, go to folding level 2
(Atom: Ctrl+K then Ctrl+2; VS: Ctrl+M then Ctrl+O)
Then fold line 1 ^^

Subscribed Servers:
BCT075 550704758055370767: #routine 750431836827680898
kuu's Crib 544232674412462101: #server-mgmt 742020361440198750
BCT076 679306265674907671: #reminders 745136785666998303
bot-test-server 681076561142611989: #routiney-bot-test 750653645174997093
BCT074 705801042624905267: #routiney... 762874544393289728

Bot Log Channel: 763767420908732448

Message-link-Extraction-guide: https://discordapp.com/channels/<serverId>/<channelId>/<messageId>

Guide:

BCT074:
1. Operating System, :penguin: , AV;
2. Database Management System, :cd: , AS;
3. Object Oriented Analysis & Design, :technologist:, AT;
4. Artificial Intelligence, :robot: , BJ;
5. Embedded System, , SS;
6. Engineering Economics, , RK;
7. Embedded System, , LAB
8. Minor Project, , LAB;
9. Object Oriented Analysis & Design, , LAB

BCT075:
1. Instrumentation I,:control_knobs:;MB;
2. Applied Math;:construction_site:;SG;SKM;JG
3. Microprocessor;:robot:;DSB;
4. Numerical Methods;:bar_chart:;JRS,BDM;
5. Data Structure and Algorithm;:cd:;BS;
6. Discrete Structure;:calendar_spiral:;SPP;
7. Electric Machine;:satellite_orbital:;KBT;
8. Data Structure and Algorithm;:cd:;LAB;
9. Microprocessor;:robot:;LAB;
10. Instrumentation I,:control_knobs:;LAB;

kuus:
1. Instrumentation I,:control_knobs:;MB;
2. Applied Math;:construction_site:;SG;SKM;JG
3. Microprocessor;:robot:;DSB;
4. Numerical Methods;:bar_chart:;BDM;
5. Data Structure and Algorithm;:cd:;BS;
6. Discrete Structure;:calendar_spiral:;SPP;
7. Electric Machine;:satellite_orbital:;KBT;
8. Data Structure and Algorithm;:cd:;LAB;
9. Microprocessor;:robot:;LAB;
10. Instrumentation I,:control_knobs:;LAB;

BCT076:
0. Thermodynamics;:thermometer:; AKJ
1. Math II;:bar_chart: ; GG; JG; AKB; PA
2. Workshop Technology; :hammer:; NA
3. Chemistry;:lab_coat:; SP; RMS; AS; SJ
4. Basic Electronics Engineering;:control_knobs:; JKM; SST
5. Engineering Drawing;:triangular_ruler:; NA
6. Thermodynamics;:thermometer: ; LAB
7. Basic ElectrAonics Engineering;:control_knobs:; LAB
8. Chemistry;:lab_coat:;LAB

*/

const subjects = {
  "BCT074": [
    "Operating System", "Database Management System", "Object Oriented Analysis & Design",
    "Artificial Intelligence", "Embedded System", "Engineering Economics", "Minor Project"
  ],
  "BCT075": [
    "Numerical Methods", "Instrumentation I", "Applied Math", "Microprocessor",
    "Data Structure and Algorithm", "Discrete Structure", "Electric Machine"
  ],
  "BCT076": ["Thermodynamics", "Math II", "Workshop Technology", "Chemistry",
    "Basic Electronics Engineering", "Engineering Drawing"
  ]
}; //List of subjects
const emotes = {
  "BCT074": [
    ":penguin:", ":cd:", ":technologist:", ":robot:",
    ":control_knobs:",
    ":money_with_wings:",
    ":card_box:",
  ],
  "BCT075": [
    ":bar_chart:", ":control_knobs:", ":construction_site:", ":robot:",
    ":cd:", ":calendar_spiral:", ":satellite_orbital:"
  ],
  "BCT076": [":thermometer:", ":bar_chart:", ":hammer:", ":lab_coat:",
    ":control_knobs:", ":triangular_ruler:"
  ]
}; //List of emotes
const teachers = {
  "705801042624905267": ["AV", "AS", "BJ", "AT", "SS", "RK", "LAB OOAD","LAB ES","LAB Minor"], /*BCT 074*/
  "550704758055370767": ["SG", "MB", "SKM", "DSB", "BS", "SPP", "KBT", "BDM", "JG", "JRS", "LAB DSA","LAB M","LAB I1"], /*Collusion - BCT 075*/
  "544232674412462101": ["SG", "MB", "SKM", "DSB", "BS", "SPP", "KBT", "BDM", "JG", "JRS", "LAB DSA","LAB M","LAB I1"], /*kuus*/
  "681076561142611989": ["AV", "AS", "BJ", "AT", "SS", "RK", "LAB OOAD","LAB ES","LAB Minor"], /*bot-test-server*/
  "679306265674907671": ["AKJ", "GG", "NA", "SP", "JKM", "NA", "JG", "AKB", "PA", "RMS", "AS", "SJ", "SST", "Thermo LAB","Elex LAB","Chem LAB"] /*BCT 076*/
}; //List of teachers
const emotePNGs = {
  "BCT074": [

  ],
  "BCT075": [
    "https://hotemoji.com/images/dl/t/bar-chart-emoji-by-twitter.png",
    "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/55878/control-knobs-emoji-clipart-md.png",
    "https://hotemoji.com/images/dl/r/building-construction-emoji-by-twitter.png",
    "https://images.emojiterra.com/twitter/512px/1f916.png",
    "https://i.imgur.com/HyOwb0R.png",
    "https://images.emojiterra.com/twitter/512px/1f5d3.png",
    "https://i.imgur.com/XkqSXIE.png"
  ],
  "BCT076": [
    "https://www.emoji.co.uk/files/mozilla-emojis/objects-mozilla/11893-thermometer.png",
    "https://hotemoji.com/images/dl/t/bar-chart-emoji-by-twitter.png",
    "https://i.imgur.com/czFMa9Q.png",
    "https://hotemoji.com/images/dl/o/lab-coat-emoji-by-twitter.png",
    "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/55878/control-knobs-emoji-clipart-md.png",
    "https://i.imgur.com/b5KsQQx.png"
  ]
}; //List of emote pngs
const links={
  "BCT074":[
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ],
  "BCT075":[
    "https://teams.microsoft.com/l/team/19%3a6257e8acd83d44758d6df7bccbb81883%40thread.tacv2/conversations?groupId=51b43c86-df53-45c8-bba7-556e05f45c03",
    "https://teams.microsoft.com/l/team/19%3a7a9882eb20e248a6b9d0143e81fccc65%40thread.tacv2/conversations?groupId=3549f2dc-9e77-4f39-9be6-aff1828d1b4a",
    "https://teams.microsoft.com/l/team/19%3a1e20b9e246ba4f2da10c33b488a2fdcf%40thread.tacv2/conversations?groupId=9f4a1f15-833e-470a-b39c-781313247e0c",
    "https://teams.microsoft.com/l/team/19%3ab12cbe9a150645e4aad41b22410ce9e6%40thread.tacv2/conversations?groupId=57caad46-673f-44e4-bec7-5fe9c8ff6a68",
    "https://teams.microsoft.com/l/team/19%3a10c70277d1e34949a47329dd000dc9e3%40thread.tacv2/conversations?groupId=4aa11da9-fe91-461c-b161-d1c011fe543a",
    "https://teams.microsoft.com/l/team/19%3af4f626f4427f43a584046ae215591ab7%40thread.tacv2/conversations?groupId=2ce77637-42ea-4b9f-a827-48e22dfc4ac7",
    "https://teams.microsoft.com/l/team/19%3a0d0bb6e86a654cf1821979892e6e236d%40thread.tacv2/conversations?groupId=2266d84c-bf4e-4114-baec-04a1fa54fe03",
    "https://teams.microsoft.com/l/team/19%3a10c70277d1e34949a47329dd000dc9e3%40thread.tacv2/conversations?groupId=4aa11da9-fe91-461c-b161-d1c011fe543a",
    "https://teams.microsoft.com/l/team/19%3a1e20b9e246ba4f2da10c33b488a2fdcf%40thread.tacv2/conversations?groupId=9f4a1f15-833e-470a-b39c-781313247e0c",
    "https://teams.microsoft.com/l/team/19%3a6257e8acd83d44758d6df7bccbb81883%40thread.tacv2/conversations?groupId=51b43c86-df53-45c8-bba7-556e05f45c03"
],
  "BCT076":[
    "https://teams.microsoft.com/l/team/19%3a4486969f74494fac81eb77115ef7725d%40thread.tacv2/conversations?groupId=b942cd42-e0f9-459f-9401-3006fd6e332c",
    "https://teams.microsoft.com/l/team/19%3a514b02b5081c4ae7aeaefabb8fcd4a3b%40thread.tacv2/conversations?groupId=0bb66e89-f46b-4152-a81e-1b3b5289347e",
    "https://teams.microsoft.com/l/team/19%3aafa76b9c7868497a978faba7cfcede46%40thread.tacv2/conversations?groupId=b4a0d108-f6bf-4798-8e8b-92638f77a1cc",
    "https://teams.microsoft.com/l/team/19%3a2b23f588277248dc8378210e7ce347d9%40thread.tacv2/conversations?groupId=90552f5a-56ab-460d-8450-a726d2ae35e0",
    "https://teams.microsoft.com/l/team/19%3a1b343ca6b62945f2aca42c38da39bae0%40thread.tacv2/conversations?groupId=626601ba-56fc-4d56-ab9d-2d23a8f54e2a",
    "https://teams.microsoft.com/l/team/19%3a5219d385b3b34098ad3a71cedd89dc85%40thread.tacv2/conversations?groupId=3f150e53-2df5-42b1-98b1-1956aa34ccc5",
    "https://teams.microsoft.com/l/team/19%3a4486969f74494fac81eb77115ef7725d%40thread.tacv2/conversations?groupId=b942cd42-e0f9-459f-9401-3006fd6e332c",
    "https://teams.microsoft.com/l/team/19%3a1b343ca6b62945f2aca42c38da39bae0%40thread.tacv2/conversations?groupId=626601ba-56fc-4d56-ab9d-2d23a8f54e2a",
    "https://teams.microsoft.com/l/team/19%3a2b23f588277248dc8378210e7ce347d9%40thread.tacv2/conversations?groupId=90552f5a-56ab-460d-8450-a726d2ae35e0"
  ],
}
const info = {
  "705801042624905267" /*BCT074*/: {
    "notificationsON": false,
    "startNotification": false,
    "preNotification": true,
    "timeZoneFix": [5, 45],
    "className": "074 BCT AB",
    "classLogo": "https://i.imgur.com/Tlsi2Kj.png",
    "classLink": [
      links['BCT074'][0],
      links['BCT074'][1],
      links['BCT074'][3],
      "https://meet.google.com/pvy-qbad-rvq",
      links['BCT074'][4],
      links['BCT074'][5],
      links['BCT074'][4],
      "",
      "https://meet.google.com/pvy-qbad-rvq"
    ],
    "preTime": 10,
    "channelId": '762874544393289728', //BCT074: #routine
    "routine": [{
        "_emotes": [emotes['BCT074'][0], emotes['BCT074'][1], "", emotes['BCT074'][6], "END"],
        "_emotePNGs": [emotePNGs['BCT074'][0], emotePNGs['BCT074'][1], "", emotePNGs['BCT074'][6], "END"],
        "_periods": [subjects['BCT074'][0], subjects['BCT074'][1], "B", subjects['BCT074'][6], "END"],
        "_teachers": [teachers['705801042624905267'][0], teachers['705801042624905267'][1], "", teachers['705801042624905267'][8], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 55]
          ],
          [
            [11, 55],
            [13, 35]
          ],
          [
            [13, 35],
            [14, 25]
          ],
          [
            [14, 25],
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT074'][2], " ", emotes['BCT074'][6], emotes['BCT074'][0], "END"],
        "_emotePNGs": [emotePNGs['BCT074'][2], " ", emotePNGs['BCT074'][6], emotePNGs['BCT074'][0], "END"],
        "_periods": [subjects['BCT074'][2], "B", subjects['BCT074'][6], "Operating System/ :control_knobs: Embedded System", "END"],
        "_teachers": [teachers['705801042624905267'][6], " ", teachers['705801042624905267'][8], teachers['705801042624905267'][7], "END"],
        "_timing": [
          [
            [10, 15],
            [12, 45]
          ],
          [
            [12, 45],
            [13, 35]
          ],
          [
            [13, 35],
            [14, 25]
          ],
          [
            [14, 25],
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT074'][0], emotes['BCT074'][3], emotes['BCT074'][2], " ", emotes['BCT074'][4], emotes['BCT074'][1], emotes['BCT074'][4], "END"],
        "_emotePNGs": [emotePNGs['BCT074'][0], emotePNGs['BCT074'][3], emotePNGs['BCT074'][2], " ", emotePNGs['BCT074'][4], emotePNGs['BCT074'][1], emotePNGs['BCT074'][4], "END"],
        "_periods": [subjects['BCT074'][0], subjects['BCT074'][3], subjects['BCT074'][2], "B", subjects['BCT074'][4], subjects["BCT074"][1], subjects['BCT074'][4], "END"],
        "_teachers": [teachers['705801042624905267'][0], teachers['705801042624905267'][3], teachers['705801042624905267'][2], " ", teachers['705801042624905267'][4], teachers['705801042624905267'][1], teachers['705801042624905267'][4], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 5]
          ],
          [
            [11, 5],
            [11, 55]
          ],
          [
            [11, 55],
            [12, 45]
          ],
          [
            [12, 45],
            [13, 35]
          ],
          [
            [13, 35],
            [15, 15]
          ],
          [
            [15, 15],
            [16, 5]
          ],
          [
            [16, 5],
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT074'][2], emotes['BCT074'][1], emotes['BCT074'][3], emotes['BCT074'][0], "END"],
        "_emotePNGs": [emotePNGs['BCT074'][2], emotePNGs['BCT074'][1], emotePNGs['BCT074'][3], emotePNGs['BCT074'][0], "END"],
        "_periods": [subjects['BCT074'][2], subjects['BCT074'][1], subjects['BCT074'][3], subjects['BCT074'][0], "END"],
        "_teachers": [teachers['705801042624905267'][2], teachers['705801042624905267'][1], teachers['705801042624905267'][3], teachers['705801042624905267'][0], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 55]
          ],
          [
            [11, 55],
            [12, 45]
          ],
          [
            [12, 45],
            [13, 35]
          ],
          [
            [13, 35],
            [14, 25]
          ],
          [
            [14, 25],
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT074'][4], " ", emotes['BCT074'][5], " ", emotes['BCT074'][1], "END"],
        "_emotePNGs": [emotePNGs['BCT074'][4], " ", emotePNGs['BCT074'][5], " ", emotePNGs['BCT074'][1], "END"],
        "_periods": [subjects['BCT074'][4], " ", subjects['BCT074'][5], "B", subjects['BCT074'][1], "END"],
        "_teachers": [teachers['705801042624905267'][4], " ", teachers['705801042624905267'][5], " ", teachers['705801042624905267'][1], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 5]
          ],
          [
            [11, 5],
            [11, 55]
          ],
          [
            [11, 55],
            [13, 35]
          ],
          [
            [13, 35],
            [14, 25]
          ],
          [
            [14, 25],
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT074'][3], emotes['BCT074'][5], " ", emotes['BCT074'][3], "END"],
        "_emotePNGs": [emotePNGs['BCT074'][3], emotePNGs['BCT074'][5], " ", emotePNGs['BCT074'][3], "END"],
        "_periods": [subjects['BCT074'][3], subjects['BCT074'][5], "B", subjects['BCT074'][3], "END"],
        "_teachers": [teachers['705801042624905267'][5], teachers['705801042624905267'][3], " ", teachers['705801042624905267'][2], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 55]
          ],
          [
            [11, 55],
            [13, 35]
          ],
          [
            [13, 35],
            [14, 25]
          ],
          [
            [14, 25],
            [16, 55]
          ]
        ]
      }
    ]
  },
  "550704758055370767" /*The Collusion*/: {
    "notificationsON": true,
    "startNotification": true,
    "preNotification": true,
    "timeZoneFix": [5, 45],
    "className": "075 BCT AB",
    "classLogo": "https://i.imgur.com/OQwR8CB.png",
    "classLink": [
      links['BCT075'][1],
      "https://meet.google.com/qmn-ptqt-qer",
      "https://meet.google.com/una-kxfa-fvr",
      "https://meet.google.com/lookup/ektczkkltg",
      links['BCT075'][4],
      links['BCT075'][5],
      links['BCT075'][6],
      links['BCT075'][3],
      "https://us04web.zoom.us/j/2354011128?pwd=OGJCbzFIbVVpT0pvTTRUbTJPanhUZz09",
      links['BCT075'][3],
      links['BCT075'][7],
      links['BCT075'][2],
      links['BCT075'][0]
    ],
    "preTime": 15,
    "channelId": '750431836827680898', //The Collusion: #routine
    "routine": [{
        "_emotes": [emotes['BCT075'][0], emotes['BCT075'][1], "", emotes['BCT075'][2], emotes['BCT075'][0], "END"],
        "_emotePNGs": [emotePNGs['BCT075'][0], emotePNGs['BCT075'][1], "", emotePNGs['BCT075'][2], emotePNGs['BCT075'][0], "END"],
        "_periods": [subjects['BCT075'][0], subjects['BCT075'][1], "B", subjects['BCT075'][2], subjects['BCT075'][0], "END"],
        "_teachers": [teachers['550704758055370767'][0], teachers['550704758055370767'][1], "", teachers['550704758055370767'][0], teachers['550704758055370767'][9], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 55]
          ],
          [
            [11, 55],
            [13, 35]
          ],
          [
            [13, 35],
            [15, 15]
          ],
          [
            [15, 15],
            [16, 5]
          ],
          [
            [16, 5],
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT075'][3], emotes['BCT075'][0], "", emotes['BCT075'][2], " ", emotes['BCT075'][2], "END"],
        "_emotePNGs": [emotePNGs['BCT075'][3], emotePNGs['BCT075'][0], "", emotePNGs['BCT075'][2], "", emotePNGs['BCT075'][2], "END"],
        "_periods": [subjects['BCT075'][3], subjects['BCT075'][0], "B", subjects['BCT075'][2], " ", subjects['BCT075'][2], "END"],
        "_teachers": [teachers['550704758055370767'][3], teachers['550704758055370767'][7], " ", teachers['550704758055370767'][2], " ", teachers['550704758055370767'][9], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 55]
          ],
          [
            [11, 55],
            [12, 45]
          ],
          [
            [12, 45],
            [13, 35]
          ],
          [
            [13, 35],
            [14, 25]
          ],
          [
            [14, 25],
            [16, 0]
          ],
          [
            [16, 0],
            [17, 30]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT075'][4], emotes['BCT075'][5], " ", emotes['BCT075'][4], "END"],
        "_emotePNGs": [emotePNGs['BCT075'][4], emotePNGs['BCT075'][5], " ", emotePNGs['BCT075'][4], "END"],
        "_periods": [subjects['BCT075'][4], subjects['BCT075'][5], "B", subjects['BCT075'][4], "END"],
        "_teachers": [teachers['550704758055370767'][4], teachers['550704758055370767'][5], " ", teachers['550704758055370767'][4], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 55]
          ],
          [
            [11, 55],
            [13, 35]
          ],
          [
            [13, 35],
            [14, 25]
          ],
          [
            [14, 25],
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT075'][1], emotes['BCT075'][6], "", emotes['BCT075'][3], "END"],
        "_emotePNGs": [emotePNGs['BCT075'][1], emotePNGs['BCT075'][6], "", emotePNGs['BCT075'][3], "END"],
        "_periods": [subjects['BCT075'][1], subjects['BCT075'][6], "B", subjects['BCT075'][3], "END"],
        "_teachers": [teachers['550704758055370767'][1], teachers['550704758055370767'][6], " ", teachers['550704758055370767'][11], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 55]
          ],
          [
            [11, 55],
            [13, 35]
          ],
          [
            [13, 35],
            [14, 25]
          ],
          [
            [14, 25],
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT075'][6], emotes['BCT075'][5], " ", emotes['BCT075'][4], emotes['BCT075'][6], "END"],
        "_emotePNGs": [emotePNGs['BCT075'][6], emotePNGs['BCT075'][5], "", emotePNGs['BCT075'][4], emotePNGs['BCT075'][6], "END"],
        "_periods": [subjects['BCT075'][6], subjects['BCT075'][5], "B", subjects['BCT075'][4], " Electric Machine / :control_knobs: Instrumentation I", "END"],
        "_teachers": [teachers['550704758055370767'][6], teachers['550704758055370767'][5], " ", teachers['550704758055370767'][4], teachers['550704758055370767'][12], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 55]
          ],
          [
            [11, 55],
            [12, 45]
          ],
          [
            [12, 45],
            [13, 35]
          ],
          [
            [13, 35],
            [14, 25]
          ],
          [
            [14, 25],
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [" ", emotes['BCT075'][3], " ", emotes['BCT075'][2], "END"],
        "_emotePNGs": [" ", emotePNGs['BCT075'][3], " ", emotePNGs['BCT075'][2], "END"],
        "_periods": [" ", subjects['BCT075'][3], "B", subjects['BCT075'][2], "END"],
        "_teachers": [" ", teachers['550704758055370767'][3], " ", teachers['550704758055370767'][0], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 5]
          ],
          [
            [11, 5],
            [12, 45]
          ],
          [
            [12, 45],
            [13, 35]
          ],
          [
            [13, 35],
            [14, 25]
          ]
        ]
      }
    ]
  },
  "544232674412462101" /*kuu's*/: {
    "notificationsON": true,
    "startNotification": true,
    "preNotification": true,
    "timeZoneFix": [5, 45],
    "className": "075 BCT AB",
    "classLogo": "https://i.imgur.com/OQwR8CB.png",
    "classLink": [
      links['BCT075'][1],
      "https://meet.google.com/qmn-ptqt-qer",
      "https://meet.google.com/una-kxfa-fvr",
      "https://meet.google.com/lookup/ektczkkltg",
      links['BCT075'][4],
      links['BCT075'][5],
      links['BCT075'][6],
      links['BCT075'][3],
      "https://us04web.zoom.us/j/2354011128?pwd=OGJCbzFIbVVpT0pvTTRUbTJPanhUZz09",
      links['BCT075'][3],
      links['BCT075'][7],
      links['BCT075'][2],
      links['BCT075'][0]
    ],
    "preTime": 15,
    "channelId": '753515966759174264', //kuu's Crib: #routiney-notifications
    "routine": [{
        "_emotes": [emotes['BCT075'][0], emotes['BCT075'][1], "", emotes['BCT075'][2], emotes['BCT075'][0], "END"],
        "_emotePNGs": [emotePNGs['BCT075'][0], emotePNGs['BCT075'][1], "", emotePNGs['BCT075'][2], emotePNGs['BCT075'][0], "END"],
        "_periods": [subjects['BCT075'][0], subjects['BCT075'][1], "B", subjects['BCT075'][2], subjects['BCT075'][0], "END"],
        "_teachers": [teachers['550704758055370767'][0], teachers['550704758055370767'][1], "", teachers['550704758055370767'][0], teachers['550704758055370767'][9], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 55]
          ],
          [
            [11, 55],
            [13, 35]
          ],
          [
            [13, 35],
            [15, 15]
          ],
          [
            [15, 15],
            [16, 5]
          ],
          [
            [16, 5],
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT075'][3], emotes['BCT075'][0], "", emotes['BCT075'][2], " ", emotes['BCT075'][2], "END"],
        "_emotePNGs": [emotePNGs['BCT075'][3], emotePNGs['BCT075'][0], "", emotePNGs['BCT075'][2], "", emotePNGs['BCT075'][2], "END"],
        "_periods": [subjects['BCT075'][3], subjects['BCT075'][0], "B", subjects['BCT075'][2], " ", subjects['BCT075'][2], "END"],
        "_teachers": [teachers['550704758055370767'][3], teachers['550704758055370767'][7], " ", teachers['550704758055370767'][2], " ", teachers['550704758055370767'][9], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 55]
          ],
          [
            [11, 55],
            [12, 45]
          ],
          [
            [12, 45],
            [13, 35]
          ],
          [
            [13, 35],
            [14, 25]
          ],
          [
            [14, 25],
            [16, 0]
          ],
          [
            [16, 0],
            [17, 30]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT075'][4], emotes['BCT075'][5], " ", emotes['BCT075'][4], "END"],
        "_emotePNGs": [emotePNGs['BCT075'][4], emotePNGs['BCT075'][5], " ", emotePNGs['BCT075'][4], "END"],
        "_periods": [subjects['BCT075'][4], subjects['BCT075'][5], "B", subjects['BCT075'][4], "END"],
        "_teachers": [teachers['550704758055370767'][4], teachers['550704758055370767'][5], " ", teachers['550704758055370767'][4], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 55]
          ],
          [
            [11, 55],
            [13, 35]
          ],
          [
            [13, 35],
            [14, 25]
          ],
          [
            [14, 25],
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT075'][1], emotes['BCT075'][6], "", emotes['BCT075'][3], "END"],
        "_emotePNGs": [emotePNGs['BCT075'][1], emotePNGs['BCT075'][6], "", emotePNGs['BCT075'][3], "END"],
        "_periods": [subjects['BCT075'][1], subjects['BCT075'][6], "B", subjects['BCT075'][3], "END"],
        "_teachers": [teachers['550704758055370767'][1], teachers['550704758055370767'][6], " ", teachers['550704758055370767'][11], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 55]
          ],
          [
            [11, 55],
            [13, 35]
          ],
          [
            [13, 35],
            [14, 25]
          ],
          [
            [14, 25],
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT075'][6], emotes['BCT075'][5], " ", emotes['BCT075'][4], emotes['BCT075'][6], "END"],
        "_emotePNGs": [emotePNGs['BCT075'][6], emotePNGs['BCT075'][5], "", emotePNGs['BCT075'][4], emotePNGs['BCT075'][6], "END"],
        "_periods": [subjects['BCT075'][6], subjects['BCT075'][5], "B", subjects['BCT075'][4], " Electric Machine / :control_knobs: Instrumentation I", "END"],
        "_teachers": [teachers['550704758055370767'][6], teachers['550704758055370767'][5], " ", teachers['550704758055370767'][4], teachers['550704758055370767'][12], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 55]
          ],
          [
            [11, 55],
            [12, 45]
          ],
          [
            [12, 45],
            [13, 35]
          ],
          [
            [13, 35],
            [14, 25]
          ],
          [
            [14, 25],
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [" ", emotes['BCT075'][3], " ", emotes['BCT075'][2], "END"],
        "_emotePNGs": [" ", emotePNGs['BCT075'][3], " ", emotePNGs['BCT075'][2], "END"],
        "_periods": [" ", subjects['BCT075'][3], "B", subjects['BCT075'][2], "END"],
        "_teachers": [" ", teachers['550704758055370767'][3], " ", teachers['550704758055370767'][0], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 5]
          ],
          [
            [11, 5],
            [12, 45]
          ],
          [
            [12, 45],
            [13, 35]
          ],
          [
            [13, 35],
            [14, 25]
          ]
        ]
      }
    ]
  },
  "681076561142611989" /*bot-test-server*/: {
    "notificationsON": false,
    "startNotification": true,
    "preNotification": false,
    "timeZoneFix": [5, 45],
    "className": "Bot Test Server",
    "classLogo": "https://i.imgur.com/Tlsi2Kj.png",
    "classLink": [
      links['BCT074'][0],
      links['BCT074'][1],
      links['BCT074'][3],
      "https://meet.google.com/pvy-qbad-rvq",
      links['BCT074'][4],
      links['BCT074'][5],
      links['BCT074'][4],
      "",
      "https://meet.google.com/pvy-qbad-rvq"
    ],
    "preTime": 15,
    "channelId": '750653645174997093', //bot-test-server: #routiney-bot-test
    "routine": [{
        "_emotes": [emotes['BCT074'][0], emotes['BCT074'][1], "", emotes['BCT074'][6], "END"],
        "_emotePNGs": [emotePNGs['BCT074'][0], emotePNGs['BCT074'][1], "", emotePNGs['BCT074'][6], "END"],
        "_periods": [subjects['BCT074'][0], subjects['BCT074'][1], "B", subjects['BCT074'][6], "END"],
        "_teachers": [teachers['705801042624905267'][0], teachers['705801042624905267'][1], "", teachers['705801042624905267'][8], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 55]
          ],
          [
            [11, 55],
            [13, 35]
          ],
          [
            [13, 35],
            [14, 25]
          ],
          [
            [14, 25],
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT074'][2], " ", emotes['BCT074'][6], emotes['BCT074'][0], "END"],
        "_emotePNGs": [emotePNGs['BCT074'][2], " ", emotePNGs['BCT074'][6], emotePNGs['BCT074'][0], "END"],
        "_periods": [subjects['BCT074'][2], "B", subjects['BCT074'][6], "Operating System/ :control_knobs: Embedded System", "END"],
        "_teachers": [teachers['705801042624905267'][6], " ", teachers['705801042624905267'][8], teachers['705801042624905267'][7], "END"],
        "_timing": [
          [
            [10, 15],
            [12, 45]
          ],
          [
            [12, 45],
            [13, 35]
          ],
          [
            [13, 35],
            [14, 25]
          ],
          [
            [14, 25],
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT074'][0], emotes['BCT074'][3], emotes['BCT074'][2], " ", emotes['BCT074'][4], emotes['BCT074'][1], emotes['BCT074'][4], "END"],
        "_emotePNGs": [emotePNGs['BCT074'][0], emotePNGs['BCT074'][3], emotePNGs['BCT074'][2], " ", emotePNGs['BCT074'][4], emotePNGs['BCT074'][1], emotePNGs['BCT074'][4], "END"],
        "_periods": [subjects['BCT074'][0], subjects['BCT074'][3], subjects['BCT074'][2], "B", subjects['BCT074'][4], subjects["BCT074"][1], subjects['BCT074'][4], "END"],
        "_teachers": [teachers['705801042624905267'][0], teachers['705801042624905267'][3], teachers['705801042624905267'][2], " ", teachers['705801042624905267'][4], teachers['705801042624905267'][1], teachers['705801042624905267'][4], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 5]
          ],
          [
            [11, 5],
            [11, 55]
          ],
          [
            [11, 55],
            [12, 45]
          ],
          [
            [12, 45],
            [13, 35]
          ],
          [
            [13, 35],
            [15, 15]
          ],
          [
            [15, 15],
            [16, 5]
          ],
          [
            [16, 5],
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT074'][2], emotes['BCT074'][1], emotes['BCT074'][3], emotes['BCT074'][0], "END"],
        "_emotePNGs": [emotePNGs['BCT074'][2], emotePNGs['BCT074'][1], emotePNGs['BCT074'][3], emotePNGs['BCT074'][0], "END"],
        "_periods": [subjects['BCT074'][2], subjects['BCT074'][1], subjects['BCT074'][3], subjects['BCT074'][0], "END"],
        "_teachers": [teachers['705801042624905267'][2], teachers['705801042624905267'][1], teachers['705801042624905267'][3], teachers['705801042624905267'][0], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 55]
          ],
          [
            [11, 55],
            [12, 45]
          ],
          [
            [12, 45],
            [13, 35]
          ],
          [
            [13, 35],
            [14, 25]
          ],
          [
            [14, 25],
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT074'][4], " ", emotes['BCT074'][5], " ", emotes['BCT074'][1], "END"],
        "_emotePNGs": [emotePNGs['BCT074'][4], " ", emotePNGs['BCT074'][5], " ", emotePNGs['BCT074'][1], "END"],
        "_periods": [subjects['BCT074'][4], " ", subjects['BCT074'][5], "B", subjects['BCT074'][1], "END"],
        "_teachers": [teachers['705801042624905267'][4], " ", teachers['705801042624905267'][5], " ", teachers['705801042624905267'][1], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 5]
          ],
          [
            [11, 5],
            [11, 55]
          ],
          [
            [11, 55],
            [13, 35]
          ],
          [
            [13, 35],
            [14, 25]
          ],
          [
            [14, 25],
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT074'][3], emotes['BCT074'][5], " ", emotes['BCT074'][3], "END"],
        "_emotePNGs": [emotePNGs['BCT074'][3], emotePNGs['BCT074'][5], " ", emotePNGs['BCT074'][3], "END"],
        "_periods": [subjects['BCT074'][3], subjects['BCT074'][5], "B", subjects['BCT074'][3], "END"],
        "_teachers": [teachers['705801042624905267'][5], teachers['705801042624905267'][3], " ", teachers['705801042624905267'][2], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 55]
          ],
          [
            [11, 55],
            [13, 35]
          ],
          [
            [13, 35],
            [14, 25]
          ],
          [
            [14, 25],
            [16, 55]
          ]
        ]
      }
    ]
  },
  "679306265674907671": /*BCT076*/ {
    "notificationsON": true,
    "startNotification": false,
    "preNotification": true,
    "timeZoneFix": [5, 45],
    "className": "076 BCT AB",
    "classLogo": "https://media.discordapp.net/attachments/695687733330313286/753473074610831390/6738_WaddlingDuck.gif",
    "classLink": [
      links['BCT076'][0],
      links['BCT076'][1],
      links['BCT076'][2],
      links['BCT076'][3],
      "https://meet.google.com/lookup/arazctqqmw",
      links['BCT076'][6],
      "https://us04web.zoom.us/j/2354011128?pwd=OGJCbzFIbVVpT0pvTTRUbTJPanhUZz09",
      links['BCT076'][1],
      links['BCT076'][1],
      links['BCT076'][3],
      links['BCT076'][3],
      links['BCT076'][3],
      links['BCT076'][4],
      links['BCT076'][6],
      links['BCT076'][7],
      links['BCT076'][8]
    ],
    "preTime": 10,
    "channelId": '745136785666998303', //076-BCT-AB: #reminders
    "routine": [{
        "_emotes": [emotes['BCT076'][1], emotes['BCT076'][0], "END"],
        "_emotePNGs": [emotePNGs['BCT076'][1], emotePNGs['BCT076'][0], "END"],
        "_periods": [subjects['BCT076'][1], subjects['BCT076'][0], "END"],
        "_teachers": [teachers['679306265674907671'][1], teachers['679306265674907671'][0], "END"],
        "_timing": [
          [
            [11, 55],
            [12, 45]
          ],
          [
            [15, 00],
            [16, 30]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT076'][5], "END"],
        "_emotePNGs": [emotePNGs['BCT076'][5], "END"],
        "_periods": [subjects['BCT076'][5], "END"],
        "_teachers": [teachers['679306265674907671'][5], "END"],
        "_timing": [
          [
            [10, 15],
            [13, 35]
          ],
          [
            [13, 35],
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT076'][1], emotes['BCT076'][3], " ", emotes['BCT076'][3], emotes['BCT076'][0], "END"],
        "_emotePNGs": [emotePNGs['BCT076'][1], emotePNGs['BCT076'][3], " ", emotePNGs['BCT076'][3], emotePNGs['BCT076'][0], "END"],
        "_periods": [subjects['BCT076'][1], subjects['BCT076'][3], "B", subjects['BCT076'][3], " Thermodynamics/ :control_knobs: Basic Electronics Engineering", "END"],
        "_teachers": [teachers['679306265674907671'][6], teachers['679306265674907671'][3], " ", teachers['679306265674907671'][9], teachers['679306265674907671'][13], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 5]
          ],
          [
            [11, 5],
            [11, 55]
          ],
          [
            [11, 55],
            [13, 35]
          ],
          [
            [13, 35],
            [14, 25]
          ],
          [
            [14, 25],
            [16, 55]
          ]
        ]
      },
      {
        "_emotes": [" ", emotes['BCT076'][4], " ", emotes['BCT076'][0], "END"],
        "_emotePNGs": [" ", emotePNGs['BCT076'][4], " ", emotePNGs['BCT076'][0], "END"],
        "_periods": [" ", subjects['BCT076'][4], "B", subjects['BCT076'][0], "END"],
        "_teachers": [" ", teachers['679306265674907671'][4], " ", teachers['679306265674907671'][0], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 55]
          ],
          [
            [11, 55],
            [12, 45]
          ],
          [
            [12, 45],
            [14, 0],
          ],
          [
            [14, 0],
            [15, 40]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT076'][1], emotes['BCT076'][1], emotes['BCT076'][1], " ", emotes['BCT076'][3], "END"],
        "_emotePNGs": [emotePNGs['BCT076'][1], emotePNGs['BCT076'][1], emotePNGs['BCT076'][1], " ", emotePNGs['BCT076'][3], "END"],
        "_periods": [subjects['BCT076'][1], subjects['BCT076'][1], subjects['BCT076'][1], "B", subjects['BCT076'][3], "END"],
        "_teachers": [teachers['679306265674907671'][7], teachers['679306265674907671'][1], teachers['679306265674907671'][8], " ", teachers['679306265674907671'][10],  "END"],
        "_timing": [
          [
            [10, 15],
            [11, 5]
          ],
          [
            [11, 5],
            [11, 55]
          ],
          [
            [11, 55],
            [12, 45]
          ],
          [
            [12, 45],
            [13, 35]
          ],
          [
            [13, 35],
            [14, 25]
          ]
        ]
      },
      {
        "_emotes": [emotes['BCT076'][2], " ", emotes['BCT076'][4], emotes['BCT076'][3], " ", emotes['BCT076'][4], "END"],
        "_emotePNGs": [emotePNGs['BCT076'][2], " ", emotePNGs['BCT076'][4], emotePNGs['BCT076'][3], " ", emotePNGs['BCT076'][4], "END"],
        "_periods": [subjects['BCT076'][2], " ", subjects['BCT076'][4], subjects['BCT076'][3], "B", subjects['BCT076'][4], "END"],
        "_teachers": [teachers['679306265674907671'][2], " ", teachers['679306265674907671'][4], teachers['679306265674907671'][11], " ", teachers['679306265674907671'][12], "END"],
        "_timing": [
          [
            [10, 15],
            [11, 5]
          ],
          [
            [11, 5],
            [11, 55],
          ],
          [
            [11, 55],
            [13, 35]
          ],
          [
            [13, 35],
            [14, 25]
          ],
          [
            [14, 25],
            [14, 55]
          ],
          [
            [15, 00],
            [16, 15],
          ],
        ]
      }
    ]
  },
};
const helpers = {
  "days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  "Timing": [
    [
      [10, 15],
      [11, 5]
    ],
    [
      [11, 5],
      [11, 55]
    ],
    [
      [11, 55],
      [12, 45]
    ],
    [
      [12, 45],
      [13, 35]
    ],
    [
      [13, 35],
      [14, 25]
    ],
    [
      [14, 25],
      [15, 15]
    ],
    [
      [15, 15],
      [16, 5]
    ],
    [
      [16, 5],
      [16, 55]
    ]
  ]
};
module.exports = {
  info,
  helpers,
  teachers
};
