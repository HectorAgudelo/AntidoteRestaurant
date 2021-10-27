import React from 'react';

export const Logo = ({ color, width, height, viewBox }) => {
  return (
    <svg
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox={viewBox}
      preserveAspectRatio='xMidYMid meet'
    >
      <g
        transform='translate(0.000000,1024.000000) scale(0.100000,-0.100000)'
        fill={color}
        stroke='none'
      >
        <path
          d='M4800 10230 c-1015 -67 -1966 -420 -2770 -1028 -1684 -1275 -2412
-3455 -1834 -5487 94 -330 199 -595 364 -920 246 -486 553 -909 945 -1300 661
-661 1479 -1123 2380 -1345 1047 -258 2136 -182 3145 221 189 75 536 249 722
362 1052 637 1831 1611 2217 2775 344 1032 346 2179 6 3207 -440 1332 -1396
2420 -2658 3025 -547 262 -1119 418 -1757 480 -149 14 -601 20 -760 10z m590
-40 c1484 -85 2824 -788 3735 -1960 976 -1256 1303 -2905 884 -4454 -174 -642
-500 -1286 -917 -1810 -787 -990 -1898 -1648 -3137 -1856 -476 -79 -946 -91
-1435 -34 -996 115 -1937 529 -2715 1193 -135 115 -419 400 -539 541 -1077
1260 -1473 2945 -1070 4553 351 1403 1293 2592 2589 3268 416 216 828 362
1335 469 372 79 856 113 1270 90z'
        />
        <path
          d='M4885 9964 c-317 -23 -464 -40 -675 -80 -1287 -241 -2428 -998 -3167
-2099 -229 -342 -456 -814 -583 -1210 -240 -754 -294 -1554 -159 -2349 170
-998 671 -1944 1411 -2661 804 -780 1800 -1242 2933 -1361 227 -24 711 -24
940 0 849 88 1616 368 2300 840 798 550 1425 1339 1778 2236 163 416 254 786
314 1270 25 207 25 829 0 1045 -74 627 -236 1172 -505 1700 -673 1319 -1912
2268 -3352 2569 -175 36 -394 69 -575 86 -114 11 -572 21 -660 14z m600 -164
c407 -35 752 -105 1125 -230 580 -193 1077 -472 1565 -879 121 -100 461 -442
564 -566 632 -763 995 -1635 1093 -2630 16 -169 16 -683 0 -845 -106 -1029
-482 -1912 -1139 -2676 -412 -479 -923 -872 -1498 -1154 -550 -269 -1105 -421
-1719 -470 -166 -13 -556 -13 -722 0 -907 72 -1760 393 -2479 934 -337 253
-697 615 -957 961 -664 887 -1002 2023 -928 3127 77 1151 542 2196 1340 3012
819 838 1879 1331 3050 1419 109 8 596 6 705 -3z'
        />
        <path
          d='M5931 7411 c-1 -24 -1 -24 -22 -5 -22 19 -22 19 -11 -1 5 -11 20 -29
31 -39 21 -19 22 -19 48 5 l26 24 -18 -32 c-12 -20 -24 -29 -34 -26 -13 4 -13
2 1 -10 18 -14 13 -32 -5 -20 -6 4 -23 8 -37 9 -21 3 -22 1 -7 -7 9 -6 17 -22
18 -37 0 -26 1 -26 9 -5 6 15 15 21 25 17 9 -4 15 -1 15 8 0 8 5 19 12 26 14
14 39 104 31 112 -3 3 -17 -10 -32 -28 l-28 -33 -10 33 c-9 28 -11 30 -12 9z'
        />
        <path
          d='M6015 7300 c-39 -31 -31 -38 23 -19 21 7 30 17 29 30 -2 25 -8 24
-52 -11z'
        />
        <path d='M5911 7224 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z' />
        <path
          d='M6171 7221 c-1 -13 -4 -21 -8 -18 -3 4 -12 -3 -18 -16 -9 -17 -9 -29
2 -56 15 -39 15 -42 4 -59 -6 -11 -15 -9 -42 7 -38 23 -54 27 -43 10 3 -6 24
-19 45 -28 l39 -18 -24 -26 c-22 -24 -27 -25 -62 -15 -21 5 -55 8 -75 5 -20
-3 -42 0 -48 6 -7 7 -8 4 -5 -9 7 -30 -10 -48 -33 -36 -12 7 -25 7 -34 1 -25
-16 -45 -11 -23 6 11 9 13 14 5 13 -24 -5 -58 -42 -49 -55 11 -13 4 -18 -39
-28 -29 -6 -33 -4 -33 14 0 14 6 21 19 21 11 0 23 5 27 11 5 8 -1 10 -20 7
-19 -4 -29 -1 -33 10 -5 13 -8 12 -19 -3 -17 -23 -49 -12 -39 13 4 9 10 31 13
47 2 17 10 37 18 45 12 15 14 19 14 41 0 8 4 9 13 0 8 -6 17 -8 20 -4 4 3 7
-3 7 -15 0 -11 5 -24 10 -27 6 -3 10 -22 10 -42 l0 -35 20 23 c17 21 21 22 30
9 6 -9 10 -10 10 -3 0 6 -5 15 -10 18 -6 4 -8 16 -5 28 6 21 6 22 -9 3 -15
-19 -16 -19 -16 10 0 41 9 48 34 27 21 -18 21 -18 4 3 -10 11 -18 32 -18 47 0
40 -18 42 -26 2 -10 -56 -27 -42 -21 18 l6 52 -16 -45 c-11 -29 -18 -39 -21
-27 -5 26 -22 20 -35 -13 -13 -33 -22 -38 -31 -14 -3 8 -10 12 -16 9 -7 -4 -7
-12 0 -25 13 -25 13 -33 -2 -24 -10 6 -10 4 0 -7 6 -7 12 -31 12 -53 l0 -40
-30 29 c-16 16 -30 36 -31 44 0 12 -2 12 -6 3 -3 -8 10 -29 28 -48 37 -38 32
-56 -9 -33 -20 11 -28 26 -34 57 -9 52 -16 65 -34 58 -10 -4 -14 4 -15 27 l-1
32 -12 -29 -13 -29 -17 24 -18 24 4 -37 c2 -21 2 -38 0 -38 -3 0 -20 9 -38 21
-37 23 -46 13 -14 -16 11 -10 17 -22 14 -26 -3 -5 0 -9 5 -9 14 0 43 -70 37
-87 -9 -22 -23 -15 -35 17 -5 17 -12 30 -15 30 -10 0 0 -54 14 -80 l13 -24
-27 18 c-38 24 -44 13 -8 -13 42 -29 56 -27 48 7 -5 20 -4 23 4 12 9 -13 10
-13 11 0 1 8 1 18 0 23 -2 11 14 8 28 -5 10 -11 10 -7 1 17 -6 16 -16 35 -22
42 -16 20 -6 23 40 11 26 -6 44 -17 47 -29 4 -11 10 -19 15 -19 5 0 14 -9 20
-20 9 -17 8 -20 -9 -20 -11 0 -26 7 -35 15 -17 18 -29 6 -15 -15 5 -8 9 -21 9
-29 0 -11 -6 -9 -22 5 l-23 19 19 -22 c21 -25 36 -22 36 9 0 17 2 18 15 8 22
-18 18 -49 -7 -59 -16 -6 -18 -10 -8 -16 8 -5 18 -1 27 11 11 16 17 17 34 6
37 -24 112 -32 137 -16 12 8 22 19 22 25 0 8 -5 7 -15 -1 -9 -7 -30 -14 -49
-16 -39 -5 -60 15 -62 58 -1 29 -1 29 18 8 10 -11 28 -20 39 -20 16 0 20 -5
15 -17 -4 -12 0 -10 10 5 9 12 27 22 40 22 13 0 24 5 24 10 0 12 27 13 34 1 3
-5 -1 -25 -9 -45 -31 -73 -8 -126 54 -126 23 0 30 -6 35 -27 8 -30 -11 -86
-28 -80 -6 2 -13 14 -14 28 -7 45 -22 44 -23 -2 -1 -36 -2 -39 -9 -19 -7 23
-8 24 -15 6 -8 -18 -10 -16 -22 15 l-13 34 3 -31 c3 -33 -10 -53 -31 -46 -8 2
-12 -2 -10 -9 3 -16 -21 -54 -72 -111 -31 -34 -48 -44 -84 -47 -5 -1 -6 -4 -3
-8 9 -8 -32 -53 -49 -53 -18 0 -54 49 -54 74 0 12 8 33 17 46 12 17 13 21 3
13 -8 -6 -19 -13 -25 -15 -5 -1 -9 -9 -9 -15 1 -7 -5 -13 -13 -13 -9 0 -12 6
-9 18 4 13 -5 30 -26 53 -18 20 -41 50 -51 68 -24 45 -33 32 -13 -19 9 -22 12
-40 8 -40 -4 -1 5 -8 21 -16 29 -16 36 -48 12 -58 -10 -3 -15 1 -15 12 0 9 -9
23 -20 30 -17 10 -20 10 -20 -2 0 -8 5 -18 10 -21 6 -4 8 -10 5 -15 -5 -9 45
-24 80 -25 12 0 19 -6 17 -16 -1 -8 9 -26 23 -39 28 -26 33 -45 10 -36 -10 3
-15 -1 -15 -12 -1 -13 -4 -11 -15 8 l-14 25 -1 -32 c0 -18 -4 -33 -10 -33 -5
0 -10 -7 -10 -16 0 -8 -15 -21 -33 -29 -18 -7 -41 -23 -51 -34 -18 -20 -20
-20 -32 -3 -13 16 -13 16 -14 0 0 -13 -8 -18 -27 -19 -16 0 -37 -4 -48 -9 -18
-7 -16 -9 13 -15 17 -4 32 -10 32 -13 0 -3 -12 -21 -27 -41 -16 -20 -27 -39
-25 -44 1 -4 -27 -37 -63 -74 -84 -85 -91 -108 -88 -293 2 -146 7 -172 54
-287 7 -18 11 -34 9 -36 -8 -7 -316 -27 -411 -27 -69 0 -91 -4 -109 -18 l-23
-19 27 -154 c44 -241 115 -583 137 -657 26 -84 58 -140 104 -181 79 -69 145
-80 495 -82 382 -2 365 -15 460 356 116 449 158 629 153 662 -3 17 -16 41 -29
54 -28 26 -100 34 -421 47 -162 7 -217 12 -235 24 -32 21 -93 148 -112 234
-15 68 -13 166 4 189 4 6 10 23 14 39 10 40 35 75 66 91 24 13 80 99 80 124 0
35 100 101 152 101 15 0 29 10 39 29 14 23 21 27 46 24 18 -3 34 0 38 8 6 9 3
11 -8 6 -55 -21 -7 90 64 148 27 22 64 53 83 68 22 19 32 35 29 47 -6 23 44
31 89 13 31 -12 32 -12 11 3 -35 25 -28 31 30 30 59 -1 80 -13 103 -59 9 -16
30 -35 47 -42 18 -8 44 -25 59 -39 15 -14 31 -26 36 -26 5 0 30 16 56 35 25
20 46 33 46 29 0 -3 6 -1 14 5 11 9 15 8 20 -6 6 -15 9 -15 29 5 18 19 19 24
8 31 -8 5 -11 16 -8 25 11 28 -3 17 -15 -11 -9 -22 -12 -24 -15 -10 -3 9 -11
17 -19 17 -8 0 -14 6 -14 14 0 17 35 30 51 20 7 -4 9 -3 5 4 -3 5 0 13 6 15
10 4 10 6 1 6 -15 1 -18 41 -3 41 6 0 10 -5 10 -10 0 -6 18 -1 40 10 22 11 40
25 40 30 0 6 -13 4 -30 -5 -30 -15 -30 -15 -30 10 0 14 -4 25 -10 25 -5 0 -10
-10 -10 -22 0 -23 -1 -23 -14 2 -11 21 -10 28 3 44 12 14 13 20 4 23 -7 3 -13
14 -13 25 0 17 -3 18 -15 8 -11 -10 -15 -10 -15 0 0 6 -5 10 -12 8 -6 -2 -12
-25 -12 -53 -1 -34 -5 -49 -16 -52 -11 -3 -11 -2 -3 4 7 5 9 14 4 22 -5 7 -6
23 -4 35 3 14 2 17 -4 8 -6 -7 -17 -10 -27 -6 -16 6 -17 4 -7 -14 13 -24 -1
-30 -28 -13 -11 7 -11 15 -1 45 15 46 4 62 -12 18 -15 -38 -25 -41 -34 -7 -3
14 -10 25 -16 25 -9 0 -5 -22 13 -71 8 -20 15 -25 34 -21 23 4 24 3 13 -26
-10 -26 -15 -29 -27 -19 -12 10 -14 9 -8 -7 4 -10 2 -24 -3 -32 -9 -10 -18 -8
-47 12 -38 25 -53 30 -53 15 0 -5 16 -16 35 -25 l36 -17 -21 -30 c-27 -36 -54
-37 -77 -1 -10 15 -22 30 -28 34 -5 4 -10 40 -10 80 l0 73 -47 14 c-31 9 -50
22 -57 38 -14 30 -3 51 43 86 20 16 37 39 41 57 4 17 16 35 27 41 28 15 116 1
140 -23 20 -20 48 -18 48 2 0 6 -4 9 -9 6 -5 -4 -17 -3 -26 0 -14 6 -13 9 6
30 26 27 39 31 39 10 0 -28 20 -27 31 1 5 15 20 36 32 46 12 10 16 16 9 12
-10 -5 -12 4 -8 40 4 41 3 44 -10 28 -13 -17 -13 -17 -14 5 0 13 -4 20 -10 17
-6 -3 -10 4 -11 17 0 13 -4 32 -9 43 -8 19 -9 18 -9 -4z m-404 -143 c-3 -8 -6
-5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-207 -47 c0 -19 -3 -22 -11 -14
-6 6 -19 9 -28 6 -14 -4 -14 -3 -1 6 8 6 11 11 7 11 -4 0 -3 10 4 21 9 17 13
19 20 8 5 -8 9 -25 9 -38z m80 -81 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6
-1 10 4 10 6 0 11 -4 11 -10z m277 -7 c6 -16 -56 -28 -70 -14 -9 9 -8 14 3 22
19 12 62 7 67 -8z m383 -284 c0 -14 -7 -19 -27 -19 -16 0 -35 5 -43 11 -13 9
-13 10 2 6 9 -3 24 3 33 13 20 22 35 18 35 -11z m-93 -9 c3 -11 9 -17 14 -14
5 3 9 1 9 -5 0 -5 -6 -14 -13 -18 -7 -4 -18 -21 -25 -37 -11 -24 -10 -28 1
-23 10 4 13 -2 9 -21 l-5 -25 -18 22 c-10 13 -24 24 -31 25 -7 1 -19 5 -26 10
-26 16 -22 -2 4 -19 67 -43 101 -95 63 -95 -6 0 -8 4 -5 9 3 4 -6 7 -19 5 -40
-4 -94 15 -105 37 -9 16 -6 26 17 53 46 55 61 61 84 34 l19 -23 -10 28 c-9 24
-7 29 13 37 12 5 16 9 10 9 -16 1 -17 31 -2 31 6 0 13 -9 16 -20z m73 -40 c0
-5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m-42
-45 c-3 -24 -2 -42 3 -40 10 7 2 -36 -10 -48 -5 -5 -8 13 -6 45 3 76 4 88 11
88 4 0 4 -20 2 -45z m-698 -275 c0 -5 -5 -10 -11 -10 -7 0 -18 -8 -25 -17 -7
-10 -16 -15 -20 -11 -4 4 4 16 17 27 27 23 39 26 39 11z m312 -988 c35 -34 28
-106 -30 -332 -27 -107 -66 -273 -87 -367 -21 -95 -46 -187 -57 -203 -33 -55
-52 -58 -378 -51 -282 6 -297 7 -343 30 -55 26 -91 69 -117 138 -18 48 -59
238 -125 583 -19 102 -37 195 -40 208 l-5 22 579 -2 580 -3 23 -23z'
        />
        <path
          d='M5162 5114 c-26 -18 -28 -56 -7 -94 20 -36 19 -40 -26 -100 -56 -74
-108 -185 -116 -247 -5 -48 -4 -52 23 -69 25 -17 51 -19 249 -19 195 0 223 2
247 18 14 10 29 28 32 41 13 53 -50 197 -125 288 l-39 46 20 45 c22 49 16 89
-15 101 -9 3 -63 6 -119 6 -76 0 -107 -4 -124 -16z m256 -33 c2 -13 -6 -41
-17 -62 l-22 -38 50 -73 c57 -84 91 -164 91 -214 0 -57 -36 -66 -245 -62 -145
3 -175 6 -199 21 -25 17 -27 23 -21 55 8 50 76 189 113 232 l30 35 -26 52
c-39 78 -29 84 122 81 119 -3 121 -3 124 -27z'
        />
        <path
          d='M5859 7163 c-4 -26 5 -79 16 -106 12 -27 21 -23 16 7 -1 5 4 4 12 -2
12 -10 16 -7 21 19 11 54 8 66 -10 41 -20 -28 -34 -28 -34 1 0 18 2 19 10 7 6
-9 10 -10 10 -3 0 6 -7 19 -16 27 -17 18 -23 20 -25 9z'
        />
        <path
          d='M5601 7098 c0 -13 3 -17 6 -10 2 6 10 9 16 5 7 -4 6 1 -2 10 -18 22
-21 21 -20 -5z'
        />
        <path
          d='M5705 7060 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
-7 -4 -4 -10z'
        />
        <path
          d='M5650 6810 c-13 -9 -13 -10 0 -10 8 0 22 5 30 10 13 9 13 10 0 10 -8
0 -22 -5 -30 -10z'
        />
        <path d='M6064 6715 c11 -8 27 -15 35 -15 10 1 7 6 -9 15 -33 19 -50 18 -26 0z' />
        <path
          d='M5451 6653 c-13 -47 -14 -109 -2 -78 11 26 24 115 17 115 -3 0 -10
-17 -15 -37z'
        />
        <path
          d='M5281 6630 c0 -30 6 -66 13 -79 15 -28 22 -20 23 29 l2 35 -8 -30
c-8 -28 -9 -27 -11 15 -3 71 -19 96 -19 30z'
        />
        <path
          d='M5253 6607 c2 -47 1 -48 -23 -42 -24 6 -24 6 -5 -9 19 -16 19 -16 -7
-10 -46 10 -32 -14 15 -27 23 -6 52 -15 65 -20 24 -9 69 -13 61 -4 -3 2 -15 6
-28 8 -35 5 -61 34 -62 69 -1 18 -5 44 -10 58 -6 20 -8 15 -6 -23z'
        />
        <path
          d='M5170 6508 c14 -11 24 -25 22 -31 -2 -5 4 -7 12 -4 8 3 30 -3 50 -13
42 -21 48 -10 9 16 -73 48 -140 72 -93 32z'
        />
        <path d='M5928 6508 c6 -6 18 -8 28 -6 14 3 12 5 -9 10 -19 3 -25 2 -19 -4z' />
        <path d='M5988 6503 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z' />
        <path
          d='M5644 6296 c-10 -8 -16 -17 -13 -20 3 -3 14 3 24 14 21 23 17 26 -11
6z'
        />
        <path
          d='M9174 5400 c-71 -10 -129 -36 -182 -84 -93 -84 -100 -86 -256 -86
-78 0 -255 5 -394 10 -163 6 -333 6 -475 0 -122 -6 -316 -13 -432 -16 -115 -3
-220 -7 -232 -10 -20 -4 -23 -11 -23 -51 l0 -46 203 6 c111 4 475 12 808 19
692 13 686 14 789 -56 143 -98 381 -122 525 -55 66 31 80 57 80 149 0 102 -27
145 -117 188 -71 34 -184 46 -294 32z m195 -30 c106 -20 171 -70 191 -147 32
-131 -57 -198 -259 -194 -109 2 -222 25 -245 50 -21 23 -27 185 -7 219 32 59
196 96 320 72z'
        />
        <path
          d='M3777 5374 c-12 -12 -8 -42 6 -46 9 -4 447 -2 480 1 5 1 7 11 5 24
l-3 22 -241 3 c-132 1 -243 -1 -247 -4z'
        />
        <path
          d='M602 5260 c-38 -16 -23 -43 33 -62 28 -9 167 -30 309 -48 263 -32
286 -36 286 -50 0 -12 -77 -19 -321 -28 -188 -7 -220 -10 -250 -28 -43 -25
-49 -50 -15 -65 25 -12 395 -2 841 21 481 25 907 32 1165 18 333 -17 615 -17
632 0 23 23 -7 32 -173 53 -150 19 -192 29 -177 44 3 3 68 16 145 30 175 30
195 38 191 68 -3 22 -4 22 -153 20 -137 -2 -248 -12 -630 -60 -221 -27 -584
-20 -1095 23 -171 14 -631 57 -725 68 -22 3 -50 1 -63 -4z'
        />
        <path
          d='M6175 5180 c4 -6 122 -10 320 -10 198 0 316 4 320 10 4 7 -105 10
-320 10 -215 0 -324 -3 -320 -10z'
        />
        <path
          d='M3648 4988 c-26 -9 -44 -35 -32 -47 3 -3 83 -7 177 -8 95 -2 276 -7
402 -11 238 -9 265 -7 265 12 -1 36 -17 40 -187 47 -333 14 -598 17 -625 7z'
        />
        <path
          d='M1827 3692 c-10 -10 -17 -24 -17 -31 0 -12 -165 -292 -202 -341 -25
-34 -19 -56 16 -62 35 -7 41 -1 65 67 12 32 27 65 33 71 17 15 178 28 178 15
0 -6 6 -8 13 -5 15 5 47 -65 47 -104 0 -13 6 -25 13 -28 19 -7 67 13 67 29 0
7 -29 76 -64 152 -36 77 -73 166 -83 197 -19 62 -37 72 -66 40z m42 -152 c13
-33 22 -62 20 -64 -9 -7 -106 -14 -116 -8 -10 7 52 132 66 132 3 0 17 -27 30
-60z'
        />
        <path
          d='M5480 3700 c-5 -3 -10 -100 -11 -215 -2 -182 0 -210 14 -219 11 -7
23 -7 39 1 13 6 52 25 88 41 69 33 131 86 158 137 9 17 16 54 16 86 1 46 -4
62 -27 93 -44 57 -66 67 -172 75 -53 3 -100 4 -105 1z m190 -79 c49 -35 65
-112 36 -170 -27 -52 -145 -136 -164 -117 -3 3 -5 71 -5 152 -1 116 2 147 14
155 20 13 89 1 119 -20z'
        />
        <path
          d='M2722 3688 c-5 -7 -13 -85 -16 -173 -4 -88 -7 -176 -9 -195 -2 -34
-1 -35 33 -35 l35 0 -4 143 c-2 78 -1 142 2 142 3 0 48 -51 100 -112 170 -200
164 -194 183 -182 16 9 18 30 20 172 2 89 7 177 13 197 11 40 2 49 -41 43 -23
-3 -23 -6 -28 -148 l-5 -145 -128 153 c-71 83 -132 152 -137 152 -4 0 -12 -6
-18 -12z'
        />
        <path
          d='M3734 3691 c-2 -2 -4 -15 -4 -28 0 -25 5 -26 78 -23 l44 2 -4 -167
c-3 -145 -5 -168 -20 -179 -26 -19 -23 -21 26 -23 56 -2 71 14 62 67 -3 21 -3
98 0 170 l7 131 67 -2 c37 -1 73 1 79 5 12 8 15 46 4 47 -30 3 -335 3 -339 0z'
        />
        <path
          d='M6546 3675 c-72 -39 -107 -85 -126 -169 -29 -132 51 -235 183 -236
100 0 159 36 204 125 37 72 41 157 11 214 -34 67 -66 85 -151 89 -62 3 -78 0
-121 -23z m174 -54 c36 -25 50 -58 50 -119 0 -94 -61 -172 -135 -172 -53 0
-103 20 -129 51 -58 68 -19 216 62 239 20 5 44 14 52 19 19 13 69 3 100 -18z'
        />
        <path
          d='M7464 3691 c-2 -2 -4 -15 -4 -28 0 -25 6 -27 79 -24 l43 2 -3 -166
c-4 -146 -6 -168 -22 -180 -16 -11 -14 -13 18 -19 66 -13 71 -3 69 128 -1 64
0 143 3 176 l6 61 69 -2 c51 -2 72 2 79 12 12 19 11 26 -3 35 -12 7 -327 12
-334 5z'
        />
        <path
          d='M8430 3690 c-4 -3 -10 -97 -11 -209 l-3 -205 122 -1 c126 -2 139 1
138 40 -1 19 -7 20 -98 16 l-98 -3 0 70 0 71 73 3 c71 3 72 3 75 32 l4 29 -61
-6 c-73 -7 -97 8 -87 56 3 16 6 36 6 45 0 13 13 14 90 9 l90 -7 6 26 c4 14 4
27 1 30 -7 8 -235 11 -247 4z'
        />
        <path
          d='M4703 3679 c-6 -6 -8 -52 -6 -127 3 -64 1 -148 -5 -187 -11 -78 -1
-99 47 -93 l24 3 -1 200 c-1 110 -1 203 -2 208 0 11 -45 8 -57 -4z'
        />
      </g>
      {/* <path
        d='M4800 10230 c-1015 -67 -1966 -420 -2770 -1028 -1684 -1275 -2412 -3455 -1834 -5487 94 -330 199 -595 364 -920 246 -486 553 -909 945 -1300 661 -661 1479 -1123 2380 -1345 1047 -258 2136 -182 3145 221 189 75 536 249 722 362 1052 637 1831 1611 2217 2775 344 1032 346 2179 6 3207 -440 1332 -1396 2420 -2658 3025 -547 262 -1119 418 -1757 480 -149 14 -601 20 -760 10z m590 -40 c1484 -85 2824 -788 3735 -1960 976 -1256 1303 -2905 884 -4454 -174 -642 -500 -1286 -917 -1810 -787 -990 -1898 -1648 -3137 -1856 -476 -79 -946 -91
-1435 -34 -996 115 -1937 529 -2715 1193 -135 115 -419 400 -539 541 -1077
1260 -1473 2945 -1070 4553 351 1403 1293 2592 2589 3268 416 216 828 362
1335 469 372 79 856 113 1270 90z M4885 9964 c-317 -23 -464 -40 -675 -80 -1287 -241 -2428 -998 -3167
-2099 -229 -342 -456 -814 -583 -1210 -240 -754 -294 -1554 -159 -2349 170
-998 671 -1944 1411 -2661 804 -780 1800 -1242 2933 -1361 227 -24 711 -24
940 0 849 88 1616 368 2300 840 798 550 1425 1339 1778 2236 163 416 254 786
314 1270 25 207 25 829 0 1045 -74 627 -236 1172 -505 1700 -673 1319 -1912
2268 -3352 2569 -175 36 -394 69 -575 86 -114 11 -572 21 -660 14z m600 -164
c407 -35 752 -105 1125 -230 580 -193 1077 -472 1565 -879 121 -100 461 -442
564 -566 632 -763 995 -1635 1093 -2630 16 -169 16 -683 0 -845 -106 -1029
-482 -1912 -1139 -2676 -412 -479 -923 -872 -1498 -1154 -550 -269 -1105 -421
-1719 -470 -166 -13 -556 -13 -722 0 -907 72 -1760 393 -2479 934 -337 253
-697 615 -957 961 -664 887 -1002 2023 -928 3127 77 1151 542 2196 1340 3012
819 838 1879 1331 3050 1419 109 8 596 6 705 -3z M5931 7411 c-1 -24 -1 -24 -22 -5 -22 19 -22 19 -11 -1 5 -11 20 -29
31 -39 21 -19 22 -19 48 5 l26 24 -18 -32 c-12 -20 -24 -29 -34 -26 -13 4 -13
2 1 -10 18 -14 13 -32 -5 -20 -6 4 -23 8 -37 9 -21 3 -22 1 -7 -7 9 -6 17 -22
18 -37 0 -26 1 -26 9 -5 6 15 15 21 25 17 9 -4 15 -1 15 8 0 8 5 19 12 26 14
14 39 104 31 112 -3 3 -17 -10 -32 -28 l-28 -33 -10 33 c-9 28 -11 30 -12 9z M6015 7300 c-39 -31 -31 -38 23 -19 21 7 30 17 29 30 -2 25 -8 24
-52 -11z M5911 7224 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z M6171 7221 c-1 -13 -4 -21 -8 -18 -3 4 -12 -3 -18 -16 -9 -17 -9 -29
2 -56 15 -39 15 -42 4 -59 -6 -11 -15 -9 -42 7 -38 23 -54 27 -43 10 3 -6 24
-19 45 -28 l39 -18 -24 -26 c-22 -24 -27 -25 -62 -15 -21 5 -55 8 -75 5 -20
-3 -42 0 -48 6 -7 7 -8 4 -5 -9 7 -30 -10 -48 -33 -36 -12 7 -25 7 -34 1 -25
-16 -45 -11 -23 6 11 9 13 14 5 13 -24 -5 -58 -42 -49 -55 11 -13 4 -18 -39
-28 -29 -6 -33 -4 -33 14 0 14 6 21 19 21 11 0 23 5 27 11 5 8 -1 10 -20 7
-19 -4 -29 -1 -33 10 -5 13 -8 12 -19 -3 -17 -23 -49 -12 -39 13 4 9 10 31 13
47 2 17 10 37 18 45 12 15 14 19 14 41 0 8 4 9 13 0 8 -6 17 -8 20 -4 4 3 7
-3 7 -15 0 -11 5 -24 10 -27 6 -3 10 -22 10 -42 l0 -35 20 23 c17 21 21 22 30
9 6 -9 10 -10 10 -3 0 6 -5 15 -10 18 -6 4 -8 16 -5 28 6 21 6 22 -9 3 -15
-19 -16 -19 -16 10 0 41 9 48 34 27 21 -18 21 -18 4 3 -10 11 -18 32 -18 47 0
40 -18 42 -26 2 -10 -56 -27 -42 -21 18 l6 52 -16 -45 c-11 -29 -18 -39 -21
-27 -5 26 -22 20 -35 -13 -13 -33 -22 -38 -31 -14 -3 8 -10 12 -16 9 -7 -4 -7
-12 0 -25 13 -25 13 -33 -2 -24 -10 6 -10 4 0 -7 6 -7 12 -31 12 -53 l0 -40
-30 29 c-16 16 -30 36 -31 44 0 12 -2 12 -6 3 -3 -8 10 -29 28 -48 37 -38 32
-56 -9 -33 -20 11 -28 26 -34 57 -9 52 -16 65 -34 58 -10 -4 -14 4 -15 27 l-1
32 -12 -29 -13 -29 -17 24 -18 24 4 -37 c2 -21 2 -38 0 -38 -3 0 -20 9 -38 21
-37 23 -46 13 -14 -16 11 -10 17 -22 14 -26 -3 -5 0 -9 5 -9 14 0 43 -70 37
-87 -9 -22 -23 -15 -35 17 -5 17 -12 30 -15 30 -10 0 0 -54 14 -80 l13 -24
-27 18 c-38 24 -44 13 -8 -13 42 -29 56 -27 48 7 -5 20 -4 23 4 12 9 -13 10
-13 11 0 1 8 1 18 0 23 -2 11 14 8 28 -5 10 -11 10 -7 1 17 -6 16 -16 35 -22
42 -16 20 -6 23 40 11 26 -6 44 -17 47 -29 4 -11 10 -19 15 -19 5 0 14 -9 20
-20 9 -17 8 -20 -9 -20 -11 0 -26 7 -35 15 -17 18 -29 6 -15 -15 5 -8 9 -21 9
-29 0 -11 -6 -9 -22 5 l-23 19 19 -22 c21 -25 36 -22 36 9 0 17 2 18 15 8 22
-18 18 -49 -7 -59 -16 -6 -18 -10 -8 -16 8 -5 18 -1 27 11 11 16 17 17 34 6
37 -24 112 -32 137 -16 12 8 22 19 22 25 0 8 -5 7 -15 -1 -9 -7 -30 -14 -49
-16 -39 -5 -60 15 -62 58 -1 29 -1 29 18 8 10 -11 28 -20 39 -20 16 0 20 -5
15 -17 -4 -12 0 -10 10 5 9 12 27 22 40 22 13 0 24 5 24 10 0 12 27 13 34 1 3
-5 -1 -25 -9 -45 -31 -73 -8 -126 54 -126 23 0 30 -6 35 -27 8 -30 -11 -86
-28 -80 -6 2 -13 14 -14 28 -7 45 -22 44 -23 -2 -1 -36 -2 -39 -9 -19 -7 23
-8 24 -15 6 -8 -18 -10 -16 -22 15 l-13 34 3 -31 c3 -33 -10 -53 -31 -46 -8 2
-12 -2 -10 -9 3 -16 -21 -54 -72 -111 -31 -34 -48 -44 -84 -47 -5 -1 -6 -4 -3
-8 9 -8 -32 -53 -49 -53 -18 0 -54 49 -54 74 0 12 8 33 17 46 12 17 13 21 3
13 -8 -6 -19 -13 -25 -15 -5 -1 -9 -9 -9 -15 1 -7 -5 -13 -13 -13 -9 0 -12 6
-9 18 4 13 -5 30 -26 53 -18 20 -41 50 -51 68 -24 45 -33 32 -13 -19 9 -22 12
-40 8 -40 -4 -1 5 -8 21 -16 29 -16 36 -48 12 -58 -10 -3 -15 1 -15 12 0 9 -9
23 -20 30 -17 10 -20 10 -20 -2 0 -8 5 -18 10 -21 6 -4 8 -10 5 -15 -5 -9 45
-24 80 -25 12 0 19 -6 17 -16 -1 -8 9 -26 23 -39 28 -26 33 -45 10 -36 -10 3
-15 -1 -15 -12 -1 -13 -4 -11 -15 8 l-14 25 -1 -32 c0 -18 -4 -33 -10 -33 -5
0 -10 -7 -10 -16 0 -8 -15 -21 -33 -29 -18 -7 -41 -23 -51 -34 -18 -20 -20
-20 -32 -3 -13 16 -13 16 -14 0 0 -13 -8 -18 -27 -19 -16 0 -37 -4 -48 -9 -18
-7 -16 -9 13 -15 17 -4 32 -10 32 -13 0 -3 -12 -21 -27 -41 -16 -20 -27 -39
-25 -44 1 -4 -27 -37 -63 -74 -84 -85 -91 -108 -88 -293 2 -146 7 -172 54
-287 7 -18 11 -34 9 -36 -8 -7 -316 -27 -411 -27 -69 0 -91 -4 -109 -18 l-23
-19 27 -154 c44 -241 115 -583 137 -657 26 -84 58 -140 104 -181 79 -69 145
-80 495 -82 382 -2 365 -15 460 356 116 449 158 629 153 662 -3 17 -16 41 -29
54 -28 26 -100 34 -421 47 -162 7 -217 12 -235 24 -32 21 -93 148 -112 234
-15 68 -13 166 4 189 4 6 10 23 14 39 10 40 35 75 66 91 24 13 80 99 80 124 0
35 100 101 152 101 15 0 29 10 39 29 14 23 21 27 46 24 18 -3 34 0 38 8 6 9 3
11 -8 6 -55 -21 -7 90 64 148 27 22 64 53 83 68 22 19 32 35 29 47 -6 23 44
31 89 13 31 -12 32 -12 11 3 -35 25 -28 31 30 30 59 -1 80 -13 103 -59 9 -16
30 -35 47 -42 18 -8 44 -25 59 -39 15 -14 31 -26 36 -26 5 0 30 16 56 35 25
20 46 33 46 29 0 -3 6 -1 14 5 11 9 15 8 20 -6 6 -15 9 -15 29 5 18 19 19 24
8 31 -8 5 -11 16 -8 25 11 28 -3 17 -15 -11 -9 -22 -12 -24 -15 -10 -3 9 -11
17 -19 17 -8 0 -14 6 -14 14 0 17 35 30 51 20 7 -4 9 -3 5 4 -3 5 0 13 6 15
10 4 10 6 1 6 -15 1 -18 41 -3 41 6 0 10 -5 10 -10 0 -6 18 -1 40 10 22 11 40
25 40 30 0 6 -13 4 -30 -5 -30 -15 -30 -15 -30 10 0 14 -4 25 -10 25 -5 0 -10
-10 -10 -22 0 -23 -1 -23 -14 2 -11 21 -10 28 3 44 12 14 13 20 4 23 -7 3 -13
14 -13 25 0 17 -3 18 -15 8 -11 -10 -15 -10 -15 0 0 6 -5 10 -12 8 -6 -2 -12
-25 -12 -53 -1 -34 -5 -49 -16 -52 -11 -3 -11 -2 -3 4 7 5 9 14 4 22 -5 7 -6
23 -4 35 3 14 2 17 -4 8 -6 -7 -17 -10 -27 -6 -16 6 -17 4 -7 -14 13 -24 -1
-30 -28 -13 -11 7 -11 15 -1 45 15 46 4 62 -12 18 -15 -38 -25 -41 -34 -7 -3
14 -10 25 -16 25 -9 0 -5 -22 13 -71 8 -20 15 -25 34 -21 23 4 24 3 13 -26
-10 -26 -15 -29 -27 -19 -12 10 -14 9 -8 -7 4 -10 2 -24 -3 -32 -9 -10 -18 -8
-47 12 -38 25 -53 30 -53 15 0 -5 16 -16 35 -25 l36 -17 -21 -30 c-27 -36 -54
-37 -77 -1 -10 15 -22 30 -28 34 -5 4 -10 40 -10 80 l0 73 -47 14 c-31 9 -50
22 -57 38 -14 30 -3 51 43 86 20 16 37 39 41 57 4 17 16 35 27 41 28 15 116 1
140 -23 20 -20 48 -18 48 2 0 6 -4 9 -9 6 -5 -4 -17 -3 -26 0 -14 6 -13 9 6
30 26 27 39 31 39 10 0 -28 20 -27 31 1 5 15 20 36 32 46 12 10 16 16 9 12
-10 -5 -12 4 -8 40 4 41 3 44 -10 28 -13 -17 -13 -17 -14 5 0 13 -4 20 -10 17
-6 -3 -10 4 -11 17 0 13 -4 32 -9 43 -8 19 -9 18 -9 -4z m-404 -143 c-3 -8 -6
-5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-207 -47 c0 -19 -3 -22 -11 -14
-6 6 -19 9 -28 6 -14 -4 -14 -3 -1 6 8 6 11 11 7 11 -4 0 -3 10 4 21 9 17 13
19 20 8 5 -8 9 -25 9 -38z m80 -81 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6
-1 10 4 10 6 0 11 -4 11 -10z m277 -7 c6 -16 -56 -28 -70 -14 -9 9 -8 14 3 22
19 12 62 7 67 -8z m383 -284 c0 -14 -7 -19 -27 -19 -16 0 -35 5 -43 11 -13 9
-13 10 2 6 9 -3 24 3 33 13 20 22 35 18 35 -11z m-93 -9 c3 -11 9 -17 14 -14
5 3 9 1 9 -5 0 -5 -6 -14 -13 -18 -7 -4 -18 -21 -25 -37 -11 -24 -10 -28 1
-23 10 4 13 -2 9 -21 l-5 -25 -18 22 c-10 13 -24 24 -31 25 -7 1 -19 5 -26 10
-26 16 -22 -2 4 -19 67 -43 101 -95 63 -95 -6 0 -8 4 -5 9 3 4 -6 7 -19 5 -40
-4 -94 15 -105 37 -9 16 -6 26 17 53 46 55 61 61 84 34 l19 -23 -10 28 c-9 24
-7 29 13 37 12 5 16 9 10 9 -16 1 -17 31 -2 31 6 0 13 -9 16 -20z m73 -40 c0
-5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m-42
-45 c-3 -24 -2 -42 3 -40 10 7 2 -36 -10 -48 -5 -5 -8 13 -6 45 3 76 4 88 11
88 4 0 4 -20 2 -45z m-698 -275 c0 -5 -5 -10 -11 -10 -7 0 -18 -8 -25 -17 -7
-10 -16 -15 -20 -11 -4 4 4 16 17 27 27 23 39 26 39 11z m312 -988 c35 -34 28
-106 -30 -332 -27 -107 -66 -273 -87 -367 -21 -95 -46 -187 -57 -203 -33 -55
-52 -58 -378 -51 -282 6 -297 7 -343 30 -55 26 -91 69 -117 138 -18 48 -59
238 -125 583 -19 102 -37 195 -40 208 l-5 22 579 -2 580 -3 23 -23z M5162 5114 c-26 -18 -28 -56 -7 -94 20 -36 19 -40 -26 -100 -56 -74
-108 -185 -116 -247 -5 -48 -4 -52 23 -69 25 -17 51 -19 249 -19 195 0 223 2
247 18 14 10 29 28 32 41 13 53 -50 197 -125 288 l-39 46 20 45 c22 49 16 89
-15 101 -9 3 -63 6 -119 6 -76 0 -107 -4 -124 -16z m256 -33 c2 -13 -6 -41
-17 -62 l-22 -38 50 -73 c57 -84 91 -164 91 -214 0 -57 -36 -66 -245 -62 -145
3 -175 6 -199 21 -25 17 -27 23 -21 55 8 50 76 189 113 232 l30 35 -26 52
c-39 78 -29 84 122 81 119 -3 121 -3 124 -27z M5859 7163 c-4 -26 5 -79 16 -106 12 -27 21 -23 16 7 -1 5 4 4 12 -2
12 -10 16 -7 21 19 11 54 8 66 -10 41 -20 -28 -34 -28 -34 1 0 18 2 19 10 7 6
-9 10 -10 10 -3 0 6 -7 19 -16 27 -17 18 -23 20 -25 9z M5601 7098 c0 -13 3 -17 6 -10 2 6 10 9 16 5 7 -4 6 1 -2 10 -18 22
-21 21 -20 -5z M5705 7060 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
-7 -4 -4 -10z M5650 6810 c-13 -9 -13 -10 0 -10 8 0 22 5 30 10 13 9 13 10 0 10 -8
0 -22 -5 -30 -10z M6064 6715 c11 -8 27 -15 35 -15 10 1 7 6 -9 15 -33 19 -50 18 -26 0z M5451 6653 c-13 -47 -14 -109 -2 -78 11 26 24 115 17 115 -3 0 -10
-17 -15 -37z M5281 6630 c0 -30 6 -66 13 -79 15 -28 22 -20 23 29 l2 35 -8 -30
c-8 -28 -9 -27 -11 15 -3 71 -19 96 -19 30z M5253 6607 c2 -47 1 -48 -23 -42 -24 6 -24 6 -5 -9 19 -16 19 -16 -7
-10 -46 10 -32 -14 15 -27 23 -6 52 -15 65 -20 24 -9 69 -13 61 -4 -3 2 -15 6
-28 8 -35 5 -61 34 -62 69 -1 18 -5 44 -10 58 -6 20 -8 15 -6 -23z M5170 6508 c14 -11 24 -25 22 -31 -2 -5 4 -7 12 -4 8 3 30 -3 50 -13
42 -21 48 -10 9 16 -73 48 -140 72 -93 32z M5928 6508 c6 -6 18 -8 28 -6 14 3 12 5 -9 10 -19 3 -25 2 -19 -4z M5988 6503 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z M5644 6296 c-10 -8 -16 -17 -13 -20 3 -3 14 3 24 14 21 23 17 26 -11
6z M9174 5400 c-71 -10 -129 -36 -182 -84 -93 -84 -100 -86 -256 -86
-78 0 -255 5 -394 10 -163 6 -333 6 -475 0 -122 -6 -316 -13 -432 -16 -115 -3
-220 -7 -232 -10 -20 -4 -23 -11 -23 -51 l0 -46 203 6 c111 4 475 12 808 19
692 13 686 14 789 -56 143 -98 381 -122 525 -55 66 31 80 57 80 149 0 102 -27
145 -117 188 -71 34 -184 46 -294 32z m195 -30 c106 -20 171 -70 191 -147 32
-131 -57 -198 -259 -194 -109 2 -222 25 -245 50 -21 23 -27 185 -7 219 32 59
196 96 320 72z M3777 5374 c-12 -12 -8 -42 6 -46 9 -4 447 -2 480 1 5 1 7 11 5 24
l-3 22 -241 3 c-132 1 -243 -1 -247 -4z M602 5260 c-38 -16 -23 -43 33 -62 28 -9 167 -30 309 -48 263 -32
286 -36 286 -50 0 -12 -77 -19 -321 -28 -188 -7 -220 -10 -250 -28 -43 -25
-49 -50 -15 -65 25 -12 395 -2 841 21 481 25 907 32 1165 18 333 -17 615 -17
632 0 23 23 -7 32 -173 53 -150 19 -192 29 -177 44 3 3 68 16 145 30 175 30
195 38 191 68 -3 22 -4 22 -153 20 -137 -2 -248 -12 -630 -60 -221 -27 -584
-20 -1095 23 -171 14 -631 57 -725 68 -22 3 -50 1 -63 -4z M6175 5180 c4 -6 122 -10 320 -10 198 0 316 4 320 10 4 7 -105 10
-320 10 -215 0 -324 -3 -320 -10z M3648 4988 c-26 -9 -44 -35 -32 -47 3 -3 83 -7 177 -8 95 -2 276 -7
402 -11 238 -9 265 -7 265 12 -1 36 -17 40 -187 47 -333 14 -598 17 -625 7z M1827 3692 c-10 -10 -17 -24 -17 -31 0 -12 -165 -292 -202 -341 -25
-34 -19 -56 16 -62 35 -7 41 -1 65 67 12 32 27 65 33 71 17 15 178 28 178 15
0 -6 6 -8 13 -5 15 5 47 -65 47 -104 0 -13 6 -25 13 -28 19 -7 67 13 67 29 0
7 -29 76 -64 152 -36 77 -73 166 -83 197 -19 62 -37 72 -66 40z m42 -152 c13
-33 22 -62 20 -64 -9 -7 -106 -14 -116 -8 -10 7 52 132 66 132 3 0 17 -27 30
-60z M5480 3700 c-5 -3 -10 -100 -11 -215 -2 -182 0 -210 14 -219 11 -7
23 -7 39 1 13 6 52 25 88 41 69 33 131 86 158 137 9 17 16 54 16 86 1 46 -4
62 -27 93 -44 57 -66 67 -172 75 -53 3 -100 4 -105 1z m190 -79 c49 -35 65
-112 36 -170 -27 -52 -145 -136 -164 -117 -3 3 -5 71 -5 152 -1 116 2 147 14
155 20 13 89 1 119 -20z M2722 3688 c-5 -7 -13 -85 -16 -173 -4 -88 -7 -176 -9 -195 -2 -34
-1 -35 33 -35 l35 0 -4 143 c-2 78 -1 142 2 142 3 0 48 -51 100 -112 170 -200
164 -194 183 -182 16 9 18 30 20 172 2 89 7 177 13 197 11 40 2 49 -41 43 -23
-3 -23 -6 -28 -148 l-5 -145 -128 153 c-71 83 -132 152 -137 152 -4 0 -12 -6
-18 -12z M3734 3691 c-2 -2 -4 -15 -4 -28 0 -25 5 -26 78 -23 l44 2 -4 -167
c-3 -145 -5 -168 -20 -179 -26 -19 -23 -21 26 -23 56 -2 71 14 62 67 -3 21 -3
98 0 170 l7 131 67 -2 c37 -1 73 1 79 5 12 8 15 46 4 47 -30 3 -335 3 -339 0z M6546 3675 c-72 -39 -107 -85 -126 -169 -29 -132 51 -235 183 -236
100 0 159 36 204 125 37 72 41 157 11 214 -34 67 -66 85 -151 89 -62 3 -78 0
-121 -23z m174 -54 c36 -25 50 -58 50 -119 0 -94 -61 -172 -135 -172 -53 0
-103 20 -129 51 -58 68 -19 216 62 239 20 5 44 14 52 19 19 13 69 3 100 -18z M7464 3691 c-2 -2 -4 -15 -4 -28 0 -25 6 -27 79 -24 l43 2 -3 -166
c-4 -146 -6 -168 -22 -180 -16 -11 -14 -13 18 -19 66 -13 71 -3 69 128 -1 64
0 143 3 176 l6 61 69 -2 c51 -2 72 2 79 12 12 19 11 26 -3 35 -12 7 -327 12
-334 5z M8430 3690 c-4 -3 -10 -97 -11 -209 l-3 -205 122 -1 c126 -2 139 1
138 40 -1 19 -7 20 -98 16 l-98 -3 0 70 0 71 73 3 c71 3 72 3 75 32 l4 29 -61
-6 c-73 -7 -97 8 -87 56 3 16 6 36 6 45 0 13 13 14 90 9 l90 -7 6 26 c4 14 4
27 1 30 -7 8 -235 11 -247 4z M4703 3679 c-6 -6 -8 -52 -6 -127 3 -64 1 -148 -5 -187 -11 -78 -1
-99 47 -93 l24 3 -1 200 c-1 110 -1 203 -2 208 0 11 -45 8 -57 -4z'
        fill='#000000'
        stroke='none'
      /> */}
      ;
    </svg>
  );
};
