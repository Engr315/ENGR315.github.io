# Welcome to ENGR 315 

Spring 2021

## Description 

Welcome to E315!  

This course provides an introduction to hardware acceleration of software-based
applications. A more detailed description can be found in the
[syllabus](syllabus).

## Quick Links

### [Syllabus](syllabus.md)

### [Lecture Slides](https://github.com/engr315/lecture_slides) 

### [Other Downloads](https://github.com/Engr315/downloads) 

### [Autograder](https://autograder.sice.indiana.edu)

### [Canvas](https://iu.instructure.com/courses/1947790) _(Registered students only)_

### Zoom _(Requires students only)_ 

 - [Lecture](https://iu.zoom.us/j/82546848629) 
 - [Labs / Office Hours](https://iu.zoom.us/j/81368878668)

### [Slack](https://engr315.slack.com) 

### [Remote Setup](https://uisapp2.iu.edu/confluence-prd/pages/viewpage.action?pageId=280461906)

<!--
(https://docs.google.com/document/d/1GuOK0B6Irj_u6LjxMiwTBXgFvxtb-kuTXEFyj7-wQYI)
-->

[Pynq Network Setup](https://docs.google.com/document/d/1i-IbmVQ2isauEg50CN2s8E3xESR1mAaM4FTGclJopJ0)

## Projects
[P1 -
Circles](https://docs.google.com/document/d/19RJuI36xUifk_I7YlBeY-k063Gj4gJEuyoTRnWqXUlA/edit)

[P2 -
Correlation](https://docs.google.com/document/d/1OnPW7GvSvcdtVuDCgDzKF1uvwplZkn-wKnNfx14_LTQ)

[P3 -
EMA](https://docs.google.com/document/d/1fSf7-kz0epFUMWitFE677ZyorHz32iaVw1Fr9xNovXY)

[P4 - Popcount (MMIO)
](https://docs.google.com/document/d/1e4g7aX_v0s9yUcmW9FqVyLte9nAd2dtLZZM_io3QJoE)

[P5 - Popcount II (DMA)
](https://docs.google.com/document/d/1iBitsh12hDeSGUTO_jiZeCMJVmmj8hG7AxZ9hmOcjGU)

[P6 - Dot Product
](https://docs.google.com/document/d/1T3A0i9VGbKmthQHFEh_VQp2VmV2zO4Fyx23BCP6mLYk)

[P7 - Accel Dot
](https://docs.google.com/document/d/1HjL1aAhHEbYOBpOYRTyEmPGJ3vP-4qZ5IslJoXBLhhk)

<!--
[P1 - Blinking LEDs](https://docs.google.com/document/d/1WEp6INc_Z_96oKV1LKEZmKhYWgL1gWm5W6eo9B1y3hA)
-->

<!--
[P2 - Mega Multiply](https://docs.google.com/document/d/1f7u7QJJ32AM1liW9sximbdjBCLsJNu3DhcO3tE-Fcyc)
-->
<!--
[P3 - Exp. Moving Average](https://docs.google.com/document/d/1e9pKW8jmkTzBqklJmH242OeL7Ld5hEkfb25EU77XLDM)

[P4 - Bitcounting](https://docs.google.com/document/d/1RNPc4r2bKhwEj0n96p_kqQbENdzikBAGi6dRorFOlvU)

[PX - Accelerating Machine Learning](https://docs.google.com/document/d/1UphnXadOCnuIDnqv7KrRn8DV3CH7Q90x0BT59jAW-FI) 
-->

## Course Schedule

This is the tentative schedule for this semester.
                                                        
| Date  |   Day     | Number| Lecture Topic             |  Project Topic        | 
| --    |  -----    | --    |  -----                    |     -----             | 
| 1/19  | Tuesday   | 00    | Introduction              |                       |
| 1/21  | Thursday  | 01    | Performance Profiling     | P1 Circles            |
| 1/26  | Tuesday   | 02    | Algorithm Performance I   |                       |
| 1/28  | Thursday  | 03    | Algorithm Performance II  | P1 Circles            | 
| 2/02  | Tuesday   | 04    | Partitioning              |                       |
| 2/04  | Thursday  | 05    | Interfaces                | P2 Correlation        |
| 2/09  | Tuesday   | 06    | Multicore I               |                       |
| 2/11  | Thursday  | 07    | Multicore II              | P2 Correlation        |
| 2/16  | Tuesday   | -     | WELLNESS DAY              |                       |
| 2/18  | Thursday  | 08    | On-Chip Buses I           | P3 Exp. Moving Average|    
| 2/23  | Tuesday   | 09    | Memory-Mapped I/O         |                       |
| 2/25  | Thursday  | 10    | On-Chip Buses II          | P3 Exp. Moving Average|
| 3/02  | Tuesday   | 11    | Direct Memory Access I    |                       |
| 3/04  | Thursday  | 12    | Direct Memory Access II   | P4 Bit Counting (MMIO)|
| 3/09  | Tuesday   | 13    | Direct Memory Access III  |                       |
| 3/11  | Thursday  | 14    | Direct Memory Access IV   | P4 Bit Counting (MMIO)|    
| 3/16  | Tuesday   | -     | Review                    |                       |
| 3/18  | Thursday  | 15    | Memory Management I       | P4 Bit Counting (MMIO)|
| 3/23  | Tuesday   | 16    | Exam                      |                       |
| 3/25  | Thursday  | 17    | Memory Management II      | P4 Bit Counting (DMA) |
| 3/30  | Tuesday   | 18    | C / Linux Interfacing I   |                       |
| 4/01  | Thursday  | 19    | C / Linux Interfacing II  | P4 Bit Counting (DMA) |
| 4/06  | Tuesday   | 20    | Hardware Acceleration I   |                       |
| 4/08  | Thursday  | 21    | Hardware Acceleration II  | P5 Dot Product        |
| 4/13  | Tuesday   | 22    | Hardware Acceleration III |                       |
| 4/15  | Thursday  | 23    | Linux Kernel I            | P5 Dot Product        |
| 4/20  | Tuesday   | 24    | Linux Kernel II           |                       |
| 4/22  | Thursday  | -     | WELLNESS DAY              | PX ML Inference       |
| 4/20  | Tuesday   | 25    | Linux Kernel III          |                       | 
| 4/27  | Thursday  | 26    | Optimization Approaches   | PX ML Inference       | 
| 4/29  | Tuesday   | 27    | Overflow                  |                       |
| 5/X   | XXX       | -     | PX Final Report Due       |                       | 
