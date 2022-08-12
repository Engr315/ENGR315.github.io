# Welcome to ENGR 315 

Fall 2022

## Description 

Welcome to ENGR E315 (and CSCI B590)

This course provides an introduction to hardware/software interaction and using
hardware to accelerate software-based
applications. A more detailed description can be found in the
[syllabus](syllabus).

## Quick Links

### [Syllabus](syllabus.md)

### [Lecture Slides](https://github.com/engr315/lecture_slides) 

### [Other Downloads](https://github.com/Engr315/downloads) 

### [Autograder](https://ag.luddy.indiana.edu)

### [Canvas](https://iu.instructure.com/courses/2034331) _(Registered students only)_

<!-- ### [Slack](https://engr315.slack.com)  -->

### [Zoom](https://iu.zoom.us/j/82546848629)

**[Remote Setup](https://uisapp2.iu.edu/confluence-prd/pages/viewpage.action?pageId=280461906)**

**[Pynq Network Setup](https://docs.google.com/document/d/1i-IbmVQ2isauEg50CN2s8E3xESR1mAaM4FTGclJopJ0)**

## Projects

[P1 -
Circles](https://docs.google.com/document/d/19RJuI36xUifk_I7YlBeY-k063Gj4gJEuyoTRnWqXUlA/edit)

<!-- 
[P2 -
EMA](https://docs.google.com/document/d/1cfBDzoIlD9y3EHx-0Q9YKQ-T1hPvglZrRkxLdxBoPe4)

[P3 - Popcount (MMIO)
](https://docs.google.com/document/d/1wziNgmpn2tVlY3KJ_S0K1H8Fy0uqwUYXsahNDnxYBY0)

[P4 - Popcount in C
(MMIO)](https://docs.google.com/document/d/1a8_Wcze2owN2ul_ciEN7DqSM9JZB1u1Sy--n0qr1EiQ)

[P5 - DMA Popcount](https://docs.google.com/document/d/1iBitsh12hDeSGUTO_jiZeCMJVmmj8hG7AxZ9hmOcjGU)

[P6 - DMA Popcount in C](https://docs.google.com/document/d/1No0ThJH7IQrEZT4aiclMCTAKm2VETctFjFmX-5vdYks)

[P7 - Dot Product
](https://docs.google.com/document/d/1T3A0i9VGbKmthQHFEh_VQp2VmV2zO4Fyx23BCP6mLYk)

[P8 - Accel Dot
](https://docs.google.com/document/d/1HjL1aAhHEbYOBpOYRTyEmPGJ3vP-4qZ5IslJoXBLhhk)
-->

<!-- 
SP'2021
[P2 - Correlation](https://docs.google.com/document/d/1OnPW7GvSvcdtVuDCgDzKF1uvwplZkn-wKnNfx14_LTQ)
-->

<!--
SP'2020
[P1 - Blinking LEDs](https://docs.google.com/document/d/1WEp6INc_Z_96oKV1LKEZmKhYWgL1gWm5W6eo9B1y3hA)
[P2 - Mega Multiply](https://docs.google.com/document/d/1f7u7QJJ32AM1liW9sximbdjBCLsJNu3DhcO3tE-Fcyc)
[P3 - Exp. Moving Average](https://docs.google.com/document/d/1e9pKW8jmkTzBqklJmH242OeL7Ld5hEkfb25EU77XLDM)
[P4 - Bitcounting](https://docs.google.com/document/d/1RNPc4r2bKhwEj0n96p_kqQbENdzikBAGi6dRorFOlvU)
[PX - Accelerating Machine Learning](https://docs.google.com/document/d/1UphnXadOCnuIDnqv7KrRn8DV3CH7Q90x0BT59jAW-FI) 
-->

## Course Schedule

This is the tentative schedule for this semester.
                                                        
|  Date  |   Day     | Number| Lecture Topic             |  Project Topic        | 
|  --    |  -----    | --    |  -----                    |     -----             | 
| 08/22  | Monday    | 00    | Introduction              |                       |
| 08/24  | Wednesday | 01    | Performance Profiling     | P1 Circles (Py)       |
| 08/29  | Monday    | 02    | C Interfacing             |                       |
| 08/31  | Wednesday | 03    | Buses I                   | P2 Exp Mov Avg (C)    | 
| 09/05  | Monday    | 04    | Buses II                  |                       |
| 09/07  | Wednesday | 05    | MMIO I                    | P3 Exp Mov Avg (V)    |
| 09/12  | Monday    | 06    | MMIO II                   |                       |
| 09/14  | Wednesday | 06    | MMIO III                  | P4 MMIO Popcount (V)  |
| 09/19  | Monday    | 07    | Real Buses                |                       |
| 09/21  | Wednesday | 08    | High Performance Buses    | P4 MMIO Popcount (V)  |
| 09/26  | Monday    | 09    | Memory / Tristate         |                       |   
| 09/28  | Wednesday | 10    | C / Linux Interfacing I   | P5 Linux MMIO (C)     |
| 10/03  | Monday    | 11    | C / Linux Interfacing II  |                       |
| 10/05  | Wednesday |       | Overflow                  | P5 Linux MMIO (C)     |
| 10/10  | Monday    | 12    | Direct Memory Access I    |                       |
| 10/12  | Wednesday | 13    | Direct Memory Access II   | P6 DMA Popcount (V)   |
| 10/17  | Monday    | 14    | Parallel Hardware I       |                       |    
| 10/19  | Wednesday | 15    | Parallel Hardware II      | P6 DMA Popcount (V)   |
| 10/24  | Monday    | --    | Parallel Hardware III     |                       |
| 10/26  | Wednesday | --    | Parallel Hardware IV      | P7 Linux DMA (C)      |
| 10/31  | Monday    | 17    |                           |                       |
| 11/02  | Wednesday | 18    | Review                    | --                    |
| 11/07  | Monday    | 19    | Exam                      |                       |
| 11/09  | Wednesday | 20    | Linux Kernel II           | P8 Dot (V)            |
| 11/14  | Monday    | 21    | Linux Kernel III          |                       |
| 11/16  | Wednesday |       | Overflow                  | PX Accel Dot (V)      |
| 11/21  | Monday    |       | BREAK                     |                       |
| 11/23  | Wednesday |       | BREAK                     | PX Accel Dot (V)      |
| 11/28  | Monday    |       | PX Progress Reports       |                       |
| 11/30  | Wednesday |       | Overflow                  | PX Accel Dot (V)      | 
| 12/05  | Monday    |       | Overflow                  |                       | 
| 12/07  | Wednesday |       | Overflow                  | PX Accel Dot (V)      |
| 12/14  | Wednesday | -     | Final Report Due @ 10.00am|                       | 
